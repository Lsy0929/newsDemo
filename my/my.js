// pages/my/my.js
var common = require('../../utils/common.js') //引用公共JS文件

Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    newsList:[]
  },
  getMyFavorites:function(){
    let info=wx.getStorageInfoSync();
    let keys=info.keys;
    let num=keys.length;
    let myList=[];
    for(var i=0;i<num;i++){
      let obj=wx.getStorageSync(keys[i]);
      myList.push(obj);
    };
    this.setData({
      newsList:myList,
      num:num
    });
  },
  getMyInfo:function(e){
    wx.getUserProfile({
      desc: '用于展示个人中心头像、昵称',
      success:(res)=>{
        console.log(res);
        let info=res.userInfo;
        this.setData({
          isLogin:true,
          src:info.avatarUrl,
          nickName:info.nickName
        })
        this.getMyFavorites();
      }
    });
    
  },
  onShow:function(){
    if(this.data.isLogin){
      this.getMyFavorites();
    }
  },
  goToDetail:function(e){
    let id=e.currentTarget.dataset.id;
    wx.navigateTo({
      url:'../detail/detail?id='+id
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