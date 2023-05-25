<template>
  <div class="container">
    <AddReminder @add-reminder="addReminder"/>
  </div>
  <div class="container">
    <div class="flex col-4">
      <div v-for="reminder in reminders" :key="reminder._id">
        <BaseCard> 
          <template #header>
            <h3 class="pb-3">{{ reminder.name }}</h3>
          </template>
          <template #body>
            <span>Date: {{ formatDate(reminder.date) }}</span>
            <span class="pt-3">Time: {{ formatTime(reminder.date) }}</span>
            <span class="py-3">{{ reminder.tags }}</span>
            <p class="truncate-text">{{ reminder.description }}</p>
          </template>
          <template #footer>
            <a>Edit</a>
          </template>
        </BaseCard>
      </div>
    </div>
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
    components: {
      AddReminder,
    },
    methods: {
      // get the only date from date
      formatDate(date) {
        const dateObj = new Date(date);
        return dateObj.toLocaleDateString();
      },

      // get the only time from date
      formatTime(date) {
        const timeObj = new Date(date);
        return timeObj.toLocaleTimeString();
      },

      // add new reminder to array
      addReminder(reminder){
        this.reminders.unshift(reminder);
      }
    }
}
</script>