<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table title="Treats" :rows="rows" :columns="columns" :row-key="name">
        <template v-slot:body="props">
          <q-tr @click="UpdateRow(props.row)">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <div v-show="col.name != 'foto'">
                {{ col.value }}
              </div>
              <div v-show="col.name == 'foto'">
                l
                <img :src="col.value" alt="" />
              </div>
            </q-td>
            <q-td auto-width></q-td>
          </q-tr>
        </template>
      </q-table>
      <div class="q-pa-md q-gutter-sm">
        <q-btn label="Checkbox Options" color="primary" @click="checkbox" />
      </div>
    </div>
  </q-page>
  <!-- ------------------------------------ -->
  <!-- v-on:click="UpdateRow(rows)" -->
  <!-- ------------------------------------ -->
</template>

<script>
const columns = [
  { name: "name", label: "Nombre", field: "name", sortable: true },
  { name: "descripcion", label: "Descripcion", field: "descripcion" },
  { name: "fechacreacion", label: "Fecha Creacion", field: "fechacreacion" },
  {
    name: "fechamodificacion",
    label: "Fecha Modificacion",
    field: "fechamodificacion",
  },
  { name: "foto", label: "Foto", field: "foto" },
];

const rows = [
  {
    name: "Frozen Yogurt",
    descripcion: 159,
    fechacreacion: 24,
    fechamodificacion: 4.0,
    foto: "https://as01.epimg.net/meristation/imagenes/2022/05/08/noticias/1651998508_361943_1652017073_noticia_normal.jpg",
  },
  {
    name: "Frssssrt",
    descripcion: 5555,
    fechacreacion: 3333,
    fechamodificacion: 2222.0,
    foto: "https://img1.ak.crunchyroll.com/i/spire2/a6e36e575f9d9d38d1cf40d6769980a31651739960_main.jpg",
  },
];

// const foto =
//   "https://as01.epimg.net/meristation/imagenes/2022/05/08/noticias/1651998508_361943_1652017073_noticia_normal.jpg";

import { ref } from "vue";
import { useQuasar } from "quasar";
export default {
  setup() {
    const $q = useQuasar();
    const verFormulario = ref(false);
    const row = [];
    const jason = {};
    function checkbox() {
      $q.dialog({
        title: "Options",
        message: "Choose your options:",
        options: {
          type: "checkbox",
          model: [],
          // inline: true
          items: [
            { label: "Option 1", value: "opt1", color: "secondary" },
            { label: "Option 2", value: "opt2" },
            { label: "Option 3", value: "opt3" },
          ],
        },
        cancel: true,
        persistent: true,
      })
        .onOk((data) => {
          // console.log('>>>> OK, received', data)
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    const UpdateRow = (rows) => {
      console.log(rows);
      verFormulario.value = true;
    };

    return {
      columns,
      rows,
      UpdateRow,
      row,
      verFormulario,
      checkbox,
    };
  },
  methods: {
    onRowClick2: function (evt, row, index) {
      console.log(row);
    },
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
