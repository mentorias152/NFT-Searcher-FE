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

    results: null,
    image: null,
    linkBack: null,

  },
  getters: {
    user({ state }) {
      return state.user
    },

    image( {state} ) {
      return state.image
    },

    results({ state }) {
      return state.results
    },

    linkBack({ state }) {
      return state.linkBack
    }
  },
  actions: {
    setUser({ state }, data) {
      state.user = { ...state.user, ...data }
    },

    setImage({ state }, data) {
      state.image = { ...state.image, ...data }
    },

    setResults({ state }, data) {
      state.results = { ...state.results, ...data}
    },

    setLinkBack({ state }, data) {
      state.linkBack = { ...state.linkBack, ...data}
    }
  },
})

export default store;
