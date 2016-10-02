//size测试发现document.getElementsByClassName()
//方法在IE8版本以下（包裹IE8）是不支持的
function buys(){
	var buyNow=document.getElementById('buyNow');
	buyNow.onclick=function(e){
		e.preventDefault();
		var buy=document.getElementById('buy');
		buy.style.zIndex=1000;
		buy.style.opacity=1;
		var size=document.getElementById('buySize');
		var num=document.getElementById('buyNum');
		var color=document.getElementById('buyColor');
		var address=document.getElementById('buyAddress');	
		var checked=document.getElementsByClassName('checked');
		size.innerHTML=checked[0].innerHTML;
		color.innerHTML=checked[1].getElementsByTagName('img')[0].alt;
		num.innerHTML=document.getElementById('num').value;
		var yes=document.getElementById('yes');
		var no=document.getElementById('no');
		yes.onclick=function(e){
			e.preventDefault();
			buy.style.zIndex=-1;
			buy.style.opacity=0;
		}
		no.onclick=function(e){
			e.preventDefault();
			buy.style.zIndex=-1;
			buy.style.opacity=0;
		}
	}
}
var current=0;
function scrolls(){
	var top=(-480);
  	var up=document.getElementById('up');
  	var down=document.getElementById('down');
  	var closeShow=getElementsByClassName('closeShow',document)[0];
  	var group=(toArray(closeShow.getElementsByTagName('img'))).length/3;
  	down.onclick=function(){
  		current=current+1>group?0:current+1;
  		if(current==group){
  			closeShow.style.transition='none';
  			closeShow.style.top=0+'px';
  			setTimeout(function(){
  				current=1;
  				closeShow.style.top=top+'px';
  				closeShow.style.transition=0.6+'s';
  			},20);
  		}
  		else{
  			closeShow.style.top=current*top+'px';
  		}
  	};
  	up.onclick=function(){
  		current=current-1<0?group-1:current-1;
  		if(current==group-1){
  			closeShow.style.transition='none';
  			closeShow.style.top=current*top+'px';
  			setTimeout(function(){
  				current=1;
  				closeShow.style.top=top+'px';
  				closeShow.style.transition=0.6+'s';
  			},20);
  		}
  		else{
  			closeShow.style.top=current*top+'px';
  		}
  	};
}
function size(){
	var s=getElementsByClassName('size',document)[0];
	var lis=toArray(s.getElementsByTagName('li'));
	for(var i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				if(lis[j].className="checked")lis[j].className="";
			}
			this.className="checked";
		}
	}
}
//color
function color(){
	var scale=document.getElementById('scale');
	var color=getElementsByClassName('color',document)[0];
	var lis=toArray(color.getElementsByTagName('li'));
	var proItemShow=document.getElementById('proItemShow');
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				if(lis[j].className="checked")lis[j].className="";
			}
			this.className="checked";
			var a=this.title.replace('litter','big');
			scale.style.backgroundImage="url(image/shopping/"+a+".jpg)";
			proItemShow.src=proItemShow.src.replace(/(\w{7})(\.jpg)$/,this.title+'$2')
		}
	}
}
//style
function styles(){
	var scale=document.getElementById('scale');
	var proItem_left=getElementsByClassName('proItem_left',document)[0];
	var ul=proItem_left.getElementsByTagName('ul')[0];
	var lis=toArray(ul.getElementsByTagName('li'));
	var proItemShow=document.getElementById('proItemShow');
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				if(lis[j].className="checked")lis[j].className="";
			}
			this.className="checked";
			proItemShow.src=proItemShow.src.replace(/(\w{7})(\.jpg)$/,this.title+'$2');
			scale.style.backgroundImage="url(image/shopping/big"+(this.index+1)+".jpg)";
		}
	}
}
//num
function numOperater(){
	var addnum=document.getElementById('addnum');
	var subnum=document.getElementById('subnum');
	var num=document.getElementById('num');
	addnum.onclick=function(){
		num.value=parseInt(num.value)+1;
	}
	subnum.onclick=function(){
		if(parseInt(num.value)==0)
			num.value=0;
		else
			num.value=parseInt(num.value)-1;
	}
}
//scale
function scale(){
	var scale=document.getElementById('scale');
	var proItemShow=document.getElementById('proItemShow');
	var move=document.getElementById('move')
	proItemShow.onmousemove=function(e){
		e=e||window.event; 
	    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
	    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
	    var x = e.clientX;
	    var y = e.pageY || e.clientY + scrollY;
		scale.style.display='block';
		move.style.opacity='0.4';
		move.style.left=(x-180)+'px';
		move.style.top=(y-197)+'px';
		var a=100*(x-180)/100;
		var b=100*(y-195)/100;
		scale.style.backgroundPosition=(-1)*a+'px '+(-1*b)+'px';
	};
	proItemShow.onmouseout=function(){
		scale.style.display='none';
		move.style.opacity='0';
	}
}
function tabControl(){
	var tabControl=getElementsByClassName('tabControl',document)[0];
	var controls=getElementsByClassName('controls',tabControl);
	var control=document.getElementById('control');
	var lis=toArray(control.getElementsByTagName('li'));
	for(i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				if(lis[j].className=='active')
					{lis[j].className="";
				controls[j].style.display='none';
				}
			}
			this.className="active";			
			controls[this.index].style.display='inline-block';
		}
	}
}
function links(){
	var link=getElementsByClassName('link',document)[0];
	var spans=toArray(link.getElementsByTagName('span'));
	var as=toArray(link.getElementsByTagName('a'));
	for(var i=0;i<as.length;i++){
		as[i].index=i;
		as[i].onclick=function(){
			for(var j=0;j<as.length;j++){
				spans[j].style.backgroundColor='white';
			}
			spans[this.index].style.backgroundColor='#73c2fb';
		}
	}
}
function linkShow(){
		var aa=document.getElementById('aa');
		var link=document.getElementsByClassName('link')[0];
		aa.onmousemove=function(e){
	        e=e||window.event; 
	        var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
	        var y = e.pageY || e.clientY + scrollY;
	        if(y>1200){
	        	link.style.opacity=1;
	        }
	       
   		 };
   		 aa.onmouseout=function(e){
	        e=e||window.event; 
	        var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
	        var y = e.pageY || e.clientY + scrollY;
	        if(y<600){
	        	link.style.opacity=0;
	        }
	       
   		 }
   }
window.onload=function(){
	buys();
	size();
	color();
	styles();
	numOperater();
	scale();
	tabControl();
	links();
	scrolls();
	 $(window).scroll(function () {
      if ($(window).scrollTop() > 700) {
      	$(".link").addClass('linkShow');
        //$(".link").fadeIn(100);//fadeIn淡入淡出
      
      }
      else {
      	$(".link").removeClass('linkShow');
       // $(".link").fadeOut(100);
      }
    });
}