<template>
	<view class="homeRecent">
		<view>
			<findTopLogo></findTopLogo>
		</view>
		<view class="homeRecent-top">
			<view @click="change(item.id)" v-for="item in list1" :key="item.id" :class="['homeRecent-top-list',{'active':active_index==item.id}]">
				<view>{{item.name}}</view>
			</view>
		</view>
		<view class="homeRecent-content-top1">
			<view class="homeRecent-content-title">
				<view>新品</view>
			</view>
			<!-- 全新系列的三个系列 -->
			<view class="homeRecent-content-series">
				<view v-for="item in 3" class="homeRecent-content-series-list">
					<view class="homeRecent-content-series-list-img">
						<image class="image" src="../../static/images/homeRecent-series.webp"></image>
					</view>
					<view class="homeRecent-content-series-list-title">
						<view class="title-left">Nytillverkad 霓特浮德 系列</view>
						<i class="iconfont icon-sousuo"></i>
					</view>
				</view>
			</view>
			<!-- 夏日新风格 -->
			<view class="homeRecent-content-card">
				<view v-for="item in 3" class="homeRecent-content-card-list">
					<view class="homeRecent-content-card-list-title">
						再一次, 探索未来。Nytillverkad 霓特浮德 系列。
					</view>
					<view class="homeRecent-content-card-list-content">
						今年是宜家创立的80周年，为了庆祝这一盛事，我们精心挑选了过去的一系列经典家居用品，赋予了它们新的生机。Nytillverkad 霓特浮德 系列以明亮悦目的色彩和新材料重新打造而成，充分诠释了宜家特色设计理念：简单、实用又充满趣味。
					</view>
					<view class="homeRecent-content-card-list-pict">
						<image class="image" src="../../static/images/homeRecent-card.webp" mode=""></image>
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
			<view class="homeRecent-content-newStyle">
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
							<image class="image" src="../../static/images/storage.webp" mode=""></image>
						</view>
						<view class="homeRecent-content-newStyle-storage-pict-waterfall">
							<view class="homeRecent-content-newStyle-storage-pict-waterfall-left waterfall-box">
								<image class="image_small" src="../../static/images/灵巧收纳_1.webp" mode=""></image>
								<image class="image_big" src="../../static/images/灵巧收纳_2.webp" mode=""></image>
							</view>
							<view class="homeRecent-content-newStyle-storage-pict-waterfall-right waterfall-box">
								<image class="image_big" src="../../static/images/灵巧收纳_3.webp" mode=""></image>
								<image class="image_small" src="../../static/images/灵巧收纳_4.webp" mode=""></image>
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
		</view>
	</view>
</template>

<script>
	import findTopLogo from '@/components/findTopLogo';
	export default{
		components: {
			findTopLogo
		},
		data(){
			return {
				list1:[
					{
						id:"top1" ,
						name:"全新系列"
					},
					{
						id:"top2",
						name:"夏日新风格"
					},
					{
						id:"top3",
						name:"卧室新品"
					},
					{
						id:"top4",
						name:"色彩点缀"
					},
					{
						id:"top5",
						name:"探索更多"
					}
				],
				active_index:'top1',
			}
		},
		methods:{
			change(id){
				this.active_index = id
				if(id=='top1'){
					window.scrollTo({
						top:0,
						behavior:"smooth"
					})
				}else if(id=='top2'){
					window.scrollTo({
						top:980,
						behavior:"smooth"
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.homeRecent {
		width: 100%;
		.homeRecent-top {
			position: sticky;
			left: 0;
			top: 0;
			z-index: 20;
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			// height: 100rpx;
			padding: 0 20rpx;
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
		
		.homeRecent-content-top1 {
			width: 100%;
			.homeRecent-content-title {
				width: 100%;
				height: 300rpx;
				line-height: 300rpx;
				padding-left: 40rpx;
				font-size: 100rpx;
				font-weight: 700;
				color: #cc5107;
			}
			.homeRecent-content-series {
				width: 100%;
				padding: 0 60rpx;
				margin-bottom: 160rpx;
				.homeRecent-content-series-list {
					width: 100%;
					.homeRecent-content-series-list-img {
						width: 100%;
						height: 354rpx;
						.image {
							display: block;
							width: 100%;
							height: 100%;
						}
					}
					.homeRecent-content-series-list-title {
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
						height: 780rpx;
						.image {
							display: block;
							width: 100%;
							height: 100%;
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
							width: 670rpx;
							height: 780rpx;
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
							width: 100%;
							.waterfall-box {
								display: flex;
								flex-direction: column;
								width: 326rpx;
								.image_small {
									display: block;
									width: 326rpx;
									height: 326rpx;
									margin-bottom: 20rpx;
								}
								.image_big {
									display: block;
									width: 326rpx;
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
		}
	}
	view {
		box-sizing: border-box;
	}
</style>