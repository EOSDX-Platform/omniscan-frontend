import '@spectrum-web-components/theme/sp-theme.js'
import '@spectrum-web-components/theme/src/themes.js'
import '@spectrum-web-components/bundle/elements.js'
import '@/styles/reset.css'
import '@/styles/system.css'
import '@/styles/globalCustom.css'

import { createApp } from 'vue'
import App from '@/app.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')