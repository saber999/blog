import { createApp } from 'vue'
import App from './App.vue'
import './Mock'
import router from './router'
import store from './store'
import './assets/css/style.less'
import './assets/font/iconfont.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
