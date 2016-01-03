(function(window, undefined){
	var document = window.document,
	navigator = window.navigator,
	location = window.location;

	/**
	 * 常量
	 */
	window.pConstant = {}
	pConstant.BaseUrl = "http://120.25.153.179/";
	
	//'http://api.zhubaotuan.net/h5.php/
	//pConstant.BaseUrl = "http://api.zhubaotuan.net/h5.php/";
//	pConstant.defImgUrl = "images/gray.jpg";
//	//pConstant.CookieTime = 2*60*60*1000;
//	pConstant.CookieTime = 60*60*1000;
//
//	pConstant.regexp = {};
//	pConstant.regexp.mobile = /^1\d{10}$/;//手机号
//	pConstant.regexp.zip = /^[1-9][0-9]{5}$/;//邮政编码
//
//	pConstant.PublicInfo = function() {
//		return {
//			orderId: pTool.GetQueryString("orderId"),
//			productId: pTool.GetQueryString("productId"),
//			customerId: pTool.getCookie("customerId"),
//			accessToken: pTool.getCookie("accessToken"),
//			shopId: function (){
//				var shopId = pTool.GetQueryString("shopId");
//				//console.log( shopId == "" || shopId == undefined || shopId == "null" );
//				if ( shopId == "" || shopId == undefined) {
//					shopId = pTool.getData("shopId");
//				} else {
//					//设置shopId到离线缓存
//					// if ( shopId == "null" ) {
//					// 	shopId = "";
//					// }
//		    		pTool.setData("shopId", shopId);
//				}
//      		console.log("shopId:" + shopId);
//				return shopId;
//			}(),
//		}
//	}
//
//	window.pTool = {};
//
//	/*
//	 * 
//	 */
//	pTool.urlEncode = function(param, key, encode) {
//		if(param==null) return '';
//		var paramStr = '';
//		var t = typeof (param);
//		if (t == 'string' || t == 'number' || t == 'boolean') {
//			paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);
//		} else {
//		for (var i in param) {
//	    	var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
//	    	paramStr += this.urlEncode(param[i], k, encode);
//	    }
//	  }
//	  return paramStr;
//	}
//	/*
//	 * 
//	 */
//	pTool.urlEncodeObject = function(param, encode) {
//		if(param==null) return "";
//		var paramStr = "";
//		var t = typeof (param);
//		if( t != "object" ) return '';
//		for (var i in param) {
//			var paramItem = param[i];
//			var piT = typeof paramItem;
//	    	paramStr += paramStr == "" ? "" : "&" ;
//	    	if ( piT == 'string' || piT == 'number' || piT == 'boolean' ) {
//	    		paramStr += i + '=' + (( encode == null || encode ) ? encodeURIComponent( paramItem ) : paramItem);
//	    	} else {
//	    		paramStr += i + '=' + JSON.stringify(paramItem);
//	    	}
//	    }
//		return paramStr;
//	}
//	/**
//	 * 提示
//	 */
//	pTool.fHint = function(sText) {
//		console.log(sText);
//		$("#p_bdcg").html(sText).show();
//		clearTimeout(window.timeout);
//		window.timeout = setTimeout(function(){
//		  $("#p_bdcg").hide();
//		},2000);
//	}
//
//	    // var XMLHttpReq;  
//	    // function createXMLHttpRequest() {  
//	    //     try {  
//	    //         XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP");//IE高版本创建XMLHTTP  
//	    //     } catch(E) {  
//	    //         try {  
//	    //         	XMLHttpReq = new ActiveXObject("Microsoft.XMLHTTP");//IE低版本创建XMLHTTP  
//	    //         } catch(E) {  
//	    //         	XMLHttpReq = new XMLHttpRequest();//兼容非IE浏览器，直接创建XMLHTTP对象
//	    //         }  
//	    //     }  
//	      
//	    // }  
//	    // function sendAjaxRequest(url) {  
//	    //     createXMLHttpRequest();                                //创建XMLHttpRequest对象  
//	    //     XMLHttpReq.open("post", url, true);  
//	    //     XMLHttpReq.onreadystatechange = processResponse; //指定响应函数  
//	    //     XMLHttpReq.send(null);  
//	    // }  
//	    // //回调函数  
//	    // function processResponse() {  
//	    //     if (XMLHttpReq.readyState == 4) {  
//	    //         if (XMLHttpReq.status == 200) {  
//	    //             var text = XMLHttpReq.responseText;  
//	      
//	    //             /** 
//	    //              *实现回调 
//	    //              */  
//	    //             text = window.decodeURI(text);  
//	    //             var cp = document.getElementById("cp");  
//	    //             cp.innerHTML = "";  
//	    //             var values = text.split("|");  
//	    //             for (var i = 0; i < values.length; i++) {  
//	    //                 var temp = document.createElement("option");  
//	    //                 temp.text = values[i];  
//	    //                 temp.value = values[i];  
//	    //                 cp.options.add(temp);  
//	    //             }  
//	      
//	      
//	    //         }  
//	    //     }  
//	      
//	    // }
//	/**
//	 * 获取url参数
//	 */
//	pTool.GetQueryString = function(name) {
//		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
//		var r = window.location.search.substr(1).match(reg);
//		if(r!=null)return  unescape(r[2]); return "";
//	}
//	/**
//	 * post请求
//	 */
//	pTool.post = function(para) {
//		var url = para["url"];
//		console.log(url);
//		var sendData = para["data"];
//		var funSuccess = para["success"];
//		var funError = para["error"];
//		if (typeof url != "string") {
//			return false;
//		} else if (typeof sendData != "object") {
//			return false;
//		}
//		var xhr = null;
//		try {
//			xhr = new XMLHttpRequest();//兼容非IE浏览器，直接创建XMLHTTP对象
//      } catch(E) {  
//          try {  
//          	xhr = new ActiveXObject("Msxml2.XMLHTTP");//IE高版本创建XMLHTTP
//          } catch(E) {
//          	xhr = new ActiveXObject("Microsoft.XMLHTTP");//IE低版本创建XMLHTTP
//          }
//      }
//		xhr.onload = function() {
//			var getData = JSON.parse(xhr.responseText);
//			if (typeof funSuccess == "function") {
//				funSuccess(getData);
//			} else {
//				pTool.fHint(getData["msg"]);
//			}
//			// if (getData["status"]==="100") {
//			// 	if (typeof funSuccess == "function") {
//			// 		funSuccess(getData);
//			// 	} else {
//			// 		pTool.fHint(getData["msg"]);
//			// 	}
//			// } else {
//			// 	if(typeof funError == "function"){
//			// 		funError(getData);
//			// 	} else {
//			// 		pTool.fHint(getData["msg"]);
//			// 	}
//			// }
//			//JSON.parse(str)
//		};
//		xhr.open('POST', url, true);
//		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//		var sendDataUrl = this.urlEncode(sendData);
//		//console.log(sendDataUrl);
//		xhr.send(sendDataUrl);
//	}
//
//	/**
//	 * 
//	 */
//	pTool.htmlencode = function(s){  
//	    var div = document.createElement('div');  
//	    div.appendChild(document.createTextNode(s));  
//	    return div.innerHTML;  
//	}
//	/**
//	 * 转html
//	 */
//	pTool.htmldecode = function(s){  
//	    var div = document.createElement('div');  
//	    div.innerHTML = s;  
//	    return div.innerText || div.textContent;  
//	}
//
//
//	pTool.getCookie = function(c_name) {
//		if (document.cookie.length>0){
//		  c_start=document.cookie.indexOf(c_name + "=")
//		  if (c_start!=-1){ 
//			c_start=c_start + c_name.length+1 
//			c_end=document.cookie.indexOf(";",c_start)
//			if (c_end==-1){c_end=document.cookie.length;}
//			return unescape(document.cookie.substring(c_start,c_end))
//		  } 
//		}
//		return "";
//	}
//	/**
//	 * c_name
//	 * value
//	 * expiredays 时间 day=24*60*60*1000
//	 */
//	pTool.setCookie = function(c_name,value,expiredays) {
//		//本地时间关联会出现问题
//		var exdate = new Date();
//		//var dExdate = new Date();
//		// if(exdate.getHours()<=11){
//		// 	exdate.setHours(exdate.getHours()+expiredays);
//		// }else{
//		// 	var curMonth = dExdate.getMonth();
//		// 	/*  设置时间为下个月 */
//		// 	dExdate.setMonth(curMonth + 1);
//		// 	/* 将日期设置为0, 取得上一个月的最后一天 */
//		// 	dExdate.setDate(0);
//		// 	/* 返回当月的天数 */
//		// 	var sExdateDate = dExdate.getDate();
//		// 	expiredays =  expiredays - (23 - exdate.getHours());
//		// 	if(exdate.getDate()==sExdateDate){//等于当月最后一天
//		// 		if(exdate.getMonth()>=11){
//		// 			exdate.setFullYear(exdate.setFullYear()+1);
//		// 			exdate.setMonth(1);
//		// 			exdate.setDate(1);
//		// 		}else{
//		// 			exdate.setMonth(exdate.getMonth()+1);
//		// 			exdate.setDate(1);
//		// 		}
//		// 		//exdate.setHours(expiredays);
//		// 	}else{
//		// 		exdate.setDate(exdate.getDate()+1);
//		// 		//exdate.setHours(expiredays);
//		// 	}
//		// }
//		exdate.setTime(exdate.getTime() + expiredays);
//		document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+";path=/";
//	}
//	pTool.checkCookie = function(sBind, sValue) {
//		var sBining = getCookie(sBind);
//		if (sBining!=null && sBining!=""){
//		}else{
//			setCookie(sBind,sValue,6);//六小时重新绑定
//		}
//	}
//	pTool.delCookie = function(name) {//删除cookie
//		document.cookie = name + "=;expires=" + ( new Date(0) ).toGMTString() + ";path=/";
//	}
//	pTool.setData = function(key, value) {
//		if ( window.localStorage ) {
//			if ($.isArray(value)) {
//				value = JSON.stringify(value);
//			}
//	 		localStorage.setItem(key, value);
//		}else{
//	 		console.log('This browser does NOT support localStorage');
//		}
//	}
//	pTool.getData = function(key) {
//		if ( window.localStorage ) {
//	 		return localStorage.getItem(key);
//		}else{
//	 		console.log('This browser does NOT support localStorage');
//		}
//	}
//	pTool.removeData = function(key) {
//		if ( window.localStorage ) {
//	 		localStorage.removeItem(key);
//		}else{
//	 		console.log('This browser does NOT support localStorage');
//		}
//	}
//	pTool.close = function () {
//	    $('.popBg').remove();
//	    $('.pop_wrap').remove();
//	}
//	pTool.checkMobile = function (mobile) {
//	    var sMobile = mobile
//	    if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))) {
//	        //com.message("不是完整的11位手机号或者正确的手机号前七位"); 
//	        return false;
//	    }
//	    return true;
//	}
//	pTool.saverealname = function () {
//	    var realName = $("#real_name").val();
//	    if (realName == "") {
//	        pTool.message("请输入真实姓名");
//	        return false;
//	    }
//	    pTool.ajax({
//	    	url: '/ZhuBaoTuan/SaveRealName.json',
//	        // url: '/user/SaveRealName?realname=' + realName,
//	        success: function (data) {
//	            if (data.success) {
//	                $("#spanrealname").html(realName);
//	                pTool.close();
//	            } else {
//	                pTool.message(data.msg);
//	            }
//	        }
//	    });
//	}
//	var timer1 = null;
//	var timerc1 = 60; //全局时间变量（秒数）
//	pTool.SendUpdateMobileCode = function () {
//	    var m = $("#txtmobile").val();
//	    
//	    if (m == "") {
//	        pTool.message("请输入手机号码");
//	        return false;
//	    }
//	    if (!pTool.checkMobile(m)) {
//	        pTool.message("请输入正确的手机号码");
//	        return false;
//	    }
//	    pTool.ajax({
//	        url: '/ZhuBaoTuan/SendUpdateMobileCode.json',
//	        // url: '/user/SendUpdateMobileCode?mobile=' + m,
//	        success: function (data) {
//	            if (data.success) {
//	                clearTimeout(timer1);
//	                timerc1 = 60;
//	                pTool.SendMobileCode();
//	            }
//	        }
//	    });
//
//	}
//	pTool.SendMobileCode = function () {
//	    if (timerc1 >= 0) { //如果不到1分钟
//	        $("#txtmobile").attr("disabled", true);
//	        $("#spanTime").html('<a href="#" ><span>(' + timerc1 + ')</span>秒后重新获取</a>'); //写入分钟数
//	        --timerc1; //时间变量自增1
//	        timer1 = setTimeout("pTool.SendMobileCode()", 1000); //设置1000毫秒以后执行一次本函数
//	    } else {
//	        $("#txtmobile").removeAttr("disabled");
//	        $("#spanTime").html('<a href="#"  onclick="pTool.SendUpdateMobileCode()" >重新获取</a>');
//	    }
//	}
//	pTool.ajax = function (options) {
//	    options = $.extend({
//	        showLoading: true
//	    }, options);
//	    var ajaxDefaults = {
//	        type: 'POST',
//	        dataType: 'json',
//	        error: function (e) {
//	            var msg = e.responseText;
//	            var ret = msg.match(/^{\"Message\":\"(.*)\",\"ExceptionMessage\":\"(.*)\",\"ExceptionType\":.*/);
//	            if (ret != null) {
//	                msg = (ret[1] + ret[2]).replace(/\\"/g, '"').replace(/\\r\\n/g, '<br/>').replace(/dbo\./g, '');
//	            }
//	            else {
//	                try { msg = $(msg).text() || msg; }
//	                catch (ex) { }
//	            }
//
//	            pTool.message('error', msg);
//	        }
//	    };
//	    if (options.showLoading) {
//	        ajaxDefaults.beforeSend = pTool.showloading;
//	        ajaxDefaults.complete = pTool.hideloading;
//	    }
//
//	    $.ajax($.extend(ajaxDefaults, options));
//	};
//	pTool.showloading = function () {
//	    $("#ajaxLoading").show();
//	}
//	pTool.hideloading = function () {
//	    $("#ajaxLoading").hide();
//	}
//	pTool.message = function (msg) {
//	    alert(msg);
//	}
//	pTool.updaterealname = function (realname) {
//	    $('.popBg').remove();
//	    $('.pop_wrap').remove();
//	    pTool.ajax({
//	        url: "/ZhuBaoTuan/LoadUserInfoHtml.json",
//	        dataType: "json",
//	        success: function (data) {
//	            if (data.success) {
//	            	var temp = '<div class="popBg" style=" display:block"></div><div class="pop_wrap pop_invoice"><a href="#" onclick="pTool.close()" class="pop_close"><span class="icon icon_close1"></span></a><h3 class="pop_title">真实姓名</h3><div class="pop_con"><div class="item_col"><ul><li><div class="form_element"><input class="input" id="real_name" type="text" placeholder="请填写真实姓名"></div></li></ul></div><div class="clearfix"><input class="btn btn_confirm" onclick="pTool.saverealname()" type="button" value="确定"></div></div></div>'
//	                $('.wrap').after(temp);
//	                $("#real_name").val(realname);
//	            } else {
//	                if (data.result == 2) {
//	                    window.location.href = '/Home/Index';
//	                }
//	                pTool.message(data.msg);
//	            }
//	        }
//	    });
//	}
//	pTool.ChangeMobile = function () {
//	    $('.popBg').remove();
//	    $('.pop_wrap').remove();
//	    pTool.ajax({
//	        url: "/ZhuBaoTuan/ChangeMobile.json",
//	        dataType: "json",
//	        success: function (data) {
//	            if (data.success) {
//	            	var temp = '<div class="popBg" style=" display:block"></div><div class="pop_wrap pop_invoice"><a href="#" onclick="pTool.close()" class="pop_close"><span class="icon icon_close1"></span></a><h3 class="pop_title">手机号码</h3><div class="pop_con"><div class="item_col"><ul><li><div class="form_element"><input class="input" id="txtmobile" value="" type="tel" placeholder="请填写手机号码"></div></li></ul></div><div class="login_box"><div class="form_element verified"><input class="input_verified" id="txtcode"   type="text" placeholder="请输入验证码"><div class="get_code" id="spanTime"><a href="#" onclick="pTool.SendUpdateMobileCode()">获取验证码</a></div></div></div><div class="clearfix"><input class="btn btn_confirm" onclick="pTool.ChangeMobile2()" type="button" value="确定"></div></div></div>';
//	                $('.wrap').after(temp);
//	            }
//	        }
//	    });
//	}
//	pTool.ChangeMobile2 = function () {
//	    var m = $("#txtmobile").val();
//	    var o = $("#txtcode").val();
//	    if (m == "") {
//	        pTool.message("请输入手机号码");
//	        return false;
//	    }
//	    if (!pTool.checkMobile(m)) {
//	        pTool.message("请输入正确的手机号码");
//	        return false;
//	    }
//	    if (o == "") {
//	        pTool.message("请输入验证码");
//	        return false;
//	    }
//	    pTool.ajax({
//	        url: '/ZhuBaoTuan/UpdateUserMobile.json',
//	        data: {mobile:m,code:o},
//	        success: function (data) {
//	            if (data.success) {
//	                $("#umobile").html(m);
//	                pTool.close();
//	            } else {
//	                pTool.message(data.msg);
//	            }
//	        }
//	    });
//	}
//	pTool.saverealname = function () {
//	    var realName = $("#real_name").val();
//	    if (realName == "") {
//	        pTool.message("请输入真实姓名");
//	        return false;
//	    }
//	    pTool.ajax({
//	    	url: '/ZhuBaoTuan/SaveRealName.json',
//	        // url: '/user/SaveRealName?realname=' + realName,
//	        success: function (data) {
//	            if (data.success) {
//	                $("#spanrealname").html(realName);
//	                pTool.close();
//	            } else {
//	                pTool.message(data.msg);
//	            }
//	        }
//	    });
//	}
//	pTool.saveuserp = function () {
//	    var p = $("input[name='province']:checked").val();
//	    if (p != "" && p != undefined) {
//	        pTool.ajax({
//	            url: '/ZhuBaoTuan/SaveP.json',
//	            success: function (data) {
//	                if (data.success) {
//	                    $("#pid").val($("input[name='province']:checked").val());
//	                    $("#pname").html($("input[name='province']:checked").attr("t"));
//	                    $("#zid").val("");
//	                    $("#zname").html("");
//	                    $("#cid").val("");
//	                    $("#cname").html("");
//	                    pTool.close();
//	                } else {
//	                    pTool.message(data.msg);
//	                }
//	            }
//	        });
//	    } else {
//	        pTool.message("请选择省份");
//	    }
//	    
//	}
//	pTool.saveuserc = function () {
//	    var p = $("input[name='province']:checked").val();
//	    if (p != ""&&p!=undefined) {
//	        pTool.ajax({
//	        	url: '/ZhuBaoTuan/SaveC.json',
//	            // url: '/user/SaveC?pid=' + $("input[name='province']:checked").val(),
//	            success: function (data) {
//	                if (data.success) {
//	                    $("#cid").val($("input[name='province']:checked").val());
//	                    $("#cname").html($("input[name='province']:checked").attr("t"));
//	                    pTool.close();
//	                } else {
//	                    pTool.message(data.msg);
//	                }
//	            }
//	        });
//	    } else {
//	        pTool.message("请选择城市");
//	    }
//	}
//	pTool.saveuserz = function () {
//	    var p = $("input[name='province']:checked").val();
//	    if (p != "" && p != undefined) {
//	        pTool.ajax({
//	            url: '/ZhuBaoTuan/SaveZ.json',
//	            // url: '/user/SaveZ?pid=' + $("input[name='province']:checked").val(),
//	            success: function (data) {
//	                if (data.success) {
//	                    $("#zid").val($("input[name='province']:checked").val());
//	                    $("#zname").html($("input[name='province']:checked").attr("t"));
//	                    pTool.close();
//	                } else {
//	                    pTool.message(data.msg);
//	                }
//	            }
//	        });
//	    } else {
//	        pTool.message("请选择省份");
//	    }
//	}
//	/*
//	 * 2015-11-24 fire 保存发票信息
//	 */
//	pTool.saveInvoice = function () {
//	    var invoice_titleVal = $("#invoice_title").val();
//	    var invoice_contentVal = $("#invoice_content").val();
//	    if ($("#is_bill").is(':checked')) {
//	        $("#isbill").val(1);
//			if ( invoice_titleVal == "" ) {
//				pTool.fHint("请填写发票抬头名称");
//				return false;
//			}
//			if ( invoice_contentVal == "" ) {
//				pTool.fHint("请填写发票内容");
//				return false;
//			}
//		    $("#billName").val(invoice_titleVal);
//		    $("#billContent").val(invoice_contentVal);
//		    $("#orderInvoice").html(invoice_titleVal);
//	    } else {
//	        $("#isbill").val(0);
//	    }
//	    pTool.close();
//	}
//	/*
//	 * 2015-11-24 fire 显示发票信息
//	 */
//	pTool.showInvoide = function () {
//	    if ($("#is_bill").is(':checked')) {
//	        $(".showinvoice").show();
//	    } else {
//	        $(".showinvoice").hide();
//	        // $("#invoice_title").val("");
//	        // $("#invoice_content").val("");
//	    }
//	}
//	/*
//	 * 2015-11-24 fire 选择发票信息
//	 */
//	pTool.invoice = function () {
//	    $('.popBg').remove();
//	    $('.pop_wrap').remove();
//	    $("#p_wrap").load("public_invoice.html", function() {
//			var isBill = $("#isbill").val();
//			if ( isBill == "1" ) {
//				var billNameVal = $("#billName").val();
//				var billContentVal = $("#billContent").val();
//				$("#invoice_title").val(billNameVal);
//				$("#invoice_content").val(billContentVal);
//			} else {
//	        	$(".showinvoice").hide();
//	        	$("#is_bill").removeAttr("checked");
//			}
//			// var paymentMethod = $("#s_payment_method span").html();
// //          //$('.wrap').after(data.msg);
// //          $("#payment_method_list input[type=radio]").each(function () {
// //              var $this = $(this);
// //              var t = $(this).attr("t");
// //              if ( paymentMethod === t ) {
// //                  $this.attr("checked", "checked");
// //                  return false;
// //              }
// //          });
//	    });
//	}
//	/*
//	 * 2015-11-23 fire 选择支付方式
//	 */
//	pTool.paymentMethod = function() {
//	    $('.popBg').remove();
//	    $('.pop_wrap').remove();
//	    $("#p_wrap").load("public_payment_method.html", function() {
//			var paymentMethod = $("#s_payment_method span").html();
//          //$('.wrap').after(data.msg);
//          $("#payment_method_list input[type=radio]").each(function () {
//              var $this = $(this);
//              var t = $(this).attr("t");
//              if ( paymentMethod === t ) {
//                  $this.attr("checked", "checked");
//                  return false;
//              }
//          });
//	    });
//	    //
//	    // $.load({
//	    //     url: "paymentMethod",
//	    //     success: function (data) {
//	    //         if (data.success) {
//	    //             var paymentMethod = $("#s_payment_method span").html();
//	    //             $('.wrap').after(data.msg);
//	    //             $("#payment_method_list input:radio").each(function () {
//	    //                 var $this = $(this);
//	    //                 var t = $(this).attr("t");
//	    //                 if ( paymentMethod === t ) {
//	    //                     $this.attr("checked", "checked");
//	    //                     return false;
//	    //                 }
//	    //             });
//	    //         }
//	    //     }
//	    // });
//	}
//	/*
//	 * 2015-11-23 fire 选择支付方式
//	 */
//	pTool.savePaymentMethod = function () {
//	    var checkedVal = $("#payment_method_list input:checked").val();
//	    var payment_method_listT = $("#payment_method_list input:checked").attr("t");
//	    console.log(checkedVal);
//	    console.log(payment_method_listT);
//	    $("#hidden_payment_method").val(checkedVal);
//	    $("#s_payment_method").html("<span>" + payment_method_listT + "</span>");
//
//	    pTool.close();
//	}
//	/*
//	 * 2015-11-23 fire 公用窗体生成
//	 */
//	pTool.pcaWindow = function(pid, mark) {
//	    $('.popBg').remove();
//	    $('.pop_wrap').remove();
//	    var PublicInfo = pConstant.PublicInfo();
//	    var accessToken = PublicInfo.accessToken;
//	    var sendData = {pid: pid,token: accessToken}
//
//	    var saveHtml = "";
//	    var titleHtml = "";
//	    var nameHtml = "";
//		switch(mark) {
//			case "province":
//				saveHtml = 'pTool.saveProvince()';
//				titleHtml = "请选择省份";
//				nameHtml = "province";
//			break;
//			case "city":
//				saveHtml = 'pTool.saveCity()';
//				titleHtml = "请选择城市";
//				nameHtml = "city";
//			break;
//			case "area":
//				saveHtml = 'pTool.saveArea()';
//				titleHtml = "请选择所在区";
//				nameHtml = "area";
//			break;
//			default:
//			break;
//		}
//		console.log(sendData);
//      pTool.post({
//          url: pConstant.BaseUrl+'address/getAreaList/',
//          data: sendData,
//          success: function(data) {
//          	console.log(data);
//          	if( data["status"] == "100" ) {
//          		var areaList = data["data"]["areaList"];
//          		var contentHtml = [];
//          		var areaHtml = [];
//          		if( !!areaList ) {
//          			for( var i = 0; i < areaList.length; i++ ) {
//          				areaHtml.push('<li><input class="normal_raido" t="' + areaList[i]["name"] + '" value="' + areaList[i]["id"] + '"  type="radio" name="' + nameHtml + '" id="area_' + areaList[i]["id"] + '" ><label for="area_' + areaList[i]["id"] + '">' + areaList[i]["name"] + '</label></li>');
//          			}
//          			contentHtml.push(
//          				'<div class="popBg" style=" display:block"></div>' +
//          				'<div class="pop_wrap pop_region">' +
//          					'<a href="#" class="pop_close" onclick="pTool.close()">' +
//          						'<span class="icon icon_close1"></span>' +
//          					'</a>' +
//          					'<h3 class="pop_title">' + titleHtml +'</h3>' +
//          					'<div class="pop_con">' +
//          						'<div class="my_region">' +
//          							'<ul class="region_list">' +
//          								areaHtml.join("") +
//          							'</ul>' +
//          						'</div>' +
//          						'<div class="clearfix"><input class="btn btn_confirm" type="button" onclick="' + saveHtml + '" value="确定"></div>' +
//          					'</div>' +
//          				'</div>'
//          			);
//          			$('.wrap').after(contentHtml.join(""));
//          		}
//          	} else {
//
//          	}
//				
//          }
//      });
//	}
//	/*
//	 * 2015-11-23 fire 加载选择省份窗
//	 */
//	pTool.windowProvince = function() {
//	    var pid = 0;
//	    pTool.pcaWindow(pid, 'province');
//	}
//
//	/*
//	 * 2015-11-23 fire 加载选择城市窗
//	 */
//	pTool.windowCity = function() {
//	    var pid = $("#provinceValue").val();
//	    if ( pid !== "" ) {
//	        pTool.pcaWindow(pid, 'city');	
//	    } else {
//	    	pTool.fHint("请选择省份");
//	    }
//	}
//	/*
//	 * 2015-11-23 fire 加载选择地区窗
//	 */
//	pTool.windowArea = function() {
//	    var pid = $("#cityValue").val();
//	    if ( pid !== "" ) {
//	    	pTool.pcaWindow(pid, 'area');
//	    } else {
//	    	pTool.fHint("请选择城市");
//	    }
//	}
//	
//	/*
//	 * 2015-11-23 fire 选择省份确定操作
//	 */
//	pTool.saveProvince = function() {
//		var $province = $("input[name='province']:checked");
//	    var provinceVal = $province.val();
//	    if ( provinceVal != "" && provinceVal != undefined ) {
//		    var PublicInfo = pConstant.PublicInfo();
//		    var accessToken = PublicInfo.accessToken;
//		    var sendData = {pid: provinceVal, token: accessToken}
//	        pTool.post({
//	            url: pConstant.BaseUrl + 'address/getAreaList/',
//	            data: sendData,
//	            success: function(data) {
//	            	console.log(data);
//	            	if ( data["status"] == "100" ) {
//	            		var provinceT = $province.attr("t");
//	                    $("#provinceValue").val(provinceVal);
//	                    $("#provinceHtml").html(provinceT);
//	                    if( typeof pTool.saveProvince.fun == "function" ) {
//	                    	pTool.saveProvince.fun();
//	                    }
//	                    var areaList = data["data"]["areaList"];
//	                    if ( !!areaList && areaList.length == 1 ) {
//	                    	console.log(areaList[0]["name"] + "==" + provinceT);
//	                    	if ( areaList[0]["name"] == provinceT ) {
//	                    		$("#cityValue").val(areaList[0]["id"]);
//	                    		$("#cityHtml").html(areaList[0]["name"]);
//			                    if( typeof pTool.saveCity.fun == "function" ) {
//			                    	pTool.saveCity.fun();
//			                    }
//	                    	}
//	                    } else {
//	                    	$("#cityValue").val("");
//	                    	$("#cityHtml").html("请选择市");
//	                    }
//	                    pTool.close();
//	            	}
//	            }
//	        });
//	    } else {
//	    	pTool.fHint("请选择省份");
//	    }
//	}
//	/*
//	 * 2015-11-23 fire 选择城市确定操作
//	 */
//	pTool.saveCity = function() {
//		var $city = $("input[name='city']:checked");
//	    var cityVal = $city.val();
//	    if ( cityVal != "" && cityVal != undefined ) {
//		    var PublicInfo = pConstant.PublicInfo();
//		    var accessToken = PublicInfo.accessToken;
//		    var sendData = {pid: cityVal,token: accessToken}
//	        pTool.post({
//	            url: pConstant.BaseUrl+'address/getAreaList/',
//	            data: sendData,
//	            success: function(data) {
//	            	console.log(data);
//	            	if ( data["status"] == "100" ) {
//	            		var cityT = $city.attr("t");
//	                    $("#cityValue").val(cityVal);
//	                    $("#cityHtml").html(cityT);
//	                    if( typeof pTool.saveCity.fun == "function" ) {
//	                    	pTool.saveCity.fun();
//	                    }
//	                    pTool.close();
//	            	}
//	            }
//	        });
//	    } else {
//	    	pTool.fHint("请选择城市");
//	    }
//	}
//	/*
//	 * 2015-11-23 fire 选择地区确定操作
//	 */
//	pTool.saveArea = function() {
//		var $area = $("input[name='area']:checked");
//	    var areaVal = $area.val();
//	    if ( areaVal != "" && areaVal != undefined ) {
//		    var PublicInfo = pConstant.PublicInfo();
//		    var accessToken = PublicInfo.accessToken;
//		    var sendData = {pid: areaVal,token: accessToken}
//	        pTool.post({
//	            url: pConstant.BaseUrl+'address/getAreaList/',
//	            data: sendData,
//	            success: function(data) {
//	            	console.log(data);
//	            	if ( data["status"] == "100" ) {
//	            		var areaT = $area.attr("t");
//	                    $("#areaValue").val(areaVal);
//	                    $("#areaHtml").html(areaT);
//	                    if( typeof pTool.saveArea.fun == "function" ) {
//	                    	pTool.saveArea.fun();
//	                    }
//	                    pTool.close();
//	            	}
//	            }
//	        });
//	    } else {
//	    	pTool.fHint("请选择区");
//	    }
//	}
//	pTool.UserProvince = function (selected) {
//	    $('.popBg').remove();
//	    $('.pop_wrap').remove();
//	    pTool.ajax({
//	    	url: "/ZhuBaoTuan/UserProvince.json",
//	        //url: "/User/P?pid=0&selected=" + selected,
//	        dataType: "json",
//	        success: function (data) {
//	            if (data.success) {
//	            	var temp = '<div class="popBg" style=" display:block"></div><div class="pop_wrap pop_region"><a href="#" class="pop_close" onclick="pTool.close()"><span class="icon icon_close1"></span></a><h3 class="pop_title">请选择省份</h3><div class="pop_con"><div class="my_region"><ul class="region_list"><li><input class="normal_raido" t="北京" value="1"  type="radio" name="province" id="area_1" > 	<label for="area_1">北京</label></li><li><input class="normal_raido" t="天津" value="2"  type="radio" name="province" id="area_2" > 	<label for="area_2">天津</label></li><li><input class="normal_raido" t="上海" value="3"  type="radio" name="province" id="area_3" > 	<label for="area_3">上海</label></li><li><input class="normal_raido" t="重庆" value="4"  type="radio" name="province" id="area_4" > 	<label for="area_4">重庆</label></li><li><input class="normal_raido" t="河北" value="5"  type="radio" name="province" id="area_5" > 	<label for="area_5">河北</label></li><li><input class="normal_raido" t="河南" value="6"  type="radio" name="province" id="area_6" > 	<label for="area_6">河南</label></li><li><input class="normal_raido" t="黑龙江" value="7"  type="radio" name="province" id="area_7" > 	<label for="area_7">黑龙江</label></li><li><input class="normal_raido" t="吉林" value="8"  type="radio" name="province" id="area_8" > 	<label for="area_8">吉林</label></li><li><input class="normal_raido" t="辽宁" value="9"  type="radio" name="province" id="area_9" > 	<label for="area_9">辽宁</label></li><li><input class="normal_raido" t="山东" value="10"  type="radio" name="province" id="area_10" > 	<label for="area_10">山东</label></li><li><input class="normal_raido" t="内蒙古" value="11"  type="radio" name="province" id="area_11" > 	<label for="area_11">内蒙古</label></li><li><input class="normal_raido" t="江苏" value="12"  type="radio" name="province" id="area_12" > 	<label for="area_12">江苏</label></li><li><input class="normal_raido" t="安徽" value="13"  type="radio" name="province" id="area_13" > 	<label for="area_13">安徽</label></li><li><input class="normal_raido" t="山西" value="14"  type="radio" name="province" id="area_14" > 	<label for="area_14">山西</label></li><li><input class="normal_raido" t="陕西" value="15"  type="radio" name="province" id="area_15" > 	<label for="area_15">陕西</label></li><li><input class="normal_raido" t="甘肃" value="16"  type="radio" name="province" id="area_16" > 	<label for="area_16">甘肃</label></li><li><input class="normal_raido" t="浙江" value="17"  type="radio" name="province" id="area_17" > 	<label for="area_17">浙江</label></li><li><input class="normal_raido" t="江西" value="18"  type="radio" name="province" id="area_18" > 	<label for="area_18">江西</label></li><li><input class="normal_raido" t="湖北" value="19"  type="radio" name="province" id="area_19" > 	<label for="area_19">湖北</label></li><li><input class="normal_raido" t="湖南" value="20"  type="radio" name="province" id="area_20" > 	<label for="area_20">湖南</label></li><li><input class="normal_raido" t="贵州" value="21"  type="radio" name="province" id="area_21" > 	<label for="area_21">贵州</label></li><li><input class="normal_raido" t="四川" value="22"  type="radio" name="province" id="area_22" > 	<label for="area_22">四川</label></li><li><input class="normal_raido" t="云南" value="23"  type="radio" name="province" id="area_23" > 	<label for="area_23">云南</label></li><li><input class="normal_raido" t="新疆" value="24"  type="radio" name="province" id="area_24" > 	<label for="area_24">新疆</label></li><li><input class="normal_raido" t="宁夏" value="25"  type="radio" name="province" id="area_25" > 	<label for="area_25">宁夏</label></li><li><input class="normal_raido" t="青海" value="26"  type="radio" name="province" id="area_26" > 	<label for="area_26">青海</label></li><li><input class="normal_raido" t="西藏" value="27"  type="radio" name="province" id="area_27" > 	<label for="area_27">西藏</label></li><li><input class="normal_raido" t="广西" value="28"  type="radio" name="province" id="area_28" > 	<label for="area_28">广西</label></li><li><input class="normal_raido" t="广东" value="29"  type="radio" name="province" id="area_29" > 	<label for="area_29">广东</label></li><li><input class="normal_raido" t="福建" value="30"  type="radio" name="province" id="area_30" > 	<label for="area_30">福建</label></li><li><input class="normal_raido" t="海南" value="31"  type="radio" name="province" id="area_31" > 	<label for="area_31">海南</label></li><li><input class="normal_raido" t="台湾" value="32"  type="radio" name="province" id="area_32" > 	<label for="area_32">台湾</label></li><li><input class="normal_raido" t="香港" value="33"  type="radio" name="province" id="area_33" > 	<label for="area_33">香港</label></li><li><input class="normal_raido" t="澳门" value="34"  type="radio" name="province" id="area_34" > 	<label for="area_34">澳门</label></li></ul></div><div class="clearfix"><input class="btn btn_confirm" type="button" onclick="pTool.saveuserp()" value="确定"></div></div></div>';
//	                $('.wrap').after(temp);
//	            }
//	        }
//	    });
//	}
//	pTool.UserCity = function (selected) {
//	    var p = $("#pid").val();
//	    if (p != "") {
//	        $('.popBg').remove();
//	        $('.pop_wrap').remove();
//	        pTool.ajax({
//	        	url: "/ZhuBaoTuan/UserCity.json",
//	            //url: "/User/C?pid=" + p + "&selected="+selected,
//	            dataType: "json",
//	            success: function (data) {
//	                if (data.success) {
//	                	var temp = '';
//	                    $('.wrap').after(temp);
//	                }
//	            }
//	        });
//	    }
//	    else {
//	        pTool.message("请先选择省份");
//	        return false;
//	    }
//	}
//	pTool.UserArea = function (selected) {
//	    var p = $("#cid").val();
//	    if (p != "") {
//	        $('.popBg').remove();
//	        $('.pop_wrap').remove();
//	        pTool.ajax({
//	        	url: "/ZhuBaoTuan/UserArea.json",
//	            // url: "/User/Z?pid=" + p + "&selected=" + selected,
//	            dataType: "json",
//	            success: function (data) {
//	                if (data.success) {
//	                	var temp = '';
//	                    $('.wrap').after(temp);
//	                }
//	            }
//	        });
//	    }
//	    else {
//	        pTool.message("请选择城市");
//	        return false;
//	    }
//	}
//
//	/***************** 面向业务 start ***********************/
//
//	window.pBusiness = {};
//
//	pBusiness.isLogin = function(loginYes, loginNo) {
//      var isLogin = pTool.getCookie("isLogin");
//      console.log(isLogin);
//      if (isLogin === "yes") {
//      	loginYes();
//          //location.href = "user.html";
//      } else {
//      	loginNo();
//          //$scope.loginView = true;
//      }
//	}
	/***************** 面向业务 end ***********************/
})(window);