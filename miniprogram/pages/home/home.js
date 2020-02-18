// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['/images/swiper01.jpg', '/images/swiper02.jpg', '/images/swiper03.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    proList: [{
      logo: '/images/pro_01.jpg',
      title: 'test',
      desc: '描述2',
    }, {
      logo: '/images/pro_02.jpg',
      title: 'test',
      desc: '描述3',
    }, {
      logo: '/images/pro_03.jpg',
      title: 'test',
      desc: '描述4',
    }, {
      logo: '/images/pro_02.jpg',
      title: 'test',
      desc: '描述4',
    }, ],
  },

  toDetail: function(e) {
    var index = e.currentTarget.dataset.index;
    wx.showToast({
      title: '点击了第' + index + '条!!',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})