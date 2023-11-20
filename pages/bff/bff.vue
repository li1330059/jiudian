<template>
	<view>
		<view class="hdd">
				<view @click="bback">
					<image style="width: 40rpx; height: 40rpx; margin-top: 60rpx; margin-left: 20rpx;  " src="../../static/img/arrow-left-bold.png"></image>
				</view>
				<view style="font-size: 34rpx; margin-left: 240rpx;" v-if="type==0">联系客服</view>					
				<view style="font-size: 34rpx; margin-left: 240rpx;" v-if="type==1">隐私政策</view>					
				<view style="font-size: 34rpx; margin-left: 240rpx;" v-if="type==2">用户协议</view>					
			</view>
			<view style="width: 90%; margin: 10rpx auto; font-size: 28rpx;">{{info}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:"",
				type:0
			}
		},
		onLoad(options){
			this.type=options.type
		},
		onShow(){
			uni.request({
				url:this.oldApiUrl+"index/xcxsz",
				success: (res) => {
					console.log("分")
					console.log(res)
					if(this.type==0){
						this.info=res.data.kfphone
					}
					if(this.type==1){
						this.info=res.data.yszc
					}
					if(this.type==2){
						this.info=res.data.yhxy
					}
				}
			})
		},
		methods: {
			bback(){
				uni.navigateBack(-1)
			},
		}
	}
</script>

<style>
.hdd{
	width: 100%;
	height: 120rpx;
	
	margin: 0 auto ;
	display: flex;
	line-height: 160rpx;
}
</style>
