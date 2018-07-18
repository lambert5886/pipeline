<template>
  <div class="guide-content">
    <layout>
      <Sider hide-trigger :style="{background: '#fff'}">
        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </template>
            <MenuItem name="1-1">Option 1</MenuItem>
            <MenuItem name="1-2">Option 2</MenuItem>
            <MenuItem name="1-3">Option 3</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </template>
            <MenuItem name="2-1">Option 1</MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Content class="guide-content-box">
        流转到此步骤方式
        <Select style="width:200px">
          <Option value="auto">自动流转</Option>
          <Option value="hand">手动流转</Option>
        </Select>
        <div class="form">
          <Row style="margin-bottom: 20px;">
            <span class="form-label">选择步骤：</span>
            <Select v-model="stepName" style="width: 150px">
              <Option v-for="step in steps" :value="step.stepId" :key="step.name" v-text="step.name">
              </Option>
            </Select>
          </Row>
          <router-view></router-view>
        </div>
      </Content>
    </layout>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        stepName: 1,
        steps: [
          {stepId: 1, name: '单元测试', path: ''},
          {stepId: 2, name: 'Fortify扫描', path: '/assembly/guide/fortify'},
          {stepId: 3, name: 'FindBugs', path: '/assembly/guide/findbugs'},
          {stepId: 4, name: '代码获取', path: ''},
          {stepId: 5, name: 'Docekr镜像', path: '/assembly/guide/docker'},
          {stepId: 6, name: 'yaml部署', path: ''},
          {stepId: 7, name: '自定义脚本', path: ''},
          {stepId: 8, name: 'Cobertura', path: '/assembly/guide/cobertura'},
          {stepId: 9, name: '构建', path: '/assembly/guide/structure'}
        ]
      }
    },
    watch: {
      stepName(val) {
        let step = this.steps.find(item => val === item.stepId);
        this.$router.push({path: step.path});
      }
    }
  }
</script>

<style scoped>
  .guide-content {
    margin-top: 20px;
    border-top: 1px solid #ccc;
  }

  .form {
    margin: 30px;
    padding: 30px;
    border: 1px solid #21488a;
  }

  .form-label {
    width: 150px;
    display: inline-block;
    text-align: right;
  }
</style>
