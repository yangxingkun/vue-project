<template>
  <div class="hello">
    <!-- <header>{{tit}}</header> -->
    <mt-header fixed :title="tit"></mt-header>
    <section>
    
    <router-view @toparent="getdata"></router-view>
    
    </section>
    <footer>
    <router-link to="/home" tag='span'>首页</router-link>
    <router-link to="/about" tag='span'>关于</router-link>
    <router-link to="/other" tag='span'>其他</router-link>
    </footer>
  </div>
</template>

<script>
import { Header } from 'mint-ui';

export default {
  name: 'HelloWorld',
  data () {
    return {
      tit: '首页'
    }
  },
  methods:{
    getdata(msg){
      this.tit=msg;
    }
  }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- vw可是窗口横向的宽度
vh是竖向的高度 -->
<style scoped=''>
.router-link-active{
  color: aliceblue

}


.hello{height:100vh;display:flex;flex-direction:column;}
footer{height:50px;background:orange;text-align:center;line-height:50px;}
section{flex:1;margin-top:40px }
footer{overflow: hidden;}
footer span{width: 33.3%;float: left;}




</style>
