export const state = () => ({
  pageData: {
    title: {
      rendered: ''
    },
    content: {
      rendered: ''
    },
    excerpt: {
      rendered: ''
    }
  },
})

export const mutations = {
  requestPageData (state, payload) {
    state.pageData = payload
  }
}

export const actions = {
  async requestPageData({ state, commit }, payload) {
    if ( payload === state.slug ) return;
    try {
      let res = await this.$axios.get(`/pages?slug=${payload}`)
      commit('requestPageData', res.data[0]);
    } catch(err) {
        console.log(err)
    }
  }
}