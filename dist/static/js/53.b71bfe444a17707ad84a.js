webpackJsonp([53],{CPne:function(e,t){},Ci0Q:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Dd8w"),l=r.n(a),s={data:function(){return{tableData:[],searchContent:"",searchType:"",filteredData:[],dialogVisible:!1,currentOrder:{},searchResults:[],searchDialogVisible:!1}},computed:{searchPlaceholder:function(){switch(this.searchType){case"orderDate":return"请输入订单日期";case"customerId":return"请输入客户id";default:return""}}},mounted:function(){this.getApprovalInfo()},methods:{getApprovalInfo:function(){var e=this;this.$axios("/api/customOrders/queryAll").then(function(t){e.tableData=t.data.map(function(e){var t=new Date(e.orderDate),r=new Date(e.expectedDateOfCompletion),a=t.getFullYear()+"-"+String(t.getMonth()+1).padStart(2,"0")+"-"+String(t.getDate()).padStart(2,"0"),s=r.getFullYear()+"-"+String(r.getMonth()+1).padStart(2,"0")+"-"+String(r.getDate()).padStart(2,"0");return l()({},e,{orderDate:a,expectedDateOfCompletion:s})}),e.filteredData=e.tableData,console.log(e.tableData)}).catch(function(e){console.log(e)})},searchOrders:function(){var e=this;this.searchType&&this.searchContent?(this.searchResults=this.tableData.filter(function(t){return String(t[e.searchType]).includes(e.searchContent)}),0===this.searchResults.length?this.$message.error("没有找到匹配的订单."):this.searchDialogVisible=!0):this.$message.error("请填写搜索条件.")},openDialog:function(e){this.currentOrder=l()({},e),this.dialogVisible=!0},approveOrder:function(){var e=this;this.$axios({url:"/api/customOrders/update",method:"put",data:{customOrderId:this.currentOrder.customOrderId,customerId:this.currentOrder.customerId,specialRequirements:this.currentOrder.specialRequirements,orderDate:this.currentOrder.orderDate,expectedDateOfCompletion:this.currentOrder.expectedDateOfCompletion,statusOfOrder:this.currentOrder.statusOfOrder}}).then(function(t){console.log(e.currentOrder),e.$message.success("订单已更新."),e.getApprovalInfo(),e.dialogVisible=!1}).catch(function(t){e.$message.error("订单更新出错.")})}}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"top_class",staticStyle:{display:"flex","justify-content":"space-between","margin-bottom":"10px"}},[r("div",{staticClass:"searchClass",staticStyle:{display:"flex","align-items":"center"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.searchType,callback:function(t){e.searchType=t},expression:"searchType"}},[r("el-option",{attrs:{label:"订单日期",value:"orderDate"}}),e._v(" "),r("el-option",{attrs:{label:"客户id",value:"customerId"}})],1),e._v(" "),r("el-input",{staticClass:"input-with-select",attrs:{placeholder:e.searchPlaceholder},model:{value:e.searchContent,callback:function(t){e.searchContent=t},expression:"searchContent"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.searchOrders},slot:"append"})],1)],1)]),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.filteredData}},[r("el-table-column",{attrs:{prop:"customOrderId",label:"定制订单ID"}}),e._v(" "),r("el-table-column",{attrs:{prop:"customerId",label:"客户ID"}}),e._v(" "),r("el-table-column",{attrs:{prop:"specialRequirements",label:"特殊要求"}}),e._v(" "),r("el-table-column",{attrs:{prop:"orderDate",label:"订单日期"}}),e._v(" "),r("el-table-column",{attrs:{prop:"expectedDateOfCompletion",label:"预期完成日期"}}),e._v(" "),r("el-table-column",{attrs:{prop:"statusOfOrder",label:"订单状态"}}),e._v(" "),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{on:{click:function(r){e.openDialog(t.row)}}},[e._v("审批")])]}}])})],1),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogVisible,title:"审批订单"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{attrs:{model:e.currentOrder}},[r("el-form-item",{attrs:{label:"定制订单ID"}},[r("el-input",{attrs:{disabled:""},model:{value:e.currentOrder.customOrderId,callback:function(t){e.$set(e.currentOrder,"customOrderId",t)},expression:"currentOrder.customOrderId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"客户ID"}},[r("el-input",{attrs:{disabled:""},model:{value:e.currentOrder.customerId,callback:function(t){e.$set(e.currentOrder,"customerId",t)},expression:"currentOrder.customerId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"特殊要求"}},[r("el-input",{attrs:{disabled:""},model:{value:e.currentOrder.specialRequirements,callback:function(t){e.$set(e.currentOrder,"specialRequirements",t)},expression:"currentOrder.specialRequirements"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"订单日期"}},[r("el-date-picker",{attrs:{type:"date",disabled:""},model:{value:e.currentOrder.orderDate,callback:function(t){e.$set(e.currentOrder,"orderDate",t)},expression:"currentOrder.orderDate"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"预期完成日期"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"请选择预期完成日期"},model:{value:e.currentOrder.expectedDateOfCompletion,callback:function(t){e.$set(e.currentOrder,"expectedDateOfCompletion",t)},expression:"currentOrder.expectedDateOfCompletion"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"订单状态"}},[r("el-select",{model:{value:e.currentOrder.statusOfOrder,callback:function(t){e.$set(e.currentOrder,"statusOfOrder",t)},expression:"currentOrder.statusOfOrder"}},[r("el-option",{attrs:{label:"同意",value:"同意"}}),e._v(" "),r("el-option",{attrs:{label:"拒绝",value:"拒绝"}}),e._v(" "),r("el-option",{attrs:{label:"待审批",value:"待审批"}})],1)],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.approveOrder}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{visible:e.searchDialogVisible,title:"搜索结果"},on:{"update:visible":function(t){e.searchDialogVisible=t}}},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.searchResults}},[r("el-table-column",{attrs:{prop:"customOrderId",label:"定制订单ID"}}),e._v(" "),r("el-table-column",{attrs:{prop:"customerId",label:"客户ID"}}),e._v(" "),r("el-table-column",{attrs:{prop:"specialRequirements",label:"特殊要求"}}),e._v(" "),r("el-table-column",{attrs:{prop:"orderDate",label:"订单日期"}}),e._v(" "),r("el-table-column",{attrs:{prop:"expectedDateOfCompletion",label:"预期完成日期"}}),e._v(" "),r("el-table-column",{attrs:{prop:"statusOfOrder",label:"订单状态"}})],1)],1)],1)},staticRenderFns:[]};var n=r("VU/8")(s,o,!1,function(e){r("CPne")},"data-v-0c093660",null);t.default=n.exports}});