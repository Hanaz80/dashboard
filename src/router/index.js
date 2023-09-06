import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActivityUser from "../components/activity-user.vue"
import EditProfile from "../components/edit-profile.vue"
import schedule from "../components/app-Schedule.vue"
import setting from "../components/app-setting.vue"
import loginPage from "../components/login-page.vue"
 import AppLayout from "../components/app-layout"
 import LayoutLogin  from "../components/layout-login.vue"
const routes = [
  {
    path: '/',
    name: 'login',
    component: loginPage,
     meta: { layout: LayoutLogin }


  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: HomeView,
     meta: { layout: AppLayout}

  },
  {
    path :'/activity',
    name : 'activity',
    component :ActivityUser,
    meta: { layout: AppLayout}

  },
  {
    path :'/edit',
    name : 'edit',
    component :EditProfile,
    meta: { layout: AppLayout}

  },
  {
    path :'/schedule',
    name : 'schedule',
    component :schedule,
    meta: { layout: AppLayout}

  },
  {
    path :'/setting',
    name : 'setting',
    component :setting,
    meta: { layout: AppLayout}

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
