<template>
<view class="home" >

		

		<view class="header">
			<view class="mhd">
				<view @click="bback">
					<image style="width: 1rem; height: 1rem; margin-top: 20rpx; margin-left: 20rpx;" src="@/static/img/arrow-left-bold.png"></image>
				</view>
				<view style="font-size: 34rpx; color: #333; margin-left: 10upx; font-weight: bold;">票务</view>	
			</view>
			<view class="uni-margin-wrap">
				<swiper class="swiper" circular indicator-dots="true" autoplay="true" interval="5000"
					duration="500" indicator-color="rgba(255, 255, 255, .5)" indicator-active-color="#ffffff">
					<swiper-item>
						<view class="swiper-item uni-bg-red">
							
							<image style="border-radius: 30rpx; height: 300rpx;" :src="banners.banner1"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-green">
							<image style="border-radius: 30rpx; height: 300rpx;" :src="banners.banner2"></image>
						</view>
					</swiper-item>	
			
				</swiper>
			</view>			
		</view>		
		<view class="jpkc">
			<!-- <view class="jpkcTitle">精品课程</view> -->
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
								<p style="color: #dddddd; font-size: 24rpx; margin-top: 30rpx; ">已售{{item.ys}}笔</p>
				
								<view class="jpkcBottom">
									<view style="color: #e02433; font-size: 22rpx;">￥<span style="font-size: 32rpx; font-weight: bold;">{{item.dj}}</span>起</view>
									<view style="margin-top: 18rpx; color: #adadad; font-size: 24rpx;" class="jpkcPrice">
										<view class="ydd">预订</view>
										
									</view>
								</view>
								
							</view>
						</view>						
					</li>

				</ul>
			</view>
		
			
		 </view> 
		
		<!-- <ad adpid="122753290209"></ad> -->
	</view> 
</template>
<script>
	import liuNoticeBar from '@/components/liu-notice-bar/liu-notice-bar.vue'
	//import maoScroll from '@/components/mao-scroll/mao-scroll.vue';
	export default {
		 components: {liuNoticeBar},
		// components:{
		// 	maoScroll
		// },
		data() {
		
		return {
			a:1,
			data: [],
			count: 30,
			showNum: 1,
			lineHeight: 60,
			animationScroll: 800,
			animation: 2000,
			works:[],
			tittle:"",
			userInfo:[],
			banners:[],
			 noticeList: [{
						id: '11',
						titile: ''
					},
					{
						id: '22',
						titile: ''
					}
				],
			//屏幕高度
			screenHeight: 0,
			}
		},
		onLoad() {
			uni.showShareMenu({
				 withShareTicket:true,
				//设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
				menus:["shareAppMessage","shareTimeline"],
				
			})
			//   console.log('广告数据加载成功');
			
			//       let providerName = this.$refs.adRewardedVideo.getProvider();
			//       console.log('广告商名称::', providerName);
			let self = this;
			setTimeout(function(){
				console.log('模拟从网上获取数据 花费了1秒');
				self.createData();
				console.log(self.data, '获取到的数据');
			}, 5000);
		},
		onShow(){
		
			//this.gd()
			this.baner()
			this.lis()
			//let that = this

		},
		methods: {
			bback(){
				uni.navigateBack(-1)
			},

			baner(){
				uni.request({
					
					//url:"http://wsz.52manhuage.xyz/index/select_works_all",
					url:this.apiUrl+"index/pwbanner",
					success: (res) => {
						console.log("banners")
						console.log(res)
						this.banners = res.data
						console.log(this.banners)
					}
				})				
			},
			kcc(id){
				uni.navigateTo({
					url:"/pages/pwDetail/pwDetail?id="+id
				})
			},




			lis(){
				console.log("title")
				console.log(this.tittle)
				uni.request({
					
					url:this.apiUrl+"index/pw",
				
					success: (res) => {
						console.log("works")
						this.works = res.data
						console.log(this.works)
					}
				})
			},

	}	}
</script>

<style lang="scss">
	page {
	  width: 100%;
	  height: 100%;
	}
	.home{
		width: 100%;
		background-color: #ffffff;
	}
	.home .mhd{
		width:100%;
		height: 180rpx;
		display: flex;
		align-items: center;
	}
	.home .header{
		margin-top: 0;
		width: 100%;

	}


	.home .immg{
		position: relative;
		top: 104rpx;
		left: 130rpx;
	}
	.home .uni-margin-wrap{
		padding-bottom: 20rpx;
	}
	.home .uni-margin-wrap image{
		width: 95%;
		margin-left: 2.5%;
	}



	.home .iccon ul li .huan .kao{
		width: 76rpx;
		height: 76rpx;
		margin-left: 26rpx;
		margin-top: 14rpx;
		border-radius: 50%;
		
		text-align: center;
		line-height: 76rpx;
		font-size: 42rpx;
		color: #fff;
	}
	.home .iccon ul li .huan .yi{
		width: 76rpx;
		height: 76rpx;
		margin-left: 26rpx;
		margin-top: 14rpx;
		border-radius: 50%;
		
		text-align: center;
		line-height: 76rpx;
		font-size: 42rpx;
		color: #fff;
	}
	.home .iccon ul li .huan .zhi{
		width: 76rpx;
		height: 76rpx;
		margin-left: 26rpx;
		margin-top: 14rpx;
		border-radius: 50%;
		
		background-size: 100%;
		text-align: center;
		line-height: 76rpx;
		font-size: 42rpx;
		color: #fff;
	}
	.home .iccon ul li  .iccontt{
		text-align: center;
		margin-top: 6rpx;
		font-size: 26rpx;
	}
	.home .tuii{
		width: 96%;
		height: 80rpx;
		box-shadow: 0 0 10px 3px #ededed;
		border-radius: 10rpx;
		border-top: 2rpx solid #f2f2f2;
		border-bottom: 2rpx solid #f2f2f2;		
		margin: 25rpx auto 0;
		display: flex;
		align-items: center;
		background-color: #fff;
	}
	.home .tuii image{
		margin-left: 30rpx;
	}
	.home .tuii .line{
		
		line-height: 80rpx;

	}
/* 	.home .jpkc{
		border-radius: 10rpx;
		/* width: 94%; 
		margin: 25rpx auto 0;
		background-color: #fff;
		box-shadow: 0 0 10px 3px #e6e6e6;
	} */
/* 	.home .jpkc .jpkcTitle, .home .teacher .ttitle{
		text-indent: 20rpx;
		padding: 20rpx 0;
		font-weight: bold;
		box-shadow: 0 0 10px 3px #e6e6e6;
		
	} */
	.home .jpkc .jpkcContent{
		width: 96%;
		margin: 0 auto;
	}
	.home .jpkc .jpkcContent ul li{
		

	}
	.home .jpkc .jpkcContent ul li .iio{
		position: relative;
		width: 100rpx;
		height: 26rpx;
		top: 20rpx;
		left: 645rpx;
		transform: rotate(45deg);
	}
	.home .jpkc .jpkcContent ul li .jpkcLeft{
		display: flex;
		background-color: #fff;
		justify-content: space-between;
		margin-top: -30rpx;
		padding: 20rpx 35rpx 20rpx 20rpx;
		
	}
	.home .jpkc .jpkcContent ul li .jpkcLeft .jpkczi{
		
		width: 480rpx;
		
		font-size: 28rpx;
		margin-left: 30rpx;
	}

	.home .jpkc .jpkcContent ul li .jpkcLeft .jpkcImg{
		border: 2rpx solid #f8f8f8;
	}
	
	.home .jpkc .jpkcContent ul li .jpkcLeft .jpkczi .jpkcBottom{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.home .jpkc .jpkcContent ul li .jpkcLeft .jpkczi .jpkcBottom .ydd{
		padding: 15rpx 40rpx;
		border-radius: 30rpx;
		color: #fff;
		background-image: linear-gradient(to right, #f9800b, #f65b19);
	}
</style>
