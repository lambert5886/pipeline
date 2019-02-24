
import {

  ADD_TO_STEP,
  CHANGE_STEP_INDEX,
  DELETE_STEP,
  ECHO_STEP,
  EDIT_STEP
} from '@/store/mutation_type.js'

const guideItems = {
  state: {
    stageActiveId: 0,
    stepIndex: 0,
    steps: []
  },
  actions: {
    add_to_stepLists({commit}, item) {
      commit('ADD_TO_STEP', item);
    },
    changeStepIndex({commit, rootState}, info){
       commit('CHANGE_STEP_INDEX', info);
    },
    deleteStep({commit}, info){
      commit('DELETE_STEP', info);
    },
    echoStep({state, commit}, info){
      commit('ECHO_STEP', info);
    },
    editStep({commit},info){
      commit('EDIT_STEP', info);
    }
  
  },
  mutations: {
    [ADD_TO_STEP](state, item){
      let _item = null;
      let _index = parseFloat(state.stepIndex) + 1;
      _item = Object.assign({},{index: _index}, item );
      state.steps.push(_item);
      state.stepIndex = _index;
    },
    [EDIT_STEP](state, info){
      let _currentStep = state.steps[info.index];
      console.log(' editStep store >>>  ', _currentStep)
         Object.assign(_currentStep, info.data);
    },
    [CHANGE_STEP_INDEX](state, info){
      state.steps = [];
      for(let i = 0; i < info.length; i++){
          info[i].stepIndex = i; 
      }
      state.steps = info;

    },
    [ECHO_STEP](state, info){
      state.stageActiveId = info.activeStage;
      state.steps = [];
      state.steps.push(...info.stepList);
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
  
  getters: {
    getSteps(state){
      return state.steps;
    }
  }
};

export default guideItems;
