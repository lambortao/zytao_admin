<template>
  <section class="tools">
    <el-button v-model="addButton" icon="el-icon-edit">新增</el-button>
  </section>
</template>
<script>
export default {
  props: {
    addButton: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss" scoped>
section.tools{
  margin-bottom: 10px;
  height: 36px;
}
</style>
