<template>
  <div id="app" class="layout">
    <my-header></my-header>
    <Layout class="aside" :style="{minHeight: '100vh'}">
      <my-aside></my-aside>
      <my-content></my-content>
    </Layout>
   <!--  <Layout class="footer">
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout> -->
  </div>
</template>
<script>
  import MyHeader from '@/components/header/header'
  import MyAside from '@/components/aside/aside'
  import MyContent from '@/components/content/content'
  export default {
    name: 'App',
    data() {
      return {
      }
    },

    components: {
      MyHeader,
      MyAside,
      MyContent,
    }
  }
</script>
<style lang="less">
@import './less/index.less';
.layout{
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.aside{
  flex-direction: row !important;
}
.header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background: #f9f9f9 !important;
}
.router-span{
  display: block;
  width: 100%;
  height: 100%;
}
.layout-footer-center{
  background: #21488a !important;
  color: #fff;
  z-index: 100;
}
.ivu-layout-sider-trigger{
  background: transparent !important;
}
</style>
