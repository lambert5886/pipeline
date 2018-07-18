<template>
  <div  class="step-item-wrapper" >
      <span class="handle">
        <img v-if="stepItem.active" src="@/assets/stepHandle.png" alt="">
      </span>
      <span class="addOrOk">
        <img v-if="stepItem.active" @click="addStep(stepItem)" src="@/assets/stepAdd.png" alt="">
        <img v-if="!stepItem.active" src="@/assets/stepOk.png" alt="">
        <font>{{stepItem.text}}</font>
      </span>
      <span class="arrow">
        <img src="@/assets/stepArrow.png" alt="">
      </span>
  </div>
</template>

<script>
  import { EventBus } from '@/tools';
 
  
  export default{
    props: {
      stepItem: {
        type: Object,
        default: function(){
          return {}
        }
      }
    },
    mounted(){
     
      
    },
    methods: {
      addStep(info){
        this.$store.dispatch('add_step',info );
        // EventBus.$emit('add_step', info);
      },
    
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
    width: 70%;
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
    margin-top: 8px;
  }

</style>