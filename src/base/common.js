/*
  * stepsId  第几个步骤
  * listId   stepsList的id
  * typeId   分类的id ,  typeName 分类的name
  * form     表单对象
  *
*/
// this.guideTypeItems.find(item => this.typeId === item.typeId);
import guide from './commonparam'
export function addGuideList(stepsId, listId, typeId, typeName, form) {
  let obj = {};
  obj.id = listId;
  obj.stepId = typeId;
  obj.name = typeName;
  obj.form = form;
  guide.steps[0].stepsList.push(obj);
  console.log(guide.steps[0].stepsList.length + '  stru');
}
