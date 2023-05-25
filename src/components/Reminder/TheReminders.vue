<template>
  <div class="container">
    <AddReminder @add-reminder="addReminder"/>
  </div>
  <div class="container">
    <div class="flex col-3">
      <div class="form-control">
        <select name="sorting" id="sorting" v-model="sortBy">
          <option value="" disabled selected>Select sorting</option>
          <option value="ASC">Sort by name (A-Z)</option>
          <option value="DESC">Sort by name (Z-A)</option>
          <option value="date">Sort by date</option>
        </select>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="flex col-4">
      <div v-for="reminder in reminders" :key="reminder._id">
        <BaseCard> 
          <template #header>
            <span class="card__close pb-3" @click="removeReminder(reminder._id)"></span>
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
            sortBy: '',
        }
    },
    components: {
      AddReminder,
    },
    computed: {

      // sorting list
      sortReminders() {
        const remindersCopy = [...this.reminders];

        if(this.sortBy === 'ASC'){
          remindersCopy.sort((a,b) => a.name.localeCompare(b.name));
        } else if(this.sortBy === 'DESC') {
          remindersCopy.sort((a,b) => b.name.localeCompare(a.name));
        } else if(this.sortBy === 'date') {
          remindersCopy.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
        return remindersCopy;
      }
    },
    watch: {
      // watching select options
      sortBy(newValue){
        this.sortReminders;
        // if new select opiton is choosen then override the existing array with new values
        if(newValue !== '') {
          this.reminders = this.sortReminders;
        }
      }
    },
    mounted() {
      this.saveRemindersToLocalStorage();
      const storedReminders = localStorage.getItem('reminders');
      this.reminders = JSON.parse(storedReminders);
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
        this.saveRemindersToLocalStorage();
      },

      // remove reminder from array
      removeReminder(reminderID) {
        this.reminders = this.reminders.filter(item => item._id !== reminderID);
      },

      saveRemindersToLocalStorage() {
        localStorage.setItem('reminders', JSON.stringify(this.reminders));
      },

      removeReminderFromLocalStorage(){

      },
    }
}
</script>