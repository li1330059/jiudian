<template>
	<view @touchmove.stop.prevent="moveHandle">
		<view class="serviceDialog" @click="close">

		</view>
		<view class="serviceBox1">
			
			<view class="service-top">
				<view class="close" @click="close">
					<image style="width: 40rpx; height: 40rpx; margin-top: 20rpx;" src="../static/img/close.png"></image>
				</view>
				退款原因</view>
				<view>
					<textarea v-model="tarr" placeholder="请填写退款原因"></textarea>
				</view>
				<view @click="subb" class="suub">提交</view>
		</view>

	</view>
</template>

<script>
	//import serviceDialog from '@/components/serviceDialog1.vue'
	export default {
		props:["orderInfo"],
		data(){
			return{
				//shopDetail:[],
				
				num:1,
				currentIndex: 0,
				currentIndex1: 0,
				chooseInfos:[],
				priceInfos:[],
				serviceFlag1: false,
				bezuu:"",
				checked:true,
				zffs:0,
				lxrPhone:"",
				tclxname:"",
				tarr:""
			//	border1:"1px solid #9b7159",
			}
		},
	
		created() {
			console.log("poiu")
		},

		methods: {
			subb(){
				this.$emit("subb",this.tarr);
			},
			tkk(){
				
				console.log(this.orderInfo)
				console.log(this.orderInfo.phone)
				if(this.orderInfo.phone==undefined){
					this.lxrPhone = this.orderInfo.lxrPhone
				}
				if(this.orderInfo.phone!=undefined){
					this.lxrPhone = this.orderInfo.phone
				}
				if(this.orderInfo.tclxname==undefined){
					this.tclxname = this.orderInfo.jdfjname
				}
				if(this.orderInfo.tclxname!=undefined){
					this.tclxname = this.orderInfo.tclxname
				}			
				uni.request({
					method:"POST",
					url:this.apiUrl+"index.php/index/tkdd",
					data:JSON.stringify({
						ddhao:this.orderInfo.ddhao,
						name:this.orderInfo.lxrName,
						phone:this.lxrPhone,
						jine:this.orderInfo.ssjine,
						dd:this.orderInfo.dd,
						title:this.tclxname
					}),
					success: (res) => {
						console.log("退1")
						console.log(res)
						uni.showToast({
							icon:'none',
							title:res.data.data
						})
					}
				})
			},
			goPay(){
				uni.request({
					method:"POST",
					url:this.apiUrl+"index.php/Wx/config",
					data:JSON.stringify({
						"id":this.orderInfo.id,
						"openid":uni.getStorageSync("openid"),
						"dd":this.orderInfo.dd
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
			},
			closeService() {
				this.serviceFlag1 = false
			},
	
			ewwm() {
				uni.navigateTo({
					url:"/pages/ewm/ewm?orderNum="+this.orderInfo.ddhao+"&jdName="+this.orderInfo.jdName+"&liverName="+this.orderInfo.liverName+"&phone="+this.orderInfo.phone
				})
			},
			close(){
				
				this.$emit('close')
			},
			yud(){
				this.$emit('yud')
			}
		}
	}
</script>

<style scoped>
	.serviceDialog {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 10;
		display: flex;
		align-items: flex-end;
	}
	.active{
		
		height: 26rpx;
		width: 260rpx; 
		color: #d35b1f;
		border: 2rpx solid #d35b1f;
		background-color: #fff5f3;
	}
	.active1{
		color: #d35b1f;
		border: 2rpx solid #d35b1f;
		background-color: #fff5f3;
	}
	.aside{
		width: 95%;
		margin: 18rpx auto;
		padding: 10rpx 0 30rpx;
		background-color: #fff;
		border-radius: 30rpx;
	}
	.serviceBox1 {
		height: 670rpx;
		background: #fff;
		border-radius: 50rpx 50rpx 0 0;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 11;
		
	}

	.serviceBox1 .service-top{
		width: 90%;
		/* display: flex; */
		height: 120rpx;
		text-align: center;
		padding-top: 20rpx;
		/* align-items: center; */
		margin: 0 auto;
		/* justify-content: space-between; */
		font-size: 32rpx;
	}
	.serviceBox1 textarea{
		width: 90%;
		height: 150rpx;
		margin: 0 auto;
		border: 1rpx #dddddd solid;
		border-radius: 10rpx;
		padding: 20rpx;
		
		/* border-bottom: 4px solid #dddddd; */
	}
	.serviceBox1 .suub{
		width: 90%;
		height: 80rpx;
		border-radius: 50rpx;
		background-image: linear-gradient(to right, #f9800b, #f65b19);
		color: #fff;
		text-align: center;
		line-height: 80rpx;
		position: fixed;
		bottom: 115rpx;
		left: 5%;
		z-index: 99999;
	}

	 .memberItem{
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 20rpx;
		font-size: 28rpx;
	}

	.close {
		position: absolute;
		top: 0;
		left: 0;
		width: 90rpx;
		width: 90rpx;
		
		color: #999;
		font-size: 14px;
	}

	.service-content {
		position: absolute;
		top: 0;
		bottom: 100rpx;
		left: 0rpx;
		right: 0rpx;
	}

	.service-item, .service-item1{
		
		margin: 0 20rpx;
		padding: 10rpx 0 30rpx;
	}

	.service-item-title {
		line-height: 62rpx;
		font-size: 28rpx;
		margin-left: 16px;
	}

	.service-item-title i {
		font-weight: normal;
		color: #00C3F5;
		margin-right: 10rpx;
		float: left;
	}
	.service-item .service-ttle{
		display: flex;
		width: 90%;
		justify-content: space-between;
		margin-left: 16px;
	}
	
	.service-item-txt {
		display: flex;
		font-size: 24rpx;
		color: #999;
		padding-left: 30rpx;
		line-height: 34rpx;
	}
	.footer{
		width: 100%;
		height: 90rpx;
		background-color: #fff;
		position: absolute;
		bottom: 0;		
	}
	
	.service-bottom {
		height: 70rpx;
		font-size: 26rpx;
	/* //	background-image: linear-gradient(to right,#ff7304, #ff0230); */
		/* color: #fff; */
	/* 	position: absolute;
		bottom: 10rpx;
		
		text-align: center; */
		
		width: 90%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
		/* left: 50%;
		margin-left: -45%; */
		
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
	.table{
	  width:650rpx;
	  border-spacing: 15px;
	}
	table tr td{
		vertical-align:top;
		padding: 20rpx;
		  width: 260rpx;
		  height: 26rpx;
		  border: none;
		  border-radius: 6px;
		  color: #000;
		  background-color: #f7f7f7;
		  font-size: 28rpx;		
	}

	.row-line{
		display: flex;
		align-items: center;
	}
	.show {
		display: block;
	}
</style>