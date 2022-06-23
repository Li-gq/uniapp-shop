<template>
	<view class="cart-container">
		<!-- 滚动区 -->
		<view class="scroll" v-if="cartList.length > 0">
			<view class="shop-item" v-for="(shop,index) in cartList" :key="shop.id">
				<text class="select-box iconfont icon-31xuanzhong" 
				:class="shop.isSelected  === true ?  'selected' : '' "
				@click="updateSelectedState(index)"
				></text>
				<image class="shop-img" :src="shop.listPicUrl" mode=""></image>
				<view class="right">
					<view class="name">{{shop.name}}</view>
					<text class="price">{{`￥ ${cartList[index].count * cartList[index].retailPrice}`}}</text>
					<view class="add-minus">
						<view class="wrap">
							<view class="minus" @click="changeShopCount(index, -1)">-</view>
							<view class="count">{{shop.count}}</view>
							<view class="add" @click="changeShopCount(index, 1)">+</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<!-- footer -->
		<view class="footer">
			<view class="left">
				<text class="select-box iconfont icon-31xuanzhong"
				:class="selectedAll === true ?  'selected' : '' "
				@click = "changeSelectedAll"
				></text>
				<text class="selectedCount">{{`已选 ${selectedCount}`}}</text>
			</view>
			<view class="right">
				<text>{{`合计：￥${totalPrice}`}}</text>
				<view class="buy">下单</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapGetters,mapMutations} from "vuex";
	export default {
		data() {
			return {

			};
		},
		computed:{
			...mapState({
				cartList: state => state.cart.cartList
			}),
			...mapGetters(["selectedCount","totalPrice","selectedAll"]),
		},
		mounted(){
			
		},
		methods:{
			...mapMutations({updateSelectedState:"UPDATE_SELECTED_STATE",
			changeSelectedAll:"CHANGE_SELECTED_ALL"}),
			changeShopCount(index, count){
				this.$store.dispatch("changeShopCount",{index,count});
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.cart-container{
		height: 100%;
		.scroll{
			height: calc(100% - 100rpx);
			background-color: #e2e2e2;
			overflow: scroll;
			.shop-item{
				width: 750rpx;
				padding: 20rpx;
				display: flex;
				background-color: white;
				border-radius: 10rpx;
				margin: 20rpx 0;
				box-sizing: border-box;
				.select-box{
					line-height: 200rpx;
					padding: 0 20rpx;
					font-size: 50rpx;
					&.selected{
						color: red;
					}
				}
				.shop-img{
					flex: 0 0 200rpx;
					height: 200rpx;
					padding: 0 20rpx;
				}
				.right{
					flex: 1 0;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.name{
						line-height: 60rpx;
						width: 380rpx;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
					.price{
						line-height: 60rpx;
						color: red;
					}
					.add-minus{
						flex: 1;
						display: flex;
						flex-direction: row;
						align-self: flex-end;
						.wrap{
							align-self: flex-end;
							display: flex;
							.minus{
								width: 60rpx;
								line-height: 60rpx;
								text-align: center;
								border: 1px solid #ccc;
							}
							.count{
								width: 60rpx;
								line-height: 60rpx;
								text-align: center;
								border: 1px solid #ccc;
								border-left: none;
								font-size: 26rpx;
								font-weight: bold;
							}
							.add{
								width: 60rpx;
								line-height: 60rpx;
								text-align: center;
								border: 1px solid #ccc;
								border-left: none;
							}
						}
					}
				}
			}
		}
		
		.footer{
			width: 750rpx;
			height: 100rpx;
			background-color: white;
			display: flex;
			justify-content: space-between;
			.left{
				.select-box{
					font-size: 50rpx;
					padding: 20rpx;
					line-height: 100rpx;
					&.selected{
						color: red;
					}
				}
				.selectedCount{
					line-height: 100rpx;
					font-size: 40rpx;
				}
			}
			.right{
				display: flex;
				text{
					line-height: 100rpx;
					font-size: 40rpx;
					margin-right: 20rpx;
				}
				.buy{
					background-color: red;
					color: white;
					padding: 0 60rpx;
					line-height: 100rpx;
				}
			}
		}
	}
</style>
