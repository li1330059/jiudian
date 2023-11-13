<template>
	<view class="content" :style="{ height: screenHeight }">
		<view class="hdd">
				<view @click="bback">
					<image style="width: 40rpx; height: 40rpx; margin-top: 60rpx; margin-left: 20rpx;  " src="../../static/img/arrow-left-bold1.png"></image>
				</view>
				<!-- <view style="font-size: 34rpx; margin-left: 240rpx; font-weight: bold;">酒店</view>					 -->
			</view>	
		<view style="margin-top: 40rpx; height: 80rpx; text-align: center; font-size: 48rpx;font-weight: bold;">二维码核销</view>
		<view style="width: 520rpx; height: 29rpx; border-radius: 50rpx 50rpx 0 0; margin: 20px auto 0;  background-color: #9fffff;"></view>
		<view style="padding: 40rpx; width: 560rpx; height: 928rpx; margin: 0  auto; background-color: #fff; border-radius: 30rpx;">
		<view  style="width: 100%;" >		
			<tkiBarcode style="width: 100%;" cid="code128" :loadMake="false" format="code128"  :val="orderNum" ref="cco" @result="code128" />
		</view>
		<view style='width: 100%; font-weight: bold; font-size: 17px; margin: -20px auto; text-align: center;'>{{orderNum2}}</view>
		<view class="canvas">
			<!-- 二维码插件 width height设置宽高 -->
			<canvas canvas-id="qrcode" :style="{width: `${qrcodeSize}px`, height: `${qrcodeSize}px`}" />
		</view>			
		
		<view style="margin-top: 40px; border-top:1px dashed #eeeeee; padding-top: 10px;">
			<view style="width: 60rpx; height: 60rpx; background-color: #77decd; border-radius: 50%; margin-top: -50rpx; margin-left: -70rpx;"></view>
			<view style="width: 60rpx; height: 60rpx; background-color: #a0eed6; border-radius: 50%; margin-top: -60rpx; margin-left: 570rpx;"></view>
			<view style=" width: 100%; font-weight: bold; margin-left: 30rpx;">{{jdName}}</view>
			<view style="width: 90%; font-size: 22rpx; margin: 20rpx auto;  display: flex; justify-content: space-between;">
				<view>联系人姓名：{{liverName}}</view>
				<view>联系方式：{{phone}}</view>
			</view>			
			<view style="width: 90%; margin: 20rpx auto; font-size: 22rpx;">订单日期：{{date}}</view>
		</view>
</view>
	<view style="width: 520rpx; height: 29rpx; border-radius: 0 0 50rpx 50rpx; margin: 0 auto;  background-color: #9fffff;"></view>	
<!-- 		<text class="list-text">{{ '预约号码:' + ' ' + myFormatData.yyh}}
		</text>

		<text class="list-text"> {{ '预约窗口:' + '  ' + myFormatData.bsdmc}}
		</text>

		<text class="list-text"> {{ '业务类型:' + '  ' + myFormatData.Yylxmc}}
		</text>

		<text class="list-text"> {{ '预约日期:' + '  ' + myFormatData.yyrq}}
		</text> -->





	</view>
</template>

<script>
	import Vue from 'vue';
	import uQRCode from '@/common/uqrcode.js'
	import tkiBarcode from "@/components/tki-barcode/tki-barcode.vue"


	export default {
		data() {
			return {
				// 二维码标识串
				qrcodeText: 'eoruw20230528',
				// 二维码尺寸
				qrcodeSize: 186,

				// 最终生成的二维码图片
				qrcodeSrc: '',
				
				
				myFormatData: {
					'yyh': 'eoruw20230528',
					'bsdmc': '窗口1',
					'Yylxmc': '租金缴纳',
					'yyrq': '预约日期'
				},
				orderNum:"",
				orderNum2:"",
				//屏幕高度
				screenHeight: 0,
				bar: ['ean8'],
				val: "FB19A1650-100S",
				opations: {
					// format: "CODE128",//选择要使用的条形码类型 微信支持的条码类型有 code128\code39\ena13\ean8\upc\itf14\
					width: 4,//设置条之间的宽度
					height: 120,//高度
					displayValue: true,//是否在条形码下方显示文字
					// text: "FB19A1650-100S",//覆盖显示的文本
					textAlign: "left",//设置文本的水平对齐方式
					textPosition: "bottom",//设置文本的垂直位置
					textMargin: 0,//设置条形码和文本之间的间距
					// fontSize: 24,//设置文本的大小
					// fontColor: "#0000ef",//设置文本的颜色
					// lineColor: "#0000ef",//设置条形码的颜色
					background: "#FFFFFF",//设置条形码的背景色
					margin: 0,//设置条形码周围的空白边距
					// marginTop: 10,//设置条形码周围的上边距
					// marginBottom: 20,//设置条形码周围的下边距
					// marginLeft: 30,//设置条形码周围的左边距
					// marginRight: 40,//设置条形码周围的右边距
				},
				jdName:"",
				liverName:'',
				phone:"",
				phone2:"",
				show:false,
				tc:[],
				allhao:"",
				abc:"",
				date:""
			}
		},
		components: {
			tkiBarcode
			
		},
		onLoad(e) {
			console.log("eeeeee")
			console.log(e)
			this.date=e.date
			this.abc=e.orderNum
			uni.showShareMenu({
					 withShareTicket:true,
					//设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
					menus:["shareAppMessage","shareTimeline"]
				})
			this.screenHeight = uni.getSystemInfoSync().windowHeight;
			if(e.tc!=undefined){
				this.tc = JSON.parse(e.tc)
				console.log(this.tc)
			}
			if(e.date==undefined){
				this.date=this.tc.date
			}
			if(e.orderNum!=undefined){
				this.orderNum=e.orderNum
				
				var q4 = this.orderNum.substring(0,4);
				var h4 = this.orderNum.substring(this.orderNum.length - 4,this.orderNum.length);
				this.orderNum2 = q4+" **** **** **** "+h4;
			}
			if(e.jdName!=undefined){
				this.jdName = e.jdName
			}
			if(e.liverName!=undefined){
				this.liverName = e.liverName
			}
			if(e.phone!=undefined){
				this.phone = e.phone
				
				var q4 = this.phone.substring(0,3);
				var h4 = this.phone.substring(this.phone.length - 4,this.phone.length);
				this.phone2 = q4+"****"+h4;
			}
			
			if(e.jdName==undefined){
				this.jdName=e.tclxname
			}
			if(e.liverName==undefined){
				this.liverName=this.tc.lxrName
			}
			if(e.phone==undefined){
				this.phone=this.tc.lxrPhone
			}
			if(e.orderNum==undefined){
				this.orderNum=this.tc.ddhao
				this.allhao=this.orderNum+","+this.jdName
				var q4 = this.orderNum.substring(0,4);
				var h4 = this.orderNum.substring(this.orderNum.length - 4,this.orderNum.length);
				this.orderNum2 = q4+" **** **** **** "+h4;
			}
			
			this.make();

		},
		onShow() {
			
			setTimeout(() => {
				//for (let index = 0; index < this.bar.length; index++) {
					setTimeout(() => {
					//	console.log(index)
						this.$refs.cco._makeCode()
					}, 1000 );
			//	}
			}, 1000)			
		},
		methods: {
			bback(){
				uni.navigateBack(-1)
			},
			code39(v) {
				// console.log('code39:', v)
			},
			code128(v) {
				 console.log('code128:', v)
			},
			make() {
				uni.showLoading({
					title: '二维码生成中',
					mask: true
				})
				if(this.abc!=undefined){
					uQRCode.make({
						canvasId: 'qrcode',
						text: this.orderNum,
						size: this.qrcodeSize,
						margin: 10,
						success: res => {
							this.qrcodeSrc = res
							console.log('qrcodeSrc = ' + this.qrcodeSrc);
						},
						complete: () => {
							uni.hideLoading()
						}
					})					
				}				
				if(this.abc==undefined){
					uQRCode.make({
						canvasId: 'qrcode',
						text: this.allhao,
						size: this.qrcodeSize,
						margin: 10,
						success: res => {
							this.qrcodeSrc = res
							console.log('qrcodeSrc = ' + this.qrcodeSrc);
						},
						complete: () => {
							uni.hideLoading()
						}
					})					
				}

			},


		}
	}
</script>

<style lang="scss">
	page {
	  width: 100%;
	  height: 100%;
	}

	.content {
		min-height: 100%;
		.content-wrap {
		} 
		 
		background: url("https://jhd.wangshangquan.top/static/img/ewmbgg.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
		  background-attachment: fixed;
		
	}
.content .hdd{
	height: 160rpx;
}

	.text {
		display: flex;
		justify-content: center;
		margin-top: 46rpx;
		margin-bottom: 6rpx;
		font-size: 36rpx;
		height: 44rpx;
		color: #333333;
	}

	canvas {
		width: 236px;
		height: 236px;
		margin: 100rpx auto;
		// position: fixed;
		// top: 50%;
		// left: 50%;
		// margin-left: -238rpx;
		// margin-top: -138rpx;
	}


	.list-text {
		display: flex;
		justify-content: center;
		width: 100%;
		line-height: 60rpx;
		font-size: 28rpx;
		color: #666666;
	}

	.button {
		width: 88%;
		margin-top: 52rpx;

	}
</style>