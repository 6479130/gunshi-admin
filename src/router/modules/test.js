const basicRoutes = [

  {
    name: 'test1',
    path: '/test1',
    component: () => import('@/views/test/test1.vue'),
    meta: {
      icon:'UserOutlined',
      title: '测试1',
      show:true,
      disabled:false
    },

  },
  {
    name: 'test2',
    path: '/test2',
    component: () => import('@/views/test/test2.vue'),
    meta: {
      icon:'UserOutlined',
      title: '测试2',
      show:true,
      disabled:false
    },

  },
  {
    name: 'test3',
    path: '/test3',
    component: () => import('@/views/test/test3.vue'),
    meta: {
      icon:'UserOutlined',
      title: '测试3',
      show:true,
      disabled:false
    },

  },
  {
    name: 'test4',
    path: '/test4',
    component: () => import('@/views/test/test4.vue'),
    meta: {
      icon:'UserOutlined',
      title: '测试4',
      show:true,
      disabled:false
    },

  }

]
export default basicRoutes;
