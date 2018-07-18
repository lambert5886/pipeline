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
    <div class="stepContent" v-if="contentShow">
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
  export default {
    data() {
      return {
      
        active: 1,
      }
    },
    mounted() {
     
       document.body.ondrop = function (event) {
        event.preventDefault();
        event.stopPropagation();
      };
      this.bindMove('step-wrapper');
    },
    computed: {
      stepLists(){
        return this.$store.getters.stepList;
      }
    },
    methods: {
      setepChange(info){
        console.log('stepChange ::: ', info)
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
    height: 200px;
    border-bottom: 1px solid #ccc;
  }
</style>
