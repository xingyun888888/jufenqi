<style scoped lang="less">
footer {
    position: fixed;
    width: 100%;
    height: 50px;
    left: 0;
    bottom:0;
    border-top: 1px solid #d8d8d8;
    z-index: 2;
    background-color: #fff;
    div {
        position: relative;
        display: inline-block;
        width: 33%;
        height: 100%;
        img {
          position: absolute;
          top: 6px;
          left: 50%;
          margin-left: -10px;
            width: 20px;
            height: 20px;
        }
        .nav-class-name{
          position: absolute;
          bottom: 4px;
          left:0;
          width: 100%;
          text-align: center;
          font-size: 12px;
          font-weight: 200;
          color:#999;
        }
    }
}
.active .nav-class-name{
    color: #FD9A4A!important;
}</style>

<template>
<footer>
  <div class="nav-class" @click="gotoPage(class.ename)" v-for="class in moduleClass" :class="{'active':isSelected(class.ename)}">
    <img :src="isSelected(class.ename)?class.actIcon:class.icon">
    <span class="nav-class-name">{{class.name}}</span>
  </div>
</footer>
</template>

<script>
import Lib from 'assets/Lib.js'
import indexIcon from 'assets/img/index.png'
import indexIconAct from 'assets/img/index-active.png'
import insIcon from 'assets/img/ins.png'
import insIconAct from 'assets/img/ins-active.png'
import userIcon from 'assets/img/user.png'
import userIconAct from 'assets/img/user-active.png'
export default {
  data() {
    return {
      moduleClass: [{
        name: '首页',
        ename: 'index',
        icon: indexIcon,
        actIcon: indexIconAct
      }, {
        name: '分期',
        ename: 'instalment',
        icon: insIcon,
        actIcon: insIconAct
      }, {
        name: '个人',
        ename: 'usercenter',
        icon: userIcon,
        actIcon: userIconAct
      }]
    }
  },
  methods: {
    isSelected(page) {
      return Lib.M.GetThisPage() == page
    },
    gotoPage(page) {
      location.href = page + ".html"
    }
  },
  ready() {
    var footbar = document.querySelector("footer")
  }
}
</script>

