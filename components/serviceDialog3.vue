<template>
	<view @touchmove.stop.prevent="moveHandle">
		<view class="serviceDialog" @click="close">

		</view>
		<view class="serviceBox">
			<scroll-view class="service-content" scroll-y="true">
				
			<view class="service-top">
			
				<view class="close" @click="close">
					<image style="width: 40rpx; height: 40rpx;" src="../static/img/close.png"></image>
				</view>
				<swiper class="swiper" style="height: 422rpx; width: 750rpx;" circular indicator-dots="true" autoplay="true" interval="5000"
					duration="500" indicator-color="rgba(255, 255, 255, .5)" indicator-active-color="#ffffff">
					<swiper-item v-for="(item,index) in room.arrs">
						<image style="width: 750rpx; height: 422rpx; border-radius: 30rpx 30rpx 0 0;" :src="item"></image>
					</swiper-item>
				<!-- 	<swiper-item>
						<image style="width: 750rpx; height: 750rpx; border-radius: 30rpx 30rpx 0 0;" :src="room.tp"></image>
					</swiper-item>
					<swiper-item>
						<image style="width: 750rpx; height: 750rpx; border-radius: 30rpx 30rpx 0 0;" :src="room.tp"></image>
					</swiper-item>
					<swiper-item>
						<image style="width:  750rpx; height: 750rpx; border-radius: 30rpx 30rpx 0 0;" :src="room.tp"></image>
					</swiper-item> -->
				</swiper>
				<view style="text-align: center; height: 85rpx; line-height: 85rpx; border-bottom: 2rpx solid #f0f0f0;">{{room.title}}</view>
	<!-- 			<view class="member">
					<view class="memberTitle">会员权益</view>
					<view class="memberBody">
						<view class="memberItem">
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								<image style="width: 40rpx; height: 40rpx;  position: relative; z-index: 99;" src="../static/img/hy1.png"></image>
								<view style="padding: 3rpx 11rpx; border-radius: 0 0 10rpx 10rpx; height: 24rpx; font-size: 20rpx; background-color: #e4eafa; color: #5e72bb; margin-left: -10rpx;">普通会员</view>
							</view>
							<view style="font-size: 24rpx;">无折扣</view>
						</view>
						<view class="memberItem">
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								<image style="width: 40rpx; height: 40rpx;  position: relative; z-index: 99;" src="../static/img/hy2.png"></image>
								<view style="padding: 3rpx 11rpx; border-radius: 0 0 10rpx 10rpx; height: 24rpx; font-size: 20rpx; background-color: #efefef; color: #636363; margin-left: -10rpx;">白银会员</view>
							</view>
							<view style="font-size: 24rpx;">享9.5折优惠</view>
						</view>
						<view class="memberItem">
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								<image style="width: 40rpx; height: 40rpx;  position: relative; z-index: 99;" src="../static/img/hy3.png"></image>
								<view style="padding: 3rpx 11rpx; border-radius: 0 0 10rpx 10rpx; height: 24rpx; font-size: 20rpx; background-color: #fffaea; color: #cb8955; margin-left: -10rpx;">铂金会员</view>
							</view>
							<view style="font-size: 24rpx;">享9.3折优惠</view>
						</view>
						<view class="memberItem">
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								<image style="width: 40rpx; height: 40rpx;  position: relative; z-index: 99;" src="../static/img/hy4.png"></image>
								<view style="padding: 3rpx 11rpx; border-radius: 0 0 10rpx 10rpx; height: 24rpx; font-size: 20rpx; background-color: #d4faff; color: #5297d2; margin-left: -10rpx;">钻石会员</view>
							</view>
							<view style="font-size: 24rpx;">享9折优惠</view>
						</view>
					
					</view>
					
				</view> -->
				<view class="ydxz">
						<view>预订须知</view>
						<view class="ydxzContent">{{room.ydxz}}</view>					
				</view>
				<view class="fyzc">
					<view>酒店费用政策</view>
					<view style="margin-top: 50rpx; font-size: 26rpx;">{{room.fyzc}}</view>
				</view>
				<view class="fymx">
					<view style="font-size: 22rpx;">费用明细</view>
					<view class="fyContent">{{room.fymx}}</view>
				</view>
			</view>
			</scroll-view>
			<view class="footer">
				
				<view class="service-bottom">
					<view style="display: flex;">
						<view>合计:</view>
						<view style="color: #fa5c2c; font-weight: bold;">￥ <span style="font-size: 32rpx;">{{room.dj}}</span></view>
					</view>
					<view @click="yud" class="ydd">预订</view>
				</view>				
			</view>
		</view>

	</view>
</template>

<script>
	//import serviceDialog from '@/components/serviceDialog1.vue'
	export default {
		//props:["room"],
		props:{
			room:{
				type:Object,
				default(){
					return {}
				}
			},
			
		},
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
				zffs:0
			//	border1:"1px solid #9b7159",
			}
		},
		mounted(){
			this.rooms()
		},
		created() {
			console.log("rrr")
			console.log(this.room)
			
		},

		methods: {
			rooms(){
				console.log("rrom")
				console.log(this.room)
			},
			radioChange(e){
				console.log(e)
				this.zffs = e.detail.value
				console.log(this.zffs)
				this.checked=!this.checked
			},
			aadd(){
				this.num++
				this.allPrice=this.num*this.pinfos.price
				console.log(this.allPrice)
			},
			suub(e){
				console.log("e")
				console.log(e)
				this.bezuu = e
			},
			// detail(item){
			// 	item.color1="red"
			// 	item.border1="2rpx solid red"
			// 	console.log(item)
			// },
			detail(index, id){
				this.currentIndex=index
				console.log(this.currentIndex)
				console.log(id)
				uni.request({
					url:this.apiUrl+"api/v1/pri/ssop/findSsopById?id="+id,
					success: (res) => {
						console.log("reees")
						console.log(res)
						this.chooseInfos=res.data.data
						console.log(this.chooseInfos)
						// uni.request({
						// 	method:"POST",
						// 	url:this.apiUrl+"api/v1/pri/shopper/findShopperById",
						// 	data:JSON.stringify({
						// 		"id":this.chooseInfos.uid
						// 	}),
						// 	success: (res) => {
						// 		console.log("res")
						// 		console.log(res)
						// 	}
						// })
					}
				})
			},
			detail1(index,id){
				this.currentIndex1=index
				console.log(this.currentIndex1)
				uni.request({
					url:this.apiUrl+"api/v1/pri/ssop/findSsopById?id="+id,
					success: (res) => {
						console.log("reees")
						console.log(res)
						this.priceInfos=res.data.data
						console.log(this.priceInfos)

					}
				})
			},
			reducee(){
				if(this.num>1){
					this.num--
					this.allPrice=this.num*this.pinfos.price
					console.log(this.allPrice)
				}
			},
			closeService() {
				this.serviceFlag1 = false
			},
			showSerivicClick(){
				console.log("备注")
				this.serviceFlag1 = true;
				console.log(this.serviceFlag1)
			},
			moveHandle() {

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
	.serviceBox .service-top .member{
		width: 90%;
		margin: 0 auto;
		padding-top: 37rpx;
		
		border-bottom: 4px solid #dddddd;
	}
	.serviceBox .service-top .member .memberTitle{
		font-weight: bold;
	}
	.serviceBox .service-top .member .memberBody{
	
		margin: 34rpx auto;
	}
	.serviceBox .service-top .member .memberBody .memberItem{
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 7rpx;
		font-size: 20rpx;
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
	.serviceTitle {
		height: 120rpx;
		font-size: 32rpx;
		display: flex;
		align-items: center;
		 margin-top: 46rpx; margin-left: 34rpx;
	}
	.serviceTitle .sfj{
		width: 206rpx;
		height: 49rpx;
		line-height: 49rpx;
		background-color: #ff4f06;
		color: #fff;
		font-weight: bold;
		text-align: center;
		border-radius: 30rpx;
		margin-left: 12rpx;
		font-size: 30rpx;
	}
	.close {
		position: absolute;
		top: 0;
		width: 90rpx;
		width: 90rpx;
		text-align: center;
		left: 0;
		line-height: 90rpx;
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
		width: 90%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;	
	}
	.ydd{
		padding: 10rpx 40rpx;
		border-radius: 30rpx;
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