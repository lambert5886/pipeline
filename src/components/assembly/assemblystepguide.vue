<template>
  <div class="guide-container">
    <div class="guite-process">
      <Row class="code-row-bg" type="flex">
        <div id="step-wrapper">
            <assemblyStepItem 
            v-for="(item, index) in stepLists" 
            :key="index" 
            :stepItem="item"
            ></assemblyStepItem>
        </div>
      
      </Row>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import { EventBus } from '@/tools';
  import Sortable from 'sortablejs';
  import assemblyStepItem from './guide/assemblystep-item';
  export default {
    data() {
      return {
        stepLists: [],
        active: 1,
      }
    },
    mounted() {
      EventBus.$on('addStepItem', this.getItems);
      EventBus.$on('stepChange', this.setepChange);
      this.getItems();

       document.body.ondrop = function (event) {
        event.preventDefault();
        event.stopPropagation();
      };
      this.bindMove('step-wrapper');
    },
    methods: {
      setepChange(info){
        console.log('stepChange ::: ', info)
      },
      getItems(info) {

        var stepArray = [{
          stepId: 'step01',
          active: true,
          text: '编译构建',
          index: 0,
          added: false,
        },
        {
          stepId: 'step02',
          active: false,
          text: 'findbugs扫描',
          index: 1,
          added: false,
        },
        {
          stepId: 'step03',
          active: false,
          text: 'fortify安全扫描',
          index: 2,
          added: false,
        },
        {
          stepId: 'step04',
          active: false,
          text: '单元测试',
          index: 3,
          added: false,
        },
        {
          stepId: 'step05',
          active: false,
          text: '生成并上传镜像文件',
          index: 4,
          added: false,
        }];


       
        let  fileArray = null;
        fileArray = stepArray.splice(0, this.active);
        if (info) {
      
             
          for (let i = 0; i < fileArray.length; i++) {

            if (fileArray[i].index == info.index + 1) {
              fileArray[i].active = true;
              fileArray[i].added = false;

            }else{
              fileArray[i].active = false;
              fileArray[i].added = true;
            
            }
          }
          if(info.added){

            return;
          }else{
            this.active = parseFloat(this.active) + 1;
          }
          
        }else{
          this.active = parseFloat(this.active) + 1;
        }
        this.stepLists = fileArray;
        
        
      
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
      assemblyStepItem
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
    height: 200px;
    border-bottom: 1px solid #ccc;
  }
</style>