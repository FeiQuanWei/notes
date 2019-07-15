<template>
  <div class="wrapper">
    asdf
      <h1>{{$store.state.count}}--------{{count}}</h1>
      <p>
        <button type="button" @click="add">+</button>
        <button type="button" @click="$store.commit('reduce')">-</button>
      </p>
  </div>
</template>
<script>
   import { mapState,mapMutations,mapGetters } from 'Vuex'
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
    computed:{
      ...mapState(["count"]),
      // count(){
      //   return this.$store.getters.count
      // }
      ...mapGetters(["count"])
    },
    methods:{
      ...mapMutations(["add","reduce"])
    }
  }
</script>
<style>
</style>