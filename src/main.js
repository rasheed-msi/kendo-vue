import Vue from 'vue'

//common components - start
import jQuery from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
//common components - stop

//appliction component - start
import router from './router'
import Map from './Map'
// appliction component - stop

Vue.config.productionTip = true

global.jQuery = jQuery
global.router = router
let Bootstrap = require('bootstrap')

Vue.use(router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Map/>',
  components: {Map},
  router: router
})
