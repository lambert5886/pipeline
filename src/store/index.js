import vue from 'vue';
import Vuex from 'vuex';
import stageState from './modules/stageState';
import addStep from './modules/addSteps';
vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    stageState,
    addStep,
  },
  strict: process.env.NODE_ENV !== 'production'
});

export default store;
