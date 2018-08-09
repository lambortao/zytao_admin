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
/**
 * 1、定义顶部的显示菜单
 *  - tableMenu: 填写你要显示的数据库的字段名(必选)
 *    - {
 *        id: 'ID|text|30',
 *        title: '标题|text|50',
 *        tmb: '图片|img'
 *        link: '链接|url',
 *        time: '时间|text'
 *      }
 *    - 键：渲染依据的字段名
 *    - 值：用竖线分割开来，第一个值为必选，第二三个值为可选，但如果有第三个值，那么第二个值的竖线不能省略
 *         第一个值为菜单内显示的标题
 *         第二个值为该内容应该用那种形式展现（默认为text），如下所示
 *          - text: 纯文本；
 *          - img: 图片；
 *          - url: 可以点击的链接（新建窗口）
 *         第三个值为可选，为该选项的宽度
 *      
 * 
 * 2、正文跳转链接
 *  - mainLinkShow: 是否开启跳转（布尔值，默认不开启）
 *  - mainLinkValue: 跳转的链接（字符串，默认格式为：urlhost + mainLinkValue + id，可根据需求自行修改）
 * 
 * 3、所需的操作工具集合
 *  - toolSet: 所需要使用的工具集合（对象，结构如下，修改和删除为必须开启项）
 *    - {
 *        modify: 'id',
 *        hot: 'hot',
 *        orderby: false,
 *        delete: 'id'
 *      }
 *    - 键：功能按钮，自上向下：修改、置顶&取消置顶、排序、删除
 *    - 值：如果传的是字符串，则以此值为操作内容的字段依据，如果为false，则不显示该按钮
 */
export default {
  props: {
    portValue: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      
    }
  },
  created () {
    setTimeout(()=>{
      console.log(this.portValue);
    }, 2000);
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
