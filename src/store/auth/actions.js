import { api } from "boot/axios";
import { axios } from "axios";

export const doLogin = async ({ commit, dispatch }, payload) => {
  //aqui se recibe el token de la api
  // await api.post('/api/v1/jwt/create/', payload).then(response => {
  //   const token = response.data
  await api.post("/api/Login", payload).then((response) => {
    const token = response.data.token;
    console.log(response.data);
    commit("setToken", token);
    // api.defaults.headers.common.Authorization = "JWT " + token.id;
    api.defaults.headers.common.Authorization = "Bearer " + token;

    dispatch("getMe", token);
  });

  // commit("setToken", token);
  //   api.defaults.headers.common.Authorization = 'JWT ' + token.access
  // dispatch("getMe", token);
  // })
};

export const signOut = ({ commit }) => {
  // api.defaults.headers.common.Authorization = ''
  commit("removeToken");
  console.log("singout");
};

export const getMe = async ({ commit }, token) => {
  // await api.get('/api/v1/users/me/', token.access).then(response => {
  //   commit('setMe', response.data)
  // })
  commit("setMe", token);
  // console.log(token);
  return "data";
};
export const getData = async (token) => {
  let resposeGlobal;
  await api.get("api/Bodegas/Get", token).then((response) => {
    // commit('setMe', response.data)
    // console.log(response);
    resposeGlobal = response;
  });
  // console.log(vari);
  return resposeGlobal.data;

  // commit("setMe", token);
};

export const init = async ({ commit, dispatch }) => {
  const token = window.localStorage.getItem('token')
  if (token) {
    await commit('setToken', JSON.parse(token))
    api.defaults.headers.common.Authorization = 'Bearer ' + JSON.parse(token)
    dispatch('getMe', JSON.parse(token))
  } else {
    commit('removeToken')
  }
  console.log("init");
};
