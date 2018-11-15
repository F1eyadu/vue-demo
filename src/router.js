import Vue from 'vue'
import router from 'vue-router'
import Index from './views/index'
import Other from './views/other'
import Others from './views/others'
import Details from './views/details'

Vue.use(router)

export default new router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            children:[
                {
                    path: 'other',
                    component: Other
                },
                {
                    path: 'others',
                    component: Others
                }
            ]
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            children:[
                {
                    path: 'other',
                    component: Other
                },
                {
                    path: 'others',
                    component: Others
                }
            ]
        },
        {
            path: '/details/:name/data/:data',
            name: 'details',
            component: Details
        }
    ]
})