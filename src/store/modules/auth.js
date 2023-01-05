import client from "../../api";

export default {
  namespaced: true,
  state: {
    isAuthenticated: false
  },

  actions: {
    login (ctx, payload) {
      return client.post("/api/auth/login", payload)
      .then((response) => {
        ctx.commit('setAuthentication', true)
        localStorage.setItem("foodDeliveryAppToken", response.data.token);
      })
    }
  },

  mutations: {
    setAuthentication(state, value){
      state.isAuthenticated = value
    },
    
    logout(state){
      state.isAuthenticated = false
    }
  },

  getters: {
    isAuth(state) {
      return state.isAuthenticated
    }
  },
}