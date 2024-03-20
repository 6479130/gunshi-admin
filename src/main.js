import '@/styles/index.scss'
// import 'uno.css'
// import '@/style.css'

import { createApp } from 'vue'

import {setupRouter} from '@/router'
import { setupStore } from '@/store'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import * as Icons from '@ant-design/icons-vue';


const app = createApp(App)


for (const i in Icons) {
    app.component(i, Icons[i])
}

setupStore(app)
setupRouter(app)
app.use(Antd)

app.mount('#app',true)
