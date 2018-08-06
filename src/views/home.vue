<template>
  <div class="main">
    <Menu></Menu>
    <div id="home">
      <Header></Header>
      <div class="content-box">
        <router-view/>
      </div>
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
@import '../assets/scss/method.scss';

.main{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;

  #home{
    flex: 1;

    .content-box{
      padding: 10px;

      > div{
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 3px;
        border: 1px solid $borderColorLight;
        padding: 10px;
      }
    }
  }
}
</style>
