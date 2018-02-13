// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import '@progress/kendo-ui'
import { KendoButtonGroup, KendoButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'

Vue.config.productionTip = false
Vue.use(KendoButtonsInstaller)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App, KendoButtonGroup }
})
