window.localStorage.clear()
// For logout
import App from './app'
import vueTap from 'v-tap'
Vue.use(vueTap)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App
  }
})