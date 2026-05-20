const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()
exports.main = async () => {
  const users = await db.collection('users').get()
  const checkins = await db.collection('checkins').get()
  const byOpenId = {}
  checkins.data.forEach(c => { byOpenId[c.openid] = (byOpenId[c.openid] || 0) + 1 })
  const rank = {}
  users.data.forEach(u => {
    const key = u.partyBranch || '未填写支部'
    rank[key] = (rank[key] || 0) + (byOpenId[u.openid] || 0)
  })
  return Object.entries(rank).map(([partyBranch, count]) => ({ partyBranch, count })).sort((a,b)=>b.count-a.count)
}
