import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true, // accepting props as parameters when we redirect them into this route
      // creating a route guard to deny of going to a "chat" component if something isnt done
      beforeEnter: (to, from, next) => {
        if(to.params.name) { // if params.name exists in chat component
          next() // take user to another component (chat)
        }
        else {
          next({ name: 'Welcome' }) // else go to "welcome" component screen
        }
      }
    }
  ]
})
