<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="7" class="post-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border style="width:100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button @click="reduce(scope.row)" type="text" size="small">删除</el-button>
                  <el-button @click="addOrderList(scope.row)" type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              数量：{{totalCount}}
              金额：{{totalPrice}}元
            </div>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button @click="deleteAllFood" type="danger">删除</el-button>
              <el-button @click="checkOut" type="success">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="ofter-good">
          <div class="title">常用商品</div>
          <div class="ofter-goods-list">
            <ul>
              <li @click="addOrderList(item)" :key="index" v-for="(item,index) in oftenGoodsList">
                <span>{{item.goodsName}}</span>
                <span class="price">￥{{item.price}}元</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div class>
                <ul class="cookList">
                  <li @click="addOrderList(item)" :key="index" v-for="(item,index) in type0Goods">
                    <span class="foodImg">
                      <img :src="item.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{item.goodsName}}</span>
                    <span class="foodPrice">￥{{item.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class="cookList">
                <li @click="addOrderList(item)" :key="index" v-for="(item,index) in type1Goods">
                  <span class="foodImg">
                    <img :src="item.goodsImg" width="100%" />
                  </span>
                  <span class="foodName">{{item.goodsName}}</span>
                  <span class="foodPrice">￥{{item.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="饮品">
              <ul class="cookList">
                <li @click="addOrderList(item)" :key="index" v-for="(item,index) in type2Goods">
                  <span class="foodImg">
                    <img :src="item.goodsImg" width="100%" />
                  </span>
                  <span class="foodName">{{item.goodsName}}</span>
                  <span class="foodPrice">￥{{item.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class="cookList">
                <li @click="addOrderList(item)" :key="index" v-for="(item,index) in type3Goods">
                  <span class="foodImg">
                    <img :src="item.goodsImg" width="100%" />
                  </span>
                  <span class="foodName">{{item.goodsName}}</span>
                  <span class="foodPrice">￥{{item.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
export default {
  components: {},
  props: {},
  data () {
    return {
      tableData: [],
      oftenGoodsList: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      totalCount: 0,
      totalPrice: 0
    }
  },
  watch: {},
  computed: {},
  methods: {
    addOrderList (good) {
      let ifExist = false
      this.tableData.forEach((item, index) => {
        if (item.goodsId === good.goodsId) {
          ifExist = true
        }
      })
      if (ifExist) {
        let arr = this.tableData.filter(ab => {
          return ab.goodsId === good.goodsId
        })
        arr[0].count += 1
      } else {
        Vue.set(good, 'count', 1)
        this.tableData.push(good)
      }
      this.totalCount = 0
      this.totalPrice = 0
      this.tableData.forEach((item, index) => {
        this.totalCount += item.count
        this.totalPrice += item.price * item.count
      })
    },
    reduce (good) {
      if (good.count === 1) {
        this.tableData.forEach((item, index) => {
          if (item.goodsId === good.goodsId) {
            this.tableData.splice(index, 1)
          }
        })
      }
      good.count -= 1
      this.totalCount -= 1
      this.totalPrice -= good.price
    },
    deleteAllFood () {
      this.tableData = []
      this.totalCount = 0
      this.totalPrice = 0
    },
    checkOut () {
      if (this.totalCount > 0) {
        this.totalCount = 0
        this.totalPrice = 0
        this.tableData = []
        this.$message({
          message: '结算成功',
          type: 'success'
        })
      } else {
        this.$message({
          message: '啥也没有，你结算个毛',
          type: 'warning'
        })
        this.$message.error('啥也没有，你结算个毛')
      }
    }
  },
  created () {
    axios
      .get(
        'https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods'
      )
      .then(res => {
        this.oftenGoodsList = res.data
      })
      .catch(err => {
        console.log(err)
      })
    axios
      .get(
        'https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods'
      )
      .then(res => {
        this.type0Goods = res.data[0]
        this.type1Goods = res.data[1]
        this.type2Goods = res.data[2]
        this.type3Goods = res.data[3]
      })
      .catch(err => {
        console.log(err)
      })
  },
  mounted () {
    let orderHeight = document.body.clientHeight
    document.getElementById('order-list').style.height = orderHeight + 'px'
  }
}
</script>
<style lang="" scoped>
.post-order {
  background-color: #f9fafc;
  border-right: 1px solid #fff;
}
.div-btn {
  margin-top: 20px;
}
.title {
  height: 20px;
  border-bottom: 1px solid #ddd;
  background-color: #f9fafc;
  padding: 10px;
  text-align: left;
}
.ofter-goods-list ul {
  overflow: hidden;
}
.ofter-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #fff;
  padding: 10px;
  margin: 10px;
}
.ofter-goods-list ul li .price {
  color: blue;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
.totalDiv {
  background-color: #ddd;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
</style>
