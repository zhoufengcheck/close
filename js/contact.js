function tabControl(){
	var check=document.getElementById('check');
	var rights=getElementsByClassName('right',document);
	var lis=Array.prototype.slice.call(check.getElementsByTagName('li'),2);
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				if(lis[j].className="checked")lis[j].className="";
				if(rights[j].className.search('active')!=-1){
					rights[j].className=rights[j].className.replace(/\sactive/,'');
				}
			}
			this.className="checked";
			rights[this.index].className+=' active';
		}
	}
}
var current=0;
function graduShows(){
	var graduShow=getElementsByClassName('graduShow',document)[0];
	var pic=getElementsByClassName('pic',document)[0];
	var imgs=toArray(pic.getElementsByTagName('img'));
	current=current+1>4?0:current+1;
	if(current==4){
		pic.className='pic';
		pic.style.left='0px';
		setTimeout(function(){
			current=1
			pic.style.left=(-1*current)*graduShow.offsetWidth+'px';
			pic.className+=' slow';
		},20)
	}
	else
		pic.style.left=(-1*current)*graduShow.offsetWidth+'px';
}
function maps(){
	var map = new AMap.Map('container');
    map.setZoom(11);//设置缩放级别
    map.setCenter([116.2695662200,40.1312580041]);//设置中心坐标
}
window.onload=function(){
	
	tabControl();
	graduShows();
	setInterval(graduShows,3000);
	maps()
}