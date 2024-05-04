webpackJsonp([22],{ADGS:function(t,e){},IjmA:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{form:{orderId:"",partId:"",inboundQuantity:"",inboundDate:""},parts:{},rules:{partId:[{required:!0,message:"请输入配件ID",trigger:"blur"},{pattern:/^\d+$/,message:"配件ID必须为整数",trigger:"blur"}],inboundQuantity:[{required:!0,message:"请输入入库数量",trigger:"blur"},{pattern:/^\d+$/,message:"入库数量必须为整数",trigger:"blur"}],inboundDate:[{required:!0,message:"请选择入库日期",trigger:"change"}]}}},created:function(){var t=this.$route.query.partId;this.form.partId=t,this.conditionalfind(t)},methods:{clearout:function(){this.form.orderId="",this.form.partId="",this.form.inboundQuantity="",this.form.inboundDate=""},conditionalfind:function(t){var e=this;this.$axios("/api/parts/selectOne/"+t).then(function(t){e.parts=t.data}).then(function(t){}).catch(function(t){})},conditionalupdate:function(t){this.$axios({url:"/api/parts/update",method:"put",data:{partId:this.parts.partId,partName:this.parts.partName,image:this.parts.image,model:this.parts.model,color:this.parts.color,applicableModels:this.parts.applicableModels,price:this.parts.price,inventoryQuantity:parseInt(this.parts.inventoryQuantity)+parseInt(t)}}).then(function(t){}).catch(function(t){})},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.$axios({url:"/api/inbound/add",method:"post",data:{orderId:e.form.orderId,partId:e.form.partId,inboundQuantity:e.form.inboundQuantity,inboundDate:e.form.inboundDate}}).then(function(t){console.log(e.form),e.$message.success("入库成功"),e.conditionalupdate(e.form.inboundQuantity),e.$router.push({path:"/EnterAccessoryInformation"})}).catch(function(t){e.$message.error("入库失败")})})}}},n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("录入入库单信息")])]),t._v(" "),r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"120px"},nativeOn:{submit:function(t){t.preventDefault()}}},[r("el-form-item",{attrs:{label:"配件ID",prop:"partId"}},[r("el-input",{attrs:{placeholder:"请输入配件id",readonly:""},model:{value:t.form.partId,callback:function(e){t.$set(t.form,"partId",e)},expression:"form.partId"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"入库数量",prop:"inboundQuantity"}},[r("el-input",{attrs:{placeholder:"请输入配件入库数量"},model:{value:t.form.inboundQuantity,callback:function(e){t.$set(t.form,"inboundQuantity",e)},expression:"form.inboundQuantity"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"入库日期",prop:"inboundDate"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"请选择入库时间"},model:{value:t.form.inboundDate,callback:function(e){t.$set(t.form,"inboundDate",e)},expression:"form.inboundDate"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("form")}}},[t._v("提交")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.clearout()}}},[t._v("清空")])],1)],1)],1)},staticRenderFns:[]};var o=r("VU/8")(a,n,!1,function(t){r("ADGS")},"data-v-e679d09c",null);e.default=o.exports}});