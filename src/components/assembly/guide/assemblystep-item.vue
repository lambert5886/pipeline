<template>
  <div  class="step-item-wrapper" >
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
                 @click="showStage"  
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
</template>

<script>
  
  export default{
    props: {
      stageItem: {
        type: Object,
        default: function(){
          return {}
        }
      }
    },
    data(){
      return {
       
        stage: {
            
            }
      }
    },
    mounted(){
     
      
    },
    methods: {
      addStageHandle(info){ 

        this.$store.dispatch('add_stage', info );
        // EventBus.$emit('add_step', info);
      },
      showStage(){

      }
    
    },
    data(){
      return {}
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