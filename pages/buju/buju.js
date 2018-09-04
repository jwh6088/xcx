Page({
  data: {
    items: [
      { id: 1, name: '关注', info: "体育" },
      { id: 2, name: '热点', info: "体育" },
      { id: 3, name: '头条', info: "体育" },
      { id: 4, name: '财经', info: "体育" },
      { id: 5, name: '娱乐', info: "体育" },
      { id: 6, name: '足球', info: "体育" },
      { id: 7, name: '电竞', info: "体育" },
      { id: 8, name: '科教', info: "体育" },
      { id: 9, name: '汽车', info: "体育" },
      { id: 10, name: '美女', info: "体育" },
      { id: 11, name: '测试', info: "体育" },
      { id: 12, name: '测试', info: "体育" },
      { id: 15, name: '测试', info: "体育" },
      { id: 13, name: '测试', info: "体育" },
      { id: 14, name: '测试', info: "体育" },
    ],
    imgUrls: [
      '../../images/3.jpg',
      '../../images/4.jpg',
      '../../images/5.jpg',
      '../../images/6.jpg',
      '../../images/7.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 2000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})