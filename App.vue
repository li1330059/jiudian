<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page{
		 -webkit-user-select: text; 
				user-select: text;
	}
	body{
		color: #333333;
		font-size: 30rpx;
	}
	ul{
		padding-inline-start:0
	}
	ul li{
		list-style: none;
	}
	uni-tabber-item .uni-icon{
		font-size: 50px;
	}
/* 	.uni-tabbar .uni-tabbar__icon {
		width: 500rpx !important;
	    height: 500rpx !important;
	} */
</style>

