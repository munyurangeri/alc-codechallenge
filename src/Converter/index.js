import UserInput from './UserInput/index.vue';
import ConvertOutput from './ConverterOutput/index.vue';


export default {
    name: 'Converter',

    components: {
        'user-input': UserInput,
        'converter-output': ConvertOutput
    },
    
    data() {
        return {}
    }
}