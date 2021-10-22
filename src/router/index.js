import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const StickyNote = () => import('../views/StickyNote');
const HomePage = () => import('../views/HomePage');

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
  ]
});

export default router;