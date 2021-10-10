"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_auth_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Login.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Login.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var quasar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quasar */ "./node_modules/quasar/dist/quasar.esm.prod.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var $q = (0,quasar__WEBPACK_IMPORTED_MODULE_1__.useQuasar)();
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_3__.useStore)();
    var auth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      credentials: '',
      password: ''
    });
    var errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      credentials: '',
      password: ''
    });
    var loginDialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var loginDialog1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    function reset() {
      auth.credentials = '';
      auth.password = '';
    }

    var dark = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(window.matchMedia('(prefers-color-scheme: dark)').matches);

    function googleLogin() {}

    function facebookLogin() {}

    function login() {
      axios.post('/api/login', auth).then(function (response) {
        loginDialog.value = false;
        loginDialog1.value = true;
      })["catch"](function (error) {
        errors.credentials = error.response.data;
      });
    }

    function login1() {
      axios.post('/api/login1', auth).then(function (response) {
        $q.cookies.set('authToken', response.data, {
          expires: '30d'
        });
        axios.get('/api/user', {
          headers: {
            'Authorization': "Bearer ".concat(response.data)
          }
        }).then(function (res) {
          store.commit('loginUser', res.data);
          store.commit('setAuthToken', response.data);
          store.dispatch('fetchUserDetail', response.data);
          router.push('/');
        });
      })["catch"](function (error) {
        errors.password = error.response.data;
      });
    }

    return {
      dark: dark,
      isPwd: (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true),
      auth: auth,
      errors: errors,
      reset: reset,
      loginDialog: loginDialog,
      loginDialog1: loginDialog1,
      login: login,
      login1: login1,
      facebookLogin: facebookLogin,
      googleLogin: googleLogin
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-42c42d6a"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Sign in to Twitter ");

var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_4 = {
  "class": "mt-5"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Don't have an account? ");

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Sign up");

var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "text-xl font-bold"
  }, "Login", -1
  /* HOISTED */
  );
});

var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "font-semibold text-lg"
  }, "To get started, first enter your phone, email, or @username", -1
  /* HOISTED */
  );
});

var _hoisted_9 = {
  key: 0,
  "class": "text-red-400 font-bold"
};

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "text-xl font-bold"
  }, "Login", -1
  /* HOISTED */
  );
});

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "font-semibold text-lg"
  }, "Enter your password", -1
  /* HOISTED */
  );
});

var _hoisted_12 = {
  key: 0,
  "class": "text-red-400"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_q_btn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-btn");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_q_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-icon");

  var _component_q_card_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-card-section");

  var _component_q_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-input");

  var _component_q_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-card");

  var _component_q_dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-dialog");

  var _component_auth_layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("auth-layout");

  var _directive_close_popup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("close-popup");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_auth_layout, null, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
        onClick: $setup.googleLogin,
        unelevated: "",
        style: {
          "width": "300px"
        },
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mt-10", $setup.dark ? 'bg-white text-black' : 'bg-blue']),
        "no-caps": "",
        rounded: "",
        icon: "fab fa-google",
        label: "Sign in with Google"
      }, null, 8
      /* PROPS */
      , ["onClick", "class"]), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
        onClick: $setup.facebookLogin,
        unelevated: "",
        "no-caps": "",
        style: {
          "width": "300px"
        },
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mt-5", $setup.dark ? 'bg-white text-black' : 'bg-blue']),
        rounded: "",
        icon: "fab fa-facebook",
        label: "Sign in with Facebook"
      }, null, 8
      /* PROPS */
      , ["onClick", "class"]), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
        unelevated: "",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return $setup.loginDialog = true;
        }),
        "no-caps": "",
        style: {
          "width": "300px"
        },
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mt-5", $setup.dark ? 'bg-white text-black' : 'bg-blue']),
        rounded: "",
        label: "Sign in with phone or email"
      }, null, 8
      /* PROPS */
      , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        "class": "text-blue hover:underline",
        to: "/register"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_6];
        }),
        _: 1
        /* STABLE */

      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_dialog, {
        modelValue: $setup.loginDialog,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.loginDialog = $event;
        }),
        persistent: ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_card, {
            ref: "hello"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_card_section, {
                "class": "flex justify-between items-center"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_icon, {
                    size: "lg",
                    color: "blue",
                    name: "fab fa-twitter"
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
                    icon: "fas fa-times",
                    onClick: $setup.reset,
                    flat: "",
                    round: "",
                    dense: ""
                  }, null, 8
                  /* PROPS */
                  , ["onClick"]), [[_directive_close_popup]])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_card_section, {
                "class": ""
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
                    "class": "q-mt-lg q-mb-sm",
                    outlined: "",
                    modelValue: $setup.auth.credentials,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                      return $setup.auth.credentials = $event;
                    }),
                    label: "Phone, email or username",
                    autofocus: "",
                    onKeyup: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($setup.login, ["enter"])
                  }, null, 8
                  /* PROPS */
                  , ["modelValue", "onKeyup"]), $setup.errors.credentials ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.credentials), 1
                  /* TEXT */
                  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
                    "no-caps": "",
                    "class": "text-blue mt-16 full-width bg-transparent",
                    unelevated: "",
                    rounded: "",
                    label: "Forgot password?"
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
                    "no-caps": "",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mt-5 font-bold full-width", $setup.dark ? 'bg-white text-black' : 'bg-blue']),
                    disabled: $setup.auth.credentials < 4,
                    unelevated: "",
                    rounded: "",
                    label: "Next",
                    onClick: $setup.login
                  }, null, 8
                  /* PROPS */
                  , ["disabled", "class", "onClick"])];
                }),
                _: 1
                /* STABLE */

              })];
            }),
            _: 1
            /* STABLE */

          }, 512
          /* NEED_PATCH */
          )];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_dialog, {
        modelValue: $setup.loginDialog1,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $setup.loginDialog1 = $event;
        }),
        persistent: ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_card, {
            id: "login1",
            style: {
              "min-width": "500px"
            }
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_card_section, {
                "class": "flex justify-between items-center"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_icon, {
                    size: "lg",
                    color: "blue",
                    name: "fab fa-twitter"
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
                    icon: "fas fa-times",
                    onClick: $setup.reset,
                    flat: "",
                    round: "",
                    dense: ""
                  }, null, 8
                  /* PROPS */
                  , ["onClick"]), [[_directive_close_popup]])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_card_section, {
                "class": ""
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
                    "class": "q-mt-lg q-mb-sm",
                    outlined: "",
                    modelValue: $setup.auth.password,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                      return $setup.auth.password = $event;
                    }),
                    type: $setup.isPwd ? 'password' : 'text',
                    label: "Password",
                    autofocus: "",
                    onKeyup: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($setup.login1, ["enter"])
                  }, {
                    append: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_icon, {
                        size: "xs",
                        name: $setup.isPwd ? 'fas fa-eye' : 'fas fa-eye-slash',
                        "class": "cursor-pointer",
                        onClick: _cache[3] || (_cache[3] = function ($event) {
                          return $setup.isPwd = !$setup.isPwd;
                        })
                      }, null, 8
                      /* PROPS */
                      , ["name"])];
                    }),
                    _: 1
                    /* STABLE */

                  }, 8
                  /* PROPS */
                  , ["modelValue", "type", "onKeyup"]), $setup.errors.password ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.password), 1
                  /* TEXT */
                  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
                    "no-caps": "",
                    "class": "text-blue mt-16 full-width bg-transparent",
                    unelevated: "",
                    rounded: "",
                    label: "Forgot password?"
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
                    "no-caps": "",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mt-5 font-bold full-width", $setup.dark ? 'bg-white text-black' : 'bg-blue']),
                    onClick: $setup.login1,
                    disabled: $setup.auth.password.length < 8,
                    unelevated: "",
                    rounded: "",
                    label: "Login"
                  }, null, 8
                  /* PROPS */
                  , ["onClick", "disabled", "class"])];
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

      }, 8
      /* PROPS */
      , ["modelValue"])];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Login.vue?vue&type=style&index=0&id=42c42d6a&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Login.vue?vue&type=style&index=0&id=42c42d6a&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n@media screen and (max-width:500px) {\n#login1[data-v-42c42d6a] {\r\n   width:100% ! important\n}}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Login.vue?vue&type=style&index=0&id=42c42d6a&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Login.vue?vue&type=style&index=0&id=42c42d6a&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_style_index_0_id_42c42d6a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=style&index=0&id=42c42d6a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Login.vue?vue&type=style&index=0&id=42c42d6a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_style_index_0_id_42c42d6a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_style_index_0_id_42c42d6a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/auth/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/auth/Login.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_42c42d6a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=42c42d6a&scoped=true */ "./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&scoped=true");
/* harmony import */ var _Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js */ "./resources/js/pages/auth/Login.vue?vue&type=script&lang=js");
/* harmony import */ var _Login_vue_vue_type_style_index_0_id_42c42d6a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&id=42c42d6a&scoped=true&lang=css */ "./resources/js/pages/auth/Login.vue?vue&type=style&index=0&id=42c42d6a&scoped=true&lang=css");
/* harmony import */ var D_Twitter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Twitter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Login_vue_vue_type_template_id_42c42d6a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-42c42d6a"],['__file',"resources/js/pages/auth/Login.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/auth/Login.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/auth/Login.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Login.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&scoped=true":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&scoped=true ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_42c42d6a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_42c42d6a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=template&id=42c42d6a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&scoped=true");


/***/ }),

/***/ "./resources/js/pages/auth/Login.vue?vue&type=style&index=0&id=42c42d6a&scoped=true&lang=css":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/auth/Login.vue?vue&type=style&index=0&id=42c42d6a&scoped=true&lang=css ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_style_index_0_id_42c42d6a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=style&index=0&id=42c42d6a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Login.vue?vue&type=style&index=0&id=42c42d6a&scoped=true&lang=css");


/***/ })

}]);