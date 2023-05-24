<template>
  <AddReminder />
  <div v-for="reminder in reminders" :key="reminder._id">
    {{ reminder.name }}
  </div>
</template>
<script>
import data from '../../assets/data/reminders.json'; // fetch data from file
import AddReminder from './AddReminder.vue';
export default {
    data() {
        return {
            reminders: data,
        }
    },
    components: [AddReminder],
}
</script>