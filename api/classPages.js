// 引用网络请求中间件
import request from '@/utils/request';
// 首页底部导航栏发现页数据
export function getIndexBottomPages(data){
	return request({
		url: '/classPages',
		method: 'GET',
		data,
	});
}
