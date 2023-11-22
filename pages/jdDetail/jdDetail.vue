<template>
	<view class="jdtuis">
<!-- 		<view class="hdd">
				<view @click="bback">
					<image style="width: 40rpx; height: 40rpx; margin-top: 60rpx; margin-left: 20rpx;  " src="../../static/img/arrow-left-bold.png"></image>
				</view>
				<view style="font-size: 34rpx; margin-left: 240rpx;">房间列表</view>					
			</view> -->
		<image style="width: 100%; height: 424rpx;" :src="works.tp"></image>
		<view class="jdbody">
			<view style="display: flex; align-items: center; justify-content: space-between;">			
				<view style="font-weight: bold;">{{works.title}}</view>
				
			</view>
			
			<view class="mas">
				<view class="marks">
					<view class="mark1">主题酒店</view>
					<view class="mark2">高档型</view>
				</view>
				<view style="font-size: 28rpx; color: #a2a2a4; margin-top: 22rpx; border-bottom: 2rpx #f0f0f0 solid; padding-bottom: 24rpx;">{{works.jj}}</view>
				<view style="display: flex; justify-content: space-between; align-items: center;">
					<view style="margin-top: 18rpx; display: flex; align-items: center; padding-bottom: 33rpx;">
						<image style="width: 18rpx; height: 22rpx;" src="../../static/img/wei.png"></image>
						<view style="margin-left: 13rpx; font-size: 28rpx;">{{works.dz}}</view>
					</view>
					<view style="width: 48rpx; height: 48rpx; border-radius: 50%; border: 2rpx solid #fbfbfb; text-align: center; line-height: 48rpx;">						
						<image @click="dhh" style="width: 26rpx; height: 34rpx; " src="../../static/img/phhon.png"></image>					
					</view>
				</view>
				<view style="width: 100%; height: 150rpx;  text-align: center; background-color: #f5f5f5;">
					<swiper class="swiper" circular indicator-dots="true" autoplay="true" interval="5000"
						duration="500" indicator-color="rgba(255, 255, 255, .5)" indicator-active-color="#ffffff">
						<swiper-item v-for="(item,index) in JSON.parse(works.bannertp)">
							<image style="width: 715rpx; height: 120rpx; margin-top: 20rpx;" :src="item.img"></image>
						</swiper-item>
					</swiper>
				</view>
				<view style="height: 10rpx; background-color: #f7f7f7;"></view>
				<!-- <view style="font-weight: bold; padding-top: 38rpx;">{{lbs[0].fymx}}</view> -->
				<view style="display: flex; width: 95%; align-items: center; margin: 0 auto;" @click="open()">
					<view style="display: flex; align-items: center;">
						<view  style="font-weight: bold; padding-top: 38rpx;">{{startDate}}
						<span style="font-weight: normal; font-size: 22rpx; color: #585858; margin-left: 15rpx;">{{today}}</span></view>
						<view style="margin-left: 24rpx; margin-top: 40rpx; font-size: 20rpx; padding: 4rpx 7rpx; background-color:#eeeeee;">{{allDate}} 晚</view>
						<view  style="font-weight: bold; padding-top: 38rpx; margin-left:  24rpx;">{{endDate}}
						<span style="font-weight: normal; font-size: 22rpx; color: #585858; margin-left: 15rpx;">{{day}}</span>
						</view>	
					</view>
					
				<!-- 	<view style="display: flex; align-items: center; ">					
						<view>共{{allDate}} 晚</view>
						<image style="width: 10rpx; height: 19rpx;margin-left: 14rpx;" src="../../static/img/yoo.png"></image>
					</view> -->
				</view>
				
				<uni-calendar
					ref="calendar"
					:style="{'display':display}"
					:clear-date="true"
					:date="info.date"
					:insert="info.insert"
					:lunar="info.lunar"
					:aniMaskShow="aniMaskShow"
					:range="info.range"
					:beforeDate="beforeDate"
					:afterDate="afterDate"
					@confirm="confirm"
					@close="close"
				/>
				<view class="jpkc">
					<!-- <view class="jpkcTitle">精品课程</view> -->
					<view class="jpkcContent">
						<ul>
							<li  @click="kcc(item.id)" v-for="(item,index) in lbs" :key="index">
								<!-- <image class="iio" src="../../static/img/zhd.png"></image> -->
								<view class="jpkcLeft">
									<view class="jpkcImg">
										<scroll-view  scroll-x="true" style="width:160rpx; height:160rpx;  overflow:hidden;white-space:nowrap;">
											<image v-for="(itemm,index) in item.arrs" style="width:160rpx; height:160rpx; border-radius: 10rpx;" :src="itemm"></image>
										</scroll-view>
									</view>
									<view class="jpkczi">
										<p style=" font-weight: bold;">{{item.title}}</p>
										<p style="color: #8f8f8f; font-size: 26rpx; margin-top: 30rpx; ">{{item.value}}</p>
						
										<view class="jpkcBottom">
											<view style="color: #e02433; font-size: 22rpx;">￥<span style="font-size: 32rpx; font-weight: bold;">{{item.price}}</span></view>
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
				 <serviceDialog :room="room" @close="closeService" @yud="yud" class="hidden" :class="{show:serviceFlag}"></serviceDialog>
			</view>
		</view>
		<fuiBottomPopup class="fbp" :show="show" @close="closePopup">
			<ul>
				<li>{{works.djphone}}可能是一个电话号码，你可以</li>
				<li @click="hu">呼叫</li>
				<li @click="cpp">复制号码</li>
				<li  @click="addtxl">添加到手机通讯录</li>
				<li style="border-bottom: none; height: 16rpx; background-color: #f7f7f7;"></li>
				<li  @click="closePopup">取消</li>
			</ul>
			
		</fuiBottomPopup>
	</view>
</template>

<script>
	import fuiBottomPopup from '@/components/firstui/fui-bottom-popup/fui-bottom-popup.vue'
	import fuiButton from '@/components/firstui/fui-button/fui-button.vue'
	import fuiIcon from '@/components/firstui/fui-icon/fui-icon.vue'
	import serviceDialog from '@/components/serviceDialog.vue'
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
			fuiBottomPopup,
			fuiButton,
			fuiIcon,
			serviceDialog
		},
		data() {
			return {
				idd:"",
				works:[],
				lbs:[],
				room:[],
				show:false,
				show1:"",
				showCalendar: false,
				info: {
					lunar: true,
					range: true,
					insert: false,
					selected: []
				},
				startDate:"",
				endDate:"",
				allDate:1,
				day:"",
				today:"",
				serviceFlag: false,
				beforeDate:"",
				afterDate:"",
				aniMaskShow:false,
				display:""
			}
		},
		onLoad(options) {
			console.log(options)
			this.idd=options.id
		},
		onReady() {
			this.$nextTick(() => {
				this.showCalendar = true;
			});
			// TODO 模拟请求异步同步数据
			setTimeout(() => {
				this.info.date = getDate(new Date()).fullDate;
				this.info.startDate = getDate(new Date()).fullDate;
				this.info.endDate = getDate(new Date(),30).fullDate;	

			}, 2000);
		},
		components: {
		    serviceDialog
			
		},
		onShow() {
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
			console.log('info')
			console.log(this.info)
			console.log("this.info")
			console.log(this.day)
			uni.request({
				method:"POST",
				url:this.apiUrl+"index/jdxq",
				data:JSON.stringify({
					id:this.idd
				}),
				success: (res) => {
					console.log("酒店详情")
					console.log(res)
					this.works = res.data
					console.log(this.works)
				}
			})
			this.lbb()
		},
		methods: {
			bback(){
				uni.navigateBack(-1)
			},
			yud(){
				uni.navigateTo({
					url:"/pages/qrorder/qrorder?startDate="+this.startDate+"&today="+this.today+"&stopDate="+this.endDate+"&day="+this.day+"&room="+JSON.stringify(this.room)+"&allDate="+this.allDate+"&idd="+this.idd+"&beforeDate="+this.beforeDate+"&afterDate="+this.afterDate
				})
				console.log("预订")
			},
			dhh(){
				this.show=true
			},
			closePopup(){
				this.show=false
			},
			hu(){
				uni.makePhoneCall({
					phoneNumber: this.works.djphone 
				})
			},
			cpp(){
				uni.setClipboardData({
					data: this.works.djphone,//要被复制的内容
					success:() => {//复制成功的回调函数
						uni.showToast({//提示
							title:'复制成功' 
						})
					}
				});	
			},
			closeService() {
				this.serviceFlag = false
			//	this.lbb()
			},
			kcc(id){
				this.serviceFlag = true
				
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
						// this.lbb()
						 console.log(this.room)
					}
				})
				
			},
			lbb(){
				uni.request({
					method:"POST",
					url:this.apiUrl+"index/jdfj",
					data:JSON.stringify({
						uid:this.idd
					}),
					success: (res) => {
						console.log("房间列表")
						console.log(res)
						this.lbs = res.data
						console.log(this.lbs)
						for(let i=0; i<this.lbs.length; i++){
							this.lbs[i]["price"] = this.lbs[i].dj*this.allDate
							this.lbs[i]["arrs"]=this.lbs[i].tp.split("|")
						}
					}
				})				
			},
			addtxl(){
				uni.addPhoneContact({
					nickName: '昵称',
					lastName: '姓',
					firstName: '名',
					remark: '备注',
					mobilePhoneNumber: this.works.djphone,
					//weChatNumber: 'wx123',
					success: function () {
						console.log('success');
					},
					fail: function () {
						console.log('fail');
					}
				});
			},
			open() {
				this.display="block"
				this.$refs.calendar.open();
			},
			close() {
				console.log('弹窗关闭');
				this.aniMaskShow=false
				console.log(this.aniMaskShow)
			},
			change(e) {
				console.log('change 返回:', e);
				// 模拟动态打卡
				if (this.info.selected.length > 5) return;
				this.info.selected.push({
					date: e.fulldate,
					info: '打卡'
				});
			},
			confirm(e) {
				console.log('confirm 返回:', e);
				var before = ""
				var after = ""
				var bes=[]
				var afs=[]
				var da=0
				before = e.range.before
				this.beforeDate = before
				after = e.range.after
				this.afterDate=after
				console.log("今天明天")
				console.log(this.beforeDate)				
				console.log(this.afterDate)
				if(this.beforeDate=="" || this.afterDate==""){
					uni.showToast({
						icon:"none",
						title:"请选择日期区间"
					})
				}
				if(this.beforeDate!="" && this.afterDate!=""){
					this.display="none"
					//this.aniMaskShow =true
				//	this.close()
				}
				bes=before.split("-")
				afs=after.split("-")
				this.startDate = bes[1] + "月" + bes[2]+"日"
				this.endDate = afs[1] + "月" + afs[2]+"日"
				this.day = e.lunar.ncWeek
				this.allDate=e.range.data.length-1
				console.log(bes)
				console.log(bes.length)
				
				console.log(new Date(bes))
				da = new Date(bes).getDay()
				switch(da){
					case 0:
						da="星期天";
						break;
					case 1:
						da="星期一";
						break;
					case 2:
						da="星期二";
						break;
					case 3:
						da="星期三";
						break;
					case 4:
						da="星期四";
						break;
					case 5:
						da="星期五";
						break;
					case 6:
						da="星期六";
						break;				
				}
				this.today=da
				console.log(new Date(bes).getDay())
				console.log(afs)
				this.lbb()
			},
			monthSwitch(e) {
				console.log('monthSwitchs 返回:', e);
			}
		}
	}
</script>

<style>
.jdtuis .hdd{
	width: 100%;
	height: 120rpx;
	
	margin: 0 auto ;
	display: flex;
	line-height: 160rpx;
}
.jdtuis .jdbody{
	width: 95%;
	top: -42rpx;
	position:relative;
	z-index: 999;
	padding: 40rpx 20rpx;
	border-radius: 30rpx 30rpx 0 0;
	background-color: #fff;
}
.jdtuis .jdbody.mas{
	padding-top: 25rpx;
}
.jdtuis .jdbody .mas .marks{
	display: flex;
	font-size: 22rpx;
	padding-top: 25rpx;
}
.jdtuis .jdbody .mas .marks .mark1{
	padding: 4rpx 14rpx;
	background-image: linear-gradient(to right, #e1f6f9, #e7fbf1);
	color: #245039;
}
.jdtuis .jdbody .mas .marks .mark2{
	padding: 4rpx 14rpx;
	margin-left: 14rpx;
	background-image: linear-gradient(to right, #feeede, #fff6e8);
	color: #626262;
}
	.jdtuis .jpkc .jpkcContent{
		width: 96%;
		padding: 18rpx;
		margin: 30rpx auto;
		background-image: linear-gradient(to bottom, #83e9bb, #70d9d7);
		border-radius: 20rpx;
	}
	.jdtuis .jpkc .jpkcContent ul li:nth-child(1){
		margin-top: 20rpx;
	}
	.jdtuis .jpkc .jpkcContent ul li{
		padding-top: 25rpx;
		padding-bottom: 25rpx;
		border-bottom: 2rpx solid #ededed;
		
	}
	.jdtuis .jpkc .jpkcContent ul li .iio{
		position: relative;
		width: 100rpx;
		height: 26rpx;
		top: 20rpx;
		left: 645rpx;
		transform: rotate(45deg);
	}
	.jdtuis .jpkc .jpkcContent ul li .jpkcLeft{
		display: flex;
		background-color: #fff;
		justify-content: space-between;
		margin-top: -40rpx;
		padding: 20rpx 35rpx 20rpx 20rpx;
		border-radius: 20rpx;
	}
	.jdtuis .jpkc .jpkcContent ul li .jpkcLeft .jpkczi{
		
		width: 480rpx;
		
		font-size: 28rpx;
		margin-left: 30rpx;
	}

	.jdtuis .jpkc .jpkcContent ul li .jpkcLeft .jpkcImg{
		border: 2rpx solid #f8f8f8;
	}
	
	.jdtuis .jpkc .jpkcContent ul li .jpkcLeft .jpkczi .jpkcBottom{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.jdtuis .jpkc .jpkcContent ul li .jpkcLeft .jpkczi .jpkcBottom .ydd{
		padding: 15rpx 40rpx;
		border-radius: 30rpx;
		color: #fff;
		background-image: linear-gradient(to right, #f9800b, #f65b19);
	}
.fui-bottom__popup{
	text-align: center;
}
.fbp ._ul ._li:nth-child(1){
	color: #b0b0b0;
	font-size: 24rpx;
	height: 98rpx;
	line-height: 98rpx;
	border-bottom: 2rpx solid #e5e5e5;
}
.fbp ._ul ._li{
	
	height: 112rpx;
	line-height: 112rpx;
	border-bottom: 2rpx solid #e5e5e5;
	font-size: 28rpx;
}
.hidden {
	display: none;
}

.show {
	display: block;
}
.uni-calendar--hook{
	display: hidden !important;
}
</style>
