<template>
  <div class="guide-container">
    <div class="guite-process">
      <Row class="code-row-bg" type="flex">
        <div id="step-wrapper">
            <assemblyStageItem></assemblyStageItem>
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
      <router-link to="/assembly/preview" tag="Button">确定</router-link>
      <router-link to="/assembly/create" tag="Button">预览</router-link>
    </div>
  </div>
</template>
<script>

  import Sortable from 'sortablejs';
  import assemblyStageItem from './guide/assemblystage-item';
  import GuideContent from './guide/guidecontent';
  import { EventBus } from '@/tools';
  export default {
    data() {
      return {
        active: 0,
        transferPersonShow: true,
        stage: {
       
        },
       
        
      }
    },
    created(){
     },

    mounted() { 
 
      EventBus.$on('on-blur', this.showName);
      EventBus.$on('echoStage', this.echoStage);
      EventBus.$on('add_toStage', this.addStepToStage);
    },
    beforeDestory(){
      console.log('  stepguide destorey >>>  ');
    },
    computed: {
     
      contentShow(){
        return this.$store.getters.showStage;
       
      },
    
    },
  
    methods: {
      showName(){
        // console.log('from methods showName >>>', this.stage, this.active);
        // console.log(this.$store.state.addStage.stageCount, this.$store.state.addStage.stageList)
        this.$store.dispatch('show_stageName', this.stage);
        

      },
      showOrHidden(){
        if(this.stage.transferMode == 'auto'){
          this.transferPersonShow = false;
        }else{
          this.transferPersonShow = true;
        }
      },
      echoStage(info){
       Object.assign(this.stage, info);
       let steps = this.stage.stepList;
      
      EventBus.$emit('echoStep', steps);
      EventBus.$emit('initComponent',steps[0])
    
      },
      addStepToStage(){
        let steps = this.$store.getters.getSteps;
        let stages = this.$store.state.addStage;
        let stageIndex = stages.stageCount - 2;
        
       Object.assign( stages.stageList[stageIndex], this.stage);
      }

    },

    components: {
      assemblyStageItem,
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
    min-height: 80px;
   
  }
</style>
