<style scoped lang="less">
.order {
    width: 100%;
    height: auto;
    background-color: #fff;
    margin-bottom: 10px;
    .status {
        position: relative;
        height: 30px;
        width: 100%;
        border-bottom: 1px solid #eee;
        img {
            position: absolute;
            top: 5px;
            left: 15px;
            height: 20px;
            width: 13px;
        }
        .status-name {
            position: absolute;
            height: 100%;
            line-height: 30px;
            font-size: 12px;
            color: #393939;
            top: 0;
            left: 38px;
        }
        .order-date {
            position: absolute;
            height: 100%;
            line-height: 30px;
            font-size: 12px;
            color: #393939;
            top: 0;
            right: 15px;
        }
    }
    .content {
        width: calc(~"100% - 15px");
        padding-left: 15px;
        height: auto;
        .address {
            height: 50px;
            width: 100%;
            border-bottom: 1px solid #eee;
            position: relative;
            line-height: 50px;
            font-size: 12px;
        }
        .user-info {
            height: 50px;
            width: 100%;
            border-bottom: 1px solid #eee;
            position: relative;
            .user-name {
                position: absolute;
                font-size: 16px;
                top: 6px;
                left: 0;
            }
            .user-tel {
                position: absolute;
                bottom: 6px;
                left: 0;
                font-size: 12px;
                color: #393939;
            }
            .more {
                position: absolute;
                color: #ff9736;
                right: 15px;
                top: 19px;
                font-size: 12px;
            }
        }
        .people {
            position: relative;
            color: #393939;
            height: 30px;
            line-height: 30px;
            padding-left: 30px;
            width: calc(~"100% - 30px");
            border-bottom: 1px solid #eee;
            font-size: 12px;
            .type {
                position: absolute;
                height: 20px;
                width: 20px;
                left: 0;
                top: 5px;
            }
            .tel {
                position: absolute;
                height: 20px;
                width: 20px;
                right: 15px;
                top: 5px;
            }
        }
        .store {
            position: relative;
            height: 55px;
            width: 100%;
            border-bottom: 1px solid #eee;
            .store-name {
                line-height: 55px;
                text-align: left;
                font-size: 12px;
                color: #393939;
            }
            .value {
                position: absolute;
                height: 100%;
                line-height: 55px;
                right: 15px;
                top: 0;
                color: #EC5835;
            }
        }
        .brand {
            position: relative;
            height: 30px;
            width: 100%;
            line-height: 30px;
            text-align: left;
            font-size: 12px;
            border-bottom: 1px solid #eee;
        }
        .operate {
            height: 30px;
            width: calc(~"100% - 30px");
            padding: 7px 15px;
            text-align: right;
            .bottom {
                display: inline-block;
                height: 30px;
                width: 70px;
                line-height: 30px;
                text-align: center;
                color: #999;
                border: 1px solid #999;
                border-radius: 5px;
                font-size: 12px;
                margin-left: 20px;
            }
        }
    }
}
</style>

<template>
<div class="order">
  <div class="status">
    <img :src="statusImg">
    <div class="status-name">{{Status.zx[order.status].name}}</div>
    <div class="order-date">{{getTime(order.createdAt)}}</div>
  </div>
  <div class="content">
    <div class="user-info">
      <div class="user-name">{{order.customerName||order.appt.customerName}}</div>
      <div class="user-tel" v-tap="goto('tel:'+order.customerMobile||order.appt.customerMobile)">{{order.customerMobile||order.appt.customerMobile}}</div>
      <div class="more" v-tap="goto('./zx-order.html?orderNo='+order.orderNo)">查看详情</div>
    </div>
    <div class="address">{{order.orderLocation}}{{order.orderAddress}}</div>
    <!-- 相关人员 -->
    <div class="people">
      <img class="type" :src="managerImg"> {{order.manager.nickname}}
      <img class="tel" :src="telImg" v-tap="goto('tel:'+order.manager.mobile)">
    </div>
    <div class="people">
      <img class="type" :src="projectManagerImg"> {{order.projectManager.nickname}}
      <img class="tel" :src="telImg" v-tap="goto('tel:'+order.projectManager.mobile)">
    </div>
    <div v-if="order.planList">
      <div class="people" v-for="plan in order.planList">
        <img class="type" :src="foremanImg"> {{plan.foreman.nickname}}
      </div>
    </div>
    <div class="people" v-else>
      <img class="type" :src="foremanImg"> {{order.foreman.nickname}}
    </div>


    <!-- 用户操作的按钮 -->
    <div v-if="order.status==1||order.status==7" class="operate">
      <!-- <div class="bottom" v-if="order.status==2">继续支付</div> -->
      <!-- <div class="bottom" v-if="order.status==4||order.status==6">退款</div>-->
      <div class="bottom" v-if="order.status==7" v-tap="deleteOrder(order.orderNo)">删除</div>
      <div class="bottom" v-if="order.status==1" v-tap="cancel(order.orderNo)">取消预约</div>
      <!-- <div class="bottom" v-if="order.status==5" v-tap="receive(order.orderNo)">确认收货</div> -->
    </div>
  </div>
</div>



</template>




<script>
import Lib from 'assets/Lib.js'
import statusImg from 'common/assets/images/status-org.png'
import managerImg from 'common/assets/images/role/manager.png'
import foremanImg from 'common/assets/images/role/foreman.png'
import projectManagerImg from 'common/assets/images/role/project-manager.png'
import telImg from 'common/assets/images/tel-org.png'
import Status from 'common/status'
import axios from 'axios'
Lib.M.auth(axios)
export default {
  data() {
    return {
      statusImg,
      managerImg,
      foremanImg,
      projectManagerImg,
      telImg,
      Status,
    }
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  computed: {
    order() {
      return this.data
    }
  },
  methods: {
    getTime(timeStamp) {
      var d = new Date(timeStamp * 1000);
      var Y = d.getFullYear() + '-';
      var M = (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) + '-';
      var D = (d.getDate() < 10 ? '0' + (d.getDate()) : d.getDate());
      return Y + M + D
    },
    goto(url) {
      location.href = url
    },
    cancel(orderNo){
      this.$parent.$parent.$parent.$parent.tempOrderNo = orderNo
      this.$parent.$parent.$parent.$parent.showConfirm.cancel = true
    },
    deleteOrder(orderNo){
      this.$parent.$parent.$parent.$parent.tempOrderNo = orderNo
      this.$parent.$parent.$parent.$parent.showConfirm.delete = true
    }
  },
  ready() {}
}
</script>