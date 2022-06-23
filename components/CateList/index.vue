<template>
	<view>
		<view class="cate-container" v-if="cateShowContent">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
			circular
			>
				<swiper-item 
				v-for="(banner,index) in cateShowContent.category.bannerUrlList"
				:key="index"
				>
					<image :src="banner" mode=""></image>
				</swiper-item>
			</swiper>
			<view class="name">{{cateShowContent.category.name}}</view>
			<view class="front-name">{{cateShowContent.category.frontName}}</view>
			<view class="goods">
				<view class="goods-item" 
				v-for="(item,index) in cateShowContent.itemList"
				:key="item.id"
				@click = toDetail(item)
				>
					<image class="img" :src="item.primaryPicUrl" mode=""></image>
					<view class="desc">{{item.name}}</view>
					<text class="price">{{`¥ ${item.counterPrice}`}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapGetters,mapMutations} from "vuex";
	
	export default {
		name:"CateList",
		data() {
			return {
				
			};
		},
		props:{
			navId: Number
		},
		mounted(){
			this.$store.dispatch("getCateList");	
		},
		watch: {
			navId:{
				handler(newVal, oldVal){
					this.$store.commit("SET_NAV_ID",newVal);
				},
				immediate: true
			}
		},
		computed:{
			...mapState({
				cateList: state => state.home.navList
			}),
			...mapGetters(["cateShowContent"]),
		},
		methods:{
			...mapMutations({setShopDetail: "SET_SHOP_DETAIL"}),
			toDetail(item){
				this.setShopDetail(item);
				uni.navigateTo({
					url:"/pages/detail/detail"
				});
			}
		}
	};
</script>

<style lang="scss">
	.cate-container{
		swiper{
			swiper-item{
				image{
					width: 750rpx;
				}
			}
		}
		.name{
			line-height: 60rpx;
			font-size: 30rpx;
			text-align: center;
		}
		.front-name{
			line-height: 40rpx;
			font-size: 26rpx;
			text-align: center;
			color: #b8b8b8;
		}
		.goods{
			padding: 20rpx;
			display:flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.goods-item{
				width: 350rpx;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				.img{
					width: 350rpx;
					height: 350rpx;
				}
				.desc{
					width: 350rpx;
					font-size: 26rpx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.price{
					font-size: 30rpx;
					color: red;
				}
			}
		}
	}
</style>