<template>
  <view style="width: 100%; height: 100%;">
    <view class="tabs">
      <view v-for="(tab, index) in tabs" class="tab-item" :class="current==index&&'active'" @click="current = index">
      {{tab.title}}
      </view>
    </view>
    <swiper :current="current" class="swiper-box" @change="onChange">
        <swiper-item v-for="(item ,index) in tabs" :key="index">
          <scroll-view scroll-y="true" style="height: 100%;">
            <!-- #ifdef MP -->
            <slot name="{{'content' + index}}"></slot>    
            <!-- #endif -->
            <!-- #ifndef MP -->
            <slot :name="'content'+index"></slot>
            <!-- #endif -->
          </scroll-view>
        </swiper-item>
    </swiper>
  </view>
</template>

<script>
	export default {
    name: 'swiperTab',
    props: {
      currentTab: {
        type: Number,
        default: 0
      },
      tabs: {
        type: Array,
        default: []
      }
    },
		data() {
			return {
				current: this.currentTab
			};
		},
    methods: {
      onChange(e) {
        this.current = e.detail.current;
        this.$emit('change', e.detail.current);
      }
    }
	}
</script>
<style>
swiper-tab{
  display: block;
 
}
</style>
<style lang="scss" scoped>
	 .swiper{
		height: 500rpx;
	}
.tabs{
  width: 750rpx;
  margin: 0 auto;
  height: 88rpx;
  line-height: 88rpx;
  display: flex;
  justify-content: space-between;
  border-bottom: 6upx solid #f2f2f2;
  .tab-item {
    // flex: 1;
    text-align: center;
	
	width: 240rpx;
    margin-left: 80rpx;
    margin-right: 80rpx;
    
    font-weight: 500;
    height: 100%;
    box-sizing: border-box;
    &.active{
		
      width: 240rpx;
	  color: #e97c37;
	  border-bottom: 6upx solid #e97c37;
      // border-bottom: 6upx solid #ffdb03;
    }
  }
}
.swiper-box{
  width: 100%;
  min-height: 150vh;
  // height: calc(100% + 75rpx);

}
</style>
