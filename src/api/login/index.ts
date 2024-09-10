import request from '/@/utils/request';

/**
 * 登录api接口集合
 * @method signIn 用户登录
 */
export function login(params: any){
	return request({
		url: '/users/login',
		method: 'post',
		data: {
			email : params.username,
			password : params.password,
		},
	});
}

/**
 * 获取验证码
 */
export function captcha(){
	return request({
		url:"/api/v1/pub/captcha/get",
		method:"get"
	})
}

/**
 * 退出登录
 */
export function logout(){
	return request({
		url: '/users/logout',
		method: 'get',
	});
}
