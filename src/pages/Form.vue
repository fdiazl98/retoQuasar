<template>
  <q-page padding>
    <h6>clefairy</h6>
    <div class="container">
      <q-form class="row q-col-gutter-md" @submit="mostrar">
        <q-input v-model="pokemon" type="text" id="input" />
        <q-btn label="submit" color="primary" type="submit"></q-btn>
      </q-form>
      <q-avatar size="103px" class="shadow-10" v-show="show">
        <img :src="url" alt="avatar" />
      </q-avatar>
      <p :label="especie"></p>

      <div id="pokemon-container"></div>
    </div>
    <!-- <pre>{{ seleccion }}-{{ producto }}-{{ terminos }} - {{ pokemon }}</pre> -->
  </q-page>
</template>

<script>
import { ref, toRefs } from "vue";
export default {
  setup() {


    const pokemon = ref(null);
    const url = ref(null);
    const show = ref(false);
    const especie = ref(null);


    const reset = () => {
      producto.value = null;
      seleccion.value = null;
      terminos.value = false;
    };
    const mostrar = () => {
      show.value = true;
      url.value = pokemon.value;
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value}/`)
        .then((response) => response.json())
        .then((responseData) => {
          crearPokemon(responseData);
        });

      const crearPokemon = (responseData) => {
        especie.value = responseData.id;
        console.log(especie.value);
        url.value = responseData.sprites.front_default;
      };
    };



    return {
      reset,
      mostrar,
      pokemon,
      url,
      show,
      especie,


    };
  },
};
</script>
