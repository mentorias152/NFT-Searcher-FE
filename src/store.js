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

    api: null,

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
    },

    api({ state }) {
      return state.api
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
    },

    setApi({ state }, data) {
      state.api = { ...state.api, ...data}
    }
  }
})

export default store;
