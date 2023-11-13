<template>
	<view @touchmove.stop.prevent="moveHandle">
		<view class="serviceDialog" @click="close">

		</view>
		<view class="serviceBox">
			<scroll-view class="service-content" scroll-y="true">
			<view class="service-top">
				<view class="serviceTitle">套餐说明</view>
				<view class="close" @click="close">
					<image style="width: 40rpx; height: 40rpx;" src="../static/img/close.png"></image>
				</view>			

			</view>
			<view style="width: 90%; margin: 0 auto; font-size: 26rpx; line-height: 40rpx;">{{lxxq.tcsm}}</view>


			</scroll-view>
		</view>

	</view>
</template>

<script>
	//import serviceDialog from '@/components/serviceDialog1.vue'
	export default {
		props:["lxxq"],
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
	
		created() {
			
			
		},

		methods: {

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
	.serviceBox .service-top{
		margin-top: 20rpx;
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
		text-align: center;
		/* display: flex;
		align-items: center;
		 margin-top: 46rpx; margin-left: 34rpx; */
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
		right: 0;
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