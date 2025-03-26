import { createStore } from 'vuex'

export default createStore({
  state: {
    users:[]
  },
  getters: {
  },
  mutations: {
    addUser(state, user) {
      state.users.push(user);
    }
  },
  actions: {
  },
  modules: {
  }
})
