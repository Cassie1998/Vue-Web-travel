import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '../pages/home.vue'
import discovery from '../pages/discovery.vue'
import d2 from '../pages/d2.vue'
import messages from '../pages/messages.vue'
import mine from '../pages/mine.vue'
import scenes from '../pages/scenes.vue'
import scenesbi from '../pages/scenesbi.vue'
import scenes1 from '../pages/scenes1.vue'
import scenes1bi from '../pages/scenes1bi.vue'
import meishi from '../pages/meishi.vue'
import search from '../pages/search.vue'
import Indexlist from '../pages/Indexlist.vue'

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //   path: '/',
        //   name: 'login',
        //   component: login
        // }
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/discovery',
            name: 'discovery',
            component: discovery
        },
        {
            path: '/d2',
            name: 'd2',
            component: d2
        },
        {
            path: '/messages',
            name: 'messages',
            component: messages
        },
        {
            path: '/mine',
            name: 'mine',
            component: mine
        },
        {
            path: '/scenes',
            name: 'scenes',
            component: scenes
        },
        {
            path: '/scenesbi',
            name: 'scenesbi',
            component: scenesbi
        },
        {
            path: '/scenes1',
            name: 'scenes1',
            component: scenes1
        },
        {
            path: '/scenes1bi',
            name: 'scenes1bi',
            component: scenes1bi
        },
        {
            path: '/meishi',
            name: 'meishi',
            component: meishi
        },
        {
            path: '/search',
            name: 'search',
            component: search
        },
        {
            path: '/Indexlist',
            name: 'Indexlist',
            component: Indexlist
        }
    ]
})
