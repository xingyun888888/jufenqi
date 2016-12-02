import Vue from 'vue'
import App from './app'
import vueTap from 'v-tap'
Vue.use(vueTap)
import Map from 'components/j-map'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App,
    Map
  }
})
