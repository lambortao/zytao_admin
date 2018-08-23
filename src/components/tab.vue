<template>
  <div id="tab">
    <div class="tab-box"></div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/method.scss';

#tab{
  width: 100%;
  height: 60px;
  padding: 10px 5px 0 5px;

  > div{
    width: calc(100% - 15px);
    height: 100%;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid $borderColorLight;
    padding: 10px;
  }
}
</style>