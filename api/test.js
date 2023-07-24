// 引用网络请求中间件
import request from '@/utils/request';

// 请求测试post
export function wxAuth(data) {
	return request({
		url: '/user/login',
		method: 'POST',
		data,
	});
}

// // 请求测试get

export function test(data) {
	return request({
		url: '/testapi',
		method: 'GET',
		data,
	});
}
