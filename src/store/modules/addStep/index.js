import { ADD_STEP } from '@/store/mutation_type.js';

const addStep = {
  state: {
    active: false,
    stepList: [{
        stepId: 'step01',
        active: true,
        text: '',
        index: 0,
        added: false,
      },]
  },
  actions: {
    add_step({commit}, info){
      commit('ADD_STEP', info);
    }
  },
  mutations: {
    [ADD_STEP](state, info){
      console.log('from  store add_step', state);
    }
  },
  getters: {
    stepList(state){
      return state.stepList;
    }
  }
};

export default addStep;