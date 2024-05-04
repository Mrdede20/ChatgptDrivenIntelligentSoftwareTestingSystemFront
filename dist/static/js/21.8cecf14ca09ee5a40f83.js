webpackJsonp([21],{P4Ho:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("录入销售计划信息")])]),e._v(" "),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"计划人ID",prop:"planer"}},[r("el-input",{attrs:{placeholder:"请输入计划人ID"},model:{value:e.form.planer,callback:function(t){e.$set(e.form,"planer",t)},expression:"form.planer"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"预计销售额",prop:"expectedSalesAmount"}},[r("el-input",{attrs:{placeholder:"请输入预计销售额"},model:{value:e.form.expectedSalesAmount,callback:function(t){e.$set(e.form,"expectedSalesAmount",t)},expression:"form.expectedSalesAmount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"具体安排",prop:"content"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请填写具体安排"},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"计划日期",prop:"planDate"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"请选择计划时间"},model:{value:e.form.planDate,callback:function(t){e.$set(e.form,"planDate",t)},expression:"form.planDate"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(t){e.clearout()}}},[e._v("清空")])],1)],1)],1)},staticRenderFns:[]};var l=r("VU/8")({data:function(){return{form:{expectedSalesQuantity:"",expectedSalesAmount:"",planDate:"",content:""},rules:{expectedSalesQuantity:[{required:!0,message:"请输入预计销售数量",trigger:"blur"},{pattern:/^\d+$/,message:"预计销售数量必须为整数",trigger:"blur"}],content:[{required:!0,message:"请输入计划内容",trigger:"blur"},{min:1,max:200,message:"长度在 1 到 1000 个字符",trigger:"blur"}],planer:[{required:!0,message:"请输入计划人id",trigger:"blur"},{pattern:/^\d+$/,message:"计划人id必须为整数",trigger:"blur"}],expectedSalesAmount:[{required:!0,message:"请输入预计销售金额",trigger:"blur"},{pattern:/^\d+(\.\d{1,2})?$/,message:"预计销售金额必须为数字，最多两位小数",trigger:"blur"}],planDate:[{required:!0,message:"请选择计划日期",trigger:"change"}],plan:[]}}},methods:{clearout:function(){this.form.expectedSalesQuantity="",this.form.expectedSalesAmount="",this.form.planDate=""},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.$axios({url:"/api/salesPlan/add",method:"post",data:{expectedSalesQuantity:t.form.expectedSalesQuantity,expectedSalesAmount:t.form.expectedSalesAmount,planDate:t.form.planDate,specificPlan:t.form.content}}).then(function(e){t.$message.success("计划表登记成功.")}).catch(function(e){t.$message.error("登记失败.")})})}}},a,!1,function(e){r("dpUf")},"data-v-eb76f44c",null);t.default=l.exports},dpUf:function(e,t){}});