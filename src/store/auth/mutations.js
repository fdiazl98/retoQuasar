//guarda el token en el localStorage y cambia el estado
export const setToken = (state, token) => {
  state.token = token;
  state.isAuthenticated = true;
  window.localStorage.setItem("token", JSON.stringify(token));
};

export const removeToken = (state, token) => {
  state.token = "";
  state.isAuthenticated = false;
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("username");
  window.localStorage.removeItem("password");
  console.log("intenando salir")
};

export const setMe = (state, me) => {
  state.me = me;
};
