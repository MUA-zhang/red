Page({
  data: { latitude: 40.12, longitude: 116.65, markers: [], selected: null },
  onShow() { this.fetchSpots() },
  async fetchSpots() {
    const { result } = await wx.cloud.callFunction({ name: 'getSpots' })
    const markers = (result.data || []).map(s => ({ id: s._id, latitude: s.latitude, longitude: s.longitude, title: s.name, width: 24, height: 24 }))
    this.setData({ markers })
  },
  markerTap(e) {
    const marker = this.data.markers.find(m => m.id === e.detail.markerId)
    this.setData({ selected: marker })
  },
  async checkin() {
    if (!this.data.selected) return
    await wx.cloud.callFunction({ name: 'checkin', data: { spotId: this.data.selected.id } })
    wx.showToast({ title: '打卡成功', icon: 'success' })
  }
})
