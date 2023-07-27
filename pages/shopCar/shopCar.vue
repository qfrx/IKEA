<template>
	<view class="shopCar">
		<view class="shopCar-bg"></view>
		<view class="shopCar-title">
			购物袋
		</view>
		<!-- 当购物车为空的时候显示 -->
		<view v-show="false" class="shopCar-null">
			<view class="shopCar-null-title">
				你的购物车是空的
			</view>
			<view class="shopCar-null-content">
				你可以通过搜索或浏览商品的方式将产品添加到购物车中
			</view>
			<view class="shopCar-null-btn">
				前去购物
			</view>
		</view>
		<!-- 当购物车不为空的时候显示 -->
		<view class="shopCar-item">
			<view v-for="item in 4" class="shopCar-list">
				<view class="shopCar-list-left active">√</view>
				<view class="shopCar-list-center">
					<view class="shopCar-list-center-pict">
						<image class="image" src="../../static/images/shopcar.png" mode=""></image>
					</view>
					<view class="shopCar-list-center-content">
						<view class="content-title">
							TIGERFINK 提格芬
						</view>
						<view class="content-describe">
							储物装置带分隔间,天蓝色
						</view>
						<view class="content-price">
							<view class="num">¥129.00</view>
							<view class="num-box">
								<button class="chang-num">-</button>
								<view class="chang-num">1</view>
								<button class="chang-num">+</button>
							</view>
						</view>
						<view class="content-mail">满329包邮</view>
					</view>
					<view class="content-del">
						X
						<!-- <i class="iconfont icon-sousuo"></i> -->
					</view>
				</view>
			</view>
		</view>
		<view class="shopCar-count">
			<view class="shopCar-count-left">
				<view class="shopCar-count-left-round active">√</view>
				<view class="all">全选</view>
			</view>
			<view class="shopCar-count-center">
				<view class="count-price">
					<text class="text">不含配送费</text>
					¥129.00
				</view>
				<view class="font">已减免配送费</view>
			</view>
			<view class="shopCar-count-right">结算(1)</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.shopCar {
		width: 100%;
		padding-top: 120rpx;
		.shopCar-bg {
			position: fixed;
			left: 0px;
			top: 0px;
			z-index: -5;
			width: 100vw;
			height: 100vh;
			background-color: #f5f5f5;
		}
		.shopCar-title {
			position: fixed;
			left: 0;
			top: 0;
			z-index: 16;
			width: 100%;
			height: 120rpx;
			margin-bottom: 4rpx;
			line-height: 120rpx;
			text-align: center;
			font-size: 40rpx;
			font-weight: 700;
			box-shadow: 0px 0px 5px #ccc;
			color: #4a4a4a;
			background-color: #fff;
		}
		.shopCar-null {
			width: 100%;
			padding-left: 50rpx;
			padding-top: 140rpx;
			.shopCar-null-title {
				width: 100%;
				margin-bottom: 60rpx;
				font-size: 40rpx;
				font-weight: 700;
			}
			.shopCar-null-content {
				width: 100%;
				margin-bottom: 100rpx;
				font-size: 24rpx;
			}
			.shopCar-null-btn {
				width: 400rpx;
				height: 110rpx;
				line-height: 110rpx;
				text-align: center;
				font-size: 24rpx;
				color: #fff;
				background-color: #0058a3;
				border-radius: 999px;
				
			}
		}
		.shopCar-item {
			width: 100%;
			// padding: 0 40rpx;
			background-color: #fff;
			.shopCar-list {
				display: flex;
				align-items: center;
				// width: 100%;
				padding: 60rpx 40rpx;
				border-bottom: 2px solid #f5f5f5;
				.shopCar-list-left {
					width: 50rpx;
					height: 50rpx;
					margin-right: 28rpx;
					text-align: center;
					line-height: 50rpx;
					border-radius: 50%;
					color: #fff;
					background-color: #fff;
					border: 1px solid #000;
					&.active {
						background-color: #0058a3;
						border-color: #0058a3;
					}
				}
				.shopCar-list-center {
					display: flex;
					width: 600rpx;
					.shopCar-list-center-pict {
						width: 160rpx;
						height: 160rpx;
						margin-right: 20rpx;
						.image {
							width: 100%;
							height: 100%;
							display: block;
						}
					}
					.shopCar-list-center-content {
						width: 300rpx;
						margin-right: 60rpx;
						.content-title {
							max-width: 280rpx;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							margin-bottom: 20rpx;
							font-size: 28rpx;
							font-weight: 700;
						}
						.content-describe {
							max-width: 280rpx;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							font-size: 28rpx;
							color: #666666;
						}
						.content-price {
							display: flex;
							height: 60rpx;
							margin: 20rpx 0;
							.num {
								margin-right: 20rpx;
								font-size: 32rpx;
								font-weight: 700;
							}
							.num-box {
								display: flex;
								.chang-num {
									width: 50rpx;
									height: 50rpx;
									margin: 0;
									padding: 0;
									line-height: 50rpx;
									text-align: center;
								}
							}
						}
						.content-mail {
							width: 160rpx;
							height: 50rpx;
							line-height: 50rpx;
							text-align: center;
							font-size: 24rpx;
							color: #ca5107;
							background-color: #fbf1ec;
						}
					}
				}
			}
		}
		
		.shopCar-count {
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 100%;
			height: 160rpx;
			// padding: 0 40rpx;
			background-color: #fff;
			.shopCar-count-left {
				width: 50rpx;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				align-items: center;
				.shopCar-count-left-round {
					width: 50rpx;
					height: 50rpx;
					text-align: center;
					line-height: 50rpx;
					border-radius: 50%;
					color: #fff;
					background-color: #fff;
					border: 1px solid #000;
					&.active {
						background-color: #0058a3;
						border-color: #0058a3;
					}
				}
				.all {
					font-size: 24rpx;
				}
			}
			.shopCar-count-center {
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				height: 100%;
				.count-price {
					font-size: 28rpx;
					font-weight: 700;
					.text {
						font-size: 24rpx;
						color: #767676;
					}
				}
				.font {
					font-size: 24rpx;
					color: #767676;
				}
			}
			.shopCar-count-right {
				width: 200rpx;
				height: 100rpx;
				line-height: 100rpx;
				text-align: center;
				border-radius: 999px;
				background-color: #0058a3;
				color: #fff;
			}
		}
	}
</style>