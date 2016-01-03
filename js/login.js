/**
 * 演示程序当前的 “注册/登录” 等操作，是基于 “本地存储” 完成的
 * 当您要参考这个演示程序进行相关 app 的开发时，
 * 请注意将相关方法调整成 “基于服务端Service” 的实现。
 **/
(function($, owner) {
	/**
	 * 用户登录
	 **/
	owner.login = function(loginInfo, callback) {
		callback = callback || $.noop;
		loginInfo = loginInfo || {};
		loginInfo.userName = loginInfo.userName || '';
		loginInfo.userPw = loginInfo.userPw || '';
		if (loginInfo.userName.length < 5) {
			return callback('账号最短为 5 个字符');
		}
		if (loginInfo.userPw.length < 6) {
			return callback('密码最短为 6 个字符');
		}
//		var users = JSON.parse(localStorage.getItem('$users') || '[]');
//		console.log(typeof users);
//		var authed = users.some(function(user) {
//			return loginInfo.account == user.account && loginInfo.password == user.password;
//		});
		//var authed = null;
		
      	mui.ajax(pConstant.BaseUrl + 'user/login.php', {
			data: {
				'userName': loginInfo.userName,
				'userPw': hex_md5(loginInfo.userPw)
			},
			dataType: 'json',//服务器返回json格式数据
			type: 'post',//HTTP请求类型
			timeout: 10000,//超时时间设置为10秒;
			success: function(data){
				console.log(data["stuats"]);
				console.log(data["msg"]);
				console.log(data["data"]);
				console.log("===================================登录");
				if (data["stuats"] == 100) {
					loginInfo.token = data["data"]["token"];
					owner.createState(loginInfo, callback);
				} else {
					callback('用户名或密码错误');
				}
			},
			error: function(xhr,type,errorThrown){
				//异常处理；
				console.log(JSON.stringify(xhr));
				console.log(type);
				console.log(errorThrown);
			}
		});
//		if (authed) {
//			return owner.createState(loginInfo.account, callback);
//		} else {
//			return callback('用户名或密码错误');
//		}
	};
	owner.createState = function(loginInfo, callback) {
		var state = owner.getState();
		state.userName = loginInfo.userName;
		state.token = loginInfo.token;
		owner.setState(state);
		return callback();
	};

	/**
	 * 新用户注册
	 **/
	owner.reg = function(regInfo, callback) {
		callback = callback || $.noop;
		regInfo = regInfo || {};
		regInfo.userName = regInfo.userName || '';
		regInfo.userPw = regInfo.userPw || '';
		if (regInfo.userName.length < 5) {
			return callback('用户名最短需要 5 个字符');
		}
		if (regInfo.userPw.length < 6) {
			return callback('密码最短需要 6 个字符');
		}
		if (regInfo.email.length > 0 && !checkEmail(regInfo.email)) {
			return callback('邮箱地址不合法');
		}
//		var users = JSON.parse(localStorage.getItem('$users') || '[]');
//		users.push(regInfo);
//		localStorage.setItem('$users', JSON.stringify(users));

      	mui.ajax(pConstant.BaseUrl + 'user/reg.php', {
			data: {
				'userName': regInfo.userName,
				'userPw': regInfo.userPw,
				'email': regInfo.email
			},
			dataType: 'json',//服务器返回json格式数据
			type: 'post',//HTTP请求类型
			timeout: 10000,//超时时间设置为10秒;
			success: function(data){
				console.log(data["stuats"]);
				console.log(data["msg"]);
				console.log(data["data"]);
				console.log("===================================注册");
				if (data["stuats"] == 100) {
					callback();
				} else {
					callback(data["msg"]);
				}
			},
			error: function(xhr,type,errorThrown){
				//异常处理；
				console.log(JSON.stringify(xhr));
				console.log(type);
				console.log(errorThrown);
			}
		});
		//return callback();
	};

	/**
	 * 获取当前状态
	 **/
	owner.getState = function() {
		var stateText = localStorage.getItem('$state') || "{}";
		return JSON.parse(stateText);
	};

	/**
	 * 设置当前状态
	 **/
	owner.setState = function(state) {
		state = state || {};
		localStorage.setItem('$state', JSON.stringify(state));
		//var settings = owner.getSettings();
		//settings.gestures = '';
		//owner.setSettings(settings);
	};

	var checkEmail = function(email) {
		email = email || '';
		return (email.length > 3 && email.indexOf('@') > -1);
	};

	/**
	 * 找回密码
	 **/
	owner.forgetPassword = function(email, callback) {
		callback = callback || $.noop;
		if (!checkEmail(email)) {
			return callback('邮箱地址不合法');
		}
		return callback(null, '新的随机密码已经发送到您的邮箱，请查收邮件。');
	};

	/**
	 * 获取应用本地配置
	 **/
	owner.setSettings = function(settings) {
		settings = settings || {};
		localStorage.setItem('$settings', JSON.stringify(settings));
	}

	/**
	 * 设置应用本地配置
	 **/
	owner.getSettings = function() {
		var settingsText = localStorage.getItem('$settings') || "{}";
		return JSON.parse(settingsText);
	}
}(mui, window.app = {}));