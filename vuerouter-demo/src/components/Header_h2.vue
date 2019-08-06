<template>
  <div class="wrapper">
      I'm header/h2
      <p>{{$route.params.username}}</p>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="" scoped>
.wrapper{}
</style>