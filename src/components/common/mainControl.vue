<template>
  <div id="index">
    <header1 class="topbar"></header1>
    <section class="container">
      <div class="left_side">
        <mainLeft></mainLeft>
      </div>
      <div class="main_wrapper">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import header from '@/components/common/header'
import mainLeft from '@/components/common/mainLeft'
export default {
  components: {
    header1: header,
    mainLeft: mainLeft
  },
  data() {
    return {
      username: ''
    }
  }
}
</script>

<style lang="scss" scoped>
html, body {
  height: 100%;
  margin: 0;
}

#index {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  background-color: #fff;
  flex: 1; /* 让container填满除了header以外的剩余空间 */
}

.main_wrapper {
  overflow: hidden;
  flex: 1;
  background-color: #fff;
}
</style>
