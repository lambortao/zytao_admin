<template>
  <table>
    <tr class="header">
      <td>测试</td>
      <td>测试</td>
      <td>测试</td>
      <td>测试</td>
      <td>测试</td>
      <td>测试</td>
    </tr>
    <tr class="intro">

    </tr>
  </table>
</template>
<script>
export default {
  props: {
    portValue: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/method.scss';

table{
  font-size: 0.8em;
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 15px;

  tr,th,td{
    border: 1px solid $borderColorLight;
    padding: 0;
  }
  tr{
    height: 40px;
    text-align: center;
  }
  .table-none{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  td.title{
    text-align: left;
    padding-left: 10px;
  }
  tr.header{
    background-color: #f5f7fa;
  }
  tr.intro{
    &:nth-child(odd) {
      background-color: #fafafa;
    }

    &:hover{
      background-color: #f5f7fa;
      transition: all 300ms ease;
    }
  }
  td.icon{
    b{
      display: inline-block;
      width: 25px;
      height: 25px;
      text-align: center;
      line-height: 25px;
      margin: 0;
      cursor: pointer;
      border: 1px solid $borderColorLight;
      border-radius: 3px;
      transition: all 300ms ease;

      &:hover{
        border: 1px solid $danger;
        color: $danger;
      }
    }
  }
}
</style>
