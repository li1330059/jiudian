(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pwqrorder/pwqrorder"],{244:function(e,t,n){"use strict";(function(e,t){var o=n(4);n(26);o(n(25));var i=o(n(245));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n(1)["default"],n(2)["createPage"])},245:function(e,t,n){"use strict";n.r(t);var o=n(246),i=n(248);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n(250);var c,s=n(32),a=Object(s["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],c);a.options.__file="pages/pwqrorder/pwqrorder.vue",t["default"]=a.exports},246:function(e,t,n){"use strict";n.r(t);var o=n(247);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},247:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return c})),n.d(t,"recyclableRender",(function(){return r})),n.d(t,"components",(function(){return o}));try{o={wTimePicker:function(){return n.e("components/w-time-picker/w-time-picker").then(n.bind(null,565))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,t=e.$createElement;e._self._c},r=!1,c=[];i._withStripped=!0},248:function(e,t,n){"use strict";n.r(t);var o=n(249),i=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},249:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){n.e("components/w-time-picker/w-time-picker").then(function(){return resolve(n(565))}.bind(null,n)).catch(n.oe)},i={components:{wTimePicker:o},data:function(){return{screenHeight:0,tcid:0,tclxid:0,liverName:"",IdCard:"",phone:"",lxrName:"",lxrPhone:"",idd:"",beforeDate:"",afterDate:"",tclxs:[],num:1,allPrice:"",syrq:"",tcName:"",ddhao:"",iddd:""}},onLoad:function(t){console.log("optn"),console.log(t),this.tcid=t.tcid,this.tclxid=t.tclxid,this.tcName=t.title,this.screenHeight=e.getSystemInfoSync().windowHeight},onShow:function(){var t=this;e.request({method:"POST",url:this.oldApiUrl+"index/pwtcxq",data:JSON.stringify({id:this.tclxid}),success:function(e){console.log("套餐类型"),console.log(e),t.tclxs=e.data,t.getAllPrice()}})},methods:{bback:function(){e.navigateBack(-1)},onConfirm:function(e){console.log("选择时间"),console.log(e)},onCancel:function(){},rq:function(e){this.syrq=e,console.log("日期"),console.log(e)},aad:function(){this.num++,this.getAllPrice()},reduce:function(){this.num>1&&this.num--,this.getAllPrice()},getAllPrice:function(){this.allPrice=this.tclxs.dj*this.num},yud:function(){var t=this,n=/^1[3456789]\d{9}/;""!=this.liverName?n.test(this.lxrPhone)?""!=this.liverName&&n.test(this.lxrPhone)&&e.request({method:"POST",url:this.oldApiUrl+"index/tcdd",data:JSON.stringify({user_name:e.getStorageSync("openid"),syrq:this.syrq,num:this.num,tclxname:this.tclxs.title,cxr:this.liverName,tcName:this.tcName,lxrName:this.lxrName,lxrPhone:this.lxrPhone,yhqId:0,tcId:this.tcid,tclxid:this.tclxid,dd:1}),success:function(n){console.log("提交票务订单"),console.log(n.data),t.ddhao=n.data.ddhao,1==n.data.status&&(e.showToast({title:n.data.data}),e.request({method:"POST",url:t.oldApiUrl+"index/ddxqddh2",data:JSON.stringify({ddhao:t.ddhao}),success:function(n){console.log(n),t.iddd=n.data.id,e.request({method:"POST",url:t.oldApiUrl+"Wx/config",data:JSON.stringify({id:t.iddd,openid:e.getStorageSync("openid"),dd:1}),success:function(t){console.log("支"),console.log(t),e.requestPayment({provider:"wxpay",timeStamp:t.data.timeStamp.toString(),nonceStr:t.data.nonce,package:t.data.package,signType:t.data.signType,paySign:t.data.sign,success:function(t){console.log("res"),console.log(t),e.showToast({icon:"success",title:"支付成功"}),console.log("支付成功",t)},fail:function(t){console.log("err"),console.log(t),this.err=t,e.showToast({icon:"error",title:"失败"}),this.err=!0}})}})}}))}}):e.showToast({icon:"none",title:"手机号码有误"}):e.showToast({icon:"none",title:"请填写出行人姓名"})}}};t.default=i}).call(this,n(2)["default"])},250:function(e,t,n){"use strict";n.r(t);var o=n(251),i=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},251:function(e,t,n){}},[[244,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pwqrorder/pwqrorder.js.map