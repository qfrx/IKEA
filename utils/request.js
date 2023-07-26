import env from '@/utils/env';

function service(options = {}) {
	options.url = `${env.baseUrl}${options.url}`;
	if (options.data && Object.keys(options.data).length > 0) {
		let num = 0;
		for (const item in options.data) {
			if (num == 0) {
				options.url = `${options.url}${'?'}${`${item}=${options.data[item]}`}`;
			} else {
				options.url = `${options.url}${'&'}${`${item}=${options.data[item]}`}`;
			}
			num++;
		}
	}


console.log(options.url, '+++++++++++++++++++');
	// 判断本地是否存在token，如果存在则带上请求头
	const token = uni.getStorageSync('token');
	options.header = {
		'content-type': 'application/json',
		'Authorization': `Bearer ${token || false}`,
		// 这里是token(可自行修改)
	};
	// resolved是返回成功数据，rejected返回错误数据
	return new Promise((resolved, rejected) => {
		options.success = (res) => {
			// 如果请求回来的状态码不是200则执行以下操作
			if (res.statusCode !== 200) {
				// 非成功状态码弹窗
				uni.showToast({
					icon: 'none',
					duration: 3000,
					title: `${res.data.msg}`,
				});
				// 返回错误信息
				rejected(res);
			} else {
				// 请求回来的状态码为200则返回内容
				resolved(res.data);
			}
		};
		options.fail = (err) => {
			// 请求失败弹窗
			uni.showToast({
				icon: 'none',
				duration: 3000,
				title: '服务器错误,请稍后再试',
			});
			rejected(err);
		};
		uni.request(options);
	});
}

export default service;
