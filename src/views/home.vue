<template>
  <div class="main">
    <Menu></Menu>
    <div id="home">
      <Header></Header>
      <Tab></Tab>
      <router-view/>
    </div>
  </div>
</template>

<script>
import cmsConfig from '@/config/index';
import Menu from '@/components/menu';
import Header from '@/components/header';
import Tab from '@/components/Tab';

export default {
  name: 'HelloWorld',
  components: {
    Header,
    Tab,
    Menu
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.main{
  display: flex;
  justify-content: space-between;

  #home{
    flex: 1;
  }
}
</style>
