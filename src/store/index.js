import vue from 'vue';
import Vuex from 'vuex';
import addStep from './modules/addStep';

vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    addStep
  }
});

export default store;