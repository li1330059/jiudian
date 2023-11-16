<template>
<view class="home">
		<view class="bj">
			<image style="width: 100%;position: absolute;top: 0;z-index: -1;" :src="banners.bg_groud_img"></image>
			<view class="ipt">
				<input type="text" placeholder="张家口奥林匹克公园" placeholder-class="iipt" />
				<image style="width: 40rpx; height: 40rpx; position: relative; left: 55rpx; top: -50rpx;" src="../../static/img/sousuo.png"></image>
			</view>
			<view class="jie">
				<view style="font-weight: bold;">张家口崇礼奥林匹克公园</view>
				<view style="display: flex; align-items: center; font-size: 26rpx;">
					<image style="width: 30rpx; height: 24rpx;" src="../../static/img/fe.png"></image>
					<view>{{wth[0].winddirection}}风{{wth[0].windpower}}级&nbsp;&nbsp;{{wth[0].temperature}}&#8451;</view>
				</view>
			</view>
		</view>
		<view class="ttbody">
			
			<image @click="ppw" style="width: 344rpx; height: 159rpx;" src="../../static/img/pww.png"></image>
			<image @click="jd" style="width: 344rpx; height: 159rpx; margin-left: 20rpx;" src="../../static/img/jdd.png"></image>
			<image @click="tc" style="width: 344rpx; height: 159rpx;" src="../../static/img/tcan.png"></image>
			<image @click="shop" style="width: 344rpx; height: 159rpx; margin-left: 20rpx;" src="../../static/img/shop.png"></image>
		</view>
		<swiper class="swiper" circular indicator-dots="true" autoplay="true" interval="5000"
			duration="500" indicator-color="rgba(255, 255, 255, .5)" indicator-active-color="#ffffff">
			<swiper-item v-for="(item,index) in banners.banner" @click="goDetail(item.url)">
				<image style="width: 100%; height: 159rpx;" :src="item.img"></image>
			</swiper-item>
		</swiper>
		<view class="jxx">
			<view style="width: 95%; margin: 0 auto; font-weight: bold;">精选</view>
			<table class="table">
			  <template  v-for="(item,index) in tuis" v-if="index%2==0">
			    <tr>
			    <!--  <td class="video-row" @click="goto(item.id,item.title)">-->
			      <td  class="video-row" @click="detail(item.id)">
			        <div class="row-line">
			         <!-- <img :src="item.spurl" width="100%"/> -->
				<scroll-view  scroll-x="true" style="width: 100%;  overflow:hidden;white-space:nowrap;">
							<image  v-for="(itemm,index) in item.arrs" style="width: 327rpx; height: 277rpx; border-radius: 15rpx 15rpx 0 0;" :src="itemm"></image>
					</scroll-view>
					  <div style="margin-left: 20rpx;">
						  <div style="margin-top: 10rpx;">
							  <span style="font-weight: bold; font-size: 30rpx;">{{item.title}}</span>
						  </div>
							<div style="margin-top: 10rpx;">
							  
							  <span style="color: #5c5c5c; font-size: 22rpx; ">{{item.jj}}</span>
							  <!-- <span style="font-size: 24rpx;">{{" "}}{{" "}}{{item.nums}}人已付款</span> -->
							</div>
							<div style="display: flex; width: 280rpx; justify-content: space-between; align-items: center;">
							  
							  <view style="color: #f8683a; font-size: 22rpx;">￥<span style="font-size: 32rpx; font-weight: bold;">{{item.dj}}</span></view>
							  <view style="margin-top: 18rpx; color: #bfbfbf; font-size: 24rpx;" class="jpkcPrice">
							  	<view class="ydd">已售{{item.ys}}</view>
							  	
							  </view>
							</div>
					  </div>
			
			        </div>
			      </td>
			      <!--添加td作为两行之间的间距，td中用&nbsp;进行占位-->
			      <td class="line-bg">&nbsp;</td>
			      <td v-if="index+1<tuis.length"  class="video-row"  @click="detail(tuis[index+1].id)">
			        <div class="row-line">
			         <!-- <img :src="tuis[index+1].src" width="100%"/>-->
					 <scroll-view  scroll-x="true" style="width: 100%;  overflow:hidden;white-space:nowrap;">
					 <image v-for="(itemm,index) in tuis[index+1].arrs" style="width: 327rpx; height: 277rpx; border-radius: 15rpx 15rpx 0 0;" :src="itemm"></image>
					</scroll-view>
							<div style="margin-left: 20rpx;">
								  <div style="margin-top: 10rpx;">
									  <span style="font-weight: bold; font-size: 30rpx;">{{tuis[index+1].title}}</span>
								  </div>
									<div style="margin-top: 10rpx;">
									  
									  <span style="color: #5c5c5c; font-size: 22rpx; ">{{tuis[index+1].jj}}</span>
									  <!-- <span style="font-size: 24rpx;">{{" "}}{{" "}}{{item.nums}}人已付款</span> -->
									</div>
									<div style="display: flex; width: 280rpx; justify-content: space-between; align-items: center;">
									  
									  <view style="color: #f8683a; font-size: 22rpx;">￥<span style="font-size: 32rpx; font-weight: bold;">{{tuis[index+1].dj}}</span></view>
									  <view style="margin-top: 18rpx; color: #bfbfbf; font-size: 24rpx;" class="jpkcPrice">
									  	<view class="ydd">已售{{tuis[index+1].ys}}</view>
									  	
									  </view>
									</div>
							</div>
			        </div>
			      </td>
			    </tr>
			  </template>
			</table>
		</view>
		 <serviceDialog :room="room" @close="closeService" @yud="yud" class="hidden" :class="{show:serviceFlag}"></serviceDialog>
	</view> 
</template>
<script>
	import serviceDialog from '@/components/serviceDialog3.vue'
	/**
	 * 获取任意时间
	 */
	function getDate(date, AddDayCount = 0) {
		
		if (!date) {
			date = new Date();
		}
		if (typeof date !== 'object') {
			date = date.replace(/-/g, '/');
		}
		const dd = new Date(date);
	
		dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期
	
		const y = dd.getFullYear();
		const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
		const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
	//	const dayy = dd.getDay()
		var day = dd.getDay()
		switch(day){
			case 0:
				day="星期天";
				break;
			case 1:
				day="星期一";
				break;
			case 2:
				day="星期二";
				break;
			case 3:
				day="星期三";
				break;
			case 4:
				day="星期四";
				break;
			case 5:
				day="星期五";
				break;
			case 6:
				day="星期六";
				break;				
		}
		return {
			fullDate: y + '-' + m + '-' + d,
			fuDate: m + '月' + d+'日',
			year: y,
			month: m,
			date: d,
			day: day,
	
		};
		
	}
	export default {

		components:{
			serviceDialog
		},
		data() {
		
		return {
				banners:{},
				wth:[],
				tuis:[],
				room:[],
				serviceFlag: false,
				startDate:"",
				endDate:"",
				allDate:1,
				day:"",
				today:"",
				beforeDate:"",
				afterDate:""
			}
		},
		onLoad(options) {
		uni.showShareMenu({
				 withShareTicket:true,
				//设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
				menus:["shareAppMessage","shareTimeline"]
			})

		},
		onShow(){
		//	uni.setStorageSync("openid","15590807933")
			this.baner(),
			this.weather()
			this.tui()
			this.startDate = getDate(new Date()).fuDate;
			this.endDate = getDate(new Date(),1).fuDate;
			this.day = getDate(new Date(),1).day;
			this.today= getDate(new Date()).day;
			if(this.today==getDate(new Date()).day){
				this.today="今天"
				this.beforeDate=getDate(new Date()).fullDate
				console.log("今天")
				console.log(this.beforeDate)
			}
			if(this.day == getDate(new Date(),1).day){
				this.day="明天"
				this.afterDate=getDate(new Date(),1).fullDate
				console.log("明天")
				console.log(this.afterDate)
			}
		},
		methods: {
			detail(id){
				this.serviceFlag=true
				uni.request({
					method:"POST",
					url:this.apiUrl+"index/jdfjxq",
					data:JSON.stringify({
						id:id
					}),
					success: (res) => {
						console.log("房间详情")
						console.log(res)
						 this.room = res.data
						 this.room["price"]=this.room.dj*this.allDate
						 this.room["arrs"]=this.room.tp.split("|")
						 console.log(this.room.arrs)
						// this.lbb()
						 console.log(this.room)
					}
				})
			},
			yud(){
				uni.navigateTo({
					url:"/pages/qrorder/qrorder?startDate="+this.startDate+"&today="+this.today+"&stopDate="+this.endDate+"&day="+this.day+"&room="+JSON.stringify(this.room)+"&allDate="+this.allDate+"&idd="+this.room.id+"&beforeDate="+this.beforeDate+"&afterDate="+this.afterDate
				})
			},
			goDetail(url){
				uni.navigateTo({
					url:url
				})
			},
			closeService() {
				this.serviceFlag = false
			//	this.lbb()
			},
			weather(){
				uni.request({
					url:"https://restapi.amap.com/v3/weather/weatherInfo?city=130700&key=0c03ac82cb8262648f78775064b806ce",
					success: (res) => {
						console.log("天气")
						console.log(res)
						this.wth=res.data.lives
						console.log(this.wth)
					}
				})
			},
			tc(){
				uni.navigateTo({
					url:"/pages/tcc/tcc"
				})
			},
			ppw(){
				uni.navigateTo({
					url:"/pages/pww/pww"
				})
			},
			shop(){
				uni.navigateTo({
					url:"/pages/sdd/sdd"
				})
			},
			baner(){
				uni.request({
					
					//url:"http://wsz.52manhuage.xyz/index/select_works_all",
					url:this.apiUrl+"index/sybanner",
					success: (res) => {
						console.log("banners")
						console.log(res)
						this.banners = res.data.data
						console.log(this.banners)
					}
				})				
			},
			jd(){
				uni.navigateTo({
					url:"/pages/jdd/jdd"
				})
			},
			tui(){
				uni.request({
					
					//url:"http://wsz.52manhuage.xyz/index/select_works_all",
					url:this.apiUrl+"index/tj",
					success: (res) => {
						console.log("推荐")
						console.log(res)
						this.tuis = res.data
						for(let i=0; i<this.tuis.length; i++){
							this.tuis[i]["arrs"]=this.tuis[i].tp.split("|")
						}
						console.log(this.tuis)
					}
				})	
			}
	}	}
</script>

<style>
.home .bj{
	width: 750rpx;
	height: 378rpx;
	padding-top: 82rpx;
	background-size: cover;	
}
.home .bj .ipt input{
	width: 411rpx;
	height: 63rpx;
	background-color: #fff;
	border-radius: 10rpx;
	padding-left: 70rpx;
	margin-left: 23rpx;
}
.iipt{
	font-size: 28rpx;
}
.home .bj .jie{
	color: #fff;
	width: 90%;
	margin: 180rpx auto;
	display: flex;
	justify-content: space-between;
}
.home .ttbody{
	width: 95%;
	background-color: #fff;
	margin-top: -34rpx;
	border-radius: 50rpx 50rpx 0 0; 
	padding: 30rpx 20rpx;
}
.swiper{
	height: 159rpx;
}
.swiper{
	width: 95%;
	margin: 0 auto;
}
 .home .jxx{
	width: 95%;
	height: 943rpx;
	background: url("https://jhd.wangshangquan.top/static/img/jxbg.png");
	background-size: 100% 100%;
	margin: 30rpx auto;
	padding-top: 48rpx;
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
	table tr td{
		vertical-align:top;
		/* padding-top: 10px; */
	}
	.video-row{
	  width: 327rpx;
	  height: 425rpx;
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
	.hidden {
		display: none;
	}
	
	.show {
		display: block;
	}
</style>
