<template>
  <div id="thinkList">
    <div class="content">
      <toolsBar :toolsValue="toolBar" />
      <tableList 
      :rely-data="relyData"
      :router-name="routerName"
      :table-menu="tableMenu"
      :tool-set="toolSet"
      @click-modify="modifyFun"
      @click-hot="hotFun"
      @click-orderby="orderbyFun"
      @click-delete="deleteFun"
      />
    </div>
  </div>
</template>

<script>
import tableList from '@/libs/my-table.vue'
import toolsBar from '@/libs/tool-bar.vue'
import buttonCounter from '@/libs/button-counter.vue'

/**
 * 该文件内默认会有两个自定义子组件
 * 
 * 1、操作菜单栏
 *  - 定义对象toolBar，具体参数配置见toolsbar组件内注释
 * 
 * 2、信息列表栏
 *  - 定义对象selectArticle，具体参数配置见tableList组件内注释
 * 
 * 有一个elementUI的组件：分页栏
 * 
 */

export default {
  data () {
    return {
      searchText: '测试',
      relyData: [],
      // 把每个组件需要的数据写在一个对象里面
      toolBar: {
        show: true,
        add: {
          show: true,
          value: 'think'
        },
        select: {
          show: true,
          value: ['js', 'css']
        },
        del: {
          show: true,
          value: 'think'
        }
      },
      selectArticle: [],
      routerName: 'think',
      tableMenu: {
        id: 'ID|text|',
        content: '正文|text|',
        time: '发表时间|text|'
      },
      toolSet: {
        modify: 'id',
        hot: 'hot',
        orderby: true,
        delete: 'id'
      }
    }
  },
  components: {
    tableList,
    toolsBar,
    buttonCounter
  },
  watch: {
    searchText(val) {
      console.log(val);
    }
  },
  methods: {
    // 获取表格数据
    getList () {
      this.$port('think/getList').then(data => {
        this.relyData = data;
        console.log(data);
      })
    },
    // 临时函数，以后可以挪到文章内使用
    getArticleSelectList () {
      this.$port('article/getSelectList').then(data => {
        this.toolBar.select.value = data;
      })
    },
    // 改、顶、排、删，四大操作按钮的点击事件，传的值为点击的ID
    modifyFun (val) {
      console.log(val);
    },
    hotFun (val) {
      this.$hot('think/hot', val, () => {
        this.getList();
      })
    },
    orderbyFun (val) {
      console.log(val);
    },
    deleteFun (val) {
      this.$del('think/del',{
        id: val
      }, ()=>{
        this.getList();
      });
    }
  },
  created () {
    this.getList();
    // this.getArticleSelectList();
  }
}
</script>
<style lang="scss" scoped>
</style>
