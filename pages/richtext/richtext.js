// rich-text.js
Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: #f66;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    },
    {
      name: 'hr'
    },
    {
      name: 'span',
      attrs: {
        class: 'sapn_class',
        style: 'color: #09c'
      },
      children: [{
        type: 'text',
        text: '世界你好！'
      }]
    }
    ]
  },
  tap() {
    console.log('tap')
  }
})