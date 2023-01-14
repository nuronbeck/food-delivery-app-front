export default {
  namespaced: true,
  state: {
    userData: {
      id: null,
      email: null,
      firstName: null,
      lastName: null,
      phoneNumber: null
    }
  },

  actions: {
  },

  mutations: {
    setUserData(state, userData) {
      state.userData = userData
    },

  },

  getters: {
    userData(state) {
      return state.userData
    }
  },
}