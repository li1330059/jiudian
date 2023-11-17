<template>
	<view @touchmove.stop.prevent="moveHandle">
		<view class="serviceDialog" @click="close">

		</view>
		<view class="serviceBox">
			<scroll-view class="service-content" scroll-y="true">
			<view class="service-top">
				<view class="close" @click="close">
					<image style="width: 40rpx; height: 40rpx; margin-top: 20rpx;" src="../static/img/close.png"></image>
				</view>
				<view>
					<view class="serviceTitle" v-if="orderInfo.status==0">待付款</view>
					<view class="serviceTitle" v-if="orderInfo.status==1">已付款</view>
					<view class="serviceTitle" v-if="orderInfo.status==2">已预订</view>
					<view class="serviceTitle" v-if="orderInfo.status==3">已完成</view>
					<view class="serviceTitle" v-if="orderInfo.status==4">已关闭</view>					
				</view>
				<view>&nbsp;</view>
				<!-- <view @click="ewwm" v-if="orderInfo.status==0" style="font-size: 24rpx; color: #8dc9fd; display: none;">生成订单二维码</view> -->
			</view>
				<!-- <view style="text-align: center; height: 85rpx; line-height: 85rpx; border-bottom: 2rpx solid #f0f0f0;">{{room.title}}</view> -->
				<view class="member">
					<view v-if="orderInfo.dd==2">
						
					
					<view class="memberBody">
						<view class="memberItem">
							<view style="display: flex; margin-left: 10rpx;">
								
								<image v-if="orderInfo.dd != 2" style="width: 160rpx; height: 160rpx; border-radius: 20rpx;" :src="orderInfo.tp"></image>
								<image v-if="orderInfo.dd == 2" style="width: 160rpx; height: 160rpx; border-radius: 20rpx;" :src="orderInfo.arrs[0]"></image>
								<view style="margin-left: 12rpx; font-size: 30rpx; font-weight: bold;">{{orderInfo.jdfjname}}</view>
							</view>
							
							<view style="font-size: 24rpx;">
								
							</view>
						</view>
						<view class="memberItem">
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								酒店名称
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.jdName}}</view>
						</view>
						<view class="memberItem">
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								房间数量
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.roomNum}}</view>
						</view>
						<view class="memberItem">
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								优惠金额
							</view>
							<view style="font-size: 24rpx;">￥{{orderInfo.yhjine}}</view>					
						</view>
						<view class="memberItem">
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								实收金额
							</view>
							<view style="font-size: 24rpx;">￥{{orderInfo.ssjine}}</view>	
						</view>
						<view class="memberItem">
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								费用
							</view>
							<view style="font-size: 24rpx;">￥{{orderInfo.ddjine}}</view>	
						</view>
					
					</view>
					<!-- <view class="memberTitle">会员权益</view> -->
					<view class="memberBody">
						<view class="memberItem">
						
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								入住人姓名
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.liverName}}</view>	
						
						</view>
						<view class="memberItem">
							
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								入住人手机号
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.phone}}</view>	
						</view>
						<view class="memberItem">
							
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								入住人身份证号
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.IdCard}}</view>	
						</view>
						<view class="memberItem">
							
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								入住日期
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.startDate}}</view>	
						</view>		
						<view class="memberItem">
							
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								结束日期
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.stopDate}}</view>	
						</view>
					</view>
					</view>
					<view v-if="orderInfo.dd!=2">
						<view class="memberBody">
							<view class="memberItem">
								<view style="display: flex; margin-left: 10rpx;">
									<image style="width: 160rpx; height: 160rpx; border-radius: 20rpx;" :src="orderInfo.tp"></image>
									<view style="margin-left: 12rpx; font-size: 30rpx; font-weight: bold;">{{orderInfo.tclxname}}</view>
								</view>
								
								<view style="font-size: 24rpx;">
									
								</view>
							</view>
							<view class="memberItem">
								<view style="display: flex; margin-left: 10rpx; align-items: center;">
									出行人
								</view>
								<view style="font-size: 24rpx;">{{orderInfo.cxr}}</view>
							</view>
							<view class="memberItem">
								<view style="display: flex; margin-left: 10rpx; align-items: center;">
									预约数量
								</view>
								<view style="font-size: 24rpx;">{{orderInfo.num}}</view>
							</view>
							<view class="memberItem">
								<view style="display: flex; margin-left: 10rpx; align-items: center;">
									优惠金额
								</view>
								<view style="font-size: 24rpx;">￥{{orderInfo.yhjine}}</view>					
							</view>
							<view class="memberItem">
								<view style="display: flex; margin-left: 10rpx; align-items: center;">
									实收金额
								</view>
								<view style="font-size: 24rpx;">￥{{orderInfo.ssjine}}</view>	
							</view>
							<view class="memberItem">
								<view style="display: flex; margin-left: 10rpx; align-items: center;">
									费用
								</view>
								<view style="font-size: 24rpx;">￥{{orderInfo.ddjine}}</view>	
							</view>
						
						</view>	
					</view>
					<view class="memberBody">
						
							<view class="memberItem" v-if="orderInfo.dd==2" style="display: none;">
								
								<view style="display: flex; margin-left: 10rpx; align-items: center;">
									使用日期
								</view>
								<view style="font-size: 24rpx;">{{orderInfo.syrq}}</view>	
							</view>
								<view class="memberItem" v-if="orderInfo.dd!=2">
									
									<view style="display: flex; margin-left: 10rpx; align-items: center;">
										使用日期
									</view>
									<view style="font-size: 24rpx;">{{orderInfo.syrq}}</view>	
								</view>
						<view class="memberItem">								
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								订单编号
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.ddhao}}</view>	
			
				
						</view>
				
						<view class="memberItem">
							
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								联系人姓名
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.lxrName}}</view>	
						</view>
						<view class="memberItem">
							
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								联系人手机号
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.lxrPhone}}</view>	
						</view>
					
					</view>
						<view v-if="orderInfo.status==0" @click="goPay" class="memberItem" style="width: 95%;">
							<view style="font-size: 24rpx;"></view>	
							<view style="display: flex; margin-left: 10rpx; align-items: center; color: red;">
								去付款
							</view>
							
						</view>
						<view v-if="orderInfo.status==1" @click="tkk" class="memberItem" style="width: 95%;">
							<view style="font-size: 24rpx;"></view>	
							<view style="display: flex; margin-left: 10rpx; align-items: center; color: red;">
								申请退款
							</view>
							
						</view>
				</view>
			
	<serviceDialog  @close="closeService" @subb="subb" class="hidden" :class="{show:serviceFlag2}"></serviceDialog>

			<view class="footer">
				
			
			</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	import serviceDialog from '@/components/serviceDialog5.vue'
	export default {
		props:["orderInfo"],
		components: {
		    serviceDialog		
		},
		data(){
			return{
				//shopDetail:[],
				
				num:1,
				currentIndex: 0,
				currentIndex1: 0,
				chooseInfos:[],
				priceInfos:[],
				serviceFlag2: false,
				bezuu:"",
				checked:true,
				zffs:0,
				lxrPhone:"",
				tclxname:"",
				
			//	border1:"1px solid #9b7159",
			}
		},
	
		created() {
			console.log("poiu")
		},

		methods: {
			subb(e){
				console.log("subb")
				console.log(e)
				if(e==""){
					uni.showToast({
						icon:"none",
						title:"退款原因不能为空"
					})
				}
				if(e!=""){
					this.serviceFlag2 = false
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
						url:this.apiUrl+"index/tkdd",
						data:JSON.stringify({
							ddhao:this.orderInfo.ddhao,
							name:this.orderInfo.lxrName,
							phone:this.lxrPhone,
							jine:this.orderInfo.ssjine,
							dd:this.orderInfo.dd,
							title:this.tclxname,
							tkyy:e
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
				}
			},
			tkk(){
				this.serviceFlag2 = true
				console.log(this.serviceFlag2)
				console.log(this.orderInfo)
				console.log(this.orderInfo.phone)

			},
			goPay(){
				uni.request({
					method:"POST",
					url:this.apiUrl+"Wx/config",
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
			},
			closeService() {
				this.serviceFlag2 = false
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
	.serviceBox {
		height: 1070rpx;
		background: #fff;
		border-radius: 50rpx 50rpx 0 0;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 11;
	}

	.serviceBox .adds{
		display: flex;
		align-items: center;
		margin-left: 34rpx;
		height: 132rpx;
		width: 86%;
		background-color: #fff;
		color: #333;
		padding-left: 24rpx;
		padding-right: 24rpx;
		border-radius: 30rpx;
		justify-content: space-between;
	}
	.serviceBox .service-top{
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
	.serviceBox .service-top .member{
		width: 90%;
		margin: 0 auto;
		padding-top: 37rpx;
		
		/* border-bottom: 4px solid #dddddd; */
	}
	.serviceBox .service-top .member .memberTitle{
		font-weight: bold;
	}
	.serviceBox  .member .memberBody{
		width: 90%;
		padding-bottom: 10rpx;
		margin: 0 auto;
		border-bottom: 2rpx #e6e6e6 solid;
	}
	 .memberItem{
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 20rpx;
		font-size: 28rpx;
	}
	.serviceBox .service-top .ydxz{
		width: 90%;
		margin: 0 auto;
		padding-top: 48rpx;
	}
	.serviceBox .service-top .ydxz .ydxzContent{
		font-size: 24rpx;
		margin-top: 53rpx;
		line-height: 40rpx;
	}
	.serviceBox .service-top .fyzc{
		width: 90%;
		margin: 45rpx auto;
	}
	.serviceBox .service-top .fymx{
		width: 90%;
		margin: 50rpx auto;
	}
	.serviceBox .service-top .fymx .fyContent{
		width: 90%;
		border-radius: 10rpx;
		margin-top: 24rpx;
		background-color: #f8f8f8;
		padding: 33rpx 20rpx;
		font-size: 26rpx;
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
		position: fixed;
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
	.hidden {
		display: none;
	}
	
	.show {
		display: block;
	}
</style>