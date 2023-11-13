<template>
	<view class="notice-main" style="background-color: #FFFFFF; display: flex; align-items: center; width: 96%; margin: 10rpx auto; border-radius: 10rpx; height: 60rpx;">
		<image style="width: 131rpx; height: 25rpx; margin-left: 25rpx; margin-right: 10rpx;" src="../../static/img/notice.png"></image>
		<swiper class="notice-swiper" :style="'height:'+noticeLineHeight+'rpx;line-height:'+noticeLineHeight+'rpx;'"
			autoplay="true" interval="5000" duration="1000" circular="true" vertical="true">
			<swiper-item v-for="(list,index) in dataList" :key="index" @click.stop="clickList(list)">
				<view class="notice-swiper-item" :style="'font-size:'+noticeFontSize+'rpx;color:'+noticeFontColor">
					{{list.titile}}
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			//通知列表
			dataList: {
				type: Array,
				default: null
			},
			//字体大小
			noticeFontSize: {
				type: Number,
				default: 24
			},
			//字体颜色
			noticeFontColor: {
				type: String,
				default: '#ff421d'
			},
			//通告栏高度
			noticeLineHeight: {
				type: Number,
				default: 60
			},
		},
		data() {
			return {};
		},
		methods: {
			//点击列表
			clickList(list) {
				this.$emit("clickNotice", list)
			}
		}
	}
</script>

<style lang="scss">
	.notice-main {
		height: auto;

		.notice-swiper {
			height: auto;
			width: 90%;
			margin: 0 auto;
			color: #ff421d;
			.notice-swiper-item {
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
			}
		}
	}
</style>
