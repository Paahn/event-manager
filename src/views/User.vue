<template>
  <div class="user">
    <h1>Hello, {{ username }}.</h1>
  </div>
</template>

<script>
export default {
  props: ["username"]
}
</script>