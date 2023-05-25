<template>
  <form @submit.prevent="saveReminder" class="reminder-form">
    <div class="form-control">
      <label for="name">Name</label>
      <input id="name" name="name" type="text" v-model="newReminder.name"/>
    </div>
    <div class="form-control">
      <label for="date">Date</label>
      <input id="date" name="date" type="date" v-model="newReminder.date"/>
    </div>
    <div class="form-control">
      <label for="time">Time</label>
      <input id="time" name="time" type="time" v-model="newReminder.time"/>
    </div>
    <div class="form-control">
      <label for="category">Category</label>
      <select name="category" id="category" v-model="newReminder.category">
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
        <option value="Category 3">Category 3</option>
      </select>
    </div>
    <div class="form-control">
      <label for="">Tags</label>
      <div class="form-control__checkboxes">
        <input type="radio" id="high-prio" name="tags" value="Very High Prio" v-model="newReminder.tag"/>
        <span class="radio-label">Very High Prio</span><br />
        <input type="radio" id="important" name="tags" value="Important" v-model="newReminder.tag"/>
        <span class="radio-label">Important</span><br />
        <input type="radio" id="low-prio" name="tags" value="Low Prio" v-model="newReminder.tag"/>
        <span class="radio-label">Low Prio</span>
      </div>
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea id="description" name="description" type="text" rows="3" v-model="newReminder.description"/>
    </div>
    <BaseButton> Save new reminder </BaseButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newReminder: {
        name: '',
        date: '',
        time: '',
        category: '',
        tag: '',
        description: '',
      },
    };
  },
  methods: {
    // save values from form
    saveReminder() {
        this.newReminder = {
          name: this.newReminder.name,
          date: this.newReminder.date,
          time: this.newReminder.time,
          category: this.newReminder.category,
          tag: this.newReminder.tag,
          description: this.newReminder.description,
        };
        // emit custom event and pass the values
        this.$emit('add-reminder', this.newReminder);
    },
  },
};
</script>
