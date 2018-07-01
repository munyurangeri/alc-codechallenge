import Vue from 'vue';
// import { 
//     MdApp, 
//     MdContent, 
//     MdToolbar, 
//     MdTabs, 
//     MdButton, 
//     MdIcon, 
//     MdCard,
//     MdField,
//     MdInput,
//     MdSelect,
//     MdOption 
// } from 'vue-material/dist/components';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';


Vue.use(VueMaterial);
// Vue.use(MdApp);
// Vue.use(MdContent);
// Vue.use(MdToolbar);
// Vue.use(MdTabs);
// Vue.use(MdButton);
// Vue.use(MdIcon);
// Vue.use(MdCard);
// // Vue.use(MdField);
// Vue.use(MdInput);




export default {
    name: 'RootComponent',

    created() {
        this.registerServiceWorker();
    },
    
    data() {
        return {
            showSnackbar: false,
            position: 'left',
            duration: 4000,
            isInfinity: true,
            worker: null
        }
    },

    methods: {
        registerServiceWorker() {
            if (!navigator.serviceWorker) return;

            navigator.serviceWorker.register('/sw.js').then((reg) => {
                if (!navigator.serviceWorker.controller) return;

                
                
                if (reg.waiting){
                    //TODO: Notify the user that some update are ready so he can reflesh
                    console.log('new service worker waiting...')
                    this.worker = reg.waiting;
                    this.updateReady();
                    return;
                }

                if (reg.installing) {
                    //TODO: Track state changes and when it became 'installed' call notify user so he can reflesh
                    this.trackInstalling(reg);
                    return;
                }

                reg.addEventListener('updatefound', () => {
                    //TODO: notify the user so he can reflesh
                    this.worker = reg.waiting;
                    this.updateReady();

                });
            });

            // Ensure refresh is only called once.
            let refleshing;
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                if (refleshing) return;
                window.location.reload();
                refleshing = true;
            });
        },

        updateReady(){
            this.showSnackbar = true;            
        },

        trackInstalling(worker){
            worker.addEventListener('statechange', () => {
                if (worker.state == 'installed'){
                    this.updateReady();
                }
            })
        },

        reflesh(){
            if (!this.worker) return;
            this.worker.postMessage({action: 'skipWaiting'});
        }
    }
}