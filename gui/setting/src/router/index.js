import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'display',
      component: () => import('@/views/DisplayView.vue')
    },
    {
      path: '/shortcut',
      name: 'shortcut',
      component: () => import('@/views/ShortcutView.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('@/views/FeedbackView.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/ListView.vue')
    },

    {
      path: '/set',
      name: 'set',
      component: () => import('@/views/SetView.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('@/views/HelpView.vue')
    },
  ]
})

export default router
