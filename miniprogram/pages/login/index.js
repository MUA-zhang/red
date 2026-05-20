Page({
  async handleLogin() {
    const userProfile = await wx.getUserProfile({ desc: '用于完善成员信息' })
    const { result } = await wx.cloud.callFunction({ name: 'login', data: { userInfo: userProfile.userInfo } })
    getApp().globalData.userInfo = result.user
    wx.reLaunch({ url: '/pages/map/index' })
  }
})
