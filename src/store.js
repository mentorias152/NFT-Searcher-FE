import { createStore } from 'zmp-core/lite';

const store = createStore({
  state: {
    user: {
      displayName: 'Zalo',
      email: 'zte@zalo.me',
      avatar: 'ZA',
      online: true,
      story: true
    },
    image: {
      data: 'Huy',
    },
    results: [{
      id: '',
      data: '',
      name: '',
    }]
  },
  getters: {
    user({ state }) {
      return state.user
    },

    image( {state} ) {
      return state.image
    }
  },
  actions: {
    setUser({ state }, data) {
      state.user = { ...state.user, ...data }
    },

    setImage({ state }, data) {
      state.image = { ...state.image, ...data }
    },

    setResult({ state }, data) {
      state.result = { ...state.result, ...data}
    }
  },
})

export default store;
