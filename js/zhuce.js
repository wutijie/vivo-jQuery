$(function(){
	$('#phonefor').validate({
		rules:{
			phone:{
				required:true,
				rangelength:[11,11]
			}
		},
		messages:{
			phone:{
				required:"请输入手机号",
				rangelength:"请输入有效的手机号",
			}
		}
	})
	
	
	
	
	$('#nextbu').click(function(){
		var re1=/^[\u4e00-\u9fa50-9a-zA-Z_\-]{4,20}$/;
		if(!re1.test($('#phone').val())){
			alert("请输入正确的手机号");
		}else{
			document.cookie="phone="+$('#phone').val();
			document.location='zhuce2.html';
		}
		
	})
	
	
})