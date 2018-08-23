<template>
  <div class="main">
    <Menu class="menu-all" />
    <div id="home">
      <Tab></Tab>
      <div class="content-box">
        <transition name="ani">
          <router-view/>
        </transition>
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
<style lang="scss">
@import '../assets/scss/method.scss';

.main{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  transition: all 500ms;

  #home{
    width: 100%;
    transition: all 500ms;

    .content-box{
      width: 100%;
      height: 100%;
      padding: 10px 5px;
      position: relative;

      > div{
        width: calc(100% - 15px);
        background-color: #fff;
        border-radius: 3px;
        border: 1px solid $borderColorLight;
        padding: 10px;
        position: absolute;
      }
    }
  }

  .menu-all{
    &:hover{
      width: 160px;

      .menu-box{
        transform: translateX(0px) !important;
      }
      & + #home{
        width: calc(100% - 160px);
      }
    }
  }
  .in-home{
    width: 160px;

    .menu-box{
      transform: translateX(0px) !important;
    }
    & + #home{
      width: calc(100% - 160px);
    }
  }
}
.ani-enter-active,
.ani-leave-active{
  transition: all 300ms;
}
.ani-leave,
.ani-enter-to{
  transform: translateY(0);
  opacity: 1;
}
.ani-enter{
  transform: translateY(7px);
  opacity: 0;
}
.ani-leave-to{
  transform: translateY(-7px);
  opacity: 0;
}
</style>
