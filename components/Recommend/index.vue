<template>
  <view>
		<!-- 轮播图 -->
		<swiper class="banners" 
		:indicator-dots="true" 
		:autoplay="true" 
		:interval="3000" 
		:duration="1000"
		circular
		>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/a64f1bb6383da9a04791027ff580171e.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/dd6c3b2181338b2a87e11b13d2d460de.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item><swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/d0fa0684fc81c6c192cab0987197f686.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 3个policy内容 -->
		<view class="policy-container">
			<view class="policy-item" v-for="(item,index) in policyDescList" :key="index">
				<image :src="item.icon" mode=""></image>
				<text>{{item.desc}}</text>
			</view>
		</view>
		
		<!-- 10个导航图标 -->
		<view class="nav-list">
			<view class="nav-item" v-for="(item, index) in navList" :key="item.L1Id">
				<image :src="item.picUrl" mode=""></image>
				<text>{{item.text}}</text>
			</view>
		</view>
		
		<!-- 分类模块 -->
		<CategoryModule :categoryModule = "categoryModule"></CategoryModule>
	</view>
</template>

<script>
import {mapGetters} from "vuex";
import CategoryModule from "../CategoryModule";
	
export default {
  name: 'Recommend',
	computed: {
		...mapGetters(["policyDescList","navList", "categoryModule"]),
	},
	components:{
		CategoryModule
	}
}
</script>

<style lang="scss" scoped>
	.banners{
		.swiper-item{
			image{
				width: 750rpx;
			}
		}
	}
	
	.policy-container{
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 80rpx;
		.policy-item{
			display: flex;
			align-items: center;
			image{
				width: 40rpx;
				height: 40rpx;
			}
			text{
				font-size: 26rpx;
			}
		}
	}
	
	.nav-list{
		margin: 0 10rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.nav-item{
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 10rpx;
			image{
				width: 130rpx;
				height: 130rpx;
			}
			text{
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
	
	
	
	.test{
		font-size: 0;
	}
</style>