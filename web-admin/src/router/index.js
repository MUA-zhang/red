import { createRouter, createWebHashHistory } from 'vue-router'
import SpotsView from '../views/SpotsView.vue'
import UsersView from '../views/UsersView.vue'
import RankView from '../views/RankView.vue'
export default createRouter({ history: createWebHashHistory(), routes:[{path:'/',component:SpotsView},{path:'/users',component:UsersView},{path:'/rank',component:RankView}] })
