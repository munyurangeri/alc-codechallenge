import bus from '../../bus';
import Vue from 'vue';
export default {
    name: 'UserInput',
    data() {
        return {
            amount: '',
            currency_from: {},
            currency_to: {},
            currencies: {}
        }
    },

    created() {
        this.fetchAllCurrencies();
        
        console.log(this.currencies)
    },

    methods: {
        onSubmit(event){
            if (this.amount && this.amount !==''){ // && (this.currency_from && this.currency_from !=='') && ((this.currency_to && this.currency_to !==''))
                let money = {
                    amount: this.amount,
                    currency_from: this.currency_from,
                    currency_to: this.currency_to
                };
                console.log (money);
                bus.$emit('to-convert', money);
            }
        },

        fetchAllCurrencies() {
            console.log('fetching...')
            const url = 'https://free.currencyconverterapi.com/api/v5/countries';

            fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        Vue.set(this.currencies, 'data', data.results);                    
                    });
        }
    }
}