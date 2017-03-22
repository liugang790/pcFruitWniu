$(".head .right a").hover(function(){
	 $(this).find(".span1").hide();
     $(this).find(".span2").show();
},function(){
     $(this).find(".span1").show();
	 $(this).find(".span2").hide();
})

//banner start
		jQuery("#banner .slideBox").slide({mainCell:".bd ul",effect:"leftLoop",interTime:3000,autoPlay:true,delayTime:1000});
        jQuery("#Function .slideBox").slide({mainCell:".bd ul",effect:"leftLoop",interTime:3000,autoPlay:true,delayTime:1000});



//弹框 start
$(".head .right a.pc").click(function(){
   $("#tk").show();
   $('#tk').height($(document).height());
   $(".tk_con").show();
})

$("#tk").click(function(){
    $(this).hide();
	$(".tk_con").hide();
})


 //垂直轮播
var index=0;
var h=$("#fruit ul.pic").height();
var len=$("#fruit ul.btn li").length;
$("#fruit ul.btn li").click(function(){
 index=$(this).index();
 $(this).addClass("hover").siblings("li").removeClass("hover");
 $("#fruit ul.pic").stop().animate({"scrollTop":index*h},1000);
})
//获取当前时间
var lastTime=new Date();
$("#fruit ul.pic").mousewheel(function(event,delta,deltaX,deltaY){
	 if(new Date()-lastTime>500){
		  lastTime=new Date();
		  //向下滚动
		  if(delta==-1){
		  index++;
				if(index<len){
					$("#fruit ul.btn li").eq(index).addClass("hover").siblings("li").removeClass("hover");
					$("#fruit ul.pic").stop().animate({"scrollTop":index*h},1000);
				}else{
					  index=len-1;
				}
		  }
		  //向上滚
		  if(delta==1){
			   index--;
			   if(index>=0){
					   $("#fruit ul.btn li").eq(index).addClass("hover").siblings("li").removeClass("hover");
					   $("#fruit ul.pic").stop().animate({"scrollTop":index*h},1000);
			   }else{
				  index=0;
			   }
		  }
	 }
})



//功能果汁
var dindex=0;
$("#details .content ul.list li").hover(function(){
	  dindex=$(this).index();
      $("#details .content ul.list li .wei").eq(dindex).show();
},function(){
      $("#details .content ul.list li .wei").eq(dindex).hide();
})


