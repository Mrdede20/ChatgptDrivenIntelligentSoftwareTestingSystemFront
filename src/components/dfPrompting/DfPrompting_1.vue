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
    <el-upload
      class="upload-demo"
      :action="'http://localhost:5000/upload/' + pathParam"
      drag
      multiple
      :on-change="handleFileChange"
      :before-upload="beforeFileUpload"
      :on-error="handleUploadError"
      name="files"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将错误程序拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传 Python 文件，且不超过500MB，上传好的文件如下：</div>
    </el-upload>
    <div class="button-container">
      <el-button type="primary" round @click="toDfPrompting_2">下一步</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pathParam: 'buggy',  // 可以根据实际情况动态更新这个值
      activeIndex: 1,
      is_processing: false,
      files: [],
    };
  },
  methods: {
    toDfPrompting_2(){
     	this.$router.push({ path: "/DfPrompting_2" });
    },
    handleFileChange(file, fileList) {
      this.files = fileList;
    },
    handleUploadError(err, file, fileList) {
      // 在这里处理上传失败的情况，并将文件名添加到错误消息中
      this.$message.error(`文件 ${file.name} 上传失败，请重试！`);
    },
    beforeFileUpload(file) {
      const isPython = file.name.split('.').pop().toLowerCase() === 'py';
      if (!isPython) {
        this.$message.error('只能上传 Python 文件!');
        return false;
      }
      const isLt500M = file.size / 1024 / 1024 < 500;
      if (!isLt500M) {
        this.$message.error('文件大小不能超过 500MB!');
        return false;
      }
      return true;
    },
  }
}
</script>

<style scoped>
  .DfPrompting{
    height: 100%;
    background-color: white;
  }
  .upload-demo i {
    font-size: 28px;
    color: #409EFF;
  }
  .upload-demo .el-upload__text {
    font-size: 14px;
    color: #666;
  }
  .upload-demo .el-upload__tip {
    font-size: 14px;
    color: red;
    margin-left: 0.2%;
    margin-top: 0.5%;
  }
  .upload-demo /deep/ .el-upload {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .upload-demo /deep/ .el-upload-dragger {
    width: 99.5%;
    margin: 0.5% auto; /* 顶部和底部各 2% 的外边距，左右自动（auto）以实现水平居中 */
  }

  h1 {
    text-align: center; /* 让标题居中 */
    font-family: "Times New Roman", Times, serif; /* 使用传统的字体 */
    font-size: 36px; /* 设置字体大小 */
    color: #333; /* 设置文字颜色为深灰色 */
    margin-bottom: 2%;
    padding-top: 1%;
  }
  .upload-demo /deep/ .el-upload-list {
    overflow-y: auto; /* 当内容过多时，显示垂直滚动条 */
    height: 190px; /* 设定一个最大高度 */
  }
  .button-container {
    display: flex;
    justify-content: center; /* 这会水平居中内部的按钮 */
  }
</style>
