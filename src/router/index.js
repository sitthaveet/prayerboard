import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const StickyNote = () => import('../views/StickyNote');
const HomePage = () => import('../views/HomePage');
const Forums = () => import('../views/Forums');

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {},
    },
    {
      path: '/note',
      name: 'StickyNote',
      component: StickyNote,
      meta: {},
    },
    {
      path: '/forums',
      name: 'Forums',
      component: Forums,
      meta: {},
    },
  ]
});

export default router;