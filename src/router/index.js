import Vue from 'vue'
import Router from 'vue-router'

// map components - start
import Grid from '../components/Grid'
import Form from '../components/Form'
import Custom from '../components/Custom'
import CaseNote from '../components/CaseNote'
import addCaseNote from '../components/addCaseNote'
import ClientList from '../components/ClientList'
import Message from '../components/Message'
import AddMessage from '../components/AddMessage'
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
      path: '/case-notes',
      name: 'CaseNote',
      component: CaseNote
    },
    {
      path: '/client-list',
      name: 'ClientList',
      component: ClientList
    },
    {
      path: '/add-casenote',
      name: 'addCaseNote',
      component: addCaseNote
    },
    {
      path: '/messages',
      name: 'Message',
      component: Message
    },
    {
      path: '/add-message',
      name: 'AddMessage',
      component: AddMessage
    },
  ]
})
