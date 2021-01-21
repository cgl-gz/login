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

          <!-- 中间 -->
          <div class="message">
            <!-- 左侧 图片信息 -->
            <div class="message-img">
              <img src="#" alt="中奖信息" />
            </div>
            <!-- 右侧 具体信息 -->
            <div class="wrapper">
              <div class="message-item">
                <div>
                  <span class="left">获奖者:</span>
                  <span class="right">{{ item.name }}</span>
                </div>
                <div>
                  <span class="left">获奖时间:</span>
                  <span class="right">{{ item.time }}</span>
                </div>
                <div>
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
              <div class="">状态：{{ codeTransition(item.state) }}</div>
              <div class="deadline">过期时间：{{ item.deadline }}</div>
            </div>
            <div class="button-state">
              <button
                v-if="getButtonState(item.state)"
                :class="{ active: item.state == 1 }"
              >
                {{ getButtonState(item.state) }}
              </button>
            </div>
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

<style scoped>
.winning {
  width: 100%;
  height: 100%;
  background: #ccc;
  overflow: hidden;
}

/* .item-header {
  width: 100%;
  height: 5vh;
  background: white;
  text-align: center;
  line-height: 5vh;
  position: relative;
}

.item-header .back {
  position: absolute;
  left: 15px;
  font-size: 1.5rem;
} */
.container .item {
  margin: 15px;
  background: white;
  border-radius: 5px;
}

.upper-part {
  height: 7vh;
  border-bottom: 2px dotted #ccc;
  text-align: center;
  line-height: 7vh;
}

.upper-part .left {
  float: left;
  font-size: 1.5rem;
  padding: 0 0 0 15px;
}

.upper-part .right {
  float: right;
  padding: 0 15px 0 0;
  color: blueviolet;
}

.upper-part:after {
  contain: "";
  display: block;
  clear: both;
}

.message {
  border-bottom: 3px solid #ccc;
  display: flex;
  align-items: center;
  padding: 2vh;
  overflow: hidden;
}

.message-img {
  flex: 0 0 30%;
  height: 16vh;
  background: #999;
  margin: 0 2vh 0 0;
}

.wrapper {
  flex: 1;
  height: 16vh;
  position: relative;
}

.message-item {
  width: 100%;
  position: absolute;
  top: 0;
  font-size: 0.8rem;
}

.message-item div {
  width: 100%;
  display: flex;
}

.message-item div .left {
  flex: 0 0 40%;
  color: #999;
}

.message-item div .right {
  flex: 1;
}

.win-num {
  width: 100%;
  /* height: 3vh; */
  position: absolute;
  bottom: 0;
  text-align: center;
  background: blueviolet;
  color: white;
  line-height: 3vh;
}

.base {
  width: 100%;
  height: 8vh;
  padding: 2vh;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
}

.win-state {
  color: #999;
  font-size: 0.8rem;
}

.button-state button {
  border: 1px solid blueviolet;
  border-radius: 2px;
  color: blueviolet;
}

.active {
  pointer-events: none;
  cursor: not-allowed;
  border: 1px solid #999 !important;
  color: #999 !important;
}
</style>
