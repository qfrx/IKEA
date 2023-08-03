<template>
	<view class="container">
		<!-- logo -->
		<image class="logo" src="https://static.web.ikea.cn/static/images/h5/h5-logo.svg" mode=""></image>
		<!-- 轮播图 -->
		<view class="banner">
			<u-swiper :list="bannerList" :circular="true" height="1000rpx" interval="4000" duration="1000"></u-swiper>
		</view>
		<!-- 搜索框 -->
		<view class="search-input">
			<i class="iconfont icon-sousuo"></i>
			<view class="input-box">
				你在找什么?
			</view>
		</view>
		<!-- 近期推荐 -->
		<view class="recent-recommendations" v-if="recommendationsScrollList">
			<view class="title">
				近期推荐
			</view>
			<u-scroll-list :indicator="true">
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
					<image class="card-image" :src="item.url" mode="widthFix"></image>
					<view class="text">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
		<!-- 热销排行 -->
		<view class="top-selling">
			<view class="title">
				热销排行
			</view>
			<u-scroll-list indicatorWidth="600rpx">
				<view class="card" v-for="(item, index) in rankingEasyList" :key="item.id" @click=openRankingListPage(item.title,index)>
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
								<i class="iconfont icon-yangshi_icon_tongyong_shield"
									:style="{'color':numBgColor[n]}"></i>
								<text class="num">{{n + 1}}</text>
							</view>
							<image class="img-goods" :src="i.imgUrl" mode=""></image>
							<text class="name">{{i.name}}</text>
						</view>
					</view>
				</view>
			</u-scroll-list>
		</view>
		<!-- 为家添加更多细节 -->
		<view class="more-details">
			<view class="title">
				为家添加更多精致细节
				<view class="title-des">
					用丰富的材质、色彩、纹样，打造你的夏日新家。
				</view>
			</view>
			<image class="img-big"
				src="https://res.app.ikea.cn/content/u/20230628/6ce98d83499e41e89fd8b0ade8616089.jpg?x-oss-process=image/quality,q_75/interlace,1/resize,w_700"
				mode="widthFix"></image>
			<view class="img-content">
				<view class="img-box" style="width: calc(50% - 5px);">
					<image class="img-small"
						src="https://file.app.ikea.cn/cms/u/20230706/979244622db34306b51136c209ad58db.jpg?x-oss-process=image/quality,q_75/interlace,1/resize,w_400"
						mode="widthFix"></image>
					<image class="img-small-long"
						src="https://res.app.ikea.cn/content/u/20230628/e2ea6275967c451e820badae64b61b66.jpg?x-oss-process=image/quality,q_75/interlace,1/resize,w_400"
						mode="widthFix"></image>
				</view>
				<view class="img-box" style="width: calc(50% - 5px);">
					<image class="img-small-long"
						src="https://res.app.ikea.cn/content/u/20230628/7de832b71abe430bb34b71761e7dfab7.jpg?x-oss-process=image/quality,q_75/interlace,1/resize,w_400"
						mode="widthFix"></image>
					<image class="img-small"
						src="https://res.app.ikea.cn/content/u/20230628/91906f287f7b4dfaa4ae0ca9f59ccd8f.jpg?x-oss-process=image/quality,q_75/interlace,1/resize,w_400"
						mode="widthFix"></image>
				</view>
			</view>
			<view class="show-more">
				发现更多新品
				<i class="iconfont icon-jiantou1"></i>
			</view>
		</view>
		<!-- 从房间开始探索 -->
		<view class="room-explore">
			<view class="title">
				从房间开始探索
			</view>
			<u-scroll-list indicatorActiveColor="#f56c6c">
				<view class="card" v-for="(item, index) in romExploreList" :key="index">
					<image class="img-bg" :src="item.url"></image>
					<view class="name-box">
						<view class="name">
							{{item.name}}
						</view>
					</view>
				</view>
			</u-scroll-list>
		</view>
		<!-- 法案现更多家居灵感 -->
		<view class="discovering-inspiration">
			<view class="title">
				发现更多家居灵感
			</view>
			<u-tabs :list="InspirationTypes" :current="num" lineWidth="0" lineColor="#f56c6c" :activeStyle="{
                          color: '#f00',
                          fontWeight: 'bold',
                          transform: 'scale(1.05)'
                      }" :inactiveStyle="{
                          color: '#606266',
                          transform: 'scale(1)'
                      }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
				@change="choseInspirationType">
			</u-tabs>
			<view class="tab-conter">
				<view class="tab-left-conter" style="width: calc(50% - 5px);">
					<view class="tab-item" v-for="(item,index) in discoverLeftList" :key="item.id">
						<image class="img" :src="item.url" mode="widthFix"></image>
						<view class="icon" v-if="item.url">
							<i class="iconfont icon-xihuan"></i>
						</view>
					</view>
				</view>
				<view class="tab-right-conter" style="width: calc(50% - 5px);">
					<view class="tab-item" v-for="(item,index) in discoverRightList" :key="item.id">
						<image class="img" :src="item.url" mode="widthFix"></image>
						<view class="icon" v-if="item.url">
							<i class="iconfont icon-xihuan"></i>
						</view>
					</view>
				</view>
			</view>
			<view class="showMore">
				<view class="text" @click="getMoreRationType">
					加载更多内容
				</view>
			</view>
		</view>
		<!-- 产品信息通知 -->
		<view class="information-notice">
			<view class="title">
				产品信息通知
			</view>
			<view class="notic-item">
				宜家在中国大陆市场对两款商品开展产品信息标签修改行动，以符合本地市场对最高使用温度提示的要求
				<i class="iconfont icon-jiantou1"></i>
			</view>
			<view class="notic-item">
				因有造成呼吸困难的潜在风险，宜家宣布召回BLÅVINGAD 布洛凡格 钓鱼游戏
				<i class="iconfont icon-jiantou1"></i>
			</view>
			<view class="notic-item">
				由于墙壁安装配件破裂风险，宜家宣布召回维修部分LETTAN 莱唐镜子
				<i class="iconfont icon-jiantou1"></i>
			</view>
			<view class="notic-item">
				由于潜在跌坐和受伤风险，宜家正在召回日期戳为2221及之前的煤黑色ODGER 奥德格转椅
				<i class="iconfont icon-jiantou1"></i>
			</view>
			<view class="notic-item">
				宜家在中国大陆市场召回维修TRIPPEVALS 特普弗斯蜂窝状遮光卷帘和HOPPVALS 霍普沃六边形百叶帘
				<i class="iconfont icon-jiantou1"></i>
			</view>
			<view class="notic-item">
				钢化玻璃杯说明
				<i class="iconfont icon-jiantou1"></i>
			</view>
			<view class="notic-item">
				牢牢固定——防止家具倾倒
				<i class="iconfont icon-jiantou1"></i>
			</view>
		</view>
		<!-- 为你推荐 -->
		<view class="recommended-more">
			<div class="title">
				为你推荐
			</div>
		</view>
		
		<!-- 回到顶部 -->
		<view class="back-top">
			<view class="wrap">
				<u-back-top :scroll-top="scrollTop" icon="arrow-up" top="100vh"
					:customStyle="{backgroundColor:'#fff'}"></u-back-top>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		getHomeBanner,
		getRecommendationsScroll,
		getRecommendationsCard,
		getEankingEasy,
		getRoomExplore,
		getdiscoveringInspiration
	} from "@/api/home";

	export default {
		data() {
			return {
				indicator: false,
				bannerList: [], //轮播图数据
				recommendationsScrollList: [], //近期推荐数据--滚动
				recommendationsCardList: [], //近期推荐数据--卡片
				rankingEasyList: [], //热销排行榜数据
				numBgColor: ['#ffdf01', '#bfbfbf', '#fd9d40'], //排名颜色
				romExploreList: [], // 从房间开始探索数据
				scrollTop: 0, //滚动条位置
				InspirationTypes: [{
					"name": "全部"
				}, {
					"name": "卧室"
				}, {
					"name": "客厅"
				}, {
					"name": "书房"
				}, {
					"name": "儿童房"
				}, {
					"name": "户外"
				}, {
					"name": "餐厅"
				}, {
					"name": "门厅"
				}, {
					"name": "电竞"
				}, {
					"name": "新品"
				}, {
					"name": "厨房"
				}, {
					"name": "浴室"
				}], // 发现灵感tab选项
				num: 0, //选择InspirationTypes的值
				discoverLeftList: [], // 发现更多灵感数据-左边
				discoverRightList: [], // 发现更多灵感数据-右边
				discoverPageNum: 1, // 发现更多灵感页数
				discoverType: "全部", // 发现更多灵感分类

			}
		},
		methods: {
			//获取轮播图数据
			async getHomeBannerFun() {
				try {
					let res = await getHomeBanner()
					res.data.banner.forEach((n, i) => {
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
					this.recommendationsScrollList = res.data.list
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
					this.recommendationsCardList = res.data.list
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
					this.rankingEasyList = res.data.list
				} catch (err) {
					uni.showModal({
						title: `失败222`,
					})
				}
			},
			// 获取首页从房间开始探索数据
			async getRoomExploreFun() {
				try {
					let res = await getRoomExplore()
					this.romExploreList = res.data.list
				} catch (err) {
					uni.showModal({
						title: `失败222`,
					})
				}
			},
			// 获取发现更多灵感数据
			async getdiscoveringInspirationFun() {
				try {
					let res = await getdiscoveringInspiration({
						type: this.discoverType,
						pageNum: this.discoverPageNum
					})
					console.log(res);
					res.data.list.forEach((item, index) => {
						if (index % 2 == 0) {
							this.discoverLeftList.push(item)
						} else {
							this.discoverRightList.push(item)
						}
					})
				} catch (err) {
					uni.showModal({
						title: `没有找到更多相关数据~`,
					})
				}
			},
			// 发现灵感--选择分类
			choseInspirationType(mes) {
				this.discoverPageNum = 1
				this.discoverType = mes.name
				this.discoverLeftList = []
				this.discoverRightList = []
				this.getdiscoveringInspirationFun()
				console.log(mes);
			},
			// 发现灵感--加载更多
			getMoreRationType() {
				this.discoverPageNum += 1
				this.getdiscoveringInspirationFun()
				console.log(this.discoverPageNum, this.discoverType);

			},
			// 跳转排行榜
            openRankingListPage(title,index){
				if (index < 3) {
					uni.navigateTo({
					    url:`/pages/classificationAnkings/classificationAnkings?title=${title}` 
					});
				}else{
					uni.navigateTo({
					    url:`/pages/undifindPage/undifindPage?title=${title}` 
					});
				}
			}
		},
		onLoad() {
			this.getHomeBannerFun()
			this.getRecommendationsScrollFun()
			this.getRecommendationsCardFun()
			this.getEankingEasyFun()
			this.getRoomExploreFun()
			this.getdiscoveringInspirationFun()
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
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
			font-size: 32rpx;
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
			font-size: 32rpx;
			color: #111;
			font-weight: bolder;
			margin-bottom: 30rpx;

		}

		.card {
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

		.text-content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			color: #fff;

			.name {
				font-size: 20rpx;
				opacity: 8;

			}

			.name-type {
				font-weight: bold;
				font-size: 34rpx;

			}
		}

		.icon {
			background-color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			width: 30px;
			height: 30px;

		}

		.icon-arrowRight1 {
			font-size: 28rpx;

		}

		.item-body {
			padding: 20px 15px 5px;

			.body-list {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 15px;

			}

			.img-goods {
				width: 44px;
				height: 44px;

			}

			.name {
				display: block;
				width: 200rpx;
				font-size: 12px;
				color: #111;

			}
		}

		.ranking-logo {
			width: 20px;
			height: 20px;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;

			.num {
				color: #fff;
				font-size: 12px;

			}

			.iconfont {
				font-size: 20px;
				position: absolute;
				top: 0;
				left: 0;
				z-index: -1;

			}
		}
	}

	.more-details {
		margin: 0 20px 30px;

		.title {
			font-size: 32rpx;
			color: #111;
			font-weight: bolder;
			margin-bottom: 30rpx;

			.title-des {
				margin-top: 8px;
				font-size: 26rpx;
				color: #111;
				font-weight: normal;
			}
		}

		.img-content {
			display: flex;
			justify-content: space-between;

		}

		.img-box {
			width: calc(100% - 10px);
			display: flex;
			flex-direction: column;

		}

		.img-big {
			width: 100%;
			display: block;
			margin-bottom: 10px;

		}

		.img-small {
			width: 100%;
			margin-bottom: 10px;

		}

		.img-small-long {
			width: 100%;
			margin-bottom: 10px;

		}

		.show-more {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20px 0;
		}
	}

	.room-explore {
		margin: 0 20px 30px;

		.title {
			font-size: 32rpx;
			color: #111;
			font-weight: bolder;
			margin-bottom: 30rpx;

		}

		.card {
			position: relative;
			margin-right: 10px;
		}

		.img-bg {
			width: 140px;
			height: 190px;
			display: block;
		}

		.name-box {
			left: 0;
			bottom: 2rem;
			width: 100%;
			position: absolute;
			display: flex;
			justify-content: center;
		}

		.name {
			background-color: #fff;
			padding: 5px 12px;
			border-radius: 999px;
			display: flex;
			justify-content: center;
			color: #111;
			font-size: 24rpx;

		}
	}

	.discovering-inspiration {
		margin: 0 20px 30px;

		.title {
			font-size: 32rpx;
			color: #111;
			font-weight: bolder;
			margin-bottom: 30rpx;

		}

		.tab-conter {
			min-height: 100vh;
			display: flex;
			justify-content: space-between;
		}

		.tab-left-conter {
			display: flex;
			flex-direction: column;
		}

		.tab-right-conter {
			display: flex;
			flex-direction: column;
		}

		.tab-item {
			width: 100%;
			float: left;
			margin-top: 10px;
			position: relative;
			background-color: #eee;
		}

		.img {
			display: block;
			width: 100%;
		}

		.icon {
			background-color: #00000080;
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			right: 20rpx;
			bottom: 20rpx;
		}

		.icon-xihuan {
			color: #fff;
			font-weight: bold;
			font-size: 30rpx;
		}

		.showMore {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 30px;
		}

		.text {
			background-color: #111;
			color: #fff;
			padding: 15px 25px;
			border-radius: 999px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 12px;
		}
	}

	.information-notice {
		margin: 0 20px 30px;

		.title {
			font-size: 32rpx;
			color: #111;
			font-weight: bolder;
			margin-bottom: 30rpx;

		}
		.notic-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20px 0;
			font-size: 12px;
			font-weight: bold;
			color: #666;
			.iconfont{
				margin: 0 20px 0 40px;
			}
		}
	}
	
	.recommended-more{
		.title{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 26rpx;
			color: #111;
			font-weight: bold;
		}
	}
</style>