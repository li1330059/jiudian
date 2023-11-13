<template>
	<view class="qrr" :style="{ height: screenHeight }">
		<view class="hdd">
				<view @click="bback">
					<image style="width: 40rpx; height: 40rpx; margin-top: 60rpx; margin-left: 20rpx;  " src="../../static/img/arrow-left-bold.png"></image>
				</view>
				<view style="font-size: 34rpx; margin-left: 240rpx; font-weight: bold;">确认订单</view>					
		</view>	
		<view class="qbody">
			<view class="qToo">
				<image style="width: 345rpx; height: 237rpx; border-radius: 20rpx;" :src="sds.tp"></image>
				<view style="margin-left: 20rpx;  width: 280rpx;">
					<view style="font-weight: bold;">{{sds.title}}</view>
					<view style="font-size: 24rpx; color: #868686; margin-top: 20rpx;">{{sds.value}}</view>
					<view class="price_num">
						<view class="spjine">
							￥<span style="font-size: 32rpx;">{{sds.dj}}</span>
						</view>
						<view class="numOpt">
							
							<view style="display: flex;">
								
									<view class="opt" style="margin-top: 5rpx;" @click="reduce(index)">-</view> 
							
								
								<view class="ipt"><input v-model="num" disabled="true" /></view>					
							</view>
							
					
							<view class="opt" @click="aad(index)">+</view>						
						</view>
					</view>
				</view>
			</view>
			<view class="qTop">
				<w-time-picker ref="picker" @rq="rq" @confirm="onConfirm" @cancel="onCancel"  :afterDays="20" :step="30"></w-time-picker>	
			</view>
			<view class="qpart2">
				<!-- <view style="border-bottom: 2rpx solid #eeeeee; font-weight: bold; padding-bottom: 32rpx;">入住信息</view> -->
			<!-- 	<view class="qrow">
					<view style="color: #858585; width: 150rpx;">房间数量</view>
					<view style="margin-left: 40rpx;">1间</view>
				</view> -->
		<!-- 		<view class="qrow">
					<view style="color: #858585; width: 180rpx;">出行人姓名</view>
					<view style="margin-left: 40rpx;">
						<input  placeholder="请写入住客姓名" v-model="liverName" />
					</view>
				</view> -->
			<!-- 	<view class="qrow">
					<view style="color: #858585; width: 150rpx;">身份证</view>
					<view style="margin-left: 40rpx;">
						<input  placeholder="请写入住客的证件号码" v-model="IdCard" />
					</view>
				</view> -->
			<!-- 	<view class="qrow">
					<view style="color: #858585; width: 150rpx;">手机号</view>
					<view style="margin-left:40rpx;">
						<input  placeholder="请写入住客的手机号" v-model="phone" />
					</view>
				</view> -->
				<view class="qrow">
					<view style="color: #858585; width: 180rpx;">联系人姓名</view>
					<view style="margin-left: 40rpx;">
						<input  placeholder="请写入联系人姓名" v-model="lxrName" />
					</view>
				</view>
				<view class="qrow">
					<view style="color: #858585; width: 180rpx;">联系人手机号</view>
					<view style="margin-left: 40rpx;">
						<input  placeholder="请写入联系人手机号" v-model="lxrPhone" />
					</view>
				</view>
				<!-- <view style="display: flex; height: 72rpx; align-items: center;">
					<image style="width: 24rpx; height: 24rpx;" src="../../static/img/grxx.png"></image>
					<view style="font-size: 26rpx; margin-left: 17rpx;">个人证件信息均用于酒店核验优惠资格</view>
				</view> -->
			</view>
			<view class="qBottom">
				<view>优惠券</view>
				<image style="width: 10rpx; height: 18rpx;" src="../../static/img/right.png"></image>
			</view>
		</view>
		<view class="footer">
			
			<view class="service-bottom">
				<view style="display: flex; align-items: center;">
					<view>合计:</view>
					<view style="color: #fa5c2c; font-weight: bold;">￥ <span style="font-size: 32rpx;">{{allPrice}}</span></view>
				</view>
				<view @click="yud" class="ydd">立即购买</view>
			</view>				
		</view>
	</view>
</template>

<script>
	import wTimePicker from "@/components/w-time-picker/w-time-picker.vue";
	export default {
		components: {
			 wTimePicker
		},
		data() {
			return {
				//屏幕高度
				screenHeight: 0,
				tcid:0,
				tclxid:0,
				liverName:"",
				IdCard:"",
				phone:"",
				lxrName:"",
				lxrPhone:"",
				idd:"",
				beforeDate:"",
				afterDate:"",
				tclxs:[],
				num:1,
				allPrice:"",
				syrq:"",
				tcName:"",
				sds:[],
				iddd:"",
				ddhao:""
			}
		},
		onLoad(options) {
			console.log("optn")
			console.log(options)
			this.sds=JSON.parse(options.sds)
			console.log(this.sds)
			 this.screenHeight = uni.getSystemInfoSync().windowHeight;
		},
		onShow() {
			this.getAllPrice()
		},
		methods: {
			bback(){
				uni.navigateBack(-1)
			},
			onConfirm(e){
				console.log("选择时间")
				console.log(e)
			//	this.timm = e
			//	console.log(this.timm)
			//	this.show=false
			},
			onCancel(){
			//	this.show=false
			},
			rq(e){
				this.syrq=e
				console.log("日期")
				console.log(e)
			},
			aad(){
				this.num++
				
				this.getAllPrice();
				//this.money=this.price*this.num
			},
			reduce(){
					if(this.num>1){
						this.num--;
					}
					this.getAllPrice();				
			},
		
			getAllPrice(){
				this.allPrice=this.sds.dj*this.num          
			},
			yud(){
				const phoneReg = /^1[3456789]\d{9}/;
				if(!phoneReg.test(this.lxrPhone)){
					uni.showToast({
						icon:"none",
						title:"联系人手机号码有误"
					})
					return
				}
				if(this.lxrName==""){
					uni.showToast({
						icon:"none",
						title:"请填联系人姓名"
					})
					return
				}	
						
				// if(this.liverName==""){
				// 	uni.showToast({
				// 		icon:"none",
				// 		title:"请填写出行人姓名"
				// 	})
				// 	return
				// }	
		
	
				//if(this.liverName!=""){
					
					uni.request({

						method:"POST",
						url:this.apiUrl+"index/tcdd",
						data:JSON.stringify({
							"user_name":uni.getStorageSync("openid"),
							"syrq":this.syrq,
							"num":this.num,
							"tclxname":this.sds.title,
							"cxr":this.liverName,
							"tcName":this.tcName,
							"lxrName":this.lxrName,
							"lxrPhone":this.lxrPhone,
							"yhqId":0,
							"tcId":this.sds.id,
							"tclxid":this.sds.id,
							"dd":3
						}),
						success: (res) => {
							console.log("提交出行订单")
							console.log(res.data)
							this.ddhao = res.data.ddhao
							if(res.data.status==1){
								uni.showToast({
									title:res.data.data
								})
							}
							uni.request({
								method:"POST",
								url:this.apiUrl+"index/ddxqddh2",
								data:JSON.stringify({
									"ddhao":this.ddhao
								}),
								success: (rres) => {
									console.log(rres)
									this.iddd=rres.data.id	
									uni.request({
										method:"POST",
										url:this.apiUrl+"Wx/config",
										data:JSON.stringify({
											"id":this.iddd,
											"openid":uni.getStorageSync("openid"),
											"dd":3
										}),
										success: (res) => {
											console.log("支")
											console.log(res)
											
														// 调起微信支付
														uni.requestPayment({
															provider: 'wxpay', // 服务提提供商
															timeStamp: res.data.timeStamp.toString(), // 时间戳
															nonceStr: res.data.nonce, // 随机字符串
															package: res.data.package,
															signType: res.data.signType, // 签名算法
															paySign: res.data.sign, // 签名
															success: function (res) {
																console.log("res")
																console.log(res)
																uni.showToast({
																	icon:"success",
																	title:"支付成功"
																}),
																// uni.request({
																// 	method:"POST",
																// 	url:this.apiUrl+"index/wxback",
																// 	data:JSON.stringify({
																// 		"id":this.iddd+1,
																// 		"user_name":uni.getStorageSync("openid")
																// 	}),
																// 	success: (res) => {
																// 		console.log("回调")
																// 		console.log(res)
																// 	}
																// })
																// uni.request({
																// 	method:'POST',
																// 	url:this.apiUrl+"index/find_user_code",
																// 	data:JSON.stringify({
																// 		'code':uni.getStorageSync("code")
																// 	}),
																// 	success: (res) => {
																// 		console.log("tou")
																// 		console.log(res)
																// 		this.userInfo=res.data
																// 		console.log(this.userInfo)
																// //		this.vv(1)
																// 	}
																// })				
																console.log('支付成功',res);
																// 业务逻辑。。。
															},
															fail: function (err) {
																console.log("err")
																console.log(err)
																 this.err=err
																uni.showToast({
																	icon:"error",
																	title:"失败"
																})
																this.err=true
															//	console.log('支付失败',err);
															}
														})
										}
									})
								}
							})
						}
					})					
			//	}

			}
		}
	}
</script>

<style lang="scss">
	page {
	  width: 100%;
	  height: 100%;
	}
	.qrr{
		width: 100%;
		min-height: 100%;
		padding-bottom: 100rpx;
		.content-wrap {
		}
		 
		background: url("https://jhd.wangshangquan.top/static/img/bag.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.qrr .hdd{
		width: 100%;
		height: 120rpx;
		
		margin: 0 auto ;
		display: flex;
		line-height: 160rpx;
	}
	.qrr .qbody .qToo{
		width: 90%;
		margin: 40rpx auto;
		border-radius: 20rpx;
		padding: 22rpx 29rpx;
		background-color: #fff;
		display: flex;
	}
	.qrr .qbody .qToo .price_num{
		width: 248rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 60rpx;
	}
	.qrr .qbody .qToo .price_num .spjine{
		font-size: 0.8rem;
		color: #ff0e0e;
		font-weight: bold;
	}
	.qrr .qbody .qToo .price_num .numOpt{
		display: flex;
		align-items: center;
		width: 60rpx;
		height: 25rpx;
	}
	.qrr .qbody .qToo .price_num .numOpt .ipt{
		width: 1.5rem;
	
		font-size: 14px;
		text-align: center;
			
	}
	.qrr .qbody .qToo .price_num .numOpt .ipt input{
		height: 25rpx;
		line-height: 25rpx;
	
	}
	.qrr .qbody .qToo .price_num .numOpt .opt{	
			
		width: 0.7em;
		font-size: 42upx;
		font-weight: bold;
		border: 1px solid #f9800b;
		height: 0.7em;
		line-height: 0.6em;
		text-align: center;
		background-color: #f9800b;
		color: #fff;
		border-radius: 50%;
	}
	.qrr .qbody .qTop{
		width: 90%;
		margin: 20rpx auto;
		border-radius: 20rpx;
		padding: 22rpx 29rpx;
		font-weight: bold;
		background-color: #fff;
	}
	.qrr .qbody .qpart2{
		width: 90%;
		margin: 0 auto;
		border-radius: 20rpx;
		padding: 22rpx 29rpx;
		
		background-color: #fff;
	}
	.qrr .qbody .qBottom{
		width: 90%;
		margin: 30rpx auto;
		border-radius: 20rpx;
		padding: 55rpx 29rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
	}
	.qrr .qbody .qpart2 .qrow{
		width: 100%;
		height: 98rpx;
		display: flex;
		align-items: center;
		
		border-bottom: 2rpx solid #eeeeee;
	}
	.qrr .qbody .qTop .dat{
		display: flex;
		align-items: center;
	}
	.footer{
		width: 100%;
		height: 90rpx;
		background-color: #fff;
		position: fixed;
		bottom: 0;	
		z-index: 999;
	}
	.service-bottom {
		height: 70rpx;
		font-size: 26rpx;	
		width: 90%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;	
	}
	.ydd{
		padding: 10rpx 40rpx;
		border-radius: 30rpx;
		margin-top: 20rpx;
		height: 40rpx;
		line-height: 40rpx;
		color: #fff;
		background-image: linear-gradient(to right, #f9800b, #f65b19);
	}
</style>
