<style>
html {
  height: 100%;
}

body {
  background-color: #eee;
  height: 100%;
}
</style>
<style scoped lang="less">
.shop-item {
    position: relative;
    height: 40px;
    .shop-name {
        position: absolute;
        left: 15px;
        top: 0;
        height: 60px;
        line-height: 40px;
    }
    .shop-address {
        position: absolute;
        font-size: 12px;
        left: 15px;
        bottom: 9px;        
    }
    .shop-del {
        position: absolute;
        font-size: 12px;
        right: 15px;
        top: 0;
        height: 60px;
        width: 50px;
        color: #d8d8d8;
        line-height: 40px;
    }
}
.shop-brand {
    .brand-name {
        position: absolute;
        top: 0;
        left: 15px;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
    }
}
.cell-item {
    position: relative;
    height: 80px;
    .worker-logo {
        position: absolute;
        top: 10px;
        left: 15px;
        width: 80px;
        height: 80px;
    }
    .worker-name {
        position: absolute;
        top: 10px;
        left: 100px;
        font-size: 12px;
        color: #393939;
    }
    .worker-address {
        position: absolute;
        top: 44px;
        left: 100px;
        font-size: 12px;
        color: #999;
    }
    .worker-rank {
        position: absolute;
        bottom: 10px;
        left: 100px;
        font-size: 12px;
        color: #3ba794;
    }
    .worker-is-favorite {
        position: absolute;
        top: 70px;
        right: 15px;
        width: 78px;
        height: 18px;
        border: 1px solid #ff9736;
        border-radius: 5px;
        text-align: center;
        color: #ff9736;
        line-height: 18px;
        font-size: 12px;
        font-weight: 200;
        img {
            height: 100%;
            width: 100%;
        }
    }
    .chosen {
        background-color: #ff9736;
        color: #fff;
    }
    .worker-del {
        position: absolute;
        top: 73px;
        right: 103px;
        width: 24px;
        font-size: 12px;
        color: #ddd;
    }
    .shop-name {
        position: absolute;
        top: 10px;
        left: 15px;
        font-size: 12px;
        color: #393939;
    }
    .shop-address {
        position: absolute;
        top: 44px;
        left: 15px;
        font-size: 12px;
        color: #999;
        text-align: left;
    }
    .shop-del {
        position: absolute;
        top: 73px;
        right: 103px;
        width: 54px;
        font-size: 12px;
        color: #ddd;
    }
}
.content {
    padding-top: 44px;
    margin-bottom: 44px;
}
header {
    position: fixed;
    height: 44px;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 30;
}
.tab-active {
    color: #ff9736 !important;
    border-color: #ff9736 !important;
}
.click-area-select {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 60px;
    width: 95px;
    z-index: 2;
}
.click-area-detail {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
}
.click-area-del {
    position: absolute;
    right: 95px;
    bottom: 0;
    height: 50px;
    width: 40px;
    z-index: 2;
}
.click-zc-area-del {
    position: absolute;
    right: 95px;
    bottom: 0;
    height: 50px;
    width: 60px;
    z-index: 2;
}
.submit-btn {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #fff;
    background-color: rgb(226,226,226);
    transition: 1s;
}
.right-btn {
    left: 50%;
    width: 50%;
}
.left-btn {
    width: 50%;
    border: 1px solid rgb(226,226,226);
    height: 42px;
    line-height: 42px;
}
.left-btn-active {

    width: 50%;
    color: #ff9736;
    background-color: rgb(238,238,238);
    border: 1px solid #ff9736;
}
.select-active {
    background-color: #ff9736 !important;
}
.no-data-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.no-data {
    position: relative;
    width: 100%;
    img {
        position: absolute;
        top: 160px;
        left: calc( ~"50% - 35.5px" );
        height: 65px;
        width: 71px;
    }
    span {
        display: block;
        position: absolute;
        width: 100%;
        height: 16px;
        font-size: 16px;
        line-height: 16px;
        left: 0;
        top: 241px;
        color: #DADADA;
        text-align: center;
    }
}
</style>

<template>
<div>
  <header>
    <tab active-color='#ff9736' :index.sync="index">
      <tab-item active-class="tab-active" :selected="tab === '门店'" v-tap="tab = '门店'">门店</tab-item>
      <tab-item active-class="tab-active" :selected="tab === '工长'" v-tap="tab = '工长'">工长</tab-item>
      <!-- <tab-item active-class="tab-active" :selected="tab === '软装'" v-tap="tab = '软装'">软装</tab-item> -->
    </tab>
  </header>

  <swiper :index.sync="index" :height="getScreenHeight()+'px'" :show-dots="false">
    <swiper-item height="100%">
      <div class="tab-swiper vux-center content">
        <scroller :height="getScreenHeight()-88+'px'" lock-x scrollbar-y v-ref:zc>
          <div>
            <div v-if="shopList.length > 0">
              <div style="background-color:#fff;margin-bottom:10px;" v-for="shop in shopList">
                <cell class="cell-item">
                  <div class="click-area-select" v-tap="selectItem('Shop',shop.id)"></div>
                  <div class="click-zc-area-del" v-tap="deleteShop(shop.id)"></div>
                  <div class="shop-name">{{shop.name}}</div>
                  <div class="shop-address" style="overflow: auto; padding-right: 40px;">{{shop.address}}</div>
                  <!-- <div class="worker-rank">评分:5.0</div>src="selected.png" src="toselect.png" -->
                  <div class="shop-del">删除门店</div>
                  <div v-if="isSelect('Shop',shop.id)" class="worker-is-favorite chosen" >已选择</div>
                  <div v-else class="worker-is-favorite" >选择</div>
                </cell>
                <cell class="shop-brand" v-for="brand in shop.brands">
                  <div class="brand-name">品牌: {{brand.name}}</div>
                </cell>
              </div>
            </div>
            <div v-else class="no-data-container">
              <div class="no-data"><img src="no-data.png"><span>暂无备选</span></div>
            </div>
          </div>
        </scroller>

        <div class="submit-btn left-btn" :class="{'left-btn-active':isSelected('Shop')}" v-tap="isSelected('Shop')?selectShops():return">立即预约</div>
        <div class="submit-btn right-btn" :class="{'select-active':isSelected('Shop')}" v-tap="isSelected('Shop')?addOrder():return">立即购买</div>
        <!-- <div class="submit-btn" :class="{'select-active':isSelectShop()}" v-tap="isSelectShop()?selectShop():return">预约</div> -->
      </div>
    </swiper-item>
    <swiper-item height="100%">
      <div class="tab-swiper vux-center content">
        <scroller :height="getScreenHeight()-88+'px'" lock-x scrollbar-y v-ref:zx>
          <div>
            <group style="margin-top:-1.17647059em;" v-if="workerList.length > 0">
              <cell v-for="worker in workerList" class="cell-item">
                <div class="click-area-select" v-tap="selectItem('Worker',worker.userId)"></div>
                <div class="click-area-detail" v-tap="goto('worker-detail.html?id='+worker.userId)"></div>
                <div class="click-area-del" v-tap="del('Worker',worker.userId)"></div>
                <img :src="imgUrl + worker.profileImage" class="worker-logo" width="120px" height="80px">
                <div class="worker-name">{{worker.nickname}}</div>
                <div class="worker-address">{{worker.nativePlace}}</div>
                <!-- <div class="worker-rank">评分:5.0</div> -->
                <div class="worker-del">删除</div>
                <div v-if="isSelect('Worker',worker.userId)" class="worker-is-favorite chosen" >已选择</div>
                <div v-else class="worker-is-favorite" >选择</div>
              </cell>
            </group>
            <div v-else class="no-data-container">
              <div class="no-data"><img src="no-data.png"><span>暂无备选</span></div>
            </div>
          </div>
        </scroller>
        <div class="submit-btn" :class="{'select-active':isSelected('Worker')}" v-tap="isSelected('Worker')?selectWorkers():return">预约</div>
      </div>
    </swiper-item>
    <!-- <swiper-item>
      <div class="tab-swiper vux-center">3</div>
    </swiper-item> -->
  </swiper>
  <toast :show.sync="showToast" :text="toastText"></toast>
  <loading :show.sync="showLoading" text="正在预约，请稍候"></loading>
</div>
</template>

<script>
import Lib from 'assets/Lib.js'
import Group from 'vux-components/group'
import Cell from 'vux-components/cell'
import {
  Tab,
  TabItem
} from 'vux-components/tab'
import Swiper from 'vux-components/swiper'
import SwiperItem from 'vux-components/swiper-item'
import Scroller from 'vux-components/scroller'
import Toast from 'vux-components/toast'
import Loading from 'vux-components/loading'
import axios from 'axios'
Lib.M.auth(axios, true)
export default {
  data() {
    return {
      index: 0,
      tab: Lib.M.GetRequest().type == 2 ? '工长' : '门店',
      showToast: false,
      toastText: "",
      showLoading: false,
      workerList: [],
      shopList: [],
      selectWorker: [],
      selectShop: [],
      imgUrl: Lib.C.imgUrl
    }
  },
  components: {
    Group,
    Cell,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Scroller,
    Toast,
    Loading
  },
  ready() {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.cart) : {
      worker: [],
      shop: []
    }
    cart.worker.forEach((e) => {
      this.workerList.push(e)
    })
    shopInfoPipe(cart.shop).forEach((e) => {
      this.shopList.push(e)
    })
    this.$nextTick(() => {
      if (this.shopList.length) this.$refs.zc.reset()
      if (this.workerList.length) this.$refs.zx.reset()
    })
  },
  methods: {
    isSelect(type, id) {
      let listName = 'select' + type
      let list = eval("this." + listName)
      return !!~list.indexOf(id)
    },
    getScreenHeight() {
      return document.body.clientHeight
    },
    selectItem(type, id) {
      let listName = 'select' + type
      let list = eval("this." + listName)
      if (this.isSelect(type, id)) {
        list.$remove(id)
      } else {
        if (type == "Worker" && this.selectWorker.length == 2) return this.toastWorkerLimit()
        list.push(id)
      }
    },
    toastWorkerLimit() {
      this.toastText = "最多选择2位工长"
      this.showToast = true
      return false
    },
    del(type, id) {
      if (type === "Worker") {
        this.workerList.map((e) => {
          if (e.userId === id) {
            this.workerList.$remove(e)
          }
        })
      }
      window.localStorage.setItem('cart', JSON.stringify({
        worker: this.workerList,
        shop: this.shopList
      }))
      this.$nextTick(()=>{
        this.$refs.zx.reset()
      })
    },
    isSelected(type) {
      return !!this['select' + type].length
    },
    deleteShop(id) {
      let tempData = JSON.parse(localStorage.getItem("cart"))
      for (let i = tempData.shop.length - 1; i >= 0; i--) {
        if (tempData.shop[i][1] == id) {
          tempData.shop.$remove(tempData.shop[i])
        }
      }
      localStorage.setItem("cart", JSON.stringify(tempData))
      for (let j in this.shopList) {
        if (this.shopList[j].id == id) {
          this.shopList.$remove(this.shopList[j])
        }
      }
      this.$nextTick(()=>{
        this.$refs.zc.reset()
      })
    },
    selectShops() {
      let result = []
      this.selectShop.map((e) => {
        result.push(this.shopList[findIdIndex(e, this.shopList)])
      })
      localStorage.temp = JSON.stringify(result)
      this.goto('./select-shop.html')
    },
    addOrder() {
      let result = []
      this.selectShop.map((e) => {
        result.push(this.shopList[findIdIndex(e, this.shopList)])
      })
      localStorage.temp = JSON.stringify(result)
      this.goto('./add-order.html')
    },
    selectWorkers() {
      this.goto(`select-worker.html?select=${this.selectWorker.join('|')}`)
    },
    goto(url) {
      window.location.href = url
    }
  }
}

function shopInfoPipe(sbList) {
  let result = []
  for(let i=0; i<sbList.length; i++){
    // console.log(sbList[i])
    if (!isIdIn(sbList[i][1], result)) {
      result.push(infoPipe('store', sbList[i][1]))
      if(typeof(result[0]) == "undefined"){
        console.log("haha")
        result = []
      }
      else{
        result[result.length - 1].brands = [infoPipe('brand', sbList[i][0])]
      }
    } else {
      result[findIdIndex(sbList[i][1], result)].brands.push(infoPipe('brand', sbList[i][0]))
    }
  }
  // sbList.map((e) => {
    
  // })
  return result

  function isIdIn(id, array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id == id) return true
    }
    return false
  }

  function infoPipe(type, id) {
    let info = JSON.parse(localStorage.info)
    // console.log(info)
    let a = info[type + "Info"]
    for (let i of a) {
      if (i.id == id) 
        return i
    }
    // let b = {}
    // a.map(function(e){
    //   if(e.id == id){
    //     b = e
    //   }
    // })
    // console.log(b)
    // if(JSON.stringify(b) == "{}"){
    //   console.log("haha")
    // }
    // else{
    //   return b
    // }
    
  }


}

function findIdIndex(id, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id == id) return i
  }
  return -1
}
</script>