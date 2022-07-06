<template>
  <q-page padding>
    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
        <!-- <q-input class="outlined" v-model="text" label="Outlined" />

        <q-input class="input input-sm" v-model="search" filled type="search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input> -->

        <q-input v-model="date" filled type="date" />
      </div>
      <q-btn label="Submit" type="submit" color="primary" margin-top="10px" />
    </div>

    <div class="q-pa-md">
      <q-table
        class="gutter-md"
        title="Listado inventarios"
        dense
        :rows="listado"
        :columns="columns"
        row-key="name"
        @row-click="clickRow"
      >
      </q-table>
    </div>

    <q-dialog v-model="mostrarModal">
      <q-card>
        <div class="q-pa-md" style="max-width: 600px">
          <h5 style="width: 500px">Editar</h5>
          <q-form class="q-gutter-md" @submit.prevent="CreateRow">
            <q-input
              filled
              v-model="fila.idArticulo"
              label="Id articulo"
              hint="Id articulo"
            />

            <q-input
              filled
              v-model="fila.idBodega"
              label="Id bodega"
              hint="Id bodega"
            />

            <q-input filled v-model="fila.saldo" label="Saldo" hint="Saldo" />

            <q-input
              filled
              v-model="fila.fechaultimomovimiento"
              hint="Fecha ultimo movimiento"
              type="date"
            />

            <div>
              <q-btn label="agregar" color="primary" type="submit" />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
                @click="mostrarModal = false"
              />
            </div>
          </q-form>
        </div>
      </q-card>
    </q-dialog>
    <!-- <q-btn label="prueba" @click="mostrarModal = true" /> -->
  </q-page>
</template>

<script>
let lista;
const columns = [
  {
    name: "idArticulo",
    required: true,
    label: "Id articulo",
    align: "center",
    field: "idArticulo",
    sortable: true,
  },
  {
    name: "idBodega",
    label: "Id bodega",
    align: "center",
    field: "idBodega",
    sortable: true,
  },
  {
    name: "saldo",
    label: "Saldo",
    align: "center",
    field: "saldo",
    sortable: true,
  },
  {
    name: "fechaultimomovimiento",
    label: "Fecha Ultimo Movimiento",
    align: "center",
    field: "fechaultimomovimiento",
    sortable: true,
  },
];

let rows = [];

import { useQuasar } from "quasar";
import { ref } from "@vue/reactivity";
import { mapActions } from "vuex";
import { api } from "boot/axios";

export default {
  setup() {
    // showEdit.value = false;
    const mostrarModal = ref(false);

    // const $q = useQuasar();
    const clickRow = (evt, row, index) => {
      // showEdit.value = false;
      console.log(row);
      mostrarModal.value = true;
    };

    return {
      columns,
      rows,
      date: "",
      search: "",
      mostrarModal,
      clickRow,
    };
  },

  data() {
    return {
      listado: [],
      fila: {
        idArticulo: "",
        idBodega: "",
        saldo: "",
        fechaultimomovimiento: "",
      },
      //     token:
      //       "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiUHJ1ZWJhNCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU3MTQ0NDcxfQ.TF5jQDuVbsI_SKG3wjLoFuwzAlizGDbNnrlxWwbwMFmaAlchbNMpon6Lm7UTVuA5ZLWNUU8lRQ9eH9NTLcN1vg",
    };
  },

  methods: {
    // ...mapActions("auth", ["getData"]),
    async submitForm() {
      await api.get("/api/Inventario/Get").then((response) => {
        console.log(
          "0========================prueba============================"
        );
        console.log(response.data);
        return (this.listado = response.data);
      });

      // rows=lista
    },

    async CreateRow() {
      console.log(this.fila);
      await api.post("api/Inventario/Crear", this.fila).then((response) => {
        console.log(response);
      });
    },
  },
  mounted() {
    this.submitForm();
  },
};
</script>
