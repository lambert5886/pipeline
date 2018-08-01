import { INIT_STAGE, ADD_STAGE, SHOW_STAGENAME, CHANGE_STAGE_INDEX, ADD_STEP_TO_STAGE  } from '@/store/mutation_type.js';
import { EventBus } from '@/tools';
const addStage = {
  state: {
    stageCount: 0,
    stageModal: {
      stageName: '',
      stageId: 0,
      stepList: [],
      active: false,
      transferMode: '',
      transferPerson: '',
     
    },
    stageList: [
   
    ]
  },
  actions: {
    init_stage({state, commit}, info){
     
      commit('INIT_STAGE', info);
    },
    add_stage({state, commit}, info){
   
      commit('ADD_STAGE', info);
    },
    show_stageName({state, commit}, info){
    
      commit('SHOW_STAGENAME', info);
    },
    changeStageIndex({state, commit}, info){
     
      commit('CHANGE_STAGE_INDEX', info);
    },
    changeStageActive({state, commit}, info){
      
    },
    add_step_to_stage({state, commit, rootState}){
     
      commit('ADD_STEP_TO_STAGE', rootState)
    }
  },
  mutations: {
    [INIT_STAGE](state, info){
      state.stageModal.stepList = [];
      let _CurrentCount = parseFloat(state.stageCount);
      let currentStage = state.stageModal;
     state.stageList.push(Object.assign({}, currentStage, {stageId: _CurrentCount}));
      state.stageCount = parseFloat(state.stageCount) + 1;
    },
  
    [SHOW_STAGENAME](state, info){
      let _currentStage = state.stageList[state.stageCount-1];
      Object.assign( _currentStage, info);
       },
    [CHANGE_STAGE_INDEX](state, info){
      state.stageList = [];
      for(let i = 0; i < info.length; i++){
        info[i].stageId = i;
      }
      state.stageList = info; 
      },
    [ADD_STEP_TO_STAGE](state, rootState, info){
      let stateCount = parseFloat(state.stageCount) - 2;
      state.stageList[stateCount].stepList.push(...rootState.addStep.steps);
      rootState.addStep.stepIndex = 0;
      rootState.addStep.steps = [];
      EventBus.$emit('initComponent');
    }
  },
  getters: {
    stageList(state){
      return state.stageList;
    },
    showStage(state){
     
      return state.stageCount;
    }
  }
};

export default addStage;