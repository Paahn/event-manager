<template>
  <div class="icon-wrapper">
    <svg 
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <use v-bind="{'xlink:href':'/feather-sprite.svg#'+name}" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: String, // the name of the symbol we want to use
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  }
};
</script>

<style scoped>
</style>