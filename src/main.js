import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/Base/BaseButton.vue';
import BaseCard from './components/Base/BaseCard.vue';

const app = createApp(App);

// global components
app.component('BaseButton', BaseButton);
app.component('BaseCard', BaseCard);

app.mount('#app');
