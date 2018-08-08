import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from './modules/menu';
import news from './modules/news';
import profile from './modules/profile';

//в этом объекте сливаются все модули из папки modules
export const store = new Vuex.Store({
  modules: {
    menu,
    news,
    profile
  },
  strict: process.env.NODE_ENV !== 'production'
});
