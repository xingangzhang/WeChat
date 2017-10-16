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
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    },
    winWidth: 0,
    winHeight: 0,
    listWidth: 0,
    // tab切换 
    currentTab: 0,
    sign_list: [
      {
        id: '0198',
        topic: 'SD卡解放了',
        time: '10月01号 10:10-10:10',
        detail: '几点睡了客服即可圣诞节水电费第三方第三方但是防抖是第三方疯狂了解到上课会计师电话费肯定会是开发计划点卡收费的思考了和罚款哈迪斯开发和扩大收费看了很多卡是否看见了房间就飞',
        subject: '学科：',
        count: '已加入 ',
        open: false,
      }, {
        id: '0199',
        topic: '款了附近的赶快来',
        time: '10月01号 10:10-10:10',
        detail: '快乐十分进口量的骄傲师傅的说法考虑到举案说法扣篮大赛荆防颗粒几点睡了肯德基啊SVN噢IE哦vawvuoriuoauwfodnj及的反馈了估计可能是两地分居不管你是都比较高世纪东方不给你计算机的付款了关禁闭了那就算了吧地方大家少年宫了北京市来不及',
        subject: '学科：',
        count: '已加入 ',
        open: false,
      }, {
        id: '0199',
        topic: '款了附近的赶快来',
        time: '10月01号 10:10-10:10',
        detail: '快乐十分进口量的骄傲师傅的说法考虑到举案说法扣篮大赛荆防颗粒几点睡了肯德基啊SVN噢IE哦vawvuoriuoauwfodnj及的反馈了估计可能是两地分居不管你是都比较高世纪东方不给你计算机的付款了关禁闭了那就算了吧地方大家少年宫了北京市来不及',
        subject: '学科：',
        count: '已加入 ',
        open: false,
      }
    ],
    run_list: [
      {
        id: '0198',
        topic: 'SD卡解放了',
        time: '10月01号 10:10-10:10',
        detail: '几点睡了客服即可圣诞节水电费第三方第三方但是防抖是第三方疯狂了解到上课会计师电话费肯定会是开发计划点卡收费的思考了和罚款哈迪斯开发和扩大收费看了很多卡是否看见了房间就飞',
        subject: '学科：',
        count: '已加入 ',
        open: false,
      }, {
        id: '0199',
        topic: '款了附近的赶快来',
        time: '10月01号 10:10-10:10',
        detail: '快乐十分进口量的骄傲师傅的说法考虑到举案说法扣篮大赛荆防颗粒几点睡了肯德基啊SVN噢IE哦vawvuoriuoauwfodnj及的反馈了估计可能是两地分居不管你是都比较高世纪东方不给你计算机的付款了关禁闭了那就算了吧地方大家少年宫了北京市来不及',
        subject: '学科：',
        count: '已加入 ',
        open: false,
      }, {
        id: '0199',
        topic: '款了附近的赶快来',
        time: '10月01号 10:10-10:10',
        detail: '快乐十分进口量的骄傲师傅的说法考虑到举案说法扣篮大赛荆防颗粒几点睡了肯德基啊SVN噢IE哦vawvuoriuoauwfodnj及的反馈了估计可能是两地分居不管你是都比较高世纪东方不给你计算机的付款了关禁闭了那就算了吧地方大家少年宫了北京市来不及',
        subject: '学科：',
        count: '已加入 ',
        open: false,
      }
    ],
    end_list: [
      {
        id: '0198',
        topic: 'SD卡解放了',
        time: '10月01号 10:10-10:10',
        detail: '几点睡了客服即可圣诞节水电费第三方第三方但是防抖是第三方疯狂了解到上课会计师电话费肯定会是开发计划点卡收费的思考了和罚款哈迪斯开发和扩大收费看了很多卡是否看见了房间就飞',
        subject: '学科：',
        count: '已加入 ',
        open: false,
      }, {
        id: '0199',
        topic: '款了附近的赶快来',
        time: '10月01号 10:10-10:10',
        detail: '快乐十分进口量的骄傲师傅的说法考虑到举案说法扣篮大赛荆防颗粒几点睡了肯德基啊SVN噢IE哦vawvuoriuoauwfodnj及的反馈了估计可能是两地分居不管你是都比较高世纪东方不给你计算机的付款了关禁闭了那就算了吧地方大家少年宫了北京市来不及',
        subject: '学科：',
        count: '已加入 ',
        open: false,
      }, {
        id: '0199',
        topic: '款了附近的赶快来',
        time: '10月01号 10:10-10:10',
        detail: '快乐十分进口量的骄傲师傅的说法考虑到举案说法扣篮大赛荆防颗粒几点睡了肯德基啊SVN噢IE哦vawvuoriuoauwfodnj及的反馈了估计可能是两地分居不管你是都比较高世纪东方不给你计算机的付款了关禁闭了那就算了吧地方大家少年宫了北京市来不及',
        subject: '学科：',
        count: '已加入 ',
        open: false,
      }
    ],

  },
  bindViewTapToMine: function (e) {
    console.log('src', this.data.title_image);
    console.log('point', this.data.points);

    wx.navigateTo({
      url: '../mine/mine?img_src=' + this.data.title_image +
      '&points=' + this.data.points
    })
  },

  signListKindToggle: function (e) {

    var sign_list = this.data.sign_list;
    console.log('signlistkindToggle', sign_list[0].id);

    for (var i = 0, len = sign_list.length; i < len; ++i) {
      // if (sign_list[i].id == id) {
      //   sign_list[i].open = !sign_list[i].open
      // } else {
      //   sign_list[i].open = false
      // }
    }
    // this.setData({
    //    sign_list: sign_list
    // });

    wx.navigateTo({
      url: '../list/signListPage'
    })
  },
  runListKindToggle: function (e) {

    var run_list = this.data.run_list;
    console.log('runlistkindToggle', run_list[0].id);

    for (var i = 0, len = run_list.length; i < len; ++i) {
      // if (sign_list[i].id == id) {
      //   sign_list[i].open = !sign_list[i].open
      // } else {
      //   sign_list[i].open = false
      // }
    }
    // this.setData({
    //    sign_list: sign_list
    // });

    wx.navigateTo({
      url: '../list/runListPage'
    })
  },
  endListKindToggle: function (e) {

    var end_list = this.data.end_list;
    console.log('signlistkindToggle', end_list[0].id);

    for (var i = 0, len = end_list.length; i < len; ++i) {
      // if (sign_list[i].id == id) {
      //   sign_list[i].open = !sign_list[i].open
      // } else {
      //   sign_list[i].open = false
      // }
    }
    // this.setData({
    //    sign_list: sign_list
    // });

    wx.navigateTo({
      url: '../list/endListPage'
    })
  },
  bindSwiperChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });
    switch (e.detail.current) {
      case 0:
        that.setData({ listWidth: that.data.sign_list.length * 570 });
        console.log('switch', e.detail.current);
        break;
      case 1:
        break;
      case 2:
        break;
      default:
        break;
    }
    console.log('swiper', e.detail.current);

  },

  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight,
          listWidth: that.data.sign_list.length * 570
        });

        // listHeight = list.length;
      }
    });

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
    //listHeight = 1000;


  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  }
})