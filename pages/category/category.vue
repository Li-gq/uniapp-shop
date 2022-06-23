<template>
	<view class="category-container">
		<!-- 搜索栏 -->
		<view class="search-container">
			<button class="search-button">搜索商品</button>
		</view>
		
		<!-- 内容区 -->
		<view class="content">
			<!-- 左边滚动栏 -->
			<scroll-view class="category-scroll" scroll-y="true">
				<view class="category-item" 
				v-for="(item,index) in navList"
				:key="item.L1Id"
				:class = " currentIndex === index ? 'active' : '' "
				@click = "changeCurrentIndex(index)"
				>
					{{item.text}}
				</view>				
			</scroll-view>
			<!-- 右边展示区 -->
			<view class="right">
				<view class="show" v-if="showContent">
					<image class="header" :src="showContent.imgUrl"></image>
					<view class="category-list" >
						<view class="category-item" 
						v-for="(item, index) in showContent.subCateList"
						:key="item.id"
						>
							<image :src="item.wapBannerUrl"></image>
							<view class="name">
								{{item.name}}
							</view>
						</view>
					</view>
				</view>
			</view>
			
		
		</view>
		
	</view>
</template>

<script>
	import {mapGetters,mapState} from "vuex";
	export default {
		name: "Category",
		data() {
			return {
				currentIndex: 0
			};
		},
		computed:{
			...mapGetters(["navList"]),
			...mapState({
				categoryData: state=>state.category.categoryData
			}),
			showContent(){
				if(this.categoryData){
					return this.categoryData[this.currentIndex];
				}
			},
		},
		mounted(){
			this.$store.dispatch("getIndexData");
			this.$store.dispatch("getCategoryData");
		},
		methods: {
			changeCurrentIndex(index){
				this.currentIndex = index;
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.category-container{
		height: 100%;
		// 搜索栏样式
		.search-container{
			padding: 20rpx 40rpx;
			border-bottom: 2rpx solid #dadada;
			.search-button{
				text-align: center;
				font-size: 30rpx;
				line-height: 60rpx
			}
		}
		// 左右布局
		.content{
			height: calc(100% - 102rpx);
			display: flex;
			.category-scroll{
				padding: 10rpx;
				height: 100%;
				flex: 0 0 160rpx;
				.category-item{
					font-size: 26rpx;
					line-height: 80rpx;
					text-align: center;
					border-left: 4rpx solid transparent;
					&.active{
						border-left: 4rpx solid #bb0c04;
					}
				}
			}
			// 右边展示区
			.right{
				overflow: scroll;
				flex: 1 0 auto;
				height: 100%;
				position: relative;
				.show{
					position: absolute;
					right: 40rpx;
					width: 500rpx;
					height: 100%;
					overflow: scroll;
					// 取消滑块的显示
					scrollbar-width: none;
					-ms-overflow-style: none;
					&::-webkit-scrollbar {
					  display: none;
					}
					.header{
						height: 320rpx;
						width: 100%;
					}
					.category-list{
						display: flex;
						flex-wrap: wrap;
						align-items: center;
						justify-content: space-between;
						&::after{
							content: "";
							width: 130rpx;
						}
						.category-item{
							display: flex;
							flex-direction: column;
							align-items: center;
							width: 130rpx;
							margin-bottom: 20rpx;
							image{
								width: 100%;
								height: 130rpx;
							}
							.name{
								width: 100%;
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
								font-size: 26rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
