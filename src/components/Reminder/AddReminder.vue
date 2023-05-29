<template>
  <!-- MODAL -->
  <BaseModal :class="{ hide: !isActive }">
    <template #header>
      <h3 class="pb-5">Add New Category</h3>
    </template>
    <template #body>
      <input
        type="text"
        name="new-category"
        id="new-category"
        v-model="category"
        placeholder="Add new category"
      />
      <BaseButton class="mt-6 mb-0" @click="addNewCategory"
        >Add Category</BaseButton
      >
      <span class="modal__close" @click="openModal"></span>
    </template>
  </BaseModal>
  <!-- end of modal -->
  <!-- form -->
  <form @submit.prevent="saveReminder" class="reminder-form">
    <div
      class="form-control"
      :class="{ errorMessage: v$.newReminder.name.$error }"
    >
      <label for="name">Name</label>
      <div class="form-control__input-container">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter name"
          v-model="state.newReminder.name"
        />
        <span class="error" v-if="v$.newReminder.name.$error">{{
          v$.newReminder.name.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div
      class="form-control"
      :class="{ errorMessage: v$.newReminder.date.$error }"
    >
      <label for="date">Date</label>
      <div class="form-control__input-container">
        <input
          id="date"
          name="date"
          type="date"
          v-model="state.newReminder.date"
        />
        <span class="error" v-if="v$.newReminder.date.$error">{{
          v$.newReminder.date.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div
      class="form-control"
      :class="{ errorMessage: v$.newReminder.time.$error }"
    >
      <label for="time">Time</label>
      <div class="form-control__input-container">
        <input
          id="time"
          name="time"
          type="time"
          v-model="state.newReminder.time"
        />
        <span class="error" v-if="v$.newReminder.time.$error">{{
          v$.newReminder.time.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div
      class="form-control"
      :class="{ errorMessage: v$.newReminder.category.$error }"
    >
      <label for="category">Category</label>
      <div class="form-control__input-container">
        <select
          name="category"
          id="category"
          v-model="state.newReminder.category"
        >
          <option value="" disabled selected>Select category</option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.name"
          >
            {{ category.name }}
          </option>
        </select>
        <span class="error" v-if="v$.newReminder.category.$error">{{
          v$.newReminder.category.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div class="category-button my-8">
      <a class="btn-primary" @click="openModal">Add Category</a>
    </div>
    <div
      class="form-control"
      :class="{ errorMessage: v$.newReminder.name.$error }"
    >
      <label for="">Tags</label>
      <div class="form-control__input-container">
        <div class="form-control__checkboxes">
          <input
            type="radio"
            id="high-prio"
            name="tags"
            value="Very High Prio"
            v-model="state.newReminder.tag"
          />
          <span class="radio-label">Very High Prio</span><br />
          <input
            type="radio"
            id="important"
            name="tags"
            value="Important"
            v-model="state.newReminder.tag"
          />
          <span class="radio-label">Important</span><br />
          <input
            type="radio"
            id="low-prio"
            name="tags"
            value="Low Prio"
            v-model="state.newReminder.tag"
          />
          <span class="radio-label">Low Prio</span>
        </div>
        <span class="error" v-if="v$.newReminder.tag.$error">{{
          v$.newReminder.tag.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div
      class="form-control"
      :class="{ errorMessage: v$.newReminder.description.$error }"
    >
      <label for="description">Description</label>
      <div class="form-control__input-container">
        <textarea
          id="description"
          name="description"
          type="text"
          rows="3"
          placeholder="Enter description"
          v-model="state.newReminder.description"
        />
        <span class="error" v-if="v$.newReminder.description.$error">{{
          v$.newReminder.description.$errors[0].$message
        }}</span>
      </div>
    </div>
    <BaseButton> Save new reminder </BaseButton>
  </form>
  <!-- end of form -->
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  emits: ["addReminder"],
  setup() {
    // begining values
    const state = reactive({
      newReminder: {
        name: "",
        date: "",
        time: "",
        category: "",
        tag: "",
        description: "",
      },
    });
    // set valitated rules
    const rules = computed(() => {
      return {
        newReminder: {
          name: { required },
          date: { required },
          time: { required },
          category: { required },
          tag: { required },
          description: { required, minLength: minLength(10) },
        },
      };
    });

    const v$ = useValidate(rules, state);

    return { state, v$ };
  },
  data() {
    return {
      isActive: false,
      category: "",
      categories: [
        {
          id: 1,
          name: "Category 1",
        },
        {
          id: 2,
          name: "Category 2",
        },
        {
          id: 3,
          name: "Category 3",
        },
      ],
    };
  },
  methods: {
    openModal() {
      this.isActive = !this.isActive;
    },
    addNewCategory() {
      this.newCategory = {
        id: Math.random() * 10,
        name: this.category,
      };
      this.categories.push(this.newCategory);
      this.isActive = !this.isActive;
    },
    // save values from form
    saveReminder() {
      // check all inputs
      this.v$.$validate();
      if (!this.v$.$error) {
        this.state.newReminder = {
          _id: Math.random(),
          name: this.state.newReminder.name,
          date: this.state.newReminder.date,
          time: this.state.newReminder.time,
          category: this.state.newReminder.category,
          tag: this.state.newReminder.tag,
          description: this.state.newReminder.description,
        };
        // emit custom event and pass the values
        this.$emit("add-reminder", this.state.newReminder);
      }
    },
  },
};
</script>
