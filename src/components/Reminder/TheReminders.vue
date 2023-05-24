<template>
  <div class="container">
    <AddReminder />
    <div class="flex col-4">
      <div v-for="reminder in reminders" :key="reminder._id">
        <BaseCard> 
          <template #header>
            {{ reminder.name }}
          </template>
          <template #body>
            {{ reminder.date }}
            {{ reminder.tags }}
            {{ reminder.description }}
          </template>
          <template #footer>
            Edit
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
}
</script>