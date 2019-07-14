<template>
  <div class="wrapper">
    asdf
      <h1>{{$store.state.count}}</h1>
      <p>
        <button type="button" @click="add">+</button>
        <button type="button" @click="$store.commit('reduce')">-</button>
      </p>
  </div>
</template>
<script>
   import { mapState,mapMutations } from 'Vuex'
  import store from '@/vuex/store'
  export default {
    components:{},
    props:{},
    data(){
      return {
          msg:"hello"
      }
    },
    store,
    // computed:mapState({
    //   count:state => state.count 
    // }),
    // computed:{
    //   count(){
    //     return $store.state.count
    //   }
    // },
    // computed:mapState(["count"])
    methods:mapMutations(["add","reduce"])
  }
</script>
<style>
</style>