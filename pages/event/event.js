Page({
  data: {
    message: 'hello world'
  },
  onLoad: function () {
  },
  test: function () {
    // 获取数据
    console.log(this.data.message)
    // 如果设置值 要让视图 渲染
    // this.data.message = '你好';
    // 用 setData 让视图层知道  绑定的变量 值改变了
    this.setData({ message: '你好' });
    console.log(this.data.message)
  }

})
