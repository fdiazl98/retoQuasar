<template>
  <div class="q-pa-md">
    <q-table
      title="Movimientos"
      :rows="rows"
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
            val="fechaHora"
            label="Fecha y Hora"
          />
          <q-toggle
            v-model="visibleColumns"
            val="id_tipoMovimiento"
            label="Id Tipo Movimiento"
          />
          <q-toggle
            v-model="visibleColumns"
            val="observaciones"
            label="Observaciones"
          />
          <q-toggle
            v-model="visibleColumns"
            val="id_producto"
            label="Id Producto"
          />
          <q-toggle v-model="visibleColumns" val="cantidad" label="Cantidad" />

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
    name: "fechaHora",
    align: "center",
    label: "Fecha y hora",
    field: "fechaHora",
    sortable: true,
  },
  {
    name: "id_tipoMovimiento",
    label: "Id tipo movimiento",
    field: "id_tipoMovimiento",
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
    name: "id_producto",
    label: "Id producto",
    field: "id_producto",
    sortable: true,
    align: "center",
  },
  {
    name: "id_bodega",
    label: "Id bodega",
    field: "id_bodega",
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

const rows = [
  {
    id: 1,
    fechaHora: "12-09-2021",
    id_tipoMovimiento: 6,
    observaciones: "solo relleno de la tabla mientras se espera por el JSON",
    id_producto: 11,
    id_bodega: 111,
    cantidad: 23,
  },
  {
    id: 1,
    fechaHora: "12-09-2021",
    id_tipoMovimiento: 6,
    observaciones: "solo relleno de la tabla mientras se espera por el JSON",
    id_producto: 11,
    id_bodega: 111,
    cantidad: 23,
  },
  {
    id: 1,
    fechaHora: "12-09-2021",
    id_tipoMovimiento: 6,
    observaciones: "solo relleno de la tabla mientras se espera por el JSON",
    id_producto: 11,
    id_bodega: 111,
    cantidad: 23,
  },
  {
    id: 1,
    fechaHora: "12-09-2021",
    id_tipoMovimiento: 6,
    observaciones: "solo relleno de la tabla mientras se espera por el JSON",
    id_producto: 11,
    id_bodega: 111,
    cantidad: 23,
  },
  {
    id: 1,
    fechaHora: "12-09-2021",
    id_tipoMovimiento: 6,
    observaciones: "solo relleno de la tabla mientras se espera por el JSON",
    id_producto: 11,
    id_bodega: 111,
    cantidad: 23,
  },
  {
    id: 1,
    fechaHora: "12-09-2021",
    id_tipoMovimiento: 6,
    observaciones: "solo relleno de la tabla mientras se espera por el JSON",
    id_producto: 11,
    id_bodega: 111,
    cantidad: 23,
  },
  {
    id: 1,
    fechaHora: "12-09-2021",
    id_tipoMovimiento: 6,
    observaciones: "solo relleno de la tabla mientras se espera por el JSON",
    id_producto: 11,
    id_bodega: 111,
    cantidad: 23,
  },
  {
    id: 1,
    fechaHora: "12-09-2021",
    id_tipoMovimiento: 6,
    observaciones: "solo relleno de la tabla mientras se espera por el JSON",
    id_producto: 11,
    id_bodega: 111,
    cantidad: 23,
  },
  {
    id: 1,
    fechaHora: "12-09-2021",
    id_tipoMovimiento: 6,
    observaciones: "solo relleno de la tabla mientras se espera por el JSON",
    id_producto: 11,
    id_bodega: 111,
    cantidad: 23,
  },
  {
    id: 1,
    fechaHora: "12-09-2021",
    id_tipoMovimiento: 6,
    observaciones: "solo relleno de la tabla mientras se espera por el JSON",
    id_producto: 11,
    id_bodega: 111,
    cantidad: 23,
  },
];

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
        "fechaHora",
        "id_tipoMovimiento",
        "Cantidad",
        "id_producto",
        "observaciones",
        "cantidad",
      ]),
      columns,
      rows,
      alert,
      mostrarModal,
      clickRow,
    };
  },
};
</script>
