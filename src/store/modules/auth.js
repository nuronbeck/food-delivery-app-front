import client from "../../api";

export default {
  namespaced: true,
  state: {
    isAuthenticated: false
  },

  actions: {
    checkAuth(ctx){
      return client.post("/api/auth", {}, {
        headers: {
          Authorization: localStorage.getItem('foodDeliveryAppToken')
        }
      })
      .then((response) => {
        ctx.commit('setAuthentication', true)
        localStorage.setItem("foodDeliveryAppToken", response.data.token);

        return response
      })
    },
    login (ctx, payload) {
      return client.post("/api/auth/login", payload)
      .then((response) => {
        ctx.commit('setAuthentication', true)
        localStorage.setItem("foodDeliveryAppToken", response.data.token);

        return response
      })
    }
  },

  mutations: {
    setAuthentication(state, value){
      state.isAuthenticated = value
    },
    
    logout(state){
      state.isAuthenticated = false
      localStorage.removeItem("foodDeliveryAppToken");
    }
  },

  getters: {
    isAuth(state) {
      return state.isAuthenticated
    }
  },
}