<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="drawer" />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <!-- <q-btn stretch flat  v-if="!isAuthenticated">Logout</q-btn> -->
        <q-btn stretch flat to="/login" @click="logout" >Logout</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item clickable v-ripple to="/" exact active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section> Inicio </q-item-section>
          </q-item>

          <!-- <q-item clickable v-ripple to="/about" active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="about" />
            </q-item-section>
            <q-item-section> About </q-item-section>
          </q-item> -->

          <q-item clickable v-ripple to="/form" active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="class" />
            </q-item-section>
            <q-item-section> Form </q-item-section>
          </q-item>

          <!-- configuraciones-->
          <q-list class="rounded-borders">
            <q-expansion-item
              expand-separator
              icon="settings"
              label="Settings"
              default-closed
            >
              <q-list>
                <q-item
                  clickable
                  v-ripple
                  to="/configuracion/categorias"
                  @click="onItemClick"
                >
                  <q-item-section>
                    <q-item-label>Categorias</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-ripple
                  to="/configuracion/tipo-de-movimiento"
                  @click="onItemClick"
                >
                  <q-item-section>
                    <q-item-label>Tipo movimiento</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-ripple
                  to="/configuracion/bodegas"
                  @click="onItemClick"
                >
                  <q-item-section>
                    <q-item-label>Bodegas</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-ripple
                  to="/configuracion/articulos"
                  @click="onItemClick"
                >
                  <q-item-section>
                    <q-item-label>Articulos</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
          </q-list>
          <!-- fin configuraciones -->

          <!-- Seguridad -->

          <q-list class="rounded-borders">
            <q-expansion-item
              expand-separator
              icon="manage_accounts"
              label="Security"
              default-closed
            >
              <q-list>
                <q-item
                  clickable
                  v-ripple
                  to="/seguridad/Roles"
                  @click="onItemClick"
                >
                  <q-item-section>
                    <q-item-label>Roles</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-ripple
                  to="/seguridad/Usuarios"
                  @click="onItemClick"
                >
                  <q-item-section>
                    <q-item-label>Usuarios</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
          </q-list>
          <!-- fin seguridad -->

          <!-- inventario -->
          <q-list class="rounded-borders">
            <q-expansion-item
              expand-separator
              icon="wysiwyg"
              label="Inventario"
              default-closed
            >
              <q-list>
                <q-item
                  clickable
                  v-ripple
                  to="/inventario/Listado-de-inventarios"
                  @click="onItemClick"
                >
                  <q-item-section>
                    <q-item-label>Listado de inventarios</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-ripple
                  to="/inventario/Movimientos"
                  @click="onItemClick"
                >
                  <q-item-section>
                    <q-item-label>Movimientos</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
          </q-list>
          <!-- fin inventario -->

          <!-- dashboard -->
          <q-item
            clickable
            v-ripple
            to="/dashboard/dashboard"
            exact
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="leaderboard" />
            </q-item-section>
            <q-item-section> Dashboard </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "MainLayout",

  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen.value = !this.leftDrawerOpen.value;
    },
    logout() {
      this.$store.dispatch("auth/signOut");
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },
});
</script>
