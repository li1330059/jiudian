<template>
	<view class="jdd">

	<!-- 使用uview-plus -->
	<view>
		<u-list @scrolltolower="scrolltolower" :height="listHeight">
			<u-list-item class="glodYBox">
				<u-list-item class="setListItem" v-for="(item, index) in jdds" :key="index">
					<view class="itemBox">
						<view>
							<image class="itemImg" :src="item"></image>
						</view>
						<text class="introduce">天锁你洛克手表鉴定案例哈哈哈</text>
						<view class="guanFang">
							<text class="guanText">￥2000</text>
							<text class="time">￥10000</text>
						</view>
					</view>
				</u-list-item>
			</u-list-item>
		</u-list>
	</view>
	</view>
</template>

<script setup>
	import { onMounted,reactive,ref } from "vue";
		let listHeight = ref(0);            //列表高度
	 //   let goodsList = reactive([]);       //商品数据
		  onMounted(()=>{
				//1. 请求手表箱包 或 珠宝配饰 或 手机数码 数据
				jdds();
				//2.（1）获取windowHeight（2）减去上面高度175 和 底部tab高度50（3）将rpx转化成px
				setListHeight();
			});
			const setListHeight = ()=>{
					let tempHeight = uni.getSystemInfoSync().windowHeight;
					let tempHeightRpx= tempHeight*2-175-50;
					listHeight.value = parseInt(tempHeightRpx/2);
				};
	export default {
		data() {
			return {
				jdds:[]
			}
		},

		
		onShow() {
			uni.request({
				url:this.apiUrl+"index.php/index/jd",
				success: (res) => {
					console.log("酒店")
					console.log(res)
					this.jdds=res.data
				}
			})
		},


		methods: {
			bback(){
				uni.navigateBack(-1)
			},
		}
	}
</script>

<style>
.jdd{
	width: 100%;
	 height: 100vh;
	 
	background: url("https://jhd.wangshangquan.top/static/img/bg.png");
	background-size: cover;
}
.jdd .hdd{
	width: 100%;
	height: 160rpx;
	
	margin: 0 auto ;
	display: flex;
	align-items: center;	
}
	.table{
	  width:100%;
	  border-spacing: 5px;
	}
	table tr{
		height: 732rpx;
	}
	table tr td{
		vertical-align:top;
		padding-top: 10px;
	}
	.video-row{
	  width: 40%;
	  height: 150px;
	  border-radius: 6px;
	  color: #000;
	  background-color: #fff;
	  font-size: 28rpx;
	}
</style>
