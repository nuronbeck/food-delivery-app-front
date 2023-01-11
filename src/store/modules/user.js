import client from "../../api";

export default {
  namespaced: true,
  state: {
    userData: null
  },

  actions: {
    getUserInfo(ctx){
      return client.post("/api/auth", {}, {
        headers: {
          Authorization: localStorage.getItem('foodDeliveryAppToken')
        }
      })
      .then((response) => {
        ctx.commit('setUserData', response.data.user)
        localStorage.setItem("foodDeliveryAppToken", response.data.token);

        return response
      })
    },
  },

  mutations: {
    setUserData(state, userData) {
      state.userData = userData
    },

  },

  getters: {
    getUser(state) {
      return state.userData
    }
  },
}