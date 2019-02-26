<template>
  <div class="structure-container">
    <div class="from">
      <Form ref="formValidate"
            :label-width="150">
        <FormItem label="自定义名称">
          <Input placeholder="请输入自定义的名称"
                 v-model="bugs.stepName"
                 style="width: 200px"></Input>
        </FormItem>

        <FormItem label="jdk版本">
          <Select style="width: 200px"
                  v-model="bugs.peizhi">
            <Option value="jdk1.8">jdk1.8</Option>
            <Option value="jdk1.8">jdk1.7</Option>
            <Option value="jdk1.8">jdk1.6</Option>
          </Select>
        </FormItem>
        <FormItem label="maven版本">
          <Select style="width: 200px"
                  v-model="bugs.maven">
            <Option value="node-v8.2.1-linux-x64">node-v8.2.1-linux-x64</Option>
            <Option value="node-v8.2.1-linux-x32">node-v8.2.1-linux-x32</Option>

          </Select>

        </FormItem>
        <FormItem label="扫描目录">
          <Select style="width: 200px"
                  v-model="bugs.mulu">
            <Option value="1">根目录</Option>
            <Option value="2">子目录</Option>
          </Select>
        </FormItem>
        <FormItem label="findbugs命令">
          <Input style="width: 150px"
                 v-model="bugs.peizhi2"
                 placeholder="mvn findbugs:findbugs" />

        </FormItem>
          <FormItem label="">
          <Button type="success" @click="addToStepHandle">确定</Button>
          <Button @click="resetHandle">重置</Button>
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
      bugs: {}
    };
  },
  created() {},
  mounted() {
    EventBus.$on("add_findbugs", this.submitdata);
    EventBus.$on("echo_step_findbugs", this.echostepfindbugs);
   
  },
  methods: {
    addToStepHandle() {
      let _bugs = {};
      if (this.bugs.stepName) {
        _bugs = Object.assign({}, this.bugs, { stepId: "findbugs", stepName: "findbugs" });
      } else {
        _bugs = Object.assign(
          {},
          this.bugs,
          { stepId: "findbugs", stepName: "findbugs" }
        );
      }
      this.$store.dispatch("add_to_stepLists", _bugs);
        this.resetHandle();
    },
    echostepfindbugs(item) {
      

      this.bugs = Object.assign({}, item);
    },
    resetHandle(){
      this.bugs = {};
    },
   
  },
    beforeDestroy() {
    EventBus.$off("add_findbugs");
    EventBus.$off("echo_step_findbugs");
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
