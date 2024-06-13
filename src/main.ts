import { createApp } from 'vue';
import { createPinia } from 'pinia';
import {router} from './router'
import SvgIcon from './components/ui/icons/SvgIcon.vue';
import App from './App.vue';


const pinia = createPinia();
const app = createApp(App);
app.component('SvgIcon', SvgIcon);


app.use(pinia);
app.use(router);
app.mount('#app');


