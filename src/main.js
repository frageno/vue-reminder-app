import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/Base/BaseButton.vue';
import BaseCard from './components/Base/BaseCard.vue';
import BaseModal from './components/Base/BaseModal.vue';

const app = createApp(App);

// global components
app.component('BaseButton', BaseButton);
app.component('BaseCard', BaseCard);
app.component('BaseModal', BaseModal);

app.mount('#app');
