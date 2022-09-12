"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Shared_Nav_copy_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Nav copy.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Nav copy.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/menu/menu.js");
/* harmony import */ var _NavLink_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavLink.vue */ "./resources/js/Pages/Shared/NavLink.vue");


var __default__ = {
  components: {
    NavLink: _NavLink_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {// admin() {
    //     if(this.this.$page.props.auth.user.can.admin) {
    //         return this.$page.props.auth.user.can.admin
    //     } else {
    //         return false
    //     }
    // },
    // manager() {
    //     if(this.this.$page.props.auth.user.can.manager) {
    //         return this.$page.props.auth.user.can.manager
    //     } else {
    //         return false
    //     }
    // },
    // default() {
    //     if(this.this.$page.props.auth.user.can.default) {
    //         return this.$page.props.auth.user.can.default
    //     } else {
    //         return false
    //     }
    // },
    // auth() {
    //     if(this.this.$page.props.auth) {
    //         return this.$page.props.auth
    //     } else {
    //         return false
    //     }
    // }
  },
  mounted: function mounted() {
    console.log(this);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  name: 'Nav copy',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      NavLink: _NavLink_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      Menu: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.Menu,
      MenuButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.MenuButton,
      MenuItem: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.MenuItem,
      MenuItems: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.MenuItems
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Nav copy.vue?vue&type=template&id=a6768b7a":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Nav copy.vue?vue&type=template&id=a6768b7a ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex items-center space-x-6"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Home");

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("All Products");

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Admin Panel ");

var _hoisted_5 = {
  "class": "py-1"
};
var _hoisted_6 = {
  key: 1
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Logout");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NavLink"], {
    href: "/",
    active: _ctx.$page.component === 'Home'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["active"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NavLink"], {
    href: "/products",
    active: _ctx.$page.component === 'Products'
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["active"])]), _ctx.admin || _ctx.manager ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Menu"], {
    key: 0,
    as: "div",
    "class": "relative inline-block text-left"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuButton"], {
        "class": "inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_4];
        }),
        _: 1
        /* STABLE */

      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "transition ease-out duration-100",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItems"], {
            "class": "z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
                  var active = _ref.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                    href: "/posts",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm'])
                  }, "Posts", 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
                  var active = _ref2.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                    href: "/posts-tags",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm'])
                  }, "Posts Tags", 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref3) {
                  var active = _ref3.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                    href: "/orders",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm'])
                  }, "Orders", 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref4) {
                  var active = _ref4.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                    href: "/product_categories",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm'])
                  }, "Product Categories", 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref5) {
                  var active = _ref5.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                    href: "/products",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm'])
                  }, "Products", 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref6) {
                  var active = _ref6.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                    href: "/users",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm'])
                  }, "Users", 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              })])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.auth ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NavLink"], {
    href: "/logout",
    method: "post",
    as: "button"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
}

/***/ }),

/***/ "./resources/js/Pages/Shared/Nav copy.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Shared/Nav copy.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Nav_copy_vue_vue_type_template_id_a6768b7a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav copy.vue?vue&type=template&id=a6768b7a */ "./resources/js/Pages/Shared/Nav copy.vue?vue&type=template&id=a6768b7a");
/* harmony import */ var _Nav_copy_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav copy.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Shared/Nav copy.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_xampp_htdocs_boardgames_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_boardgames_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Nav_copy_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Nav_copy_vue_vue_type_template_id_a6768b7a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Shared/Nav copy.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Shared/Nav copy.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Nav copy.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_copy_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_copy_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Nav copy.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Nav copy.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Shared/Nav copy.vue?vue&type=template&id=a6768b7a":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Nav copy.vue?vue&type=template&id=a6768b7a ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_copy_vue_vue_type_template_id_a6768b7a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_copy_vue_vue_type_template_id_a6768b7a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Nav copy.vue?vue&type=template&id=a6768b7a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Nav copy.vue?vue&type=template&id=a6768b7a");


/***/ })

}]);