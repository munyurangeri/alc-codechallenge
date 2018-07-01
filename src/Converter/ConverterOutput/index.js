import bus from '../../bus';
import Vue from 'vue';
export default {
    name: 'ConverterOutput',
    data() {
        return {
            output: {
                done: false
            }
        }
    },
    
    created() {
        bus.$on('to-convert', this.convert)
    },

    destroyed() {
        bus.$off('to-convert', this.convert)
    },

    methods: {
        convert(money){
            console.log(money);
            let query = `${money.currency_from}_${money.currency_to}`;
            console.log('fetching...');
            const url = `https://free.currencyconverterapi.com/api/v5/convert?q=${query}&compact=ultra`;
            
            console.log(url);
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    let r = (money.amount * data[query])
                    Vue.set(this.output, 'currency_from', money.currency_from);
                    Vue.set(this.output, 'amount', money.amount);
                    Vue.set(this.output, 'currency_to', money.currency_to);
                    Vue.set(this.output, 'result', r);
                    this.output.done = true;
                    console.log(this.output);                    
                });
        }
    }
}