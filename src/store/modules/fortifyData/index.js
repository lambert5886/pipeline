import { FORTIFY_DATA } from '@/store/mutation_type.js';

const fortifyData = {
  state: {
    list: []
  },
  actions: {
    add_fortifyData({commit}, info){
      commit('FORTIFY_DATA', info);
    }
  },
  mutations: {
    [FORTIFY_DATA](state, info){
      state.list.push(info);
    }
  },
  getters: {
    fortifyDataList(){
      return true;
    }
  }
};

export default fortifyData;
