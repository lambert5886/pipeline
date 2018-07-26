import vue from 'vue';
import Vuex from 'vuex';
import addStage from './modules/addStage';
import bugsData from './modules/bugsData';
vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    addStage,
    bugsData
  }
});

export default store;
