(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lazy-loaded-component"],{1800:function(t,e,i){},"33eb":function(t,e,i){t.exports=i.p+"img/icon_like.e22003a9.png"},"36bd":function(t,e,i){"use strict";var s=i("4bf8"),a=i("77f1"),n=i("9def");t.exports=function(t){var e=s(this),i=n(e.length),r=arguments.length,o=a(r>1?arguments[1]:void 0,i),c=r>2?arguments[2]:void 0,l=void 0===c?i:a(c,i);while(l>o)e[o++]=t;return e}},"37e0":function(t,e,i){t.exports=i.p+"img/icon_hate.926d7e7f.png"},"3a8c":function(t,e,i){"use strict";var s=i("1800"),a=i.n(s);a.a},"42a5":function(t,e,i){"use strict";var s=i("dc1d"),a=i.n(s);a.a},"6c7b":function(t,e,i){var s=i("5ca1");s(s.P,"Array",{fill:i("36bd")}),i("9c6c")("fill")},dc1d:function(t,e,i){},ee79:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("canvas",{staticStyle:{border:"0"},attrs:{id:"myCanvas"}},[t._v("Your browser does not support the HTML5 canvas tag.\n    ")]),s("div",{staticClass:"container"},[s("div",{staticClass:"title"},[s("img",{attrs:{src:i("01bc"),alt:""}}),s("p",[t._v(t._s(t.question))])]),s("ul",t._l(t.msgs,function(e,i){return s("li",{key:i},[s("div",{class:["send"===e.type?"send-wrap":"recive-wrap"]},[s("img",{staticClass:"head-img",attrs:{src:"send"===e.type?t.myAvatar:t.friendAvatar,alt:"headImg"}}),s("div",{staticClass:"message-wrap"},[t._v(t._s(e.text))])])])})),s("div",{staticClass:"bt-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.msgText,expression:"msgText"}],attrs:{type:"text",name:"sendText"},domProps:{value:t.msgText},on:{input:function(e){e.target.composing||(t.msgText=e.target.value)}}}),s("button",{attrs:{id:"sendBT"},on:{click:function(e){t.sendMsg()}}},[t._v("发送")])])]),t.remainProgress.time<60&&t.remainProgress.time>=59?s("tip",{attrs:{title:"还剩一分钟哦!"}}):t._e(),t.remainProgress.time<=0?s("ping-jia",{attrs:{title:"聊天结束了啦，评价一下TA吧～"},on:{"pingjia-click":function(e){t.setPingJIa(e)}}}):t._e()],1)},a=[],n=(i("6c7b"),function(t,e){var i=t,s=i.width+i.width/4,a=0,n=8,r=5,o=-i.width/4,c=i.height+5,l=i.height+10,d=i.height/10800;e.time=l/(60*d);var h=s/r,g=h/2,u=g/2,v=i.getContext("2d");function m(){if(a-=2,l-=d,e.time=l/(60*d),!(l<0)){-1*a>=h&&(a=0),v.fillStyle="#ffecec",v.fillRect(0,0,i.width,i.height);var t=0,f=i.height/6;v.font="20px Georgia",v.fillStyle="#ccb8ba";for(var p=180,w=0;p>0;w++)t=w<3?i.width/2-30/devicePixelRatio:i.width/2-20/devicePixelRatio,v.fillText(p+"",t,f*w+15),p-=30;v.beginPath(),v.arc(i.width/2,i.height-5,5,0,2*Math.PI),v.fillStyle="#ff3636",v.fill(),v.beginPath();var x=c-l;v.moveTo(o-a,x);for(var b=0;b<r;b++){var y=b*h,k=y+o-a;v.quadraticCurveTo(k+u,x+n,k+g,x),v.quadraticCurveTo(k+u+g,x-n,k+h,x)}v.lineTo(o+s,i.height),v.lineTo(o,i.height),v.fillStyle="#94cdf0",v.fill(),requestAnimationFrame(m)}}console.log(i.height+"  "+i.width),m()}),r=i("2459"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip-containner"},[s("p",{staticClass:"title"},[t._v(t._s(t.title))]),s("div",[s("div",{staticClass:"avatar-wrap"},[s("img",{attrs:{id:"like",src:i("33eb"),alt:"like"},on:{click:function(e){t.pingJiaFn(0)}}}),s("span",[t._v("喜欢,还想聊")])]),s("div",{staticClass:"avatar-wrap"},[s("img",{attrs:{id:"dislike",src:i("37e0"),alt:"hate"},on:{click:function(e){t.pingJiaFn(1)}}}),s("span",[t._v("错过吧,告辞")])])])])},c=[],l=(i("cadf"),i("551c"),i("097d"),{props:["title"],methods:{pingJiaFn:function(t){this.$emit("pingjia-click",t)}}}),d=l,h=(i("3a8c"),i("2877")),g=Object(h["a"])(d,o,c,!1,null,"b6cd33f8",null);g.options.__file="pingjia.vue";var u=g.exports,v={data:function(){return{Ques:["有什么好玩的游戏推荐？","分享一部你最喜欢的电影","这个假期里你经历过什么有意思的事情？","分享一个你自己特有的小技能？","或许可以从你最喜欢的小动物开始聊","介绍介绍你喜欢用的小众app吧！","可以分享一下假期里有意义的事情吗？","夏天你有什么解暑续命大法？","也许可以从聊聊你们的专业开始","或许可以先来聊聊你们最近在看的书？","或许可以从聊喜欢的音乐开始","可以从最近在玩的游戏开始聊","或许可以聊聊你喜不喜欢现在的专业？"],question:"",message:"1.随机匹配 ，优先男女2.如遇违规,长按举报3.时间不定，喜欢抓紧4.多次好评，无限匹配5.随机奖励，加时续命",msgs:[],socket:null,msgText:"",remainProgress:{time:180},tipStatus:!1,pingjia:null,myAvatar:null,friendAvatar:null}},components:{Tip:r["a"],PingJia:u},methods:{getQ:function(){var t=Math.floor(Math.random()*this.Ques.length);this.question=this.Ques[t]},setPingJIa:function(t){var e=this;this.pingjia=t,this.$axios.post("/api/evaluate",{chatId:this.$store.state.chatId,evaluate:this.pingjia}).then(function(t){0===t.data.code?e.$router.push({name:"index",params:{msg:"pingjia"}}):console.log(t.data.msg)}).catch(function(t){console.log(t+"")})},initial:function(){var t=this;this.socket=new WebSocket("ws://120.27.137.151:9976/api/ws?token="+this.$store.state.token),this.socket.onopen=function(t){document.getElementById("sendBT").disabled=!1},this.socket.onmessage=function(e){var i=JSON.parse(e.data);t.msgs.push({text:i.msg,type:"recive"}),console.log(i)},this.socket.onerror=function(t){console.error(t),document.getElementById("sendBT").disabled=!0},this.socket.onclose=function(t){document.getElementById("sendBT").disabled=!0}},sendMsg:function(){""!==this.msgText&&(this.socket.send(this.msgText),this.msgs.push({text:this.msgText,type:"send"}),this.msgText="")},getAvatars:function(){var t=Math.floor(2*Math.random());0===this.$store.state.mySex?this.myAvatar=this.$store.getters.getAvatarArr(t).boy:this.myAvatar=this.$store.getters.getAvatarArr(t).girl,0===this.$store.state.friendSex?this.friendAvatar=this.$store.getters.getAvatarArr(t).boy:this.friendAvatar=this.$store.getters.getAvatarArr(t).girl}},watch:{remainProgress:{handler:function(t,e){t<0&&this.socket.close()},deep:!0}},created:function(){this.initial(),this.getQ(),this.getAvatars()},mounted:function(){var t=document.getElementById("myCanvas");t.width=window.screen.width,t.height=window.screen.height,n(t,this.remainProgress)}},m=v,f=(i("42a5"),Object(h["a"])(m,s,a,!1,null,"d3877c1e",null));f.options.__file="chat.vue";e["default"]=f.exports}}]);
//# sourceMappingURL=lazy-loaded-component.8d5dc883.js.map