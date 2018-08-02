<template>
  <div class="findbugspublish-wrapper">
    <Form ref="formValidate"
          :label-width="150">
       <FormItem label="自定义名称">
            <Input placeholder="请输入自定义的名称"
                   v-model="findbugspublish.name"
                   style="width: 200px"></Input>
       </FormItem>
       <FormItem label="pattern">
            <Input placeholder="**/target/findbugsXml.xml"
                  v-model="findbugspublish.name"
                  style="width: 200px"></Input>
       </FormItem>

    </Form>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        findbugspublish: {

        }
      }
    }
  }
</script>

<style scoped>

</style>
