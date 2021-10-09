import { createRouter, createWebHistory } from 'vue-router'
import store from './store.js'

const Home = () => import('./pages/user/Home')
const Explore = () => import('./pages/user/Explore')
const Notifications = () => import('./pages/user/Notifications')
const Connect = () => import('./pages/user/Connect')
const Messages = () => import('./pages/user/Messages')
const Bookmarks = () => import('./pages/user/Bookmarks')
const Lists = () => import('./pages/user/Lists')
const Profile = () => import('./pages/user/Profile')
const Dashboard = () => import('./pages/admin/Dashboard')
const Login = () => import('./pages/auth/Login')
const Register = () => import('./pages/auth/Register')

const routes = [
  {
    path:'/login',
    component: Login,
  },
  {
    path:'/register',
    component: Register,
  },
  {
    path:'/',
    alias: '/home',
    component: Home,
    meta:{
      requiresLogin: true,
    }
  },

  {
    path:'/explore',
    component: Explore,
    meta:{
      requiresLogin: true,
    }
  },
  {
    path:'/notifications',
    component: Notifications,
    meta:{
      requiresLogin: true,
    }
  },

  {
    path:'/connect',
    component: Connect,
    meta:{
      requiresLogin: true,
    }
  },

  {
    path:'/messages',
    component: Messages,
    meta:{
      requiresLogin: true,
    }
  },
  {
    path:'/bookmarks',
    component: Bookmarks,
    meta:{
      requiresLogin: true,
    }
  },
  {
    path:'/lists',
    component: Lists,
    meta:{
      requiresLogin: true,
    }
  },

  {
    path:'/:username',
    name:'profile',
    component: Profile,
    meta:{
      requiresLogin: true,
    }
  },
  
  {
    path:'/login',
    component: Login,
  },

  {
    path:'/register',
    component: Register,
  },

  {
    path:'/dashboard',
    alias: '/admin/dashboard',
    component: Dashboard,
    meta:{
      requiresAdmin: true,
    }
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
      return { top: 0 }
    },

});

router.beforeEach( (to, from, next) => {
  if(to.meta.requiresLogin && !store.state.authToken) {
    next('/login')
  }
  else next()
});

export default router