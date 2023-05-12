import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/Base/BaseButton.vue';

const app = createApp(App);

// global components
app.component('BaseButton', BaseButton);

app.mount('#app');
