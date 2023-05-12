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

<style>
.btn-primary {
    outline:none;
    border:0;
    border-radius:25px;
    background:#000;
    color:#fff;
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    margin: 2rem 0;
    cursor: pointer;
    transition: all .4s;
    font-weight: 700;

    &:hover{
        background:#0047FF;
    }
}
</style>
