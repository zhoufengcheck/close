function firstElementChild(node){
  //是否为空参数
  if(node.firstElementChild)//能力检测
    return node.firstElementChild;
  else{
    var child=node.firstChild;
    while(child!=null){
      if(child==1)return child;
      child=child.nextSibling;
    }
    return null;
  }
}
var current=1;
var interval;
/*首页轮播图片**/
function lunbo(){
  var div=document.getElementById('banner');
  var spans=toArray(div.getElementsByTagName('span'));
  var img=toArray(div.getElementsByTagName('img'))[0];
  current=current+1>spans.length?1:current+1;
  img.src=img.src.replace(/\d(\.jpg)$/,current+'$1');
  for(var j=0;j<spans.length;j++){
     if(spans[j].className=='current')spans[j].className="";
  }
  spans[current-1].className="current";
  for(var i=0;i<spans.length;i++){
    spans[i].index=i
    spans[i].onclick=function(){
      clearInterval(interval);
      current=this.index;
        for(var j=0;j<spans.length;j++){
          if(spans[j].className=='current')spans[j].className="";
        }
        this.className="current";
        img.src=img.src.replace(/\d(\.jpg)$/,(current+1)+'$1');
        interval=setInterval(lunbo,2000);
    };
  }
}
 
window.onload=function(){
  interval=setInterval(lunbo,3000);
}