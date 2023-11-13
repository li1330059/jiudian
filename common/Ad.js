/*
 *在页面中定义激励视频广告
 */
let Ad= null;
let rewarded = {
	//id就是传入的广告位id 
	load(idd, id, sheng) {
		if (uni.createRewardedVideoAd) {
			Ad= uni.createRewardedVideoAd({
				adUnitId: idd,
				multiton: true // 是否启用多例模式，默认为 false，该参数仅在基础库 2.8.0 或以上的版本支持
			})
			Ad.onLoad(() => {
				console.log('激励视频 广告加载成功');
			})
			Ad.onError((err) => {
				console.log("激励视频 广告加载失败", err)				
			})
			Ad.onClose((res) => {
				if (res && res.isEnded || res === undefined) {
					console.log("获得奖励")
					// uni.request({
					// 	url:"https://www.muyukj.net/index/select_works_all",
					// 	success: (res) => {
					// 		console.log("works")
					// 		console.log(res)
					// 		this.works=res.data
					// 	},
					// 	fail: (err) => {
					// 		console.log("eer")
					// 		console.log(err)
					// 	}
					// })
						// 	for(let i=0; i<this.works.length; i++){
						// 		this.works[i]['tt']=this.works[i].title.substring(0,30)
						
						// 		this.works[i]['sheng']=this.works[i].all_user - this.works[i].now_user
						// 		this.works[i]['bfb']=(((this.works[i].now_user/this.works[i].all_user)*100).toFixed(2))
								
						// 	}
					uni.request({
						method:"POST",
						url:"https://www.muyukj.net/index/cydb",
						data:JSON.stringify({
							"openid":uni.getStorageSync("openid"),
							"dbid":id
						}),
						success: (res) => {
							console.log("rsss")
							console.log(res)
						//	setTimeout(function(){
								if(res.data.status==1){
									uni.showToast({
										title:res.data.data,
										duration:2000
									})
									uni.navigateTo({
										url:"/pages/Detail/Detail?id="+id+"&sheng="+sheng
									})								
								}
								if(res.data.status==-1){
									uni.showToast({
										icon:'error',
										title:res.data.data,
										duration:2000,
									
									})														
								}
								setTimeout(function(){
									if(res.data.status==-2){
										uni.showToast({
											icon:'error',
											title:res.data.data,
											duration:2000,									
										})									
									}	
									that.jd()							
							}, 60000)
					
							console.log(res)
					
						}
					})	
					//Ad.offClose();
				} else { // 播放中途退出，不下发游戏奖励
					console.log("播放中途退出")
					console.log(res.isEnded)
					if(res.isEnded==false){
						console.log("出")
						// uni.switchTab({
						// 	url:"/pages/index/index?id="+id
						// })
						// uni.request({
						
						// 	url:this.apiUrl+"index/select_works_all",

						// 	success: (res) => {
						// 		console.log("rrrr")
						// 		console.log(res)
						// 	//	setTimeout(function(){
						// 			if(res.data.status==1){
						// 				uni.showToast({
						// 					title:res.data.data,
						// 					duration:2000
						// 				})
						// 				uni.navigateTo({
						// 					url:"/pages/Detail/Detail?id="+id+"&sheng="+sheng
						// 				})								
						// 			}
						// 			if(res.data.status==-1){
						// 				uni.showToast({
						// 					icon:'error',
						// 					title:res.data.data,
						// 					duration:2000,
										
						// 				})														
						// 			}
						// 			setTimeout(function(){
						// 				if(res.data.status==-2){
						// 					uni.showToast({
						// 						icon:'error',
						// 						title:res.data.data,
						// 						duration:2000,									
						// 					})									
						// 				}	
						// 				that.jd()							
						// 		}, 30000)
						
						// 		console.log(res)
						
						// 	}
						// })						
					}

				}
			})
		}
	},
	show() {
		if (Ad) {
			console.log("激励视频 显示中...")
			Ad.show().catch(() => {
				// 失败重试
				Ad.load()
					.then(() => {
						Ad.show()
					})
					.catch(err => {
						console.log('激励视频 广告显示失败')
					})
			})
		}
	},
	destroy() {
		if (Ad.destroy) {
			Ad.destroy();
			console.log("销毁激励视频实例")
		}
	}
}
 
module.exports = {
	rewarded,
};
