import { ErrorPage, Layout } from '@/router/constant';

// 404 on a page
export const ErrorPageRoute = {
  path: '/:path(.*)*',
  component: Layout,
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true,
  },
  children: [
    {
      path: '/:path(.*)*',
      component: ErrorPage,
      meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true,
      },
    },
  ],
};

