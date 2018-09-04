// pages/audio/audio.js
// audio.js
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    poster: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532686587548&di=83d2459a50a0f9dd88c23ac47eaad5e2&imgtype=0&src=http%3A%2F%2Fi.shangc.net%2F2018%2F0702%2F20180702014830628.jpg',
    name: '隔壁泰山',
    author: '阿里郎',
    src: 'http://fs.w.kugou.com/201807271426/114fb107f7784361679630e57d8de945/G134/M01/06/1D/JocBAFs2GNOANiAwADC9LSa5qUU451.mp3',
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})
