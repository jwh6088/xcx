Page({
  data: {
    // 先准备一个数组 来装所有的 话题
    items: []
  },
  // 请求数据的事件
  getData: function () {

    // 声明变量 去 接收 page 里的 this;
    var that = this;

    // 调用 request 接口 发送请求
    wx.request({
      // 请求数据的地址
      url: 'https://www.vue-js.com/api/v1/topics',
      header: {
        'content-type': 'application/json' // 默认值
      },

      /*  ES 5 语法
        // 请求后的 回调函数
        success: function (res) {
          // console.log(that.data.items)
          // that.data.items = res.data.data;
          // console.log(that.data.items);
          // 设置数据
          that.setData({items:res.data.data});
        }
      */
      /*
        ES 6
      */
      success: (res) => {
        // 设置数据
        this.setData({ items: res.data.data });
      }
    })



  }
})