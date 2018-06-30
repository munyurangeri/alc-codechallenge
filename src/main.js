import Vue from 'vue';

import RootComponent  from './App/index.vue';
import router from './router';

const vm = new Vue({
    el: '#app',

    components: {
        root: RootComponent
    },
    router,
    render: h => h('root')
})