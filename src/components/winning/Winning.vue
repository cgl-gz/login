<template>
  <div class="winning">
    <!-- 头部 -->
    <div class="item-header">
      <span class="back"> > </span>
      <span class="title">我的中奖记录</span>
    </div>

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
                <span class="left">获奖者:</span>
                <span class="right">{{ item.name }}</span>
              </div>
              <div class="message-item">
                <span class="left">获奖时间:</span>
                <span class="right">{{ item.time }}</span>
              </div>
              <div class="message-item">
                <span class="left">商品期数:</span>
                <span class="right">{{ item.periods }}</span>
              </div>
              <div class="win-num">我的幸运号码：{{ item.number }}</div>
            </div>
          </div>

          <!-- 底部 -->
          <div class="win-state">
            <div class="state"></div>
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
  }
};
</script>

<style scoped>
.winning {
  width: 100%;
  height: 100vh;
  background: #ccc;
}

.item-header {
  width: 100%;
  height: 5vh;
  background: white;
  text-align: center;
  line-height: 5vh;
}
.item-header .back {
  float: left;
}

.item {
  margin: 15px;
  background: white;
  border-radius: 5px;
}

.upper-part {
  height: 7vh;
  border-bottom: 1px dotted #ccc;
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
  height: 20vh;
  border-bottom: 3px solid #ccc;
  display: flex;
  align-items: center;
  padding: 0 2vh;
}

.message-img {
  flex: 0 0 16vh;
  height: 16vh;
  background: #eee;
  margin: 0 2vh 0 0;
}
</style>
