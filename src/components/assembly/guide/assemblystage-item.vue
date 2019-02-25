<template>
  <div class="stage-wrapper">
    <draggable v-model="stageList"
               :options="{animation: 300,draggable:'.step-item-wrapper'}"
               @end="onEnd">

      <div class="step-item-wrapper"
           v-for="(stageItem, index) in stageList"
           :key="index">

        <span class="addOrOk">
       
          <Icon v-if="stageItem.active"
                type="compose"
                @click="echoCurrentStage(stageItem)"
                color="#d41374"
                size="28"></Icon>
          <Icon v-if="!stageItem.active"
                color="#1eb70d"
                size="28"
                @click="echoCurrentStage(stageItem)"
                type="checkmark-circled"></Icon>
          <font>
            {{ stageItem.stageName }}
          </font>

        </span>
        <Icon class="close"
              type="close"
              size="16"
              color="red"
              @click="deleteStage(stageItem)"></Icon>
        <span class="arrow">
          <Icon type="arrow-right-a"
                color="#1eb70d"
                size="28"></Icon>

        </span>
      </div>
    </draggable>
    <div class="step-item-wrapper">

      <span class="addOrOk">
        <Icon type="plus-circled"
              @click="initStageHandle"
              color="#d41374"
              size="28"></Icon>
      </span>
      <span class="arrow"
            style="position: relative; left: -45px;">
        <Icon type="arrow-right-a"
              color="#1eb70d"
              size="28"></Icon>

      </span>
    </div>
  </div>

</template>

<script>
import draggable from "vuedraggable";
import { EventBus } from "@/tools";
export default {
  data() {
    return {
      stage: {}
    };
  },

  methods: {
    initStageHandle() {
      // 加号 新增 stage,
      EventBus.$emit('initStageBase');
    
     
    },
    echoCurrentStage(info) {
      // 回显 stage, 并 保存之前修改的 stage
      EventBus.$emit('saveStepListToStage');
      EventBus.$emit("echoStage", info);
      this.$store.dispatch('changeStageActive', info);
    },

    deleteStage(info) {
      // EventBus.$emit("delete_stage", info);
      this.$store.dispatch('delete_stage', info)
    },
    onEnd(Evt) {}
  },
  computed: {
    stageList: {
      get() {
        return this.$store.getters.stageList;
      },
      set(value) {
        console.log('items >>>> ', value)
        this.$store.dispatch("changeStageIndex", value);
      }
    }
  },
  components: {
    draggable
  }
};
</script>

<style scoped>
.step-item-wrapper {
  width: 150px;
  position: relative;
  float: left;
  margin-top: 20px;
  padding-top: 20px;
}

.step-item-wrapper:hover {
  cursor: pointer;
}
.step-item-wrapper .close {
  display: none;
}
.step-item-wrapper:hover .close {
  display: inline-block;
  position: absolute;
  right: 0px;
  top: 0px;
}
.handle {
  display: inline-block;
  float: left;
  height: 30px;
}
.addOrOk {
  display: inline-block;
 
  clear: both;
  width: 80%;
  text-align: center;
}
.addOrOk font {
  width: 100%;
  text-align: center;
  display: inline-block;
}
.arrow {
  display: inline-block;
  float: right;
  margin-top: 2px;
}
</style>