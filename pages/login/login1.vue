<template>
	<view class="loogin">
	
		
			<!-- <button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar"> -->
<!-- 			  <image style="width: 148rpx; height: 148rpx; margin-top: 200rpx; margin-left: 40%;"  name="avatar" class="avatar" :src="avatarUrl"></image>
			<!-- </button> -->
		<!--	 <view style="width: 100%; color: #030303; text-align: center; margin-top: 20rpx;">
				 <input type="nickname" placeholder="请授权登录账号" v-model="ni" />
				 </view>
			<!-- <view style="display: flex; align-items: center; margin: 20rpx auto; width: 70%;">
			昵称:<input style="margin-left: 20rpx; border: 2rpx solid #f2f2f2; padding-left: 30rpx;" name="nickname" v-model="nickname" type="nickname" class="weui-input" placeholder="请输入昵称"/>				 
			 </view> -->
			 <form>
			
           <!-- #ifdef MP -->
		<!--	<view class="wxsq">
				<button style="text-align: right;" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">点击添加头像</button>
				<input id="nic" type="nickname" @change="chang" placeholder-class="nick" placeholder="填写用户名" v-model="nickname">
			</view>	 -->		
            <!-- #endif -->
			<view @click="loginn">
				
			 <button class="wxlogin" type="primary" open-type ="getPhoneNumber" @getphonenumber="getphonenum" >手机号码一键登录</button>			
			</view>
		</form>

	</view>
</template>

<script>
	import WXBizDataCrypt from "../../static/js/WXBizDataCrypt.js"
	export default{
		data(){
			return{
				avatarUrl: '/static/img/ddl.jpg',	
				//sjyqm:"",
				ni:"",
				yqm:"",
				code:"",
				pc:"",
				session_key:"",
				avatar:"https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0"
			//	phoneNumber
				
			}
		},
			// 注意获取参数是要在上面生成二维码的页面 我上面写的是 pages/user/user , 下面的代码也是在 pages/user/user 里面的onLoad中
			onLoad(e) {
				
            /*#ifdef MP*/
				uni.showShareMenu({
					 withShareTicket:true,
					//设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
					menus:["shareAppMessage","shareTimeline"]
				})
				/*#endif*/
				console.log("e")
				console.log(e)
				
				// 获取二维码带过来的参数,或者内嵌扫一扫跳转过来的参数
				this.yqm = decodeURIComponent(e.scene);
				console.log("yqqm")
				console.log(this.yqm)
			},
			
		onShow(){

		},
		methods:{

			scan() {
					let that = this
					//访问扫描API
					uni.scanCode({
						// 扫描成功
						success: res => {
							// 将参数解码
							let path=decodeURIComponent(res.path)
							// 直接进行跳转
							uni.navigateTo({
								// 我上面的二维码地址是 pages/user/user, 扫码后会跳转到 pages/user/user并且会携带参数在后面
								url: '/' + decodeURIComponent(res.path)
							})
						},
						// 扫码失败
						fail: (res) => {
							uni.showToast({
								title: "扫码失败",
								icon: 'error',
								duration: 1000
							})
						}
					})
				},
			onChooseAvatar(e){
				console.log(e)
				this.avatarUrl = e.detail.avatarUrl
			},
			login(){
					uni.switchTab({
						url:'/pages/pwqrorder/pwqrorder'
					})
			},
			chang(e){
				//console.log("chaa")
				//console.log(e.detail.value)
				this.ni=e.detail.value
				//e.detail.value="填写用户名"
			},
			loginn(){
				console.log("登录")
				let that = this
					
				uni.login({
					provider:"univerify",
					success(res){
						console.log("code")
						console.log(res.code)  //获取到的code
						that.code=res.code

						uni.request({
							url: that.apiUrl+"index.php/index/RequestHttp", 
							method:'GET',  
							data: {  
								 
								code:that.code,                                 //wx.login 登录成功后的code  
								
							},  
							success: (cts) => {  						  // 换取成功后 暂存这些数据 留作后续操作  
								console.log("cts")
								console.log(cts)
								that.openId=cts.data.openid               //openid 用户唯一标识  
								that.unionid=cts.data.unionid             //unionid 开放平台唯一标识   当公众号和小程序同时登录过才会有
								that.session_key=cts.data.session_key     //session_key  会话密钥 							
								console.log("session_key")					
								console.log(that.session_key)
								
								}
							})
				
					}					
				})
			
			},
			getphonenum(e){
				console.log("ee")
				console.log(e)
				console.log("session_key")
				console.log(this.session_key)
				let that =this
				const accountInfo = uni.getAccountInfoSync(); //获取小程序appid
				console.log("accountInfo")
				console.log(accountInfo)
				//let appid = accountInfo.miniProgram.appId							
				let appid = accountInfo.miniProgram.appId
				that.pc = new WXBizDataCrypt(appid,that.session_key);
					console.log("pc")
					console.log(that.pc)
				//	pc.decryptData()
					let data = that.pc.decryptData(e.detail.encryptedData,e.detail.iv);  
					console.log(data)       //data就是最终解密的用户信息
				    console.log(data.phoneNumber)
					this.phoneNumber=data.phoneNumber
					if(that.yqm == "undefined"){
						console.log("unn")
						uni.request({
							method:"POST",
							url:that.apiUrl+"index.php/index/regist",
						//	url:that.apiUrl+"index.php/index/regist2",
							data:JSON.stringify({
								'user_name' : this.openId,
								"phone" : this.phoneNumber
								
							}),
							header:{'Content-Type': 'application/json; charset=utf-8'},
							success:(res)=>{
								console.log("ssave")
								console.log(res,1111)
								uni.setStorageSync('token',res.data.token)
								uni.setStorageSync('code',res.data.code)
								uni.setStorageSync("openid",res.data.user_name)
								uni.request({
										method:'POST',
										url:this.apiUrl+"index.php/index/find_user_user_name",
										data:JSON.stringify({
											'user_name':uni.getStorageSync("openid")
										}),
										success: (res) => {
											console.log("tou")
											console.log(res)
											 this.userInfo=res.data
											// this.zxx()
											//if(res.data.avatar==null){
												console.log("微信头像")
												
												if(this.userInfo.avatar!="" ||this.userInfo.avatar != undefined){
													this.avatar=this.userInfo.avatar
													uni.setStorageSync("avatar",this.avatar)
												}else{
													uni.setStorageSync("avatar",this.avatar)
												}
											//	this.avar=uni.getStorageSync("avatar")
												//this.userInfo.avatar="https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0"
										//	}
										}
									})	
								//uni.setStorageSync("avatar",this.avatar)
								
								uni.showToast({
									title:"登录成功",
									duration:2000
								});
								uni.navigateTo({
									url:"/pages/pwqrorder/pwqrorder"
								})
					
							}
							})								
					}else{
						uni.request({
							method:"POST",
							url:that.apiUrl+"index.php/index/regist",
						//	url:that.apiUrl+"index.php/index/regist2",
							data:JSON.stringify({
								'user_name':this.phoneNumber													
							}),
							header:{'Content-Type': 'application/json; charset=utf-8'},
							success:(res)=>{
								console.log("ssave")
								console.log(res,1111)
								uni.setStorageSync('token',res.data.token)
								//uni.setStorageSync('code',res.data.code)
								uni.setStorageSync("openid",this.phoneNumber)
								uni.setStorageSync("phone",this.phoneNumber)
								uni.showToast({
									title:"登录成功",
									duration:2000
								});
								uni.switchTab({
									url:"/pages/pwqrorder/pwqrorder"
								})				
							}
							})										
					}
				uni.getUserInfo({
					provider: 'weixin',
					success: infoRes => {
						that.userInfo=infoRes.userInfo; //用户信息，微信头像，昵称等等
						console.log("uuf")
						console.log(that.userInfo)
						
					},
					fail(res) {
						uni.showToast({
							title:'登录授权失败',
							icon:'none',
						})
					}
				})
				

			
				// uni.getUserProfile({
				// 	desc:"",
				// 	success: (res) => {
				// 		console.log("获取信息")
				// 	},
				// 	fail: (err) => {
				// 		console.log("错误")
				// 		console.log(err)
				// 	}
				// })
				console.log(e)
				
			},


		}
	}
</script>

<style lang="scss">
.loogin .userInfoHeader{
	width: 100%;
	height: 2rem;
	padding-top: 1.5rem;
	color: #FFF;
	background-image: linear-gradient(to right, #ff5a00, #ffa651);
}
.loogin .wxsq{
	width: 70%;
	display: flex;
	justify-content: space-between;
	font-size: 14px;
	margin: 650rpx auto 0;
	color: #616c7e;
}
.loogin .wxsq .nick{
	color: #616c7e;
}
.loogin .wxlogin{
	width: 95%;
	height: 60rpx;
	line-height: 60rpx;

	font-size: 28rpx;
	border-radius: 5rem;
	position: fixed;
	bottom: 3rem;
	left: 2%;
}
.loogin .wxsq input{
	width: 45%;
	color: #616c7e;
}
.loogin .wxsq button{
	background-color:#FFF;
	
	line-height: 46rpx;
	font-size: 28rpx;
	&::after{
					border:none;
				}

}

</style>