import {

  ADD_TO_STEP,
  CHANGE_STEP_INDEX,
  CHANGE_STEP_ACTIVE,
  RESET_STEP_ACTIVE,
  DELETE_STEP,
  ECHO_STEP,
  EDIT_STEP
} from '@/store/mutation_type.js'

const guideItems = {
  state: {
    stageActiveId: 0,
    stepCont: 0,
    stepActive: null,
    stepList: []
  },
  actions: {
    add_to_stepLists({
      commit
    }, item) {
      commit('ADD_TO_STEP', item);
      commit('CHANGE_STEP_INDEX');
    },
    editStep({
      commit
    }, info) {
      commit('EDIT_STEP', info);
    },
    deleteStep({
      commit
    }, info) {
      commit('DELETE_STEP', info);
      commit('CHANGE_STEP_INDEX');
    },
    change_step_active({
      state,
      commit
    }, info) {
      commit('CHANGE_STEP_ACTIVE', info)
    },
    reset_step_active({
      commit
    }, info) {
      commit('RESET_STEP_ACTIVE');
    },
    changeStepIndex({
      commit,
      rootState
    }, info) {
      commit('CHANGE_STEP_INDEX', info);
    },

    echoStep({
      state,
      commit
    }, info) {
      commit('ECHO_STEP', info);
    },


  },
  mutations: {
    [ADD_TO_STEP](state, info) {
      let _item = null;

      if (state.stepActive != null) {

        state.stepList.forEach((item) => {
          if (item.index == state.stepActive) {
            Object.assign(item, info);
          }
        });

      } else {
        let _index = parseFloat(state.stepCont) + 1;
        _item = Object.assign({}, {
          index: _index
        }, info);
        state.stepList.push(_item);
        state.stepCont = _index;
      }

    },
    [EDIT_STEP](state, info) {
      let _currentStep = state.stepList[info.index];

      Object.assign(_currentStep, info.data);
    },
    [CHANGE_STEP_INDEX](state, info) {

      if (info) {
        state.stepList = [];
        for (let i = 0; i < info.length; i++) {
          info[i].index = i;
        }
        state.stepList = info;
      } else {
        state.stepList.forEach((item, index) => {
          item.index = index;
        });
      }


    },
    [CHANGE_STEP_ACTIVE](state, info) {
      state.stepActive = info.index;
    },
    [RESET_STEP_ACTIVE](state, info) {
      state.stepActive = null;
    },
    [ECHO_STEP](state, info) {
      state.stageActiveId = info.activeStage;
      state.stepList = [];
      state.stepList.push(...info.stepList);
    },
    [DELETE_STEP](state, info) {
      let steps = state.stepList.filter(function (item, index) {
        if (item.index !== info.index) {
          return true;
        }
      });

      state.stepList = steps;

    }
  },

  getters: {
    getSteps(state) {
      return state.stepList;
    },
    stepActive(state) {
      console.log(' state active >>>> ', state.stepActive, !!state.stepActive)
      return state.stepActive;
    }
  }
};

export default guideItems;
