<template>
	<view class="jdjj" :style="{ height: screenHeight }">
		<view class="hdd">
				<view @click="bback">
					<image style="width: 40rpx; height: 40rpx; margin-top: 60rpx; margin-left: 20rpx;  " src="../../static/img/arrow-left-bold.png"></image>
				</view>
				<view style="font-size: 34rpx; margin-left: -60rpx; font-weight: bold;">酒店简介</view>
									<view style="font-size: 34rpx; color: #fff;"></view>
			</view>	
			<view style="width: 90%; margin: 0 auto; font-size: 28rpx; line-height: 40rpx;">{{jj}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//屏幕高度
				screenHeight: 0,
				jj:""
			}
		},
		onLoad() {
			 this.screenHeight = uni.getSystemInfoSync().windowHeight;
		},
		onShow(){
			uni.request({
				url:this.oldApiUrl+"index/xcxsz",
				success: (res) => {
					console.log(res)
					this.jj=res.data.jdjj
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page {
	  width: 100%;
	  height: 100%;
	}	
.jdjj{
	width: 100%;
	min-height: 100%;
	.content-wrap {
	} 
	 
	background: url("https://jhd.wangshangquan.top/static/img/bag.png");
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-attachment: fixed;
}
.jdjj .hdd{
	width: 100%;
	height: 120rpx;
	
	margin: 0 auto ;
	display: flex;
	justify-content: space-between;
	line-height: 160rpx;
}
</style>
