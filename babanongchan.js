auto.waitFor();
setScreenMetrics(1176, 2400);
sleep(8000);

// 点击芭芭农场
var baba_nongchang = text('芭芭农场').findOne(2000);
var click_true = click(baba_nongchang.bounds().centerX(), baba_nongchang.bounds().centerY());
sleep(3000);

// 领取图标
click(942, 1600);
sleep(2000);

var lingqu = className("android.view.View").text("去领更多肥料").findOne(2000);
if(lingqu != null){
  lingqu.click();
  sleep(2000);
}


//领肥料
var feiliao = className("android.widget.Image").depth(16).findOne(2000);
feiliao.click();
sleep(3000);

// 每日领取
var i = 0;
while(i < 3){
  i++;
	var lingqu = className("android.view.View").text("领取").findOne(2000);
	if(lingqu != null){
    lingqu.click();
  	sleep(3000);
  }else{
  	break;
  }
}

// 如果跳转到"小鸡肥料厂"
var lingqu = className("android.view.View").text("小鸡肥料厂").findOne(2000);
if(lingqu != null){
	back();
  back();
}

var lingqu = text("蚂蚁庄园").findOne(2000);
if(lingqu != null){
	back();
}

//去浏览
var quliulan = className("android.view.View").text("去浏览").findOne(2000);
if(quliulan != null){
  quliulan.click();
  sleep(2000);
  // 滑动窗口
  swipe(80, 1500, 80, 500, 1000);
  sleep(18000);   //18000ms
	back();
}

//去完成
var i = 0;
while(i<3){
  	i++;
//     var wancheng = className("android.view.View").text("去完成").findOne(2000);
//   if(wancheng != null){
//     wancheng.click();
//     sleep(3000);

//     // 滑动窗口
//     swipe(80, 1500, 80, 500, 1000);
//     sleep(1000);   //18000ms

//     // 返回
//     back();
//     sleep(3000);
//   }else{
//     break;
//   }
  var wancheng = className("android.view.View").text("去完成").find();
  for (var j = 0; j < wancheng.length; j++) {
    if(j == 0){
      wancheng[j].click();
      sleep(3000);

      // 滑动窗口
      swipe(80, 1500, 80, 500, 1000);
      sleep(18000);   //18000ms

      // 返回
      back();
      sleep(3000);
    }
  }
}

// 施肥
click(80, 500);
var i = 0;
while(i<25){
  i++;
	click(500, 1900);
  sleep(1000);
}
console.show()
log("完成");
