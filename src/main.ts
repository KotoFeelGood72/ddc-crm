import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
console.log('Vue app is being created');
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')