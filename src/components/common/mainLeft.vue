<!--左边下拉导航栏-->
<template>
  <div id="left">
  <el-menu
      active-text-color="darkturquoise"
      text-color="#ffffff"
      :default-active="this.$route.path"
      class="el-menu-vertical-demo"
      :collapse="flag"
      :unique-opened="true"
      background-color="#124280"
      menu-trigger="click" router>
	  <el-menu-item class="el-menu-item" @click="handleTitle(0)" :index="'/'" >
	  		  <div :class="[elmenuitemischoose[0] ? 'selected-left-width' : 'left-width']">
	  		    <i class="iconfont" :class="'el-icon-s-home'"></i>
	  		    <span slot="title" class="title">Home</span>
	  		  </div>
	  </el-menu-item>
	  <el-menu-item class="el-menu-item" @click="handleTitle(1)" :index="'/Pynguin_1'" >
		  <div :class="[elmenuitemischoose[1] ? 'selected-left-width' : 'left-width']">
		    <i class="iconfont" :class="'el-icon-circle-plus-outline'"></i>
		    <span slot="title" class="title">Pynguin</span>
		  </div>
	  </el-menu-item>
	  <el-menu-item class="el-menu-item" @click="handleTitle(2)" :index="'/BaseChatgpt_1'" >
		  <div :class="[elmenuitemischoose[2] ? 'selected-left-width' : 'left-width']">
		    <i class="iconfont" :class="'el-icon-zoom-in'"></i>
		    <span slot="title" class="title">BaseChatgpt</span>
		  </div>
	  </el-menu-item>
	  <el-menu-item class="el-menu-item" @click="handleTitle(3)" :index="'/DfPrompting_1'" >
		  <div :class="[elmenuitemischoose[3] ? 'selected-left-width' : 'left-width']">
		    <i class="iconfont" :class="'el-icon-key'"></i>
		    <span slot="title" class="title">DfPrompting</span>
		  </div>
	  </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState , mapActions } from 'vuex'
export default {
  name: "mainLeft",
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      elmenuitemischoose: state => state.elmenuitemischoose,
      currentelmenuitem: state => state.currentelmenuitem,
      flag: state => state.flag,  // 这里假设 flag 已经定义在 Vuex 中
      menu: state => state.menu   // 这里假设 menu 已经定义在 Vuex 中
    })
  },
  methods: {
    ...mapActions([
      'handleTitle'  // 映射 Vuex actions
    ]),
    handleVuexTitle(index) {
      this.handleTitle(index);
    }
  },
  store
}
</script>

<style scoped>
.el-menu-vertical-demo .el-submenu__title {
  overflow: hidden;

}
.left-width .iconfont {
  font-size: 22px;
  color: #fff;
}
.left-width .title {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 14px;
}
.left-width {
  width: 213px;
}
.selected-left-width{
  width: 213px;
}
.selected-left-width .iconfont {
  font-size: 22px;
  color: darkturquoise;
}
.selected-left-width .title {
  color: darkturquoise;
  font-size: 18px;
  font-weight: bold;
  margin-left: 14px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 100%;
}
#left {
  height: 100%;
  background-color: #124280;
  z-index: 0;
}
.el-submenu {
  border-bottom: 1px solid #eeeeee0f !important;
}
.el-submenu__title:hover {
  background-color: #fff;
}
.el-submenu__title i {
    color: #fbfbfc !important;
}
.el-menu .el-menu--inline li{
  font-size: 16px;
  text-align: center;
}
</style>
