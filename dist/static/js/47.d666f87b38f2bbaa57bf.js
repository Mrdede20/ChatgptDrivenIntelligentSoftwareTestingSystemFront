webpackJsonp([47],{"17cN":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("mvHQ"),l=a.n(s),o=a("bOdI"),n=a.n(o),i={data:function(){var t;return t={searchdialogVisible:!1,searchType:"",searchContent:"",search_table_data:[],parts_table_data:[],adddialogVisible:!1,updatedialogVisible:!1,DetaildialogVisible:!1,partImage:"",selectedSalesperson:{}},n()(t,"partImage",""),n()(t,"addform",{salespersonId:null,name:"",contactInfo:"",status:""}),n()(t,"updateform",{salespersonId:null,name:"",contactInfo:"",status:""}),n()(t,"findform",{salespersonId:null,name:"",contactInfo:"",status:""}),n()(t,"rules",{name:[{required:!0,message:"请输入销售人员名称",trigger:"blur"},{min:2,max:50,message:"长度在 2 到 50 个字符",trigger:"blur"}],contactInfo:[{required:!0,message:"请输入联系方式",trigger:"blur"},{min:2,max:100,message:"长度在 2 到 100 个字符",trigger:"blur"}],status:[{required:!0,message:"请输入状态比如：工作中、空闲中",trigger:"blur"},{min:2,max:50,message:"长度在 2 到 50 个字符",trigger:"blur"}]}),t},mounted:function(){this.getSalespersonsInfo()},computed:{searchPlaceholder:function(){switch(this.searchType){case"name":return"请输入销售人员名字";case"contactInfo":return"请输入联系电话";case"status":return"请搜索销售人员状态比如：空闲中、工作中";default:return"请搜索"}}},methods:{viewSalespersonDetail:function(t){this.selectedSalesperson=t,this.DetaildialogVisible=!0},searchSalespersons:function(){var t=this;this.search_table_data=this.parts_table_data.filter(function(e){switch(t.searchType){case"name":return e.name.includes(t.searchContent);case"contactInfo":return e.contactInfo.includes(t.searchContent);case"status":return e.status.includes(t.searchContent);default:return!0}}),this.searchdialogVisible=!0},clearout:function(){this.addform.contactInfo="",this.addform.name="",this.addform.salespersonId="",this.addform.status="",this.updateform.contactInfo="",this.updateform.name="",this.updateform.salespersonId="",this.updateform.status=""},add:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.$axios({url:"/api/salesperson/add",method:"post",data:{salespersonId:e.addform.salespersonId,name:e.addform.name,contactInfo:e.addform.contactInfo,status:e.addform.status}}).then(function(t){e.$message.success("成功新增该销售人员."),e.getSalespersonsInfo(),e.adddialogVisible=!1}).catch(function(t){e.$message.error("登记失败.")})})},openadddialog:function(){this.adddialogVisible=!0},conditionalfind:function(t){var e=this;this.$axios("/api/salesperson/selectOne/"+t).then(function(t){e.findform=t.data}).then(function(t){}).catch(function(t){})},conditionaldelete:function(t){var e=this;this.$axios.delete("/api/salesperson/delete/"+t.salespersonId).then(function(t){e.$message.success("已删除该销售人员."),e.getSalespersonsInfo()}).catch(function(t){e.$message.error("删除失败.")})},openupdate:function(t){this.updatedialogVisible=!0,this.updateform=JSON.parse(l()(t))},conditionalupdate:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.$axios({url:"/api/salesperson/update",method:"put",data:e.updateform}).then(function(t){e.$message.success("修改成功."),e.getSalespersonsInfo(),e.updatedialogVisible=!1}).catch(function(t){e.$message.error("修改失败.")})})},getSalespersonsInfo:function(){var t=this;this.$axios("/api/salesperson/queryAll").then(function(e){t.parts_table_data=e.data}).catch(function(t){console.log(t)})},handleClose:function(t){this.adddialogVisible=!1,this.updatedialogVisible=!1,this.searchdialogVisible=!1,this.DetaildialogVisible=!1},viewSalesPerformance:function(t){this.$router.push({path:"/QueryPersonalSalesPerformance",query:{salespersonId:t.salespersonId}})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"partsList"}},[a("section",{staticClass:"container"},[a("div",{staticClass:"main_wrapper"},[a("div",{staticClass:"top_class",staticStyle:{display:"flex","justify-content":"space-between","margin-bottom":"10px"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",circle:""},on:{click:function(e){t.openadddialog()}}}),t._v(" "),a("div",{staticClass:"searchClass",staticStyle:{display:"flex","align-items":"center"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.searchType,callback:function(e){t.searchType=e},expression:"searchType"}},[a("el-option",{attrs:{label:"名称",value:"name"}}),t._v(" "),a("el-option",{attrs:{label:"联系方式",value:"contactInfo"}}),t._v(" "),a("el-option",{attrs:{label:"状态",value:"status"}})],1),t._v(" "),a("el-input",{staticClass:"input-with-select",attrs:{placeholder:t.searchPlaceholder},model:{value:t.searchContent,callback:function(e){t.searchContent=e},expression:"searchContent"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.searchSalespersons},slot:"append"})],1)],1)],1),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"context1"},[a("div",{staticClass:"tableArea"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.parts_table_data,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"salespersonId",label:"销售人员ID",width:"300"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称",width:"300"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contactInfo",label:"联系方式",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.conditionaldelete(e.row)}}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.openupdate(e.row)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.viewSalespersonDetail(e.row)}}},[t._v("详细")])]}}])})],1)],1)])])]),t._v(" "),a("el-dialog",{attrs:{visible:t.DetaildialogVisible,"before-close":t.handleClose,width:"50%",center:""},on:{"update:visible":function(e){t.DetaildialogVisible=e}}},[a("div",{staticClass:"part-detail"},[a("h2",[t._v(t._s(t.selectedSalesperson.name))]),t._v(" "),a("div",{staticClass:"part-info"},[a("p",[a("strong",[t._v("销售人员ID：")]),t._v(t._s(t.selectedSalesperson.salespersonId))]),t._v(" "),a("p",[a("strong",[t._v("名称：")]),t._v(t._s(t.selectedSalesperson.name))]),t._v(" "),a("p",[a("strong",[t._v("联系方式：")]),t._v(t._s(t.selectedSalesperson.contactInfo))]),t._v(" "),a("p",[a("strong",[t._v("状态：")]),t._v(t._s(t.selectedSalesperson.status))])])])]),t._v(" "),a("el-dialog",{attrs:{visible:t.searchdialogVisible,"before-close":t.handleClose,title:"查询结果",width:"70%",center:""},on:{"update:visible":function(e){t.searchdialogVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.search_table_data,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{prop:"salespersonId",label:"销售人员ID",width:"300"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称",width:"300"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contactInfo",label:"联系方式",width:"300"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"300"}})],1)],1),t._v(" "),a("el-dialog",{attrs:{visible:t.adddialogVisible,"before-close":t.handleClose,width:"60%",center:""},on:{"update:visible":function(e){t.adddialogVisible=e}}},[a("div",{staticClass:"salesperson-detail",staticStyle:{padding:"20px"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"20px"},attrs:{slot:"header"},slot:"header"},[a("span",[t._v("添加销售人员信息")])]),t._v(" "),a("el-form",{ref:"addform",attrs:{model:t.addform,rules:t.rules,"label-width":"120px"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入销售人员名称"},model:{value:t.addform.name,callback:function(e){t.$set(t.addform,"name",e)},expression:"addform.name"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"联系方式",prop:"contactInfo"}},[a("el-input",{attrs:{placeholder:"请输入联系方式"},model:{value:t.addform.contactInfo,callback:function(e){t.$set(t.addform,"contactInfo",e)},expression:"addform.contactInfo"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"状态",prop:"status"}},[a("el-input",{attrs:{placeholder:"请输入销售人员状态比如：空闲中、工作中"},model:{value:t.addform.status,callback:function(e){t.$set(t.addform,"status",e)},expression:"addform.status"}})],1),t._v(" "),a("el-form-item",{staticStyle:{display:"flex","justify-content":"flex-end","margin-top":"20px"}},[a("el-button",{staticStyle:{"margin-right":"10px",padding:"10px"},attrs:{type:"primary",size:"medium"},on:{click:function(e){t.add("addform")}}},[t._v("提交")]),t._v(" "),a("el-button",{staticStyle:{padding:"10px"},attrs:{type:"primary"},on:{click:function(e){t.clearout()}}},[t._v("清空")])],1)],1)],1)],1)]),t._v(" "),a("el-dialog",{attrs:{visible:t.updatedialogVisible,"before-close":t.handleClose,width:"60%",center:""},on:{"update:visible":function(e){t.updatedialogVisible=e}}},[a("div",{staticClass:"salesperson-detail",staticStyle:{padding:"20px"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"20px"},attrs:{slot:"header"},slot:"header"},[a("span",[t._v("修改销售人员信息")])]),t._v(" "),a("el-form",{ref:"updateform",attrs:{model:t.updateform,rules:t.rules,"label-width":"120px"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入销售人员名称"},model:{value:t.updateform.name,callback:function(e){t.$set(t.updateform,"name",e)},expression:"updateform.name"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"联系方式",prop:"contactInfo"}},[a("el-input",{attrs:{placeholder:"请输入联系方式"},model:{value:t.updateform.contactInfo,callback:function(e){t.$set(t.updateform,"contactInfo",e)},expression:"updateform.contactInfo"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"状态",prop:"status"}},[a("el-input",{attrs:{placeholder:"请输入销售人员状态比如：空闲中、工作中"},model:{value:t.updateform.status,callback:function(e){t.$set(t.updateform,"status",e)},expression:"updateform.status"}})],1),t._v(" "),a("el-form-item",{staticStyle:{display:"flex","justify-content":"flex-end","margin-top":"20px"}},[a("el-button",{staticStyle:{"margin-right":"10px",padding:"10px"},attrs:{type:"primary",size:"medium"},on:{click:function(e){t.conditionalupdate("updateform")}}},[t._v("提交")]),t._v(" "),a("el-button",{staticStyle:{padding:"10px"},attrs:{type:"primary"},on:{click:function(e){t.clearout()}}},[t._v("清空")])],1)],1)],1)],1)])],1)},staticRenderFns:[]};var c=a("VU/8")(i,r,!1,function(t){a("OCIY")},"data-v-2b8ac1e0",null);e.default=c.exports},OCIY:function(t,e){}});