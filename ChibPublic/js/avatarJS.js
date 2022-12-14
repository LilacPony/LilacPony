// JavaScript Document

console.log("BOOYAH FUCKERS");

var avatar={base:"", eyes:"", ears:"", talon:"", mark1:"", mark2:"", acc1:"", acc2:"", acc3:"", acc4:"", name:""}

function setBase(base){
	avatar.base=base;
	console.log(avatar.base);
	colouringBook();
}

function setEyes(eyes){
	avatar.eyes=eyes;
	console.log(avatar.eyes);
	colouringBook();
}

function setEars(ears){
	avatar.ears=ears;
	console.log(avatar.ears);
	colouringBook();
}

function setTalon(talon){
	avatar.talon=talon;
	console.log(avatar.talon);
	colouringBook();
}

function setMark1(mark1){
	avatar.mark1=mark1;
	console.log(avatar.mark1);
	colouringBook();
}

function setMark2(mark2){
	avatar.mark2=mark2;
	console.log(avatar.mark2);
	colouringBook();
}

function setAcc1(acc1){
	avatar.acc1=acc1;
	console.log(avatar.acc1);
	colouringBook();
}

function setAcc2(acc2){
	avatar.acc2=acc2;
	console.log(avatar.acc2);
	colouringBook();
}

function setAcc3(acc3){
	avatar.acc3=acc3;
	console.log(avatar.acc3);
	colouringBook();
}

function setAcc4(acc4){
	avatar.acc4=acc4;
	console.log(avatar.acc4);
	colouringBook();
}

function setName(name){
	var name = document.getElementById('name').value;
	avatar.name=name;
	console.log(avatar.name);
	colouringBook();
}

function colouringBook(){
	if(avatar.base!=""){
	   document.getElementById('base').innerHTML="<img src='images/"+avatar.base+"' alt='base'>";
	   }
	
	if(avatar.eyes!=""){
	   document.getElementById('eyes').innerHTML="<img src='images/"+avatar.eyes+"' alt='eyes'>";
	   }
	
	if(avatar.ears!=""){
	   document.getElementById('ears').innerHTML="<img src='images/"+avatar.ears+"' alt='ears'>";
	   }
	
	if(avatar.talon!=""){
	   document.getElementById('talon').innerHTML="<img src='images/"+avatar.talon+"' alt='talon'>";
	   }
	
	if(avatar.mark1!=""){
	   document.getElementById('mark1').innerHTML="<img src='images/"+avatar.mark1+"' alt='mark1'>";
	   }
	
	if(avatar.mark2!=""){
	   document.getElementById('mark2').innerHTML="<img src='images/"+avatar.mark2+"' alt='mark2'>";
	   }
	
	if(avatar.acc1!=""){
	   document.getElementById('acc1').innerHTML="<img src='images/"+avatar.acc1+"' alt='acc1'>";
	   }
	
	if(avatar.acc2!=""){
	   document.getElementById('acc2').innerHTML="<img src='images/"+avatar.acc2+"' alt='acc2'>";
	   }
	
	if(avatar.acc3!=""){
	   document.getElementById('acc3').innerHTML="<img src='images/"+avatar.acc3+"' alt='acc3'>";
	   }
	
	if(avatar.acc4!=""){
	   document.getElementById('acc4').innerHTML="<img src='images/"+avatar.acc4+"' alt='acc4'>";
	   }
	
	if(avatar.name!=""){
  		document.getElementById('named').innerHTML="<h3><b>Meet "+avatar.name+"!</b></h3>";
		}
	else {
  		document.getElementById('named').innerHTML="<h3><b>Result</b></h3>";
		}
}