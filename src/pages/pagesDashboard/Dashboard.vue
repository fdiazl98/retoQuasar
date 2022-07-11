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

      console.log(this.listado);
      this.listado.forEach((element) => {
        this.series[0].data.push(element.preciocompra);
        this.chartOptions.xaxis.categories.push(element.id);
      });
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

<template>
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

      console.log(this.listado);
      this.listado.forEach((element) => {
        this.series[0].data.push(element.preciocompra);
        this.chartOptions.xaxis.categories.push(element.id);
      });
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
</script>
