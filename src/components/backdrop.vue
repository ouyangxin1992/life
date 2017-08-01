<template>
  <div class="backdrop">
    <p class="logoIn">您还未登录</p>
    <div class="detrusion" v-on:click="pushOut">
        退出登录
    </div>
    <div class="aboutLogo">
      <p class="firs" v-on:click="goLogo">登录</p>
      <p v-on:click="newLogo">注册</p>
    </div>
</div>
</template>

<script>

  export default {
    name: 'backdrop',
    methods:{
        pushOut(){
          var logoIn=document.querySelector(".logoIn");
          logoIn.innerHTML="您还未登录";
          var aboutLogo=document.querySelector(".aboutLogo");
          aboutLogo.style.display="block";
          var detrusion=document.querySelector(".detrusion");
          detrusion.style.display="none";
        },
        goLogo(){
            var latent=document.querySelector(".latent");
            var app=document.querySelector("#app");
            latent.style.display="none";
            var dv0=document.createElement("div");
            dv0.className="dv0";
            app.appendChild(dv0);
            var dv1=document.createElement("div");
            dv1.className="dv1";
            dv1.style.height="100px";
            dv1.style.width="100%";
            dv1.style.display="flex";
            dv1.style.backgroundColor='white';
            var i=document.createElement("i");
            i.className="el-icon-arrow-left";
            i.style.display="inline-block";
            i.style.width="30px";
            i.style.height="30px";
            i.style.color="green";
            i.style.border="1px solid green";
            i.style.borderRadius="15px";
            i.style.lineHeight="30px";
            i.style.textAlign="center";
            i.style.marginTop="35px";
            i.style.marginLeft="10px";
            dv1.appendChild(i);
            i.onclick=function () {
              latent.style.display="block";
              dv0.style.display="none";
            };
            var img=document.createElement("img");
            img.src="../../static/img/logom.png";
            img.style.height="60px";
            img.style.marginTop="20px";
            img.style.marginLeft="20%";
            dv1.appendChild(img);
            var p=document.createElement("p");
            p.innerHTML="老用户登录";
            p.style.height="50px";
            p.style.lineHeight="50px";
            p.style.textAlign="center";
            p.style.fontSize="20px";
            p.style.color="green";
            dv0.appendChild(dv1);
            dv0.appendChild(p);
            var inp1=document.createElement("input");
          inp1.type="tel";
          inp1.placeholder="请输入手机号";
          inp1.required="required";
          inp1.style.width="90%";
          inp1.style.marginLeft="5%";
          inp1.style.height="50px";
          inp1.style.marginTop="20px";
          inp1.style.boxSizing="border-box";
          inp1.style.backgroundColor="transparent";
          inp1.style.border="0";
          inp1.style.borderBottom="1px solid grey";
          dv0.appendChild(inp1);
          var inp2=document.createElement("input");
          inp2.type="password";
          inp2.placeholder="请输入登录密码";
          inp2.required="required";
          inp2.style.width="90%";
          inp2.style.marginLeft="5%";
          inp2.style.height="50px";
          inp2.style.marginTop="10px";
          inp2.style.boxSizing="border-box";
          inp2.style.backgroundColor="transparent";
          inp2.style.border="0";
          inp2.style.borderBottom="1px solid grey";
          dv0.appendChild(inp2);
          var inp3=document.createElement("input");
          inp3.type="button";
          inp3.value="登录";
          inp3.required="required";
          inp3.style.width="60%";
          inp3.style.marginLeft="20%";
          inp3.style.height="30px";
          inp3.style.marginTop="20px";
          inp3.style.boxSizing="border-box";
          inp3.style.backgroundColor="green";
          inp3.style.border="0";
          inp3.style.color="white";
          inp3.style.borderRadius="20px";
          dv0.appendChild(inp3);
          inp3.onclick=function () {
             var tels=localStorage.getItem("tels");
             var keys=localStorage.getItem("keys");
             if(tels===inp1.value && keys===inp2.value){
               latent.style.display="block";
               dv0.style.display="none";
               var logoIn=document.querySelector(".logoIn");
               logoIn.innerHTML=localStorage.getItem("tels");
               var aboutLogo=document.querySelector(".aboutLogo");
               aboutLogo.style.display="none";
               var detrusion=document.querySelector(".detrusion");
               detrusion.style.display="block";
             }else{
               var divas=document.createElement("div");
               divas.style.width="50%";
               divas.style.height="50px";
               divas.style.backgroundColor="rgba(0,0,0,0.5)";
               divas.style.borderRadius="10px";
               divas.style.lineHeight="50px";
               divas.style.textAlign="center";
               divas.style.color="white";
               divas.style.position="absolute";
               divas.style.top="200px";
               divas.style.left="25%";
               divas.innerHTML="请输入正确信息";
               document.body.appendChild(divas);
               divas.onclick=function () {
                 divas.style.display="none";
               };
               return;
             }
          }
        },
        newLogo(){
        var latent=document.querySelector(".latent");
        var app=document.querySelector("#app");
        latent.style.display="none";
        var dv0=document.createElement("div");
        dv0.className="dv0";
        app.appendChild(dv0);
        var dv1=document.createElement("div");
        dv1.className="dv1";
        dv1.style.height="100px";
        dv1.style.width="100%";
        dv1.style.display="flex";
        dv1.style.backgroundColor='white';
        var i=document.createElement("i");
        i.className="el-icon-arrow-left";
        i.style.display="inline-block";
        i.style.width="30px";
        i.style.height="30px";
        i.style.color="green";
        i.style.border="1px solid green";
        i.style.borderRadius="15px";
        i.style.lineHeight="30px";
        i.style.textAlign="center";
        i.style.marginTop="35px";
        i.style.marginLeft="10px";
        dv1.appendChild(i);
          i.onclick=function () {
            latent.style.display="block";
            dv0.style.display="none";
          };
        var img=document.createElement("img");
        img.src="../../static/img/logom.png";
        img.style.height="60px";
        img.style.marginTop="20px";
        img.style.marginLeft="20%";
        dv1.appendChild(img);
        var p=document.createElement("p");
        p.innerHTML="新用户注册";
        p.style.height="50px";
        p.style.lineHeight="50px";
        p.style.textAlign="center";
        p.style.fontSize="20px";
        p.style.color="green";
        dv0.appendChild(dv1);
        dv0.appendChild(p);
        var inp1=document.createElement("input");
        inp1.type="tel";
        inp1.placeholder="请输入手机号";
        inp1.required="required";
        inp1.style.width="90%";
        inp1.style.marginLeft="5%";
        inp1.style.height="50px";
        inp1.style.marginTop="20px";
        inp1.style.boxSizing="border-box";
        inp1.style.backgroundColor="transparent";
        inp1.style.border="0";
        inp1.style.borderBottom="1px solid grey";
        dv0.appendChild(inp1);
        var inp2=document.createElement("input");
        inp2.type="password";
        inp2.placeholder="请设置密码";
        inp2.required="required";
        inp2.style.width="90%";
        inp2.style.marginLeft="5%";
        inp2.style.height="50px";
        inp2.style.marginTop="10px";
        inp2.style.boxSizing="border-box";
        inp2.style.backgroundColor="transparent";
        inp2.style.border="0";
        inp2.style.borderBottom="1px solid grey";
        dv0.appendChild(inp2);
        var inp4=document.createElement("input");
          inp4.type="password";
          inp4.placeholder="请输入手机验证码密码";
          inp4.required="required";
          inp4.style.width="90%";
          inp4.style.marginLeft="5%";
          inp4.style.height="50px";
          inp4.style.marginTop="10px";
          inp4.style.boxSizing="border-box";
          inp4.style.backgroundColor="transparent";
          inp4.style.border="0";
          inp4.style.borderBottom="1px solid grey";
          dv0.appendChild(inp4);
          var span=document.createElement("el-button");
          span.innerHTML="获取验证码";
          span.style.display="inline-block";
          span.style.width="30%";
          span.style.height="30px";
          span.style.color="green";
          span.style.border="1px solid green";
          span.style.borderRadius="15px";
          span.style.lineHeight="30px";
          span.style.textAlign="center";
          span.style.position="absolute"
          span.style.top="300px";
          span.style.right="5%";
          dv0.appendChild(span);
          var InterValObj; //timer变量，控制时间
          var count = 60; //间隔函数，1秒执行
          var curCount;//当前剩余秒数
          var code = ""; //验证码
          var codeLength = 6;//验证码长度
          span.onclick=function () {
            var tel=inp1.value;
            curCount = count;
            var reg=/[1][34578]\d{9}/;
            if(inp2.value && reg.test(tel)){
              //产生验证码
              for (var i = 0; i < codeLength; i++) {
                code += parseInt(Math.random() * 9).toString();
              }
              //设置button效果，开始计时
              this.setAttribute("disabled", "true");
              this.innerHTML="已发送（" + curCount + "s）";
              InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
              var dis=document.createElement("div");
              dis.style.width="50%";
              dis.style.height="50px";
              dis.style.backgroundColor="rgba(0,0,0,0.5)";
              dis.style.borderRadius="10px";
              dis.style.lineHeight="50px";
              dis.style.textAlign="center";
              dis.style.color="white";
              dis.style.position="absolute";
              dis.style.top="200px";
              dis.style.left="25%";
              dis.innerHTML=code;
              document.body.appendChild(dis);
              dis.onclick=function () {
                dis.style.display="none";
              }
            }else{
              var divs=document.createElement("div");
              divs.style.width="50%";
              divs.style.height="50px";
              divs.style.backgroundColor="rgba(0,0,0,0.5)";
              divs.style.borderRadius="10px";
              divs.style.lineHeight="50px";
              divs.style.textAlign="center";
              divs.style.color="white";
              divs.style.position="absolute";
              divs.style.top="200px";
              divs.style.left="25%";
              divs.innerHTML="信息有误";
              document.body.appendChild(divs);
              divs.onclick=function () {
                divs.style.display="none";
              }
            }
            //timer处理函数
            function SetRemainTime() {
              if (curCount == 0) {
                window.clearInterval(InterValObj);//停止计时器
                span.setAttribute("disabled", "true");//启用按钮
                span.innerHTML="重新发送";
                code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效
              }
              else {
                curCount--;
                span.innerHTML= curCount + "秒后重发";
              }
            }
          }
        var inp3=document.createElement("input");
        inp3.type="button";
        inp3.value="注册";
        inp3.required="required";
        inp3.style.width="60%";
        inp3.style.marginLeft="20%";
        inp3.style.height="30px";
        inp3.style.marginTop="20px";
        inp3.style.boxSizing="border-box";
        inp3.style.backgroundColor="green";
        inp3.style.border="0";
        inp3.style.color="white";
        inp3.style.borderRadius="20px";
        dv0.appendChild(inp3);
        inp3.onclick=function () {
            if(inp1.value && inp2.value && inp4.value){
              localStorage.setItem("tels",inp1.value);
              localStorage.setItem("keys",inp2.value);
              latent.style.display="block";
              dv0.style.display="none";
              var logoIn=document.querySelector(".logoIn");
              logoIn.innerHTML=localStorage.getItem("tels");
              var aboutLogo=document.querySelector(".aboutLogo");
              aboutLogo.style.display="none";
              var detrusion=document.querySelector(".detrusion");
              detrusion.style.display="block";
            }else{
              var diva=document.createElement("div");
              diva.style.width="50%";
              diva.style.height="50px";
              diva.style.backgroundColor="rgba(0,0,0,0.5)";
              diva.style.borderRadius="10px";
              diva.style.lineHeight="50px";
              diva.style.textAlign="center";
              diva.style.color="white";
              diva.style.position="absolute";
              diva.style.top="200px";
              diva.style.left="25%";
              diva.innerHTML="请填完整信息";
              document.body.appendChild(diva);
              diva.onclick=function () {
                diva.style.display="none";
              };
              return;
            }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .backdrop{
    width: 100%;
    height:10rem;
    background-image: url("../../static/img/bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center;
  }
  .logoIn{
    font-size: 16px;
    height: 4rem;
    line-height: 4rem;
    width: 50%;
    margin-left: 25%;
  }
  .detrusion{
    font-size: 16px;
    height: 3rem;
    line-height: 3rem;
    width: 50%;
    margin-left: 25%;
    color: red;
    display: none;
  }
  .aboutLogo{
    height: 3rem;
    color: #89BE48;
    display: flex;
    width: 50%;
    margin-left: 25%;
    border: 1px solid #89BE48;
    border-radius: 20px;
  }
  .aboutLogo p{
    width: 50%;
    text-align: center;
    font-size: 14px;
    height: 16px;
    margin-top: 7px;
  }
  .firs{
    border-right: 1px solid #333333;
  }
</style>
