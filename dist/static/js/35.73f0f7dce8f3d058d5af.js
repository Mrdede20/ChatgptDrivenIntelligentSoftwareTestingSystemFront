webpackJsonp([35],{K7JN:function(e,t){},"p+8g":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{form:{partId:null,partName:"",image:"",model:"",color:"",applicableModels:"",price:null,inventoryQuantity:null}}},methods:{addsubmitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.$axios({url:"/api/parts/add",method:"post",data:{partId:t.form.partId,partName:t.form.partName,image:t.form.image,model:t.form.model,color:t.form.color,applicableModels:t.form.applicableModels,price:t.form.price,inventoryQuantity:t.form.inventoryQuantity}}).then(function(e){console.log(t.form),t.$message.success("New part has been added.")}).catch(function(e){t.$message.error("Failed to add the new part.")})})},conditionalfind:function(){this.form.id=1,this.$axios("/api/parts/selectOne/"+this.form.id).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})},conditionaldelete:function(){this.form.id=15,this.$axios.delete("/api/parts/delete/"+this.form.id).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})},conditionalupdate:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.$axios({url:"/api/parts/update",method:"put",data:{partId:t.form.partId,partName:t.form.partName,image:t.form.image,model:t.form.model,color:t.form.color,applicableModels:t.form.applicableModels,price:t.form.price,inventoryQuantity:t.form.inventoryQuantity}}).then(function(e){console.log(t.form),t.$message.success("part has been update.")}).catch(function(e){t.$message.error("Failed to update the  part.")})})}}},r={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-card",{staticClass:"box-card"},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[e._v("Add New Part")])]),e._v(" "),o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[o("el-form-item",{attrs:{label:"Part ID",prop:"partId"}},[o("el-input",{attrs:{placeholder:"Enter Part ID"},model:{value:e.form.partId,callback:function(t){e.$set(e.form,"partId",e._n(t))},expression:"form.partId"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Part Name",prop:"partName"}},[o("el-input",{attrs:{placeholder:"Enter Part Name"},model:{value:e.form.partName,callback:function(t){e.$set(e.form,"partName",t)},expression:"form.partName"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Image",prop:"image"}},[o("el-input",{attrs:{placeholder:"Enter Image URL"},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Model",prop:"model"}},[o("el-input",{attrs:{placeholder:"Enter Model"},model:{value:e.form.model,callback:function(t){e.$set(e.form,"model",t)},expression:"form.model"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Color",prop:"color"}},[o("el-input",{attrs:{placeholder:"Enter Color"},model:{value:e.form.color,callback:function(t){e.$set(e.form,"color",t)},expression:"form.color"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Applicable Models",prop:"applicableModels"}},[o("el-input",{attrs:{placeholder:"Enter Applicable Models"},model:{value:e.form.applicableModels,callback:function(t){e.$set(e.form,"applicableModels",t)},expression:"form.applicableModels"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Price",prop:"price"}},[o("el-input",{attrs:{placeholder:"Enter Price"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",e._n(t))},expression:"form.price"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Inventory Quantity",prop:"inventoryQuantity"}},[o("el-input",{attrs:{placeholder:"Enter Inventory Quantity"},model:{value:e.form.inventoryQuantity,callback:function(t){e.$set(e.form,"inventoryQuantity",e._n(t))},expression:"form.inventoryQuantity"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addsubmitForm("form")}}},[e._v("Add")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.conditionaldelete()}}},[e._v("Delete")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.conditionalupdate("form")}}},[e._v("Update")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.conditionalfind()}}},[e._v("Find")])],1)],1)],1)},staticRenderFns:[]};var l=o("VU/8")(a,r,!1,function(e){o("K7JN")},"data-v-561e7efa",null);t.default=l.exports}});