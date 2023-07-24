<template>
	<view class="home-logo">
       <image class="logo" src="https://static.web.ikea.cn/static/images/h5/h5-logo.svg" mode=""></image>		
	</view>
</template>

<script>
import { getHomeBanner } from "@/api/home";
export default {
	methods: {
		async onLogin() {
			try {
				let res = await getHomeBanner()
				// 服务器请求结果
				console.log(res)
			} catch (err) {
				uni.showModal({
					title: `失败`
				})
      		}
		}
	}
}
</script>

<style lang="scss">
	.home-logo{
		.logo{
			height: 48rpx;
		}
	}
	
</style>

