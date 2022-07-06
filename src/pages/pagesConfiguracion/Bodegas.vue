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

    <q-dialog v-model="mostrarModal">
      <q-card>
        <div class="q-pa-md" style="max-width: 600px">
          <h5 style="width: 500px">Editar</h5>
          <q-form class="q-gutter-md">
            <q-input
              filled
              v-model="text"
              label="Id articulo"
              hint="Id articulo"
            />

            <q-input filled v-model="text" label="Id bodega" hint="Id bodega" />

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
    <!-- <q-btn
      label="mostrar"
      color="primary"
      type="submit"
      @click="submitForm"
    ></q-btn> -->
    <!-- <q-btn label="prueba" @click="mostrarModal = true" /> -->
  </q-page>
</template>

<script>
let lista;
const columns = [
  {
    name: "codigo",
    required: true,
    label: "codigo articulo",
    align: "center",
    field: "codigo",
    sortable: true,
  },
  {
    name: "descripcion",
    label: "Descripcion",
    align: "center",
    field: "descripcion",
    sortable: true,
  },
  {
    name: "fechacreacion",
    label: "Fecha de Creacion",
    align: "center",
    field: "fechacreacion",
    sortable: true,
  },
  {
    name: "fechamodificacion",
    label: "Fecha Modificacion",
    align: "center",
    field: "fechamodificacion",
    sortable: true,
  },
  {
    name: "foto",
    label: "Foto",
    align: "center",
    field: "foto",
    sortable: true,
  },
  {
    name: "id",
    label: "Id de articulo",
    align: "center",
    field: "id",
    sortable: true,
  },
];

let rows = [];

import { useQuasar } from "quasar";
import { ref } from "@vue/reactivity";
import { api } from "boot/axios";
import { mapActions } from "vuex";

export default {
  setup() {
    // showEdit.value = false;
    // submitForm();
    const mostrarModal = ref(false);
    // const lista = ref(null);
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
      lista,
    };
  },
  data() {
    return {
      token:
        "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiUHJ1ZWJhNCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU3MTQ0NDcxfQ.TF5jQDuVbsI_SKG3wjLoFuwzAlizGDbNnrlxWwbwMFmaAlchbNMpon6Lm7UTVuA5ZLWNUU8lRQ9eH9NTLcN1vg",
    };
  },
  methods: {
    ...mapActions("auth", ["getData"]),
    async submitForm() {
      // const datos = await this.getData(this.token);
      lista = await this.getData(this.token);
      rows = lista;

      // console.log(lista);
      // const toPath = this.$route.query.to || "/admin";
      // this.$router.push(toPath);
      // await api.get("api/Bodegas/Get", this.token).then((response) => {
      //   // commit('setMe', response.data)
      //   console.log(response);
      // });
    },
  },
  beforeMount() {
    this.submitForm();
  },
};
</script>
