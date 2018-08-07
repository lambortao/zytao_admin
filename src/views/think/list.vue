<template>
  <div id="thinkList">
    这里是说说的列表
    <table-list></table-list>
  </div>
</template>

<script>
import { getThinkList } from '@/api'
// import { __port } from '@/utils'

export default {
  data () {
    return {

    }
  },
  methods: {
    getArticleList () {
       /**
       * 这里需要传的东西可能会有很多
       * 1、需要定义顶部工具栏需要哪些工具，如基础的新增，筛选，还有批量删除等
       * 2、还要传一个数组来确定列表需要显示什么东西
       * 3、列表后的操作工具栏需要显示什么东西
       */
      this.$port('article/getArticleList').then(data => {
        console.log(data);
      })
    }
  },
  created () {
    this.getArticleList();
  }
}
</script>
<style lang="scss" scoped>

</style>
