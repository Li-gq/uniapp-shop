import request from "@/utils/request";
import Vue from "vue";

const state = {
	cartList: [
		{
			"count": 1,
			"isSelected": true,
			"promId": 0,
			"showPoints": false,
			"itemTagList": [{
				"itemId": 3810008,
				"tagId": 128111155,
				"freshmanExclusive": false,
				"name": "暖冬特惠",
				"subType": 204,
				"forbidJump": false,
				"type": 2
			}],
			"rank": 1,
			"id": 3810008,
			"sellVolume": 434,
			"primaryPicUrl": "https://yanxuan-item.nosdn.127.net/8ca5893efee1a4e33c915d6b6b44c107.png",
			"soldOut": false,
			"sortFlag": 0,
			"commentCount": 0,
			"onSaleTime": 1573444571736,
			"picMode": 1,
			"commentWithPicCount": 0,
			"underShelf": false,
			"status": 2,
			"couponConflict": true,
			"forbiddenBuy": false,
			"promotionDesc": "暖冬特惠",
			"limitedFlag": 204,
			"pieceNum": 0,
			"itemSizeTableDetailFlag": false,
			"forbidExclusiveCal": false,
			"rewardShareFlag": false,
			"updateTime": 1576029274173,
			"showCommentEntrance": true,
			"pieceUnitDesc": "件",
			"specialPromTag": "",
			"counterPrice": 1299,
			"categoryL2Id": 0,
			"retailPrice": 1039,
			"primarySkuPreSellPrice": 0,
			"preLimitFlag": 0,
			"itemPromValid": true,
			"promTag": "暖冬特惠",
			"source": 0,
			"points": 0,
			"primarySkuPreSellStatus": 0,
			"extraServiceFlag": 0,
			"flashPageLink": "",
			"autoOnsaleTimeLeft": 0,
			"innerData": {},
			"saleCenterSkuId": 0,
			"pointsStatus": 0,
			"extraPrice": "",
			"colorNum": 3,
			"showTime": 0,
			"autoOnsaleTime": 0,
			"preemptionStatus": 1,
			"isPreemption": 0,
		 "zcSearchFlag": false,
			"name": "女式户外派克羽绒服",
			"appExclusiveFlag": false,
			"itemType": 1,
			"listPicUrl": "https://yanxuan-item.nosdn.127.net/b73d07da373d3e4b16d2431b501aad99.png",
			"pointsPrice": 0,
			"simpleDesc": "强势牛津布，雨雪无惧",
			"seoTitle": "",
			"newItemFlag": false,
			"buttonType": 0,
			"primarySkuId": 300186026,
			"displaySkuId": 300186028,
			"productPlace": "",
			"itemSizeTableFlag": false
		},
		{
			"count": 1,
			"isSelected": false,
			"promId": 0,
			"showPoints": false,
			"itemTagList": [{
				"itemId": 3811012,
				"tagId": 128111155,
				"freshmanExclusive": false,
				"name": "暖冬特惠",
				"subType": 204,
				"forbidJump": false,
				"type": 2
			}],
			"rank": 1,
			"id": 3811012,
			"sellVolume": 220,
			"primaryPicUrl": "https://yanxuan-item.nosdn.127.net/133f0872160d7ed7285932aa53cac02a.png",
			"soldOut": false,
		 "sortFlag": 0,
			"commentCount": 0,
			"onSaleTime": 1573270831923,
			"picMode": 1,
			"commentWithPicCount": 0,
			"underShelf": false,
			"status": 2,
			"couponConflict": true,
			"forbiddenBuy": false,
			"promotionDesc": "暖冬特惠",
			"limitedFlag": 204,
			"pieceNum": 0,
			"itemSizeTableDetailFlag": false,
			"forbidExclusiveCal": false,
			"rewardShareFlag": false,
			"updateTime": 1576745776737,
			"showCommentEntrance": true,
			"pieceUnitDesc": "件",
			"specialPromTag": "",
			"counterPrice": 1499,
			"categoryL2Id": 0,
			"retailPrice": 1199,
			"primarySkuPreSellPrice": 0,
			"preLimitFlag": 0,
			"itemPromValid": true,
			"promTag": "暖冬特惠",
			"source": 0,
			"points": 0,
			"primarySkuPreSellStatus": 0,
			"extraServiceFlag": 0,
			"flashPageLink": "",
			"autoOnsaleTimeLeft": 0,
		 "innerData": {},
			"saleCenterSkuId": 0,
			"pointsStatus": 0,
			"extraPrice": "",
			"colorNum": 2,
			"showTime": 0,
			"autoOnsaleTime": 0,
			"preemptionStatus": 1,
			"isPreemption": 0,
			"zcSearchFlag": false,
			"name": "挑色狐狸毛领设计，女式户外超长羽绒服",
		 "appExclusiveFlag": false,
			"itemType": 1,
			"listPicUrl": "https://yanxuan-item.nosdn.127.net/09eb816e5527c503d97ff50f79680144.png",
			"pointsPrice": 0,
			"simpleDesc": "全身包裹的温度，踏实放心",
			"seoTitle": "",
			"newItemFlag": false,
			"buttonType": 0,
			"primarySkuId": 300186018,
			"displaySkuId": 300186020,
			"productPlace": "",
			"itemSizeTableFlag": false
		}
	]
};
const mutations = {
	SET_CART_LIST(state, cartList) {
		state.cartList = cartList;
	},
	ADD_SHOP(state,shop){
		let shopIndex = state.cartList.findIndex(item => item.id === shop.id);
		if(shopIndex === -1){
			state.cartList.unshift(shop);
			Vue.set(state.cartList[0],"count",1);
			Vue.set(state.cartList[0],"isSelected",true);
		}else{
			state.cartList[shopIndex].count += 1;
			state.cartList[shopIndex].isSelected = true;
		}
	},
	CHANGE_SHOP_COUNT(state,{index,newCount}){
		state.cartList = state.cartList.map((item,i) => {
			if(i === index){
				item.count = newCount;
			}
			return item;
		});
	},
	DELETE_SHOP(state,index){
		console.log("delete index",index);
		state.cartList.splice(index,1);
	},
	UPDATE_SELECTED_STATE(state,index){
		state.cartList[index].isSelected = !state.cartList[index].isSelected;
	},
	CHANGE_SELECTED_ALL(state){
		let isSelectedAll = state.cartList.every(item=>item.isSelected === true);
		state.cartList = state.cartList.map(item=>{
			item.isSelected = !isSelectedAll;
			return item;
		})
	}
};
const actions = {
	changeShopCount({commit,state},{index,count}){
		let oldCount = state.cartList[index].count;
		let newCount = oldCount + count;
		if(newCount > 0){
			commit("CHANGE_SHOP_COUNT",{index, newCount});
		}else{
			// 小于等于零的情况
			uni.showModal({
				title:"是否删除该商品",
				success:(res)=>{
					if(res.confirm === true){
						commit("DELETE_SHOP",index);
					}
				}
			});
		}
	},
};
const getters = {
	cartCount(state){
		return state.cartList.length;
	},
	selectedCount(state){
		return state.cartList.reduce((prev,curr)=>{
			prev += curr.isSelected === true ? 1 : 0;
			return prev;
		},0)
	},
	totalPrice(state){
		return state.cartList.reduce((prev,curr)=>{
			prev += curr.isSelected ? curr.count*curr.retailPrice : 0;
			return prev;
		},0)
	},
	selectedAll(state){
		return state.cartList.every(item=>item.isSelected === true);
	},
};
export default {
	state,
	mutations,
	actions,
	getters
};
