// pages/list/signListPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_src: '姓名.png',
    name: '姓名',
    college: '学院',
    education: '本科生',
    point: '积分',
    id: '0198',
    topic: 'SD卡解放了',
    time: '10月01号 10:10-10:10',
    place: '活动地点',
    detail: '几点睡了客服即可圣诞节水电费第三方第三方但是防抖是第三方疯狂了解到上课会计师电话费肯定会是开发计划点卡收费的思考了和罚款哈迪斯开发和扩大收费看了很多卡是否看见了房间就飞',
    subject: '学科：',
    count: '5/10 ',
    user_list: [
      {
        id: '0198',
        img_src: '姓名.png'
      },
      {
        id: '0198',
        img_src: '姓名.png'
      }
    ]
  },
  bindViewTapToMine: function (e) {
    console.log('src', this.data.title_image);
    console.log('point', this.data.points);

    wx.navigateTo({
      url: '../mine/mine?img_src=' + this.data.img_src +
      '&points=' + this.data.point
    })
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