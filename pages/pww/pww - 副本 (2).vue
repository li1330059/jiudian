<template>
	<view class="tcc" :style="{ height: screenHeight }">
		<view class="hdd">
				<view @click="bback">
					<image style="width: 40rpx; height: 40rpx; margin-top: 60rpx; margin-left: 20rpx;  " src="../../static/img/arrow-left-bold1.png"></image>
				</view>
				<view style="font-size: 34rpx; color: #fff; margin-left: -60rpx;">票务</view>					
				<view style="font-size: 34rpx; color: #fff;"></view>					
			</view>	
			<scroll-view class="service-content" scroll-y="true">
		<view class="jpkc">
			<!-- <view class="jpkcTitle">精品课程</view> -->
			<view class="dingdan-msg"  :class="{active:flag}">
				<view class="jpkcContent">
					<ul>
						<li  @click="kcc(item.id)" v-for="(item,index) in works" :key="index">
							<image class="iio" src="../../static/img/zhd.png"></image>
							<view class="jpkcLeft">
								<view class="jpkcImg">
									<image style="width:160rpx; height:160rpx; border-radius: 20rpx;" :src="item.tp"></image>
								</view>
								<view class="jpkczi">
									<p style=" font-weight: bold;">{{item.title}}</p>
									<p style="color: #dddddd; font-size: 24rpx; margin-top: 10rpx; ">已售{{item.ys}}笔</p>
					
									<view class="jpkcBottom">
										<view style="color: #e02433; font-size: 22rpx;">￥<span style="font-size: 32rpx; font-weight: bold;">{{item.dj}}</span>起</view>
										<view style=" color: #adadad; font-size: 24rpx;" class="jpkcPrice">
											<view class="ydd">预订</view>
											
										</view>
									</view>
									
								</view>
							</view>						
						</li>
			
					</ul>
				</view>
			</view>
			<view style="text-align: center;">
				<view class="show-or-noshow" @click = "showTag">{{flag?"收起":"查看更多"}}
					<image v-if="flag==0" style="width: 32rpx; height: 32rpx;" src="../../static/img/xiangxiajiantou.png"></image>
					<image v-if="flag==1" style="width: 32rpx; height: 32rpx;" src="../../static/img/xiangshangjiantou.png"></image>
				</view>
			</view>
			
		 </view> 
		 </scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				works:[],
				flag: false,
				  //屏幕高度
				 screenHeight: 0,
			}
		},
		onShow() {
			this.tc()
		},
		onLoad() {
			 this.screenHeight = uni.getSystemInfoSync().windowHeight;
		},
		methods: {
			bback(){
				uni.navigateBack(-1)
			},
			kcc(id){
				uni.navigateTo({
					url:"/pages/pwDetail/pwDetail?id="+id
				})
			},
			tc(){
				uni.request({
					url:this.apiUrl+"index.php/index/pw",
					success: (res) => {
						console.log("套餐")
						console.log(res)
						this.works=res.data
						console.log(this.works)
						// for(let i=0; i<this.jdds.length; i++){
						// 	this.jdds[i]['tt']=this.jdds[i].title.substring(0,8)
						// }
					}
				})	
			},
			showTag(){
			    this.flag = !this.flag;
			}, 
		}
	}
</script>

<style lang="scss">
	page {
	  width: 100%;
	  height: 100%;
	}
.tcc{
	width: 100%;

	 
	background: url("https://jhd.wangshangquan.top/static/img/tcbg.png");
	background-size: 100% 100%;
	  min-height: 100%;
	  background-repeat: no-repeat;
	  background-attachment: fixed;
}
.tcc .hdd{
	width: 100%;
	height: 120rpx;
	background-color: red;
	margin: 0 auto ;
	display: flex;
	justify-content: space-between;
	line-height: 160rpx;
}
	.tcc .jpkc .jpkcContent{
		width: 90%;
		margin: 200rpx auto;
	}
	.tcc .jpkc .jpkcContent ul li:nth-child(1){
		margin-top: 80rpx;
	}
	.tcc .jpkc .jpkcContent ul li .iio{
		position: relative;
		width: 100rpx;
		height: 26rpx;
		top: 20rpx;
		left: 645rpx;
		transform: rotate(45deg);
	}
	.tcc .jpkc .jpkcContent ul li .jpkcLeft{
		display: flex;
		background-color: #fff;
		justify-content: space-between;
		margin-top: -30rpx;
		padding: 20rpx 35rpx 20rpx 20rpx;
		border-radius: 20rpx;
	}
	.tcc .jpkc .jpkcContent ul li .jpkcLeft .jpkczi{
		
		width: 480rpx;
		
		font-size: 28rpx;
		margin-left: 30rpx;
	}

	.tcc .jpkc .jpkcContent ul li .jpkcLeft .jpkcImg{
		border: 2rpx solid #f8f8f8;
	}
	
	.tcc .jpkc .jpkcContent ul li .jpkcLeft .jpkczi .jpkcBottom{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 24rpx;
	}
	.tcc .jpkc .jpkcContent ul li .jpkcLeft .jpkczi .jpkcBottom .ydd{
		padding: 15rpx 40rpx;
		border-radius: 30rpx;
		color: #fff;
		background-image: linear-gradient(to right, #f9800b, #f65b19);
	}
	/* 初始高度，超出隐藏 */
	.dingdan-msg{
		height: 1000rpx;
		overflow: hidden; 
		
	}
	.service-content {
		position: absolute;
		top: 0;
		bottom: 100rpx;
		left: 0rpx;
		right: 0rpx;
	}
	/*  高度自适应，全部显示 */
	    .active{
			min-height: 920rpx;
	        height: auto;
	        overflow: visible;
	    }
		.show-or-noshow{
			color: #fff;
			margin-top: 30rpx;
			font-size: 24rpx;
		}
</style>
