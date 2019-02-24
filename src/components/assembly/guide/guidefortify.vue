<template>
  <div class="structure-container">
    <div class="from">
      <Form ref="formValidate"
            :label-width="150">
        <FormItem label="自定义名称">
          <Input v-model="fortify.stepName"
                 placeholder="请输入自定义的名称"
                 style="width: 200px"></Input>
        </FormItem>
        <FormItem label="">
          <Button type="success" @click="addToStepHandle">确定</Button>
          <Button >重置</Button>
        </FormItem>

      </Form>
    </div>
  </div>
</template>
<script>
import { EventBus } from "@/tools";
export default {
  data() {
    return {
      fortify: {}
    };
  },
  created() {
    this.echoFortify();
  },
  mounted() {
    EventBus.$on("add_fortify", this.submitData);
    EventBus.$on("edit_fortify", this.editFortify);
    EventBus.$on("echo_step_fortify", this.echoData);
    EventBus.$on("echo_fortify", this.echoFortify);
  },
  methods: {
    addToStepHandle(){
      let _fortify = {};
      if(this.fortify.stepName){
        _fortify = Object.assign({}, this.fortify, {stepId: 'fortify'});
      }else{
        _fortify = Object.assign({}, {stepId: 'fortify', stepName: 'Foritfy扫描执行'});
      }
      this.$store.dispatch('add_to_stepLists', _fortify);
    },
    submitData() {
      let _fortifyData = Object.assign({}, { stepId: "fortify" }, this.fortify);

      this.$store.dispatch("add_to_stepLists", _fortifyData);
    },
    echoData(item) {
      this.fortify = {};
      let _data = this.$store.getters.getSteps;
      let index = item.stepIndex;
      this.fortify = Object.assign({}, _data[index]);
    },
    editFortify(info) {
      console.log(" edit_fortify  >>> ", this.fortify);
      this.$store.dispatch("editStep", { index: info, data: this.fortify });
    },
    echoFortify() {}
  },
  beforeDestroy() {
    EventBus.$off("add_fortify");
    EventBus.$off("echo_fortify");
  }
};
</script>
<style scoped>
.high-level {
  width: 70%;
  margin: 20px auto;
  padding: 10px 0;
  border: 1px solid #21488a;
}

.form-label,
.form-in-label {
  width: 150px;
  display: inline-block;
  text-align: right;
}

.form-in-label {
  width: 100px;
}
</style>
