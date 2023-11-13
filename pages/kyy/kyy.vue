<template>
	<view class="myOrder" :style="{ height: screenHeight }">
		<view class="wrapper">
		<view class="hdd">
				<view @click="bback">
					<image style="width: 40rpx; height: 40rpx; margin-left: 20rpx;  " src="../../static/img/arrow-left-bold.png"></image>
				</view>
				<view style="font-size: 34rpx; margin-left: 240rpx;">卡券预约</view>					
			</view>
			<view class="myBody">
				<!-- <tabs  v-model="current1" :tabs="tabs1" @change="changeTab1"></tabs> -->
				<!-- <tabs  v-model="current" :tabs="tabs" @change="changeTab"></tabs> -->
				<view style="width: 100%; height: 90rpx; background-color: #fff; position: fixed; bottom: 0; line-height: 90rpx;">
					<ul style="width: 90%; margin: 0 auto;">
						<li class="lii" style="display: inline-block; margin-left: 20%;"  v-for="(item,index) in tabs":key="index" @click="btn(index,item.dd)" :class="{'active' : current==index}">{{item.value}}</li>
					</ul>
				</view>
		<!-- 		<view style="margin-top: 20rpx;">
					<ul>
						<li class="lli" style="display: inline-block; margin-left: 5%;"  v-for="(item,index) in tabs1":key="index" @click="btnn(index,item.status)" :class="{'active1' : current1==index}">{{item.value}}</li>
					</ul>
				</view> -->
				<view class="main" style="margin-top: 80rpx;">
					<scroll-view class="main-scroll" scroll-y="true">
					<view class="jpkc">
						<view style="text-align: center; margin-top: 260rpx;" v-if="works.length==0">
							<image style="width: 243rpx; height: 231rpx;" src="https://jhd.wangshangquan.top/static/img/dh.png"></image>
							<view style="margin-top: 20rpx; color: c1c2c4; font-size: 28rpx;">~空空如也哦~</view>
						</view>
								<!-- <view class="jpkcTitle">精品课程</view> -->
								<view class="jpkcContent" v-if="works.length!=0">
									<ul>
										<li   v-for="(item,index) in works" :key="index">
											<image class="iio" src="../../static/img/zhd.png"></image>
											<view class="jpkcLeft">
												<view class="jpkcImg">
													<image style="width:160rpx; height:160rpx; border-radius: 20rpx;" :src="item.tp"></image>
												</view>
												<view class="jpkczi">
													<view style="width: 450rpc; display: flex; justify-content: space-between;">
														<view style=" font-weight: bold; display: none;" v-if="item.jdfjname==undefined">{{item.jdfjname}}</view>
														<view style=" font-weight: bold;" v-else>{{item.jdfjname}}</view>
														<view style=" font-weight: bold; display: none;" v-if="item.tclxname==undefined">{{item.tclxname}}</view>
														<view style=" font-weight: bold;" v-else>{{item.tclxname}}</view>
														<view v-if="item.status==0" style="color: #e02433;">待付款</view>
														<view v-if="item.status==1" style="color: #22e015;">已付款</view>
														<view v-if="item.status==2">已预订</view>
														<view v-if="item.status==3">已完成</view>
														<view v-if="item.status==4">已关闭</view>
													</view>
													
													<p style=" font-weight: bold;">{{item.title}}</p>
													<p style=" font-size: 24rpx; margin-top: 30rpx; "></p>
									
													<view class="jpkcBottom">
														<view style="color: #e02433; font-size: 22rpx;">￥<span style="font-size: 32rpx; font-weight: bold;">{{item.ddjine}}</span></view>
														<view style="margin-top: 18rpx; color: #adadad; font-size: 24rpx;" class="jpkcPrice">
															<view style="display: flex;" v-if="item.status==1">
																<view class="ydd"  @click="hx(item.id, item.dd)" v-if="item.dd!=0">核销</view>
																<view class="ydd"  @click="tchx(item.tcne,item)" v-if="item.dd==0">核销</view>
																<view class="ydd" style="margin-left: 10rpx;" @click="kcc(item.id, item.dd)" >详情</view>
															</view>
															<view v-if="item.status!=1">
																<view class="ydd" @click="kcc(item.id, item.dd)" >查看详情</view>
															</view>
															<neil-modal class="nei" :show="show"  @close="closeModal()" @confirm="clickRight">
																<view  style="width: 90%; margin: 20rpx auto;" v-for="(itemm, index) in tcc">
																	<view v-if="a(itemm)" style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
																			<view style="width: 70%;">{{itemm}}</view>
																			<view class="yddd" @click="hh(itemm)">核销</view>
																	</view>
																</view>
															
															</neil-modal>
															
														</view>
													</view>
													
												</view>
											</view>						
										</li>
					
									</ul>
								</view>
							
								
					</view>
				</scroll-view>
				</view>


					<serviceDialog  :orderInfo="orderInfo" @close="closeService" class="hidden" :class="{show:serviceFlag}"></serviceDialog>	
				</view>
			
			</view>			
		</view>

			
	</view>
</template>

<script>
	//import tabs from '@/components/v-tabs/v-tabs.vue'
	import serviceDialog from '@/components/serviceDialog4.vue'
	export default {
	//	components:{ tabs, serviceDialog},
		data() {
			return {
				//屏幕高度
				screenHeight: 0,
				tabs:[{
					index:0,
					value:"票务",
					dd:1
				},{
					index:1,
					value:"酒店",
					dd:2
				},{
					index:2,
					value:"套餐",
					dd:0
				},{
					index:3,
					value:"商店",
					dd:3
				}],
				tabs1:[{
					index:0,
					value:"全部",
					status:-1
				},{
					index:1,
					value:"待付款",
					status:0
				},{
					index:2,
					value:"已付款",
					status:1
				},{
					index:3,
					value:"已预订",
					status:2
				},{
					index:4,
					value:"已完成",
					status:3
				},{
					index:3,
					value:"已关闭",
					status:4
				}],
			//	tabs:['全部','待付款','已付款','已预订','已完成','已关闭'],
				//tabs1:['票务','酒店','套餐'],
				current:0,
				current1:0,
				works:[],
				serviceFlag: false,
				orderInfo:[],
				dd:1,
				status:-1,
				hxx:"",
				show:false
			}
		},
		onLoad(options) {
			 this.screenHeight = uni.getSystemInfoSync().windowHeight;
			 this.current1=parseInt(options.type)+1
			 console.log("current1")
			 console.log(this.current1)
			 this.orderInfoo(this.dd,options.type)
			// this.changeTab(options.type)
		},
		onShow() {
			
			
		},
		components:{
			serviceDialog
		},
		methods: {
			bback(){
				uni.navigateBack(-1)
			},
			closeService() {
				this.serviceFlag = false
			},
			hx(id,dd){
				uni.request({
					method:"POST",
					url:this.apiUrl+"index/xddxq",
					data:JSON.stringify({
						"id":id,
						"dd":dd
					}),
					success: (res) => {
						console.log("订单详情")
						//this.serviceFlag=true
						console.log(res)
						this.orderInfo = res.data
						console.log(this.orderInfo)
						if(dd==2){
							uni.navigateTo({
								url:"/pages/ewm/ewm?orderNum="+this.orderInfo.ddhao+"&jdName="+this.orderInfo.jdName+"&liverName="+this.orderInfo.lxrName+"&phone="+this.orderInfo.lxrPhone+"&date="+this.orderInfo.date
							})
						}
						if(dd==1 || dd==3){
							uni.navigateTo({
								url:"/pages/ewm/ewm?orderNum="+this.orderInfo.ddhao+"&jdName="+this.orderInfo.tclxname+"&liverName="+this.orderInfo.lxrName+"&phone="+this.orderInfo.lxrPhone+"&date="+this.orderInfo.date
							})							
						}

					}
				})				
			},
			a(str) {
				return /\(未核销\)$/.test(str);
			},
			tchx(tcne, item){
				this.show=true
				console.log("tcne")
				console.log(tcne)
				console.log(item)
				this.items=item
				this.tcc=tcne.split(",")
				console.log(this.tcc)
				for(let i=0;i<this.tcc.length; i++){
					this.hxx=this.tcc[i].substring(this.tcc[i].length-4,this.tcc[i].length-1)
				}
				
			},
			kcc(id, dd){
				console.log("kcc")
				console.log(id)
				
				uni.request({
					method:"POST",
					url:this.apiUrl+"index/xddxq",
					data:JSON.stringify({
						"id":id,
						"dd":dd
					}),
					success: (res) => {
						console.log("订单详情")
						this.serviceFlag=true
						console.log(res)
						this.orderInfo = res.data
						console.log(this.orderInfo)
					}
				})
			},
			orderInfoo(dd,status){
				console.log("dd")
				console.log(dd)
				console.log(status)
				uni.request({
					method:"POST",
					url:this.apiUrl+"index/xddhq",
					data:JSON.stringify({
						user_name:uni.getStorageSync("openid"),
						dd:dd,
						status:1
					}),
					success: (res) => {
						console.log("订单111")
						console.log(dd)
						console.log(status)
						console.log(res)
						this.works=res.data
					}
				})
			},
			hh(itemm){
				console.log("核")
				console.log(itemm.substring(itemm.length-4,itemm.length-1)) 
				this.hxx=itemm.substring(itemm.length-4,itemm.length-1)
				if(this.hxx=="未核销"){
					uni.navigateTo({
						url:"/pages/ewm/ewm?tclxname="+itemm+"&tc="+JSON.stringify(this.items)
					})
					console.log(itemm)					
				} 
			
			},
			btn(index,dd){
				this.dd=dd
				this.current=index
				this.orderInfoo(this.dd,this.status)
			},
			btnn(index,status){
				this.status=status
				this.current1=index
				this.orderInfoo(this.dd,this.status)
			},
			changeTab(e){
				console.log("curt")
				this.current=e
				console.log(e)
				uni.request({
					method:"POST",
					url:this.apiUrl+"index/ddhq",
					data:JSON.stringify({
						"user_name":uni.getStorageSync("openid"),
						"status":-e
					}),
					success: (res) => {
						console.log("订单")
						console.log(res)
						this.works = res.data
						console.log(this.works)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
	  width: 100%;
	  height: 100%;
	}
.myOrder{
	width: 100%;
	height: 90%;
	min-height: 90%;
	.content-wrap {
	} 
	 
	background: url("https://jhd.wangshangquan.top/static/img/bag.png");
	background-size: 100% 100%;
	ackground-repeat: no-repeat;
	  background-attachment: fixed;
	  padding-bottom: 150rpx;
}
.myOrder .hdd{
	width: 100%;
	height: 20rpx;
	padding-top: 80rpx;
	margin: 0 auto ;
	display: flex;
	flex: 0 0 100rpx;
}
	.wraper {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 95%;
	}
	.main {
			height: 80vh;
			position: relative;
		}
	 .yddd{
	 		height: 50rpx;
	 		width: 120rpx;
	 		text-align: center;
	 		line-height: 50rpx;
	 		border-radius: 30rpx;
	 		color: #fff;
	 		background-image: linear-gradient(to right, #f9800b, #f65b19);
	 	}
		.main-scroll {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
		}
	.myOrder .jpkc .jpkcContent{
		width: 90%;
		padding: 18rpx;
		margin: 30rpx auto;
		background-image: linear-gradient(to bottom, #83e9bb, #70d9d7);
		border-radius: 20rpx;
	}
	.myOrder .jpkc .jpkcContent ul li{
		

	}
	.myOrder .jpkc .jpkcContent ul li .iio{
		position: relative;
		width: 100rpx;
		height: 26rpx;
		top: 20rpx;
		left: 645rpx;
		transform: rotate(45deg);
	}
	.myOrder .jpkc .jpkcContent ul li .jpkcLeft{
		display: flex;
		background-color: #fff;
		justify-content: space-between;
		margin-top: -30rpx;
		padding: 20rpx 35rpx 20rpx 20rpx;
		
	}
	.myOrder .jpkc .jpkcContent ul li .jpkcLeft .jpkczi{
		
		width: 480rpx;
		
		font-size: 28rpx;
		margin-left: 30rpx;
	}

	.myOrder .jpkc .jpkcContent ul li .jpkcLeft .jpkcImg{
		border: 2rpx solid #f8f8f8;
	}
	
	.myOrder .jpkc .jpkcContent ul li .jpkcLeft .jpkczi .jpkcBottom{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.myOrder .jpkc .jpkcContent ul li .jpkcLeft .jpkczi .jpkcBottom .ydd{
		padding: 15rpx 40rpx;
		border-radius: 30rpx;
		color: #fff;
		background-image: linear-gradient(to right, #f9800b, #f65b19);
	}
	.lii:nth-child(1){
		margin-left: 0 !important;
	}
	.lli:nth-child(1){
		margin-left: 3% !important;
	}
	.active{
		color: #8dc9fd;
		font-weight: bold;
	}
	.active1{
		color: #8dc9fd;
		font-weight: bold;
	}
	.hidden {
		display: none;
	}
	
	.show {
		display: block;
	}
</style>
