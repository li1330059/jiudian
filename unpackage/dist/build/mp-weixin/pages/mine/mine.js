(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/mine"],{"08a1":function(o,n,e){"use strict";e.r(n);var t=e("0bbd"),a=e("9e09");for(var s in a)["default"].indexOf(s)<0&&function(o){e.d(n,o,(function(){return a[o]}))}(s);e("ec0d");var i=e("f0c5"),r=Object(i["a"])(a["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],void 0);n["default"]=r.exports},"0bbd":function(o,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return t}));var t={neilModal:function(){return e.e("components/neil-modal/neil-modal").then(e.bind(null,"5247"))}},a=function(){var o=this.$createElement;this._self._c},s=[]},4364:function(o,n,e){"use strict";(function(o,n){var t=e("4ea4");e("cdf0");t(e("66fd"));var a=t(e("08a1"));o.__webpack_require_UNI_MP_PLUGIN__=e,n(a.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},"656e":function(o,n,e){},"80cb":function(o,n,e){"use strict";(function(o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{username:"",bInfo:[],logoInfo:[],userInfo:[],screenHeight:0,show:!1,orderInfo:[],qd:0,xxh:"",czz:"",qian:"",arr:[]}},components:{ProgressBar:function(){e.e("components/Progress-Bar").then(function(){return resolve(e("0871"))}.bind(null,e)).catch(e.oe)},neilModal:function(){e.e("components/neil-modal/neil-modal").then(function(){return resolve(e("5247"))}.bind(null,e)).catch(e.oe)}},onLoad:function(){this.screenHeight=o.getSystemInfoSync().windowHeight},onShow:function(){console.log(o.getStorageSync("token")),""==o.getStorageSync("token")&&o.navigateTo({url:"/pages/login/login"}),""!=o.getStorageSync("token")&&this.uu()},methods:{kq:function(){o.navigateTo({url:"/pages/kyy/kyy"})},uu:function(){var n=this;console.log("uu"),o.request({method:"POST",url:this.apiUrl+"index.php/index/find_user_user_name",data:JSON.stringify({user_name:o.getStorageSync("openid")}),success:function(o){console.log("tou"),console.log(o),n.userInfo=o.data,console.log(n.userInfo),n.xxh="雪花数量："+n.userInfo.xh,console.log(n.xxh),n.qd=n.userInfo.qd,n.czz=n.userInfo.czz/2500,console.log("czz"),console.log(n.czz),null!=o.data.avatar&&""!=o.data.avatar||(console.log("微信头像"),n.userInfo.avatar=n.apiUrl+"static/img/tou.png")}})},clickRight:function(){console.log("确定00000"),2==this.orderInfo.dd&&o.request({method:"POST",url:this.apiUrl+"index.php/index/jdhx",data:JSON.stringify({ddhao:this.orderInfo.ddhao}),success:function(n){console.log("ioop"),console.log(n),1==n.data.status&&o.showToast({title:n.data.data}),-1==n.data.status&&o.showToast({icon:"error",title:n.data.data})}}),1!=this.orderInfo.dd&&3!=this.orderInfo.dd||o.request({method:"POST",url:this.apiUrl+"index.php/index/pwhx",data:JSON.stringify({ddhao:this.orderInfo.ddhao}),success:function(n){console.log("票"),console.log(n),1==n.data.status&&o.showToast({title:n.data.data}),-1==n.data.status&&o.showToast({icon:"error",title:n.data.data})}}),0==this.orderInfo.dd&&o.request({method:"POST",url:this.apiUrl+"index.php/index/tchx",data:JSON.stringify({ddhao:this.orderInfo.ddhao,xm:this.orderInfo.tclxname}),success:function(n){console.log("ioop"),console.log(n),1==n.data.status&&o.showToast({title:n.data.data}),-1==n.data.status&&o.showToast({icon:"error",title:n.data.data})}})},xhh:function(){o.showModal({title:"提示",content:this.xxh,success:function(o){o.confirm?console.log("用户点击确定"):o.cancel&&console.log("用户点击取消")}})},yyh:function(){o.navigateTo({url:"/pages/yhui/yhui"})},bf:function(n){o.navigateTo({url:"/pages/bff/bff?type="+n})},onChooseAvatar:function(n){var e=this;this.userInfo.avatar=n.detail.avatarUrl,console.log(this.userInfo.avatar),o.request({method:"POST",url:this.apiUrl+"index.php/index/uptx",data:JSON.stringify({avatar:this.userInfo.avatar,user_name:o.getStorageSync("openid")}),success:function(n){o.setStorageSync("avatar",e.userInfo.avatar),console.log(n)}})},qdd:function(){var n=this;o.request({method:"POST",url:this.apiUrl+"index.php/index/qd",data:JSON.stringify({user_name:o.getStorageSync("openid")}),success:function(e){console.log(e),o.showToast({icon:"none",title:e.data.data}),n.uu()}})},scan:function(){var n=this;o.scanCode({success:function(e){console.log("条码类型："+e.scanType),console.log("条码内容："+e.result),n.qian=e.result.substring(0,4),console.log(n.qian),"pwdd"==n.qian||"sddd"==n.qian?o.request({method:"POST",url:n.apiUrl+"index.php/index/ddxqddh2",data:JSON.stringify({ddhao:e.result}),success:function(o){console.log("pwwwwww"),console.log(o),n.show=!0,console.log("扫码222"),console.log(o),n.orderInfo=o.data}}):"tcdd"==n.qian?(console.log("aaa"),console.log(n.qian),n.arr=e.result.split(","),console.log("arr"),console.log(n.arr,"asdasdasdasd"),o.request({method:"POST",url:n.apiUrl+"index.php/index/ddxqddh2",data:JSON.stringify({ddhao:n.arr[0]}),success:function(o){console.log("tcccccccccc"),console.log(o),n.show=!0,console.log("扫码222"),console.log(o),n.orderInfo=o.data,n.orderInfo.tclxname=n.arr[1]}})):o.request({method:"POST",url:n.apiUrl+"index.php/index/ddxqddh",data:JSON.stringify({ddhao:e.result}),success:function(e){console.log("酒"),console.log(e),n.userInfo.jdgl!=e.data.jdId&&(n.show=!1,o.showToast({title:"不是本店二维码"})),n.userInfo.jdgl==e.data.jdId&&(n.show=!0,console.log("扫码222"),console.log(e),n.orderInfo=e.data)}})}})},closeModal:function(){console.log("关"),this.show=!1},order:function(n){o.navigateTo({url:"/pages/myOrder/myOrder?type="+n})},bback:function(){o.switchTab({url:"/pages/index/index"})},yhhm:function(n){console.log("yhm"),this.ni=n.detail.value,this.userInfo.yhm=n.detail.value,console.log(this.userInfo.yhm),o.setStorageSync("yhm",this.userInfo.yhm),o.request({method:"POST",url:this.apiUrl+"index.php/index/upyhm",data:JSON.stringify({yhm:this.ni,user_name:o.getStorageSync("openid")}),success:function(o){console.log(o)}})},logout:function(){try{o.clearStorageSync(),o.navigateTo({url:"/pages/login/login"})}catch(n){}}}};n.default=t}).call(this,e("543d")["default"])},"9e09":function(o,n,e){"use strict";e.r(n);var t=e("80cb"),a=e.n(t);for(var s in t)["default"].indexOf(s)<0&&function(o){e.d(n,o,(function(){return t[o]}))}(s);n["default"]=a.a},ec0d:function(o,n,e){"use strict";var t=e("656e"),a=e.n(t);a.a}},[["4364","common/runtime","common/vendor"]]]);