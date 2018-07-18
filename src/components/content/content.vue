<template>
	<Layout class="content">
		<Breadcrumb :style="{margin: '24px 0'}">
			<BreadcrumbItem v-text="curRouterTitle" :to="curRouterPath"></BreadcrumbItem>
		</Breadcrumb>
		<Content class="container">
			<main-content></main-content>
		</Content>
	</Layout>
</template>
<script>
	import {asideRouter} from '@/router/routerconfig'
	import MainContent from "@/components/content/maincontent"
	export default{
		data() {
			return {
				curRouterName: '',
				curRouterPath: '',
				curRouterTitle: '',
			}
		},
		created() {
			this.curRouterName = this.$router.history.current.name;
			this.curRouterPath = this.$router.history.current.path;
			this.setBread();
		},
		watch: {
			$route: {
				handler(curRouter, oldVal) {
					this.curRouterName = curRouter.name;
					this.curRouterPath = curRouter.path;
					this.setBread();
				},
				deep: true
			},
		},
		methods: {
			setBread () {
				var self = this;
				this.routerobj = asideRouter;
			
				let obj = this.routerobj.find(item => {
					return this.curRouterName.includes(item.name) === true;
				})
				let curItemConfig = obj.list.find(item => this.curRouterPath === item.path);
				if (typeof curItemConfig == 'undefined') {
					this.curRouterTitle = '';
				} else {
					this.curRouterTitle = curItemConfig.title;
				}
			}
		},
		components: {
			MainContent
		}
	}
</script>
<style scoped>
.content{
	margin: 0 20px;
	text-align: left;
}
.container{
	padding: 15px;	
	background-color: #fff;
}
</style>