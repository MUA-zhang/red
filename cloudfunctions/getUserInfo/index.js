const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()
exports.main = async () => {
  const { OPENID } = cloud.getWXContext()
  const userRes = await db.collection('users').where({ openid: OPENID }).get()
  const checkins = await db.collection('checkins').where({ openid: OPENID }).get()
  return { ...(userRes.data[0] || {}), checkinCount: checkins.data.length }
}
