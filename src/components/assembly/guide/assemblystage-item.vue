<template>
  <div class="stage-wrapper">
    <draggable v-model="stageList"
               :options="{animation: 300,draggable:'.step-item-wrapper'}"
               @end="onEnd">

    
      <div  class="step-item-wrapper"
            v-for="(stageItem, index) in stageList"
            :key="index">
          <span class="handle">
            <img v-if="stageItem.active" src="@/assets/stepHandle.png" alt="">
          </span>
          <span class="addOrOk">
    
              <Icon  v-if="stageItem.active" 
                     type="plus-circled"  
                     @click="addStageHandle(stageItem.stageId)"
                     color="blue" size="28"></Icon>
              <Icon  v-if="!stageItem.active" 
                     color="blue" 
                     size="28"
                     @click="echoCurrentStage(stageItem)"  
                     type="checkmark-circled"></Icon>
           <font>
              {{ stageItem.stageName }}
           </font>
         
          </span>
          <span class="arrow">
              <Icon type="arrow-right-a" 
                    color="blue" 
                    size="28"></Icon>
           
          </span>
      </div>
    </draggable>
      <div  class="step-item-wrapper" >
          <span class="handle">
            <img  src="@/assets/stepHandle.png" alt="">
          </span>
          <span class="addOrOk">
    
              <Icon  
                     type="plus-circled"  
                     @click="initStageHandle"
                     color="blue" size="28"></Icon>
             
           <font>
             
           </font>
         
          </span>
          <span class="arrow">
              <Icon type="arrow-right-a" 
                    color="blue" 
                    size="28"></Icon>
           
          </span>
      </div>
  </div>
  
</template>

<script>
  import draggable from 'vuedraggable';
  import { EventBus } from '@/tools';
  export default{
  
    data(){
      return {
       
        stage: {
            
            }
      }
    },
    mounted(){
     
      
    },
    methods: {
      initStageHandle(info){ 
      
        this.$store.dispatch('init_stage');
        var _stageCount = this.$store.state.addStage.stageCount;
        if(_stageCount > 1){
          EventBus.$emit('add_toStage');
          this.$store.dispatch('add_step_to_stage'); 
         
        }
  
       
      },
      echoCurrentStage(info){
        
        EventBus.$emit('echoStage', info);
       
      },
      onEnd(Evt){

      },
      beforeDestroy(){
         }
    
    },
    computed: {
      stageList: {
        get(){
          return this.$store.getters.stageList;
        },
        set(value){
          this.$store.dispatch('changeStageIndex', value);
        }
      }
    },
    components: {
      draggable
    }
  
  }
</script>

<style scoped>
  .step-item-wrapper{
    width: 150px;
  
    float: left;

  }
  .step-item-wrapper:hover{
    cursor: pointer;
  }
  .handle{
    display: inline-block;
    float: left;
    height: 30px;
  }
  .addOrOk{
    display: inline-block;
    float: left;
    clear: both;
    width: 60%;
    text-align: center;
  }
  .addOrOk font{
    width: 100%;
    text-align: center;
    display: inline-block;
  }
  .arrow{
    display: inline-block;
    float: left;
    margin-top: 2px;
  }

</style>