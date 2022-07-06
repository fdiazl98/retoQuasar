<template>
  <div class="q-pa-md">
    <q-table
      title="Movimientos"
      :rows="listado"
      :columns="columns"
      row-key="name"
      :visible-columns="visibleColumns"
      @row-click="clickRow"
    >
      <template v-slot:top="props">
        <div class="col-2 q-table__title">Movimientos</div>

        <q-space />

        <div v-if="$q.screen.gt.xs" class="col">
          <q-toggle
            v-model="visibleColumns"
            val="fechahora"
            label="Fecha y Hora"
          />
          <q-toggle
            v-model="visibleColumns"
            val="idTipomovimiento"
            label="Id Tipo Movimiento"
          />
          <q-toggle
            v-model="visibleColumns"
            val="observaciones"
            label="Observaciones"
          />
          <q-toggle
            v-model="visibleColumns"
            val="idArticulo"
            label="Id Articulo"
          />
          <q-toggle v-model="visibleColumns" val="cantidad" label="Cantidad" />
          <q-toggle
            v-model="visibleColumns"
            val="idBodega"
            label="Id Bodega"
          />

          <!-- <q-toggle v-model="visibleColumns" val="iron" label="Iron" /> -->
        </div>

        <q-select
          v-else
          v-model="visibleColumns"
          multiple
          borderless
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          style="min-width: 150px"
        />

        <q-btn
          flat
          round
          dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />
      </template>
    </q-table>

    <q-dialog v-model="mostrarModal">
      <q-card>
        <div class="q-pa-md" style="max-width: 600px">
          <h5 style="width: 500px">Editar</h5>
          <q-form class="q-gutter-md">
            <q-input filled v-model="text" label="Id" hint="Id" />

            <q-input filled v-model="text" hint="Fecha y hora" type="date" />

            <q-input
              filled
              v-model="text"
              label="Id tipo movimiento"
              hint="Id tipo movimiento"
            />

            <q-input
              filled
              v-model="text"
              label="Observaciones"
              hint="Observaciones"
              type="textarea"
            />

            <q-input
              filled
              v-model="text"
              label="Id cantidad"
              hint="Id cantidad"
            />

            <q-input
              filled
              v-model="text"
              label="Cantidad"
              hint="Cantidad"
              type="number"
            />

            <div>
              <q-btn
                label="Salir"
                color="primary"
                @click="mostrarModal = false"
              />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { api } from "boot/axios";
import { ref } from "vue";

const columns = [
  {
    name: "id",
    required: true,
    label: "Id",
    align: "left",
    field: (row) => row.id,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "fechahora",
    align: "center",
    label: "Fecha y hora",
    field: "fechahora",
    sortable: true,
  },
  {
    name: "idTipomovimiento",
    label: "Id tipo movimiento",
    field: "idTipomovimiento",
    sortable: true,
    align: "center",
  },
  {
    name: "observaciones",
    label: "Observaciones",
    field: "observaciones",
    sortable: true,
    align: "center",
  },
  {
    name: "idArticulo",
    label: "Id Articulo",
    field: "idArticulo",
    sortable: true,
    align: "center",
  },
  {
    name: "idBodega",
    label: "Id bodega",
    field: "idBodega",
    align: "center",
  },
  {
    name: "cantidad",
    label: "Cantidad",
    field: "cantidad",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    align: "center",
  },
];

const rows = [];

export default {
  setup() {
    const mostrarModal = ref(false);

    // const $q = useQuasar();
    const clickRow = (evt, row, index) => {
      // showEdit.value = false;
      console.log(row);
      mostrarModal.value = true;
    };
    return {
      visibleColumns: ref([
        "fechahora",
        "idTipomovimiento",
        "cantidad",
        "idArticulo",
        "observaciones",
        "cantidad",
        "idBodega",
      ]),
      columns,
      rows,
      alert,
      mostrarModal,
      clickRow,
    };
  },

  data() {
    return {
      listado: [],
      //     token:
      //       "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiUHJ1ZWJhNCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU3MTQ0NDcxfQ.TF5jQDuVbsI_SKG3wjLoFuwzAlizGDbNnrlxWwbwMFmaAlchbNMpon6Lm7UTVuA5ZLWNUU8lRQ9eH9NTLcN1vg",
    };
  },

  methods: {
    // ...mapActions("auth", ["getData"]),
    async submitForm() {
      await api.get("/api/Movimiento/Get").then((response) => {
        console.log(
          "0========================prueba============================"
        );
        console.log(response.data);
        return (this.listado = response.data);
      });

      // rows=lista
    },
  },
  mounted() {
    this.submitForm();
  },
};
</script>
