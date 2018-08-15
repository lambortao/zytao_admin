<template>
  <table>
    <tr class="header">
      <td class="table-option active" width="30"><i></i></td>
      <td v-for="(item, $index) in tableMenu" v-text="getMenuData(item, 1)"></td>
      <td width="150">操作</td>
    </tr>
    <tr class="intro" v-for="(items, $index) in relyData">
      <td class="table-option"><i></i></td>
      <td v-for="(item, num) in pageField" v-text="relyData[$index][item]"></td>
      <td class="icon">
        <b v-for="(value, key, index) in toolSet" v-show="value">{{ toolSetText[index] }}</b>
      </td>
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
 * 
 * 4、操作的数据
 *  - relyData: 格式为对象数组
 */
const cityOptions = [];
export default {
  props: {
    relyData: {
      type: Array,
      default: () => {
        reutrn [{}];
      }
    },
    tableMenu: {
      type: Object,
      default: () => {
        return {}
      }
    },
    mainLinkShow: {
      type: Boolean,
      default: false
    },
    mainLinkValue: {
      type: String,
      default: ''
    },
    toolSet: {
      type: Object,
      default: () => {
        return {
          modify: 'id',
          hot: 'hot',
          orderby: false,
          delete: 'id'
        }
      }
    }
  },
  data () {
    return {
      pageField: [],
      toolSetText: ['改', '顶', '排', '删'],
      toolSetField: ['modify', 'hot', 'orderby', 'delete'],
      toolSetFun: {}
    }
  },
  methods: {
    // 取出需要循环的字段
    getField () {
      this.pageField = Object.keys(this.tableMenu);
    },
    getMenuData (data, num) {
      let dataArr = data.split('|');
      if (dataArr.length < num) {
        console.log(`取值的位置与数据长度不符，数据为：${data}，长度为${num}}`);
        return;
      }
      return dataArr[num - 1];
    },
    // 给操作栏按钮加事件函数
  },
  created () {
    this.getField();
    console.log(this.relyData);
    setTimeout(()=>{
      console.log(this.toolSet);
    }, 2000);
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/method.scss';

.table-option{

  i{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    margin: 0 auto;
    border-radius: 2px;
    border: 1px solid $borderColorLight;
    cursor: pointer;
    position: relative;
    &:after{
      content: "";
      border: 1px solid #fff;
      border-left: 0;
      border-top: 0;
      width: 5px;
      height: 8px;
      position: absolute;
      top: 1px;
      left: 4px;
      transform: rotate(45deg) scaleY(0);
      transition: transform .15s ease-in .05s;
      transform-origin: center;
    }
  }
  
  &.active{
    i{
      border-color: $danger;
      background-color: $danger;
      &:after{
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
}

table{
  font-size: 0.8em;
  width: 100%;
  border-collapse: collapse;
  // margin-bottom: 15px;

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
      margin: 0 2px;
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
