// 引用网络请求中间件
import request from '@/utils/request';


// 排行榜分类标题列表奥
export function getListDetailst(data) {
	return request({
		url: '/listDetails/titleList',
		method: 'GET',
		data,
	});
}

// test
export function getRanking(data) {
	return request({
		url: '/ranking/productsInformation',
		method: 'GET',
		data,
	});
}
