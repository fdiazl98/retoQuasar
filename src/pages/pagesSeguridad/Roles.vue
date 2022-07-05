<template>
  <q-page padding>
    <!-- <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
        <q-input class="outlined" v-model="text" label="Outlined" />

        <q-input class="input input-sm" v-model="search" filled type="search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-input v-model="date" filled type="date" />
      </div>
      <q-btn label="Submit" type="submit" color="primary" margin-top="10px" />
    </div> -->

    <div class="q-pa-md q-gutter-sm">
      <q-btn label="Alert" color="primary" @click="alert" />
      <q-btn label="Confirm" color="primary" @click="confirm" />
      <q-btn label="Prompt" color="primary" @click="prompt" />
    </div>

    <div class="q-pa-md">
      <q-option-group
        v-model="separator"
        inline
        class="q-mb-md"
        :options="[
          {
            label: 'Horizontal',
            value: 'horizontal',
          },
          { label: 'Vertical', value: 'vertical' },
          { label: 'Cell', value: 'cell' },
          { label: 'None', value: 'none' },
        ]"
      />

      <q-table
        class="gutter-md"
        title="Roles"
        dense
        :rows="rows"
        :columns="columns"
        :separator="separator"
        row-key="name"
      ></q-table>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";

import { ref } from "vue";
const columns = [
  {
    name: "id",
    required: true,
    label: "ID",
    align: "center",
    field: "id",
    sortable: true,
  },
  {
    name: "nombre",
    label: "Nombre",
    align: "center",
    field: "nombre",
    sortable: true,
  },
];

const rows = [
  {
    id: 1000,
    nombre: "prueba",
  },
  {
    id: 1001,
    nombre: "prueba 2",
  },
  {
    id: 1002,
    nombre: "prueba 3",
  },
  {
    id: 1003,
    nombre: "prueba 4",
  },
  {
    id: 1000,
    nombre: "prueba",
  },
  {
    id: 1001,
    nombre: "prueba 2",
  },
  {
    id: 1002,
    nombre: "prueba 3",
  },
  {
    id: 1003,
    nombre: "prueba 4",
  },
];

export default {
  setup() {
    const $q = useQuasar();

    const alert = () => {
      $q.dialog({
        title: "Alert",
        message: "Some message",
      })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    };

    function confirm() {
      $q.dialog({
        title: "Confirm",
        message: "Would you like to turn on the wifi?",
        cancel: true,
        persistent: true,
      })
        .onOk(() => {
          // console.log('>>>> OK')
        })
        .onOk(() => {
          // console.log('>>>> second OK catcher')
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    function prompt() {
      $q.dialog({
        title: "Prompt",
        message: "What is your name?",
        prompt: {
          model: "",
          type: "text", // optional
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

    return {
      separator: ref("horizontal"),
      columns,
      rows,
      date: "",
      search: "",
      alert,
      confirm,
      prompt,
    };
  },
};
</script>
