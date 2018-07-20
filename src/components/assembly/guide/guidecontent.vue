<template>
  <div class="guide-content">
    <layout>
      <Sider hide-trigger :style="{background: '#fff'}">
        <Menu width="auto" active-name="plus" ref="asideMenu">
          <MenuItem v-for="(guideItem, index) in curGuideItems" :key="index" v-text="guideItem.name"
                    :name="index" @click.native="choseAsideItem(guideItem)"></MenuItem>
          <MenuItem name="plus" style="text-align: center">
            <Button type="primary" shape="circle" icon="plus-round" @click="submitGuide"></Button>
          </MenuItem>
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
            <Select v-model="typeId" style="width: 150px">
              <Option v-for="step in guideTypeItems" :value="step.typeId" :key="step.name" v-text="step.name">
              </Option>
            </Select>
          </Row>
          <router-view ref="verifyForm"></router-view>
        </div>
      </Content>
    </layout>
  </div>
</template>

<script>
  import {guideTypeList} from '@/base/commonparam'
  import {guide} from '@/base/commonparam'
  import { EventBus } from '@/tools';
  export default {
    data() {
      return {
        typeId: 0,
        guideTypeItems: guideTypeList, // 引导指引所有的类型
        curGuideItems: [],             // 点击某一个步骤时，当前步骤下的所有指引类型
        guideItemIndex: 0,             // 当前步骤下指引列表的索引值
      }
    },
    created() {
      this.curGuideItems = guide.steps[0].stepsList;
      this.guideItemIndex = this.curGuideItems.length;
    },
    methods: {
      // 点击“+”号，保存右边输入的内容
      submitGuide() {
        EventBus.$emit('getBugsData');
        // this.$store.dispatch('bugsDataAdd');

        let curStep = this._findCurStep();
        if (typeof curStep === "undefined") {
          return
        }
        // 验证表单
        // this.$refs.verifyForm.verifyForm();
        let isSuccess = this.$refs.verifyForm.verifyForm();
        if (!isSuccess) {
          return;
        }
        this.curGuideItems = guide.steps[0].stepsList;
        console.log(this.curGuideItems);

        // curStep.id = this.curGuideItems.length + 1;
        // this.curGuideItems.push(curStep);
        // guide.steps[0].stepsList = this.curGuideItems;
      },

      choseAsideItem(guideItem) {
        // 如果数据上有path可以直接跳转路由
        // this.$router.push({path: guideItem.path});

        // 数据上没有path 要匹配之后再跳路由
        this.stepId = guideItem.typeId;
        let curStep = this._findCurStep(guideItem.typeId);
        console.log(guideItem);
        this.$router.push({path: curStep.path, query: {id: guideItem.id, guideItem: guideItem}});
      },

      // 点击“+”号，保存右边输入的内容
      saveForm() {

      },

      // 点击“+”号,左边列表显示内容
      handleAside() {

      },

      // 找到当前选择的 向导类型
      _findCurStep(id) {
        if (typeof id === 'undefined') {
          return this.guideTypeItems.find(item => this.typeId === item.typeId);
        } else {
          return this.guideTypeItems.find(item => id === item.typeId);
        }
      }
    },
    watch: {
      typeId() {
        let curStep = this._findCurStep();
        this.$router.push({path: curStep.path});
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

  .guide-content-box {
    background-color: #fff;
    border-left: 1px solid #ccc;
  }

  .ivu-layout.ivu-layout-has-sider > .ivu-layout-content {
    overflow-x: visible;
  }
</style>
