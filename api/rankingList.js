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

// 过去排行版列表
export function getRanking(data) {
	return request({
		url: '/ranking/productsInformation',
		method: 'GET',
		data,
	});
}

// 更多榜单列表
export function getMoreList(data) {
	return request({
		url: '/moreList',
		method: 'GET',
		data,
	});
}

