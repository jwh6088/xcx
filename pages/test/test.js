// pages/test/test.js
const util = require('../../utils/util.js')

Page({
  data: {
    message: 'Hello &nbsp; &lt; &gt; 小程序',
    mydatas: ['数据1', '数据2', '数据3'],
    users: [
      { name: "ONEE", age: 20, sex: 1 },
      { name: "TWO", age: 50, sex: 1 },
      { name: 'THRE', age: 30, sex: 0 },
      { name: 'FOUR', age: 63, sex: 1 },
      { name: "FIVE", age: 70, sex: 0 }
    ]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})