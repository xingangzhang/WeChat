// pages/startup/startup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title_image: '姓名.png',
    mine: '我的圆桌',
    name: '李腾飞',
    points: '60',
    list: [
      {
        id: '0198',
        topic: '主题：',
        time: '时间：',
        detail: '活动简介：',
        subject: '学科：',
        count: '已加入 ',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      }, {
        id: '0199',
        topic: '主题：',
        time: '时间：',
        detail: '活动简介：',
        subject: '学科：',
        count: '已加入 ',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      }
    ]
  },

  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})