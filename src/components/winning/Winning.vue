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
            <span class="left">已中奖 </span>
            <span class="right">详情></span>
          </div>

          <div class="semicircle-left"></div>
          <div class="semicircle-right"></div>

          <!-- 中间 -->
          <div class="message">
            <!-- 左侧 图片信息 -->
            <div class="message-img">
              <img
                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2829873283,1443710504&fm=26&gp=0.jpg"
                alt="中奖信息"
              />
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
                  <span class="right">{{ item.time }} </span>
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
              <div>状态：{{ codeTransition(item.state) }}</div>
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
  padding: 0.3rem;
  box-sizing: border-box;
  color: rgb(79, 79, 79);
  background: rgb(229, 229, 229);
  overflow: hidden;
  .item {
    width: 100%;
    position: relative;
    background: white;
    margin: 0 0 0.3rem 0;
    border-radius: 0.05rem;
    font-size: 0.22rem;
    .upper-part {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.02rem dashed rgb(213, 213, 213);
      padding: 0.3rem;
      position: relative;
      .left {
        flex: 1;
        margin-right: 0.1rem;
        font-size: 0.31rem;
      }
      .right {
        flex: 0 0 0.8rem;
        font-size: 0.26rem;
        color: rgb(101, 73, 200);
      }
      &::after {
        content: " ";
        width: 0.11rem;
        height: 0.22rem;
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(50%);
        border-radius: 0 0.11rem 0.11rem 0;
        background: rgb(229, 229, 229);
      }
      &::before {
        content: " ";
        width: 0.11rem;
        height: 0.22rem;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translateY(50%);
        border-radius: 0.11rem 0 0 0.11rem;
        background: rgb(229, 229, 229);
      }
    }

    .message {
      display: flex;
      padding: 0.3rem;
      border-bottom: 0.02rem solid rgb(229, 229, 229);
      overflow: hidden;
      .message-img {
        flex: 0 0 2.27rem;
        height: 2.14rem;
        margin-right: 0.3rem;
        background: rgb(186, 186, 186);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .message-item {
          width: 100%;
          word-wrap: break-word;
          word-break: break-all;
          .row {
            display: flex;
            .left {
              flex: 0 0 1.5rem;
              padding-bottom: 0.1rem;
            }
            .right {
              flex: 1;
              padding-bottom: 0.1rem;
            }
          }
        }
        .win-num {
          width: 100%;
          background: rgb(101, 73, 200);
          color: white;
          text-align: center;
          line-height: 0.46rem;
        }
      }
    }
    .base {
      padding: 0.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .win-state {
        flex: 1;
        margin-right: 0.1rem;
        .deadline {
          padding-top: 0.1rem;
        }
      }
      button {
        flex: 0 0 1.96rem;
        padding: 0.09rem 0;
        font-size: 0.27rem;
        border: 0.02rem solid rgb(101, 73, 200);
        color: rgb(101, 73, 200);
        background: white;
        border-radius: 0.04rem;
      }

      .forbid {
        // pointer-events: none;
        cursor: not-allowed;
        border: 0.02rem solid rgb(179, 179, 179) !important;
        color: rgb(179, 179, 179) !important;
      }
    }
    &::before {
      content: " ";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgb(229, 229, 229);
      z-index: -100;
    }
  }
}
</style>
