<template>
  <section class="tools">
    <el-button class="mgr5" v-show="addShow" icon="el-icon-edit" @click="goEdit()">新增</el-button>
    <el-select class="mgr5" v-show="selectShow" v-model="selectData" placeholder="请选择">
      <el-option 
        v-for="(items, $index) in selectValue"
        :key="$index"
        :value="items">
      </el-option>
    </el-select>
    <el-button 
      v-show="delShow" 
      @click="del()" 
      icon="el-icon-delete" 
      type="danger" 
      :disabled="delDisabled">删除</el-button>
  </section>
</template>
<script>
/**
 * 该组件目前共有三个功能板块
 * 
 * 1、新增按钮
 *  - addShow: 是否显示该按钮（默认显示）
 *  - addValue: 该按钮跳转的路由
 * 
 * 2、筛选菜单
 *  - selectShow: 是否显示该子组件（默认显示）
 *  - selectValue: 该组件渲染的数据，格式为直接显示内容的一维数组
 * 
 * 3、删除按钮（列表内勾选删除）
 *  - delShow: 是否显示该按钮（默认不显示）
 *  - delValue: 删除数据的后台接口
 *  - 该按钮会去读取vuex中的对应勾选数据，然后去调传过来的接口
 * 
 * data内的变量为：
 *  - selectData: 选中的下拉菜单
 *  - delDelDisabled: 删除按钮是否禁用（默认为禁用状态 - true，检测到列表内有勾选后会解开禁用）
 */
export default {
  props: {
    addShow: {
      type: Boolean,
      default: true
    },
    addValue: {
      type: String,
      default: ''
    },
    selectShow: {
      type: Boolean,
      default: true
    },
    selectValue: {
      type: Array,
      default: []
    },
    delShow: {
      type: Boolean,
      default: false
    },
    delValue: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selectData: '',
      delDisabled: true
    }
  },
  methods: {
    goEdit () {
      this.$router.push({path: `${this.addValue}/edit`})
    },
    del () {
      console.log('点击del');
    }
  },
  created () {
    console.log(this.addValue);
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/method.scss';
section.tools{
  margin-bottom: 15px;
  height: 36px;
}
</style>
