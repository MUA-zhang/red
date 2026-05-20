App({
  globalData: {
    userInfo: null,
    envId: 'cloudbase-7gmo9bl87305d82d'
  },
  onLaunch() {
    if (!wx.cloud) {
      console.error('请使用基础库 2.2.3 或以上以使用云能力')
      return
    }
    wx.cloud.init({
      env: this.globalData.envId,
      traceUser: true
    })
  }
})
