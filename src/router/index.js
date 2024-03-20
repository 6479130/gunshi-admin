import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'
import { ErrorPageRoute } from './base';


const modules = import.meta.glob('./modules/**/*.js', { eager: true });

// 整合modules下的路由，形成列表
const routeModuleList = Object.keys(modules).reduce((list, key) => {
  const mod = modules[key].default ?? {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  return [...list, ...modList];
}, []);

function sortRoute(a, b) {
  return (a.meta?.sort || 0) - (b.meta?.sort || 0);
}

routeModuleList.sort(sortRoute);

export const LoginRouter =   {
  name: 'login',
  path: '/login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: '登录页',
  },
}

 const LayoutRouter = [
  {
    name: 'layout',
    path: '/',
    redirect:'/index',
    component: () => import('@/layout/index.vue'),
    children:[
      ...routeModuleList
    ]

  }
 ]

const routes = [
  ...LayoutRouter,
  LoginRouter,
  ErrorPageRoute,
  // ...routeModuleList

]


export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app) {
  app.use(router)
}

export default router;
