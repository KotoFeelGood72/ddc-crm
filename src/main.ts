import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

console.log('Creating Vue app'); // Log for debugging

const pinia = createPinia();
const app = createApp(App);

console.log('Mounting Vue app'); // Log for debugging

app.use(pinia);
app.mount('#app');

console.log('Vue app mounted'); // Log for debugging
