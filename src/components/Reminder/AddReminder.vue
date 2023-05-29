<template>
  <form @submit.prevent="saveReminder" class="reminder-form">
    <div class="form-control" :class="{ errorMessage: v$.newReminder.name.$error }">
      <label for="name">Name</label>
      <div class="form-control__input-container">
        <input id="name" name="name" type="text" placeholder="Enter name" v-model="state.newReminder.name"/>
        <span class="error" v-if="v$.newReminder.name.$error">{{ v$.newReminder.name.$errors[0].$message }}</span>
      </div>
    </div>
    <div class="form-control" :class="{ errorMessage: v$.newReminder.date.$error }">
      <label for="date">Date</label>
      <div class="form-control__input-container">
        <input id="date" name="date" type="date" v-model="state.newReminder.date"/>
        <span class="error" v-if="v$.newReminder.date.$error">{{ v$.newReminder.date.$errors[0].$message }}</span>
      </div>
    </div>
    <div class="form-control" :class="{ errorMessage: v$.newReminder.time.$error }">
      <label for="time">Time</label>
      <div class="form-control__input-container">
        <input id="time" name="time" type="time" v-model="state.newReminder.time"/>
        <span class="error" v-if="v$.newReminder.time.$error">{{ v$.newReminder.time.$errors[0].$message }}</span>
      </div>
    </div>
    <div class="form-control" :class="{ errorMessage: v$.newReminder.category.$error }">
      <label for="category">Category</label>
      <div class="form-control__input-container">
        <select name="category" id="category" v-model="state.newReminder.category">
          <option value="" disabled selected>Select category</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 3">Category 3</option>
        </select>
        <span class="error" v-if="v$.newReminder.category.$error">{{ v$.newReminder.category.$errors[0].$message }}</span>
      </div>
    </div>
    <div class="form-control" :class="{ errorMessage: v$.newReminder.name.$error }">
      <label for="">Tags</label>
      <div class="form-control__input-container">
        <div class="form-control__checkboxes">
          <input type="radio" id="high-prio" name="tags" value="Very High Prio" v-model="state.newReminder.tag"/>
          <span class="radio-label">Very High Prio</span><br />
          <input type="radio" id="important" name="tags" value="Important" v-model="state.newReminder.tag"/>
          <span class="radio-label">Important</span><br />
          <input type="radio" id="low-prio" name="tags" value="Low Prio" v-model="state.newReminder.tag"/>
          <span class="radio-label">Low Prio</span>
        </div>
        <span class="error" v-if="v$.newReminder.tag.$error">{{ v$.newReminder.tag.$errors[0].$message }}</span>
      </div>
    </div>
    <div class="form-control" :class="{ errorMessage: v$.newReminder.description.$error }">
      <label for="description">Description</label>
      <div class="form-control__input-container">
        <textarea id="description" name="description" type="text" rows="3" placeholder="Enter description" v-model="state.newReminder.description"/>
        <span class="error" v-if="v$.newReminder.tag.$error">{{ v$.newReminder.tag.$errors[0].$message }}</span>
      </div>
    </div>
    <BaseButton> Save new reminder </BaseButton>
  </form>
</template>

<script>
import useValidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import { reactive, computed } from 'vue'
export default {
  setup() {
    // begining values
    const state = reactive({
      newReminder: {
        name: '',
        date: '',
        time: '',
        category: '',
        tag: '',
        description: '',
      },
    })
    // set valitated rules
    const rules = computed(() => {
      return {
        newReminder: {
          name: { required },
          date: { required },
          time: { required },
          category: { required },
          tag: { required },
          description: { required, minLength: minLength(30) },
        }
      }
    })

    const v$ = useValidate(rules,state)

    return {state, v$}
  },
  methods: {
    // save values from form
    saveReminder() {
      // check all inputs
      this.v$.$validate()
      if(!this.v$.$error){
        this.newReminder = {
          id: Math.random(),
          name: this.newReminder.name,
          date: this.newReminder.date,
          time: this.newReminder.time,
          category: this.newReminder.category,
          tag: this.newReminder.tag,
          description: this.newReminder.description,
        };
        // emit custom event and pass the values
        this.$emit('add-reminder', this.newReminder);
      }
    },
  },
  
};
</script>
