import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'

import BuddyRegistration from '../views/buddies/BuddyRegistration.vue'
import BuddyDetails from '../views/buddies/BuddyDetails.vue'

import UserBuddy from '../views/user/UserBuddy.vue'
import UserEdit from '../views/user/UserEdit.vue'

import Chatroom from '../views/chat/Chatroom.vue'

//route guard
import { projectAuth } from '../firebase/config'

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'Login' })
  } else {
    next()
  }
}

const requireUnAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (user) {
    next({ name: 'Home' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: requireUnAuth,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    beforeEnter: requireUnAuth,
  },
  {
    path: '/register',
    name: 'BuddyRegistration',
    component: BuddyRegistration,
    beforeEnter: requireAuth,
  },
  {
    path: '/buddies/:id',
    name: 'BuddyDetails',
    component: BuddyDetails,
    props: true,
  },
  {
    path: '/account',
    name: 'UserBuddy',
    component: UserBuddy,
    beforeEnter: requireAuth,
  },
  {
    path: '/account/edit',
    name: 'UserEdit',
    component: UserEdit,
    props: true,
    beforeEnter: requireAuth,
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
