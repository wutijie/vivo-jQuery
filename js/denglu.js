$(function(){
	
	
	if(!document.cookie){
		alert("您还没有账号");
	}else{
		var arr=document.cookie.split(";");
		var arr1=arr[0].split("=");
		var arr2=arr[1].split("=");
		
		
		$('#denglu').click(function(){
			if($('#userName').val()!=arr1[1]||
			$('#passWord').val()!=arr2[1]){
				alert("输入的信息有误");
			}else{
				document.location="index.html";
			}
		})
		
		
	}
	
	
	
	
	
	
	
	
	
	
	$('#zhuce').click(function(){
		document.location='zhuce.html';
	})
})