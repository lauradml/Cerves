import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cerverList: [],
  },
  getters: {
  },
  mutations: {
    saveCever(state, list) {
      state.cerverList = list.slice(0, 10);
    },
  },
  actions: {
    getCerves({ commit }) {
      axios.get('https://api.punkapi.com/v2/beers')
        .then((response) => {
          console.log(response.data)
          commit('saveCever', response.data);
        }).catch(() => {
          console.warn('I have failed');
        })
    },
  },
  modules: {
  }
})
