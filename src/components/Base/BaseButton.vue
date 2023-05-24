<template>
  <button class="btn-primary" :class="cssClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['cssClass'],
};
</script>

