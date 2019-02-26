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
    
  },
  mounted() {
  
    EventBus.$on("edit_fortify", this.editFortify);
    EventBus.$on("echo_step_fortify", this.echoData);
    
  },
  methods: {
    addToStepHandle(){
      let _fortify = null;
     
      if(this.fortify.stepName){
        _fortify = Object.assign({}, this.fortify, {stepId: 'fortify'});
      }else{
        _fortify = Object.assign({}, {stepId: 'fortify', stepName: 'Foritfy扫描执行'});
      }
      this.$store.dispatch('add_to_stepLists', _fortify);
      this.resetHandle();
    },
    submitData() {
      let _fortifyData = Object.assign({}, { stepId: "fortify" }, this.fortify);

      this.$store.dispatch("add_to_stepLists", _fortifyData);
    },
    echoData(item) {
     this.fortify = Object.assign({}, item);
    },
    editFortify(info) {
  
      this.$store.dispatch("editStep", { index: info, data: this.fortify });
    },
    
     resetHandle(){
      this.fortify = {};
    },
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
