"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_UserSide_Product_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/UserSide/Product.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/UserSide/Product.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        product_id: 0,
        amount: 1
      })
    };
  },
  props: {
    product: Object,
    product_category_id: Object,
    image: String
  },
  methods: {
    countAmount: function countAmount(val) {
      if (val == "plus" || val == "minus") {
        var amountAdd = this.form.amount;

        if (val == "plus") {
          amountAdd += 1;
        } else if (val == "minus") {
          if (amountAdd <= 1 || amountAdd == 1) return;
          amountAdd -= 1;
        }

        this.form.amount = amountAdd;
      }
    },
    submit: function submit() {
      var _this = this;

      this.form.post("/user/cart", {
        preserveState: true,
        preserveScroll: true,
        onSuccess: function onSuccess(val) {
          _this.$emit("cartAmount", val.props.flash.cartAmount);
        }
      });
    },
    addToCart: function addToCart(productId) {
      var _this2 = this;

      if (this.$page.props.auth.user.autorized) {
        var cart = localStorage.getItem("cart");
        var newProduct = [{
          id: productId,
          amount: this.form.amount
        }];

        if (cart) {
          cart = JSON.parse(cart);
          this.form.product_id = newProduct[0].id;
          this.form.amount = newProduct[0].amount;
          cart.forEach(function (productInCart) {
            if (productInCart.id === productId) {
              productInCart.amount += _this2.form.amount;
              newProduct = null;
            }
          });
          cart.push.apply(cart, newProduct);
          localStorage.setItem("cart", JSON.stringify(cart));
          var cartItemsAmount = 0;
          cart.forEach(function (productInCart) {
            cartItemsAmount += productInCart.amount;
          });
          this.submit("/user/cart");
        } else {
          localStorage.setItem("cart", JSON.stringify(newProduct));
          this.$page.props.cartAmount = newProduct[0].amount;
          this.form.product_id = newProduct[0].id;
          this.form.amount = newProduct[0].amount;
          this.submit("/user/cart");
        }

        this.form.amount = 1;
      }

      if (!this.$page.props.auth.user.autorized) {
        var _cart = localStorage.getItem("cart");

        var _newProduct = [{
          id: productId,
          amount: this.form.amount
        }];

        if (_cart) {
          _cart = JSON.parse(_cart);

          _cart.forEach(function (productInCart) {
            if (productInCart.id === productId) {
              productInCart.amount += _this2.form.amount;
              _newProduct = null;
            }
          });

          _cart.push.apply(_cart, _newProduct);

          localStorage.setItem("cart", JSON.stringify(_cart));
          var _cartItemsAmount = 0;

          _cart.forEach(function (productInCart) {
            _cartItemsAmount += productInCart.amount;
          });

          this.$page.props.cartAmount = _cartItemsAmount;
        } else {
          localStorage.setItem("cart", JSON.stringify(_newProduct));
          this.$page.props.cartAmount = _newProduct[0].amount;
        }

        this.form.amount = 1;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/UserSide/Product.vue?vue&type=template&id=7d0097aa":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/UserSide/Product.vue?vue&type=template&id=7d0097aa ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "All Products", -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  type: "description",
  content: "All Products",
  "head-key": "description"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "flex",
  "aria-label": "Breadcrumb"
};
var _hoisted_4 = {
  "class": "inline-flex items-center space-x-1 md:space-x-3"
};
var _hoisted_5 = {
  "class": "inline-flex items-center"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-4 h-4 mr-2",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
})], -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Home ");

var _hoisted_8 = {
  "aria-current": "page"
};
var _hoisted_9 = {
  "class": "flex items-center"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-6 h-6 text-gray-400",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
})], -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("All Products");

var _hoisted_13 = {
  "aria-current": "page"
};
var _hoisted_14 = {
  "class": "flex items-center"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-6 h-6 text-gray-400",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
})], -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
};
var _hoisted_17 = {
  "class": "w-full flex flex-col lg:flex-row"
};
var _hoisted_18 = {
  "class": "h-fit flex-col gap-8 mt-16 sm:flex sm:flex-row sm:gap-4 sm:h-full sm:mt-24 sm:mx-2 md:gap-8 md:mx-4 lg:flex-col lg:mx-0 lg:mt-36"
};
var _hoisted_19 = {
  "class": "relative flex items-center bg-orange sm:bg-transparent"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "bg-white w-10 h-10 flex items-center justify-center pr-1 rounded-full absolute left-6 z-10 sm:hidden",
  id: "previous-mobile"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "12",
  height: "18",
  xmlns: "http://www.w3.org/2000/svg",
  id: "previous-mobile"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M11 1 3 9l8 8",
  stroke: "#1D2026",
  "stroke-width": "3",
  fill: "none",
  "fill-rule": "evenodd",
  id: "previous-mobile"
})])], -1
/* HOISTED */
);

var _hoisted_21 = ["src"];

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "bg-white w-10 h-10 flex items-center justify-center pl-1 rounded-full absolute right-6 z-10 sm:hidden",
  id: "next-mobile"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "13",
  height: "18",
  xmlns: "http://www.w3.org/2000/svg",
  id: "next-mobile"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "m2 1 8 8-8 8",
  stroke: "#1D2026",
  "stroke-width": "3",
  fill: "none",
  "fill-rule": "evenodd",
  id: "next-mobile"
})])], -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "w-full p-6 lg:mt-36 lg:pr-20 lg:py-10 2xl:pr-40 2xl:mt-40"
};
var _hoisted_24 = {
  "class": "text-very-dark mb-4 font-bold text-3xl lg:text-4xl"
};
var _hoisted_25 = {
  "class": "text-dark-grayish mb-6 text-base sm:text-lg"
};
var _hoisted_26 = {
  "class": "flex items-center justify-between mb-6 sm:flex-col sm:items-start"
};
var _hoisted_27 = {
  "class": "flex items-center gap-4"
};
var _hoisted_28 = {
  "class": "text-very-dark font-bold text-3xl inline-block"
};
var _hoisted_29 = {
  "class": "inline-block h-fit py-0.5 px-2 font-bold bg-pale-orange text-orange rounded-lg text-sm"
};
var _hoisted_30 = {
  "class": "text-dark-grayish w-fit line-through decoration-dark-grayish decoration-1 my-auto"
};
var _hoisted_31 = {
  "class": "flex flex-col gap-5 mb-16 sm:flex-row lg:mb-0"
};
var _hoisted_32 = {
  "class": "w-full h-10 text-sm bg-light py-2 flex items-center justify-between rounded-lg font-bold relatives sm:w-80"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-3 h-1 bg-orange absolute",
  id: "minus"
}, null, -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "12",
  height: "4",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("defs", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z",
  id: "a"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("use", {
  fill: "#FF7E1B",
  "fill-rule": "nonzero",
  "xlink:href": "#a"
})], -1
/* HOISTED */
);

var _hoisted_35 = [_hoisted_33, _hoisted_34];

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "12",
  height: "12",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  id: "plus"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("defs", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z",
  id: "b"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("use", {
  fill: "#FF7E1B",
  "fill-rule": "nonzero",
  "xlink:href": "#b",
  id: "plus"
})], -1
/* HOISTED */
);

var _hoisted_37 = [_hoisted_36];

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "16",
  height: "16",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 22 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z",
  fill: "hsl(223, 64%, 98%)",
  "fill-rule": "nonzero"
})], -1
/* HOISTED */
);

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add to cart ");

var _hoisted_40 = [_hoisted_38, _hoisted_39];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1, _hoisted_2];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/user",
    "class": "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6, _hoisted_7];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/user/products"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12];
    }),
    _: 1
    /* STABLE */

  })])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.name), 1
  /* TEXT */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Gallery "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("picture", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: this.image,
    alt: "sneaker",
    "class": "block sm:rounded-xl xl:w-[70%] xl:rounded-xl m-auto pointer-events-none transition duration-300 lg:w-3/4 lg:pointer-events-auto lg:cursor-pointer lg:hover:shadow-xl",
    id: "hero"
  }, null, 8
  /* PROPS */
  , _hoisted_21), _hoisted_22])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Text "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.description), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_28, " $" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.real_price), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_29, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.sale), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_30, " $" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.price), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.countAmount('minus');
    }),
    id: "minus",
    "class": "plus-minus"
  }, _hoisted_35), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _this.form.amount = $event;
    }),
    type: "number",
    id: "amount",
    min: "1",
    "class": "select-none max-w-20"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, this.form.amount]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.countAmount('plus');
    }),
    id: "plus",
    "class": "plus-minus"
  }, _hoisted_37)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.addToCart($props.product.id);
    }, ["prevent"])),
    "class": "w-full h-10 bg-orange py-2 flex items-center justify-center gap-4 text-xs rounded-lg font-bold text-light shadow-md shadow-orange hover:brightness-125 transition select-none",
    id: "add-cart"
  }, _hoisted_40), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.submit();
    })
  }, "Trapapa")])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/UserSide/Product.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/UserSide/Product.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product_vue_vue_type_template_id_7d0097aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=7d0097aa */ "./resources/js/Pages/UserSide/Product.vue?vue&type=template&id=7d0097aa");
/* harmony import */ var _Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js */ "./resources/js/Pages/UserSide/Product.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_boardgames_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_boardgames_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Product_vue_vue_type_template_id_7d0097aa__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/UserSide/Product.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/UserSide/Product.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/UserSide/Product.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/UserSide/Product.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/UserSide/Product.vue?vue&type=template&id=7d0097aa":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/UserSide/Product.vue?vue&type=template&id=7d0097aa ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_template_id_7d0097aa__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_template_id_7d0097aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=template&id=7d0097aa */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/UserSide/Product.vue?vue&type=template&id=7d0097aa");


/***/ })

}]);