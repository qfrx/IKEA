<template>
	<view class="homeRecent">
		<view>
			<findTopLogo class="Logo_top"></findTopLogo>
		</view>
		<view class="homeRecent-top">
			<view @click="change(item.id)" v-for="item in list1" :key="item.id" :class="['homeRecent-top-list',{'active':active_index==item.id}]">
				<view>{{item.name}}</view>
			</view>
		</view>
		<view class="homeRecent-content-top1">
			<!-- <view class="homeRecent-content-title">
				<view>新品</view>
			</view> -->
			<scroll-view :scroll-into-view="toView" class="scroll-Y" scroll-y="true" >
				<!-- 全新系列的三个系列 -->
				<view id="top1" class="homeRecent-content-series">
					<view v-for="item in 3" class="homeRecent-content-series-list">
						<view class="homeRecent-content-series-list-img">
							<image class="image" src="../../static/images/homeRecent-series.webp" mode="widthFix"></image>
						</view>
						<view class="homeRecent-content-series-list-title">
							<view class="title-left">Nytillverkad 霓特浮德 系列</view>
							<i class="iconfont icon-sousuo"></i>
						</view>
					</view>
				</view>
				<!-- 夏日新风格 -->
				<view id="top2" class="homeRecent-content-card">
					<view v-for="item in 3" class="homeRecent-content-card-list">
						<view class="homeRecent-content-card-list-title">
							再一次, 探索未来。Nytillverkad 霓特浮德 系列。
						</view>
						<view class="homeRecent-content-card-list-content">
							今年是宜家创立的80周年，为了庆祝这一盛事，我们精心挑选了过去的一系列经典家居用品，赋予了它们新的生机。Nytillverkad 霓特浮德 系列以明亮悦目的色彩和新材料重新打造而成，充分诠释了宜家特色设计理念：简单、实用又充满趣味。
						</view>
						<view class="homeRecent-content-card-list-pict">
							<image class="image" src="../../static/images/homeRecent-card.webp" mode="widthFix"></image>
						</view>
						<view class="homeRecent-content-card-list-bottom">
							<view class="title-left">查看更多系列产品</view>
							<i class="iconfont icon-sousuo"></i>
						</view>
					</view>
					<view class="homeRecent-content-card-chair">
						<view v-for="item in 15" class="homeRecent-content-card-chair-list">
							<image class="image" src="../../static/images/凳子.png" mode=""></image>
							<view class="homeRecent-content-card-chair-list-new">新品</view>
							<view class="homeRecent-content-card-chair-list-title">DOMSTEN 多姆斯坦</view>
							<view class="homeRecent-content-card-chair-list-style">凳子</view>
							<view class="homeRecent-content-card-chair-list-price">
								<text>¥</text>
								<text class="price">199</text>
								<text>.00</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 卧室新品 -->
				<view id="top3" class="homeRecent-content-newStyle">
					<view class="homeRecent-content-newStyle-sleep">
						<view class="homeRecent-content-newStyle-sleep-title">
							美妙图案,睡眠更舒适
						</view>
						<view class="homeRecent-content-newStyle-sleep-content">
							是时候睡个好觉了。俏皮的几何设计，新鲜明快的色彩，是夏季的理想选择。同样，它也采用来自更可持续来源的棉料制成，舒爽而透气。
						</view>
						<view class="homeRecent-content-newStyle-sleep-pict">
							<view class="image">
								<image class="image" src="../../static/images/sleep_gif.gif" mode=""></image>
							</view>
							<view class="image">
								<image class="image" src="../../static/images/sleep_2.webp" mode=""></image>
							</view>
						</view>
						<view class="homeRecent-content-newStyle-sleep-bottom">
							<view class="title-left">查看更多系列产品</view>
							<i class="iconfont icon-sousuo"></i>
						</view>
					</view>
					<!-- 一行枕头一行床垫 -->
					<view v-for="item in 2" class="homeRecent-content-newStyle-pillow">
						<view v-for="item in 15" class="homeRecent-content-newStyle-pillow-list">
							<image class="image" src="../../static/images/pillow.png" mode=""></image>
							<view class="homeRecent-content-newStyle-pillow-new">新品</view>
							<view class="homeRecent-content-newStyle-pillow-title">DOMSTEN 多姆斯坦</view>
							<view class="homeRecent-content-newStyle-pillow-style">
								<view>被套和两个枕套</view>
								<view>200x230/50x80厘米</view>
							</view>
							<view class="homeRecent-content-newStyle-pillow-price">
								<text>¥</text>
								<text class="price">199</text>
								<text>.00</text>
							</view>
						</view>
					</view>
					<!-- 灵巧收纳,带瀑布流 -->
					<view class="homeRecent-content-newStyle-storage">
						<view class="homeRecent-content-newStyle-storage-title">
							灵巧收纳，充分利用空间
						</view>
						<view class="homeRecent-content-newStyle-storage-content">
							VIHALS 维哈斯 储物系列外观简洁百搭，可在家中营造各种风格。兼具展示作用的储物柜，不仅提供大量空间来收纳衣物配饰，也是展示个人珍藏的好选择。富有趣味性和个性色彩，同时不失宁静整洁。
						</view>
						<view class="homeRecent-content-newStyle-storage-pict">
							<view class="homeRecent-content-newStyle-storage-pict-poster">
								<image class="image" src="../../static/images/storage.webp" mode="widthFix"></image>
							</view>
							<view class="homeRecent-content-newStyle-storage-pict-waterfall">
								<view style="width: calc(50% - 5px);" class="homeRecent-content-newStyle-storage-pict-waterfall-left waterfall-box">
									<image class="image_small" src="../../static/images/灵巧收纳_1.webp" mode="widthFix"></image>
									<image class="image_big" src="../../static/images/灵巧收纳_2.webp" mode="widthFix"></image>
								</view>
								<view style="width: calc(50% - 5px);" class="homeRecent-content-newStyle-storage-pict-waterfall-right waterfall-box">
									<image class="image_big" src="../../static/images/灵巧收纳_3.webp" mode="widthFix"></image>
									<image class="image_small" src="../../static/images/灵巧收纳_4.webp" mode="widthFix"></image>
								</view>
							</view>
						</view>
						<view class="homeRecent-content-newStyle-sleep-bottom">
							<view class="title-left">查看更多系列产品</view>
							<i class="iconfont icon-sousuo"></i>
						</view>
					</view>
					<view class="homeRecent-content-newStyle-morestorage">
						<view v-for="item in 15" class="homeRecent-content-newStyle-morestorage-list">
							<image class="image" src="../../static/images/more_storage.png" mode=""></image>
							<view class="homeRecent-content-newStyle-morestorage-new">新品</view>
							<view class="homeRecent-content-newStyle-morestorage-title">DOMSTEN 多姆斯坦</view>
							<view class="homeRecent-content-newStyle-morestorage-style">
								<view>被套和两个枕套</view>
								<view>200x230/50x80厘米</view>
							</view>
							<view class="homeRecent-content-newStyle-morestorage-price">
								<text>¥</text>
								<text class="price">199</text>
								<text>.00</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 色彩点缀 -->
				<view id="top4" class="homeRecent-content-color">
					<!-- 色彩点缀,带瀑布流 -->
					<view v-for="item in 4">
						<view class="homeRecent-content-color-storage">
							<view class="homeRecent-content-color-storage-title">
								色彩点缀，让生活更有个性
							</view>
							<view class="homeRecent-content-color-storage-content">
								告别单调，为起居室添置色彩缤纷的家居好物，让家焕然一新洋溢着夏日的风情。
							</view>
							<view class="homeRecent-content-color-storage-pict">
								<view class="homeRecent-content-color-storage-pict-poster">
									<image class="image" src="../../static/images/色彩点缀.webp" mode="widthFix"></image>
								</view>
								<view class="homeRecent-content-color-storage-pict-waterfall">
									<view style="width: calc(50% - 5px);" class="homeRecent-content-color-storage-pict-waterfall-left waterfall-box">
										<image class="image_small" src="../../static/images/色彩点缀1.gif" mode="widthFix"></image>
										<image class="image_big" src="../../static/images/色彩点缀2.webp" mode="widthFix"></image>
									</view>
									<view style="width: calc(50% - 5px);" class="homeRecent-content-color-storage-pict-waterfall-right waterfall-box">
										<image class="image_big" src="../../static/images/色彩点缀3.webp" mode="widthFix"></image>
										<image class="image_small" src="../../static/images/色彩点缀4.webp" mode="widthFix"></image>
									</view>
								</view>
							</view>
							<view class="homeRecent-content-color-bottom">
								<view class="title-left">查看更多系列产品</view>
								<i class="iconfont icon-sousuo"></i>
							</view>
						</view>
						<view class="homeRecent-content-color-pillow">
							<view v-for="item in 15" class="homeRecent-content-color-pillow-list">
								<image class="image" src="../../static/images/pillow.png" mode=""></image>
								<view class="homeRecent-content-color-pillow-new">新品</view>
								<view class="homeRecent-content-color-pillow-title">DOMSTEN 多姆斯坦</view>
								<view class="homeRecent-content-color-pillow-style">
									<view>被套和两个枕套</view>
									<view>200x230/50x80厘米</view>
								</view>
								<view class="homeRecent-content-color-pillow-price">
									<text>¥</text>
									<text class="price">199</text>
									<text>.00</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 探索更多 -->
				<view id="top5" class="homeRecent-content-findmore">
					<view class="homeRecent-content-findmore-title1">按场景选购</view>
					<view class="homeRecent-content-findmore-title2">浏览我们的新品图库, 你可以点击场景选购！</view>
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
				</view>
				<view class="homeRecent-content-bottom">
					<view class="homeRecent-content-bottom-interested">
						<view class="homeRecent-content-bottom-interested-left font">
							<i class="iconfont icon-sousuo"></i>
							<text>可能感兴趣</text>
						</view>
						<view class="homeRecent-content-bottom-interested-right font">
							<i class="iconfont icon-sousuo"></i>
						</view>
					</view>
					<view class="homeRecent-content-bottom-interested">
						<view class="homeRecent-content-bottom-interested-left font">
							<i class="iconfont icon-sousuo"></i>
							<text>加入宜家俱乐部</text>
						</view>
						<view class="homeRecent-content-bottom-interested-right font">
							<i class="iconfont icon-sousuo"></i>
						</view>
					</view>
					<view class="homeRecent-content-bottom-policy">
						<view class="title">© Inter IKEA Systems B.V. 1999-2023</view>
						<view class="title">隐私政策 缺陷披露政策 使用条款</view>
						<view class="title">上海工商 泸公网安备 31010402001069号</view>
						<view class="title">泸ICP 备17055232 号 Cookie设置</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import findTopLogo from '@/components/findTopLogo';
	import {
		getdiscoveringInspiration
	} from "@/api/home";
	export default{
		components: {
			findTopLogo
		},
		data(){
			return {
				scrollTop: 0,
				list1:[
					{
						id:"1" ,
						name:"全新系列"
					},
					{
						id:"2",
						name:"夏日新风格"
					},
					{
						id:"3",
						name:"卧室新品"
					},
					{
						id:"4",
						name:"色彩点缀"
					},
					{
						id:"5",
						name:"探索更多"
					}
				],
				active_index:'1',
				toView:'',
				InspirationTypes: [
					{
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
					},
				], // 发现灵感tab选项
				num: 0, //选择InspirationTypes的值
				discoverLeftList: [], // 发现更多灵感数据-左边
				discoverRightList: [], // 发现更多灵感数据-右边
				discoverPageNum: 1, // 发现更多灵感页数
				discoverType: "全部", // 发现更多灵感分类
			}
		},
		methods:{
			change(id){
					this.active_index = id
					this.toView = 'top'+id
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
		},
		onLoad(){
			this.getdiscoveringInspirationFun()
			uni.setNavigationBarTitle({
		    title: ''
		  })
		},
		onPageScroll(e){
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style lang="scss">
	.uni-page-head{
		display: none;
	}
	.homeRecent {
		width: 100%;
		padding-top: 260rpx;
		.Logo_top {
			position:fixed;
			left: 0;
			top: 0;
			z-index: 20;
			height: 75px;
		}
		.homeRecent-top {
			position: fixed;
			left: 0;
			top: 65px;
			z-index: 20;
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			// height: 100rpx;
			padding: 12rpx 20rpx;
			padding-top: 16rpx;
			background-color: #fff;
			.homeRecent-top-list {
				padding: 40rpx 0;
				text-align: center;
				font-size: 28rpx;
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
		
		.homeRecent-content-title {
			width: 100%;
			height: 300rpx;
			line-height: 300rpx;
			padding-left: 40rpx;
			font-size: 100rpx;
			font-weight: 700;
			color: #cc5107;
		}
		
		.homeRecent-content-top1 {
			width: 100%;
			.scroll-Y {
				position: fixed;
				left: 0;
				top: 155px;
				z-index: 10;
				width: 100%;
				height: 100vh;
				
				.homeRecent-content-series {
					width: 100%;
					padding: 0 60rpx;
					margin-bottom: 160rpx;
					.homeRecent-content-series-list {
						display: flex;
						flex-direction: column;
						width: 100%;
						margin-bottom: 90rpx;
						.homeRecent-content-series-list-img {
							width: 100%;
							// height: 354rpx;
							margin-bottom: 40rpx;
							.image {
								display: block;
								width: 100%;
							}
						}
						.homeRecent-content-series-list-title {
							display: flex;
							justify-content: space-between;
							align-items: center;
							width: 100%;
							// height: 120rpx;
							.title-left {
								font-size: 36rpx;
								font-weight: 700;
							}
							.iconfont {
								font-size: 38rpx;
								font-weight: 700;
							}
						}
					}
				}
				
				.homeRecent-content-card {
					width: 100%;
					padding: 0 40rpx;
					margin-bottom: 160rpx;
					.homeRecent-content-card-list {
						width: 100%;
						margin-bottom: 140rpx;
						.homeRecent-content-card-list-title {
							font-size: 36rpx;
							font-weight: 700;
							margin-bottom: 32rpx;
						}
						.homeRecent-content-card-list-content {
							font-size: 28rpx;
							line-height: 42rpx;
							margin-bottom: 30rpx;
						}
						.homeRecent-content-card-list-pict {
							width: 100%;
							// height: 780rpx;
							.image {
								display: block;
								width: 100%;
								// height: 100%;
							}
						}
						.homeRecent-content-card-list-bottom {
							display: flex;
							justify-content: space-between;
							align-items: center;
							width: 100%;
							height: 120rpx;
							.title-left {
								font-size: 36rpx;
								font-weight: 700;
							}
							.iconfont {
								font-size: 36rpx;
								font-weight: 700;
							}
						}
					}
					
					.homeRecent-content-card-chair {
						display: flex;
						width: 100%;
						overflow: auto;
						.homeRecent-content-card-chair-list {
							width: 280rpx;
							margin-right: 40rpx;
							.image {
								width: 100%;
								height: 280rpx;
								display: block;
							}
							.homeRecent-content-card-chair-list-new {
								width: 60rpx;
								height: 40rpx;
								margin-bottom: 20rpx;
								line-height: 40rpx;
								text-align: center;
								font-size: 24rpx;
								background-color: #ca5107;
								color: #fff;
							}
							.homeRecent-content-card-chair-list-title {
								max-width: 280rpx;
								margin-bottom: 20rpx;
								font-weight: 700;
								font-size: 28rpx;
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
							}
							.homeRecent-content-card-chair-list-style {
								font-size: 24rpx;
								color: #6a6a6a;
							}
							.homeRecent-content-card-chair-list-price {
								font-weight: 700;
								font-size: 24rpx;
								.price {
									font-size: 36rpx;
								}
							}
						}
					}
				}
				
				.homeRecent-content-newStyle {
					width: 100%;
					padding: 0 40rpx;
					margin-bottom: 160rpx;
					.homeRecent-content-newStyle-sleep {
						width: 100%;
						margin-bottom: 160rpx;
						.homeRecent-content-newStyle-sleep-title {
							margin-bottom: 30rpx;
							font-size: 40rpx;
							font-weight: 700;
						}
						.homeRecent-content-newStyle-sleep-content {
							margin-bottom: 20rpx;
							font-size: 28rpx;
							color: #111;
							line-height: 42rpx;
						}
						.homeRecent-content-newStyle-sleep-pict {
							display: flex;
							width: 100%;
							overflow: auto;
							.image {
								display: block;
								width: 600rpx;
								height: 700rpx;
								margin-right: 20rpx;
							}
						}
						.homeRecent-content-newStyle-sleep-bottom {
							display: flex;
							justify-content: space-between;
							align-items: center;
							width: 100%;
							height: 120rpx;
							.title-left {
								font-size: 36rpx;
								font-weight: 700;
							}
							.iconfont {
								font-size: 36rpx;
								font-weight: 700;
							}
						}
					}
					.homeRecent-content-newStyle-pillow {
						display: flex;
						width: 100%;
						margin-bottom: 160rpx;
						overflow: auto;
						.homeRecent-content-newStyle-pillow-list {
							width: 280rpx;
							margin-right: 40rpx;
							.image {
								width: 100%;
								height: 280rpx;
								display: block;
							}
							.homeRecent-content-newStyle-pillow-new {
								width: 60rpx;
								height: 40rpx;
								margin-bottom: 20rpx;
								line-height: 40rpx;
								text-align: center;
								font-size: 24rpx;
								background-color: #ca5107;
								color: #fff;
							}
							.homeRecent-content-newStyle-pillow-title {
								max-width: 280rpx;
								margin-bottom: 20rpx;
								font-weight: 700;
								font-size: 28rpx;
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
							}
							.homeRecent-content-newStyle-pillow-style {
								margin-bottom: 20rpx;
								font-size: 24rpx;
								color: #6a6a6a;
							}
							.homeRecent-content-newStyle-pillow-price {
								font-weight: 700;
								font-size: 24rpx;
								.price {
									font-size: 36rpx;
								}
							}
						}
					}
					.homeRecent-content-newStyle-storage {
						width: 100%;
						margin-bottom: 160rpx;
						.homeRecent-content-newStyle-storage-title {
							margin-bottom: 30rpx;
							font-size: 40rpx;
							font-weight: 700;
						}
						.homeRecent-content-newStyle-storage-content {
							margin-bottom: 80rpx;
							font-size: 28rpx;
							color: #111;
							line-height: 42rpx;
						}
						.homeRecent-content-newStyle-storage-pict {
							width: 100%;
							.homeRecent-content-newStyle-storage-pict-poster {
								// width: 670rpx;
								// height: 780rpx;
								margin-bottom: 20rpx;
								.image {
									display: block;
									width: 100%;
									height: 100%;
								}
							}
							.homeRecent-content-newStyle-storage-pict-waterfall {
								display: flex;
								justify-content: space-between;
								.waterfall-box {
									display: flex;
									flex-direction: column;
									.image_small {
										display: block;
										width: 100%;
										height: 326px;
										margin-bottom: 20rpx;
									}
									.image_big {
										display: block;
										width: 100%;
										height: 440rpx;
										margin-bottom: 20rpx;
									}
								}
							}
						}
						.homeRecent-content-newStyle-sleep-bottom {
							display: flex;
							justify-content: space-between;
							align-items: center;
							width: 100%;
							height: 120rpx;
							.title-left {
								font-size: 36rpx;
								font-weight: 700;
							}
							.iconfont {
								font-size: 36rpx;
								font-weight: 700;
							}
						}
					}
					.homeRecent-content-newStyle-morestorage {
						display: flex;
						width: 100%;
						margin-bottom: 160rpx;
						overflow: auto;
						.homeRecent-content-newStyle-morestorage-list {
							width: 280rpx;
							margin-right: 40rpx;
							.image {
								width: 100%;
								height: 280rpx;
								display: block;
							}
							.homeRecent-content-newStyle-morestorage-new {
								width: 60rpx;
								height: 40rpx;
								margin-bottom: 20rpx;
								line-height: 40rpx;
								text-align: center;
								font-size: 24rpx;
								background-color: #ca5107;
								color: #fff;
							}
							.homeRecent-content-newStyle-morestorage-title {
								max-width: 280rpx;
								margin-bottom: 20rpx;
								font-weight: 700;
								font-size: 28rpx;
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
							}
							.homeRecent-content-newStyle-morestorage-style {
								margin-bottom: 20rpx;
								font-size: 24rpx;
								color: #6a6a6a;
							}
							.homeRecent-content-newStyle-morestorage-price {
								font-weight: 700;
								font-size: 24rpx;
								.price {
									font-size: 36rpx;
								}
							}
						}
					}
				}
				
				.homeRecent-content-color {
					width: 100%;
					padding: 0 40rpx;
					margin-bottom: 160rpx;
					.homeRecent-content-color-storage {
						width: 100%;
						margin-bottom: 160rpx;
						.homeRecent-content-color-storage-title {
							margin-bottom: 30rpx;
							font-size: 40rpx;
							font-weight: 700;
						}
						.homeRecent-content-color-storage-content {
							margin-bottom: 80rpx;
							font-size: 28rpx;
							color: #111;
							line-height: 42rpx;
						}
						.homeRecent-content-color-storage-pict {
							display: flex;
							width: 100%;
							overflow: auto;
							.homeRecent-content-color-storage-pict-poster {
								flex-shrink: 0;
								width: 606rpx;
								height: 710rpx;
								// width: 670rpx;
								// height: 780rpx;
								margin-bottom: 20rpx;
								margin-right: 20rpx;
								.image {
									display: block;
									width: 100%;
									height: 100%;
								}
							}
							.homeRecent-content-color-storage-pict-waterfall {
								display: flex;
								justify-content: space-between;
								flex-shrink: 0;
								width: 606rpx;
								.waterfall-box {
									display: flex;
									flex-direction: column;
									.image_small {
										display: block;
										width: 100%;
										height: 296rpx !important;
										margin-bottom: 20rpx;
									}
									.image_big {
										display: block;
										width: 100%;
										height: 394rpx !important;
										margin-bottom: 20rpx;
									}
								}
							}
						}
						.homeRecent-content-color-bottom {
							display: flex;
							justify-content: space-between;
							align-items: center;
							width: 100%;
							height: 120rpx;
							.title-left {
								font-size: 36rpx;
								font-weight: 700;
							}
							.iconfont {
								font-size: 36rpx;
								font-weight: 700;
							}
						}
					}
					
					.homeRecent-content-color-pillow {
						display: flex;
						width: 100%;
						margin-bottom: 160rpx;
						overflow: auto;
						.homeRecent-content-color-pillow-list {
							width: 280rpx;
							margin-right: 40rpx;
							.image {
								width: 100%;
								height: 280rpx;
								display: block;
							}
							.homeRecent-content-color-pillow-new {
								width: 60rpx;
								height: 40rpx;
								margin-bottom: 20rpx;
								line-height: 40rpx;
								text-align: center;
								font-size: 24rpx;
								background-color: #ca5107;
								color: #fff;
							}
							.homeRecent-content-color-pillow-title {
								max-width: 280rpx;
								margin-bottom: 20rpx;
								font-weight: 700;
								font-size: 28rpx;
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
							}
							.homeRecent-content-color-pillow-style {
								margin-bottom: 20rpx;
								font-size: 24rpx;
								color: #6a6a6a;
							}
							.homeRecent-content-color-pillow-price {
								font-weight: 700;
								font-size: 24rpx;
								.price {
									font-size: 36rpx;
								}
							}
						}
					}
				}
				
				.homeRecent-content-findmore {
					width: 100%;
					padding: 0 40rpx;
					.homeRecent-content-findmore-title1 {
						font-size: 40rpx;
						font-weight: 700;
						margin-bottom: 20rpx;
					}
					.homeRecent-content-findmore-title2 {
						font-size: 28rpx;
						color: #484848;
					}
					.discovering-inspiration {
						padding-bottom: 160rpx;
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
				}
				
				.homeRecent-content-bottom{
					width: 100%;
					padding: 30px 40rpx 155px;
					background-color: #f5f5f5;
					.homeRecent-content-bottom-interested {
						display: flex;
						justify-content: space-between;
						width: 100%;
						margin-bottom: 60rpx;
						.font {
							font-size: 36rpx;
							font-weight: 700;
							.iconfont {
								font-size: 36rpx;
								font-weight: 700;
							}
						}
						.homeRecent-content-bottom-interested-left {
							.iconfont {
								margin-right: 24rpx;
							}
						}
					}
					.homeRecent-content-bottom-policy {
						width: 100%;
						padding-bottom: 60rpx;
						.title {
							font-size: 28rpx;
							margin-bottom: 12rpx;
							text-align: center;
						}
					}
				}
				
				.goTop {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					background-color: #fff;
				}
			}
		}
	}
	view {
		box-sizing: border-box;
	}
</style>