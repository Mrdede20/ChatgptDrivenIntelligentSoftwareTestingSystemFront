<template>
  <div
    class="DfPrompting"
    v-loading="is_processing"
    element-loading-text="正在处理中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <h1>DfPrompting</h1>
    <el-steps :active="activeIndex" align-center>
      <el-step title="错误程序" icon="el-icon-upload"></el-step>
      <el-step title="正确程序" icon="el-icon-upload"></el-step>
      <el-step title="程序意图" icon="el-icon-upload"></el-step>
      <el-step title="分析结果" icon="el-icon-data-analysis"></el-step>
    </el-steps>
    <!-- 如果 downloadLinks 为空，显示暂无数据 -->
    <el-empty
      v-if="!downloadLinks.length && !is_processing"
      description="暂无数据"
    ></el-empty>
    <!-- 分析结果：单个链接显示 -->
    <div v-if="downloadLinks.length > 0" class="section-container">
      <h3 class="section-title">分析结果:</h3>
      <a href="#" @click="downloadanalyzeResults()" class="section-link">
        分析结果.xlsx
      </a>
    </div>
    <!-- 测试代码：链接列表显示 -->
    <div v-if="downloadLinks.length > 0" class="section-container">
      <h3 class="section-title">测试代码:</h3>
      <a href="#" @click="downloadTestCodeZip()" class="section-link">
        测试代码.zip
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      activeIndex: 4,
      is_processing: false,
      files: [],
      downloadLinks: []  // 存储下载链接
    };
  },
  created() {
    this.DfPrompting();
  },
  methods: {
    downloadTestCodeZip() {
      window.location.href = 'http://localhost:5000/download/testcodezip'; // Flask 服务器的下载路由
    },
    downloadanalyzeResults(){
      window.location.href = 'http://localhost:5000/download/DfPrompting'; // Flask 服务器的下载路由
    },
    DfPrompting() {
      this.is_processing = true;
      axios.get('http://localhost:5000/DfPrompting')  // 修改为 GET 请求，并且不需要 formData
        .then((res) => {
          this.downloadLinks = res.data.files;  // 存储从服务器返回的下载链接
          // console.log("服务器返回的下载链接：", res.data.files);
          this.$message({
            message: '代码分析成功! 文件列表已更新，可下载详细查看',
            type: 'success'
          });
          this.is_processing = false;
        }).catch((error) => {
          // console.log("请求失败，错误信息：", error);
          this.$message({
            message: '分析失败!',
            type: 'error'
          });
          this.is_processing = false;
        });
    }
  }
}
</script>

<style scoped>
  .DfPrompting{
    height: 100%;
    background-color: white;
  }
  h1 {
    text-align: center; /* 让标题居中 */
    font-family: "Times New Roman", Times, serif; /* 使用传统的字体 */
    font-size: 36px; /* 设置字体大小 */
    color: #333; /* 设置文字颜色为深灰色 */
    margin-bottom: 2%;
    padding-top: 1%;
  }
  .button-container {
    display: flex;
    justify-content: center; /* 这会水平居中内部的按钮 */
  }
  .section-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* 中心对齐容器内的所有元素 */
    margin: 20px 0; /* 上下外边距 */
    width: 100%; /* 容器宽度 */
  }

  .section-title {
    width: 90%; /* 标题宽度稍小于容器宽度，给边缘留出空间 */
    text-align: left; /* 标题居左 */
    margin-bottom: 10px; /* 标题与内容之间的间距 */
    color: #333; /* 深灰色字体 */
    font-size: 1.2em; /* 字体大小 */
    align-self: flex-start; /* 标题文本居左 */
    margin-left: 20px; /* 标题左边距 */
  }

  .section-link, .section-link-item a {
    display: block; /* 块级元素，占满整行 */
    width: 93.9%; /* 链接宽度 */
    margin-top: 5px; /* 上下5px外边距，左右10%外边距实现居中 */
    margin-left: -1.5%;
    padding: 12px 20px; /* 内边距 */
    background-color: #f4f4f9; /* 背景色 */
    border: 1px solid #dcdcdc; /* 边框 */
    border-radius: 5px; /* 圆角边框 */
    color: #0056b3; /* 字体颜色 */
    text-decoration: none; /* 去除下划线 */
    text-align: left; /* 文本居左 */
    font-size: 1.1em; /* 字体大小 */
    transition: background-color 0.2s, transform 0.2s; /* 平滑过渡效果 */
  }


  .section-link:hover, .section-link-item a:hover {
    background-color: #e5e5ea; /* 悬浮时背景色变化 */
    transform: translateY(-2px); /* 轻微向上移动 */
    box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* 添加阴影效果 */
  }


  .download-section {
    display: flex;
    flex-direction: column;
    align-items: center; /* 保持整体居中对齐 */
    margin: 20px 0; /* 上下外边距 */
    width: 100%; /* 容器宽度 */
  }

  .download-title {
    width: 90%; /* 标题宽度稍小于容器宽度，给边缘留出空间 */
    text-align: left; /* 标题居左 */
    margin-bottom: 10px; /* 标题与内容之间的间距 */
    color: #333; /* 深灰色字体 */
    font-size: 1.2em; /* 字体大小 */
    align-self: flex-start; /* 标题文本居左 */
    margin-left: 20px; /* 标题左边距 */
  }

  ul {
    padding: 0;
    list-style: none;
    width: 100%;
  }

  .download-link a {
    display: block; /* 块级元素，占满整行 */
    width: 94%; /* 链接宽度 */
    margin: 5px 0.8%; /* 上下5px外边距，左右10%外边距实现居中 */
    padding: 12px 20px; /* 内边距 */
    background-color: #f4f4f9; /* 背景色 */
    border: 1px solid #dcdcdc; /* 边框 */
    border-radius: 5px; /* 圆角边框 */
    color: #0056b3; /* 字体颜色 */
    text-decoration: none; /* 去除下划线 */
    text-align: left; /* 文本居左 */
    font-size: 1.1em; /* 字体大小 */
    transition: background-color 0.2s, transform 0.2s; /* 平滑过渡效果 */
  }

  .download-link a:hover {
    background-color: #e5e5ea; /* 悬浮时背景色变化 */
    transform: translateY(-2px); /* 轻微向上移动 */
    box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* 添加阴影效果 */
  }

  .scrollable-list {
    width: 100%;
    max-height: 300px; /* 设置容器的最大高度 */
    overflow-y: auto; /* 当内容过多时，显示垂直滚动条 */
  }

</style>
