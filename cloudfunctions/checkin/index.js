const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()
exports.main = async (event) => {
  const { OPENID } = cloud.getWXContext()
  return db.collection('checkins').add({ data: { openid: OPENID, spotId: event.spotId, createdAt: Date.now() } })
}
