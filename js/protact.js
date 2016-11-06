	
   	 //验证名称
	   $('.text').eq(0).keyup(function() {
	   	 var reg = /^[a-zA-Z]{6,16}$/;
	   	  var inputName = $('.text').eq(0).val();
	         if (!reg.test(inputName)) {
			  	$('.waring').eq(0).html("输入6-16位字母")
			  }else{
			    $('.waring').eq(0).html("")
			  }
	     })
	   
	  //验证密码
	   $('.text').eq(1).keyup(function() {
	   	 var reg = /^[0-9a-zA-Z]{6,16}$/;
	   	  var inputName = $('.text').eq(1).val();
	         if (!reg.test(inputName)) {
			  	$('.waring').eq(1).html("输入6-16位数字");
			  }else{
			    $('.waring').eq(1).html("");
			  }
	   })
	   
	   //确认密码
	     $('.text').eq(2).keyup(function() {
	     	var text1 =  $('.text').eq(1).val();
	     	var text2 =  $('.text').eq(2).val();
	   	  if (text1==text2) {
	   	  	 $('.waring').eq(2).html("密码正确");
	   	  }else{
	   	  	 $('.waring').eq(2).html("输入正确密码");
	   	  }	       
	   })