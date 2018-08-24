import axios from 'axios';

export default {
  namespaced: true,
  state: {
    items: [],
    currentPage: 0
  },
  getters: {
    items(state) {
      return state.items;
    },
    getOneNews: (state) => (id) => {
      return state.items[id];
    },
    getCurrentPage(state) {
      return state.currentPage;
    }
  },
  mutations: {
    loadNews(state, data) {
      state.items = data;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    }
  },
  actions: {
    loadNews(store) {
      //https://jsonplaceholder.typicode.com/posts/
      //https://api.coindesk.com/v2/bpi/currentprice.json
      //https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f2c1ed4d234342068af93660af966391
      axios.get('https://newsapi.org/v2/top-headlines?country=ru&category=sport&apiKey=f2c1ed4d234342068af93660af966391') //асинхронный get запрос на url
        .then(res => {
          store.commit('loadNews', res.data.articles);
        })
        .catch(err => {
          console.log('-----error-----');
          console.log(err);
        })
    },
    setCurrentPage(store, page) {
      store.commit('setCurrentPage', page);
    }
  }
};
