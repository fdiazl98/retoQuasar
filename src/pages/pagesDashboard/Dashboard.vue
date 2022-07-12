<!-- <template>
  <apexchart
    type="bar"
    height="350"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>
<script>
import { api } from "boot/axios";

export default {
  setup() {
    console.log("setup");
    return {
      name: "variable de setup",
      listado: [],
    };
  },
  methods: {
    async submitForm() {
      console.log("submitForm");
      await api.get("api/Articulos/Get").then((response) => {
        this.listado = response.data;
      });

      // console.log(this.listado);
      this.listado.forEach((element) => {
        this.series[0].data.push(element.preciocompra);
        this.chartOptions.xaxis.categories.push(element.codigo);
      });
      console.log(this.series[0].data);
      console.log(this.chartOptions.xaxis.categories);
    },
  },
  created() {
    console.log("created");
  },
  beforeCreate() {
    console.log("beforecreated :-----" + this.name);
  },
  mounted() {
    console.log("mounted");
  },
  data() {
    console.log("data");
    this.submitForm();

    return {
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
};
</script> -->
<!-- ----------------------------------------------------------------------------- -->
<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">
        <div class="col">
          <graficaArticulos></graficaArticulos>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <graficaCategorias></graficaCategorias>
        </div>
        <div class="col-6">
          <graficaTipoMovimiento></graficaTipoMovimiento>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <graficaBodegas></graficaBodegas>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <graficaArticulosVentaMes></graficaArticulosVentaMes>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, defineAsyncComponent } from "vue";
const graficaArticulos = defineAsyncComponent(() =>
  import("src/components/charts/graficaArticulos.vue")
);
const graficaCategorias = defineAsyncComponent(() =>
  import("src/components/charts/graficaCategorias.vue")
);
const graficaTipoMovimiento = defineAsyncComponent(() =>
  import("src/components/charts/graficaTipoMovimiento.vue")
);
const graficaBodegas = defineAsyncComponent(() =>
  import("src/components/charts/graficaBodegas.vue")
);
const graficaArticulosVentaMes = defineAsyncComponent(() =>
  import("src/components/charts/graficaArticulosVentaMes.vue")
);
export default defineComponent({
  name: "PageIndex",
  components: {
    graficaArticulos,
    graficaCategorias,
    graficaTipoMovimiento,
    graficaBodegas,
    graficaArticulosVentaMes,
  },
});
</script>
<style lang="sass" scoped>
.row > div
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem
</style>
