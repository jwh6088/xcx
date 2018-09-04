//在使用的View中引入WxParse模块
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    // 文章标题
    title: '',
    // 文章内容
    content: ''
  },

  // 页面加载完毕之后
  onLoad: function (options) {
    console.log(options)
    // 请求数据
    wx.request({
      url: 'https://www.vue-js.com/api/v1/topic/' + options.id,
      // 请求完成后的回调函数
      success: (res) => {
        console.log(res);
        // 设置文章的标题
        this.setData({ title: res.data.data.title });
        // this.setData({content:res.data.data.content});
        // 获取请求后 需要 解析 的 内容
        var content = res.data.data.content;
        /**
        * WxParse.wxParse(bindName , type, data, target,imagePadding)
        * 1.bindName绑定的数据名(必填)
        * 2.type可以为html或者md(必填)
        * 3.data为传入的具体数据(必填)
        * 4.target为Page对象,一般为this(必填)
        * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
        */
        WxParse.wxParse('content', 'html', content, this, 5);
      }
    })
  }
})
