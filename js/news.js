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
  setInterval(adShows,3000);
}