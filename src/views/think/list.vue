<template>
  <div id="thinkList">
    <table-list 
    :port-value="portData"
    />
  </div>
</template>

<script>
import { getThinkList } from '@/api'

export default {
  data () {
    return {
      portData: []
    }
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
    }
  },
  created () {
    this.getList();
  }
}
</script>
<style lang="scss" scoped>

</style>
