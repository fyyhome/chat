(function(t){function e(e){for(var i,a,r=e[0],c=e[1],u=e[2],l=0,m=[];l<r.length;l++)a=r[l],o[a]&&m.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,a=1;a<n.length;a++){var r=n[a];0!==o[r]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},o={app:0},s=[];function r(t){return c.p+"js/"+({"lazy-loaded-component":"lazy-loaded-component"}[t]||t)+"."+{"lazy-loaded-component":"9c829561"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"lazy-loaded-component":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var i="css/"+({"lazy-loaded-component":"lazy-loaded-component"}[t]||t)+"."+{"lazy-loaded-component":"6befeb0e"}[t]+".css",a=c.p+i,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var r=o[s],u=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(u===i||u===a))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){r=l[s],u=r.getAttribute("data-href");if(u===i||u===a)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var i=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.request=i,n(o)},m.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(m)}).then(function(){a[t]=0}));var i=o[t];if(0!==i)if(i)e.push(i[2]);else{var s=new Promise(function(e,n){i=o[t]=[e,n]});e.push(i[2]=s);var u,l=document.getElementsByTagName("head")[0],m=document.createElement("script");m.charset="utf-8",m.timeout=120,c.nc&&m.setAttribute("nonce",c.nc),m.src=r(t),u=function(e){m.onerror=m.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+i+": "+a+")");s.type=i,s.request=a,n[1](s)}o[t]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:m})},12e4);m.onerror=m.onload=u,l.appendChild(m)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var m=0;m<u.length;m++)e(u[m]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01bc":function(t,e,n){t.exports=n.p+"img/boy.3113b355.png"},"034f":function(t,e,n){"use strict";var i=n("c21b"),a=n.n(i);a.a},"14ea":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABeCAYAAADG1PFrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QjM3MTlEQzlCQTkxMUU4OEE4QkI3MDIxQkVENDc1MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QjM3MTlERDlCQTkxMUU4OEE4QkI3MDIxQkVENDc1MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdCMzcxOURBOUJBOTExRTg4QThCQjcwMjFCRUQ0NzUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdCMzcxOURCOUJBOTExRTg4QThCQjcwMjFCRUQ0NzUxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LZd3OwAACrpJREFUeNrsXWuMVdUV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"},"1b77":function(t,e,n){"use strict";var i=n("fe85"),a=n.n(i);a.a},2459:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tip-wrap"},[t._v("\n  "+t._s(t.title)+"\n")])},a=[],o=(n("cadf"),n("551c"),n("097d"),{props:["title"]}),s=o,r=(n("612b"),n("2877")),c=Object(r["a"])(s,i,a,!1,null,"08b21f25",null);c.options.__file="Tip.vue";e["a"]=c.exports},"407d":function(t,e,n){},"4df4":function(t,e,n){"use strict";var i=n("407d"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=(n("034f"),n("2877")),r={},c=Object(s["a"])(r,a,o,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,l=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:!(t.matching||t.nonum||t.allnum)&&t.count<8,expression:"!(matching || nonum || allnum) && count < 8"}],staticClass:"containner index-bg"},[n("sex-table",{directives:[{name:"show",rawName:"v-show",value:t.isFirstLogin,expression:"isFirstLogin"}],on:{"select-sex":function(e){t.getSex(e)}}}),n("button",{staticClass:"btn-text",on:{click:function(e){t.match()}}},[t._v("开始匿名聊天")]),n("p",{staticClass:"btn-bottom"},[t._v("剩余聊天次数: "+t._s(t.myCount))])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.matching,expression:"matching"}],staticClass:"containner match-bg"},[n("div",{staticClass:"matching-wrap"},[n("div",{staticClass:"headimg-wrap"},[n("img",{attrs:{src:t.avatar,alt:""}})]),t._m(0),t._m(1)]),n("p",[t._v("多次收获好评有机会获得无限次数匹配机会～")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.nonum||t.count<=0,expression:"nonum || count <= 0"}],staticClass:"containner match-nonum"},[n("button",{staticClass:"nonum-bt",attrs:{disabled:""}},[t._v("匹配次数已用完")]),n("p",[t._v("下次活动再见～遇见佳缘2.0等你")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.matching&&t.count>7,expression:"!matching && count > 7"}],staticClass:"containner match-allnum"},[n("button",{staticClass:"nonum-bt allnum-bt",on:{click:function(e){t.match()}}},[t._v("无限次数匹配")]),n("p",[t._v("获得多次好评有机会无限匹配～")])]),n("tip",{directives:[{name:"show",rawName:"v-show",value:""!=t.tipTitle,expression:"tipTitle != ''"}],attrs:{title:t.tipTitle}})],1)},p=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{attrs:{src:n("14ea"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headimg-wrap match-friend"},[n("img",{attrs:{src:"",alt:""}})])}],d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],staticClass:"mask"},[i("div",{staticClass:"containner-wrap"},[t._m(0),i("div",{staticClass:"sex-wrap"},[i("img",{class:{selected:"女"===t.sex},attrs:{id:"girl",src:n("abb0"),alt:"girl"},on:{click:function(e){t.setSex("女")}}}),i("img",{class:{selected:"男"===t.sex},attrs:{id:"boy",src:n("01bc"),alt:"boy"},on:{click:function(e){t.setSex("男")}}})]),i("div",{staticClass:"bt-wrap"},[i("button",{on:{click:function(e){t.throwSex()}}},[t._v("确定")])])])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-wrap"},[n("p",[t._v("选择性别 (优先男女匹配)")])])}],h={data:function(){return{sex:"女",status:!0}},methods:{setSex:function(t){this.sex=t},throwSex:function(){this.$emit("select-sex",this.sex),this.status=!1}}},v=h,g=(n("4df4"),Object(s["a"])(v,d,f,!1,null,"53f90983",null));g.options.__file="SexTable.vue";var b=g.exports,x=n("20a4"),w=n.n(x),y=n("2f62");i["a"].use(y["a"]);var T=new y["a"].Store({state:{count:null,chatID:null,avatar:"",mySex:null,friendSex:null,avatarArr:[{boy:"https://img5.duitang.com/uploads/item/201503/22/20150322065334_4NmAR.jpeg",girl:"https://img4q.duitang.com/uploads/item/201503/22/20150322065402_eLx3K.jpeg"},{boy:"https://img3.duitang.com/uploads/item/201508/15/20150815095648_EWxX5.jpeg",girl:"https://img5.duitang.com/uploads/item/201508/15/20150815095636_P4SiJ.thumb.700_0.jpeg"}],token:"",isLogin:!1,title:""},mutations:{descrement:function(t){t.count>0?t.count--:t.count=0},setCount:function(t,e){t.count=e},setToken:function(t,e){t.token=e},setChatID:function(t,e){t.chatID=e},setAvatar:function(t,e){t.avatar=e},setMySex:function(t,e){t.mySex=e},setFriendSex:function(t,e){t.friendSex=e},setIsLogin:function(t,e){t.isLogin=e},setTitle:function(t,e){t.title=e}},getters:{getCount:function(t){return t.count},getToken:function(t){return t.token},getChatID:function(t){return t.chatID},getAvatar:function(t){return t.avatar},getMySex:function(t){return t.mySex},getFriendSex:function(t){return t.friendSex},getAvatarArr:function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t.avatarArr[e]}},getIsLogin:function(t){return t.isLogin},getTitle:function(t){return t.title}}}),A=T,k=(n("96cf"),n("3040")),C=n("bc3a"),S=n.n(C),Y=S.a.create({baseURL:"http://120.27.137.151:9976",timeout:8e3}),D=S.a.CancelToken,G=D.source();Y.interceptors.request.use(function(){var t=Object(k["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!A.state.isLogin){t.next=11;break}if(""===A.state.token){t.next=6;break}return e.headers.Authorization=A.state.token,t.abrupt("return",e);case 6:return e.cancelToken=G.token,B.push("/"),t.abrupt("return",e);case 9:t.next=18;break;case 11:if(-1!==e.url.indexOf("/login")){t.next=17;break}return e.cancelToken=G.token,B.push("/"),t.abrupt("return",e);case 17:return t.abrupt("return",e);case 18:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),function(t){return Promise.reject(t)});var W=Y,E=function(){return new Promise(function(t,e){w.a.isApp()?w.a.onAppReady(function(){A.commit("setToken",w.a.getData().user.token),t()}):e(new Error("Miracle 获取app的token失败"))})},j=function(){return new Promise(function(t,e){""===A.state.token?E().then(function(){W.get("http://api.ncuos.com/api/user/profile/index").then(function(e){A.commit("setAvatar",e.data.head_pic_url),t()}).catch(function(){e(new Error("获取app头像失败"))})}).catch(function(t){console.log(t+"")}):W.get("http://api.ncuos.com/api/user/profile/index").then(function(e){A.commit("setAvatar",e.data.head_pic_url),t()}).catch(function(){e(new Error("获取app头像失败"))})})},M=n("2459"),I=n("5118"),L={data:function(){return{sex:"",isFirstLogin:!1,count:this.$store.state.count,avatar:this.$store.state.avatar,matching:!1,nonum:!1,tipTitle:""}},components:{SexTable:b,Tip:M["a"]},methods:{getSex:function(t){var e=this;this.sex="男"===t?0:1,console.log(this.sex),this.$axios.get("/api/updategender?gender=".concat(this.sex)).then(function(t){0!==t.data.code?console.log("修改失败"):e.$store.commit("setMySex",e.sex)})},getUserInfo:function(){var t=this;this.$axios.get("/api/come").then(function(e){110===e.data.code?(t.isFirstLogin=!0,t.$store.commit("setCount",e.data.times),t.count=t.$store.state.count):0===e.data.code?(t.sex=e.data.gender,t.$store.commit("setMySex",t.sex),t.$store.commit("setCount",e.data.times),t.count=t.$store.state.count):(t.tipTitle="获取信息失败~",Object(I["setTimeout"])(function(){t.tipTitle=""},1500))})},match:function(){var t=this;this.count>0?(this.matching=!0,this.$axios.get("/api/match").then(function(e){0===e.data.code?(t.$store.commit("setChatID",e.data.chatId),t.$store.commit("descrement"),t.$store.commit("setFriendSex",e.data.objGender),t.$store.commit("setTit6le",e.data.title),t.matching=!1,t.$router.push("/chat")):(t.matching=!1,3===e.data.code&&(t.tipTitle="次数已用完",Object(I["setTimeout"])(function(){t.tipTitle=""},1500)))}).catch(function(e){t.matching=!1,t.tipTitle="未匹配到TA哦～",Object(I["setTimeout"])(function(){t.tipTitle=""},1500),console.log(e+"")})):this.nonum=!0},fetchRouterMsg:function(){var t=this;"pingjia"===this.$route.params.msg?(this.tipTitle="评价成功",Object(I["setTimeout"])(function(){t.tipTitle=""},1500)):this.tipTitle=""}},created:function(){this.getUserInfo(),this.fetchRouterMsg(),j().then().catch(function(t){console.log(t+"")})},watch:{$router:"fetchRouterMsg"},computed:{myCount:{get:function(){return this.$store.state.count},set:function(){this.count=this.$store.state.count}}}},R=L,N=(n("6ad6"),Object(s["a"])(R,m,p,!1,null,"1a2389e7",null));N.options.__file="index.vue";var z=N.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"wrap_box",style:{height:t.bodyHeight+"px"}},[t._m(0),n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("div",{staticClass:"wrap_center"},[n("div",{staticClass:"input1"},[n("div",{attrs:{id:"u_input"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"请输入学号"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),n("div",{staticClass:"input2"},[n("div",{attrs:{id:"p_input"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),n("p",{staticClass:"explain"},[t._v("登录密码为云家园的密码哦~")])]),t._m(1)])]),n("tip",{directives:[{name:"show",rawName:"v-show",value:""!=t.tipTitle,expression:"tipTitle != ''"}],attrs:{title:t.tipTitle}})],1)},Z=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap_top"},[i("img",{attrs:{src:n("e287"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap_bottom"},[n("button",{attrs:{type:"submit"}},[t._v("登录")])])}],U={data:function(){return{username:"",password:"",tipTitle:"",bodyHeight:""}},components:{Tip:M["a"]},methods:{onSubmit:function(){var t=this;this.$axios.post("api/login",{userId:this.username,password:this.password}).then(function(e){1===e.data.status?(t.$store.commit("setToken",e.data.token),t.$store.commit("setIsLogin",!0),t.$router.push("/index")):(t.tipTitle=e.data.message,setTimeout(function(){t.tipTitle=""},800))})},getHeight:function(){this.bodyHeight=document.documentElement.clientHeight,console.log(this.bodyHeight)}},created:function(){this.getHeight()}},P=U,J=(n("1b77"),Object(s["a"])(P,O,Z,!1,null,"da371c1c",null));J.options.__file="login.vue";var X=J.exports;i["a"].use(l["a"]);var B=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"login",component:X},{path:"/index",name:"index",component:z},{path:"/chat",name:"chat",component:function(){return n.e("lazy-loaded-component").then(n.bind(null,"ee79"))}}]});i["a"].use(y["a"]),i["a"].config.productionTip=!1,i["a"].prototype.$axios=W,new i["a"]({router:B,store:A,render:function(t){return t(u)}}).$mount("#app")},"612b":function(t,e,n){"use strict";var i=n("9a5e"),a=n.n(i);a.a},"6ad6":function(t,e,n){"use strict";var i=n("d959"),a=n.n(i);a.a},"9a5e":function(t,e,n){},abb0:function(t,e,n){t.exports=n.p+"img/girl.60abc9c1.png"},c21b:function(t,e,n){},d959:function(t,e,n){},e287:function(t,e,n){t.exports=n.p+"img/login_paint.c3249fb9.png"},fe85:function(t,e,n){}});
//# sourceMappingURL=app.c1ceb9e5.js.map