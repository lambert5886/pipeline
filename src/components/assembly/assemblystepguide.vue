<template>
  <div class="guide-container">
    <div class="guite-process">
      <Row class="code-row-bg" type="flex">
        <div id="step-wrapper">
            <assemblyStepItem
            v-for="(item, index) in stageLists"
            :key="index"
            :stageItem="item"
            ></assemblyStepItem>
        </div>
      </Row>
   
    </div>
    <div class="stepContent" v-if="contentShow">
        <Row :gutter="12"> 
            <div class="stage-wrapper">
              <Col span="8">
                <Input v-model="stage.stageName"
                       @on-blur="showName">
                  <span slot="prepend">定义阶段名称</span>
                </Input>
              </Col>
              <Col span="8">
                <Select v-model="stage.transferMode"  
                        @on-query-change="showOrHidden"
                        style="width:200px">
                  <Option value="auto">自动流转</Option>
                  <Option value="hand">手动流转</Option>
                </Select>
              </Col>
              <Col v-if="transferPersonShow" span="8">
                <Input v-model="stage.transferPerson">
                  <span slot="prepend">流转人</span>
                </Input>
              </Col>
            </div>
          </Row>
      <guide-content ></guide-content>
      <router-link to="/assembly/preview" tag="Button">下一步</router-link>
      <router-link to="/assembly/create" tag="Button">上一步</router-link>
    </div>
  </div>
</template>
<script>

  import Sortable from 'sortablejs';
  import assemblyStepItem from './guide/assemblystep-item';
  import GuideContent from './guide/guidecontent';
  import { EventBus } from '@/tools';
  export default {
    data() {
      return {
        active: 1,
        transferPersonShow: true,
        stage: {
       
        }

        
      }
    },
    created(){
    
      let currentStage = this.$store.state.addStage;
      this.active = currentStage.stageCount;
     
      Object.assign(this.stage, currentStage.stageList[currentStage.stageCount]);
      
    },

    mounted() { 
     
       document.body.ondrop = function (event) {
        event.preventDefault();
        event.stopPropagation();
      };
      this.bindMove('step-wrapper');

      EventBus.$on('on-blur', this.showName);
    },
    computed: {
      stageLists(){
        return this.$store.getters.stageList;
      },
      contentShow(){
        return this.$store.getters.showStage;
       
      },
    
    },
  
    methods: {
      showName(){
        console.log('from methods showName >>>', this.stage.stageName, this.active);

        this.$store.dispatch('show_stageName', this.stage.stageName);
        

      },
      showOrHidden(){
        if(this.stage.transferMode == 'auto'){
          this.transferPersonShow = false;
        }else{
          this.transferPersonShow = true;
        }
      },
      setepChange(info){
       
      },

      bindMove(stepId){
        let vm = this;
        let todoList = document.getElementById(stepId);

        Sortable.create(todoList, {
          group: {
            name: 'list',
            pull: true
          },
          animation: 120,
          ghostClass: 'placeholder-style',
          fallbackClass: 'iview-admin-cloned-item',
          onMove: function(evt, originalEvent){

          },
          onEnd: function(evt){
            EventBus.$emit('stepChange', {evt,item: vm.stepItem});
          }
        });
      }
    },

    components: {
      assemblyStepItem,
      GuideContent
    }
  }
</script>

<style scoped lang="less">
  .icon-cricle,
  .icon-add {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    background-color: #637ead;
    border-radius: 50%;
    text-align: center;
    color: #fff;
  }

  .icon-arrow,
  .icon-add {
    font-size: 20px;
    font-weight: bold;
  }
 #step-wrapper{
   width: 100%;
 }
  .guite-process {
    height: 80px;
   
  }
</style>
