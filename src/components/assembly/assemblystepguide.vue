<template>
  <div class="guide-container">
    <div class="guite-process">
      <Row class="code-row-bg" type="flex">
        <Col>
          <span class="icon-cricle"></span>
          <span class="icon-arrow">=></span>
        </Col>
        <Col>
          <!--<router-link to="/assembly/guide" @click="handleAdd">添加项目</router-link>-->
          <div @click="handleAdd">
            <span class="icon-add">+</span>
          </div>
        </Col>
        <Col>
          <span class="icon-arrow">=></span>
          <span class="icon-cricle"></span>
        </Col>
      </Row>
    </div>
    <guide-content :isShow="isShowContent"></guide-content>
    <router-link to="/assembly/preview" tag="Button" type="primary">下一步</router-link>
    <router-link to="/assembly/create" tag="Button" type="default">上一步</router-link>
  </div>
</template>
<script>
  import GuideContent from '@/components/assembly/guide/guidecontent'

  export default {
    data() {
      return {
        isShowContent: false
      }
    },
    watch: {
    },
    methods: {
      handleAdd() {
        this.isShowContent = true;
      }
    },
    components: {
      GuideContent
    }
  }
</script>

<style scoped lang="less">
  .icon-cricle, .icon-add {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    background-color: #637ead;
    border-radius: 50%;
    text-align: center;
    color: #fff;
  }

  .icon-arrow, .icon-add {
    font-size: 20px;
    font-weight: bold;
  }

  .guite-process {
    height: 200px;
  }
</style>
