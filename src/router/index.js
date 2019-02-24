import Vue from 'vue'
import Router from 'vue-router'


 
import AssemblyStep from '../components/assembly/assemblystep'
 
Vue.use(Router)
export default new Router({
  routes: [

  {
    path: '/',
    name: 'assembly',
    component: AssemblyStep,
   
  },

  ]
})
