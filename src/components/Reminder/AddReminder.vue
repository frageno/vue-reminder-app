<template>
  <form @submit.prevent="saveReminder">
    <div class="form-control">
      <label for="name">Name</label>
      <input id="name" name="name" type="text" />
    </div>
    <div class="form-control">
      <label for="date">Date</label>
      <input id="date" name="date" type="date" />
    </div>
    <div class="form-control">
      <label for="time">Time</label>
      <input id="time" name="time" type="time" />
    </div>
    <div class="form-control">
      <label for="category">Category</label>
      <select name="category" id="category">
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
        <option value="Category 3">Category 3</option>
      </select>
    </div>
    <div class="form-control">
      <label for="">Tags</label>
      <input type="radio" id="high-prio" name="tags" value="Very High Prio" />
      <label for="high-prio">Very High Prio</label><br />
      <input type="radio" id="important" name="tags" value="Important" />
      <label for="important">Important</label><br />
      <input type="radio" id="low-prio" name="tags" value="Low Prio" />
      <label for="low-prio">Low Prio</label>
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea id="description" name="description" type="text" rows="3" />
    </div>
    <BaseButton> Save new reminder </BaseButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    // fetch data from server
    // fetchReminders() {
    //   // handle response
    //   axios
    //     .get("https://webexchangeserver.de/_temp/reminders.json", {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     })
    //     .then((res) => {
    //       this.reminders = res.data;
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },


    // save values from form
    saveReminder() {
      //   this.reminder = {
      //     name: this.reminder.name,
      //     date: this.reminder.date,
      //     time: this.reminder.time,
      //     category: this.reminder.category,
      //     tag: this.reminder.tag,
      //     description: this.reminder.description,
      //   };
      //   console.log(this.reminder);
    },
  },
};
</script>
