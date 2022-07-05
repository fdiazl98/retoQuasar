const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue"),
        meta: { requireLogin: true },
      },
      {
        path: "/admin",
        component: () => import("pages/admin/Index"),
        meta: { requireLogin: true },
      },
      {
        path: "/home",
        component: () => import("pages/Home.vue"),
        meta: { requireLogin: true },
      },
      {
        path: "/index",
        component: () => import("pages/Index.vue"),
        meta: { requireLogin: true },
      },
      {
        path: "/about",
        component: () => import("pages/About.vue"),
        meta: { requireLogin: true },
      },
      {
        path: "/form",
        component: () => import("pages/Form.vue"),
        meta: { requireLogin: true },
      },

      //paginas de configuraciones
      {
        path: "/configuracion/categorias",
        meta: { requireLogin: true },
        component: () => import("pages/pagesConfiguracion/Categorias.vue"),
      },
      {
        path: "/configuracion/tipo-de-movimiento",
        meta: { requireLogin: true },
        component: () => import("pages/pagesConfiguracion/TipoMovimiento.vue"),
      },
      {
        path: "/configuracion/bodegas",
        meta: { requireLogin: true },
        component: () => import("pages/pagesConfiguracion/Bodegas.vue"),
      },
      {
        path: "/configuracion/articulos",
        meta: { requireLogin: true },
        component: () => import("pages/pagesConfiguracion/Articulos.vue"),
      },

      //paginas de seguridad
      {
        path: "/seguridad/Roles",
        meta: { requireLogin: true },
        component: () => import("pages/pagesSeguridad/Roles.vue"),
      },
      {
        path: "/seguridad/Usuarios",
        meta: { requireLogin: true },
        component: () => import("pages/pagesSeguridad/Usuarios.vue"),
      },

      //paginas de inventario
      {
        meta: { requireLogin: true },
        path: "/inventario/Listado-de-inventarios",
        component: () =>
          import("pages/pagesInventario/Listado_de_inventarios.vue"),
      },
      {
        path: "/inventario/Movimientos",
        meta: { requireLogin: true },
        component: () => import("pages/pagesInventario/Movimientos.vue"),
      },

      //paginas de dasboard
      {
        path: "/dashboard/Dashboard",
        meta: { requireLogin: true },
        component: () => import("pages/pagesDashboard/Dashboard.vue"),
      },
    ],
  },
  {
    name: "LoginIn",
    path: "/login",
    component: () => import("pages/Login.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
