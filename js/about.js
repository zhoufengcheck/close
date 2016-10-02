var position=[
  {x:-240,z:-200},
  {x:-120,z:-100},
  {x:0,z:100},
  {x:100,z:-100},
  {x:220,z:-200}
  ];
  var position1=[
  {x:-240,z:-200},
  {x:-120,z:-100},
  {x:0,z:100},
  {x:100,z:-100},
  {x:220,z:-200}
  ];
/*about页的木马转动**/
function picShow(){ 
  var div=document.getElementById('container');
  var imgs=toArray(div.getElementsByTagName('img'));
  for(var i=0;i<imgs.length-1;i++){
      position1[i].x=position[i+1].x;
      position1[i].z=position[i+1].z;
      imgs[i].style.transform='translateX('+position[i+1].x+'px) translateZ('+position[i+1].z+'px)';
  }
  imgs[position.length-1].style.transform='translateX('+position[0].x+'px) translateZ('+position[0].z+'px)';
  position1[4].x=position[0].x;
  position1[4].z=position[0].z;
  for(var i=0;i<position.length;i++){
      position[i].x=position1[i].x;
      position[i].z=position1[i].z;
  }
}
var index=0;
function adShows(){
    var top=(-180);
    var adShow=getElementsByClassName('adShow',document)[0];
    index=index+1>3?3:index+1;
      if(index==3){
        adShow.style.transition='none';
        adShow.style.top=0+'px';
        setTimeout(function(){
          index=1;
          adShow.style.top=top+'px';
          adShow.style.transition=0.6+'s';
        },20);
      }
      else{
        adShow.style.top=top*index+'px';
      }
 }
window.onload=function(){
  picShow();
  setInterval(picShow,2000);
   setInterval(adShows,3000);
}