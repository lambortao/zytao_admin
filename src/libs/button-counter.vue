<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>
<script>
export default {
  props: ['title'],
  data: function () {
    return {
      count: 0
    }
  }
}
</script>
