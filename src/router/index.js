import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const StickyNote = () => import('../views/StickyNote');
const HomePage = () => import('../views/HomePage');
const Forums = () => import('../views/Forums');
const Question = () => import('../components/Question');
const PrayFor = () => import('../views/PrayFor');
const Answer = () => import('../views/Answer');

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
    {
      path: '/question',
      name: 'Question',
      component: Question,
      meta: {},
    },
    {
      path: '/prayfor',
      name: 'PrayFor',
      component: PrayFor,
      meta: {},
    },
    {
      path: '/answer',
      name: 'Answer',
      component: Answer,
      meta: {},
    },
  ]
});

export default router;