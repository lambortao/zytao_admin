<template>
  <div>
    <input type="text" :value="searchText" @input="$emit('input', $event.target.value)">
  </div>
</template>
<script>
export default {
  props: ['searchText'],
  data: function () {
    return {
      count: 0
    }
  }
}
</script>
