<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-option-group
        v-model="separator"
        inline
        class="q-mb-md"
        :options="[
          {
            label: 'Horizontal',
            value: 'horizontal',
          },
          { label: 'Vertical', value: 'vertical' },
          { label: 'Cell', value: 'cell' },
          { label: 'None', value: 'none' },
        ]"
      />

      <div>
        <q-btn
          label="Agregar"
          type="submit"
          color="primary"
          margin-top="10px"
          @click="
            (mostrarModal = true),
              (condition = -1),
              (accion = 'Crear'),
              (ver = false)
          "
        />
        <q-table
          class="gutter-md"
          title="Roles"
          dense
          :rows="listado"
          :columns="columns"
          :separator="separator"
          row-key="name"
          @row-click="clickRow"
        ></q-table>
      </div>

      <q-dialog v-model="mostrarModal">
        <q-card>
          <div class="q-pa-md" style="max-width: 600px">
            <h5 style="width: 500px">{{ accion }}</h5>
            <q-form class="q-gutter-md" @submit.prevent="cambio">
              <q-input filled v-model="fila.id" label="Id" :disable="ver" />
              <q-input filled v-model="fila.nombre" label="Nombre" />
              <q-select
                filled
                v-model="fila.estado"
                :options="options"
                label="Estado"
                map-options
                emit-value
              />

              <p>{{ model }}</p>

              <div>
                <q-btn :label="accion" color="primary" type="submit" />
              </div>
            </q-form>
          </div>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
let condition;
import { useQuasar } from "quasar";
import { api } from "boot/axios";
import { ref } from "vue";
const columns = [
  {
    name: "id",
    required: true,
    label: "ID",
    align: "center",
    field: "id",
    sortable: true,
  },
  {
    name: "nombre",
    label: "Nombre",
    align: "center",
    field: "nombre",
    sortable: true,
  },
  {
    name: "estado",
    label: "Estado",
    align: "center",
    field: "estado",
    sortable: true,
  },
];

const rows = [
  {
    id: 1000,
    nombre: "prueba",
  },
  {
    id: 1001,
    nombre: "prueba 2",
  },
  {
    id: 1002,
    nombre: "prueba 3",
  },
  {
    id: 1003,
    nombre: "prueba 4",
  },
  {
    id: 1000,
    nombre: "prueba",
  },
  {
    id: 1001,
    nombre: "prueba 2",
  },
  {
    id: 1002,
    nombre: "prueba 3",
  },
  {
    id: 1003,
    nombre: "prueba 4",
  },
];

export default {
  setup() {
    const $q = useQuasar();

    return {
      separator: ref("horizontal"),
      columns,
      rows,
      date: "",
      search: "",
      model: ref(null),
      options: [
        {
          label: "Activo",
          value: 1,
        },
        {
          label: "Inactivo",
          value: 2,
        },
      ],
    };
  },

  data() {
    return {
      listado: [],

      fila: {
        id: "",
        nombre: "",
        estado: "",
      },
      mostrarModal: false,
      accion: "",
      condition,
      ver: false,
    };
  },

  methods: {
    clickRow(evt, row, index) {
      this.accion = "Actualizar";
      this.ver = true;

      this.mostrarModal = true;
      condition = index;
      this.fila = {
        id: row.id,
        nombre: row.nombre,
        estado: row.estado,
      };

      console.log("esto es estado :" + this.fila.estado);
    },

    async submitForm() {
      await api.get("/api/Roles/Get").then((response) => {
        // console.log(
        //   "0========================prueba============================"
        // );
        // console.log(response.data);
        this.listado = response.data;
        // console.log(response);
      });

      // rows=lista
    },

    async cambio() {
      console.log(
        "===================== " + this.condition + " ====================="
      );
      if (this.condition == -1) {
        this.accion = "Crear";
        this.mostrarModal = true;
        await api.post("api/Roles/Crear", this.fila).then((response) => {
          console.log(response);
          this.submitForm();
        });
        this.fila = {
          id: "",
          nombre: "",
          estado: "",
        };
      } else {
        console.log("esto es estado :" + this.fila.estado);
        await api.post("api/Roles/Actualizar", this.fila).then((response) => {
          console.log(response);

          this.fila = {
            id: "",
            nombre: "",
            estado: "",
          };

          this.submitForm();
        });
      }
      this.mostrarModal = false;
      this.condition = "";
      console.log(
        "===================== " + this.condition + " ====================="
      );
    },
  },

  mounted() {
    this.submitForm();
  },
};
</script>
