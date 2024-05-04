webpackJsonp([48],{q9XJ:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={name:"PlacingOrder",data:function(){return{cartData:[],orderForm:{customer_id:"",salesperson_id:"",order_date:new Date,payment_method:""},rules:{payment_method:[{required:!0,message:"请选择支付方式",trigger:"change"}]}}},computed:{totalPrice:function(){return this.cartData.reduce(function(e,r){return e+r.price*r.quantity},0)}},created:function(){this.$route.query.cartData&&(this.cartData=JSON.parse(this.$route.query.cartData),this.orderForm.customer_id=this.$cookies.get("userInfo").id,this.orderForm.salesperson_id="1")},methods:{add:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return!1;var t=[],a=[];r.cartData.forEach(function(e){t.push(e.partId),a.push(e.quantity)}),r.$axios({url:"/api/salesOrders/add",method:"post",data:{orderId:"",customerId:r.orderForm.customer_id,salespersonId:r.orderForm.salesperson_id,orderDate:r.orderForm.order_date,paymentMethod:r.orderForm.payment_method,productId:t.join("^"),quantity:a.join("^"),totalPrice:r.cartData.reduce(function(e,r){return e+r.price*r.quantity},0)}}).then(function(e){console.log(r.addform),r.$message.success("支付成功."),r.$router.push({path:"/CustomerQueryAccessoryInformation"})}).catch(function(e){r.$message.error("支付失败.")})})}}},o={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"placing-order"},[t("h1",{staticClass:"title"},[e._v("下订单")]),e._v(" "),t("div",{staticClass:"form-container"},[t("el-form",{ref:"orderForm",attrs:{model:e.orderForm,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"客户ID"}},[t("el-input",{attrs:{readonly:"true",placeholder:"输入客户ID"},model:{value:e.orderForm.customer_id,callback:function(r){e.$set(e.orderForm,"customer_id",r)},expression:"orderForm.customer_id"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"销售员ID"}},[t("el-input",{attrs:{readonly:"true",placeholder:"输入销售员ID"},model:{value:e.orderForm.salesperson_id,callback:function(r){e.$set(e.orderForm,"salesperson_id",r)},expression:"orderForm.salesperson_id"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"订单日期"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.orderForm.order_date,callback:function(r){e.$set(e.orderForm,"order_date",r)},expression:"orderForm.order_date"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"支付方式",prop:"payment_method"}},[t("el-select",{attrs:{placeholder:"请选择支付方式"},model:{value:e.orderForm.payment_method,callback:function(r){e.$set(e.orderForm,"payment_method",r)},expression:"orderForm.payment_method"}},[t("el-option",{attrs:{label:"信用卡",value:"credit_card"}}),e._v(" "),t("el-option",{attrs:{label:"借记卡",value:"debit_card"}}),e._v(" "),t("el-option",{attrs:{label:"银行转账",value:"bank_transfer"}}),e._v(" "),t("el-option",{attrs:{label:"支付宝",value:"alipay"}}),e._v(" "),t("el-option",{attrs:{label:"微信支付",value:"wechat"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"总价"}},[t("el-input",{attrs:{readonly:"",placeholder:"总价"},model:{value:e.totalPrice,callback:function(r){e.totalPrice=r},expression:"totalPrice"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.add("orderForm")}}},[e._v("支付")])],1)],1)],1),e._v(" "),t("h2",[e._v("你的购物车如下:")]),e._v(" "),t("div",{staticClass:"table-container"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.cartData,stripe:""}},[t("el-table-column",{attrs:{prop:"partId",label:"配件ID"}}),e._v(" "),t("el-table-column",{attrs:{prop:"partName",label:"配件名称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"quantity",label:"数量"}}),e._v(" "),t("el-table-column",{attrs:{prop:"price",label:"价格"}})],1)],1)])},staticRenderFns:[]};var l=t("VU/8")(a,o,!1,function(e){t("wbcR")},"data-v-2afa2b32",null);r.default=l.exports},wbcR:function(e,r){}});