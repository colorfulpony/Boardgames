"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Orders_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Orders/Create.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Orders/Create.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _vuepic_vue_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vuepic/vue-datepicker */ "./node_modules/@vuepic/vue-datepicker/dist/vue-datepicker.es.js");
/* harmony import */ var _vuepic_vue_datepicker_dist_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vuepic/vue-datepicker/dist/main.css */ "./node_modules/@vuepic/vue-datepicker/dist/main.css");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");




var __default__ = {
  data: function data() {
    return {// product_ids: [],
      // amounts: [],
      // order_product_amount: {
      //     product_id: "",
      //     amount: "",
      // },
    };
  } // methods: {
  //     order_product_amount_count() {
  //         this.product_ids.forEach((product_id) => {
  //             this.amounts.forEach((amount) => {
  //                 this.order_product_amount.product_id = product_id;
  //                 this.order_product_amount.amount = amount;
  //                 this.form.products_id.push(this.order_product_amount);
  //             });
  //         });
  //         console.log(this.order_product_amount);
  //     },
  // },
  // computed: {
  //     order_product_amount() {
  //         this.product_ids.forEach((product_id) => {
  //             this.amounts.forEach((amount) => {
  //                 return;
  //             });
  //         });
  //     },
  // },
  // updated() {
  //     console.log(this.product_ids)
  //     console.log('asdfasd')
  // },
  // mounted() {
  //     console.log(this.product_ids)
  //     console.log('asdfasd')
  // },

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  name: 'Create',
  props: {
    users: Object,
    products: Object
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var product_ids = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var amounts = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.useForm)({
      delivery_adress: "",
      full_cost: "",
      date_of_order: "",
      date_of_payment: "",
      user_id: 0,
      products_id: []
    });

    var order_product_amount_count = function order_product_amount_count(product_ids, amounts, products_id) {
      // clear products_id array if click submit button 2 and more times
      if (products_id.length > 0) {
        products_id.splice(0, products_id.length);
      }

      for (var i = 0; i < product_ids.value.length; i++) {
        var order_product_amount = {
          product_id: 0,
          amount: 0
        };
        order_product_amount.product_id = product_ids.value[i];
        order_product_amount.amount = amounts.value[product_ids.value[i]];
        products_id.push(order_product_amount);
      }
    };

    var submit = function submit() {
      order_product_amount_count(product_ids, amounts, form.products_id);
      form.post("/order/create");
    };

    var __returned__ = {
      product_ids: product_ids,
      amounts: amounts,
      form: form,
      props: props,
      order_product_amount_count: order_product_amount_count,
      submit: submit,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      Datepicker: _vuepic_vue_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"],
      useForm: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.useForm
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Orders/Create.vue?vue&type=template&id=69f83dad":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Orders/Create.vue?vue&type=template&id=69f83dad ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Create Order", -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  type: "description",
  content: "Create Order",
  "head-key": "description"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-4xl font-bold"
}, "Create Order")], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "h-screen content-center"
};
var _hoisted_5 = {
  "class": "mb-6"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "delivery_adress",
  "class": "block mb-2 text-sm font-medium text-gray-900"
}, "Delivery Adress", -1
/* HOISTED */
);

var _hoisted_7 = ["textContent"];
var _hoisted_8 = {
  "class": "mb-6"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "tag",
  "class": "block mb-2 text-sm font-medium text-gray-900"
}, "User ", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  selected: "",
  value: "0"
}, "Choose user", -1
/* HOISTED */
);

var _hoisted_11 = ["value"];
var _hoisted_12 = ["textContent"];
var _hoisted_13 = {
  "class": "mb-6"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "full_cost",
  "class": "block mb-2 text-sm font-medium text-gray-90"
}, "Full Cost", -1
/* HOISTED */
);

var _hoisted_15 = ["textContent"];
var _hoisted_16 = {
  "class": "mb-6"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "products_id",
  "class": "block mb-2 text-sm font-medium text-gray-900"
}, "Select products", -1
/* HOISTED */
);

var _hoisted_18 = ["value"];
var _hoisted_19 = {
  key: 0,
  "for": "amoutn",
  "class": "mt-6 block mb-2 text-sm font-medium text-gray-900"
};
var _hoisted_20 = {
  key: 0,
  "class": "flex justify-between py-5"
};
var _hoisted_21 = ["onUpdate:modelValue"];
var _hoisted_22 = ["textContent"];
var _hoisted_23 = {
  "class": "mb-6"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "date_of_order",
  "class": "block mb-2 text-sm font-medium text-gray-900"
}, "Date of Order", -1
/* HOISTED */
);

var _hoisted_25 = ["textContent"];
var _hoisted_26 = {
  "class": "mb-6"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "date_of_payment",
  "class": "block mb-2 text-sm font-medium text-gray-90"
}, "Date of Payment", -1
/* HOISTED */
);

var _hoisted_28 = ["textContent"];
var _hoisted_29 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1, _hoisted_2];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.submit && $setup.submit.apply($setup, arguments);
    }, ["prevent"])),
    "class": "mt-8 max-w-md mx-auto"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.delivery_adress = $event;
    }),
    name: "delivery_adress",
    type: "text",
    id: "delivery_adress",
    "class": "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.delivery_adress]]), $setup.form.errors.delivery_adress ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.delivery_adress),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_7)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.user_id = $event;
    }),
    id: "tag",
    "class": "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  }, [_hoisted_10, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.users, function (user) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: user.id,
      value: user.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.name), 9
    /* TEXT, PROPS */
    , _hoisted_11);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.form.user_id]]), $setup.form.errors.user_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.user_id),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_12)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.form.full_cost = $event;
    }),
    name: "full_cost",
    type: "text",
    id: "full_cost",
    "class": "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.full_cost]]), $setup.form.errors.full_cost ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.full_cost),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_15)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    name: "products_id",
    multiple: "",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.product_ids = $event;
    }),
    id: "products_id",
    "class": "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.products, function (product) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: product.id,
      value: product.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.name), 9
    /* TEXT, PROPS */
    , _hoisted_18);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.product_ids]]), $setup.form.products_id.length != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_19, "Amount")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.products, function (product) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: product.id
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.product_ids, function (product_id) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: product_id
      }, [product.id == product_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.name), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $setup.amounts[product.id] = $event;
        },
        "class": "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5",
        type: "number",
        id: "amount",
        name: "amount",
        min: "0",
        max: "10000000000"
      }, null, 8
      /* PROPS */
      , _hoisted_21), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.amounts[product.id]]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
      /* STABLE_FRAGMENT */
      );
    }), 128
    /* KEYED_FRAGMENT */
    ))], 64
    /* STABLE_FRAGMENT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )), $setup.form.errors.products_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.products_id),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_22)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Datepicker"], {
    name: "date_of_order",
    id: "date_of_order",
    "class": "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
    modelValue: $setup.form.date_of_order,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.form.date_of_order = $event;
    }),
    modelType: "yyyy-MM-dd HH:mm:ss",
    autoApply: ""
  }, null, 8
  /* PROPS */
  , ["modelValue"]), $setup.form.errors.date_of_order ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.date_of_order),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_25)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Datepicker"], {
    name: "date_of_payment",
    id: "date_of_payment",
    "class": "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
    modelValue: $setup.form.date_of_payment,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.form.date_of_payment = $event;
    }),
    modelType: "yyyy-MM-dd HH:mm:ss",
    autoApply: ""
  }, null, 8
  /* PROPS */
  , ["modelValue"]), $setup.form.errors.date_of_payment ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.date_of_payment),
    "class": "text-red-500 text-xs mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_28)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: $setup.form.processing,
    type: "submit",
    "class": "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
  }, " Submit ", 8
  /* PROPS */
  , _hoisted_29)], 32
  /* HYDRATE_EVENTS */
  )])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Orders/Create.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Orders/Create.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_69f83dad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=69f83dad */ "./resources/js/Pages/Orders/Create.vue?vue&type=template&id=69f83dad");
/* harmony import */ var _Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Orders/Create.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_xampp_htdocs_boardgames_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_boardgames_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_69f83dad__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Orders/Create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Orders/Create.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Orders/Create.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Orders/Create.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Orders/Create.vue?vue&type=template&id=69f83dad":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Orders/Create.vue?vue&type=template&id=69f83dad ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_69f83dad__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_69f83dad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=69f83dad */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Orders/Create.vue?vue&type=template&id=69f83dad");


/***/ })

}]);