import request from "@/utils/request";

const state = {
	indexData: {},
	cateList: [],
	navId: ""
};

const mutations = {
	SET_INDEX_DATA(state, indexData){
		state.indexData = indexData;
	},
	SET_CATE_LIST(state, cateList){
		state.cateList = cateList;
	},
	SET_NAV_ID(state, navId){
		state.navId = navId;
	}
};

const actions = {
	async getIndexData({commit}){
		let result = await request('/index');
		commit("SET_INDEX_DATA",result.data);
	},
	async getCateList({commit}){
		let result = await request("/indexCateList");
		commit("SET_CATE_LIST", result.data);
	}
};

const getters = {
	navList(state){
		let {indexData} = state;
		let kingKongModule = indexData.kingKongModule ? indexData.kingKongModule : {};
		return kingKongModule.kingKongList ? kingKongModule.kingKongList : [];
	},
	policyDescList(state){
		const {indexData} = state;
		return indexData.policyDescList ? indexData.policyDescList : [];
	},
	categoryModule(state){
		if(state.indexData.categoryModule){
			return state.indexData.categoryModule;
		}
		return [];
	},
	cateShowContent(state){
		return state.cateList.find(item=>item.category.parentId === state.navId);
	}
};

export default {
	state,
	mutations,
	actions,
	getters
}

