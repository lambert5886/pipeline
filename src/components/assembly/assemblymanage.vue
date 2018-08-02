<template>
  <div class="assembly-container">
    <div class="assembly-selection">
      <Row>
        <Col span="6">
          <span>项目名称:</span>
          <Select style="width:150px" v-model="prj">
            <Option v-for="item in prjList" :value="item.name" :key="item.name">{{item.name}}</Option>
          </Select>
        </Col>
        <Col span="6">
          <span>模块名称:</span>
          <Select style="width: 150px" v-model="model">
            <Option v-for="item in modelList" :value="item.name" :key="item.name">{{item.name}}</Option>
          </Select>
        </Col>
        <Col span="6">
          <span>代码仓库:</span>
          <Select style="width: 150px" v-model="house">
            <Option v-for="item in houselist" :value="item.name" :key="item.name">{{item.name}}</Option>
          </Select>
        </Col>
      </Row>
    </div>
    <div class="assembly-btn">
      <!--<router-link to="/assembly/create">-->
        <Button type="success" @click="clickCreate">添加流水线</Button>
    </div>
    <div class="assembly-items">
      <div class="assembly-title">
        <Row type="flex" justify="space-between">
          <Col :span="colNum">流水线名称</Col>
          <Col :span="colNum">关联代码库</Col>
          <Col :span="colNum">项目名称</Col>
          <Col :span="colNum">模块名称</Col>
          <Col :span="colNum">最新构建时间</Col>
          <Col :span="colNum">最新构建结果</Col>
          <Col :span="colNum">创建人</Col>
          <Col :span="colNum">操作</Col>
        </Row>
      </div>
      <div class="assembly-item">
        <Row type="flex" justify="space-between" class="assembly-top">
          <Col :span="colNum">tem_pre_submit</Col>
          <Col :span="colNum">BKJG/PARTY-MASSES/acount</Col>
          <Col :span="colNum">新党群</Col>
          <Col :span="colNum">账号模块</Col>
          <Col :span="colNum">2018-8-11 14:38</Col>
          <Col :span="colNum">成功</Col>
          <Col :span="colNum">豆子</Col>
          <Col :span="colNum">
            <Button size="small">编辑</Button>
            <Button type="error" size="small">删除</Button>
            <Icon class="icon-state" type="plus-round" @click="isShow = true" v-show="!isShow"></Icon>
            <Icon class="icon-state" type="minus-round" @click="isShow = false" v-show="isShow"></Icon>
          </Col>
        </Row>
        <div v-if="isShow">
          <Row class="assembly-row-title">
            <Col>tpm_pre_submit最近3次构建</Col>
          </Row>
          <Row type="flex" justify="space-between" class="code-row-bg assembly-list-title">
            <Col :span="colNum">构建编号</Col>
            <Col :span="colNum">构建时间</Col>
            <Col :span="colNum">构建结果</Col>
            <Col :span="colNum">构建触发人</Col>
          </Row>
          <Row type="flex" justify="space-between" class="code-row-bg ">
            <Col :span="colNum">40</Col>
            <Col :span="colNum">2018-4-11 14:38</Col>
            <Col :span="colNum">成功</Col>
            <Col :span="colNum">橘子</Col>
          </Row>
          <Row type="flex" justify="space-between" class="code-row-bg">
            <Col :span="colNum">40</Col>
            <Col :span="colNum">2018-4-11 14:38</Col>
            <Col :span="colNum">成功</Col>
            <Col :span="colNum">橘子</Col>
          </Row>
          <Row type="flex" justify="space-between" class="code-row-bg">
            <Col :span="colNum">40</Col>
            <Col :span="colNum">2018-4-11 14:38</Col>
            <Col :span="colNum">成功</Col>
            <Col :span="colNum">橘子</Col>
          </Row>
          <Row class="assembly-row-title">
            <Col>对应部署环境下应用访问地址</Col>
          </Row>
          <Row type="flex" justify="space-between" class="code-row-bg assembly-list-title">
            <Col :span="colNum">应用名称</Col>
            <Col :span="colNum">部署时间</Col>
            <Col :span="colNum">应用访问地址</Col>
            <Col :span="colNum">容器地址</Col>
          </Row>
          <Row type="flex" justify="space-between" class="code-row-bg">
            <Col :span="colNum">dangfei-comsumer</Col>
            <Col :span="colNum">2018-4-11 14:38</Col>
            <Col :span="colNum">172.168.34.28</Col>
            <Col :span="colNum">172.168.34.28:01</Col>
          </Row>
        </div>
      </div>
      <div class="assembly-item">
        <Row type="flex" justify="space-between" class="assembly-top">
          <Col :span="colNum">tem_pre_submit</Col>
          <Col :span="colNum">BKJG/PARTY-MASSES/acount</Col>
          <Col :span="colNum">新党群</Col>
          <Col :span="colNum">账号模块</Col>
          <Col :span="colNum">2018-8-11 14:38</Col>
          <Col :span="colNum">成功</Col>
          <Col :span="colNum">豆子</Col>
          <Col :span="colNum">
            <Button size="small">编辑</Button>
            <Button type="error" size="small">删除</Button>
            <Icon class="icon-state" type="plus-round" @click="isShow2 = true" v-show="!isShow2"></Icon>
            <Icon class="icon-state" type="minus-round" @click="isShow2 = false" v-show="isShow2"></Icon>
          </Col>
        </Row>
        <div v-if="isShow2">
          <Row class="assembly-row-title">
            <Col>tpm_pre_submit最近3次构建</Col>
          </Row>
          <Row type="flex" justify="space-between" class="code-row-bg assembly-list-title">
            <Col :span="colNum">构建编号</Col>
            <Col :span="colNum">构建时间</Col>
            <Col :span="colNum">构建结果</Col>
            <Col :span="colNum">构建触发人</Col>
            <!--<Col :span="colNum"></Col>-->
          </Row>
          <Row type="flex" justify="space-between" class="code-row-bg">
            <Col :span="colNum">40</Col>
            <Col :span="colNum">2018-4-11 14:38</Col>
            <Col :span="colNum">成功</Col>
            <Col :span="colNum">橘子</Col>
          </Row>
          <Row type="flex" justify="space-between" class="code-row-bg">
            <Col :span="colNum">40</Col>
            <Col :span="colNum">2018-4-11 14:38</Col>
            <Col :span="colNum">成功</Col>
            <Col :span="colNum">橘子</Col>
          </Row>
          <Row type="flex" justify="space-between" class="code-row-bg">
            <Col :span="colNum">40</Col>
            <Col :span="colNum">2018-4-11 14:38</Col>
            <Col :span="colNum">成功</Col>
            <Col :span="colNum">橘子</Col>
          </Row>
          <Row class="assembly-row-title">
            <Col>对应部署环境下应用访问地址</Col>
          </Row>
          <Row type="flex" justify="space-between" class="code-row-bg assembly-list-title">
            <Col :span="colNum">应用名称</Col>
            <Col :span="colNum">部署时间</Col>
            <Col :span="colNum">应用访问地址</Col>
            <Col :span="colNum">容器地址</Col>
          </Row>
          <Row type="flex" justify="space-between" class="code-row-bg">
            <Col :span="colNum">dangfei-comsumer</Col>
            <Col :span="colNum">2018-4-11 14:38</Col>
            <Col :span="colNum">172.168.34.28</Col>
            <Col :span="colNum">172.168.34.28:01</Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isShow: true,
        isShow2: true,
        colNum: 3,
        prj: '项目1',
        model: '模块1',
        house: '仓库1',
        prjList: [
          {name: '项目1'},
          {name: '项目2'}
        ],
        modelList: [
          {name: '模块1'},
          {name: '模块2'}
        ],
        houselist: [
          {name: '仓库1'},
          {name: '仓库2'}
        ]
      }
    },
    methods: {
      clickCreate(){
        this.$router.push({path: '/assembly/create'});
        let curChoise = [this.prj, this.model, this.house]
        sessionStorage.setItem('bread', curChoise);
      }
    }
  }
</script>
<style scoped>
  .assembly-selection{
    margin: 20px 0;
  }
  .assembly-title{
    border: 1px solid #21488a;
    margin: 10px 0;
    padding: 10px 0;
    text-align: center;
    font-weight: bold;
  }
  .assembly-item {
    margin-bottom: 20px;
    padding: 10px ;
    border: 1px solid #21488A;
    box-shadow: 8px 8px 5px #21488A;
    position: relative;
  }

  .assembly-top {
    font-weight: 600;
  }

  .assembly-row-title {
    font-weight: 600;
    text-align: left;
  }

  .assembly-list-title {
    color: #21488A;
  }
</style>
