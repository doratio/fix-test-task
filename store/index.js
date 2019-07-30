import {NewsApi} from '../assets/api/NewsApi'

export const state = () => ({
  articles: []
})

export const getters = {
  list: state => state.articles,
  article: state => id => {
    return state.articles.find(function (el) {
      return el.id === (+id)
    })
  }
}

export const mutations = {
  init(state, articles) {
    state.articles = articles
  },
  add(state, articles) {
    state.articles = state.articles.concat(articles)
  }
}

export const actions = {
  get({ commit }, mutation, count = 6) {
    NewsApi.getNews(count).then(( { news } ) => {
      commit(mutation, news)
    })
  }
}
