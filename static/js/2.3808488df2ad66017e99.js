webpackJsonp([2],{FFCV:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("woOf"),i=e.n(s),n=e("GCuT"),u={data:function(){return{bugsData:{}}},created:function(){},mounted:function(){n.a.$on("add_findbugs",this.submitdata),n.a.$on("echo_step_findbugs",this.echostepfindbugs),n.a.$on("echo_findbugs",this.echofindBugs)},methods:{submitdata:function(){var t=i()({},{stepId:"findbugs"},this.bugsData);this.$store.dispatch("add_to_stepLists",t)},echostepfindbugs:function(t){this.bugsData={};var a=this.$store.getters.getSteps,e=t.stepIndex;this.bugsData=i()({},a[e])},echofindBugs:function(){}}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"structure-container"},[e("div",{staticClass:"from"},[e("Form",{ref:"formValidate",attrs:{"label-width":150}},[e("FormItem",{attrs:{label:"自定义名称"}},[e("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入自定义的名称"},model:{value:t.bugsData.stepName,callback:function(a){t.$set(t.bugsData,"stepName",a)},expression:"bugsData.stepName"}})],1),t._v(" "),e("FormItem",{attrs:{label:"jdk版本"}},[e("Select",{staticStyle:{width:"200px"},model:{value:t.bugsData.peizhi,callback:function(a){t.$set(t.bugsData,"peizhi",a)},expression:"bugsData.peizhi"}},[e("Option",{attrs:{value:"jdk1.8"}},[t._v("jdk1.8")]),t._v(" "),e("Option",{attrs:{value:"jdk1.8"}},[t._v("jdk1.7")]),t._v(" "),e("Option",{attrs:{value:"jdk1.8"}},[t._v("jdk1.6")])],1)],1),t._v(" "),e("FormItem",{attrs:{label:"maven版本"}},[e("Select",{staticStyle:{width:"200px"},model:{value:t.bugsData.maven,callback:function(a){t.$set(t.bugsData,"maven",a)},expression:"bugsData.maven"}},[e("Option",{attrs:{value:"node-v8.2.1-linux-x64"}},[t._v("node-v8.2.1-linux-x64")]),t._v(" "),e("Option",{attrs:{value:"node-v8.2.1-linux-x32"}},[t._v("node-v8.2.1-linux-x32")])],1)],1),t._v(" "),e("FormItem",{attrs:{label:"扫描目录"}},[e("Select",{staticStyle:{width:"200px"},model:{value:t.bugsData.mulu,callback:function(a){t.$set(t.bugsData,"mulu",a)},expression:"bugsData.mulu"}},[e("Option",{attrs:{value:"1"}},[t._v("根目录")]),t._v(" "),e("Option",{attrs:{value:"2"}},[t._v("子目录")])],1)],1),t._v(" "),e("FormItem",{attrs:{label:"findbugs命令"}},[e("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"mvn findbugs:findbugs"},model:{value:t.bugsData.peizhi2,callback:function(a){t.$set(t.bugsData,"peizhi2",a)},expression:"bugsData.peizhi2"}})],1)],1)],1)])},staticRenderFns:[]};var o=e("VU/8")(u,l,!1,function(t){e("Knf/")},"data-v-60c107fd",null);a.default=o.exports},"Knf/":function(t,a){}});
//# sourceMappingURL=2.3808488df2ad66017e99.js.map