import {searchItem} from '@/base/common'
import {
  INIT_GUIDE_ITEMS,
  ADD_GUIDE_ITEM,
  ADD_TO_STEP,
  CHANGE_STEP_INDEX,
  DELETE_STEP
} from '@/store/mutation_type.js'

//
const guideItems = {
  state: {
    stepIndex: 0,
    steps: []
  },
  mutations: {
    [ADD_TO_STEP](state, info){
      let Index = state.stepIndex;

      state.steps.push( Object.assign({}, {stepIndex: Index}, info) );
      state.stepIndex = parseFloat(state.stepIndex) + 1;
    },
    [CHANGE_STEP_INDEX](state, info){
      state.steps = [];
      for(let i = 0; i < info.length; i++){
          info[i].stepIndex = i; 
      }
      state.steps = info;

    },
    [DELETE_STEP](state, info){
      let steps = state.steps.filter(function(item,index){
        if(item.stepIndex !== info.stepIndex){
          return true;
        }
      });
      for(let i = 0; i < steps.length; i++){
        steps[i].stepIndex = i;
      }
      state.steps = steps;
     
    }
  },
  actions: {
    add_to_stepLists({commit, rootState}, item) {
      commit('ADD_TO_STEP', item);
    },
    changeStepIndex({commit, rootState}, info){
       commit('CHANGE_STEP_INDEX', info);
    },
    deleteStep({commit}, info){
      commit('DELETE_STEP', info);
    }
  
  },
  getters: {
    getSteps(state){
      return state.steps;
    }
  }
};

export default guideItems;
