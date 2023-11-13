<template>
	<view class="w-time-picker" :class="{'show':showTimePicker}">
<!-- 		<view class="header">
			<view class="hdd">
				<view @click="bback">
					<image style="width: 40rpx; height: 40rpx; margin-top: 20rpx; margin-left: 20rpx;  " src="../../static/img/arrow-left-bold1.png"></image>
				</view>
				<view style="font-size: 38rpx; margin-left: 200rpx;">选择服务时间</view>					
			</view>
		</view> -->
		<view class="w-time-days">
			<scroll-view scroll-x>
				<view class="w-time-scroll">
					<view class="w-time-day" :style="{'color':tabIndex==index?theme:'#333','border-color':tabIndex==index?theme:'#ddd'}" v-for="(day,index) in dayList" :key="index" @tap="toggleIndex(day,index)">
						<view class="w-time-week">{{day.week}}</view>
						<view class="w-time-date">{{day.month}}/{{day.day}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
<!-- 		<view class="w-time-days">
			<scroll-view scroll-x>
				<view class="w-time-scroll">
					<view class="w-time-day" :style="{'color':itemIndex==index?theme:'#ddd','border-color':itemIndex==index?theme:'#ddd'}" :class="{'w-time-item-active':item.disabled}"  v-for="(item,index) in timeList" :key="index" @tap="toggleItem(item,index)">{{item.label}}</view>
					<!-- <view class="w-time-day" :style="{'color':itemIndex==index?theme:'#ddd','border-color':itemIndex==index?theme:'#ddd'}" :class="{'w-time-item-active':'active1' ? !item.disabled:item.disabled}"   v-for="(item,index) in timeList" :key="index" @tap="toggleItem(item,index)">{{item.label}}</view> -->
					<!-- <view class="w-time-day" :style="{'color':itemIndex==index?theme:'#333','border-color':itemIndex==index?theme:'#333'}" :class="[item.disabled==true?'active1':'w-time-item-active' ]"   v-for="(item,index) in timeList" :key="index" @tap="toggleItem(item,index)">{{item.label}}</view> -->
				<!--</view>
			</scroll-view>
		</view> -->
<!-- 		<view class="w-time-days">
			<scroll-view scroll-x>
				<view class="w-time-scroll">
					<view class="w-time-day" :style="{'color':itemIndex==index?theme:'#ddd','border-color':itemIndex==index?theme:'#ddd'}" :class="{:item.disabled}"  v-for="(item,index) in timeList" :key="index" @tap="toggleItem(item,index)">{{item.label}}</view>
					<view class="w-time-day" :style="{'color':itemIndex==index?theme:'#ddd','border-color':itemIndex==index?theme:'#ddd'}" :class="{'w-time-item-active':'active1' ? !item.disabled:item.disabled}"   v-for="(item,index) in timeList" :key="index" @tap="toggleItem(item,index)">{{item.label}}</view>
					<view class="w-time-day" :class="{'active2':flag==index}"   v-for="(item,index) in lb2" :key="index" @tap="rq(index,title)">{{item.title}}</view>
				</view>
			</scroll-view>
		</view> -->
<!-- 		<view class="w-time-footer">
			<view class="w-time-cancel w-time-btn" @tap="hide">取消</view>
			<view class="w-time-sure w-time-btn" :style="{'background-color':theme}" @tap="submit">确定</view>
		</view> -->
	</view>
</template>

<script>
	let _this=null;
	export default {
		props:{
			allPeople:{
				type:[String,Number],
				default:7
			},			
			afterDays:{
				type:[String,Number],
				default:7
			},
			startHour:{
				type:[String,Number],
				default:0
			},
			endHour:{
				type:[String,Number],
				default:24
			},
			step:{
				type:[String,Number],
				default:30
			},
			afterHours:{
				type:[String,Number],
				default:1
			},
			theme:{
				type:String,
				default:"#f65b19"
			}
		},
		data() {
			return {
				dayList:[],
				timeList:[],
				tabIndex:0,
				itemIndex:-1,
				showTimePicker:false,
				
				lb2:[{
					index:0,
					title:"4"
				},{
					index:1,
					title:"5"
				},{
					index:2,
					title:"6"
				},{
					index:3,
					title:"7"
				},{
					index:4,
					title:"8"
				},{
					index:5,
					title:"9"
				},{
					index:6,
					title:"10"
				},{
					index:7,
					title:"10+"
				},],
				flagg:0,
				flag:0,
				syrq:""
			}
		},
		created(){
			_this=this;
		
			_this.initPicker();
		//	_this.initHours();
			_this.itemIndex=0;
			_this.time=_this.timeList[0];
			console.log("time")
			console.log(_this.itemIndex)
			console.log(_this.time)
			//_this.toggleItem(_this.timeList[0],0)
		},
		methods:{
			bback(){
				uni.navigateBack(-1)
			},
			rq(index,title){
				this.flag=index
				console.log(this.flag)
			},
			hide(){
				_this.showTimePicker=false;
				_this.$emit("cancel");
			},
			show(){
				_this.showTimePicker=true;
			},
			submit(){
				console.log("提交1")
				console.log(_this.time)
				if(_this.time=="" || _this.time==undefined){
					uni.showToast({
						icon:'error',
						title:"请选择时间"
					})
				}
				if(_this.time!=""){
					let tabItem=_this.dayList[_this.tabIndex];
					let result=tabItem.year+"-"+tabItem.month+"-"+tabItem.day+" "+_this.time.label+":00";
					console.log(result)
					_this.$emit("confirm",result);
					_this.showTimePicker=false;
				}
			},
			toggleIndex(item,index){
				console.log("变色")
				_this.tabIndex=index;
				_this.itemIndex=-1;
				console.log(item)
				console.log(_this.tabIndex)
				this.syrq=item.year+"-"+item.month+"-"+item.day
				console.log(this.syrq)
				this.$emit("rq",this.syrq)
			//	_this.initHours(!item.isToday);
			},
			toggleItem(item,index){
				console.log("变色1")
				console.log(item)
				console.log(index)
				if(!item.disabled){
					console.log("iten")
					console.log(item)
					_this.itemIndex=index;
					_this.time=item;
					console.log(_this.time.label)
				}
			},
			forMatNumber(n){
				return n<10?'0'+n:n
			},
			initHours(flag){
				let aDate=new Date();
				let curHour=aDate.getHours();
				_this.timeList=[];
				for(let j=_this.startHour*1;j<_this.endHour*1;j++){
					for(let k=0;k<60;k+=_this.step*1){
				//、		console.log()
						if(flag){
							_this.timeList.push({
								label:_this.forMatNumber(j)+":"+_this.forMatNumber(k),
								disabled:false
							});
						}else{
							_this.timeList.push({
								label:_this.forMatNumber(j)+":"+_this.forMatNumber(k),
								disabled:curHour+_this.afterHours<j?false:true
							});
						
							
						}
					}
				};
				for(let i=0; i<=_this.timeList.length; i++){
					//	console.log(_this.timeList[i].disabled)
					if(_this.timeList[i].disabled==true){
					//	console.log("真")
						 _this.timeList.splice(0,i+4)
					}
				}
				console.log("删除后")
				console.log(_this.timeList)
			},
			initPicker(){
				let aDate=new Date();
				let weekList=["周日","周一","周二","周三","周四","周五","周六"];
				_this.dayList.push({
					year:aDate.getFullYear(),
					month:_this.forMatNumber(aDate.getMonth()+1),
					day:_this.forMatNumber(aDate.getDate()),
					week:weekList[aDate.getDay()],
					isToday:true
				})
				for(let i=1;i<_this.afterDays*1;i++){
					aDate.setDate(aDate.getDate()+1);
					_this.dayList.push({
						year:aDate.getFullYear(),
						month:_this.forMatNumber(aDate.getMonth()+1),
						day:_this.forMatNumber(aDate.getDate()),
						week:weekList[aDate.getDay()],
						isToday:false
					})
				};
				console.log("dayList")
				console.log(_this.dayList[0])
				this.syrq=_this.dayList[0].year+"-"+_this.dayList[0].month+"-"+_this.dayList[0].day
				console.log(this.syrq)
				this.$emit("rq",this.syrq)
			},
			
		}
	}
</script>

<style lang="scss">
	.active1{
		display: none !important;
	}
	.active2{
		border-color: #d8a661 !important;
		color: #d8a661 !important;
	}
	.w-time-picker .header .hdd{
		width: 100%;
		height: 160rpx;
		color: #fff;
		margin: 0 auto ;
		display: flex;
		align-items: center;	
	}
	.w-time-picker.show{
		transform: translate3d(0,0,0);
	}
	.w-time-picker{
		// position: fixed;
		// left:0;
		// top:0;
		width: 650rpx;
		height: 100%;
		margin-left: 0;
		//z-index: 9999;
		background-color:#f5f5f5;
		display: flex;
		flex-direction: column;
		// transform: translate3d(100%,0,0);
		// transition: all 0.3s ease;
		.w-time-days{
			overflow: hidden;
			padding:20upx 0;
			background-color: #fff;
			.w-time-scroll{
				white-space: nowrap;
				height: 100rpx;
			}
			.w-time-day{
				display: inline-block;
				width: 120upx;
				text-align: center;
				border:solid 1px #ddd;
				margin:0 20upx;
				border-radius: 6upx;
				padding:10upx 0;
				color:#333;
				.w-time-week{
					font-size: 28upx;
					line-height: 1;
				}
				.w-time-date{
					font-size: 24upx;
					line-height: 1;
					margin-top: 10upx;
				}
			}
			.w-time-day-active{
				color:#f00;
				border-color:#f00;
			}
		}
		.w-time-body{
			flex:1;
			overflow: hidden;
			.w-time-list-scroll{
				height: 100%;
			}
			.w-time-list{
				display: flex;
				flex-wrap: wrap;
				padding:20upx 10upx;
			}
			.w-time-item{
				width: 120upx;
				height: 64upx;
				line-height: 64upx;
				margin:0 10upx 20upx;
				text-align: center;
				border:solid 1px #ddd;
				border-radius: 6upx;
				font-size: 28upx;
				transition: all 0.3s ease;
			}
			// .w-time-item-active{
			// 	background-color: #fff;
			// 	color: #333 !important;
			// }
		}
		.w-time-footer{
			position: fixed;
			bottom: 0;
			z-index: 999;
			width: 100%;
			height: 88upx;
			display: flex;
			background-color: #fff;
			.w-time-btn{
				flex:1;
				text-align: center;
				line-height: 88upx;
				font-size: 30upx;
			}
			.w-time-cancel{
				background-color: #fdeac2;
				color: #ab9460;
			}
			.w-time-sure{
				background-color: #d8a661;
				color:#fff;
			}
		}
	}
</style>
