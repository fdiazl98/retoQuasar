<template>
  <q-page padding>
    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px"></div>
      <q-btn
        label="Agregar"
        type="submit"
        color="primary"
        margin-top="10px"
        @click="clickAgregar"
      />
    </div>
    <apexchart
      type="bar"
      height="350"
      :options="chartOptions"
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
import { useStore } from "vuex";

export default {
  setup() {
    console.log("setup");
    return {
      columns,
      date: "",
      search: "",
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
    console.log("data");

    return {
      listado: [],
      fila: {
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
      },
      accion: "",
      mostrarModal: false,
      //grafica--------------------------
      series: [
        {
          name: "Inflation",
          //ejey----
          data: [],
          // data: this.$store.state.auth.ejey,
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val;
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },

        xaxis: {
          //ejex----
          // categories: this.$store.state.auth.ejex,
          categories: [],
          position: "bottom",
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            },
          },
        },
        title: {
          text: "cantidad por Id(Movimientos)",
          floating: true,
          offsetY: 330,
          align: "center",
          style: {
            color: "#444",
          },
        },
      },
    };
  },
  methods: {
    ...mapActions("auth", ["setejex", "setejey"]),
    async submitForm() {
      await api.get("api/Articulos/Get").then((response) => {
        return (this.listado = response.data);
      });

      var arr = [];
      var arr2 = [];
      for (const iterator of this.listado) {
        arr.push(iterator.precioventa);
        arr2.push(iterator.codigo);
      }
      // this.setejex(arr2);
      this.chartOptions.xaxis.categories = arr2;
      this.series.data = arr;
      // this.setejey(arr);
      // console.log(this.$store.state.auth);
      console.log(this.chartOptions);

      // commit("setejex", arr2);
      // store.state.auth.ejey = arr2;
    },
    async CreateRow() {
      await api
        .post(`api/Articulos/${this.accion}`, this.fila)
        .then((response) => {
          this.submitForm();
          this.fila = {
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
          this.mostrarModal = false;
        });
    },
    clickAgregar() {
      this.accion = "Crear";
      this.mostrarModal = true;
      this.fila = {
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
    },
    clickRow(row) {
      this.accion = "Actualizar";
      this.mostrarModal = true;
      this.fila = {
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
    },
  },
  created() {
    console.log("created");

    // this.submitForm();
  },
  beforeCreate() {
    this.submitForm();

    console.log("beforeCreate");
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
