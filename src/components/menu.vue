<template>
  <div id="menu">
    <header class="logo">
      <router-link tag="h1" to="/">zytao</router-link>
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
  width: 160px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-right: 1px solid $borderColorLight;

  header{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid $borderColorLight;

    h1{
      margin: 0;
      font-size: 1.25em;
      cursor: pointer;
      @include bottom-line(1px, 1px, -5px, 2px);
    }
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
        font-size: 0.8em;

        &.active{
          color: #333;
          font-weight: bold;
          background-color: #f9f9f9;
          border-top: 1px solid $borderColorLight;
          border-bottom: 1px solid $borderColorLight;
          position: relative;

          &:after{
            position: absolute;
            content: '';
            width: 1px;
            height: 100%;
            background-color: #f9f9f9;
            top: 0;
            right: -1px;
          }
        }
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

