import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router/index.js'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/fonts/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import dayjs from 'dayjs'
import ObjectSupport from 'dayjs/plugin/objectSupport'
import echarts from'./utils/echarts'
import animated from 'animate.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'


const app = createApp(App)


const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia)

app.config.globalProperties.$dayjs = dayjs
app.config.globalProperties.$echarts = echarts
dayjs.extend(ObjectSupport)



app.use(router)
app.use(animated)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

export const eventsBus = 
  app.use(ElementPlus,{
    locale: zhCn})
app.mount('#app')