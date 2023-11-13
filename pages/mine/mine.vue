<template>
	<view class="mine" :style="{ height: screenHeight }">
	
		<view class="mHead">
			<view class="mmhd">
		

					<view class="toux">
						<button style="margin: 0;" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
								<image style="width: 110rpx; height: 110rpx; border-radius:50%; border: 2rpx solid #f2f2f2; margin-top: 12rpx; margin-left: 2rpx;" :src="userInfo.avatar"></image>
							</button>

				
					</view>
						<view style="position: relative; top: 120rpx; left: -100rpx;">
							<image style="width: 40rpx; height:37rpx; position: relative; top: 10rpx; left: -14rpx; z-index: 999" src="../../static/img/hg.png"></image>
							<view style="width: 80rpx; color: #fff; font-size: 18rpx; padding: 5rpx 9rpx 5rpx 15rpx; height: 24rpx; left: 10rpx; top: -26rpx; position: relative; z-index: 1; background-image: linear-gradient(to right, #fe5d43, #fc8731); border-radius: 10rpx;">普通会员</view>
						</view>	
					<view style="margin-top: 80rpx; margin-left: -40rpx;">
						<view style="display: flex; justify-content: space-between;">
				
							<view class="namme">
								<view class="" style="font-size:1rem; font-weight: bold">
									<input style="width: 180rpx;" name="nickname" v-model="userInfo.yhm" type="nickname" class="weui-input" @change="yhhm" placeholder="点击添加昵称" placeholder-class="nni"/>
									
								</view>
								<view class="" style="font-size: 0.6rem; margin-top: 10upx; color: #333;">
									{{userInfo.phone}}
								</view>
								
							</view>				
						
						<view style="display: flex; align-items: center;">
							<view class="qdd" @click="qdd">签到+{{qd}}</view>
							<image style="width: 60rpx; height: 60rpx; margin-left: 31rpx;" src="../../static/img/shezhi.png"></image>
						</view>	
					</view>
					<view style="margin-top: 17rpx;">
						<ProgressBar :Width="czz" :userInfo="userInfo" Type="candy"></ProgressBar>
					</view>						
					</view>

			</view>
	
		</view>

		<view class="hhb">
			<view style="width: 92%; margin: 0 auto;">
				<span v-if="userInfo.dj==0">普通会员:</span> 
				<span v-if="userInfo.dj==1">白银会员:</span> 
				<span v-if="userInfo.dj==2">铂金会员:</span> 
				<span v-if="userInfo.dj==3">钻石会员:</span> 
				汗蒸门票特价、照片墙红包>></view>
		</view>
		<view class="mBody">
			<view class="iccon" style="padding: 42rpx 0 29rpx; margin-top: 0;">
				<ul>
					<li @click="yyh">
						<view>
							<image style="width: 82rpx; height: 60rpx; margin: 0 auto;" src="../../static/img/yhj.png"></image>
						</view>
						<view class="" style="margin-top: 10upx;">
							优惠券
						</view>
					</li>					
					<li @click="xhh">
						<view class="">
							<!-- <span class="iconfont"> &#x33;</span> -->
							<image style="width: 82rpx; height: 60rpx; margin-left: -10rpx; margin-top: 3rpx;" src="../../static/img/xxh.png"></image>
						</view>
						<view class="" style="margin-top: 10upx;">
							雪花
						</view>
					</li>
			
			 		<li @click="kq">
						<view class="">
							<image style="width: 84rpx; height: 60rpx; margin-left: 20rpx;" src="../../static/img/kj.png"></image>
						</view>
						<view class="" style="margin-top: 10upx;">
							卡券预约
						</view>
					</li> 

				</ul>

			</view>

			<view class="iccon">
				<view class="myOrder">
					我的订单
				</view>				
				<ul style="margin-top: 42rpx;">
					<li @click="order(-1)">
						<view>
							<image style="width: 76rpx; height: 60rpx; margin: 0 auto;" src="../../static/img/ddan.png"></image>
						</view>
						<view class="" style="margin-top: 10upx;">
							全部订单
						</view>
					</li>					
					<li @click="order(0)">
						<view class="">
							<!-- <span class="iconfont"> &#x33;</span> -->
							<image style="width: 76rpx; height: 60rpx; margin-left: -20rpx;" src="../../static/img/dfk.png"></image>
						</view>
						<view class="" style="margin-top: 10upx;">
							待付款
						</view>
					</li>

					<li @click="order(1)">
						<view class="">
							<image style="width: 69rpx; height: 60rpx; margin-left: -20rpx;" src="../../static/img/yfk.png"></image>
						</view>
						<view class="" style="margin-top: 10upx;">
							已付款
						</view>
					</li>
				<!-- 	<li @click="order(2)">
						<view class="">
							<image style="width: 70rpx; height: 70rpx;" src="../../static/img/yyd.png"></image>
						</view>
						<view class="">
							已预定
						</view>
					</li> -->
				</ul>
				<ul style="margin-top: 60rpx;">
					<li @click="order(2)">
						<view class="">
							<image style="width: 62rpx; height: 60rpx; margin-left: 20rpx;" src="../../static/img/ywc.png"></image>
						</view>
						<view class="" style="margin-top: 10upx;">
							已完成
						</view>
					</li>					
					<li @click="order(3)" style="margin-left: -20rpx;">
						<view class="">
							<!-- <span class="iconfont"> &#x33;</span> -->
							<image style="width: 72rpx; height: 60rpx; margin-left: 40rpx;" src="../../static/img/tk.png"></image>
						</view>
						<view class="" style="margin-top: 10upx; width: 150rpx;">
							退款/售后
						</view>
					</li>
				
					<li @click="order(4)">
						<view class="">
							<image style="width: 76rpx; height: 60rpx; margin-left: -10rpx;" src="../../static/img/exit.png"></image>
						</view>
						<view class="" style="margin-top: 10upx;">
							已关闭
						</view>
					</li>
			
				</ul>
				<view style="height: 40rpx;"></view>
				<view class="tiao"></view>
				<view class="myOrder">
					常用工具
				</view>	
				<view class="list">
					<ul>
						<li @click="bf(0)">
							<view style="display: flex; align-items: center;">
								<!-- <view class="" style="margin-top: 10upx;">
									<image style="width: 9rpx; height: 16rpx;" src="../../static/right.png"></image>
								</view> -->
								<view class="" style="margin-left: 10upx;">
								联系客服
								</view>								
							</view>
							<view>
								<image style="width: 9rpx; height: 16rpx;" src="../../static/img/right.png"></image>
							</view>
						</li>
						<li v-if="userInfo.jdgl==0" style="display: none;" @click="scan">
							<view style="display: flex; align-items: center;">
								<!-- <view class="" style="margin-top: 10upx;">
									<image style="width: 9rpx; height: 16rpx;" src="../../static/right.png"></image>
								</view> -->
								<view class="" style="margin-left: 10upx;">
									扫一扫
								</view>								
							</view>
							<view>
								<image style="width: 9rpx; height: 16rpx;" src="../../static/img/right.png"></image>
							</view>
						</li>
						<li v-if="userInfo.jdgl!=0"  @click="scan">
							<view style="display: flex; align-items: center;">
								
								<view class="" style="margin-left: 10upx;">
									扫一扫
								</view>								
							</view>
							<view>
								<image style="width: 9rpx; height: 16rpx;" src="../../static/img/right.png"></image>
							</view>
						</li>
						<neil-modal class="nei" :show="show" :orderInfo="orderInfo" @close="closeModal()" @confirm="clickRight">
				<view class="member">
					<view v-if="orderInfo.dd==2">
						
					
					<view class="memberBody">
						<view class="memberItem">
							<view style="display: flex; margin-left: 10rpx;">
								<image style="width: 160rpx; height: 160rpx; border-radius: 20rpx;" :src="orderInfo.tp"></image>
								<view style="margin-left: 12rpx; width: 300rpx; font-size: 30rpx; font-weight: bold;">{{orderInfo.jdfjname}}</view>
							</view>
							
							<view style="font-size: 24rpx;">
								
							</view>
						</view>
						<view class="memberItem">
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								酒店名称
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.jdName}}</view>
						</view>
						<view class="memberItem">
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								房间数量
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.roomNum}}</view>
						</view>
						<view class="memberItem">
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								优惠金额
							</view>
							<view style="font-size: 24rpx;">￥{{orderInfo.yhjine}}</view>					
						</view>
						<view class="memberItem">
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								实收金额
							</view>
							<view style="font-size: 24rpx;">￥{{orderInfo.ssjine}}</view>	
						</view>
						<view class="memberItem">
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								费用
							</view>
							<view style="font-size: 24rpx;">￥{{orderInfo.ddjine}}</view>	
						</view>
					
					</view>
					<!-- <view class="memberTitle">会员权益</view> -->
					<view class="memberBody">
						<view class="memberItem">
						
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								入住人姓名
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.liverName}}</view>	
						
						</view>
						<view class="memberItem">
							
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								入住人手机号
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.phone}}</view>	
						</view>
						<view class="memberItem">
							
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								入住人身份证号
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.IdCard}}</view>	
						</view>
						<view class="memberItem">
							
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								入住日期
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.startDate}}</view>	
						</view>		
						<view class="memberItem">
							
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								结束日期
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.stopDate}}</view>	
						</view>
					</view>
					</view>
					<view v-if="orderInfo.dd!=2">
						<view class="memberBody">
							<view class="memberItem">
								<view style="display: flex; margin-left: 10rpx;">
									<image style="width: 160rpx; height: 160rpx; border-radius: 20rpx;" :src="orderInfo.tp"></image>
									<view style="margin-left: 12rpx; width: 300rpx; font-size: 30rpx; font-weight: bold;">{{orderInfo.tclxname}}</view>
								</view>
								
								<view style="font-size: 24rpx;">
									
								</view>
							</view>
							<view class="memberItem">
								<view style="display: flex; margin-left: 10rpx; align-items: center;">
									出行人
								</view>
								<view style="font-size: 24rpx;">{{orderInfo.cxr}}</view>
							</view>
							<view class="memberItem">
								<view style="display: flex; margin-left: 10rpx; align-items: center;">
									预约数量
								</view>
								<view style="font-size: 24rpx;">{{orderInfo.num}}</view>
							</view>
							<view class="memberItem">
								<view style="display: flex; margin-left: 10rpx; align-items: center;">
									优惠金额
								</view>
								<view style="font-size: 24rpx;">￥{{orderInfo.yhjine}}</view>					
							</view>
							<view class="memberItem">
								<view style="display: flex; margin-left: 10rpx; align-items: center;">
									实收金额
								</view>
								<view style="font-size: 24rpx;">￥{{orderInfo.ssjine}}</view>	
							</view>
							<view class="memberItem">
								<view style="display: flex; margin-left: 10rpx; align-items: center;">
									费用
								</view>
								<view style="font-size: 24rpx;">￥{{orderInfo.ddjine}}</view>	
							</view>
						
						</view>	
					</view>
					<view class="memberBody">
						
							<view class="memberItem" v-if="orderInfo.dd==2" style="display: none;">
								
								<view style="display: flex; margin-left: 10rpx; align-items: center;">
									使用日期
								</view>
								<view style="font-size: 24rpx;">{{orderInfo.syrq}}</view>	
							</view>
								<view class="memberItem" v-if="orderInfo.dd!=2">
									
									<view style="display: flex; margin-left: 10rpx; align-items: center;">
										使用日期
									</view>
									<view style="font-size: 24rpx;">{{orderInfo.syrq}}</view>	
								</view>
						<view class="memberItem">								
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								订单编号
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.ddhao}}</view>	
			
				
						</view>
				
						<view class="memberItem">
							
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								联系人姓名
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.lxrName}}</view>	
						</view>
						<view class="memberItem">
							
							<view style="display: flex; margin-left: 10rpx; align-items: center;">
								联系人手机号
							</view>
							<view style="font-size: 24rpx;">{{orderInfo.lxrPhone}}</view>	
						</view>
					</view>
				</view>						
						</neil-modal>
						<li @click="bf(1)">
							<view style="display: flex; align-items: center;">
								<!-- <view class="" style="margin-top: 10upx;">
									<image style="width: 9rpx; height: 16rpx;" src="../../static/m6.png"></image>
								</view> -->
								<view class="" style="margin-left: 10upx;">
									隐私政策
								</view>								
							</view>
							<view>
								<image style="width: 9rpx; height: 16rpx;" src="../../static/img/right.png"></image>
							</view>
						</li>	
				<li @click="bf(2)">
					<view style="display: flex; align-items: center;">
						<!-- <view class="" style="margin-top: 10upx;">
							<image style="width: 9rpx; height: 16upx;" src="../../static/m7.png"></image>
						</view> -->
						<view class="" style="margin-left: 10upx;">
							用户协议
						</view>								
					</view>
					<view>
						<image style="width: 9rpx; height: 16rpx;" src="../../static/img/right.png"></image>
					</view>
				</li>
				<li>
					<view style="display: flex; align-items: center;">
						<!-- <view class="" style="margin-top: 10upx;">
							<image style="width: 9rpx; height: 16rpx;" src="../../static/m8.png"></image>
						</view> -->
						<view class="" style="margin-left: 10upx;">
							意见信箱
						</view>								
					</view>
					<view>
						<image style="width: 9rpx; height: 16rpx;" src="../../static/img/right.png"></image>
					</view>
				</li>							
					</ul>
				</view>
			</view>

			<view class="dii"></view>
		</view>
		<view>

		</view>
	</view>
</template>

<script>
	import ProgressBar from '../../components/Progress-Bar.vue'
	import neilModal from '@/components/neil-modal/neil-modal.vue'
	export default {
		data() {
			return {
				username:"",
				bInfo:[],
				logoInfo:[],
				userInfo:[],
				//屏幕高度
				screenHeight: 0,
				show:false,
				orderInfo:[],
				qd:0,
				xxh:"",
				czz:"",
				qian:"",
				arr:[]
			}
		},
		components: {
		
			 ProgressBar,
			 neilModal
		//	 cmdProgress
		},
		onLoad() {
			 this.screenHeight = uni.getSystemInfoSync().windowHeight;
		},
		onShow() {
			console.log(uni.getStorageSync("token"))
			if(uni.getStorageSync("token")==""){
				uni.navigateTo({
					url:"/pages/login/login"
				})
			}
			if(uni.getStorageSync("token")!=""){		
				this.uu()	
			 }
		//	this.username=uni.getStorageSync("username")
		},
		methods: {
			kq(){
				uni.navigateTo({
					url:"/pages/kyy/kyy"
				})
			},
			uu(){
				console.log("uu")
				uni.request({
						method:'POST',
						url:this.apiUrl+"index/find_user_user_name",
						data:JSON.stringify({
							'user_name':uni.getStorageSync("openid")
						}),
						success: (res) => {
							console.log("tou")
							console.log(res)
							 this.userInfo=res.data
							 console.log(this.userInfo)
							 this.xxh="雪花数量："+this.userInfo.xh
							 console.log(this.xxh)
							 this.qd=this.userInfo.qd
							 this.czz=this.userInfo.czz/2500
							 console.log("czz")
							 console.log(this.czz)
							 // this.zxx()
							if(res.data.avatar==null || res.data.avatar==""){
								console.log("微信头像")
								this.userInfo.avatar=this.apiUrl+"static/img/tou.png"
							}
						}
					})					
			},
			clickRight(){
				console.log("确定00000")
				if(this.orderInfo.dd==2){
					uni.request({
						method:"POST",
						url:this.apiUrl+"index/jdhx",
						data:JSON.stringify({
							"ddhao":this.orderInfo.ddhao
					}),
					success: (res) => {
						console.log("ioop")
						console.log(res)
						if(res.data.status==1){
							uni.showToast({
								title:res.data.data
							})
						}
						if(res.data.status==-1){
							uni.showToast({
								icon:"error",
								title:res.data.data
							})
						}
					}
					})					
				}
				if(this.orderInfo.dd==1 || this.orderInfo.dd==3){
					uni.request({
						method:"POST",
						url:this.apiUrl+"index/pwhx",
						data:JSON.stringify({
							"ddhao":this.orderInfo.ddhao
					}),
					success: (res) => {
						console.log("票")
						console.log(res)
						if(res.data.status==1){
							uni.showToast({
								title:res.data.data
							})
						}
						if(res.data.status==-1){
							uni.showToast({
								icon:"error",
								title:res.data.data
							})
						}
					}
					})					
				}
				if(this.orderInfo.dd==0){
					uni.request({
						method:"POST",
						url:this.apiUrl+"index/tchx",
						data:JSON.stringify({
							"ddhao":this.orderInfo.ddhao,
							"xm":this.orderInfo.tclxname
					}),
					success: (res) => {
						console.log("ioop")
						console.log(res)
						if(res.data.status==1){
							uni.showToast({
								title:res.data.data
							})
						}
						if(res.data.status==-1){
							uni.showToast({
								icon:"error",
								title:res.data.data
							})
						}
					}
					})					
				}
			},
			xhh(){
				uni.showModal({
					title: '提示',
					content: this.xxh,
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			yyh(){
				uni.navigateTo({
					url:"/pages/yhui/yhui"
				})
			},
			bf(type){
				uni.navigateTo({
					url:"/pages/bff/bff?type="+type
				})
			},
			onChooseAvatar(e){
				this.userInfo.avatar = e.detail.avatarUrl
				console.log(this.userInfo.avatar)
				uni.request({
					method:"POST",
					url:this.apiUrl+"index/uptx",
					data:JSON.stringify({
						'avatar' : this.userInfo.avatar,
						'user_name' : uni.getStorageSync("openid")
					}),
					success: (res) => {
						uni.setStorageSync("avatar",this.userInfo.avatar)
						console.log(res)
					}
					
				})
			},
			qdd(){
				uni.request({
					method:"POST",
					url:this.apiUrl+"index/qd",
					data:JSON.stringify({
						//'avatar' : this.userInfo.avatar,
						'user_name' : uni.getStorageSync("openid")
					}),
					success: (res) => {
						//uni.setStorageSync("avatar",this.userInfo.avatar)
						console.log(res)
						
							uni.showToast({
								icon:"none",
								title:res.data.data
							})
						
						//this.qd=res.data
						this.uu()
					}
					
				})
			},
			scan(){
				let that=this
				uni.scanCode({
					success: function (res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						that.qian=res.result.substring(0,4)
						console.log(that.qian)
						if(that.qian=="pwdd" || that.qian=="sddd"){
							uni.request({
								method:"POST",
								url:that.apiUrl+"index/ddxqddh2",
								data:JSON.stringify({
									"ddhao":res.result
								}),
								success: (rres) => {
									console.log("pwwwwww")
									console.log(rres)
									that.show=true																	//uni.setStorageSync("avatar",this.userInfo.avatar)
									console.log("扫码222")
									console.log(rres)
									that.orderInfo = rres.data
									

							
								}
								
							})									
						}else if(that.qian=="tcdd"){
							console.log("aaa")
							console.log(that.qian)
									
												//var arr = []
							that.arr=res.result.split(",")
							console.log("arr")
							console.log(that.arr,"asdasdasdasd");
							uni.request({
								method:"POST",
								url:that.apiUrl+"index/ddxqddh2",
								data:JSON.stringify({
									"ddhao":that.arr[0]
								}),
								success: (rres) => {
									console.log("tcccccccccc")
									console.log(rres)
									that.show=true																	//uni.setStorageSync("avatar",this.userInfo.avatar)
									console.log("扫码222")
									console.log(rres)
									that.orderInfo = rres.data
									that.orderInfo.tclxname = that.arr[1]
									
							
							
								}
								
							})	
						}else{
							uni.request({
								method:"POST",
								url:that.apiUrl+"index/ddxqddh",
								data:JSON.stringify({
									"ddhao":res.result
								}),
								success: (rres) => {
									console.log("酒")
									console.log(rres)
									if(that.userInfo.jdgl!=rres.data.jdId){
										that.show=false
										uni.showToast({
											title:"不是本店二维码"
										})
									}
									if(that.userInfo.jdgl==rres.data.jdId){
										that.show=true																	//uni.setStorageSync("avatar",this.userInfo.avatar)
										console.log("扫码222")
										console.log(rres)
										that.orderInfo = rres.data
											
									}
									

							
								}
								
							})							
						}
						
					}
				})
			},
			closeModal(){
				console.log("关")
				this.show=false
			},
			order(type){
				uni.navigateTo({
					url:"/pages/myOrder/myOrder?type="+type
				})
			},

			bback(){
				uni.switchTab({
					url:"/pages/index/index"
				})
			},
			yhhm(e){
				console.log("yhm")
				this.ni=e.detail.value
				this.userInfo.yhm=e.detail.value
				console.log(this.userInfo.yhm)
				uni.setStorageSync("yhm",this.userInfo.yhm)
				uni.request({
					method:"POST",
					url:this.apiUrl+"index/upyhm",
					data:JSON.stringify({
						"yhm":this.ni,
						"user_name":uni.getStorageSync("openid")
					}),
					success: (res) => {
						console.log(res)
					}
				})
			},
			logout(){
				try {  
					uni.clearStorageSync();  
					uni.navigateTo({
						url:"/pages/login/login"
					})
				} catch (e) {  
				// error  
				}
			}
		}
	}
</script>

<style>
	page {
	  width: 100%;
	  height: 100%;
	}	
.mine{
	 width: 100%;
	 min-height: 100vh;
	 
	background: url("https://jhd.wangshangquan.top/static/img/bag.png");
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-attachment: fixed;
	/* background-color: #ffd102; */
	/* background-image: linear-gradient(to right, #f7e6d6, #d6b89c); */
	/* background-color: #f4f4f4; */
}
.mine button{
	padding: 0;
	line-height: auto;
	background-color: none;
	width: 130rpx;
	height: 130rpx;
	border-radius: 50%;

}
.mine .mHead{
	width: 100%;
	height: 320rpx;
	display: flex;
	align-items: center;

	/* background-image: linear-gradient(to right bottom, #8aedc9, #a5e1dd,#d5d6b0,#f9eeb6); */
}
.mine .mHead .mmhd{
	width: 90%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	
}
.mine .hhb{
	width: 100%;
	height: 46rpx;
	line-height: 46rpx;
	margin-right: 37rpx;
	/* background-image: linear-gradient(to bottom, #eaecf0, #e7f0f2); */
	text-align: right;
	font-size: 20rpx;
	color:#777878;
}
.mine .mHead .toux{
	
	width: 130rpx;
	height: 130rpx;
	/* background-color: #e6eff9; */
	border-radius: 50%;
	margin-top: 80rpx;
}
.mine .mHead .namme{
/* 	margin-left: -80rpx;
	; */
}
.mine .mBody{
	width: 100%;
	
	/* background-color: #fff; */
	/* background-image: linear-gradient(to bottom,#e1e8e9, #c9e6ff, #d8e8f5); */
	 
}
.mine .mBody .myOrder{
	font-size: 1rem;
	font-weight: bold;
	padding-top: 40upx;
	padding-left: 40upx;
}
.mine .mBody .iccon{
	margin: 10rpx auto 0;
	width: 95%;
	font-size: 28rpx;
	background-color: #fff;
	border-radius: 10rpx;
}
.mine .mBody .iccon ul{
	width: 90%;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
}
.mine .mBody .iccon ul li{
	width: 120rpx;
	text-align: center;
}
.mine .mBody .tiao{
	width: 100%;
	height: 10rpx;
	background-color: #cbe0ef;
	margin-top: 50upx;
}
.mine .mBody .list{
	width: 100%;
	border-radius: 10rpx;
}
.mine .mBody .list ul{
	width: 85%;
	margin: 0 auto;
	display: block;
}
.mine .mBody .list ul li{
	height: 100upx;
	line-height: 100upx;
	width: 100%;
	font-size: 0.8rem;
	display: flex;
	justify-content: space-between;
}
.mine .mBody .dii{
	width: 100%;
	min-height: 20vh;
	
}
	.mine  .member{
		width: 90%;
		margin: 0 auto;
		padding-top: 37rpx;
		
		/* border-bottom: 4px solid #dddddd; */
	}
	.mine  .member .memberTitle{
		font-weight: bold;
	}
	.mine  .member .memberBody{
		width: 90%;
		padding-bottom: 10rpx;
		margin: 0 auto;
		border-bottom: 2rpx #e6e6e6 solid;
	}
	.mine  .member .memberBody .memberItem{
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 20rpx;
		font-size: 28rpx;
	}
.qdd{
	padding: 13rpx;
	background-image: linear-gradient(to right, #efa10c, #fcbf4b);
	color: #fff;
	font-size: 20rpx;
	border-radius: 50rpx;
}
 .iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} 
</style>
