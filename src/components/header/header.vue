<template>
	<Layout>
		<Header class="header">
			<Menu class="header-menu" mode="horizontal" theme="dark" active-name="1">
				<Row>
				<Col span="8" class="layout-logo header-logo">
					<img src="@/assets/logo.png">
				</Col>
				<Col  class="layout-nav header-menu-ui">
					<Menu-Item :name="item.name" v-for="item in header" :key="item.name">
            <a :href="item.path" class="router-span" v-text="item.value"></a>
						<!--<router-link tag="a" class="router-span" :to="item.path" v-text="item.value">-->
						<!--</router-link>-->
					</Menu-Item>
				</Col>
				</Row>
			</Menu>
		</Header>
		<div class="header-under-bar"></div>
	</Layout>
</template>
<script>
	import {headerRouter} from '@/router/routerconfig'
	export default {
		data() {
			return {
				header: headerRouter
			}
		}
	}
</script>
<style lang="less" scoped>
.layout-logo{
	// width: 500px;
	height: 52px;
	float: left;
	position: relative;
	top: 6px;
	left: 0;
}
.header-logo img{
	display: block;
	width: 100%;
	height: 100%;
}
.layout-nav{
	// width: 420px;
	margin: 0 auto;
	margin-right: 20px;
}
.layout-footer-center{
	text-align: center;
}
.header-menu{
	background-color: #f9f9f9;
}
.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item{
	color: #333;
}
.header-under-bar{
	width: 100%;
	height: 10px;
	background-color: #21488a;
	margin-top: 64px;
}
.header-menu-ui{
	float: right;
	height: 64px;
	line-height: 64px;
}
.router-link-active{
	color: #21488a;
}
</style>
