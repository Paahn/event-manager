<template>
  <div class="event-card -shadow">
    <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
    <h4 class="title">{{ event.title }}</h4>
    <span>{{ event.attendees.length }} attending</span>
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