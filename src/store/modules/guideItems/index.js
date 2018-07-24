import {searchItem} from '@/base/common'
import {
  INIT_GUIDE_ITEMS,
  ADD_GUIDE_ITEM
} from '@/store/mutation_type.js'

//
const guideItems = {
  state: {
    steps: []
  },
  mutations: {
    [INIT_GUIDE_ITEMS](state, list) {
      state.steps = list;
    },
    [ADD_GUIDE_ITEM](state, item) {
      state.steps.push(item);
    },
    [QUERRY_GUIDE_ITEM](state, key) {
      // searchItem
    }
  },
  actions: {
    addStep({commit}, item) {
      commit('ADD_GUIDE_ITEM', item);
    },
    setSteps({commit}, list) {
      commit('INIT_GUIDE_ITEMS', list);
    }
  },
  getters: {}
};

export default guideItems;
