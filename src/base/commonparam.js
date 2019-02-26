// 指引向导中的 类型
// export const guideTypeList = [
//   {typeId: 2, name: 'Fortify扫描', path: '/assembly/guide/fortify', routeName: 'assembly_guide_fortify'},
//   {typeId: 3, name: 'FindBugs', path: '/assembly/guide/findbugs', routeName: 'assembly_guide_findbugs'},
//   {typeId: 1, name: '单元测试', path: ''},
//   {typeId: 4, name: '代码获取', path: ''},
//   {typeId: 5, name: 'Docekr镜像', path: '/assembly/guide/docker',routeName: 'assembly_guide_docker'},
//   {typeId: 6, name: 'yaml部署', path: ''},
//   {typeId: 7, name: '自定义脚本', path: ''},
//   {typeId: 8, name: 'Cobertura', path: '/assembly/guide/cobertura', routeName: 'assembly_guide_Cobertura'},
//   {typeId: 9, name: '构建', path: '/assembly/guide/structure',routeName: 'assembly_guide_structure'}
// ]

export const guideTypeList = [{
  typeId: 'fortify',
  name: 'Fortify扫描执行',
  path: '/src/components/assembly/guide/guidefortify'
},
{
  typeId: 'findbugs',
  name: 'FindBugs',
  path: '/src/components/assembly/guide/guidefindbugs'
},

]

// 整个引导指引的 类目结构
export const guide = {
  steps: [
    {
      name: 'stpe1',
      steps_id: '01',
      stepsList: [
        {
          id: 0,
          name: 'Fortify扫描',
          typeId: 2,
          // path: '/assembly/guide/fortify',
          form: {
            name: 'Fortify扫描 已完成'
          }
        },
        {
          id: 1,
          name: '构建',
          typeId: 9,
          // path: '/assembly/guide/structure',
          form: {
            name: '重新构建',
            mark: '标识1234567'
          }
        },
      ]
    }
  ]
}

// 添加的form表单
export let formDataStructure = {
  name: '',
  mark: '',
}
