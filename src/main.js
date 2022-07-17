import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import plausible from './plugins/plausible';

createApp(App)
  .use(router)
  .use(plausible, {
    domain: 'gradientos.app',
    hashMode: true,
    trackLocalhost: false,
  })
  .mount('#app');
