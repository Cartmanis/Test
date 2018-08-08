export default {
  namespaced: true,
  state: {
      items: [
          {
              url: '/',
              text: 'Главная'
          },
          {
              url: '/news',
              text: 'Новости'
          },
          {
              url: '/profile',
              text: 'Профиль'
          }
      ]
  },
  getters: {
      items(state) {
          return state.items;
      }
  }
};
