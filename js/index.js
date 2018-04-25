$(function(){
	if(!document.cookie){
		$('#use').html('<a href="zhuce.html">登录/注册</a>');
	}else{
		var arr=document.cookie.split(";");
		var arr1=arr[0].split("=");
//		$('#use').html(arr1[1]);
		$('#use').html("已登录");
		
	}
	
	
	
	//搜索
	$('.fir .icon-sousuo').click(function(){
		$('.fir .icon-sousuo').animate({right:150},400);
		$('.firul').toggle(400);
		$('.toprig').toggle(500);
		$('.fir .close').toggle(400);
	})
	$('.fir .close').click(function(){
		$('.fir .icon-sousuo').animate({right:80},400);
		$('.firul').toggle(400);
		$('.toprig').toggle(500);
		$('.fir .close').toggle(400);
	})
	$('.fir .geren').mouseover(function(){
		$('.fir .rendiv').fadeToggle(400);
	})
	$('.fir .rendiv').mouseleave(function(){
		$('.fir .rendiv').fadeToggle(400);
	})
	
	
	//二级
	$('.firul .firuli').each(function(i,elem){
		$(elem).mouseenter(function(){
			$('.topbotm').show(400,function(){
				$('.erjidiv').slideUp(400);
				$('.erjidiv').eq(i).slideDown(400);
			});
		})
		$('.topbotm').mouseleave(function(){
			$('.topbotm').hide(400);
			$('.erjidiv').slideUp(400);
		})
	})
	$('.firulishe').mouseenter(function(){
		$('.topbotm').hide(400);
		$('.erjidiv').slideUp(400);
	})
	
	//轮播
	var timer;
	var n=0;
	timer=setInterval(imgmove,3000);
	function imgmove(){
		n++;
		if(n>$('.banner img').length-1){
			n=0;
		}
		console.log(n)
		$('.banner img').fadeOut();
		$('.banner .diandian span').animate({height:2});
		$('.banner .diandian span').eq(n).animate({height:5});
		$('.banner img').eq(n).fadeIn();
		$('.fontt div').hide();
		$('.fontt div').eq(n).slideDown(1000);
	}
	$('.banner .diandian span').mouseenter(function(){
		clearInterval(timer);
		$('.banner img').fadeOut();
		$('.banner .diandian span').animate({height:2});
		$('.fontt div').hide();
		console.log($(this))
		$(this).animate({height:5});
		$('.banner img').eq($(this).index()).fadeIn();
		$('.fontt div').eq($(this).index()).slideDown(1000);
		n=$(this).index();
	})
	$('.banner .diandian span').mouseleave(function(){
		timer=setInterval(imgmove,3000);
	})
	
	
	
	
	
	$('.banner img').mouseenter(function(){
		clearInterval(timer);
	})
	$('.banner img').mouseleave(function(){
		timer=setInterval(imgmove,3000);
	})
	$('.fontt div').mouseenter(function(){
		clearInterval(timer);
	})
	$('.fontt div').mouseleave(function(){
		timer=setInterval(imgmove,3000);
	})
	$('.fontt div .pp04').mouseenter(function(){
		$(this).attr('id','spancol');
		$(this).next().attr('id','spanbac');
		$(this).next().animate({width:50});
	})
	$('.fontt div .pp04').mouseleave(function(){
		$(this).attr('id','');
		$(this).next().attr('id','');
		$(this).next().animate({width:20});
	})
	
	
	
	
	
	
	
	
	
	//图片动
	$('.cendv0').mouseenter(function(){
		$(this).children().eq(0).animate({height:320,left:-150,bottom:-15})
	})
	$('.cendv0').mouseleave(function(){
		$(this).children().eq(0).animate({height:280,left:-100,bottom:0})
	})
	$('.cendv1').mouseenter(function(){
		$(this).children().eq(0).animate({height:330,left:-130,bottom:-10})
	})
	$('.cendv1').mouseleave(function(){
		$(this).children().eq(0).animate({height:300,left:-100,bottom:0})
	})
	
	
	
	
	
	
	//底部
	$('.fitrigc a').eq(0).mouseenter(function(){
		$('.guanzhu').slideToggle(400);
	})
	$('.guanzhu').eq(0).mouseleave(function(){
		$('.guanzhu').slideUp(400);
	})
	
	
});