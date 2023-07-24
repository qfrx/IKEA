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
