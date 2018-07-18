import { ADD_STEP } from '@/store/mutation_type.js';

const addStep = {
  state: {
    stepId: false,
    stepModal: {
      stepId: 'step01',
      active: true,
      text: '',
      index: 0,
      added: false,
    },
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
      console.log('from  store add_step', info);
      let currentStep = state.stepList.filter(function(item, index){
        if(info.stepId == item.stepId){
          state.stepId = true;
        }
        return info.stepId == item.stepId;
      });
      console.log('from store add_step :::  ', currentStep);
      
    }
  },
  getters: {
    stepList(state){
      return state.stepList;
    },
    showContentStep(state){
      console.log('from getters :::   ',state.stepId)
      return state.stepId;
    }
  }
};

export default addStep;