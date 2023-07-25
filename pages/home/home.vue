<template>
	<view class="container">
		<image class="logo" src="https://static.web.ikea.cn/static/images/h5/h5-logo.svg" mode=""></image>
		<view class="banner">
			<u-swiper :list="bannerList" :circular="true" height="1000rpx" interval="4000" duration="1000"></u-swiper>
		</view>
		<view class="search-input">
			<i class="iconfont icon-sousuo"></i>
			<view class="input-box">
				你在找什么?
			</view>
		</view>
		<view class="recent-recommendations">
			<view class="title">
				近期推荐
			</view>
			<u-scroll-list :indicator="true" indicatorColor="#fff0f0" indicatorActiveColor="#f56c6c">
				<view v-for="(item, index) in recommendationsScrollList" :key="item.id" class="scroll-item">
					<image class="img-recommend-scroll" :src="item.url"></image>
					<view class="text-content" :style="{backgroundColor:item.bgColor}">
						<view class="des">
							<view class="text-title">{{item.title}}</view>
							<view class="text">{{item.text}}</view>
						</view>
						<div class="icon">
							<i class="iconfont icon-arrowRight1"></i>
						</div>
					</view>
				</view>
			</u-scroll-list>
			<view class="recommendations-card">
				<view class="recommendations-card-item" v-for="(item,index) in recommendationsCardList" :key="item.id">
					<image class="card-image" :src="item.url" mode=""></image>
					<view class="text">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
		<view class="top-selling">
			<view class="title">
				热销排行
			</view>
			<u-scroll-list indicatorWidth="600rpx">
				<view class="card" v-for="(item, index) in rankingEasyList" :key="item.id">
					<view class="item-head" :style="{'backgroundColor':item.bgColor}">
						<view class="text-content">
							<text class="name">热销榜</text>
							<text class="name-type">{{item.title}}</text>
						</view>
						<div class="icon">
							<i class="iconfont icon-arrowRight1"></i>
						</div>
					</view>
					<view class="item-body">
						<view class="body-list" v-for="(i,n) in item.list" :key="n">
					        <view class="ranking-logo">
					        	<i class="iconfont icon-yangshi_icon_tongyong_shield" :style="{'color':numBgColor[n]}"></i>
								<text class="num">{{n + 1}}</text>
					        </view>
							<image class="img-goods" :src="i.imgUrl" mode=""></image>
							<text class="name">{{i.name}}</text>
						</view>
					</view>
				</view>
			</u-scroll-list>
		</view>
	</view>
</template>

<script>
	import {
		getHomeBanner,
		getRecommendationsScroll,
		getRecommendationsCard,
		getEankingEasy
	} from "@/api/home";

	export default {
		data() {
			return {
				bannerList: [], //轮播图数据
				recommendationsScrollList: [], //近期推荐数据--滚动
				recommendationsCardList: [], //近期推荐数据--卡片
				rankingEasyList: [], //热销排行榜数据
				numBgColor:['#ffdf01','#bfbfbf','#fd9d40']
			}
		},
		methods: {
			//获取轮播图数据
			async getHomeBannerFun() {
				try {
					let res = await getHomeBanner()
					res.banner.forEach((n, i) => {
						this.bannerList.push(n.url)
					})
				} catch (err) {
					uni.showModal({
						title: ``
					})
				}
			},
			//获取近期推荐横向滚动数据
			async getRecommendationsScrollFun() {
				try {
					let res = await getRecommendationsScroll()
					this.recommendationsScrollList = res.list
				} catch (err) {
					uni.showModal({
						title: `失败222`,
					})
				}
			},
			// 获取近期推荐卡片数据
			async getRecommendationsCardFun() {
				try {
					let res = await getRecommendationsCard()
					this.recommendationsCardList = res.list
				} catch (err) {
					uni.showModal({
						title: `失败222`,
					})
				}
			},
			// 获取热销榜（简易）数据
			async getEankingEasyFun() {
				try {
					let res = await getEankingEasy()
					this.rankingEasyList = res.list
				} catch (err) {
					uni.showModal({
						title: `失败222`,
					})
				}
			}

		},
		onLoad() {
			this.getHomeBannerFun()
			this.getRecommendationsScrollFun()
			this.getRecommendationsCardFun()
			this.getEankingEasyFun()
		},
	}
</script>

<style lang="scss">
	.container {
		padding-bottom: 100px;
	}

	.logo {
		display: block;
		height: 24px;
		width: 56px;
		position: absolute;
		left: 48rpx;
		top: 48rpx;
		z-index: 99;

	}

	.search-input {
		height: 80rpx;
		width: 90vw;
		margin-left: 5vw;
		transform: translateY(-40rpx);   
		background-color: #fff;
		border-radius: 999px;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding: 0 13px;
		font-weight: bold;
		box-shadow: 0 2px 2px 1px #0000000d;

		.icon-sousuo {
			font-size: 26rpx;
			margin-right: 12px;

		}

		.input-box {
			font-size: 24rpx;
			color: #929292;

		}
	}

	.recent-recommendations {
		margin: 0 20px 30px;

		.title {
			font-size: 30rpx;
			color: #111;
			font-weight: bolder;
			margin-bottom: 30rpx;

		}

		.icon {
			width: 66rpx;
			height: 66rpx;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;

		}

		.icon-arrowRight1 {
			font-size: 24px;

		}

		.scroll-item {
			margin-right: 10px;

			&:nth-child(odd) {
				color: #fff;

				.text-title {
					font-weight: bold;
					font-size: 26rpx;
					margin-bottom: 5px;

				}

				.text {
					font-size: 20rpx;
					opacity: .9;

				}

				.icon {
					color: #000;
					background-color: #fff;

				}
			}

			&:nth-child(even) {
				color: #000;

				.text-title {
					font-weight: bold;
					font-size: 26rpx;
					margin-bottom: 5px;

				}

				.text {
					font-size: 20rpx;
					opacity: .9;

				}

				.icon {
					background-color: #000;
					color: #fff;

				}
			}

			&:nth-child(4) {
				color: #fff;

				.text-title {
					font-weight: bold;
					font-size: 26rpx;
					margin-bottom: 5px;

				}

				.text {
					font-size: 20rpx;
					opacity: .9;

				}

				.icon {
					background-color: #fff;
					color: #000;

				}
			}

		}

		.img-recommend-scroll {
			width: 290rpx;
			height: 290rpx;
			display: block;

		}

		.text-content {
			width: 290rpx;
			height: 290rpx;
			padding: 15px;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: space-between;
		}


	}

	.recommendations-card {
		.recommendations-card-item {
			margin-bottom: 20px;
		}

		margin-top: 30px;

		.card-image {
			display: block;
			width: 100%;

		}

		.text {
			margin-top: 5px;
			color: #848484;
			font-size: 26rpx;
		}
	}

	.top-selling {
		margin: 0 20px 30px;
		.title {
			font-size: 30rpx;
			color: #111;
			font-weight: bolder;
			margin-bottom: 30rpx;

		}
        .card{
			margin-right: 10px;
		}
		.item-head {
			padding: 12px 15px;
			width: 400rpx;
			height: 80px;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			
		}
		.text-content{
			display: flex;
			flex-direction: column;
			justify-content: center;
			color: #fff;
			.name{
				font-size: 20rpx;
				opacity: 8;
				
			}
			.name-type{
				font-weight: bold;
				font-size: 34rpx;
				
			}
		}
		.icon{
			background-color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			width: 30px;
			height: 30px;
			
		}
		.icon-arrowRight1{
		  font-size: 28rpx;
		  
		}
		.item-body{
			padding: 20px 15px 5px;
			.body-list{
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 15px;
				
			}
			.img-goods{
				width: 44px;
				height: 44px;
				
			}
			.name{
				display: block;
				width: 200rpx;
				font-size: 12px;
				color: #111;
				
			}
		}
		.ranking-logo{
			width: 20px;
			height: 20px;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			.num{
				color: #fff;
				font-size: 12px;
				
			}
			.iconfont{
				font-size: 20px;
				position: absolute;
				top: 0;
				left: 0;
				z-index: -1;
				
			}
			
		}
	}
</style>