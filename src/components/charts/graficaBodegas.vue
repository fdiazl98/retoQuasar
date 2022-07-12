<template>
  <q-page padding>
    <apexchart
      type="donut"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </q-page>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import { api } from "boot/axios";
import { getCssVar } from "quasar";

export default defineComponent({
  name: "graficaArticulos",
  setup() {
    let listado = [];
    const submitForm = async () => {
      var resultado = await api.get("api/Bodegas/Get");
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
    let activo = 0;
    let inactivo = 0;
    this.listado.value.forEach((element) => {
      if (element.estado == 1) {
        activo++;
      } else if (element.estado == 2) {
        inactivo++;
      }
    });

    this.series[0] = activo;
    this.series[1] = inactivo;
  },
  beforeCreate() {},
  mounted() {},
  data() {
    return {
      series: [],
      chartOptions: {
        title: {
          text: "Estado de bodegas ",
          aling: "left",
        },
        colors: [getCssVar("primary"), getCssVar("negative")],
        labels: ["Activo", "Inactivo"],
        chart: {
          type: "donut",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
});
</script>
