<template>
   <div id="hello">
	    <el-carousel :interval="5000" arrow="always">
	   	 <el-carousel-item>
	   			<img src="../../assets/img/login_bg.jpg" class="image" @click="flush()">
	   	 </el-carousel-item>
			 <el-carousel-item>
			 	  <img src="../../assets/img/Pynguin.png" class="image" @click="toPynguin()">
			 </el-carousel-item>
			 <el-carousel-item>
			 	  <img src="../../assets/img/BaseChatgpt.png" class="image" @click="toBaseChatgpt()">
			 </el-carousel-item>
			 <el-carousel-item>
			 	  <img src="../../assets/img/DfPrompting.png" class="image" @click="toDfPrompting()">
			 </el-carousel-item>
	   	</el-carousel>
   </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState , mapActions } from 'vuex'
export default {
	data() {
		return {

		};
	},
	methods:{
    ...mapActions([
      'handleTitle'  // 映射 Vuex actions
    ]),
    handleVuexTitle(index) {
      this.handleTitle(index);
    },
		toPynguin(){
      this.handleTitle(1);
		 	this.$router.push({ path: "/Pynguin_1" });
		},
		toBaseChatgpt(){
      this.handleTitle(2);
		 	this.$router.push({ path: "/BaseChatgpt_1" });
		},
		toDfPrompting(){
      this.handleTitle(3);
		 	this.$router.push({ path: "/DfPrompting_1" });
		},
    flush(){
      this.handleTitle(0);
      this.$router.go(0);
    }
	},
  store
}
 </script>
 <style lang="scss" scoped>
 .image {
   cursor: pointer;
   top: 0;
   left: 0;
   width: 100%;
   overflow-y: auto;
   height: 100%;
   background-color: #b6bccdd1 !important;
   background-size:100% 100%;
   background-attachment:fixed;
 }
#hello /deep/ .el-carousel__container {
  position: relative;
  height: calc(100vh - 80px); /* 整个屏幕高度减去80px */
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
 </style>
