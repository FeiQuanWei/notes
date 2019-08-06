<template>
  <div class="wrapper">
      <h1>{{count}}--------{{$store.state.count}}</h1>
      <p class="sync">
        <button type="button" @click="add(5)">+</button>
        <button type="button" @click="$store.commit('reduce')">-</button>
      </p>

      <!-- <p class="async">
        <button type="button" @click="addAction">+</button>
        <button type="button" @click="reduceAction">-</button>
      </p> -->
  </div>
</template>
<script>
  import { mapState,mapMutations,mapGetters,mapActions } from 'Vuex'
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
      // ...mapGetters(["count"])
    },
    methods:{
      ...mapMutations(["add","reduce"]),
      ...mapActions(["addAction","reduceAction"])
    }
  }
</script>
<style>
</style>