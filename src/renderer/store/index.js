import Vue from 'vue'
import Vuex from 'vuex'

import Music from "./modules/Music"


Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    "Music":Music
  }
})
