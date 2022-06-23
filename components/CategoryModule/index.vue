<template>
  <view>
		<view class="module-container" v-if="categoryModule.length > 0">
			<view class="module-item" v-for="(category, index) in categoryModule" :key="index">
				<image class="title-pic" :src="category.titlePicUrl" alt="" />
				<scroll-view class="scroll" scroll-x="true">
					<view class="scroll-item" v-for="(item, itemIndex) in category.itemList" :key="item.id">
						<image class="item-img" :src="item.listPicUrl"></image>
						<view class="item-desc">{{item.name}}</view>
					</view>
				</scroll-view>
			</view>
		</view>
  
	</view>
</template>

<script>
export default {
  name: 'CategoryModule',
	props: {
		categoryModule: Array
	},
	
}
</script>

<style lang="scss" scoped>
	.module-container{
		.module-item{
			.title-pic{
				width: 750rpx;
			}
			.scroll{
				white-space: nowrap;
				.scroll-item{
					display: inline-block;
					width: 200rpx;
					.item-img{
						width: 200rpx;
						height: 200rpx;
					}
					.item-desc{
						white-space: pre-wrap;
						width: 200rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						display:-webkit-box;
						-webkit-box-orient:vertical;
						-webkit-line-clamp:2;
					}
					& + .scroll-item{
						margin-left: 20rpx;
					}
				}
			}
		}
	}
</style>