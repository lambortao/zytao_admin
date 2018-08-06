<template>
  <div id="header">
    <div class="user"></div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/method.scss';

#header{
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid $borderColorLight;

  .user{
    width: 50px;
    height: 50px;
    border-left: 1px solid $borderColorLight;
    position: absolute;
    right: 0;
    cursor: pointer;
  }
}
</style>

