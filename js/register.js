function getLength(str){
    return str.replace(/[^\x00-xff]/g,"xx").length;  //\x00-xff 此区间是单子节 ，除了此区间都是双字节。
}
function findStr(str,n){
    var tmp=0;
    for(var i=0;i<str.length;i++){
        if(str.charAt(i)==n){
            tmp++;
        }
    }
    return tmp;
}

// var oName=document.getElementById('telephone');
// var dx=document.getElementById('verificationCode');
// var pwd=document.getElementById('passwordReg');
// var pwd2=document.getElementById('passwordRegConfirm');

// var name_msg=document.getElementById('err_msg');
// var dx_msg=document.getElementById('err_msg');
// var pwd_msg=document.getElementById('err_msg');
// var pwd2_msg=document.getElementById('err_msg');
// var name_length=0;

var send=document.getElementById('send'),
	
	times=60,
	timer=null;
	send.onclick=function(e){      
	    // 计时开始 
		timer = setInterval(djs,1000);
		e.stopPropagation();
	} 
	function djs(){
		send.value = times+"秒后重试";
		send.setAttribute('disabled','disabled');
		send.style.background='#ccc';
		send.style.border='1px solid #ccc';
		times--;
		if(times <= 0){
			send.value = "发送验证码";
			send.removeAttribute('disabled');
			send.style.background='#79b235';
			send.style.border='1px solid #79b235';
			times = 60;
			clearInterval(timer);
		}
	}


//用户名检测
// oName.onfocus=function(e){
// 	name_msg.style.display='block';
// 	oName.removeAttribute("placeholder");
// 	oName.style.border='1px solid #fff';
// 	e.stopPropagation();
// }
// oName.onblur=function(e){
// 	// 含有非法字符 ，不能为空 ，长度少于5个字符 ，长度大于25个字符
// 	var tel = /^1[3|4|5|7|8][0-9]\d{8}$/;
// 	if(!tel.test(this.value)){
// 		name_msg.innerHTML='<i>手机号不正确</i>';
// 		oName.style.border='1px solid red';
// 	}
// 	else{
// 		oName.style.border='1px solid #fff';
// 	}
// 	e.stopPropagation();
// }

//短信验证码检测
// dx.onfocus=function(e){
// 	dx_msg.style.display='block';
// 	dx.removeAttribute("placeholder");
// 	dx.style.border='1px solid #fff';
// 	e.stopPropagation();
// }

//密码检测
// pwd.onfocus=function(e){
// 	pwd_msg.style.display='block';
// 	pwd.removeAttribute("placeholder");
// 	pwd.style.border='1px solid #fff';
//  e.stopPropagation();
// }
// pwd.onblur=function(e){
// 	var m=findStr(pwd.value,pwd.value[0]);
// 	var re_n=/[^\d]/g;
// 	var re_t=/[^a-zA-Z]/g;
// 	if(this.value==""){
// 		pwd_msg.innerHTML='<i>密码不可为空</i>';
// 		pwd.style.border='1px solid red';
// 	}else if(m==this.value.length){
// 		pwd_msg.innerHTML='<i>密码不可使用相同的字符</i>';
// 		pwd.style.border='1px solid red';
// 	}else if(this.value.length<6 || this.value.length>16){
// 		pwd_msg.innerHTML='<i>密码长度应为6到16个字符</i>';
// 		pwd.style.border='1px solid red';
// 	}else if(!re_n.test(this.value)){
// 		pwd_msg.innerHTML='<i>密码不能全为数字</i>';
// 		pwd.style.border='1px solid red';
// 	}else if(!re_t.test(this.value)){
// 		pwd_msg.innerHTML='<i>密码不能全为字母</i>';
// 		pwd.style.border='1px solid red';
// 	}else{
// 		pwd.style.border='1px solid #fff';
// 	}
//  e.stopPropagation();
// }

//确认密码
// pwd2.onblur=function(e){
// 	if(this.value!=pwd.value){
// 		pwd2_msg.innerHTML='<i></i>两次密码输入到不一致';
// 		pwd.style.border='1px solid red';
// 	}else if(this.value==""){
// 		pwd2_msg.innerHTML='<i></i>请输入密码';
// 		pwd.style.border='1px solid red';
// 	}else{
// 		pwd2.style.border='1px solid #fff';
// 	}
//  e.stopPropagation();
// }







































