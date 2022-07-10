<template>
  <q-page padding>
    <h1 @click="submitForm">hola</h1>
    <q-btn
      label="Agregar"
      type="submit"
      color="primary"
      margin-top="10px"
      @click="clickAgregar"
    />
    <apexchart
      type="bar"
      height="350"
      v-model:options="chartOptions"
      :series="series"
    ></apexchart>
    <div class="q-pa-md">
      <q-table
        title="Articulos"
        :rows="listado"
        :columns="columns"
        :row-key="name"
      >
        <template v-slot:body="props">
          <q-tr @click="clickRow(props.row)">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <div
                v-show="col.name != 'foto'"
                v-if="col.name == 'estado' && col.value == '1'"
              >
                Activo
              </div>
              <div
                v-show="col.name != 'foto'"
                v-if="col.name == 'estado' && col.value == '2'"
              >
                Inactivo
              </div>
              <div v-show="col.name != 'foto'" v-if="col.name != 'estado'">
                {{ col.value }}
              </div>
              <div v-show="col.name == 'foto'">
                <img :src="col.value" alt="" />
              </div>
            </q-td>
            <q-td auto-width></q-td>
          </q-tr>
        </template>
      </q-table>
    </div>

    <q-dialog v-model="mostrarModal">
      <q-card>
        <div class="q-pa-md" style="max-width: 600px">
          <h5 style="width: 500px">{{ accion }}</h5>
          <q-form class="q-gutter-md" @submit.prevent="CreateRow">
            <q-input filled v-model="fila.codigo" label="Codigo" />
            <q-input filled v-model="fila.descripcion" label="Descripcion" />
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
            <q-input filled v-model="fila.foto" label="Foto" />
            <q-input filled v-model="fila.id" label="Id" />
            <q-input filled v-model="fila.idCategoria" label="Id Categoria" />
            <q-input filled v-model="fila.preciocompra" label="Precio Compra" />
            <q-input filled v-model="fila.precioventa" label="Precio Venta" />
            <q-select
              filled
              v-model="fila.estado"
              :options="options"
              label="Estado"
              map-options
              emit-value
            />

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
    name: "id",
    label: "Id",
    align: "center",
    field: "id",
    sortable: true,
  },
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
    name: "idCategoria",
    label: "Id Categoria",
    align: "center",
    field: "idCategoria",
    sortable: true,
  },
  {
    name: "preciocompra",
    label: "Precio Compra",
    align: "center",
    field: "preciocompra",
    sortable: true,
  },
  {
    name: "precioventa",
    label: "Precio Venta",
    align: "center",
    field: "precioventa",
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

import { useQuasar } from "quasar";
import { ref } from "@vue/reactivity";
import { api } from "boot/axios";
import { mapActions } from "vuex";
import { onUpdated } from "vue";
// const listade = [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35];
export default {
  setup() {
    //variables
    let listado = ref([]);
    let accion = ref("");
    let mostrarModal = ref();
    let fila = ref({});
    //--------------grafica---------------------------------------------

    //-----------------------------------------------------------------
    const submitForm = async () => {
      await api.get("api/Articulos/Get").then((response) => {
        return (listado.value = response.data);
      });
      let categorias = [];
      for (const iterator of listado.value) {
        categorias.push(iterator.codigo);
      }

      chartOptions.value.xaxis.categories = categorias;
      console.log(chartOptions);

      // console.log(chartOptions.xaxis.categories);
      return (listado.value = response.data);
    };
    let chartOptions = ref({
      // annotations: {
      //   points: [
      //     {
      //       x: "Bananas",
      //       seriesIndex: 0,
      //       label: {
      //         borderColor: "#775DD0",
      //         offsetY: 0,
      //         style: {
      //           color: "#fff",
      //           background: "#775DD0",
      //         },
      //         text: "Bananas are good",
      //       },
      //     },
      //   ],
      // },
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "50%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"],
        },
      },
      xaxis: {
        labels: {
          rotate: -45,
        },
        categories: [1, 2, 4, 5],
        tickPlacement: "on",
      },
      yaxis: {
        title: {
          text: "Servings",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100],
        },
      },
    });

    const CreateRow = async () => {
      console.log(fila.value);
      await api
        .post(`api/Articulos/${accion.value}`, fila.value)
        .then((response) => {
          console.log(response.data);
          submitForm();
          mostrarModal.value = false;
        });
      fila.value = {
        id: 5,
        codigo: "",
        descripcion: "",
        foto: "",
        idCategoria: null,
        preciocompra: null,
        precioventa: null,
        fechacreacion: "",
        fechamodificacion: "",
        estado: "",
      };
    };
    const clickAgregar = () => {
      accion.value = "Crear";
      mostrarModal.value = true;
    };
    const clickRow = (row) => {
      accion.value = "Actualizar";
      mostrarModal.value = true;
      fila = {
        id: row.id,
        codigo: row.codigo,
        descripcion: row.descripcion,
        fechacreacion: row.fechacreacion,
        fechamodificacion: row.fechamodificacion,
        foto: row.foto,
        idCategoria: row.idCategoria,
        preciocompra: row.preciocompra,
        precioventa: row.precioventa,
        estado: row.estado,
      };
    };

    const UpdateRow = async (rows) => {
      console.log(rows);
      verFormulario.value = true;
    };
    return {
      chartOptions,
      clickRow,
      clickAgregar,
      columns,
      date: "",
      search: "",
      UpdateRow,
      submitForm,
      CreateRow,
      listado,
      fila,
      accion,
      mostrarModal,

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
      //--------------------grafica--------------------
      series: [
        {
          name: "Servings",
          data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
        },
      ],
    };
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // submitForm();
  },
  beforeCreate() {
    console.log("beforeCreate");

    console.log($store.state.auth.ejex);
    console.log("beforeCreate");

    console.log($store.state.auth.ejey);
  },
};
</script>
<style>
img {
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}
</style>
