<template>
	<view class="personal-container">
		<!-- 登录头部 -->
		<view class="header">
			<image class="avatar" src="/static/images/personal/personal.png" mode=""></image>
			<text class="username">未登录</text>
		</view>
		<!-- 我的资产 assets-->
		<view class="assets-wrap">
			<text class="title">我的资产</text>
			<view class="line"></view>
			<view class="assets-all">
				<view class="assets-item">
					<text class="money">￥0</text>
					<text class="name">回馈金</text>
				</view>
				<view class="assets-item">
					<text class="money">￥0</text>
					<text class="name">红包</text>
				</view>
				<view class="assets-item">
					<text class="money">￥0</text>
					<text class="name">优惠券</text>
				</view>
				<view class="assets-item">
					<text class="money">￥0</text>
					<text class="name">津贴</text>
				</view>
				<view class="assets-item">
					<text class="money">￥0</text>
					<text class="name">礼品卡</text>
				</view>

			</view>
		</view>
		<!-- 设置栏 -->
		<view class="set-wrap">
			<uni-grid class="grid" :column="3" :showBorder="true" :highlight="false" @change="changeGrid">
				<uni-grid-item class="grid-item" v-for="(item, index) in setList" :index="index" :key="index">
					<view class="grid-item-box">
						<text class="icon iconfont" :class="item.icon"></text>
						<text class="text">{{ item.text }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>

	</view>
</template>

<script>
	import request from "@/utils/request";
	export default {
		data() {
			return {
				setList:[
					{
						icon: "icon-dingdan",
						text: "我的订单"
					},{
						icon: "icon-pintuan",
						text: "我的拼团"
					},{
						icon: "icon-hongbao",
						text: "领红包"
					},{
						icon: "icon-jifen",
						text: "我的积分"
					},{
						icon: "icon-dizhiguanli",
						text: "地址管理"
					},{
						icon: "icon-zhanghaoanquan",
						text: "账号安全"
					},{
						icon: "icon-kefu1",
						text: "联系客服"
					},{
						icon: "icon-yijianfankui",
						text: "用户反馈"
					},{
						icon: "icon-bangzhuzhongxin",
						text: "帮助中心"
					},{
						icon: "icon-shouhou",
						text: "退还/售后"
					}
				]
			};
		},
		methods:{
			// 点击个人列表的事件
			changeGrid(e){
				console.log(e);
			},
			// 登录
			getToken(){
				uni.login({
				  success: async (res)=> {
				    if (res.code) {
				      //发起网络请求
				      let result = await request("/getToken",{code: res.code});
							let token = result.data;
							uni.setStorage({
								key: 'token',
								data: token,
								success: function () {
									console.log('登录成功');
								}
							});
				    } else {
				      console.log('登录失败！' + res.errMsg)
				    }
				  }
				})
			},
			// 获取用户信息
			getUserInfo(){
				
			},
		},
		mounted(){
			this.getToken();
			this.getUserInfo();
		}
	}
</script>

<style lang="scss">
	.header {
		padding: 40rpx;
		background-color: antiquewhite;

		.avatar {
			display: inline-block;
			height: 100rpx;
			width: 100rpx;
			border-radius: 50%;
			background-color: white;
			margin-right: 50rpx;
		}

		.username {
			vertical-align: top;
			line-height: 50rpx;
		}
	}

	.assets-wrap {
		padding: 20rpx;

		.title {
			display: block;
		}

		.line {
			height: 2rpx;
			background-color: #ccc;
			margin: 20rpx 0;
		}

		.assets-all {
			display: flex;
			justify-content: space-around;

			.assets-item {
				height: 100rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
			}
		}
	}

	.set-wrap{
		.grid{
			.grid-item{
				.grid-item-box{
					height: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					.icon{
						font-size: 80rpx;
					}
					.text{
						font-size: 30rpx;
					}
				}
			}
		}
		
	}
</style>
