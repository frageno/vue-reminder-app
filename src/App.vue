<template>
    <TheHeader />
    <div class="wrapper">
      <TheReminders />
    </div>
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

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: 'DM Sans', sans-serif;
  font-size:1rem;
}

body {
  margin: 0;
  padding: 0;
}

h1,h2,h3,h4,h5,h6,a, button, li {
  font-family: inherit;
}
.wrapper{
  padding: 0 15px;
}
#app {
  margin:0 auto;
}

.wrapper {
  max-width: 1170px;
  margin: 0 auto;
  padding: 15px;
}

</style>
