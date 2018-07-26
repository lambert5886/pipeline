import { ADD_STAGE, SHOW_STAGENAME  } from '@/store/mutation_type.js';

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
      transferNext: ''
    },
    stageList: [
      {
        stageName: '',
        stageId: 0,
        stepList: [],
        active: true,
        transferMode: '',
        transferPerson: '',
        transferPrev: '',
        transferNext: '',
       
      }
    ]
  },
  actions: {
    add_stage({commit}, info){
      commit('ADD_STAGE', info);
    },
    show_stageName({commit}, info){
      commit('SHOW_STAGENAME', info);
    }
  },
  mutations: {
    [ADD_STAGE](state, info){
     
        let _CurrentCount = parseFloat(state.stageCount) + 1;

        let currentStage = state.stageModal;
        state.stageCount = _CurrentCount;
        state.stageList.unshift( Object.assign({}, {stageId: _CurrentCount}, currentStage));
  
     
       
    },
    [SHOW_STAGENAME](state, info){
      console.log('stateLength >>>  ', state.stageList.length, state.stageCount)
      let _index = (state.stageList.length-1) - state.stageCount;
      state.stageList[_index].stageName = info;
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