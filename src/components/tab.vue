<template>
  <div id="tab">
    <div class="tab-box">
      主页 / 文章
    </div>
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
  height: 50px;
  padding: 10px 5px 0 5px;
  position: relative;

  > div{
    width: calc(100% - 5px);
    height: 100%;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid $borderColorLight;
    padding: 0 10px;
    line-height: 40px;
    color: #999;
    font-size: 0.9em;
  }
}
</style>