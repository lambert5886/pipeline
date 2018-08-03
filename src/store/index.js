import vue from 'vue';
import Vuex from 'vuex';
import stageState from './modules/stageState';
import bugsData from './modules/bugsData';
import fortifyData from './modules/fortifyData';
import addStep from './modules/addSteps';
vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    stageState,
    addStep,
    bugsData,
    fortifyData
  }
});

export default store;
