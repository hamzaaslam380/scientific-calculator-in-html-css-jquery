var num1=0.0;
var op="";
var isEqual=false;

function check(){	
	if(isEqual==true){
		document.getElementById("textField").value="";
	}
}

calculator.style.marginLeft = "45%";
calculator.style.marginTop = "20%";
calculator.style.backgroundColor = "grey";

var textField=document.createElement("input");
textField.type="text";
textField.id="textField";
mainDiv.appendChild(textField);
textField.style.height = "40px";
textField.style.width = "156px";

var btn_1=document.createElement("button");
row1.appendChild(btn_1);
btn_1.innerHTML = "1";
btn_1.value="1";
btn_1.style.height = "40px";
btn_1.style.width = "40px";

var btn_2=document.createElement("button");
row1.appendChild(btn_2);
btn_2.innerHTML = "2";
btn_2.value="2";
btn_2.style.height = "40px";
btn_2.style.width = "40px";

var btn_3=document.createElement("button");
row1.appendChild(btn_3);
btn_3.innerHTML = "3";
btn_3.value="3";
btn_3.style.height = "40px";
btn_3.style.width = "40px";

var btn_plus=document.createElement("button");
row1.appendChild(btn_plus);
btn_plus.innerHTML = "+";
btn_plus.value="+";
btn_plus.style.height = "40px";
btn_plus.style.width = "40px";


var btn_4=document.createElement("button");
row2.appendChild(btn_4);
btn_4.innerHTML = "4";
btn_4.value="4";
btn_4.style.height = "40px";
btn_4.style.width = "40px";

var btn_5=document.createElement("button");
row2.appendChild(btn_5);
btn_5.innerHTML = "5";
btn_5.value="5";
btn_5.style.height = "40px";
btn_5.style.width = "40px";

var btn_6=document.createElement("button");
row2.appendChild(btn_6);
btn_6.innerHTML = "6";
btn_6.value="6";
btn_6.style.height = "40px";
btn_6.style.width = "40px";

var btn_subtraction=document.createElement("button");
row2.appendChild(btn_subtraction);
btn_subtraction.innerHTML = "-";
btn_subtraction.value="-";
btn_subtraction.style.height = "40px";
btn_subtraction.style.width = "40px";

var btn_7=document.createElement("button");
row3.appendChild(btn_7);
btn_7.innerHTML = "7";
btn_7.value="7";
btn_7.style.height = "40px";
btn_7.style.width = "40px";

var btn_8=document.createElement("button");
row3.appendChild(btn_8);
btn_8.innerHTML = "8";
btn_8.value="8";
btn_8.style.height = "40px";
btn_8.style.width = "40px";

var btn_9=document.createElement("button");
row3.appendChild(btn_9);
btn_9.innerHTML = "9";
btn_9.value="9";
btn_9.style.height = "40px";
btn_9.style.width = "40px";

var btn_multiplication=document.createElement("button");
row3.appendChild(btn_multiplication);
btn_multiplication.innerHTML = "x";
btn_multiplication.value="x";
btn_multiplication.style.height = "40px";
btn_multiplication.style.width = "40px";

var btn_0=document.createElement("button");
row4.appendChild(btn_0);
btn_0.innerHTML = "0";
btn_0.value="0";
btn_0.style.height = "40px";
btn_0.style.width = "40px";

var btn_division=document.createElement("button");
row4.appendChild(btn_division);
btn_division.innerHTML = "/";
btn_division.value="/";
btn_division.style.height = "40px";
btn_division.style.width = "40px";

var btn_equal=document.createElement("button");
row4.appendChild(btn_equal);
btn_equal.innerHTML = "=";
btn_equal.value="=";
btn_equal.style.height = "40px";
btn_equal.style.width = "40px";

var btn_clear=document.createElement("button");
row4.appendChild(btn_clear);
btn_clear.innerHTML = "C";
btn_clear.value="C";
btn_clear.style.height = "40px";
btn_clear.style.width = "40px";


btn_0.onclick = function(){
		check();
		document.getElementById("textField").value+=0;
};
btn_1.onclick = function(){
		check();
		document.getElementById("textField").value+=1;
};
btn_2.onclick = function(){
		check();
		document.getElementById("textField").value+=2;
};
btn_3.onclick = function(){
		check();
		document.getElementById("textField").value+=3;
};
btn_4.onclick = function(){
		check();
		document.getElementById("textField").value+=4;
};
btn_5.onclick = function(){
		check();
		document.getElementById("textField").value+=5;
};
btn_6.onclick = function(){
		check();
		document.getElementById("textField").value+=6;
};
btn_7.onclick = function(){
		check();
		document.getElementById("textField").value+=7;
};
btn_8.onclick = function(){
		check();
		document.getElementById("textField").value+=8;
};
btn_9.onclick = function(){
		check();
		document.getElementById("textField").value+=9;
};
btn_plus.onclick = function(){
		num1=document.getElementById("textField").value;
		document.getElementById("textField").value="";
		op="+";
};
btn_multiplication.onclick = function(){
		num1=document.getElementById("textField").value;
		document.getElementById("textField").value="";
		op="*";
};
btn_division.onclick = function(){
		num1=document.getElementById("textField").value;
		document.getElementById("textField").value="";
		op="/";
};
btn_subtraction.onclick = function(){
		num1=document.getElementById("textField").value;
		document.getElementById("textField").value="";
		op="-";
};
btn_clear.onclick = function(){
		document.getElementById("textField").value="";
};

btn_equal.onclick =function(){
	var num2 = document.getElementById("textField").value;
	isEqual=true;
	if(op=="+"){
		var res = parseFloat(num1)+parseFloat(num2);
		document.getElementById("textField").value=res;
	}
	else if(op=="-"){
		var res = parseFloat(num1)-parseFloat(num2);
		document.getElementById("textField").value=res;
		res=true;
	}
	else if(op=="*"){
		var res = parseFloat(num1)*parseFloat(num2);
		document.getElementById("textField").value=res;
		res=true;
	}
	else if(op=="/"){
		var res = parseFloat(num1)/parseFloat(num2);
		document.getElementById("textField").value=res;
		res=true;
	}
};


