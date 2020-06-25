import Vue from 'vue'
import Vuex from 'vuex'
import doctors from '../store/modules/doctors'
import reviews from '../store/modules/reviews'
import blog from '../store/modules/blog'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    doctors, reviews,blog
  }
})
