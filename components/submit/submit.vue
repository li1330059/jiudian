<template>
	<view>
		<view class="submit">
			<view class="submit-chat">
				<view class="bt-img" @tap="records">
					<image :src="toc"></image>
				</view>
				<!-- 文本框 -->
				<textarea  auto-height="true" class="chat-send btn" :class="{displaynone:isrecord}" @input="inputs"
					@focus="focus" v-model="msg"></textarea>
				<!-- <view class="record btn" :class="{displaynone:!isrecord}" @touchstart="touchstart" @touchend="touchend"
					@touchmove="touchmove">
					按住说话
				</view> -->
				<view class="bt-img" @tap="emoji">
					<!-- <image src="../../static/icon/commonproblem.png"></image> -->
				</view>
				<view class="bt-img" @tap="more">
					<!-- <image src="../../static/icon/news.png"></image> -->
				</view>
			</view>
			<!-- 表情 -->
			<view class="emoji">
				<view class="emoji-send">
			<!-- 		<view class="emoji-send-det" @tap="emojiBack">
						<image src="../../static/icon/leftbrackets.png"></image>
					</view> -->
					<view class="emoji-send-bt" @tap="emojiSend">发送</view>
				</view>
				<!-- <emoji @emotion="emotion" :height="260"></emoji> -->
			</view>
			<!-- 更多 -->
			<view class="more" :class="{displaynone:!ismore}">
				<view class="more-list" @tap="sendImg('album')">
					<!-- <image src="../../static/icon/noreceive.png"></image> -->
					<view class="more-list-title">图片</view>
				</view>
				<view class="more-list" @tap="sendImg('camera')">
					<!-- <image src="../../static/icon/noreceive.png"></image> -->
					<view class="more-list-title">拍照</view>
				</view>
				<view class="more-list" @tap="choseLocation">
					<!-- <image src="../../static/icon/noreceive.png"></image> -->
					<view class="more-list-title">定位</view>
				</view>
				<view class="more-list">
					<!-- <image src="../../static/icon/noreceive.png"></image> -->
					<view class="more-list-title">视频</view>
				</view>
				<view class="more-list">
					<!-- <image src="../../static/icon/noreceive.png"></image> -->
					<view class="more-list-title">文件</view>
				</view>
			</view>
		</view>
		<view class="voice-bg" :class="{displaynone:!voicebg}">
			<view class="voice-bg-len">
				<view class="voice-bg-time" :style="{width:vlength/0.6+'%'}">
					{{vlength}}″
				</view>
				<view class="voice-del">上滑取消录音</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 引入组件
	//import emoji from '@/components/emoji/emoji.vue'
	// 录音
	const recorderManager = uni.getRecorderManager();

	export default {
		props:{
			  value: {
			      type: String,
			      default: ''
			    }
		},
		data() {
			return {
				isrecord: false,
				isemoji: false,
				ismore: false,
				voicebg: false,
				pageY: 0,
				msg: "",
				// 直接引用地址可能出不来，需要用require
				toc: require('../../static/img/icon2.png'),
				timer: '', //计时器
				vlength: 0
			};
		},
		created(){
			console.log("vall")
			console.log(this.value)
			this.msg = this.value
		},
		// components: {
		// 	emoji,
		// },

		methods: {
			//获取高度方法
			getElementHeight() {
				const query = uni.createSelectorQuery().in(this);
				query.select('.submit').boundingClientRect(data => {
					this.$emit('heights', data.height);
					console.log("ddta")
					console.log(data.height)
				}).exec();
			},
			//切换音频
			records() {
				//切换的时候关闭其他界面
				this.ismore = false
				this.isemoji = false
				//切换高度
				setTimeout(() => {
					this.getElementHeight();
				}, 10)
				if (this.isrecord) {
					this.isrecord = false;
					this.toc = require("../../static/img/icon2.png");
				} else {
					this.isrecord = true;
					this.toc = require("../../static/img/icon2.png");
				}
			},
			// 表情
			emoji() {
				this.isemoji = !this.isemoji;
				//切换的时候关闭其功能
				this.ismore = false
				this.isrecord = false;
				this.toc = require("../../static/img/icon2.png");
				//切换高度
				setTimeout(() => {
					this.getElementHeight();
				}, 10)
			},
			//接收表情
			emotion(e) {
				console.log(e),
					this.msg = this.msg + e
			},
			//文字发送
			inputs(e) {
				var chatm = e.detail.msg;
				var pos = chatm.indexOf('\n');
				// 检索字符串没有数据，返回-1
				// if (pos != -1 && chatm.length > 1) {
				// this.$emit('inputs', this.msg);
				// setTimeout(() => {
				// 	this.msg = '';
				// }, 0)
				// }

				if (pos != -1 && chatm.length > 1) {
					// 0为表情和文字
					this.send(this.msg, 0)
				}

			},
			// 输入框聚焦
			focus() {
				//关闭其他项
				this.isemoji = false;
				this.ismore = false;
				setTimeout(() => {
					this.getElementHeight()
				}, 10)
			},
			// 表情内发送
			emojiSend() {
				// if (this.msg.length > 0) {
				// 	this.$emit('inputs', this.msg);
				// 	setTimeout(() => {
				// 		this.msg = '';
				// 	}, 0)
				// }

				if (this.msg.length > 0) {
					//0为表情和文字
					this.send(this.msg, 0)
					this.msg=""
					// setTimeout(() => {
					// 	this.getElementHeight()
					// }, 10)
				}
			},
			// 表格退格
			emojiBack() {
				if (this.msg.length > 0) {
					this.msg = this.msg.substring(0, this.msg.length - 1);
				}
			},
			//更多功能
			more() {
				this.ismore = !this.ismore;
				//切换的时候关闭其他界面
				this.isemoji = false
				this.isrecord = false;
				this.toc = require("../../static/img/icon2.png");
				setTimeout(() => {
					this.getElementHeight();
				}, 10)
			},
			//图片发送
			sendImg(e) {
				let count = 9;
				if (e == 'album') {
					count = 9;
				} else {
					count = 1;
				}
				uni.chooseImage({
					count: count, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: [e], //从相册选择
					// success: function (res) { //用function的方式会找不到send方法
					success: (res) => {
						console.log(JSON.stringify(res.tempFilePaths));
						const filePaths = res.tempFilePaths;
						for (let i = 0; i < filePaths.length; i++) {
							this.send(filePaths[i], 1)
						}
					}
				});
			},
			//音频处理
			//开始录音
			touchstart(e) {
				console.log("开始录音")
				console.log("点击产生数据", e)
				this.pageY = e.changedTouches[0].pageY;
				this.voicebg = true;
				let i = 1;
				this.timer = setInterval(() => {
					this.vlength = i;
					i++;
					console.log("计时器开始工作,第几秒", i)
					//结束计时
					if (i > 60) {
						clearInterval(this.timer);
						this.touchend();
					}
				}, 1000)
				recorderManager.start();
			},
			//删除录音
			touchmove(e) {
				// console.log("滑动到的y轴高度：",e.changedTouches[0].pageY);
				if (this.pageY - e.changedTouches[0].pageY > 100) {
					// 关闭录音界面
					this.voicebg = false;
				}
			},
			// 结束录音
			touchend() {
				console.log("结束录音")
				clearInterval(this.timer);
				recorderManager.stop();
				// recorderManager.onStop(function(res) {
				recorderManager.onStop((res) => {
					let data = {
						voice: res.tempFilePath,
						time: this.vlength
					}
					if (this.voicebg) {
						this.send(data, 2);
					}
					// //时长归位
					this.vlength = 0;
					this.voicebg = false;
					console.log('recorder stop' + JSON.stringify(res));
					// self.voicePath = res.tempFilePath;
				});
			},
			//获取位置
			choseLocation() {
				uni.chooseLocation({
					// success: function(res) {
					success: res => {
						let data = {
							name: res.name,
							address: res.address,
							latitude: res.latitude,
							longitude: res.longitude
						}
						this.send(data, 3);
						// console.log('位置名称：' + res.name);
						// console.log('详细地址：' + res.address);
						// console.log('纬度：' + res.latitude);
						// console.log('经度：' + res.longitude);
						
					}
				});
			},
			//发送
			send(msg, type) {
				let date = {
					message: msg,
					type: type
				}
				this.$emit('inputs', date);
				setTimeout(() => {
					this.msg = '';
				}, 0)
			}
		}
	};
</script>

<style lang="scss" scoped>

	/deep/.uni-textarea-wrapper{
		width: 400rpx;
	}
	.submit {
		background: rgba(244, 244, 244, 0.96);
		border-top: 1px solid rgba(39, 40, 50, 0.1);
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index: 100;
		// padding-bottom: var(--status-bar-height);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.displaynone {
		display: none;
	}

	.submit-chat {
		width: 100%;
		display: flex;
		align-items: flex-end;
		box-sizing: border-box;
		padding: 14rpx 14rpx;

		image {
			width: 56rpx;
			height: 56rpx;
			margin: 0 10rpx;
			flex: auto;
		}

		.btn {
			flex: auto;
			background-color: #fff;
			border-radius: 10rpx;
			padding: 20rpx;
			max-height: 160rpx;
			margin: 0 10rpx;
		}

		.chat-send {
			line-height: 44rpx;
		}

		.record {
			line-height: 44rpx;
			text-align: center;
			font-size: 20rpx;
			color: rgba(39, 40, 50, 0.6);
		}
	}

	.emoji {
		width: 100%;
	//	height: 460rpx;
		background: rgba(236, 237, 238, 1);
		box-shadow: 0px 11rpx 0px 0px rgba(0, 0, 0, 0.1);

		.emoji-send {
			width: 180rpx;
			height: 84rpx;
			padding-top: 24rpx;
			background-color: rgba(236, 237, 238, 0.8);
			position: fixed;
			// bottom: 0;
			bottom: env(safe-area-inset-bottom);
			right: 0;
			display: flex;

			.emoji-send-bt {
				flex: 1;
				margin: 0 32rpx 0 20rpx;
				height: 80rpx;
				background: rgba(255, 228, 49, 1);
				font-size: 28rpx;
				text-align: center;
				line-height: 80rpx;
				border-radius: 12rpx;
			}

			.emoji-send-det {
				flex: 1;
				margin-left: 24rpx;
				height: 80rpx;
				background: #fff;
				font-size: 32rpx;
				text-align: center;
				line-height: 80rpx;
				border-radius: 12rpx;

				image {
					width: 42rpx;
					height: 32rpx;
				}
			}
		}
	}

	.more {
		width: 100%;
		height: 436rpx;
		background: rgba(236, 237, 238, 1);
		box-shadow: 0px 11rpx 0px 0px rgba(0, 0, 0, 0.1);
		bottom: env(safe-area-inset-bottom);
		padding: 8rpx 20rpx;
		box-sizing: border-box;

		.more-list {
			width: 25%;
			text-align: center;
			float: left;
			padding-top: 32rpx;

			image {
				width: 72rpx;
				height: 72rpx;
				padding: 24rpx;
				background: rgba(255, 255, 255, 1);
				border-radius: 24rpx;
			}

			.more-list-title {
				font-size: 24rpx;
				color: rgba(39, 40, 50, 0.5);
				line-height: 34rpx;
			}
		}
	}

	.voice-bg {
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		position: fixed;
		top: 0;
		bottom: 0;
		z-index: 1001;

		.voice-bg-len {
			height: 84rpx;
			width: 600rpx;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;
			background-color: rgba(255, 255, 255, 0.2);
			border-radius: 42rpx;
			text-align: center;
		}

		.voice-bg-time {
			display: inline-block;
			min-width: 120rpx;
			line-height: 84rpx;
			background-color: rgba(255, 228, 49, 1);
			border-radius: 42rpx;
		}

		.voice-del {
			position: absolute;
			bottom: -480rpx;
			width: 100%;
			text-align: center;
			color: #fff;
			font-size: 28rpx;
		}
	}
</style>

