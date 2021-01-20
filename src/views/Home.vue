<template>
  <div class="home">
    <router-link to="/login" class="item">登录页面</router-link>
    <router-link to="/winning" class="item">中奖页面</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

<style scoped>
.home {
  text-align: center;
  margin: 200px 0;
}
.item {
  display: inline-block;
  width: 100px;
  height: 30px;
  margin: 0 20px;
  border: 0 solid black;
  line-height: 30px;
  border-radius: 5px;
  background: #aaa;
  color: #eee;
}
</style>
