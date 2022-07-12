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
    // console.log("setup");
    const submitForm = async () => {
      // console.log("submitForm");
      var resultado = await api.get("api/Categorias/Get");
      // console.log(resultado);
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
    // console.log("created");

    await this.submitForm();
    let i = 0;
    this.listado.value.forEach((element) => {
      let monthNameLong = new Intl.DateTimeFormat("en-US", {
        // weekday: "long",
        // year: "numeric",
        month: "short",
        day: "numeric",
      }).format(new Date(element.fechacreacion));
      monthNameLong = monthNameLong.toString();
      // console.log(monthNameLong);
      this.series[0].data.push(element.id);
      this.chartOptions.xaxis.categories.push(monthNameLong);
      i++;
    });
    // console.log(this.series[0].data);
    // console.log(this.chartOptions.xaxis.categories);

    // console.log("listado");
    // console.log(this.listado.value);
  },
  beforeCreate() {
    // console.log("beforecreated :-----" + this.name);
  },
  mounted() {
    // console.log("mounted");
  },
  data() {
    // console.log("data");

    return {
      series: [
        {
          name: "Servings",
          data: [],
        },
      ],
      chartOptions: {
        title: {
          text: "Servings offsetY ",
          aling: "left",
        },
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
          labels: {
            rotate: -45,
          },
          categories: [],
          // tickPlacement: "on",
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
      },
    };
  },
});
</script>
