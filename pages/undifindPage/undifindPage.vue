<template>
	<view class="contener">
		<view class="video-conter">
			<video class="video" src="https://static.web.ikea.cn/static/ufo.mp4" autoplay="true" loop="true"
				muted="true" show-center-play-btn="false" object-fit="fill" :controls="false"
				enable-progress-gesture="false"></video>
		</view>
		<view class="des">
			暂无相关数据~
		</view>
		<view class="back">
			<view class="text" @click="backPage">
				知道了
			</view>
		</view>
		<view class="bg-box">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			backPage(){
				uni.navigateBack(1)
			}

		}
	}
</script>

<style lang="scss">
	.video-conter {
		width: 80vw;
		height: 80vw;
		margin: 20vw auto 0;

	}

	.video {
		width: 100%;
		height: 100%;

	}

	.des {
		font-size: 20px;
		font-weight: bold;
		text-align: center;
		margin-top: 70px;
	}

	.back {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-top: 30px;
	}

	.text {
		padding: 1em 2em;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #56aa2e;
		border-radius: 999px;
		color: #fff;
		font-weight: bold;
	
	}
	.bg-box{
		width: 100%;
		height: 80vw;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>