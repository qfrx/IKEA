<template>
	<view class="">
		<button @click="onLogin">测试</button>
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

