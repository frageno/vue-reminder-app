<template>
  <div class="card">
    <div class="card__header">
      <slot name="header"></slot>
    </div>
    <div class="card__body">
      <slot name="body"></slot>
    </div>
    <div class="card__footer pt-8">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
