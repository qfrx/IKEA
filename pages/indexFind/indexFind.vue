<template>
	<view class="indexFind">
		<view>
			<findTopLogo></findTopLogo>
		</view>
		<view class="indexFind-tabs">
			<view @click="change(item.id)" v-for="item in list" :key="item.id" :class="['indexFind-tabs-list',{'active':active_index==item.id}]">
				<view>{{item.name}}</view>
			</view>
		</view>
		<view class="indexFind-item">
			<view class="indexFind-list">
				<image class="indexFind-list-img" src="../../static/images/test2.webp"></image>
				<view class="indexFind-list-font">卧室</view>
			</view>
			<view class="indexFind-list">
				<image class="indexFind-list-img" src="../../static/images/test2.webp"></image>
				<view class="indexFind-list-font">卧室</view>
			</view>
			<view class="indexFind-list">
				<image class="indexFind-list-img" src="../../static/images/test2.webp"></image>
				<view class="indexFind-list-font">卧室</view>
			</view>
			<view class="indexFind-list">
				<image class="indexFind-list-img" src="../../static/images/test2.webp"></image>
				<view class="indexFind-list-font">卧室</view>
			</view>
			<view class="indexFind-list">
				<image class="indexFind-list-img" src="../../static/images/test2.webp"></image>
				<view class="indexFind-list-font">卧室</view>
			</view>
		</view>
	</view>
</template>

<script>
	import findTopLogo from '@/components/findTopLogo';
	export default {
		components: {
			findTopLogo
		},
		data() {
			return {
				list:[
					{
						id:0,
						name:'房间'
					},
					{
						id:1,
						name:'活动和特惠'
					},
					{
						id:2,
						name:'设计和服务'
					},
					{
						id:3,
						name:'家居灵感'
					},
					{
						id:4,
						name:'新品'
					},
				],
				active_index:0
			}
		},
		methods:{
			change(id){
				this.active_index = id
			}
		}
	}
</script>

<style lang="scss">
	.indexFind {
		width: 100%;
		padding-top: 80rpx;

		.indexFind-tabs {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			// height: 100rpx;
			padding: 0 40rpx;
			.indexFind-tabs-list {
				padding: 40rpx 0;
				text-align: center;
				font-weight: 700;
				border-bottom: 3px solid transparent;
				color: #767676;
				transition: all 0.3s linear;

				&.active {
					color: #000;
					border-bottom: 3px solid #0058a3;
				}
			}
		}
		.indexFind-item {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			width: 100%;
			padding: 0 40rpx;
			padding-top: 60rpx;
			.indexFind-list {
				width: 320rpx;
				margin-bottom: 50rpx;
				.indexFind-list-img {
					display: block;
					width: 320rpx;
					height: 180rpx;
					margin-bottom: 20rpx;
					border-radius: 10px;
				}
				.indexFind-list-font {
					font-size: 24rpx;
					text-align: center;
				}
				
			}
		}
	}

	view {
		box-sizing: border-box;
	}
</style>