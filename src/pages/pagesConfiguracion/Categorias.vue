<template>
  <q-page padding>
    <h1>Categorias</h1>
    <pre>{{ seleccion }}-{{ producto }}-{{ terminos }}</pre>
    <q-form
      class="row q-col-gutter-md"
      @submit="procesarFormulario"
      @reset="reset"
      ref="myForm"
    >
      <div class="col-12 col-sm-6">
        <q-select
          label="Prioridad"
          v-model="seleccion"
          :options="opciones"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
          lazy-rules
        ></q-select>
      </div>
      <div class="col-12 col-sm-6">
        <q-input
          label="Prioridad"
          v-model="producto"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
          lazy-rules
        ></q-input>
      </div>
      <div class="col-12">
        <q-toggle label="Aceptar los terminos y condiciones" v-model="terminos">
        </q-toggle>
      </div>
      <div class="col-12">
        <q-btn label="submit" color="primary" type="submit"></q-btn>
        <q-btn
          label="reset"
          color="primary"
          outline
          class="q-ml-sm"
          :ripple="false"
          type="reset"
        ></q-btn>
      </div>
    </q-form>

    <pintar-datos :productos="productos"></pintar-datos>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import PintarDatos from "src/components/PintarDatos";
export default {
  components: { PintarDatos },
  setup() {
    const myForm = ref(null);
    const $q = useQuasar();
    const producto = ref(null);
    const seleccion = ref(null);
    const opciones = ["minima", "maxima", "media"];
    const terminos = ref(false);

    const productos = ref([]);

    const reset = () => {
      producto.value = null;
      seleccion.value = null;
      terminos.value = false;
    };

    const procesarFormulario = () => {
      console.log("click en submits", producto.value, seleccion.value);
      if (terminos.value === false) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "faltaron los terminos",
        });
      } else {
        $q.notify({
          color: "green-5",
          textColor: "white",
          icon: "cloud_done",
          message: "Formulario enviado",
        });
        myForm.value.resetValidation();
        productos.value = [
          ...productos.value,
          {
            producto: producto.value,
            prioridad: seleccion.value,
          },
        ];
        reset();
      }
    };

    return {
      producto,
      seleccion,
      opciones,
      procesarFormulario,
      terminos,
      reset,
      myForm,
      productos,
    };
  },
};
</script>
