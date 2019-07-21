<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/header">GO Header View</router-link>
    <router-link to="/h1">GO h1 View</router-link>
    <!-- <router-link to="/header">GO Header View</router-link>
    <router-link to="/header/h1">GO Header/h1 View</router-link>
    <router-link :to="{name:'h2',params:{'username':'asdf'}}">GO Header/h2 View</router-link>
    <p>{{$route.name}}</p>
     -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <!-- <router-view style="float:left;width:100%;height:200px;border:1px solid #ddd;"></router-view>
    <router-view name="left" style="float:left;width:45%;height:200px;border:1px solid #ddd;"></router-view>
    <router-view name="right" style="float:right;width:45%;height:200px;border:1px solid #ddd;"></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition:opacity 0.5s;
}
.fade-leave{
  opacity:1;
}
.fade-leave-active{
  transition:opacity 0.5s;
}
</style>
