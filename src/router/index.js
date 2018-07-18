import Vue from 'vue'
import Router from 'vue-router'

import MainContent from '../components/content/maincontent'
import AssemblyManage from '../components/assembly/assemblymanage'
import AssemblyCreate from '../components/assembly/assemblycreate'
import AssemblyStep from '../components/assembly/assemblystep'
import AssemblyGuideStructure from '../components/assembly/guide/guidestructure'
import AssemblyGuideFindbugs from '../components/assembly/guide/guidefindbugs'
import AssemblyGuideFortify from '../components/assembly/guide/guidefortify'
import AssemblyGuideCobertura from '../components/assembly/guide/guidecobertura'
import AssemblyGuideDocker from '../components/assembly/guide/guidedocker'
import AssemblyPreview from '../components/assembly/assemblypreview'
Vue.use(Router)
export default new Router({
  routes: [
  {
    path: '/',
    redirect: '/assembly',
    component: MainContent
  },
  {
    path: '/assembly',
    name: 'assembly',
    component: MainContent,
    children: [
    {path: '/assembly', name: 'assembly', component: AssemblyManage},
    {path: '/assembly/create', name: 'assembly_create', component: AssemblyCreate},
    {path: '/assembly/step', name: 'assembly_step', component: AssemblyStep},
    {path: '/assembly/preview', name: 'assembly_step', component: AssemblyPreview}
    ]
  },
  {
    path: '/assembly/guide',
    name: 'assembly_step_guide',
    redirect: '/assembly/guide/structure',
    component: AssemblyStep,
    children: [
    {path: '/assembly/guide/structure', name: 'assembly_guide_structure', component: AssemblyGuideStructure},
    {path: '/assembly/guide/findbugs', name: 'assembly_guide_findbugs', component: AssemblyGuideFindbugs},
    {path: '/assembly/guide/fortify', name: 'assembly_guide_fortify', component: AssemblyGuideFortify},
    {path: '/assembly/guide/cobertura', name: 'assembly_guide_Cobertura', component: AssemblyGuideCobertura},
    {path: '/assembly/guide/docker', name: 'assembly_guide_Cobertura', component: AssemblyGuideDocker}
    ]
  },
  ]
})
