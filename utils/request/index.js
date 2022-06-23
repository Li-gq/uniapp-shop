import config from "@/utils/request/config.js";

export default (url, data={}, method="GET") => {
	return new Promise((resolve, reject)=>{
		uni.request({
			url: config.host + url, // 小程序
			// url: "/api" + url,
			method,
			data,
			header:{
				token: uni.getStorageSync("token")? uni.getStorageSync("token") : ""
			},
			success: res => {
				resolve(res);
			},
			fail: err => {
				reject(err);
			}
		});
	});
};