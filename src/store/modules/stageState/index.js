import {INIT_STAGE, 
        ADD_STAGE, 
        DELETE_STAGE,
        SHOW_STAGENAME,
        CHANGE_STAGE_ACTIVE,
        CHANGE_STAGE_INDEX,
        ADD_STEP_TO_STAGE,
           } from '@/store/mutation_type.js';
import { EventBus } from '@/tools';
const stageState = {
  state: {
    stageCount: 0,
    activeId: null,
    stageModal: {
      stageName: '',
      stageId: 0,
      stepList: [],
      active: false,
    },
    stageList: [
   
    ]
  },
  actions: {
    init_stage({state, commit}, ){
     
      commit('INIT_STAGE', );
      if(state.stageList.length > 0){
        commit('CHANGE_STAGE_ACTIVE');
      }
      
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
      commit('CHANGE_STAGE_ACTIVE', info)
    },
  
    add_step_to_stage({state, commit, rootState}){
     
      commit('ADD_STEP_TO_STAGE', rootState)
    },
    delete_stage({state, commit},info){
     
      commit('DELETE_STAGE', info);
      commit('CHANGE_STAGE_INDEX');
      commit('CHANGE_STAGE_ACTIVE');
      
    }
  },
  mutations: {
    [INIT_STAGE](state, ){
      state.stageModal.stepList = [];
      let _CurrentCount = parseFloat(state.stageCount);
      let currentStage = state.stageModal;
      state.stageList.push(Object.assign({}, currentStage, 
                                         {stageId: _CurrentCount, 
                                          stageName: 'stage' + (_CurrentCount + 1),
                                         active: true}));
     
      state.stageCount = parseFloat(state.stageCount) + 1;
      state.activeId = parseFloat(state.stageCount) - 1;
    },
    [CHANGE_STAGE_ACTIVE](state, info){
      let _stages = state.stageList;
      if(info){
          state.activeId = info.stageId; 
      }else{
        state.activeId = _stages.length - 1;
      }
        
          _stages.forEach( (item, index) => {
            if(state.activeId == item.stageId){
              item.active = true;
            }else{
              item.active = false;
            }
          })
    },
    [SHOW_STAGENAME](state, info){
      let _currentStage = state.stageList[state.stageCount-1];
      Object.assign( _currentStage, info);
       },
    [CHANGE_STAGE_INDEX](state, info){
        let list = null;
        if(info){
           list = info;
        }else{
          list = state.stageList;
        }
        list.forEach( (item, index) => {
          item.stageId = index;
        });
      },
    [ADD_STEP_TO_STAGE](state, rootState, info){
      let stateCount = parseFloat(state.stageCount) - 2;
      state.stageList[stateCount].stepList.push(...rootState.addStep.steps);
      rootState.addStep.stepIndex = 0;
      rootState.addStep.steps = [];
      EventBus.$emit('initComponent');
    },
    [DELETE_STAGE](state, info){
      let _filtered = state.stageList.filter( (item, index) => {
        if(item.stageId !== info.stageId){
          return true;
        }
      });
      state.stageList = [];
      state.stageList = _filtered;
      state.stageCount = _filtered.length;

      if(info.stageId > state.activeId){
        return;
      }
      if(info.stageId == state.activeId && (info.stageId == state.stageCount - 1)){
        state.activeId = _filtered.length - 1;
      }
      if(info.stageId == state.activeId && (info.stageId < state.stageCount - 1)){
        state.activeId = state.activeId + 1;
      }

    }
  },
  getters: {
    stageList(state){
      return state.stageList;
    },
    currentStage(state){
      console.log('activeId >> ',state.activeId);
       console.log('stagelist ::: >> ',state.stageList);
       return state.stageList[state.activeId]
    },
    showStage(state){
     
      return state.stageCount;
    }
  }
};

export default stageState;