import { FOSSILS, RES, RESERVOIR, LOAD } from '~/constants'

const FOSSILS_VALUES = Object.values(FOSSILS)

console.log(FOSSILS)
console.log(RES)
console.log(RESERVOIR)
console.log(LOAD)

export const state = () => {
  return {
    data: undefined,
    graphConfig: undefined,
  }
}

export const getters = {
  getFossils: (state) => {
    return state.data.filter((item) => {
      return FOSSILS_VALUES.includes(item.name.en)
    })
  },
}

export const mutations = {
  setData(state, response) {
    const [graphConfig, ...data] = response
    state.graphConfig = graphConfig
    state.data = data
  },
}

export const actions = {
  async fetchData({ commit }) {
    const response = await this.$axios.get(
      '/charts/power/data/de/week_2022_42.json'
    )
    commit('setData', response)
  },
  async nuxtServerInit({ commit, dispatch }, { req }) {
    const response = await this.$axios.get(
      '/charts/power/data/de/week_2022_42.json'
    )

    commit('setData', response.data)
  },
}
