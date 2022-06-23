import request from "@/utils/request";

const state = {
	categoryData: {}
};

const mutations = {
	SET_CATEGORY_DATA(state, categoryData){
		state.categoryData = categoryData;
	}
};

const actions = {
	async getCategoryData({commit}){
		let result = await request('/category');
		commit("SET_CATEGORY_DATA",result.data);
	}
};

const getters = {
	
};

export default {
	state,
	mutations,
	actions,
	getters
}

