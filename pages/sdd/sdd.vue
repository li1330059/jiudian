<template>
	<view class="jdd" :style="{ height: screenHeight }">
		<view class="hdd">
				<view @click="bback">
					<image style="width: 40rpx; height: 40rpx; margin-top: 60rpx; margin-left: 20rpx;  " src="../../static/img/arrow-left-bold.png"></image>
				</view>
				<view style="font-size: 34rpx; margin-left: -60rpx; font-weight: bold;">商店</view>		
							<view style="font-size: 34rpx; color: #fff;"></view>
			</view>
				<view class="main">
					<scroll-view class="main-scroll" scroll-y="true">
			<table class="table">
			  <template v-for="(item,index) in jdds" v-if="index%2==0">
			    <tr>
			    <!--  <td class="video-row" @click="goto(item.id,item.title)">-->
			      <td  class="video-row" @click="detail(item.id)">
			        <div class="row-line">
			         <!-- <img :src="item.spurl" width="100%"/> -->
					<image style="width: 345rpx; height: 237rpx; border-radius: 15rpx 15rpx 0 0;" :src="item.tp"></image>
			        
					  <div style="margin-left: 20rpx;">
						  <div style="margin-top: 10rpx;">
							  <span style="font-weight: bold; font-size: 30rpx;">{{item.tt}}</span>
						  </div>
							<div style="margin-top: 10rpx;">
							  
							  <span style="color: #5c5c5c; font-size: 22rpx; ">剩余库存：{{item.kc}}</span>
							  <!-- <span style="font-size: 24rpx;">{{" "}}{{" "}}{{item.nums}}人已付款</span> -->
							</div>
							<div style="display: flex; width: 310rpx; justify-content: space-between; align-items: center;">
							  
							  <view style="color: #e02433; font-size: 22rpx;">￥<span style="font-size: 32rpx; font-weight: bold;">{{item.dj}}</span></view>
							  <view style="margin-top: 18rpx; color: #adadad; font-size: 24rpx;" class="jpkcPrice">
							  	<view class="ydd">购买</view>
							  	
							  </view>
							</div>
					  </div>

			        </div>
			      </td>
			      <!--添加td作为两行之间的间距，td中用&nbsp;进行占位-->
			      <td class="line-bg">&nbsp;</td>
			      <td v-if="index+1<jdds.length"  class="video-row"  @click="detail(jdds[index+1].id)">
			        <div class="row-line">
			         <!-- <img :src="jdds[index+1].src" width="100%"/>-->
					 <image style="width: 345rpx; height: 237rpx; border-radius: 15rpx 15rpx 0 0;" :src="jdds[index+1].tp"></image>
							
							<div style="margin-left: 20rpx;">
								  <div style="margin-top: 10rpx;">
									  <span style="font-weight: bold; font-size: 30rpx;">{{jdds[index+1].tt}}……</span>
								  </div>
									<div style="margin-top: 10rpx;">
									  
									  <span style="color: #5c5c5c; font-size: 22rpx; ">剩余库存：{{jdds[index+1].kc}}</span>
									  <!-- <span style="font-size: 24rpx;">{{" "}}{{" "}}{{item.nums}}人已付款</span> -->
									</div>
									<div style="display: flex; width: 310rpx; justify-content: space-between; align-items: center;">
									  
									  <view style="color: #e02433; font-size: 22rpx;">￥<span style="font-size: 32rpx; font-weight: bold;">{{item.dj}}</span></view>
									  <view style="margin-top: 18rpx; color: #adadad; font-size: 24rpx;" class="jpkcPrice">
									  	<view class="ydd">购买</view>
									  	
									  </view>
									</div>
							</div>
			        </div>
			      </td>
			    </tr>
			  </template>
			</table>
			
			</scroll-view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				jdds:[],
				//屏幕高度
				screenHeight: 0,
			}
		},
		onLoad() {
			 this.screenHeight = uni.getSystemInfoSync().windowHeight;
		},
		onShow() {
			uni.request({
				url:this.apiUrl+"index.php/index/sd",
				success: (res) => {
					console.log("商店")
					console.log(res)
					this.jdds=res.data
					for(let i=0; i<this.jdds.length; i++){
						this.jdds[i]['tt']=this.jdds[i].title.substring(0,8)
					}
				}
			})
		},
		methods: {
			bback(){
				uni.navigateBack(-1)
			},
			detail(id){
				if(uni.getStorageSync("token")==""){
					uni.navigateTo({
						url:"/pages/login/login"
					})
				}else{
					uni.navigateTo({
						url:"/pages/sdDetail/sdDetail?id="+id
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
	  width: 100%;
	  height: 100%;
	}
.jdd{
	width: 100%;
	min-height: 100%;
	.content-wrap {
	}
	 
	background: url("https://jhd.wangshangquan.top/static/img/ssd.png");
	background-size: 100% 100%;
	background-repeat: no-repeat;
	  background-attachment: fixed;
}
.jdd .hdd{
	width: 100%;
	height:220rpx;
	
	margin: 0 auto ;
	display: flex;
	justify-content: space-between;
	line-height: 160rpx;
}
	.main {
			height: 85vh;
			position: relative;
		}
	 
		.main-scroll {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
		}
	.table{
	  width:100%;
	  border-spacing: 5px;
	}

	table tr{
		width: 95%;
		/* height: 732rpx; */
		margin: 18rpx auto;
		display: flex;
		flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-between
	}
	// table tr:nth-child(1){
	// 	margin-top: 150rpx;
	// }
	table tr td{
		vertical-align:top;
		/* padding-top: 10px; */
	}
	.video-row{
	  width: 345rpx;
	  height: 420rpx;
	  border-radius: 15rpx;
	  /* color: #000; */
	  background-color: #fff;
	  font-size: 28rpx;
	}
	.video-title{
		width: 100%;
		height: 38rpx;
		line-height: 38rpx;
		background: url("../../static/img/tbg.png");
		background-size: cover;
		margin-top: -10rpx;
		display: flex;
		/* background-image: linear-gradient(to right, #8aedc9, #a5e1dd); */
	}
	.ydd{
		padding: 10rpx 40rpx;
		border-radius: 30rpx;
		color: #fff;
		background-image: linear-gradient(to right, #f9800b, #f65b19);
	}

</style>
