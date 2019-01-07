<template>
<div id="">
            <!-- <h1>{{users}}</h1>
            <h3>{{count}}</h3> -->
            <!-- 第二种方法 -->
            <h1>{{this.$store.state.username}}</h1>
            




</div>
  
</template>

<script>

// import {mapGetters,mapActions} from 'vuex';
export default {
name: 'About',
data(){
    return{
        tit:'关于'
    }
},
mounted(){
    this.$emit('toparent',this.tit)

},  
computed:{
    // ...mapGetters(["count","users"])

  },
  
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
