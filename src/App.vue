<template>
    <TheHeader />
    <TheReminders />
</template>

<script>
// import components
import TheHeader from './components/Layout/TheHeader.vue'
import TheReminders from './components/Reminder/TheReminders.vue'

export default {
  name: 'App',

  // components
  components: {
    TheHeader,
    TheReminders,
  }
}
</script>
<style lang="scss">
@import './assets/styles/main.scss';
</style>
