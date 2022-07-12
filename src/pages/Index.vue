<template>
  <q-page>
    <chartExample></chartExample>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";
const chartExample = defineAsyncComponent(() =>
  import("src/components/charts/graficaArticulos.vue")
);
export default defineComponent({
  name: "PageIndex",
  components: {
    chartExample,
  },
});
</script>
