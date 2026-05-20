Page({
  data: { user: null },
  async onShow() {
    const { result } = await wx.cloud.callFunction({ name: 'getUserInfo' })
    this.setData({ user: result })
  }
})
