import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
// var state={
//     count:0
// };
// var getters={
//     count:function(state){
//         return state.count
//     }
// };
// var mutations={
//     add:function(a){
//         return a.count++
//     },
//     jian:function(a){
//         return a.count--

//     }
// };
// var actions={
//     add:({commit})=>{
//         commit('add')
//     },
//     jian:({commit})=>{
//         commit('jian')
//     },
// };
// var modules={
//     username:{
//         state:{
//             users:''
//         },
//         getters:{
//             users:function(state){
//                 return state.users
//             }
//         },
//         mutations:{
//             login:function(a,b){
//                 a.users=b
//             }
//         },
//         actions:{
//             login:({commit,b})=>{
//                 commit('login',b)
//             }
//         }
//     }

// }
// export default new Vuex.Store({
//     state,
//     getters,
//     mutations,
//     actions,
//     modules
//     })

//简写方法
var state={
    username:''
};
var mutations={
    login:function(a,b){
        a.username=b
    }
};
export default new Vuex.Store({
    state,
    mutations
})






