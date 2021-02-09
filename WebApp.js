let btnstart4 = document.getElementById("mybtn4");
let btnstart3 = document.getElementById("mybtn3");

btnstart4.addEventListener("click", full_search2_start);
btnstart3.addEventListener("click", calculation_start);

var itemprice = [30,50,80,90,100,110,120,130,150,160,100,120,130,140,100,100,150,130,130,160,100,90,110,120,120,100,120,120,90,120,110,90,110,110,100,100,100,100,100,110,70,100,120,120,60];
var itemvalue = [8,6,8,9,7,7,8,5,8,9,8,6,7,7,6,8,7,8,8,7,7,7,6,7,6,6,8,7,6,9,7,6,8,8,8,7,6,5,5,6,8,8,7,7,6];
var limitprice = 300;
var choicenumber = 0;
var maxvalue = 0;

alert("1");






function calculation_start(){
	
	alert("2");
	var snacklist = document.getElementsByName("snack");
	var psum = 0;
	var vsum = 0;

        for(i=0;i<45;i++){
	     if(snacklist[i].checked){
		psum = psum+itemprice[i];
	        vsum = vsum+itemvalue[i];
	}
}
	alert("3");
	var element = document.createElement("p");
        var text = document.createTextNode("合計金額:" + psum + ",合計人気度:"　+　vsum);
	document.body.appendChild(element).appendChild(text);
}
