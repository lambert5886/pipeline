import vue from 'vue';
import Vuex from 'vuex';
import addStep from './modules/addStep';
import bugsData from './modules/bugsData';
vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    addStep,
    bugsData
  }
});

export default store;
