<template>
  <div id="menu">
    <header class="logo">
      <h1>zytao</h1>
    </header>
    <nav>
      <div v-for="(item, $index) in navData">
        <router-link tag="p" :to="{path: '/home/'+item.url}"><b :style="{backgroundImage: 'url(' + require(`../assets/${item.icon}`) + ')'}"></b><span>{{item.name}}</span></router-link>
      </div>
    </nav>
  </div>
</template>
<script>
import cmsConfig from '@/config/index';

export default {
  data () {
    return{
      navData: []
    }
  },
  methods: {
    // 生成菜单
    navList () {
      for(let obj in cmsConfig) {
        this.navData.push(cmsConfig[obj]['menu']);
      }
    }
  },
  created() {
    this.navList();
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/method.scss';

#menu{
  width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  header{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.6rem;
    border-bottom: 1px solid $borderColorLight;
  }
  nav{
    padding: 30px 0;
    flex: 1;
    div{
      width: 100%;
      height: 50px;
      p{
        margin: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: #999;
      }

      b{
        width: 25px;
        height: 25px;
        background: {
          size: 100%;
          repeat: no-repeat;
        }
      }
      span{
        margin: 0 0 0 5px;
      }
    }
  }
}
</style>

