<template>
	<view class="detail-container">
		<!-- 头部 -->
		<view class="header">
			<text class="iconfont icon-shouye home" @click="toHome"></text>
			<image class="log" src="../../static/images/logo.png" mode=""></image>
			<view class="cart" @click="toCart">
				<text class="iconfont icon-gouwucheman cart-icon"></text>
				<text class="cart-count">{{cartCount}}</text>
			</view>
		</view>
		
		
		<!-- 商品info -->
		<view class="shop-info">
			<!-- 商品图片或轮播图 -->
			<view class="show-shop" v-if="shopDetail.listPicUrl">
				<image class="shop-image" :src="shopDetail.listPicUrl" mode=""></image>
			</view>
			
			<view class="shop-prom-tag">
				{{shopDetail.promTag}}
			</view>
			<text class="price">{{`￥ ${shopDetail.retailPrice}`}}</text>
			<text class="name">{{shopDetail.name}}</text>
			
			<view style="padding: 20rpx;">其他数据<br/>其他数据<br/>其他数据<br/>
			其他数据<br/>其他数据<br/>其他数据<br/>其他数据<br/>其他数据<br/>
			其他数据<br/>其他数据<br/>其他数据<br/>其他数据<br/>其他数据<br/>
			</view>
		</view>
	
		
		
		
		<!-- 底部 -->
		<view class="footer">
			<view class="service">
				<text class="iconfont icon-kefu icon"></text>
			</view>
			<view class="buy">
				立即购买
			</view>
			<view class="add-cart" @click="addToCart">
				加入购物车
			</view>
		</view>
		
	</view>
</template>

<script>
	import {mapGetters,mapState,mapMutations}  from "vuex";
	
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			...mapGetters(["cartCount"]),
			...mapState({
				shopDetail: state => state.detail.shopDetail
			}),
		},
		methods:{
			...mapMutations({addShop:"ADD_SHOP"}),
			toHome(){
				console.log("tohome")
				uni.switchTab({
					url:"/pages/index/index"
				});
			},
			toCart(){
				uni.switchTab({
					url:"/pages/cart/cart"
				})
			},
			addToCart(){
				this.addShop(this.shopDetail);
			}
		}
	};
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	page{
		height: 100%;
	}
	.detail-container{
		height: 100%;
		position: relative;
	}
	// 头部
	$header-size: 60rpx;
	.header{
		display:flex;
		padding: 20rpx;
		justify-content: space-between;
		.home{
			width: $header-size;
			height: $header-size;
			font-size: $header-size;
		}
		.log{
			height: $header-size;
			width: 138 / 40 * $header-size;
		}
		.cart{
			height: $header-size;
			.cart-icon{
				width: $header-size;
				height: $header-size;
				font-size: $header-size;
			}
			.cart-count{
				position: relative;
				top: -.5em;
				color: red;
				vertical-align: top;
			}
		}
	}

	// 商品图片
	
	// 商品info
	.shop-info{
		height: calc(100% - 101rpx - 100rpx);
		overflow: scroll;
		// 取消滑块的显示
		scrollbar-width: none;
		-ms-overflow-style: none;
		&::-webkit-scrollbar {
		  display: none;
		}
		.show-shop{
			.shop-image{
				width: 750rpx;
				height: 750rpx;
			}
		}
		.shop-prom-tag{
			background-color: red;
			color: white;
			line-height: 100rpx;
			font-size: 40rpx;
			font-weight: bold;
			text-align: center;
			border-radius: 10rpx;
			margin: 20rpx;
		}
		.price{
			display: block;
			color: red;
			font-size: 40rpx;
			font-weight: bold;
			padding-left: 20rpx;
		}
		.name{
			display: block;
			padding-left: 20rpx;
		}
	}
	
	// 底部
	$footer-height: 100rpx;
	.footer{
		position: absolute;
		bottom: 0;
		display: flex;
		left: 0;
		right: 0;
		background-color: white;
		.service{
			height: $footer-height;
			display: flex;
			border-top: 1rpx solid gray;
			border-right: 1rpx solid gray;
			padding: 0 20rpx;
			.icon{
				margin: auto;
				font-size: 50rpx;
			}
		}
		.buy{
			height: $footer-height;
			line-height: $footer-height;
			text-align: center;
			font-size: 50rpx;
			border-top: 1rpx solid gray;
			border-right: 1rpx solid gray;
			flex: 1;
		}
		.add-cart{
			height: $footer-height;
			line-height: $footer-height;
			text-align: center;
			font-size: 50rpx;
			color: white;
			background-color: red;
			border-top: 1rpx solid gray;
			flex: 1;
		}
	}

</style>
