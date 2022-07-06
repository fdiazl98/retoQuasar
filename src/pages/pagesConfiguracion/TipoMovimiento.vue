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

        <!-- <q-input v-model="date" filled type="date" /> -->
      </div>
      <q-btn
        label="Agregar"
        type="submit"
        color="primary"
        margin-top="10px"
        @click="clickAgregar"
      />
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
          <h5 style="width: 500px">{{ accion }}</h5>
          <q-form class="q-gutter-md" @submit.prevent="CreateRow">
            <q-input
              filled
              v-model="fila.codigo"
              label="Codigo"
              hint="Id bodega"
            />
            <q-input
              filled
              v-model="fila.descripcion"
              label="Descripcion"
              hint="Id bodega"
            />
            <q-input
              filled
              v-model="fila.fechacreacion"
              hint="Fecha de creacion"
              type="date"
            />
            <q-input
              filled
              v-model="fila.fechamodificacion"
              type="date"
              hint="Fecha de modificacion"
            />
            <q-input filled v-model="fila.foto" label="Foto" hint="Id bodega" />
            <q-input filled v-model="fila.id" label="Id" hint="Id bodega" />

            <div>
              <q-btn :label="accion" color="primary" type="submit" />
              <q-btn
                label="Salir"
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
  </q-page>
</template>

<script>
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
  {
    name: "Edicion",
    required: true,
    label: "Eliminar",
    align: "center",
    field: "Edicion",
    sortable: true,
  },
];

import { useQuasar } from "quasar";
import { ref } from "@vue/reactivity";
import { api } from "boot/axios";
import { mapActions } from "vuex";

export default {
  setup() {
    // const lista = ref(null);
    // const $q = useQuasar();
    return {
      columns,
      date: "",
      search: "",
    };
  },
  data() {
    return {
      // token: window.localStorage.getItem("token"),
      listado: [],
      fila: {
        codigo: "",
        descripcion: "",
        fechacreacion: "",
        fechamodificacion: "",
        foto: "",
        id: "",
      },
      accion: "",
      mostrarModal: false,
    };
  },
  methods: {
    // ...mapActions("auth", ["getData"]),
    async submitForm() {
      // this.listado = await this.getData(this.token);

      // const toPath = this.$route.query.to || "/admin";
      // this.$router.push(toPath);
      await api.get("api/Bodegas/Get").then((response) => {
        //   // commit('setMe', response.data)
        return (this.listado = response.data);
      });
    },
    async CreateRow() {
      await api
        .post(`api/Bodegas/${this.accion}`, this.fila)
        .then((response) => {
          console.log(response);
          this.submitForm();
          this.fila = {
            codigo: "",
            descripcion: "",
            fechacreacion: "",
            fechamodificacion: "",
            foto: "",
            id: "",
          };
        });
    },
    clickAgregar() {
      this.accion = "Crear";
      this.mostrarModal = true;
    },
    clickRow(evt, row, index) {
      this.accion = "Actualizar";
      this.mostrarModal = true;
      this.fila = {
        codigo: row.codigo,
        descripcion: row.descripcion,
        fechacreacion: row.fechacreacion,
        fechamodificacion: row.fechamodificacion,
        foto: row.foto,
        id: row.id,
      };
    },
  },
  mounted() {
    this.submitForm();
  },
};
</script>
