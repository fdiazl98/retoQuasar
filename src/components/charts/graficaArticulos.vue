<template>
  <q-page padding>
    <apexchart
      type="bar"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </q-page>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import { api } from "boot/axios";

export default defineComponent({
  name: "graficaArticulos",
  setup() {
    let listado = [];
    const submitForm = async () => {
      var resultado = await api.get("api/Articulos/Get");
      listado.value = resultado.data;
    };

    return {
      name: "variable de setup",
      listado,
      submitForm,
    };
  },
  methods: {},

  async created() {
    await this.submitForm();
    let i = 0;
    this.listado.value.forEach((element) => {
      this.series[0].data.push(element.preciocompra);
      this.series[1].data.push(element.precioventa);
      this.chartOptions.xaxis.categories.push(element.codigo);
      i++;
    });
  },
  beforeCreate() {},
  mounted() {},
  data() {
    return {
      series: [
        {
          name: "Precio de Compra",
          data: [],
        },
        {
          name: "Precio de Venta",
          data: [],
        },
      ],
      chartOptions: {
        title: {
          text: "Precio de venta y precio de compra por codigo de articulo",
          aling: "left",
        },
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            borderRadius: 0,
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return;
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },
        xaxis: {
          title: {
            text: "Codigos de articulo",
            aling: "center",
          },
          labels: {
            rotate: -45,
          },
          categories: [],
          // tickPlacement: "on",
        },
        yaxis: {
          title: {
            text: "Precios",
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
      },
    };
  },
});
</script>
