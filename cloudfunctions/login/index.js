const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()
exports.main = async (event) => {
  const { OPENID } = cloud.getWXContext()
  const users = db.collection('users')
  const res = await users.where({ openid: OPENID }).get()
  if (res.data.length) return { user: res.data[0] }
  const user = { openid: OPENID, nickName: event.userInfo?.nickName || '微信用户', avatarUrl: event.userInfo?.avatarUrl || '', partyBranch: '' }
  await users.add({ data: user })
  return { user }
}
