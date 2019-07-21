<template>
  <div class="leftNav-wrapper">
    <ul>
      <li>
        <i class="icon iconfont icon-goumai"></i>
        <div class="">收银</div>
      </li>
      <li>
        <i class="icon iconfont icon-dianpu"></i>
        <div class="">店铺</div>
      </li>
      <li>
        <i class="icon iconfont icon-hanbao"></i>
        <div class="">商品</div>
      </li>
      <li>
        <i class="icon iconfont icon-huiyuanqia"></i>
        <div class="">会员</div>
      </li>
      <li>
        <i class="icon iconfont icon-shoucang"></i>
        <div class="">统计</div>
      </li>
      <li>
        <i class="icon iconfont icon-gongnengjianyi"></i>
        <div class="">设置</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="" scoped>
  .leftNav-wrapper{
    color:#fff;
    font-size:10px;
    height:100%;
    background-color:#1d8ce0;
    float:left;
    width:5%;
  }
  .iconfont{
    font-size:24px;
  }
  ul{
    margin:0px;
    padding:0px;
  }
  li{
    list-style: none;
    text-align: center;
    border-bottom:1px solid #ddd;
  }
</style>
