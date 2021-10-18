//require('./bootstrap')
import { createApp } from "vue"
import router from './router'
import App from "./components/App"
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all'
const app = createApp(App)
app.use(router).use(bootstrap).mount('#app')
