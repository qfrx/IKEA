<template>
	<view class="classPages">
		<view class="classPages-top">
			<view class="classPages-top-search">
				<view class="iconfont icon-sousuo"></view>
				<view>你在找什么?</view>
			</view>
			<view class="classPages-top-title">
				<view>探索</view>
				<view>属于你的家居伴侣</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			onLoad(){
			  uni.setNavigationBarTitle({
			    title: '分类'
			  })
			}
		}
	}
</script>

<style lang="scss">
	.classPages {
		width: 100%;
		
		.classPages-top {
			width: 100%;
			height: 360rpx;
			padding: 0 40rpx;
			padding-top: 40rpx;
			background: url('../../images/classpages-bg.jpg') no-repeat center top;
			background-size: cover;
			
			.classPages-top-search {
				display: flex;
				align-items: center;
				width: 100%;
				height: 70rpx;
				margin-bottom: 50rpx;
				padding-left: 30rpx;
				border: 2rpx solid #ccc;
				border-radius: 999px;
				font-size: 28rpx;
				color: #fff;
				background-color: rgba(0, 0, 0, 0.2);
				
				.iconfont {
					font-weight: 700;
					margin-right: 30rpx;
				}
			}
			
			.classPages-top-title {
				width: 100%;
				font-size: 52rpx;
				color: #fff;
				font-weight: 700;
			}
		}
	}
	view {
		box-sizing: border-box;
	}
</style>