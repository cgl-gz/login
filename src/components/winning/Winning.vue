<template>
  <div class="winning">
    <!-- 头部 -->
    <!-- <div class="item-header">
      <span class="back">{{ back }}</span>
      <span class="title">我的中奖记录</span>
    </div> -->

    <!-- 内容 -->
    <div class="container">
      <ul v-show="winningState != 0">
        <li class="item" v-for="(item, index) in winningMessage" :key="index">
          <!-- 头部 -->
          <div class="upper-part">
            <span class="left">已中奖</span>
            <span class="right">详情></span>
          </div>

          <div class="semicircle-left"></div>
          <div class="semicircle-right"></div>

          <!-- 中间 -->
          <div class="message">
            <!-- 左侧 图片信息 -->
            <div class="message-img">
              <img src="#" alt="中奖信息" />
            </div>
            <!-- 右侧 具体信息 -->
            <div class="wrapper">
              <div class="message-item">
                <div class="row">
                  <span class="left">获奖者:</span>
                  <span class="right">{{ getUserName }}</span>
                </div>
                <div class="row">
                  <span class="left">获奖时间:</span>
                  <span class="right">{{ item.time }}</span>
                </div>
                <div class="row">
                  <span class="left">商品期数:</span>
                  <span class="right">{{ item.periods }}</span>
                </div>
              </div>

              <div class="win-num">我的幸运号码：{{ item.number }}</div>
            </div>
          </div>

          <!-- 底部 -->
          <div class="base">
            <div class="win-state">
              <div>
                状态：{{ codeTransition(item.state) }} 状态：{{
                  codeTransition(item.state)
                }}
                状态：{{ codeTransition(item.state) }} 状态：{{
                  codeTransition(item.state)
                }}
                状态：{{ codeTransition(item.state) }}状态：{{
                  codeTransition(item.state)
                }}
                状态：{{ codeTransition(item.state) }} 状态：{{
                  codeTransition(item.state)
                }}
                状态：{{ codeTransition(item.state) }} 状态：{{
                  codeTransition(item.state)
                }}状态：{{ codeTransition(item.state) }}
              </div>
              <div class="deadline">过期时间：{{ item.deadline }}</div>
            </div>
            <!-- <div class="button-state"> -->
            <button
              v-if="getButtonState(item.state)"
              :class="{ forbid: item.state == 1 }"
            >
              {{ getButtonState(item.state) }}
            </button>
            <!-- </div> -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      back: "<",
      winningState: 1,
      winningMessage: [
        {
          name: "趣友138****2314",
          time: "2019-12-12",
          periods: "20190101",
          number: "10000023",
          state: 0,
          deadline: "2020-09-01 12:21:21"
        },
        {
          name: "趣友138****2314",
          time: "2019-12-12",
          periods: "20190101",
          number: "10000023",
          state: 1,
          deadline: "2020-09-01 12:21:21"
        },
        {
          name: "趣友138****2314",
          time: "2019-12-12",
          periods: "20190101",
          number: "10000023",
          state: 2,
          deadline: "2020-09-01 12:21:21"
        },
        {
          name: "趣友138****2314",
          time: "2019-12-12",
          periods: "20190101",
          number: "10000023",
          state: 3,
          deadline: "2020-09-01 12:21:21"
        }
      ]
    };
  },
  methods: {
    codeTransition(state) {
      let list = ["待补充地址", "已过期", "发货中", "已签收"];
      return list[state];
    },
    getButtonState(state) {
      let list = ["填写地址", "填写地址", "查看物流"];
      return list[state];
    }
  },
  computed: {
    getUserName() {
      console.log(this.$store.state.userName);
      return this.$store.state.userName;
    }
  }
  // beforeRouteEnter: (to, from, next) => {
  //   next(vm => {
  //     let state = vm.$store.state.isLogin;
  //     console.log(state);
  //     if (state) {
  //       console.log("已登录");
  //       vm.$router.push("/winning");
  //     } else {
  //       vm.$router.push("/login");
  //       alert("未登录请先登录");
  //     }
  //   });
  // }
};
</script>

<style lang="scss" scoped>
.winning {
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  background: #ccc;
  overflow: hidden;
  .item {
    width: 100%;
    position: relative;
    background: white;
    margin: 0 0 15px 0;
    border-radius: 5px;
    .upper-part {
      // height: 20px;
      border-bottom: 2px dotted #ccc;
      padding: 15px;
      line-height: 20px;
      overflow: hidden;
      .left {
        float: left;
        font-size: 1.3rem;
      }
      .right {
        float: right;
        color: blueviolet;
      }
    }
    .semicircle-left {
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background: #ccc;
      position: absolute;
      top: 43px;
      left: -8px;
    }

    .semicircle-right {
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background: #ccc;
      position: absolute;
      top: 43px;
      right: -8px;
    }

    .message {
      display: flex;
      // height: 100px;
      padding: 15px;
      border-bottom: 3px solid #ccc;
      overflow: hidden;
      .message-img {
        flex: 0 0 100px;
        height: 100px;
        margin: 0 15px 0 0;
        background: #999;
        font-size: 0.6rem;
        text-align: center;
      }
      .wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 0.7rem;
        // overflow: hidden;
        .message-item {
          width: 100%;
          word-wrap: break-word;
          word-break: break-all;
          .row {
            display: flex;
            .left {
              color: #999;
              flex: 0 0 60px;
            }
            .right {
              flex: 1;
            }
          }
        }
        .win-num {
          width: 100%;
          // height: 25px;
          background: blueviolet;
          color: white;
          text-align: center;
          line-height: 25px;
        }
      }
    }
    .base {
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .win-state {
        flex: 1;
        font-size: 0.6rem;
        color: #999;
      }
      // .button-state {
      //   flex: 0 0 80px;
      //   .button-state button {
      //     border: 1px solid blueviolet;
      //     color: blueviolet;
      //     background: white;
      //     border-radius: 3px;
      //     line-height: 30px;
      //   }
      // }
      button {
        height: 40px;
        flex: 0 0 80px;
        border: 1px solid blueviolet;
        color: blueviolet;
        background: white;
        border-radius: 3px;
        line-height: 30px;
      }

      .forbid {
        // pointer-events: none;
        cursor: not-allowed;
        border: 1px solid #999 !important;
        color: #999 !important;
      }
    }
    &::before {
      content: " ";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: #ccc;
      z-index: -100;
    }
  }
}
</style>
