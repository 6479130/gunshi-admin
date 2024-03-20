
const basicRoutes = [

  {
    name: 'dashboard',
    path: '/dashboard',
    redirect:'/dashboard',
    meta: {
      icon:'UserOutlined',
      title: '控制台',
      show:true,
      disabled:false
    },
    children:[
      {
        name: 'index',
        path: '/index',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          icon:'HomeOutlined',
          title: '首页',
          show:true,
          disabled:false
        }
      },
      {
        name: 'analysis',
        path: '/analysis',
        component: () => import('@/views/dashboard/analysis/index.vue'),
        meta: {
          icon:'BarChartOutlined',
          title: '数据分析',
          show:true,
          disabled:false
        }
      },
    ]
  },

]
export default basicRoutes;
