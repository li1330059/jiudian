<template>
	<view class="sl3">
		<view class="xm">【异业合作】提供全国社区媒体等资源，寻找实物置换 </view>
		<view class="datt">
			<view>2022-12-04 14:45:36</view>
			<view>浏览量:1</view>
		</view>
		<view class="datt1">
			<view class="daLeft">
				<view class="fbb1">
					<view style="margin-top: 10rpx;">发布</view>
					<view>模板</view>
				</view>
				<view style="margin-left: 17rpx;">
					朱先生
				</view>
				<view style="margin-left: 17rpx; margin-top: -4rpx;">
					<image style="width: 45rpx; height: 14rpx; " src="../../static/img/svip.png"></image>
				</view>	
				<view>
					<image style="width: 50rpx; height: 18rpx;" src="../../static/img/sm.png"></image>
				</view>
			</view>
			<view style="width: 60rpx;">
				<image style="width: 28rpx; height: 24rpx;" src="../../static/img/warn.png"></image>
			</view>
		</view>
		<view class="datt2">
			<view style="margin-top: 28rpx;">
				<view class="d1">合作区域:全国</view>
				<view class="d1" style="margin-left: 305rpx;">编号:58570</view>
				<view class="d1">资源标签:实物置换/资源置换</view>
			</view>
		</view>
		<view class="">
			<view class="datt3">
				<view class="hzgsLeft"></view>
				<view class="hzgs">合作概述</view>
				<view class="hzgsLeft"></view>
			</view>			
		</view>
		<view>
			<view style="font-weight: bold; margin-top: 31rpx;">1.提供资源</view>
			<view style="">提供全国30w+丰巢快递柜品牌巨贴+液晶屏广告+屏保</view>
			<view style="font-weight: bold; margin-top: 31rpx;">2.合作模式</view>
			<view>广告直投或实物产品置换</view>
			<view style="font-weight: bold; margin-top: 31rpx;">3.需求资源</view>
			<view>需要做品牌宣传的客户</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.sl3{
	font-size: 28rpx;
	width: 96%;
	margin: 0 auto;
}
.sl3 .xm{
	font-size: 26rpx;	
}
.sl3 .datt{
	display: flex;
	justify-content: space-between;
	color: #a4a4a4;
	font-size: 22rpx;
	margin-top: 19rpx;
}
.sl3 .datt1{
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #cd898a;
	font-size: 22rpx;
	margin-top: 19rpx;
}
.sl3 .datt1 .daLeft{
	display: flex;
	align-items: center;
}
.sl3 .datt1 .daLeft .fbb1{
	width: 75rpx;
	height: 75rpx;
	border-radius: 50%;
	color: #fff;
	background-image: linear-gradient(to bottom, #68bfaf, #59b8b2);
	font-weight: bold;
	text-align: center;
	line-height: 26rpx;
}

.sl3 .datt2 .d1{
	display: inline-block;
	color: #a2a4a3;
}
.sl3 .datt3{
	width: 100%;
	display: flex;
	flex: 1;
}
.sl3 .datt3 .hzgs{
	position: relative;
	top: 20rpx;
	color: #5bb8a3;
}
.sl3 .datt3 .hzgsLeft{
	width: 37%;
	border-bottom: 2rpx #c0c2c1 dashed;
}
</style>
