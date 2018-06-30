import Vue from 'vue';
import { MdApp, MdContent, MdToolbar, MdTabs, MdButton } from 'vue-material/dist/components';
// import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css'


// Vue.use(VueMaterial);
Vue.use(MdApp);
Vue.use(MdContent);
Vue.use(MdToolbar);
Vue.use(MdTabs);
Vue.use(MdButton);


if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
        console.log('Successfully registered service worker', reg);
    }).catch(function(err) {
        console.warn('Error whilst registering service worker', err);
    });
}

export default {
    name: 'Home',
    data() {
        return {}
    }
}