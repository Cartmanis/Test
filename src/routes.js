import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import {store} from './store'

import Main from './components/Main';
import Login from './components/Login';
import News from './components/News';
import New from './components/New'
import Profile from './components/Profile';
import E404 from './components/E404'

const isAuth = (to, from, next) => {
    const auth = JSON.parse(localStorage.auth);
    if(auth) {
        next();
        return;
    }
    next('/login');
}
const routes = [
     {
      name: 'main',
      path: '/',
      component: Main
    } ,
    {
      name: 'news',
      path: '/news',
      component: News,
      beforeEnter(form ,to, next) {
        store.dispatch('news/loadNews');
        next();
      }
    },
    {
      path: '/news/:id',
      component: New
    },
    {
      name: 'profile',
      path: '/profile',
      beforeEnter: isAuth,
      component: Profile
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      path: '*',
      component: E404
    }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
