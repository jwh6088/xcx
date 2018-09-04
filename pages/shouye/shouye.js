//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 所有话题列表数组
    items: []
  },
  // 微信小程序加载完毕会触发这个函数
  onLoad: function () {
    wx.request({
      url: 'https://www.vue-js.com/api/v1/topics',
      success: (res) => {
        this.setData({ items: res.data.data })
        console.log(res.data.data)
      }
    })
  },
})
