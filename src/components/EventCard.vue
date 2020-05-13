<template>
  <div>
    <h4>{{ event.title }}</h4>
    <h5>{{ event.date }}</h5>
  </div>
</template>

<script>
export default {
data() {
  return {
    event: {
      id: 1,
      title: 'Beach Cleanup',
      date: 'Tuesday May 19th 2020',
      time: '6:00',
      attendees: [
        { id: 'jumbokilo', name: 'Ym Back'},
        { id: 'foxtrondso', name: 'Dil Piccle'}
      ]
    }
  }
}
}
</script>

<style scoped>
h4 {
  color: rgb(72, 255, 34);
}
</style>