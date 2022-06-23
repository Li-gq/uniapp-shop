<template>
	<view class="index-container">
		<!-- 头部 -->
		<view class="header">
			<image src="../../static/images/logo.png"></image>
			<view class="search">
				<text class="iconfont icon-search"></text>
				<input type="text" placeholder="搜索">
			</view>
			<button>qingmeng</button>
		</view>
		
		<!-- 导航栏 -->
		<view class="nav-container">
			<scroll-view class="nav-scroll" scroll-x="true" enable-flex show-scrollbar="false" 
			>
				<view class="nav-item"  :class="navCurrentIndex===-1?'active':''"
				@click="changeNavCurrentIndex(-1, 0)">
					推荐
				</view>
				<view class="nav-item" v-for="(item, index) in navList" :key="item.L1Id" 
				:class="navCurrentIndex===index?'active':''"
				@click="changeNavCurrentIndex(index, item.L1Id)"
				>
					{{item.text}}
				</view>
								
			</scroll-view>
		</view>
		<view>
			<Recommend v-if="!!!navId"></Recommend>
			<CateList v-else :navId="navId"></CateList>
		</view>
	</view>
</template>

<script>
	import request from "@/utils/request";
	import Recommend from "@/components/Recommend";
	import CateList from "@/components/CateList"
	import {mapGetters} from "vuex";
	
	export default {
		name: "home",
		data() {
			return {
				indexData: {},
				navCurrentIndex: -1,
				navId: ""
			};
		},
		components: {
			Recommend,
			CateList
		},
		computed:{
			...mapGetters(["navList"]),
		},
		mounted() {
			this.$store.dispatch("getIndexData");
		},
		methods:{
			changeNavCurrentIndex(index,navId){
				this.navCurrentIndex = index;
				this.navId = navId;
			},
		},
	}
</script>

<style lang="scss">
	// 头部样式
	.header{
		height: 60rpx;
		display:flex;
		align-items: center;
		margin: 20rpx;
		image{
			height: 40rpx;
			width: 138rpx;
		}
		.search{
			flex: 1 0;
			height: 60rpx;
			position: relative;
			margin: 0 20rpx;
			text{
				position: absolute;
				line-height: 60rpx;
				padding: 0 10rpx;
			}
			input{
				height: 60rpx;
				padding-left: 60rpx;
				line-height: 60rpx;
				background-color: #ccc;
			}
		}
		button{
			height: 60rpx;
			font-size: 24rpx;
			color: #bb0c04;
		}
	}
	
	// 导航栏样式
	.nav-container{
		// margin: 0 20rpx;
		.nav-scroll{
			white-space: nowrap;
			.nav-item{
				width: 150rpx;
				height: 70rpx;
				text-align: center;
				line-height: 70rpx;
				font-size: 26rpx;
				display: inline-block;
				&.active{
					border-bottom: 6rpx solid #bb0c04;
				}
			}
		}
	}
	
</style>
