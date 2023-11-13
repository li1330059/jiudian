<template>
	<view class="pwDetail">
		<image style="width: 100%; height: 424rpx;" :src="works.tp"></image>
		<view class="jdbody">
			<view>			
				
				<view style="margin-top: 20rpx; color: #f8683a; font-size: 24rpx; font-weight: bold;">
					<span>￥</span>
					<span style="font-size: 32rpx;">{{works.dj}}</span>
					<span>起</span>
				</view>
				<view style="font-weight: bold; margin-top: 20rpx;">{{works.title}}</view>
				<view style="font-weight: bold; font-size: 24rpx; margin-top: 20rpx;">{{works.value}}</view>
			</view>
			
			<view class="footer">
				
				<view class="service-bottom">
					<view style="display: flex;">
						<view>合计:</view>
						<view style="color: #fa5c2c; font-weight: bold;">￥ <span style="font-size: 32rpx;">{{works.dj}}</span></view>
					</view>
					<view @click="yud" class="ydd">立即购买</view>
				</view>				
			</view>
				
				
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				idd:"",
				works:[],
				lxs:[],
				serviceFlag:false,
				lxxq:[]
			}
		},
		
	
		onLoad(options) {
			this.idd=options.id
			console.log(this.idd)
		},
		onShow() {
			this.pwdt(),
			this.lxlb()
		},
		
		methods: {
			pwdt(){
				uni.request({
					method:"POST",
					url:this.apiUrl+"index/sdxq",
					data:JSON.stringify({
						"id":this.idd
					}),
					success: (res) => {
						console.log("sdxq")
						console.log(res)
						this.works=res.data
					}
				})
			},
			lxlb(){
				uni.request({
					method:"POST",
					url:this.apiUrl+"index/pwtc",
					data:JSON.stringify({
						uid:this.idd
					}),
					success: (res) => {
						console.log("套餐类型列表")
						console.log(res)
						 this.lxs = res.data
						// this.room["price"]=this.room.dj*this.allDate
						// this.lbb()
						 console.log(this.lxs)
					}
				})				
			},
			yud(id){
				uni.navigateTo({
					url:"/pages/sdqrorder/sdqrorder?sds="+JSON.stringify(this.works)
				})
			},
			closeService() {
				this.serviceFlag = false
			//	this.lbb()
			},
			tclxxq(id){
				this.serviceFlag=true
				uni.request({
					method:"POST",
					url:this.apiUrl+"index/pwtcxq",
					data:JSON.stringify({
						id:id
					}),
					success: (res) => {
						console.log("套餐类型详情")
						console.log(res)
						this.lxxq = res.data
						console.log(this.lxxq)
						 // this.room = res.data
						 // this.room["price"]=this.room.dj*this.allDate
						// this.lbb()
						// console.log(this.room)
					}
				})					
			},
		}
	}
</script>

<style>
.pwDetail .hdd{
	width: 100%;
	height: 120rpx;
	
	margin: 0 auto ;
	display: flex;
	line-height: 160rpx;
}
.pwDetail .jdbody{
	width: 95%;
	top: -42rpx;
	position:relative;
	z-index: 999;
	padding: 10rpx 20rpx;
	border-radius: 30rpx 30rpx 0 0;
	background-color: #fff;
}
.pwDetail .jdbody.mas{
	padding-top: 25rpx;
}
.pwDetail .jdbody .mas .marks{
	display: flex;
	font-size: 22rpx;
	padding-top: 25rpx;
}
.pwDetail .jdbody .mas .marks .mark1{
	padding: 4rpx 14rpx;
	background-image: linear-gradient(to right, #e1f6f9, #e7fbf1);
	color: #245039;
}
.pwDetail .jdbody .mas .marks .mark2{
	padding: 4rpx 14rpx;
	margin-left: 14rpx;
	background-image: linear-gradient(to right, #feeede, #fff6e8);
	color: #626262;
}
	.pwDetail .jpkc .jpkcContent{
		width: 96%;
		padding: 18rpx;
		margin: 30rpx auto;
		background-image: linear-gradient(to bottom, #83e9bb, #70d9d7);
		border-radius: 20rpx;
	}
	.pwDetail .jpkc .jpkcContent ul li:nth-child(1){
		margin-top: 20rpx;
	}
	.pwDetail .jpkc .jpkcContent ul li{
		padding-top: 25rpx;
		padding-bottom: 25rpx;
		border-bottom: 2rpx solid #ededed;
		
	}
	.pwDetail .jpkc .jpkcContent ul li .iio{
		position: relative;
		width: 100rpx;
		height: 26rpx;
		top: 20rpx;
		left: 645rpx;
		transform: rotate(45deg);
	}
	.pwDetail .jpkc .jpkcContent ul li .jpkcLeft{
		display: flex;
		background-color: #fff;
		justify-content: space-between;
		margin-top: -40rpx;
		padding: 20rpx 35rpx 20rpx 20rpx;
		border-radius: 20rpx;
	}
	.pwDetail .jpkc .jpkcContent ul li .jpkcLeft .jpkczi{
		
		width:100%;
		
		font-size: 28rpx;
		margin-left: 30rpx;
	}

	.pwDetail .jpkc .jpkcContent ul li .jpkcLeft .jpkcImg{
		border: 2rpx solid #f8f8f8;
	}
	
	.pwDetail .jpkc .jpkcContent ul li .jpkcLeft .jpkczi .jpkcBottom{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
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
		width: 95%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* margin: 0 auto;	 */
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
.fui-bottom__popup{
	text-align: center;
}
.fbp ._ul ._li:nth-child(1){
	color: #b0b0b0;
	font-size: 24rpx;
	height: 98rpx;
	line-height: 98rpx;
	border-bottom: 2rpx solid #e5e5e5;
}
.fbp ._ul ._li{
	
	height: 112rpx;
	line-height: 112rpx;
	border-bottom: 2rpx solid #e5e5e5;
	font-size: 28rpx;
}
.hidden {
	display: none;
}

.show {
	display: block;
}
</style>
