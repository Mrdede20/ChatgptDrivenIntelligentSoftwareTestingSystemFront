webpackJsonp([25],{GebH:function(t,e){},zHLZ:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{form:{formId:"",partId:"",orderId:"",pickQuantity:"",distributeDate:""},rules:{partId:[{required:!0,message:"请输入配件ID",trigger:"blur"},{pattern:/^\d+$/,message:"配件ID必须为整数",trigger:"blur"}],orderId:[{required:!0,message:"请输入订单ID",trigger:"blur"},{pattern:/^\d+$/,message:"订单ID必须为整数",trigger:"blur"}],pickQuantity:[{required:!0,message:"请输入拣选数量",trigger:"blur"},{pattern:/^\d+$/,message:"拣选数量必须为整数",trigger:"blur"}],distributeDate:[{required:!0,message:"请选择分配日期",trigger:"change"}]}}},methods:{clearout:function(){this.form.formId=null,this.form.partId=null,this.form.orderId=null,this.form.pickQuantity=null,this.form.distributeDate=null},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.$axios({url:"/api/partDistribution/add",method:"post",data:{formId:e.form.formId,partId:e.form.partId,pickQuantity:e.form.pickQuantity,distributeDate:e.form.distributeDate}}).then(function(t){console.log(e.form),e.$message.success("登记成功.")}).catch(function(t){e.$message.error("登记失败.")})})}}},i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("录入配件分配拣选单信息")])]),t._v(" "),r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"120px"},nativeOn:{submit:function(t){t.preventDefault()}}},[r("el-form-item",{attrs:{label:"配件ID",prop:"partId"}},[r("el-input",{attrs:{placeholder:"请输入配件ID"},model:{value:t.form.partId,callback:function(e){t.$set(t.form,"partId",e)},expression:"form.partId"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"订单ID",prop:"orderId"}},[r("el-input",{attrs:{placeholder:"请输入订单ID"},model:{value:t.form.orderId,callback:function(e){t.$set(t.form,"orderId",e)},expression:"form.orderId"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"拣选数量",prop:"pickQuantity"}},[r("el-input",{attrs:{placeholder:"请输入配件拣选数量"},model:{value:t.form.pickQuantity,callback:function(e){t.$set(t.form,"pickQuantity",e)},expression:"form.pickQuantity"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"分配日期",prop:"distributeDate"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"请选择分配时间"},model:{value:t.form.distributeDate,callback:function(e){t.$set(t.form,"distributeDate",e)},expression:"form.distributeDate"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("form")}}},[t._v("提交")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.clearout()}}},[t._v("清空")])],1)],1)],1)},staticRenderFns:[]};var o=r("VU/8")(a,i,!1,function(t){r("GebH")},"data-v-c3adeda4",null);e.default=o.exports}});