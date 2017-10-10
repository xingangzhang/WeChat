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
        topic: 'SD卡解放了',
        time: '10月01号 10:10-10:10',
        detail: '几点睡了客服即可圣诞节水电费第三方第三方但是防抖是第三方疯狂了解到上课会计师电话费肯定会是开发计划点卡收费的思考了和罚款哈迪斯开发和扩大收费看了很多卡是否看见了房间就飞',
        subject: '学科：',
        count: '已加入 ',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      }, {
        id: '0199',
        topic: '款了附近的赶快来',
        time: '10月01号 10:10-10:10',
        detail: '快乐十分进口量的骄傲师傅的说法考虑到举案说法扣篮大赛荆防颗粒几点睡了肯德基啊SVN噢IE哦vawvuoriuoauwfodnj及的反馈了估计可能是两地分居不管你是都比较高世纪东方不给你计算机的付款了关禁闭了那就算了吧地方大家少年宫了北京市来不及',
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