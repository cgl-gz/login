<template>
  <div class="Winning">
    <!-- 头部 -->
    <div class="item-header">
      <span class="back">></span>
      <span class="title">我的中奖记录</span>
    </div>

    <!-- 内容 -->
    <div class="container">
      <ul v-show="winningState != 0">
        <li v-for="(item, index) in winningMessage" :key="index">
          <div class="message">
            <!-- 左侧图片信息 -->
            <div class="message-item">
              <img src="#" alt="中奖信息" />
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

<style scoped></style>
