import Vue from 'vue';
import Router from 'vue-router';
import Converter from './Converter/index.vue';
import Offers from './Offers/index.vue';
import Responses from './Responses/index.vue';

Vue.use(Router);

export default new Router({
    routes: [
        
        {
            path: '/',
            name: 'home',
            component: Converter
        },
        {
            path: '/converter',
            name: 'converter',
            component: Converter
        },
        {
            path: '/offers',
            name: 'offers',
            component: Offers
        },
        {
            path: '/responses',
            name: 'responses',
            component: Responses
        }

    ]
})