webpackJsonp([55],{"/gyg":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={data:function(){return{form:{formId:"",partId:"",orderId:"",returnDate:"",damageDescription:"",handlingResult:""},rules:{partId:[{required:!0,message:"请输入配件ID",trigger:"blur"},{pattern:/^\d+$/,message:"配件ID必须为整数",trigger:"blur"}],orderId:[{required:!0,message:"请输入订单ID",trigger:"blur"},{pattern:/^\d+$/,message:"订单ID必须为整数",trigger:"blur"}],returnDate:[{required:!0,message:"请选择退回日期",trigger:"change"}],damageDescription:[{required:!0,message:"请输入损坏描述",trigger:"blur"},{min:1,max:200,message:"长度在 1 到 200 个字符",trigger:"blur"}],handlingResult:[{required:!0,message:"请输入处理结果",trigger:"blur"},{min:1,max:200,message:"长度在 1 到 200 个字符",trigger:"blur"}]}}},methods:{clearout:function(){this.form.formId=null,this.form.partId=null,this.form.returnDate=null,this.form.damageDescription="",this.form.handlingResult=""},submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return!1;r.$axios({url:"/api/partReturn/add",method:"post",data:{formId:r.form.formId,partId:r.form.partId,returnDate:r.form.returnDate,damageDescription:r.form.damageDescription,handlingResult:r.form.handlingResult}}).then(function(e){console.log(r.form),r.$message.success("登记成功.")}).catch(function(e){r.$message.error("登记失败.")})})}}},o={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("录入配件损坏退回单信息")])]),e._v(" "),t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",{attrs:{label:"配件ID",prop:"partId"}},[t("el-input",{attrs:{placeholder:"请输入配件ID"},model:{value:e.form.partId,callback:function(r){e.$set(e.form,"partId",r)},expression:"form.partId"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"订单ID",prop:"orderId"}},[t("el-input",{attrs:{placeholder:"请输入订单ID"},model:{value:e.form.orderId,callback:function(r){e.$set(e.form,"orderId",r)},expression:"form.orderId"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"退回日期",prop:"returnDate"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"请选择登记时间"},model:{value:e.form.returnDate,callback:function(r){e.$set(e.form,"returnDate",r)},expression:"form.returnDate"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"损坏描述",prop:"damageDescription"}},[t("el-input",{attrs:{type:"textarea",placeholder:"请填写损坏描述"},model:{value:e.form.damageDescription,callback:function(r){e.$set(e.form,"damageDescription",r)},expression:"form.damageDescription"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"处理结果",prop:"handlingResult"}},[t("el-input",{attrs:{type:"textarea",placeholder:"请填写处理结果"},model:{value:e.form.handlingResult,callback:function(r){e.$set(e.form,"handlingResult",r)},expression:"form.handlingResult"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("form")}}},[e._v("提交")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.clearout()}}},[e._v("清空")])],1)],1)],1)},staticRenderFns:[]};var l=t("VU/8")(a,o,!1,function(e){t("JMe4")},"data-v-05a4b0d8",null);r.default=l.exports},JMe4:function(e,r){}});