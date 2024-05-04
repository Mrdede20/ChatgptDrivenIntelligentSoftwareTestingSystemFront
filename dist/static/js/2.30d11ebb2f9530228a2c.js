webpackJsonp([2],{bEh0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("mvHQ"),l=a.n(s),i=a("bOdI"),o=a.n(i),r={data:function(){var e;return e={searchdialogVisible:!1,searchType:"",searchContent:"",search_table_data:[],parts_table_data:[],adddialogVisible:!1,updatedialogVisible:!1,DetaildialogVisible:!1,partImage:"",selectedSalesperson:{}},o()(e,"partImage",""),o()(e,"addform",{customerId:null,name:"",phone:"",email:"",address:"",carModel:""}),o()(e,"updateform",{customerId:null,name:"",phone:"",email:"",address:"",carModel:""}),o()(e,"findform",{customerId:null,name:"",phone:"",email:"",address:"",carModel:""}),o()(e,"rules",{name:[{required:!0,message:"请输入销售人员名称",trigger:"blur"},{min:2,max:50,message:"长度在 2 到 50 个字符",trigger:"blur"}],phone:[{required:!0,message:"请输入联系方式",trigger:"blur"},{min:2,max:100,message:"长度在 2 到 100 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入电子邮件",trigger:"blur"},{min:2,max:100,message:"长度在 2 到 100 个字符",trigger:"blur"}],address:[{required:!0,message:"请输入地址",trigger:"blur"},{min:2,max:100,message:"长度在 2 到 100 个字符",trigger:"blur"}],carModel:[{required:!0,message:"请输入车型",trigger:"blur"},{min:2,max:100,message:"长度在 2 到 100 个字符",trigger:"blur"}]}),e},mounted:function(){this.getSalespersonsInfo()},computed:{searchPlaceholder:function(){switch(this.searchType){case"name":return"请输入用户名字";case"phone":return"请输入联系电话";default:return"请搜索"}}},methods:{viewSalespersonDetail:function(e){this.selectedSalesperson=e,this.DetaildialogVisible=!0},searchSalespersons:function(){var e=this;this.search_table_data=this.parts_table_data.filter(function(t){switch(e.searchType){case"name":return t.name.includes(e.searchContent);case"phone":return t.phone.includes(e.searchContent);case"status":return t.status.includes(e.searchContent);default:return!0}}),this.searchdialogVisible=!0},clearout:function(){this.addform.phone="",this.addform.name="",this.addform.customerId="",this.addform.status="",this.updateform.phone="",this.updateform.name="",this.updateform.customerId="",this.updateform.status=""},add:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.$axios({url:"/api/customerInfo/add",method:"post",data:{customerId:t.addform.customerId,name:t.addform.name,phone:t.addform.phone,email:t.addform.email,address:t.addform.address,carModel:t.addform.carModel}}).then(function(e){t.$message.success("添加成功."),t.getSalespersonsInfo(),t.adddialogVisible=!1}).catch(function(e){t.$message.error("添加失败.")})})},openadddialog:function(){this.adddialogVisible=!0},conditionalfind:function(e){var t=this;this.$axios("/api/customerInfo/selectOne/"+e).then(function(e){t.findform=e.data}).then(function(e){}).catch(function(e){})},conditionaldelete:function(e){var t=this;this.$axios.delete("/api/customerInfo/delete/"+e.customerId).then(function(e){t.$message.success("删除成功."),t.getSalespersonsInfo()}).catch(function(e){t.$message.error("删除失败.")})},openupdate:function(e){this.updatedialogVisible=!0,this.updateform=JSON.parse(l()(e))},conditionalupdate:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.$axios({url:"/api/customerInfo/update",method:"put",data:t.updateform}).then(function(e){t.$message.success("更新成功."),t.getSalespersonsInfo(),t.updatedialogVisible=!1}).catch(function(e){t.$message.error("更新失败.")})})},getSalespersonsInfo:function(){var e=this;this.$axios("/api/customerInfo/queryAll").then(function(t){e.parts_table_data=t.data,console.log(t.data)}).catch(function(e){console.log(e)})},handleClose:function(e){this.adddialogVisible=!1,this.updatedialogVisible=!1,this.searchdialogVisible=!1,this.DetaildialogVisible=!1},viewSalesPerformance:function(e){this.$router.push({path:"/QueryPersonalSalesPerformance",query:{customerId:e.customerId}})}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"partsList"}},[a("section",{staticClass:"container"},[a("div",{staticClass:"main_wrapper"},[a("div",{staticClass:"top_class",staticStyle:{display:"flex","justify-content":"space-between","margin-bottom":"10px"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",circle:""},on:{click:function(t){e.openadddialog()}}}),e._v(" "),a("div",{staticClass:"searchClass",staticStyle:{display:"flex","align-items":"center"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.searchType,callback:function(t){e.searchType=t},expression:"searchType"}},[a("el-option",{attrs:{label:"姓名",value:"name"}}),e._v(" "),a("el-option",{attrs:{label:"电话",value:"phone"}})],1),e._v(" "),a("el-input",{staticClass:"input-with-select",attrs:{placeholder:e.searchPlaceholder},model:{value:e.searchContent,callback:function(t){e.searchContent=t},expression:"searchContent"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.searchSalespersons},slot:"append"})],1)],1)],1),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"context1"},[a("div",{staticClass:"tableArea"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.parts_table_data,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"customerId",label:"客户ID",width:"300"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称",width:"300"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"联系方式",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.viewSalespersonDetail(t.row)}}},[e._v("详细")])]}}])})],1)],1)])])]),e._v(" "),a("el-dialog",{attrs:{visible:e.DetaildialogVisible,"before-close":e.handleClose,width:"50%",center:""},on:{"update:visible":function(t){e.DetaildialogVisible=t}}},[a("div",{staticClass:"part-detail"},[a("h2",[e._v(e._s(e.selectedSalesperson.name))]),e._v(" "),a("div",{staticClass:"part-info"},[a("p",[a("strong",[e._v("客户ID：")]),e._v(e._s(e.selectedSalesperson.customerId))]),e._v(" "),a("p",[a("strong",[e._v("名称：")]),e._v(e._s(e.selectedSalesperson.name))]),e._v(" "),a("p",[a("strong",[e._v("联系方式：")]),e._v(e._s(e.selectedSalesperson.phone))]),e._v(" "),a("p",[a("strong",[e._v("电子邮件：")]),e._v(e._s(e.selectedSalesperson.email))]),e._v(" "),a("p",[a("strong",[e._v("地址：")]),e._v(e._s(e.selectedSalesperson.address))]),e._v(" "),a("p",[a("strong",[e._v("车型：")]),e._v(e._s(e.selectedSalesperson.carModel))])])])]),e._v(" "),a("el-dialog",{attrs:{visible:e.searchdialogVisible,"before-close":e.handleClose,title:"查询结果",width:"70%",center:""},on:{"update:visible":function(t){e.searchdialogVisible=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.search_table_data,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{prop:"customerId",label:"销售人员ID",width:"300"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称",width:"300"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"联系方式",width:"300"}})],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.adddialogVisible,"before-close":e.handleClose,width:"60%",center:""},on:{"update:visible":function(t){e.adddialogVisible=t}}},[a("div",{staticClass:"salesperson-detail",staticStyle:{padding:"20px"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"20px"},attrs:{slot:"header"},slot:"header"},[a("span",[e._v("添加客户信息")])]),e._v(" "),a("el-form",{ref:"addform",attrs:{model:e.addform,rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入用户名称"},model:{value:e.addform.name,callback:function(t){e.$set(e.addform,"name",t)},expression:"addform.name"}})],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"联系方式",prop:"phone"}},[a("el-input",{attrs:{placeholder:"请输入联系方式"},model:{value:e.addform.phone,callback:function(t){e.$set(e.addform,"phone",t)},expression:"addform.phone"}})],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"电子邮件",prop:"email"}},[a("el-input",{attrs:{placeholder:"请输入电子邮件"},model:{value:e.addform.email,callback:function(t){e.$set(e.addform,"email",t)},expression:"addform.email"}})],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"地址",prop:"address"}},[a("el-input",{attrs:{placeholder:"请输入用户地址"},model:{value:e.addform.address,callback:function(t){e.$set(e.addform,"address",t)},expression:"addform.address"}})],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"车型",prop:"carModel"}},[a("el-input",{attrs:{placeholder:"请输入用户车型"},model:{value:e.addform.carModel,callback:function(t){e.$set(e.addform,"carModel",t)},expression:"addform.carModel"}})],1),e._v(" "),a("el-form-item",{staticStyle:{display:"flex","justify-content":"flex-end","margin-top":"20px"}},[a("el-button",{staticStyle:{"margin-right":"10px",padding:"10px"},attrs:{type:"primary",size:"medium"},on:{click:function(t){e.add("addform")}}},[e._v("提交")]),e._v(" "),a("el-button",{staticStyle:{padding:"10px"},attrs:{type:"primary"},on:{click:function(t){e.clearout()}}},[e._v("清空")])],1)],1)],1)],1)]),e._v(" "),a("el-dialog",{attrs:{visible:e.updatedialogVisible,"before-close":e.handleClose,width:"60%",center:""},on:{"update:visible":function(t){e.updatedialogVisible=t}}},[a("div",{staticClass:"salesperson-detail",staticStyle:{padding:"20px"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"20px"},attrs:{slot:"header"},slot:"header"},[a("span",[e._v("修改销售人员信息")])]),e._v(" "),a("el-form",{ref:"updateform",attrs:{model:e.updateform,rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"Enter Salesperson Name"},model:{value:e.updateform.name,callback:function(t){e.$set(e.updateform,"name",t)},expression:"updateform.name"}})],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"联系方式",prop:"phone"}},[a("el-input",{attrs:{placeholder:"Enter Contact Info"},model:{value:e.updateform.phone,callback:function(t){e.$set(e.updateform,"phone",t)},expression:"updateform.phone"}})],1),e._v(" "),a("el-form-item",{staticStyle:{display:"flex","justify-content":"flex-end","margin-top":"20px"}},[a("el-button",{staticStyle:{"margin-right":"10px",padding:"10px"},attrs:{type:"primary",size:"medium"},on:{click:function(t){e.conditionalupdate("updateform")}}},[e._v("提交")]),e._v(" "),a("el-button",{staticStyle:{padding:"10px"},attrs:{type:"primary"},on:{click:function(t){e.clearout()}}},[e._v("清空")])],1)],1)],1)],1)])],1)},staticRenderFns:[]};var d=a("VU/8")(r,n,!1,function(e){a("ejBb")},"data-v-7f853d69",null);t.default=d.exports},ejBb:function(e,t){}});