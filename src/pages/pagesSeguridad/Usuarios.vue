<template>
  <q-page padding>
    <div class="q-pa-md">
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
    </div>

    <div class="q-pa-md">
      <q-table
        class="gutter-md"
        title="Roles"
        dense
        :rows="rows"
        :columns="columns"
        row-key="name"
      ></q-table>
    </div>
  </q-page>
</template>

<script>
const columns = [
  {
    name: "username",
    required: true,
    label: "Usarname",
    align: "center",
    field: "username",
    sortable: true,
  },
  {
    name: "password",
    label: "Password",
    align: "center",
    field: "password",
    sortable: true,
  },
  {
    name: "ultimoLogin",
    label: "Ultimo Login",
    align: "center",
    field: "ultimoLogin",
    sortable: true,
  },
  {
    name: "estado",
    label: "Estado",
    align: "center",
    field: "estado",
    sortable: true,
  },
  {
    name: "fechaCreacion",
    label: "Fecha Creacion",
    align: "center",
    field: "fechaCreacion",
    sortable: true,
  },
  {
    name: "fechaModificacion",
    label: "Fecha Modificacion",
    align: "center",
    field: "fechaModificacion",
    sortable: true,
  },
];

const rows = [
  {
    username: "luis 43t",
    password: "prueba 2",
    ultimoLogin: "01-04-2022",
    estado: "Activo",
    fechaCreacion: "09-01-2021",
    fechaModificacion: "12-12-2021",
  },
  {
    username: "luis 3r",
    password: "prueba 2",
    ultimoLogin: "06-04-2022",
    estado: "Inactivo",
    fechaCreacion: "09-01-2021",
    fechaModificacion: "12-12-2021",
  },
  {
    username: "luis t4",
    password: "prueba 2",
    ultimoLogin: "07-04-2022",
    estado: "Activo",
    fechaCreacion: "09-01-2021",
    fechaModificacion: "12-12-2021",
  },
  {
    username: "luis 34",
    password: "prueba 2",
    ultimoLogin: "08-04-2022",
    estado: "Activo",
    fechaCreacion: "09-01-2021",
    fechaModificacion: "12-12-2021",
  },
  {
    username: "luis 43",
    password: "prueba 2",
    ultimoLogin: "09-04-2022",
    estado: "Inactivo",
    fechaCreacion: "09-01-2021",
    fechaModificacion: "12-12-2021",
  },
  {
    username: "luis 4",
    password: "prueba 2",
    ultimoLogin: "10-04-2022",
    estado: "Inactivo",
    fechaCreacion: "09-01-2021",
    fechaModificacion: "12-12-2021",
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
      date: "",
      search: "",
    };
  },
};
</script>

<!-- <script>
const columns = [
  {
    name: "username",
    label: "Username",
    align: "center",
    field: "username",
    sortable: "true",
  },
  {
    name: "password",
    label: "Password",
    align: "center",
    field: "password",
    sortable: "true",
  },
  {
    name: "ultimoLogin",
    label: "Ultimo Login",
    align: "center",
    field: "ultimoLogin",
    sortable: "true",
  },
  {
    name: "estado",
    label: "Estado",
    align: "center",
    field: "estado",
    sortable: "true",
  },
  {
    name: "fechaCreacion",
    label: "Fecha Creacion",
    align: "center",
    field: "fechaCreacion",
    sortable: "true",
  },
  {
    name: "fechaModificacion",
    label: "Fecha Modificacion",
    align: "center",
    field: "fechaModificacion",
    sortable: "true",
  },
];
const rows = [
  {
    username: "luis 43t",
    password: "prueba 2",
    ultimoLogin: "01-04-2022",
    estado: "Activo",
    fechaCreacion: "09-01-2021",
    fechaModificacion: "12-12-2021",
  },
  {
    username: "luis 3r",
    password: "prueba 2",
    ultimoLogin: "06-04-2022",
    estado: "Inactivo",
    fechaCreacion: "09-01-2021",
    fechaModificacion: "12-12-2021",
  },
  {
    username: "luis t4",
    password: "prueba 2",
    ultimoLogin: "07-04-2022",
    estado: "Activo",
    fechaCreacion: "09-01-2021",
    fechaModificacion: "12-12-2021",
  },
  {
    username: "luis 34",
    password: "prueba 2",
    ultimoLogin: "08-04-2022",
    estado: "Activo",
    fechaCreacion: "09-01-2021",
    fechaModificacion: "12-12-2021",
  },
  {
    username: "luis 43",
    password: "prueba 2",
    ultimoLogin: "09-04-2022",
    estado: "Inactivo",
    fechaCreacion: "09-01-2021",
    fechaModificacion: "12-12-2021",
  },
  {
    username: "luis 4",
    password: "prueba 2",
    ultimoLogin: "10-04-2022",
    estado: "Inactivo",
    fechaCreacion: "09-01-2021",
    fechaModificacion: "12-12-2021",
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script> -->
