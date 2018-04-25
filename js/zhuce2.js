$(function(){
	var arr=document.cookie.split();
	var arr1=arr[0].split("=");
	$('#haoma').html(arr1[1]);
	
	var numb=parseInt(Math.round(Math.random()*8999)+1000);
	alert(numb);
	var numc=30;
	var timers;
	timers=setInterval(daoji,1000);
	$('#yzma').click(function(){
		if($(this).val()=='获取验证码'){
			clearInterval(timers);
			var numb=parseInt(Math.round(Math.random()*8999)+1000);
			alert(numb);
			var numc=30;
			timers=setInterval(daoji,1000);
		}
	})
	
	function daoji(){
		numc--;
		if(numc<0){
			$('#yzma').val('获取验证码');
			return;
		}
		$('#yzma').val(numc+'s');
	}
	
	
	
	
	$('#phonefor').validate({
		rules:{
//			duanxin:{
//				required:true,
//				rangelength:[4,4]
//			},
			passWord:{
				required:true,
				rangelength:[6,18]
			},
			passWord2:{
				required: true,
                rangelength:[6,18],
                equalTo: "#passWord"
			}
		},
		messages:{
			/*duanxin:{
				required:"请输入短信验证码",
				rangelength:"验证码错误",
			},*/
			passWord:{
				required:"请输入密码",
				rangelength:"密码格式不正确"
			},
			passWord2:{
				required: "请再次输入密码",
                rangelength:"密码不一致"
			}
			
		}
	})
	
	
	
	
	$('#wancheng').click(function(){
		var re1=/^[a-zA-Z0-9]{6,18}$/;
		if(!re1.test($('#passWord').val())&&
		!re1.test($('#passWord2').val())
		){
			alert("输入的信息有误");
		}else{
			alert("注册成功");
			document.cookie="passWord="+$('#passWord').val();
			document.location='denglu.html';
		}
		
	})
	
	
})