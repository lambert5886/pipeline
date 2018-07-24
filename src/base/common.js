/*
  * stepsId  第几个步骤
  * listId   stepsList的id
  * typeId   分类的id ,  typeName 分类的name
  * form     表单对象
  *
*/
// this.guideTypeItems.find(item => this.typeId === item.typeId);
// import {guide} from './commonparam'
// export function addGuideList(stepsId, listId, typeId, typeName, form) {
//   console.log('hello');
//   let obj = {};
//   stepsId = 0;
//   obj.id = listId;
//   obj.stepId = typeId;
//   obj.name = typeName;
//   obj.form = form;
//   guide.steps[stepsId].stepsList.push(obj);
//   console.log(guide.steps[stepsId]);
// }

export function searchItem(list, key) {
  return list.find(item => item[key] === key);
}
