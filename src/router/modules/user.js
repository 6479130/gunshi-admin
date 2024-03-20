const basicRoutes = [

  {
    name: 'user',
    path: '/user',
    component: () => import('@/views/user/index.vue'),
    meta: {
      icon:'UserOutlined',
      title: '用户测试',
      show:true,
      disabled:false
    },

  }

]
export default basicRoutes;
