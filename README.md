# 京彩红印小程序（完整项目模板）

本仓库现已包含**可直接打开开发的完整目录结构**：
- 微信小程序前端（登录、地图打卡、个人中心）
- 微信云开发云函数（login/getSpots/checkin/getUserInfo/updateUserInfo/getPartyRank）
- Web 管理端（Vue3 + Element Plus）

云环境 ID：`cloudbase-7gmo9bl87305d82d`

## 一、快速操作流程（从 0 到可跑）

1. 在微信开发者工具导入 `miniprogram` 目录，填入你的小程序 AppID。  
2. 开通云开发，环境选择：`cloudbase-7gmo9bl87305d82d`。  
3. 在云开发控制台创建集合：`users`、`spots`、`checkins`。  
4. 在微信开发者工具中分别右键部署以下云函数（云端安装依赖）：  
   `login`、`getSpots`、`checkin`、`getUserInfo`、`updateUserInfo`、`getPartyRank`。  
5. 给 `spots` 集合录入测试景点数据（含 `name/latitude/longitude`）。  
6. 编译小程序，先登录，再进入地图页点击标记打卡。  
7. 打开个人中心页查看累计打卡数。  
8. （可选）启动 Web 管理端：
   ```bash
   cd web-admin
   npm install
   npm run serve
   ```

## 二、项目结构

```text
.
├── miniprogram/
│   ├── app.js
│   ├── app.json
│   ├── app.wxss
│   ├── sitemap.json
│   └── pages/
│       ├── splash/
│       ├── login/
│       ├── map/
│       └── profile/
├── cloudfunctions/
│   ├── login/
│   ├── getSpots/
│   ├── checkin/
│   ├── getUserInfo/
│   ├── updateUserInfo/
│   └── getPartyRank/
└── web-admin/
    ├── package.json
    └── src/
```

## 三、已实现功能

### 小程序端
- 微信授权登录
- 地图标记加载
- 点击标记后执行打卡
- 个人中心展示累计打卡数

### 云函数端
- 用户注册/查询
- 景点查询
- 打卡写入
- 用户资料更新
- 支部打卡排行统计

### 管理端
- 已提供 Vue3 项目骨架及 3 个页面占位：景点管理、用户管理、支部统计

## 四、开发规范（简版）

- 分支：`main` 保持稳定，功能走 `feature/*`。
- 提交：中文简洁说明，例如“完成地图打卡流程”。
- 云函数：小驼峰命名。
- 集合：复数小写命名。
- UI 主色：`#c03c3c`，辅色：`#f5f0eb`。

## 五、后续建议

- 增加地图周边定位范围判断（只允许到点附近打卡）。
- 增加同一景点重复打卡限制。
- 管理端接入云开发 Web SDK 并实现真实 CRUD。
- 增加海报分享、知识问答、活动发布模块。
