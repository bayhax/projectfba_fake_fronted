import {
  sysClient
} from '@/clients/hprose-client'
import * as TYPES from './mutation-types'
const state = {
}
const getters = {
}
const mutations = {
}
const actions = {
  [TYPES.blog]: (context, args) => sysClient.getData('/blog', args),
}
export default {
  state,
  mutations,
  getters,
  actions
}
