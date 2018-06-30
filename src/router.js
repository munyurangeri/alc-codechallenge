import Vue from 'vue';
import Router from 'vue-router';

import Root from './App/index.vue'
import Home from './Home/index.vue';
import Wallet from './Wallet/index.vue';
import Buy from './Buy/index.vue'
import Offers from './Offers/index.vue';
import Responses from './Responses/index.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'buy',
                    name: 'buy',
                    component: Buy
                },
                {
                    path: 'offers',
                    name: 'offers',
                    component: Offers
                },
                {
                    path: 'responses',
                    name: 'responses',
                    component: Responses
                }
            ]
        },
        {
            path: '/wallet',
            name: 'wallet',
            component: Wallet
        },
        {
            path: '*', redirect: '/home/buy'
        }
    ]
})


