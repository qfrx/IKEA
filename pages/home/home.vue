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
				<view v-for="(item, index) in recommendationsScrollList" :key="index" class="scroll-item">
					<image class="img-recommend-scroll" :src="item.url"></image>
					<view class="text-content" :style="{backgroundColor:item.bgColor}">
						
					</view>
				</view>
			</u-scroll-list>
		</view>
	</view>
</template>

<script>
	import {
		getHomeBanner,
		getRecommendationsScroll
	} from "@/api/home";

	export default {
		data() {
			return {
				bannerList: [], //轮播图数据
				recommendationsScrollList: [], //近期推荐数据
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
			async getRecommendationsScrollFun() {
				try {
					let res = await getRecommendationsScroll()
					this.recommendationsScrollList = res.list
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
		},
	}
</script>

<style lang="scss">
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
		width: 600rpx;
		position: relative;
		top: -40rpx;
		left: 60rpx;
		background-color: #fff;
		border-radius: 999px;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding: 0 13px;
		font-weight: bold;

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
		margin: 30px 20px;

		.title {
			font-size: 30rpx;
			color: #111;
			font-weight: bolder;
			margin-bottom: 30rpx;
		}
		.scroll-item{
			margin-right: 10px;
		}
		.img-recommend-scroll{
			width: 290rpx;
			height: 290rpx;
			display: block;
		}
		.text-content{
			width: 290rpx;
			height: 290rpx;
		}
	}
</style>