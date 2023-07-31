<template>
	<view class="classificationAnkings">
		<!-- 返回首页-->
		<view class="header-back" @click="backHome">
			<i class="iconfont icon-xiangzuojiantou"></i>
		</view>
		<!-- 头部标题 -->
		<view class="header" :style="{backgroundColor: headerBgColor}">
			<view class="title">
				<i class="iconfont icon-icon_maisui_zuo"></i>
				宜家排行榜
				<i class="iconfont icon-icon_maisui_you"></i>
			</view>
			<view class="des">
				排名依据7日销量计算 · 每日更新
			</view>
			<view class="title-list">
				<view class="title-item" v-for="(item,index) in titleList" :key="index"
					:class="{'active':titleActive == index}" @click="choseType(index)">
					{{item.name}}
				</view>
			</view>
		<!-- 	<u-sticky offset-top="200">
				<text>塞下秋来风景异，衡阳雁去无留意</text>
			</u-sticky> -->
		</view>
		<!-- 骨架屏 -->
		<view class="loading-conter" v-if="loading">
			<view class="loding-item" v-for="(item,index) in loadingRowNum" :key="index">
				<u-skeleton rows="3" :loading="loading" avatar :title="false" rowsWidth="60%" avatarSize="80"
					avatarShape="square">
				</u-skeleton>
			</view>
		</view>
		<!-- 排行商品列表 -->
		<view class="goods-conter">
			<view class="good-item" v-for="(item,index) in rankList" :key="item.id">
				<div class="icon" v-if="index < 5">
					<i class="iconfont icon-yangshi_icon_tongyong_shield" :style="{'color':numBgColor[index]}"></i>
					<text class="num">{{index + 1}}</text>
				</div>
				<image class="img" :src="item.image" mode=""></image>
				<view class="info">
					<view class="name">
						{{item.name}}
					</view>
					<view class="des">
						{{item.productType+ ' : '+ item.measureText}}
					</view>
					<view class="sum">
						<view class="num">
							{{item.productTags}}
						</view>
					</view>
					<view class="price">
						￥
						<view class="price-num">
							{{item.regularPrice}}
						</view>
					</view>
				</view>
				<i class="iconfont icon-jiantou1"></i>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getListDetailst,
		getRanking
	} from "@/api/rankingList"
	export default {
		data() {
			return {
				titleList: [], // 分类标题名
				titleActive: 0, // 分类选中下标
				headerBgColor: "#ad4646", //当前头部背景色
				loading: true, //骨架屏开关
				subTitle: '', //选择商品种类
				rankingTypeDesc: "热销榜", //榜单种类
				rankList: [], //热搜榜数据
				loadingRowNum: 10, // 骨架屏数量
				numBgColor: ['#ffdb00', '#bfbfbf', '#fd9d40', '#0058a3', '#0058a3'], //排名颜色


			}
		},
		methods: {
			//返回首页
			backHome() {
				uni.navigateBack(1)
			},
			// 获取排行榜那个分类别表数据
			async getListDetailstFun() {
				try {
					let res = await getListDetailst({
						title: this.$route.query.title,
					})
					this.titleList = res.data.list
					this.subTitle = res.data.list[0].name
					this.headerBgColor = this.titleList[0].color
					this.getRankingFun()
				} catch (err) {
					uni.showModal({
						title: `失败222`,
					})
				}
			},
			// 选择分类
			choseType(index) {
				this.titleActive = index
				this.headerBgColor = this.titleList[index].color
				this.subTitle = this.titleList[this.titleActive].name
				this.loading = true
				this.getRankingFun()
			},
			// 获取排行榜内分类列表数据
			async getRankingFun() {
				try {
					let res = await getRanking({
						subTitle: this.subTitle,
						rankingTypeDesc: '热销榜'
					})
					this.rankList = res.msg.products
					this.loading = false
				} catch (err) {
					uni.showModal({
						title: `失败222`,
					})
				}
			},
		},
		onLoad() {
			this.getListDetailstFun()
			// 延时2秒钟
			// uni.$u.sleep(2000).then(() => {
			// 	this.loading = false
			// })
		},
		mounted() {


		}
	}
</script>

<style lang="scss">
	.classificationAnkings {
		position: relative;
	}

	.header-back {
		position: fixed;
		top: 0;
		left: 0;
		padding: 10px 0 10px 10px;
		z-index: 999;

		.iconfont {
			font-size: 20px;
			font-weight: bolder;
			color: #fff;
		}
	}

	.header {
		width: 100%;
		height: 25vh;
		color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transition: all, 1.5s;
		position: relative;

		.title {
			font-size: 28px;

			.iconfont {
				font-size: 28px;
			}
		}

		.des {
			font-size: 12px;
			opacity: .7;
			margin-top: 10px;
		}

		.title-list {
			box-sizing: border-box;
			padding: 0 20px;
			min-width: 100vw;
			display: flex;
			justify-content: flex-start;
			overflow: auto;
			position: absolute;
			left: 0;
			bottom: 20px;

		}

		.title-item {
			flex-shrink: 0;
			padding: 12px 16px;
			font-size: 12px;
			background-color: #0000002a;
			border-radius: 999px;
			margin: 0 6px;

		}

		.title-item.active {
			background-color: #fff;
			color: #111;

		}
	}

	.loading-conter {
		background-color: #ececec;

	}

	.goods-conter {
		background-color: #ececec;

	}

	.good-item {
		background-color: #fff;
		margin: 15px;
		padding: 10px 20px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		font-size: 12px;
		position: relative;

		.icon {
			position: absolute;
			top: 0;
			left: 20px;

			.iconfont {
				font-size: 32px;
				position: relative;
			}

			.num {
				position: absolute;
				top: 6px;
				left: 6px;
				background-color: transparent;
				color: #fff;
				font-size: 16px;
			}
		}

		.img {
			width: 80px;
			height: 80px;

		}

		.info {
			padding: 20px 14px 20px 24px;

		}

		.name {
			font-weight: bolder;
			margin-bottom: 5px;

		}

		.des {
			opacity: .6;
		}

		.sum {
			margin-top: 12px;
			display: flex;
		}

		.num {
			background-color: #fff3db;
			color: #d68e14;
			padding: 0 5px;
		}

		.price {
			font-weight: bold;
			display: flex;
			margin-top: 10px;
		}

		.price-num::first-letter {
			font-size: 18px;
		}

		.iconfont {
			flex: 1;
			display: flex;
			justify-content: flex-end;
		}
	}

	.loding-item {
		padding: 40px;
		background-color: #fff;
		margin: 10px;
		border-radius: 10px;
		display: flex;
	}
</style>