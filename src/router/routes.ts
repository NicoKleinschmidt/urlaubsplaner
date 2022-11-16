import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        meta: { title: 'Dashboard' },
      },
      {
        path: 'new',
        component: () => import('pages/IndexPage.vue'),
        meta: { title: 'Neuer Antrag' },
      },
      {
        path: 'calendar',
        component: () => import('pages/IndexPage.vue'),
        meta: { title: 'Kalendar' },
      },
      {
        path: 'profile',
        component: () => import('pages/IndexPage.vue'),
        meta: { title: 'Profil' },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
