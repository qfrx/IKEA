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
		<view class="classPages-box">
			<!-- 分类页的区域滚动左侧列表 -->
			<view class="classPages-box-left">
				<scroll-view v-if="classPagesSedeContent" class="scroll-box" scroll-y="true">
					<view @click="change(item.id)" v-for="item in classPagesSedeContent" :key="item.id" :class="['scroll-list',{'active':classPagesSideID==item.id}]">
						<view>{{item.name}}</view>
					</view>
				</scroll-view>
			</view>
			<!-- 分类页的区域滚动右侧展示区域 -->
			<view class="classPages-box-right">
				<scroll-view v-if="classPagesSedeContent" class="scrollY-box" scroll-y="true">
					<view v-for="item in classPagesSedeContent" :key="item.id">
						<view class="scrollY-box-title">{{item.name}}</view>
						<view class="scrollY-box-ul">
							<view v-for="data in item.children" :key="data.id" class="scrollY-box-li">
								<image class="scrollY-box-li-img" :src="data.icon"></image>
								<view class="scrollY-box-li-title">{{data.name}}</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import {getIndexBottomPages} from "@/api/classPages.js"
	export default{
		data(){
			return{
				// 获取首页底部分类按钮的侧边栏分类数据
				classPagesSideArr:[],
				// 获取首页底部分类按钮的侧边栏内容的数据
				classPagesSedeContent:[],
				// 首页底部分类按钮的侧边栏的ID
				classPagesSideID:"st001",
				// 首页底部分类按钮的侧边栏的文字
				classPagesSideText:""
			}
		},
		methods:{
			// 获取首页底部分类按钮的分类数据
			async getIndexBottomPagesFun() {
				try {
					let res = await getIndexBottomPages()
					// this.classPagesSideArr = res.data.classPageList
					this.classPagesSedeContent = res.data.classPageList
					console.log(this.classPagesSedeContent);
				} catch (err) {
					uni.showModal({
						title: ``
					})
				}
			},
			// 首页底部分类侧边栏的选项卡切换
			change(id){
				this.classPagesSideID = id
				this.classPagesSideText = event.target.innerText
				console.log(this.classPagesSideText);
			},

			
		},
		onLoad(){
			this.getIndexBottomPagesFun()
		},
	}
</script>

<style lang="scss">
	.classPages {
		position: relative;
		width: 100%;
		.classPages-top {
			width: 100%;
			height: 360rpx;
			padding: 0 40rpx;
			padding-top: 40rpx;
			background: url('../../static/images/classpages-bg.jpg') no-repeat center top;
			background-size: cover;
			.classPages-top-search {
				display: flex;
				align-items: center;
				width: 100%;
				height: 70rpx;
				margin-top: 40rpx;
				margin-bottom: 20rpx;
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
		
		.classPages-box {
			position: absolute;
			left: 0;
			top: 320rpx;
			display: flex;
			width: 100%;
			height: calc(100vh - 320rpx);
			border-top-left-radius: 20px;
			border-top-right-radius: 20px;
			overflow: hidden;
			background-color: #fff;
			.classPages-box-left {
				width: 160rpx;
				height: 100%;
				.scroll-box {
					width: 100%;
					height: 100%;
					.scroll-list {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 100%;
						height: 96rpx;
						padding: 0 20rpx;
						font-size: 24rpx;
						font-weight: 600;
						text-align: center;
						color: #676767;
						background-color: #f5f5f5;
						&.active {
							color: #055ca5;
							background-color: #fff;
						}
					}	
				}
			}
			.classPages-box-right {
				width: calc(100% - 160rpx);
				height: 100%;
				background-color: #fff;
				.scrollY-box {
					width: 100%;
					height: 100%;
					.scrollY-box-title {
						width: 100%;
						height: 160rpx;
						line-height: 160rpx;
						font-size: 24rpx;
						text-align: center;
						
					}
					.scrollY-box-ul {
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
						width: 100%;
						padding: 0 56rpx;
						margin: 0;
						.scrollY-box-li {
							display: flex;
							flex-direction: column;
							align-items: center;
							width: 200rpx;
							padding: 24rpx;
							.scrollY-box-li-img {
								width: 100rpx;
								height: 110rpx;
								margin-bottom: 12rpx;
								display: block;
								
							}
							.scrollY-box-li-title {
								font-size: 24rpx;
								text-align: center;
								
							}
						}
						
					}
					
				}
			}
		}
	}
	view {
		box-sizing: border-box;
	}
</style>