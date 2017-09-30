//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array_college: ['请选择学院','哲学社会学院', '文学院', '外国语学院', '艺术学院', '体育学院', '经济学院', '法学院', '行政学院', '管理学院', '数学学院', '物理学院', '化学学院', '生命科学学院', '机械科学与工程学院', '汽车工程学院', '材料科学与工程学院', '交通学院', '生物与农业工程学院', '电子科学与工程学院', '通信工程学院', '计算机科学与技术学院', '地球科学学院', '地球探测科学与技术学院', '建设工程学院', '环境与资源学院', '公共卫生学院', '药学院', '护理学院', '口腔医学院', '商学院', '金融学院', '公共外交学院', '新闻与传播学院', '应用技术学院', '软件学院', '仪器科学与电气工程学院', '临床医学院', '动物医学学院', '植物科学学院', '军需科技学院', '动物科学学院', '食品科学与工程学院', '公共外语教育学院', '马克思主义学院', '东北亚研究院', '公共计算机教学与研究中心', '基础医学院', '白求恩第一医院', '白求恩第二医院', '白求恩第三医院', '公共教学中心', '动物科学学院', '人兽共患病研究所', '党政职能部门', '群团组织', '派出机构', '直属机构', '其他研究机构'],
    array_education: ['请选择学历','本科', '研究生', '博士'],
    index_college: 0,
    index_education: 0,
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: true,
    plain: false,
    loading: false
  },
  bindCollegePickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_college: e.detail.value
    })
  },
  bindEducationPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_education: e.detail.value
    })
  },
  chooseImage: function () {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      }
    })
  },
  checkboxChange: function (e) {
    var selected = e.target.dataset.checks ? false : true;
    if (selected) {
      console.log('checkbox change');
      this.setData({
        disabled: !this.data.disabled
      })
    }
  }
})
