<template>
  <div class="structure-container">
    <div class="from">
      <Form ref="formValidate" :model="formValidate" :label-width="150" :rules="ruleValidate">
        <FormItem label="自定义名称" prop="name">
          <Input placeholder="请输入自定义的名称" style="width: 200px" v-model="formValidate.name"></Input>
        </FormItem>
        <FormItem label="源代码地址">
          <Select style="width: 200px">
            <Option value="clearcase">learcase</Option>
            <Option value="git">Git</Option>
          </Select>
          <Row style="margin: 10px auto;">
            <Row>
              Repository url <Input placeholder="请输入地址" style="width: 150px"/>
            </Row>
            <Row>
              Credentials <Input placeholder="请输入人员名称 以/分割" style="width: 150px"/>
            </Row>
            <Row>
              brance <Input placeholder="请输入分支" style="width: 150px"/>
            </Row>
          </Row>
        </FormItem>
        <FormItem label="构建标识" prop="mark">
          <Input placeholder="" style="width: 200px" v-model="formValidate.mark"></Input>
        </FormItem>
        <Row>
          <span class="form-label">高级配置</span>
          <Row class="high-level">
            <FormItem label="jdk">
              <Select style="width: 200px">
                <Option value="jdk1.8">jdk1.8</Option>
                <Option value="jdk">jdk</Option>
              </Select>
            </FormItem>
            <FormItem label="maven">
              <CheckboxGroup>
                <Checkbox label="是否maven编译"></Checkbox>
              </CheckboxGroup>
              <Row>
                <span>需要maven编译的子目录</span>
                <Input style="width: 150px"/>
                <br/>
                <span>版本</span>
                <Select style="width: 200px">
                  <Option value="apache">apache-maven-3.0.4</Option>
                  <Option value="3">apache</Option>
                </Select>
              </Row>
            </FormItem>
            <FormItem label="nodejs">
              <CheckboxGroup>
                <Checkbox label="是否nodejs编译"></Checkbox>
              </CheckboxGroup>
              <Row>
                <span>需要maven编译的子目录</span>
                <Input style="width: 150px"/>
                <br/>
                <span>版本</span>
                <Select style="width: 200px">
                  <Option value="8">node-v8.2.1</Option>
                  <Option value="10">node-v10.2.1</Option>
                </Select>
              </Row>
            </FormItem>
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
  import {guide} from '@/base/commonparam'
  import {addGuideList} from '@/base/common'

  export default {
    data() {
      return {
        isSuccess: false,  // 表单验证是否成功
        guideItem: this.$route.query.guideItem,
        formValidate: {
          name: '',
          mark: '',
        },
        ruleValidate: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'}
          ],
          mark: [
            {required: true, message: '请输入标识', trigger: 'blur'}
          ],
        }
      }
    },
    watch: {
      $route: {
        handler(val) {
          if (val.query["id"]) {
            console.log(val.query.guideItem.form)
            this.formValidate.name = val.query.guideItem.form.name;
            this.formValidate.mark = val.query.guideItem.form.mark;
          } else {
            this.formValidate.name = '';
            this.formValidate.mark = '';
          }
        },
        deep: true
      }
    },
    mounted() {
      this.setInitData();
    },
    methods: {
      // 设置初始化数据
      setInitData() {
        if (typeof this.guideItem === 'undefined') {
          this.formValidate.name = '';
          this.formValidate.mark = '';
        } else {
          if (this.guideItem['form']) {
            this.formValidate.name = this.guideItem.form.name;
            this.formValidate.mark = this.guideItem.form.mark;
          }
        }
      },

      // 触发验证表单事件, 与父组件进行交互
      verifyForm() {
        this.handleSubmit();
        return this.isSuccess;
      },

      // 触发表单验证事件
      handleSubmit() {
        this.$refs.formValidate.validate((valid) => {
          if (valid) {
            this.isSuccess = true;
            this.saveFormData();
          } else {
            this.isSuccess = false;
          }
        })
      },

      //  将表单数据添加到数据中
      saveFormData() {
        //  更改数据分两种情况，一种是已有数据更新，一种是新建数据
        if (!this.$route.query['id']) {
          console.log('no id')
          //  新建数据
          let form = {
            name: this.formValidate.name,
            mark: this.formValidate.mark
          }
          // addGuideList(0, guide.steps[0].stepsList.length, '9', '构建', this.formValidate
          // );
          let obj = {};
          obj.id = guide.steps[0].stepsList.length;
          obj.stepId = 9;
          obj.name = '构建';
          obj.form = {
            name: this.formValidate.name,
            mark: this.formValidate.mark
          }
          guide.steps[0].stepsList.push(obj);
          this.$Message.success('添加成功!');
        } else {
          //  已有数据更新
          let id = this.$route.query['id'];
          let curItem = guide.steps[0].stepsList.find(item => id === item.id);
          curItem.form = {
            name: this.formValidate.name,
            mark: this.formValidate.mark
          }
          this.$Message.success('修改成功!');
        }
      }
    }
  }
</script>
<style scoped>
  .high-level {
    width: 70%;
    margin: 20px auto;
    padding: 10px 0;
    border: 1px solid #21488a;
  }

  .form-label, .form-in-label {
    width: 150px;
    display: inline-block;
    text-align: right;
  }

  .form-in-label {
    width: 100px;
  }
</style>
