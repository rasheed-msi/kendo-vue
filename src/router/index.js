import Vue from 'vue'
import Router from 'vue-router'

// map components - start
import Grid from '../components/Grid'
import Form from '../components/Form'
import Custom from '../components/Custom'
import CaseNote from '../components/CaseNote'
import Message from '../components/Message'
// map components - stop

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/custom',
      name: 'Custom',
      component: Custom
    },
    {
      path: '/case-note',
      name: 'CaseNote',
      component: CaseNote
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
  ]
})
