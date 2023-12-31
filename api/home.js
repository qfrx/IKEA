// 引用网络请求中间件
import request from '@/utils/request';


// 首页轮播图
export function getHomeBanner(data) {
	return request({
		url: '/homeBanner',
		method: 'GET',
		data,
	});
}

// 近期推荐横向滚动数据
export function getRecommendationsScroll(data) {
	return request({
		url: '/recommendations/scroll',
		method: 'GET',
		data,
	});
}

// 近期推荐卡片数据
export function getRecommendationsCard(data) {
	return request({
		url: '/recommendations/card',
		method: 'GET',
		data,
	});
}
//
// 简易版热销排行数据
export function getEankingEasy(data) {
	return request({
		url: '/ranking/easy',
		method: 'GET',
		data,
	});
}


// 简易版热销排行数据
export function getRoomExplore(data) {
	return request({
		url: '/roomExplore',
		method: 'GET',
		data,
	});
}

// 发现更多灵感  参数：type：分类，pageNum：页数
export function getdiscoveringInspiration(data) {
	return request({
		url: '/discoveringInspiration',
		method: 'GET',
		data,
	});
}