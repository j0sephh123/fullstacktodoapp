import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'items',
      component: () => import('./Views/Main.vue'),
    },
    {
      path: '/items/:id',
      name: 'OneItem',
      component: () => import('./Views/OneItem.vue'),
    },
    {
      path: '/comments/:id/edit',
      name: 'EditOneComment',
      component: () => import('./Views/EditOneComment.vue'),
    },
  ],
});
