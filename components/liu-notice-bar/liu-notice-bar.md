### liu-notice-bar适用于uni-app项目的通告栏向上循环滚动组件
### 本组件目前兼容微信小程序、H5
### 本组件支持通告栏向上循环滚动、点击

### 使用方式	
页面使用需在 ``` script ``` 中引用组件
``` html
<liuNoticeBar :dataList="noticeList" @clickNotice="clickNotice"></liuNoticeBar>
```
``` javascript
import liuNoticeBar from '@/components/liu-notice-bar/liu-notice-bar.vue'
export default {
    components: {liuNoticeBar},
	data() {
		return {
			noticeList: [{
					id: '11',
					titile: '这里是第一条通知公告的内容，这里是第一条通知公告的内容'
				},
				{
					id: '22',
					titile: '这里是第二条通知公告的内容，这里是第二条通知公告的内容'
				}
			]
		};
	},
	methods: {
		//点击某一条通知公告
		clickNotice(item) {
			//item------通知公告信息
		}
	}
}
```

### 属性说明
| 名称                         | 类型            | 默认值                | 描述             |
| ----------------------------|--------------- | ---------------------- | ---------------|
| noticeFontColor             | String         | #333333       | 字体颜色
| noticeFontSize              | Number         | 30            | 字体大小
| noticeLineHeight            | Number         | 60            | 通告栏高度
| dataList                    | Array          | []            | 通知列表



