let btnstart2 = document.getElementById("mybtn2");
let btnstart3 = document.getElementById("mybtn3");
btnstart2.addEventListener("click",full_search_start);
btnstart3.addEventListener("click",calculation_start);
var startTime;

var itemprice = [30,50,80,90,100,110,120,130,150,160,100,120,130,140,100,100,150,130,130,160,100,90,110,120,120,100,120,120,90,120,110,90,110,110,100,100,100,100,100,110,70,100,120,120,60];
var itemvalue = [8,6,8,9,7,7,8,5,8,9,8,6,7,7,6,8,7,8,8,7,7,7,6,7,6,6,8,7,6,9,7,6,8,8,8,7,6,5,5,6,8,8,7,7,6];
var limitprice = 300;
var choicenumber = 0;
var maxvalue = 0;

function clockstart (){
	startTime = performance.now();

	for(var cnt = 0; cnt < Math.pow(2, itemprice.length) ;cnt++){
		var sumprice = 0;
		var sumvalue = 0;
		for(var s = 0; s < itemprice.length; s++){
			if((cnt >> s) & 1 == 1){
				sumprice += itemprice[s];
				sumvalue += itemvalue[s];
			}
		}

		if((maxvalue < sumvalue) && (sumprice <= limitprice)){
			maxvalue = sumvalue;
			choicenumber = cnt;
		}
	}
	
	const endTime = performance.now();
	var element = document.createElement("p");
	var text = document.createTextNode("人気度の合計：" + maxvalue + ", 選べるパターン：" + choicenumber + "通り，実行時間：" + (endTime-startTime) + "/1000秒！");
	document.body.appendChild(element).appendChild(text);
}

function calculation_start(){
	
	var snacklist = document.getElementsByName("snack");
	var psum = 0;
	var vsum = 0;

        for(i=0;i<10;i++){
	     if(snacklist[i].checked){
		psum = psum+itemprice[i];
	        vsum = vsum+itemvalue[i];
	}
}
	
	var element = document.createElement("p");
        var text = document.createTextNode("合計金額:" + psum + ",合計人気度:"　+　vsum);
	document.body.appendChild(element).appendChild(text);
}
