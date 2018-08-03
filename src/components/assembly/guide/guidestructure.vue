<template>
  <div class="structure-container">
    <div class="from">
      <Form  :label-width="150" >
        <FormItem label="自定义名称" prop="name">
          <Input placeholder="请输入自定义的名称" style="width: 200px" v-model="structure.name"></Input>
        </FormItem>
        <FormItem label="源代码地址">
          <Select v-model="structure.SourceCode" 
                 
                  style="width: 200px">
            <Option value="clearcase">learcase</Option>
            <Option value="git">Git</Option>
          </Select>
       
        </FormItem>
        <FormItem label="Repositories">
          <Row v-if="structure.SourceCode == 'git'" style="margin-left: 10px auto;">
            <FormItem label="Repository url">
              <Input placeholder="请输入地址" style="width: 150px"/>
            </FormItem>
          
            <Row>
              Credentials <Input placeholder="请输入人员名称 以/分割" style="width: 150px"/>
            </Row>
            <Row>
              brance <Input placeholder="请输入分支" style="width: 150px"/>
            </Row>
          </Row>
        </FormItem>
        <FormItem label="构建标识" prop="mark">
          <Input placeholder="" style="width: 200px" v-model="structure.mark"></Input>
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
     
      </Form>
    </div>
  </div>
</template>
<script>
  import {guide} from '@/base/commonparam'
  import {addGuideList} from '@/base/common'
  import { EventBus } from '@/tools';
  export default {
    data() {
      return {
        SourceCode: '',
        structure: {
          
        }
      }
    },
   
    mounted() {
      EventBus.$on('on-query-change', this.showCodeGit);
    },
    beforeDestroy(){
      console.log(this.structure)
    },
   
    methods: {
      showCodeGit(info){
        console.log(info)
        // this.showOrHidden = true;
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
