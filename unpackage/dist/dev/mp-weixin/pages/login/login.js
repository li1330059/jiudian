(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{306:function(e,n,o){"use strict";(function(e,n){var t=o(4);o(26);t(o(25));var s=t(o(307));e.__webpack_require_UNI_MP_PLUGIN__=o,n(s.default)}).call(this,o(1)["default"],o(2)["createPage"])},307:function(e,n,o){"use strict";o.r(n);var t=o(308),s=o(310);for(var a in s)["default"].indexOf(a)<0&&function(e){o.d(n,e,(function(){return s[e]}))}(a);o(466);var r,c=o(32),i=Object(c["default"])(s["default"],t["render"],t["staticRenderFns"],!1,null,null,null,!1,t["components"],r);i.options.__file="pages/login/login.vue",n["default"]=i.exports},308:function(e,n,o){"use strict";o.r(n);var t=o(309);o.d(n,"render",(function(){return t["render"]})),o.d(n,"staticRenderFns",(function(){return t["staticRenderFns"]})),o.d(n,"recyclableRender",(function(){return t["recyclableRender"]})),o.d(n,"components",(function(){return t["components"]}))},309:function(e,n,o){"use strict";var t;o.r(n),o.d(n,"render",(function(){return s})),o.d(n,"staticRenderFns",(function(){return r})),o.d(n,"recyclableRender",(function(){return a})),o.d(n,"components",(function(){return t}));var s=function(){var e=this,n=e.$createElement;e._self._c},a=!1,r=[];s._withStripped=!0},310:function(e,n,o){"use strict";o.r(n);var t=o(311),s=o.n(t);for(var a in t)["default"].indexOf(a)<0&&function(e){o.d(n,e,(function(){return t[e]}))}(a);n["default"]=s.a},311:function(e,n,o){"use strict";(function(e){var t=o(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=t(o(312)),a={data:function(){return{avatarUrl:"/static/img/ddl.jpg",ni:"",yqm:"",code:"",pc:"",session_key:"",avatar:"https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0"}},onLoad:function(n){e.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]}),console.log("e"),console.log(n),this.yqm=decodeURIComponent(n.scene),console.log("yqqm"),console.log(this.yqm)},onShow:function(){},methods:{scan:function(){e.scanCode({success:function(n){decodeURIComponent(n.path);e.navigateTo({url:"/"+decodeURIComponent(n.path)})},fail:function(n){e.showToast({title:"扫码失败",icon:"error",duration:1e3})}})},onChooseAvatar:function(e){console.log(e),this.avatarUrl=e.detail.avatarUrl},login:function(){e.switchTab({url:"/pages/index/index"})},chang:function(e){this.ni=e.detail.value},loginn:function(){console.log("登录");var n=this;e.login({provider:"univerify",success:function(o){console.log("code"),console.log(o.code),n.code=o.code,e.request({url:n.apiUrl+"index/RequestHttp",method:"GET",data:{code:n.code},success:function(e){console.log("cts"),console.log(e),n.openId=e.data.openid,n.unionid=e.data.unionid,n.session_key=e.data.session_key,console.log("session_key"),console.log(n.session_key)}})}})},getphonenum:function(n){var o=this;console.log("ee"),console.log(n),console.log("session_key"),console.log(this.session_key);var t=this,a=e.getAccountInfoSync();console.log("accountInfo"),console.log(a);var r=a.miniProgram.appId;t.pc=new s.default(r,t.session_key),console.log("pc"),console.log(t.pc);var c=t.pc.decryptData(n.detail.encryptedData,n.detail.iv);console.log(c),console.log(c.phoneNumber),this.phoneNumber=c.phoneNumber,"undefined"==t.yqm?(console.log("unn"),e.request({method:"POST",url:t.apiUrl+"index/regist",data:JSON.stringify({user_name:this.openId,phone:this.phoneNumber}),header:{"Content-Type":"application/json; charset=utf-8"},success:function(n){console.log("ssave"),console.log(n,1111),e.setStorageSync("token",n.data.token),e.setStorageSync("code",n.data.code),e.setStorageSync("openid",n.data.user_name),e.request({method:"POST",url:o.apiUrl+"index/find_user_user_name",data:JSON.stringify({user_name:e.getStorageSync("openid")}),success:function(n){console.log("tou"),console.log(n),o.userInfo=n.data,console.log("微信头像"),""!=o.userInfo.avatar||void 0!=o.userInfo.avatar?(o.avatar=o.userInfo.avatar,e.setStorageSync("avatar",o.avatar)):e.setStorageSync("avatar",o.avatar)}}),e.showToast({title:"登录成功",duration:2e3}),e.switchTab({url:"/pages/index/index"})}})):e.request({method:"POST",url:t.apiUrl+"index/regist",data:JSON.stringify({user_name:this.phoneNumber}),header:{"Content-Type":"application/json; charset=utf-8"},success:function(n){console.log("ssave"),console.log(n,1111),e.setStorageSync("token",n.data.token),e.setStorageSync("openid",o.phoneNumber),e.setStorageSync("phone",o.phoneNumber),e.showToast({title:"登录成功",duration:2e3}),e.switchTab({url:"/pages/index/index"})}}),e.getUserInfo({provider:"weixin",success:function(e){t.userInfo=e.userInfo,console.log("uuf"),console.log(t.userInfo)},fail:function(n){e.showToast({title:"登录授权失败",icon:"none"})}}),console.log(n)}}};n.default=a}).call(this,o(2)["default"])},466:function(e,n,o){"use strict";o.r(n);var t=o(467),s=o.n(t);for(var a in t)["default"].indexOf(a)<0&&function(e){o.d(n,e,(function(){return t[e]}))}(a);n["default"]=s.a},467:function(e,n,o){}},[[306,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map