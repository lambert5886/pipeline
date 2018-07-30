<template>
  <div class="structure-container">
    <div class="from">
      <Form ref="formValidate" :label-width="150">
        <FormItem label="自定义名称">
          <Input placeholder="请输入自定义的名称" style="width: 200px"></Input>
        </FormItem>
        <FormItem>
          <CheckboxGroup>
            <Checkbox label="代码是否来自前面的步骤"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="要拷贝的归档文件列表">
          <Row>
            <Input placeholder="" style="width: 200px"></Input> <br>
            <Input placeholder="" style="width: 200px"></Input>
          </Row>
        </FormItem>

        <FormItem label="镜像仓库repository">
          <Select style="width: 200px">
            <Option value="clearcase">mean</Option>
          </Select>
       
        </FormItem>
        <FormItem label="registry url">
            <Select style="width: 200px">
                <Option value="128.194.224.225:8080">128.194.224.225:8080</Option>
             </Select>
        </FormItem>
        <FormItem label="Credential">
            <Select style="width: 200px">
                <Option value="128.194.224.225:8080">128.194.224.225:8080</Option>
             </Select>
        </FormItem>
        
        <Row>
          <span class="form-label">高级配置</span>
          <Row class="high-level">
            <span>第一个镜像文件</span>
            <Button type="primary">删除</Button><br />
              <span class="form-label">镜像名</span> 
                  <Input placeholder="" style="width: 200px"></Input><br>
              <span class="form-label">Dockerfile文件位置</span> 
                  <Input placeholder="" style="width: 200px"></Input><br>
              <span class="form-label">需要的镜像文件</span> 
                  <Input placeholder="" style="width: 200px"></Input><br>
              <span class="form-label">镜像tag</span>
                  <Input placeholder="" style="width: 200px"></Input><br>
            
          </Row>
        </Row>
        <!--<FormItem>-->
          <!--<Button type="primary">确定</Button>-->
          <!--<Button type="ghost" style="margin-left: 8px">重置</Button>-->
        <!--</FormItem>-->
      </Form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style scoped>
  .high-level{
    width: 70%;
    margin: 20px auto;
    padding: 10px 0;
    border: 1px solid #21488a;
  }
  .form-label,.form-in-label {
    width: 150px;
    display: inline-block;
    text-align: right;
  }
  .form-in-label{
    width: 100px;
  }
</style>
