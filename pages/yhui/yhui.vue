<template>
	<view class="yh" :style="{ height: screenHeight }">
		<view class="hdd">
				<view @click="bback">
					<image style="width: 40rpx; height: 40rpx; margin-top: 60rpx; margin-left: 20rpx;  " src="../../static/img/arrow-left-bold.png"></image>
				</view>
				<view style="font-size: 34rpx; margin-left: 240rpx; font-weight: bold;">优惠券</view>					
			</view>
		<view style="text-align: center; margin-top: 260rpx;">
			<image style="width: 243rpx; height: 231rpx;" src="https://jhd.wangshangquan.top/static/img/dh.png"></image>
			<view style="margin-top: 20rpx; color: c1c2c4; font-size: 28rpx;">~空空如也哦~</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			 this.screenHeight = uni.getSystemInfoSync().windowHeight;
		},
		methods: {
			bback(){
				uni.navigateBack(-1)
			}
		}
	}
</script>

<style lang="scss">
	page {
	  width: 100%;
	  height: 100%;
	}
	.yh{
		width: 100%;
		min-height: 100%;
		.content-wrap {
		} 
		 
		background: url("https://jhd.wangshangquan.top/static/img/bag.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
		  background-attachment: fixed;
	}
	.yh .hdd{
		width: 100%;
		height: 120rpx;
		
		margin: 0 auto ;
		display: flex;
		line-height: 160rpx;
	}
</style>
