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

    loading: {
      data: 'true',
    },

    detail: null,
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
    loading({ state }){
      return state.loading
    },

    detail({ state }) {
      return state.detail
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
    setLoading({ state }, data) {
      state.loading = { ...state.loading, data}
    },

    setDetail({ state }, data) {
      state.detail = { ...state.detail, ...data}
    },

    setLinkBack({ state }, data) {
      state.linkBack = { ...state.linkBack, ...data}
    }
  }
})

export default store;
