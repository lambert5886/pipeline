<template>
	<div class="assembly-container">
		<div class="assembly-btn">
			<router-link to="/assembly/create"><Button>添加流水线</Button></router-link>
		</div>
		<div class="assembly-items">
			<div class="assembly-item">
				<Row type="flex" justify="space-between" class="code-row-bg assembly-top">
					<Col span="4">tem_pre_submit</Col>
					<Col span="4">2018-8-11 14:38</Col>
					<Col span="4">成功</Col>
					<Col span="4">
					<span>豆子</span>
					<Icon class="icon-state" type="plus-round" @click="isShow = true" v-show="!isShow"></Icon>
					<Icon class="icon-state" type="minus-round" @click="isShow = false" v-show="isShow"></Icon>
					</Col>
				</Row>
			<div v-if="isShow">
				<Row class="essembly-title">
					<Col>tpm_pre_submit最近3次构建</Col>
				</Row>
				<Row type="flex" justify="space-around" class="code-row-bg essembly-list-title">
					<Col span="4">构建编号</Col>
					<Col span="4">构建时间</Col>
					<Col span="4">构建结果</Col>
					<Col span="4">构建触发人</Col>
				</Row>
				<Row type="flex" justify="space-around" class="code-row-bg">
					<Col span="4">40</Col>
					<Col span="4">2018-4-11 14:38</Col>
					<Col span="4">成功</Col>
					<Col span="4">橘子</Col>
				</Row>
				<Row type="flex" justify="space-around" class="code-row-bg">
					<Col span="4">40</Col>
					<Col span="4">2018-4-11 14:38</Col>
					<Col span="4">成功</Col>
					<Col span="4">橘子</Col>
				</Row>
				<Row type="flex" justify="space-around" class="code-row-bg">
					<Col span="4">40</Col>
					<Col span="4">2018-4-11 14:38</Col>
					<Col span="4">成功</Col>
					<Col span="4">橘子</Col>
				</Row>
				<Row class="essembly-title">
					<Col>对应部署环境下应用访问地址</Col>
				</Row>
				<Row type="flex" justify="space-around" class="code-row-bg essembly-list-title">
					<Col span="4">应用名称</Col>
					<Col span="4">部署时间</Col>
					<Col span="4">应用访问地址</Col>
					<Col span="4">容器地址</Col>
				</Row>
				<Row type="flex" justify="space-around" class="code-row-bg">
					<Col span="4">dangfei-comsumer</Col>
					<Col span="4">2018-4-11 14:38</Col>
					<Col span="4">172.168.34.28</Col>
					<Col span="4">172.168.34.28:01</Col>
				</Row>
			</div>
		</div>
		<div class="assembly-item">
				<Row type="flex" justify="space-between" class="code-row-bg assembly-top">
					<Col span="4">tem_pre_submit</Col>
					<Col span="4">2018-8-11 14:38</Col>
					<Col span="4">成功</Col>
					<Col span="4">
					<span>豆子</span>
					<Icon class="icon-state" type="plus-round" @click="isShow2 = true" v-show="!isShow2"></Icon>
					<Icon class="icon-state" type="minus-round" @click="isShow2 = false" v-show="isShow2"></Icon>
					</Col>
				</Row>
			<div v-if="isShow2">
				<Row class="essembly-title">
					<Col>tpm_pre_submit最近3次构建</Col>
				</Row>
				<Row type="flex" justify="space-around" class="code-row-bg essembly-list-title">
					<Col span="4">构建编号</Col>
					<Col span="4">构建时间</Col>
					<Col span="4">构建结果</Col>
					<Col span="4">构建触发人</Col>
				</Row>
				<Row type="flex" justify="space-around" class="code-row-bg">
					<Col span="4">40</Col>
					<Col span="4">2018-4-11 14:38</Col>
					<Col span="4">成功</Col>
					<Col span="4">橘子</Col>
				</Row>
				<Row type="flex" justify="space-around" class="code-row-bg">
					<Col span="4">40</Col>
					<Col span="4">2018-4-11 14:38</Col>
					<Col span="4">成功</Col>
					<Col span="4">橘子</Col>
				</Row>
				<Row type="flex" justify="space-around" class="code-row-bg">
					<Col span="4">40</Col>
					<Col span="4">2018-4-11 14:38</Col>
					<Col span="4">成功</Col>
					<Col span="4">橘子</Col>
				</Row>
				<Row class="essembly-title">
					<Col>对应部署环境下应用访问地址</Col>
				</Row>
				<Row type="flex" justify="space-around" class="code-row-bg essembly-list-title">
					<Col span="4">应用名称</Col>
					<Col span="4">部署时间</Col>
					<Col span="4">应用访问地址</Col>
					<Col span="4">容器地址</Col>
				</Row>
				<Row type="flex" justify="space-around" class="code-row-bg">
					<Col span="4">dangfei-comsumer</Col>
					<Col span="4">2018-4-11 14:38</Col>
					<Col span="4">172.168.34.28</Col>
					<Col span="4">172.168.34.28:01</Col>
				</Row>
			</div>
		</div>
	</div> 
</div>
</template>
<script>
	export default {
		data () {
			return {
				isShow: true,
				isShow2: true
			}
		}
	}
</script>
<style scoped>
.assembly-item{
	margin-top: 20px;
	padding: 10px;
	border: 1px solid #21488A;
	box-shadow: 8px 8px 5px #21488A;
}
.assembly-top{
	font-weight: 600;
	margin-bottom: 10px;
}
.essembly-title{
	font-weight: 600;
}
.icon-state{
	margin-left: 20px;
}
.essembly-list-title{
	color: #21488A;
}
</style>