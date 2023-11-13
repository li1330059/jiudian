<template>
	<view class="qrr" :style="{ height: screenHeight }">
		<view class="hdd">
				<view @click="bback">
					<image style="width: 40rpx; height: 40rpx; margin-top: 60rpx; margin-left: 20rpx;  " src="../../static/img/arrow-left-bold.png"></image>
				</view>
				<view style="font-size: 34rpx; margin-left: 240rpx; font-weight: bold;">确认订单</view>					
		</view>	
		<view class="qbody">
			<view class="qTop">
				<view class="dat">
					<view>{{startDate}}</view>
					<view style="font-size: 24rpx; margin-left: 13rpx;">{{today}}</view>
					<view style="margin-left: 30rpx; padding: 4rpx 6rpx; font-size: 24rpx; background-color: #eeeeee; border-radius: 5rpx; margin-left: 30rpx;">{{allDate}}晚</view>
					<view style="margin-left: 30rpx;">{{stopDate}}</view>
					<view style="margin-left: 13rpx; font-size: 24rpx;">{{day}}</view>
				</view>
				<view style="margin-top: 20rpx;">{{room.fjgg}}</view>
				<view style="margin-top: 20rpx; color: #adadad; font-size: 24rpx;">{{room.value}}</view>
			</view>
			<view class="qpart2">
				<view style="border-bottom: 2rpx solid #eeeeee; font-weight: bold; padding-bottom: 32rpx;">入住信息</view>
				<view class="qrow">
					<view style="color: #858585; width: 150rpx;">房间数量</view>
					<view style="margin-left: 40rpx;">1间</view>
				</view>
				<view class="qrow">
					<view style="color: #858585; width: 150rpx;">住客姓名</view>
					<view style="margin-left: 40rpx;">
						<input  placeholder="请写入住客姓名" v-model="liverName" />
					</view>
				</view>
				<view class="qrow">
					<view style="color: #858585; width: 150rpx;">身份证</view>
					<view style="margin-left: 40rpx;">
						<input  placeholder="请写入住客的证件号码" v-model="IdCard" />
					</view>
				</view>
				<view class="qrow">
					<view style="color: #858585; width: 150rpx;">手机号</view>
					<view style="margin-left:40rpx;">
						<input  placeholder="请写入住客的手机号" v-model="phone" />
					</view>
				</view>
				<view class="qrow">
					<view style="color: #858585; width: 150rpx;">联系人姓名</view>
					<view style="margin-left: 40rpx;">
						<input  placeholder="请写入联系人姓名" v-model="lxrName" />
					</view>
				</view>
				<view class="qrow">
					<view style="color: #858585; width: 150rpx;">手机号</view>
					<view style="margin-left: 40rpx;">
						<input  placeholder="请写入联系人手机号" v-model="lxrPhone" />
					</view>
				</view>
				<view style="display: flex; height: 72rpx; align-items: center;">
					<image style="width: 24rpx; height: 24rpx;" src="../../static/img/grxx.png"></image>
					<view style="font-size: 26rpx; margin-left: 17rpx;">个人证件信息均用于酒店核验优惠资格</view>
				</view>
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
					<view style="color: #fa5c2c; font-weight: bold;">￥ <span style="font-size: 32rpx;">{{room.price}}</span></view>
				</view>
				<view @click="yud" class="ydd">预订</view>
			</view>				
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//屏幕高度
				screenHeight: 0,
				room:[],
				allDate:"",
				startDate:"",
				stopDate:"",
				day:"",
				today:"",
				liverName:"",
				IdCard:"",
				phone:"",
				lxrName:"",
				lxrPhone:"",
				idd:"",
				beforeDate:"",
				afterDate:"",
				iddd:"",
				ddhao:""
			}
		},
		onLoad(options) {
			console.log("optn")
			console.log(options)
			this.room=JSON.parse(options.room)
			this.allDate=options.allDate
			this.startDate=options.startDate
			this.stopDate=options.stopDate
			this.day=options.day
			this.today=options.today
			this.idd=options.idd
			this.beforeDate=options.beforeDate
			this.afterDate=options.afterDate
			console.log("room")
			console.log(this.room)
			 this.screenHeight = uni.getSystemInfoSync().windowHeight;
		},
		methods: {
			bback(){
				uni.navigateBack(-1)
			},
			yud(){
				const phoneReg = /^1[3456789]\d{9}/;
				const IDCard_RGEX = /(^\d{15})|(^\d{17}(x|X|\d))/;
				if(this.liverName==""){
					uni.showToast({
						icon:"none",
						title:"请填写居住人姓名"
					})
					return
				}	
				if(this.IdCard==""){
					uni.showToast({
						icon:"none",
						title:"请填写居住人证件号码"
					})
					return
				}
				if(this.phone==""){
					uni.showToast({
						icon:"none",
						title:"请填写居住人手机号码"
					})
					return
				}
				if(!IDCard_RGEX.test(this.IdCard)){
					uni.showToast({
						icon:"none",
						title:"身份证号码有误"
					})
					return
				}				
				if(!phoneReg.test(this.phone)){
					uni.showToast({
						icon:"none",
						title:"居住人手机号码有误"
					})
					return
				}
				if(!phoneReg.test(this.lxrPhone)){
					uni.showToast({
						icon:"none",
						title:"联系人手机号码有误"
					})
					return
				}
				if(this.liverName!=""&&this.IdCard!=""&&this.phone!="" && phoneReg.test(this.phone) && phoneReg.test(this.lxrPhone) && IDCard_RGEX.test(this.IdCard)){
					console.log(this.beforeDate)
					console.log(this.afterDate)
					uni.request({

						method:"POST",
						url:this.apiUrl+"index.php/index/jddd",
						data:JSON.stringify({
							"user_name":uni.getStorageSync("openid"),
							"startDate":this.beforeDate,
							"stopDate":this.afterDate,
							"roomNum":1,
							"liverName":this.liverName,
							"IdCard":this.IdCard,
							"phone":this.phone,
							"lxrName":this.lxrName,
							"lxrPhone":this.lxrPhone,
							"yhqid":0,
							"jdid":this.idd,
							"jdfjid":this.room.id						
						}),
						success: (res) => {
							console.log("提交订单")
							console.log(res.data)
							this.ddhao = res.data.ddhao
							if(res.data.status==1){
								uni.showToast({
									title:res.data.data
								})
								uni.request({
									method:"POST",
									url:this.apiUrl+"index.php/index/ddxqddh",
									data:JSON.stringify({
										"ddhao":this.ddhao
									}),
									success: (rres) => {
										console.log(rres)
										this.iddd=rres.data.id	
										uni.request({
											method:"POST",
											url:this.apiUrl+"index.php/Wx/config",
											data:JSON.stringify({
												"id":this.iddd,
												"openid":uni.getStorageSync("openid"),
												"dd":2
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
																	// 	url:this.apiUrl+"index.php/index/wxback",
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
																	// 	url:this.apiUrl+"index.php/index/find_user_code",
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
						},
						fail: (err) => {
							console.log("err")
							console.log(err)
						}
					})					
				}

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
	.qrr .qbody .qTop{
		width: 90%;
		margin: 40rpx auto;
		border-radius: 20rpx;
		padding: 22rpx 29rpx;
		font-weight: bold;
		background-color: #fff;
	}
	.qrr .qbody .qpart2{
		width: 90%;
		margin: -20rpx auto;
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
