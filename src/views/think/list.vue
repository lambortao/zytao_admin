<template>
  <div id="thinkList">
    <div class="content">
      <toolsBar 
      v-show="toolBar.show"
      :add-show="toolBar.add.show"
      :add-value="toolBar.add.value"
      :select-show="toolBar.select.show"
      :select-value="toolBar.select.value"
      :del-show="toolBar.del.show"
      :dle-value="toolBar.del.value"/>
      <tableList 
      :port-value="portData"/>
    </div>
  </div>
</template>

<script>
import { getThinkList } from '@/api'
import tableList from '@/libs/my-table.vue'
import toolsBar from '@/libs/tool-bar.vue'

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
      portData: [],
      // 把每个组件需要的数据写在一个对象里面
      toolBar: {
        show: true,
        add: {
          show: true,
          value: 'think'
        },
        select: {
          show: true,
          value: []
        },
        del: {
          show: true,
          value: 'think'
        }
      },
      selectArticle: []
    }
  },
  components: {
    tableList,
    toolsBar
  },
  methods: {
    getList () {
       /**
       * 这里需要传的东西可能会有很多
       * 1、需要定义顶部工具栏需要哪些工具，如基础的新增，筛选，还有批量删除等
       * 2、还要传一个数组来确定列表需要显示什么东西
       * 3、列表后的操作工具栏需要显示什么东西
       */
      this.$port('think/getList').then(data => {
        this.portData = data;
      })
    },
    // 临时函数，以后可以挪到文章内使用
    getArticleSelectList () {
      this.$port('article/getSelectList').then(data => {
        this.toolBar.select.value = data;
      })
    }
  },
  created () {
    this.getList();
    this.getArticleSelectList();
  }
}
</script>
<style lang="scss" scoped>
.content{
  padding: 10px;
}
</style>
