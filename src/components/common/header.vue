<!-- 顶部信息栏 -->
<template>
  <div id="top_head">
    <header id="topbar">
      <el-row>
        <el-col :span="8" class="topbar-left">
          <i class="el-icon-s-promotion"></i>
          <span class="title">基于大模型的测试用例断言生成方法</span>
        </el-col>
        <el-col :span="16" class="topbar-right">
          <i :class="[flag ? 'el-icon-s-unfold' : 'el-icon-s-fold']" @click="toggle()"></i>
        </el-col>
      </el-row>
    </header>
  </div>

</template>

<script>
import store from '@/vuex/store'
import {mapState,mapMutations} from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: mapState(["flag","menu"]),
  methods: {
    //左侧栏放大缩小
    ...mapMutations(["toggle"]),
  },
  store
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
#topbar {
  position: relative;
  z-index: 10;
  background-color: #124280;
  height: 80px;
  line-height: 80px;
  color: #fff;
  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.5);
}
#topbar .topbar-left {
  height: 80px;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
  overflow: hidden;
}
.topbar-left .el-icon-office-building {
  font-size: 40px;
  padding-top: 20px;
  margin-right: 10px;
}
.topbar-left .el-icon-s-promotion {
  font-size: 40px;
  padding-top: 20px;
  margin-right: 10px;
}

.topbar-left .title {
  font-size: 20px;
  cursor: pointer;
  margin-right: 130px;
}
.topbar-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.topbar-right .user-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.topbar-right .el-icon-caret-left {
  font-size: 30px;
  margin-left: -120px;
}
.topbar-right .el-icon-caret-right {
  font-size: 30px;
  margin-left: -120px;
}
.topbar-right .el-icon-s-unfold {
  font-size: 30px;
      margin-left: -120px;
      margin-top: 25px;
}
.topbar-right .el-icon-s-fold {
  font-size: 30px;
      margin-left: -120px;
      margin-top: 25px;
}
.topbar-right .user {
  position: relative;
  margin-right: 40px;
  display: flex;
}
.topbar-right .user .user-img {
  margin-top: 15px;
  margin-left: -120px;
  cursor: pointer;
}
</style>
