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
		$('#nextop').hide();
	})
	$('.fir .close').click(function(){
		$('.fir .icon-sousuo').animate({right:80},400);
		$('.firul').toggle(400);
		$('.toprig').toggle(500);
		$('.fir .close').toggle(400);
		$('#nextop').show();
	})
	$('.fir .geren').mouseover(function(){
		$('.fir .rendiv').fadeToggle(400);
		$('#nextop').hide();
	})
	$('.fir .rendiv').mouseleave(function(){
		$('.fir .rendiv').fadeToggle(400);
		$('#nextop').show();
	})
	
	
	//二级
	$('.firul .firuli').each(function(i,elem){
		$(elem).mouseenter(function(){
			$('.topbotm').show(400,function(){
				$('.erjidiv').slideUp(400);
				$('.erjidiv').eq(i).slideDown(400);
			});
			$('#nextop').hide();
		})
		$('.topbotm').mouseleave(function(){
			$('.topbotm').hide(400);
			$('.erjidiv').slideUp(400);
			$('#nextop').show();
		})
	})
	$('.firulishe').mouseenter(function(){
		$('.topbotm').hide(400);
		$('.erjidiv').slideUp(400);
	})
	
	//滚轮
//	var timer;
//	$(document).scroll(function(){
//		if($(document).scrollTop()>44){
//			$('#nextop').css({'position':'fixed','top':0,'z-index':999})
//		}
//		imgMove($('#cenfir'),$('#cenfir .img2'),$('#cenfir div'));
		/*imgMove($('#centwo'),$('#centwo .img0'),$('#centwo div'));
		imgMove($('#centhr'),$('#centhr .img01'),$('#centhr div'));
		imgMove($('#cenfour'),null,$('#cenfour div'));
		imgMove($('#cenfive'),$('#cenfive .img02'),$('#cenfive div'));
		imgMove($('#censix'),$('#censix .img03'),$('#censix div'));
		imgMove($('#censeven'),$('#censeven .img04'),$('#censeven div'));
		imgMove($('#ceneig'),$('#ceneig .img05'),$('#ceneig div'));
		imgMove($('#centen'),$('#centen .img07'),$('#centen div'));*/
//	})
	function imgMove(obj,moImg,dvv){
		//滚动条的距离
		var tiaoTop=$(document).scrollTop();
//		console.log(tiaoTop)
		//可视区的高度
//		var viewHeight=$(window).height();
		
		
		var zishenTop=obj.offset().top;
		var heigTop=zishenTop+obj.height();
//		console.log(zishenTop);
//		console.log(heigTop);
		if(tiaoTop<104||tiaoTop>heigTop){
			console.log(1)
			return;
		}else if(tiaoTop>zishenTop-100&&tiaoTop<heigTop){
			var agent = navigator.userAgent;
			if (/.*Firefox.*/.test(agent)) {
			    document.addEventListener("DOMMouseScroll", function(e) {
			        e = e || window.event;
			        var detail = e.detail;
			        if (detail > 0) {
			        	if(tiaoTop>zishenTop-100&&tiaoTop<heigTop){
				        	dvv.slideDown(400);
				        	var imgTop=moImg.position().top+50;
				            console.log("鼠标向下滚动");
				            moImg.animate({top:imgTop},200);
			        	}
			        } else {
			        	var imgTop1=moImg.position().top-50;
			            console.warn("鼠标向上滚动");
			            moImg.animate({top:imgTop1},200);
			        }
			    });
			} else {
			    document.onmousewheel = function(e) {
			        e = e || window.event;
			        var wheelDelta = e.wheelDelta;
			        if (wheelDelta > 0) {
			        	var imgTop1=moImg.position().top-100;
			            console.log("鼠标向上滚动");
			            moImg.animate({top:imgTop1},200);
			        } else {
			        	if(tiaoTop>zishenTop-100&&tiaoTop<heigTop){
				        	dvv.slideDown(400);
				        	var imgTop=moImg.position().top+50;
				            console.log("鼠标向下滚动");
				            moImg.animate({top:imgTop},200);
			        	}
			        }
			    }
			}
		}
		
	}
	$('.kz1').click(function(){
		$('#close').toggle();
		$(this).parent().slideToggle();
		$('.twodis').slideToggle();
		var imgTop=$('#centwo .img0').position().top-230;
		$('#centwo .img0').animate({top:imgTop},1000);
		$('#centwo div').slideUp(1000);
	})
	$('#close').click(function(){
		$('#close').toggle();
		$('.kz1').parent().slideToggle();
		$('.twodis').slideToggle();
		var imgTop=$('#centwo .img0').position().top+230;
		$('#centwo .img0').animate({top:imgTop},1000);
		$('#centwo div').slideUp(1000);
	})
	
	
	
	
	$('.kz2').click(function(){
		$('#close2').toggle();
		$(this).parent().slideToggle();
		$('.thrdis').slideToggle();
	})
	$('#close2').click(function(){
		$('#close2').toggle();
		$('.kz2').parent().slideToggle();
		$('.thrdis').slideToggle();
	})
	
	
	
	$('.kz3').click(function(){
		$('#close3').toggle();
		$(this).parent().slideToggle();
		$('.fivdis').slideToggle();
	})
	$('#close3').click(function(){
		$('#close3').toggle();
		$('.kz3').parent().slideToggle();
		$('.fivdis').slideToggle();
	})
	
	
	
	
	//选项卡
	$('.d1d div').each(function(i,elem){
		$(elem).click(function(){
			$('#thrcont .d1d p').attr('class','');
			$('#thrcont .d1d p').eq(i).attr('class','lanse');
			$('#thrcont .imgcena').css('display','none');
			$('#thrcont .imgcena').eq(i).css('display','block');
		})
	})
	
	
	
	
	
	
	
	//底部
	$('.fitrigc a').eq(0).mouseenter(function(){
		$('.guanzhu').slideToggle(400);
	})
	$('.guanzhu').eq(0).mouseleave(function(){
		$('.guanzhu').slideUp(400);
	})
	
	
	
	
	
	
	
	
	
	var $mlNav = $('.ml-nav');
	$('#dowebok').fullpage({
		verticalCentered: !1,
		navigation: !0,
		
		onLeave: function(index, nextIndex, direction){
			/*if(index == 2 && direction == 'up'){
				$mlNav.animate({
					top: 44
				}, 680);
			} else if(index == 1 && direction == 'down') {
				$mlNav.animate({
					top: 44
				}, 400);
			} else if(index == 3 && direction == 'up') {
				$mlNav.animate({
					top: 44
				}, 500);
			} else {
				$mlNav.animate({
					top: 0
				}, 400);
			}*/
			/*if(index==1 && direction == 'down'){
				$mlNav.animate({
					top: 44
				}, 400);
			}*/
			if(index==2){
				$mlNav.animate({
					top: 0
				}, 400);
				var imgTop=$('#cenfir .img2').position().top+10;
				$('#cenfir .img2').animate({top:imgTop},1000);
			}else if(nextIndex==2){
				$mlNav.animate({
					top: 44
				}, 400);
				var imgTop=$('#cenfir .img2').position().top-10;
				$('#cenfir .img2').animate({top:imgTop},1000);
			}
			
			if(nextIndex==3){
				var imgTop=$('#centwo .img0').position().top+150;
				$('#centwo .img0').animate({top:imgTop},1000);
				$('#centwo div').slideDown(2000);
			}else if(index==3){
				var imgTop=$('#centwo .img0').position().top-150;
				$('#centwo .img0').animate({top:imgTop},1000);
				$('#centwo div').slideUp(1000);
			}
			
			if(nextIndex==9){
				var imgTop=$('#centhr .img01').position().top+150;
				$('#centhr .img01').animate({top:imgTop},1000);
				$('#centhr div').slideDown(2000);
			}else if(index==9){
				var imgTop=$('#centhr .img01').position().top-150;
				$('#centhr .img01').animate({top:imgTop},1000);
				$('#centhr div').slideUp(1000);
			}
			
			if(nextIndex==13){
				$('#cenfour div').slideDown(2000);
				$('#cenfour div').animate({marginRight:250},1000);
			}else if(index==13){
				$('#cenfour div').slideUp(1000);
			}
			
			if(nextIndex==14){
				$('#cenfive div').slideDown(2000);
				$('#cenfive .img02').animate({top:300,left:-180},1000).delay(500);
			}else if(index==14){
				$('#cenfive div').slideUp(1000);
				$('#cenfive .img02').animate({top:-790,left:-1000});
			}
			
			if(nextIndex==19){
				$('#censix div').slideDown(2000);
				$('#censix .img03').animate({width:900,top:300},1000);
			}else if(index==19){
				$('#censix div').slideUp(1000);
				$('#censix .img03').animate({width:881,top:350},1000);
			}
			
			if(nextIndex==20){
				$('#censeven div').slideDown(2000);
				$('#censeven .img04').animate({top:100},1000);
			}else if(index==20){
				$('#censeven div').slideUp(1000);
				$('#censeven .img04').animate({top:300},1000);
			}
			
			if(nextIndex==21){
				$('#ceneig div').fadeIn(2000);
				$('#ceneig .img05').animate({top:400},1000);
			}else if(index==21){
				$('#ceneig div').slideUp(1000);
				$('#ceneig .img05').animate({top:200},1000);
			}
			
			if(nextIndex==22){
				$('#centen div').slideDown(2000);
				$('#centen .img07').animate({top:200},1000);
			}else if(index==22){
				$('#centen div').slideUp(1000);
				$('#centen .img07').animate({top:0},1000);
			}
			
			
			
			
			
			
		}
	});
	
	
	
	
	
	
	
	
});