$(function(){
  var alink = $('.inddline');
  if(alink.length > 0){
      alink.each(function(i,v){
        var obj = $(v).find('a').eq(1);
        var url = obj.attr('href')
        getAjaxImage(url,obj)
      });
  }else{
    var alink = $('.co_area2 table a');
    if(alink.length > 0){
      alink.each(function(i,v){
        var obj = $(v);
        var url = obj.attr('href')
        getAjaxImage(url,obj)
      });
    }
    
  }

  // 飞鸟娱乐 
  // var alink = $('.subject');
  // alink.each(function(i,v){
  //   var moive_name = $(v).find('a').first().text();
  //   var url = "http://www.baidu.com/s?wd="+moive_name;
  //   var xhr = new XMLHttpRequest();
  //   xhr.open("GET", url, true);
  //   xhr.onreadystatechange = function() {
  //   　　if (xhr.readyState == 4) {
  //         var msg = xhr.responseText;
  //         var imageMath = /<img class="c-img c-img6" src="([^\"]+)"/;
  //         var matchArr = msg.match(imageMath);
  //         // console.log(matchArr);
  //         if(matchArr && matchArr[1]){
  //           $(v).find('a').first().after("<img src='"+matchArr[1]+"' height='75' />");
  //         }else{
  //           $(v).find('a').first().after("<font color='red'>无图片</font>");
  //         }
  //   　　}
  //   }
  //   xhr.send();
  //   // return false;
  // });
})

function getAjaxImage(url,obj){
  if(url){
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onreadystatechange = function() {
      　　if (xhr.readyState == 4) {
            var msg = xhr.responseText;
            //电影天堂;
            msg = msg.replace(/[\r\n\t\f\　]/g,"").replace(/style="(.[^\"]+)"/g,"");
            var imageMath = /<div id="Zoom">(.[^"]*)<img(.[^\/>]+)src="([^\"]+)/;
            var matchArr = msg.match(imageMath);
            // console.debug(matchArr);
            if(matchArr){
              var imagePath = matchArr[3];
              obj.after("<p><a href='"+url+"' target='_blank'><img src='"+imagePath+"' height='60' /></a></p>");
            }else{
              obj.after("<font color='red'>无图片</font>");
            }
      　　}
      }
      xhr.send();
      // return false;
  }
}



