<template>
  <div class="detail">
    <!-- <header>
      <span class="back" @click="fanhui()">&lt;</span>详情
    </header> -->
    <mt-header title="详情">
          <router-link to="/" slot="left">
          <mt-button icon="back"  @click="fanhui()">返回</mt-button>
         
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


    <section>
      <h2>详情组件</h2>

      <span>{{detail}}</span>
      <hr/>
      <mt-swipe :auto="2000" style="height:200px;text-align:center;">
        <mt-swipe-item style="background:orange"><img src="static/254985.jpg" height=200 width=100%/></mt-swipe-item>
        <mt-swipe-item style="background:pink">2</mt-swipe-item>
        <mt-swipe-item style="background:skyblue">3</mt-swipe-item>
        <mt-swipe-item style="background:pink">4</mt-swipe-item>
        <mt-swipe-item style="background:skyblue">5</mt-swipe-item>
      </mt-swipe>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
// import { Header } from 'mint-ui';
export default {
  name: "Detail",
  data(){
    return {
      detail: ""
    };
  },
  // mounted(){
  //   this.$emit('toparent',this.tit)
  // }
  methods: {
    fanhui() {
      console.log(this);
      //全局对象
      this.$router.go(-1);
    }
  },
  
        mounted(){
        var _this=this;
        axios({
            type:"get",
            url:'http://jx.xuzhixiang.top/ap/api/detail.php',
            params:{id:_this.$route.params.id,uid:'11475'}
        }).then(function(data){
            console.log(data.data.data.pname)
            _this.detail=data.data.data.pname
        })
        //console.log(this.$route.params)//!!!重要的接收方式是用this.$route.params接受;$route全局的进行外部获取的的一个对象
    }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
/* header {
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: chartreuse;
} */
section {
  flex: 1;
}
.back {
  position: absolute;
  left: 20px;
  font-size: 24px;
  color: cornsilk;
}
</style>
