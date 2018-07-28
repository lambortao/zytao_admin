<template>
  <div class="hello">
    <el-card>
      
    </el-card>
  </div>
</template>

<script>
import cmsConfig from '@/config/index';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    first () {
      console.log(cmsConfig);
    }
  },
  created () {
    this.first();
  }
}
</script>