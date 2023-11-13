<template>
	<view class="pwDetail">
		<image style="width: 100%; height: 750rpx;" :src="works.tp"></image>
		<view class="jdbody">
			<view>			
				
				<view style="margin-top: 20rpx; color: #f8683a; font-size: 24rpx; font-weight: bold;">
					<span>￥</span>
					<span style="font-size: 32rpx;">{{works.dj}}</span>
					<span>起</span>
				</view>
				<view style="font-weight: bold; margin-top: 20rpx;">{{works.title}}</view>
				<view style="font-weight: bold; font-size: 24rpx; margin-top: 20rpx;">{{works.pw}}</view>
			</view>
			
			<view class="mas">
		
				<view style="font-size: 28rpx; color: #a2a2a4; margin-top: 22rpx; border-bottom: 2rpx #f0f0f0 solid; padding-bottom: 24rpx;">{{works.jj}}</view>
			
			
				
				<!-- <view style="font-weight: bold; padding-top: 38rpx;">{{lbs[0].fymx}}</view> -->
				<view style="display: flex; width: 95%; align-items: center; margin: 0 auto;">
				
					</view>
					
				<!-- 	<view style="display: flex; align-items: center; ">					
						<view>共{{allDate}} 晚</view>
						<image style="width: 10rpx; height: 19rpx;margin-left: 14rpx;" src="../../static/img/yoo.png"></image>
					</view> -->
				</view>
				
		
				<view class="jpkc">
					<!-- <view class="jpkcTitle">精品课程</view> -->
					<view class="jpkcContent">
						<ul>
							<li   v-for="(item,index) in lxs" :key="index">
								<!-- <image class="iio" src="../../static/img/zhd.png"></image> -->
								<view class="jpkcLeft">
									
									<view class="jpkczi">
										<p style=" font-weight: bold;">{{item.title}}</p>
										<p style="color: #8f8f8f; font-size: 26rpx; margin-top: 30rpx; ">{{item.value}}</p>
						
										<view class="jpkcBottom">
											<view style="display: flex; align-items: center;">			
												<view style="color: #e02433; font-size: 22rpx;">￥<span style="font-size: 32rpx; font-weight: bold;">{{item.dj}}</span>起</view>
												<view style="font-size: 20rpx; margin-left: 26rpx; color: #69d2f0;" @click="tclxxq(item.id)">套餐说明 >></view>
											</view>
											<view style="margin-top: 18rpx; color: #adadad; font-size: 24rpx;" class="jpkcPrice">
												<view class="ydd" @click="yd(item.id)">预订</view>
												
											</view>
										</view>
										
									</view>
								</view>						
							</li>
				
						</ul>
					</view>
				
					
				 </view> 
				 <serviceDialog @close="closeService" :lxxq="lxxq" @yud="yud" class="hidden" :class="{show:serviceFlag}"></serviceDialog>
			</view>
		</view>
	</view>
</template>

<script>
	import serviceDialog from '@/components/serviceDialog2.vue'
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
		components: {
		    serviceDialog
			
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
					url:this.apiUrl+"index/pwxq",
					data:JSON.stringify({
						"id":this.idd
					}),
					success: (res) => {
						console.log("pwxq")
						console.log(res)
						this.works=res.data
					}
				})
			},
			yd(id){
			
					uni.navigateTo({
						url:"/pages/pwqrorder/pwqrorder?tcid="+this.idd+"&tclxid="+id+"&title="+this.title
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
	.pwDetail .jpkc .jpkcContent ul li .jpkcLeft .jpkczi .jpkcBottom .ydd{
		padding: 15rpx 40rpx;
		border-radius: 30rpx;
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
