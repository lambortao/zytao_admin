const router = [
  {
    path: '/',
    redirect: '/home',
    name: 'Home',
    component: () => import('@/views/home')
  },
  {
    path: '/home',
    name: 'one',
    component: () => import('@/views/home'),
    children: [
      {
        path: 'friend',
        name: 'friend',
        component: () => import('@/views/friend/list')
      },
      {
        path: 'friend/edit',
        name: 'friendEdit',
        component: () => import('@/views/friend/edit')
      },
      {
        path: 'article',
        name: 'article',
        component: () => import('@/views/article/list')
      },
      {
        path: 'article/edit',
        name: 'articleEdit',
        component: () => import('@/views/article/edit')
      },
      {
        path: 'project',
        name: 'project',
        component: () => import('@/views/project/list')
      },
      {
        path: 'project/edit',
        name: 'projectEdit',
        component: () => import('@/views/project/edit')
      },
      {
        path: 'think',
        name: 'think',
        component: () => import('@/views/think/list')
      },
      {
        path: 'think/edit',
        name: 'thinkEdit',
        component: () => import('@/views/think/edit')
      },
      {
        path: 'welcome',
        name: '欢迎页',
        component: () => import('@/views/single/welcome')
      },
      {
        path: 'user',
        name: '个人中心',
        component: () => import('@/views/single/user')
      }
    ]
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login')
  }
]

export default router;