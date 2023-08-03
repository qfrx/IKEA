<template>
	<view class="findTopLogo">
		<view class="findTopLogo-left">
			<image class="findTopLogo-left-logo" src="../static/images/h5-logo.svg" mode=""></image>
		</view>
		<view class="findTopLogo-right">
			<i class="iconfont icon-sousuo"></i>
			<i class="iconfont icon-sousuo"></i>
			<i class="iconfont icon-sousuo"></i>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.findTopLogo {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100rpx;
		padding: 0 40rpx;
		background-color: #fff;
		.findTopLogo-left {
			width: 126rpx;
			height: 50rpx;
			.findTopLogo-left-logo {
				display: block;
				width: 126rpx;
				height: 50rpx;
			}
		}
		.findTopLogo-right {
			width: 230rpx;
			display: flex;
			justify-content: space-between;
			.iconfont {
				font-weight: 700;
				font-size: 30rpx;
			}
		}
	}
	view {
		box-sizing: border-box;
	}
</style>