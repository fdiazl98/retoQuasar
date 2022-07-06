<template>
  <q-page padding>
    <h6>clefairy</h6>
    <q-btn
      label="mostrar"
      color="primary"
      type="submit"
      @click="submitForm"
    ></q-btn>
  </q-page>
</template>

<script>
import { api } from "boot/axios";
import { useQuasar } from "quasar";
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      token:
        "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiUHJ1ZWJhNCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjU3MTQ0NDcxfQ.TF5jQDuVbsI_SKG3wjLoFuwzAlizGDbNnrlxWwbwMFmaAlchbNMpon6Lm7UTVuA5ZLWNUU8lRQ9eH9NTLcN1vg",
    };
  },
  methods: {
    ...mapActions("auth", ["getData"]),
    async submitForm() {
      const data = await this.getData(this.token);
      alert(data);
      // const toPath = this.$route.query.to || "/admin";
      // this.$router.push(toPath);
      // await api.get("api/Bodegas/Get", this.token).then((response) => {
      //   // commit('setMe', response.data)
      //   console.log(response);
      // });
    },
  },
  mounted() {},
};
</script>
<!-- <script>
import { ref, toRefs } from "vue";
import { mapActions } from "vuex";
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
    const mostrar = async () => {
      show.value = true;
      url.value = pokemon.value;
      await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value}/`)
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

    const post = async () => {
      console.log("POST");
    };

    return {
      reset,
      mostrar,
      pokemon,
      url,
      show,
      especie,
      post,
    };
  },
};
</script> -->
