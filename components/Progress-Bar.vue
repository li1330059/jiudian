<template>
	<view>
		<view class="progress" :class="Type">
			<view class="progress-text" v-if="Vice == true">当前成长值: {{userInfo.czz}}/2500 (再积2500成长值可升级)</view>
			<view class="progress-bar" :style="{width: Width+'%'}"><view class="progress-text" v-if="Main == true">当前成长值: 0/2500 (再积2500成长值可升级)</view></view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// 进度条百分比
		Width: {
			type: Number,
			default: 0
		},
		userInfo:{
			type:Object,
			default:''
		},
		// 进度条样式
		/*
			aqua
			copper
			candy
			neon
			shine
			zigzag
			diamond
			hearts
			sparkle
		*/
		Type: {
			type: String,
			default: 'aqua',
		},
		// 主进度显示百分比
		Main: {
			type: Boolean,
			default: true,
		},
		// 副进度显示百分比
		Vice: {
			type: Boolean,
			default: true,
		},
		
	},
	data() {
		return {

		};
	},
	methods: {}
};
</script>

<style>
@import url('Progress-Bar.css');
</style>
