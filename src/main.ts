import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {OhVueIcon, addIcons} from 'oh-vue-icons';
import {PiQwilfish} from "oh-vue-icons/icons";
import VueSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import {createPinia} from 'pinia';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap"

addIcons(PiQwilfish);

const pinia = createPinia()
const app = createApp(App)
app.directive('font-size', {
    beforeMount: (el, binding) => {
        // el.style.color = 'blue'
        el.style.color = binding.value
    }
})
app.component('v-icon', OhVueIcon);
app.component('v-select', VueSelect);
app.use(pinia).use(router)
app.mount('#app')
