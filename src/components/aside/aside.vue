<template>
	<Sider collapsible :collapsed-width="78" :style="{minHeight: '100vh'}" class="aside-bar" v-model="isCollapsed">
		<aside-bar class="sider-item" :class="menuitemClasses"></aside-bar>
	</Sider>
</template>
<script>
	import AsideBar from '@/components/aside/asidebar'
	export default {
		data () {
			return {
				isCollapsed: false
			};
		},
		computed: {
			menuitemClasses: function () {
				return [
				'menu-item',
				this.isCollapsed ? 'collapsed-menu' : ''
				]
			}
		},
		components: {
			AsideBar
		}
	}
</script>
<style scoped>
.aside-bar{
	background-color: #21488a;
}
.sider-item{
	color: #fff;
	background-color: #21488a;
}
</style>