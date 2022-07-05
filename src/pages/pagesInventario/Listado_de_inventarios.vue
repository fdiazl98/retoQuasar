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
        :rows="rows"
        :columns="columns"
        row-key="name"
        @row-click="clickRow"
      >
      </q-table>
    </div>

    <q-dialog v-model="mostrarModal" >
      <q-card>
        <div class="q-pa-md" style="max-width: 600px">
          <h5 style="width:500px">Editar</h5>
          <q-form class="q-gutter-md">
            <q-input filled v-model="text" label="Id articulo" hint="Id articulo"/>

            <q-input filled v-model="text" label="Id bodega" hint="Id bodega"  />

            <q-input filled v-model="text" label="Saldo" hint="Saldo" />

            <q-input
              filled
              v-model="text"
              label="Fecha ultimo movimiento"
              hint="Fecha ultimo movimiento"
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
    <!-- <q-btn label="prueba" @click="mostrarModal = true" /> -->
  </q-page>
</template>

<script>
const columns = [
  {
    name: "id_articulo",
    required: true,
    label: "Id articulo",
    align: "center",
    field: "id_articulo",
    sortable: true,
  },
  {
    name: "id_bodega",
    label: "Id bodega",
    align: "center",
    field: "id_bodega",
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
    name: "fechaUltimoMovimiento",
    label: "Fecha Ultimo Movimiento",
    align: "center",
    field: "fechaUltimoMovimiento",
    sortable: true,
  },
];

const rows = [
  {
    id_articulo: 1,
    id_bodega: 11,
    saldo: 1000,
    fechaUltimoMovimiento: "09-01-2021",
  },
  {
    id_articulo: 2,
    id_bodega: 112,
    saldo: 2000,
    fechaUltimoMovimiento: "09-01-2021",
  },
  {
    id_articulo: 3,
    id_bodega: 113,
    saldo: 3000,
    fechaUltimoMovimiento: "09-01-2021",
  },
  {
    id_articulo: 4,
    id_bodega: 114,
    saldo: 4000,
    fechaUltimoMovimiento: "09-01-2021",
  },
  {
    id_articulo: 5,
    id_bodega: 115,
    saldo: 5000,
    fechaUltimoMovimiento: "09-01-2021",
  },
  {
    id_articulo: 6,
    id_bodega: 116,
    saldo: 6000,
    fechaUltimoMovimiento: "09-01-2021",
  },
];

import { useQuasar } from "quasar";
import { ref } from "@vue/reactivity";

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
};
</script>
