<template>
<div id="">
            <!-- <h1>{{users}}</h1>
            <h1>{{count}}</h1> -->
            <h1>{{this.$store.state.username}}</h1>
            <span>{{str}}</span>
            
            <ul>
              <li v-for="item in list"><router-link :to='"/detail/"+item.pid'>{{item.pname}}</router-link></li>
            </ul>
             <!-- <mt-button size="normal" type="primary" @click="add()">加法</mt-button>
             <mt-button size="normal" type="danger" @click="jian()">减法</mt-button> -->
             <hr/>
               <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
                <mt-button size="normal" type="danger" @click="login()">登录</mt-button>




</div>
  
</template>

<script>
//暴露出组件对象模板不要名字
//import {mapGetters,mapActions} from 'vuex';

import axios from 'axios';
export default {
  name: 'Home',
  data () {
    return {
      str: '首页',
      list:[],
      username:'',

    }
  },
  computed:{
   // ...mapGetters(["count","users"]),
  },
  methods:{
   // ...mapActions(["add","jian","login"]),
   login(){
     this.$store.commit('login',this.username)
   }

  },

 
  mounted(){
    this.$emit('toparent',this.str);
    var _this=this;
    axios({
      method:'get',
      url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
      params:{uid:'11475'}
    }).then(function(data){
     // console.log(data)
      _this.list=data.data.data
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{height: 50px;border-bottom:1px solid red ;}


</style>
