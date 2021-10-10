"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_auth_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Register.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Register.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var quasar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quasar */ "./node_modules/quasar/dist/quasar.esm.prod.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();
    var $q = (0,quasar__WEBPACK_IMPORTED_MODULE_1__.useQuasar)();
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    var auth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      name: '',
      username: '',
      dob: '',
      phone: '',
      email: '',
      password: '',
      password_confirmation: ''
    });
    var errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      name: '',
      username: '',
      dob: '',
      phone: '',
      email: '',
      password: '',
      password_confirmation: ''
    });
    var registerDialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var registerDialog1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var registerDialog2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    function reset() {
      auth.name = '';
      auth.username = '';
      auth.dob = '';
      auth.phone = '';
      auth.email = '';
      auth.password = '';
      auth.password_confirmation = '';
    }

    var dark = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(window.matchMedia('(prefers-color-scheme: dark)').matches);

    function googleRegister() {}

    function facebookRegister() {}

    function register() {
      registerDialog.value = true;
    }

    function register1() {
      axios.post('/api/register', auth).then(function (response) {
        registerDialog.value = false;
        registerDialog1.value = true;
      })["catch"](function (error) {
        if (error.response.data.errors.name) {
          errors.name = error.response.data.errors.name.toString();
        }

        if (error.response.data.errors.phone) {
          errors.phone = error.response.data.errors.phone.toString();
        }

        if (error.response.data.errors.email) {
          errors.email = error.response.data.errors.email.toString();
        }

        if (error.response.data.errors.username) {
          errors.username = error.response.data.errors.username.toString();
        }
      });
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(auth, function (currentValue, oldValue) {
        errors.name = '';
        errors.phone = '';
        errors.email = '';
        errors.username = '';
      });
    }

    function register2() {
      axios.post('/api/register1', auth).then(function (response) {
        registerDialog1.value = false;
        registerDialog2.value = true;
      })["catch"](function (error) {});
    }

    function register3() {
      axios.post('/api/register2', auth).then(function (response) {
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
      isPwd: (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true),
      isPwd1: (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true),
      dark: dark,
      auth: auth,
      errors: errors,
      reset: reset,
      registerDialog: registerDialog,
      registerDialog1: registerDialog1,
      registerDialog2: registerDialog2,
      register: register,
      register1: register1,
      register2: register2,
      register3: register3,
      facebookRegister: facebookRegister,
      googleRegister: googleRegister
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-2ebeb09e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Join Twitter now ");

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

var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-secondary mt-5"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("By signing up, you agree to the "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "hover:underline cursor-pointer text-blue"
  }, "Terms of Service "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" and "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-blue hover:underline cursor-pointer"
  }, "Privacy Policy"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(", including "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-blue cursor-pointer hover:underline"
  }, "Cookie Use"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(".")], -1
  /* HOISTED */
  );
});

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Already have an account? ");

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Sign in");

var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "text-xl font-bold"
  }, "Register", -1
  /* HOISTED */
  );
});

var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "font-semibold text-lg"
  }, "Create your account", -1
  /* HOISTED */
  );
});

var _hoisted_9 = {
  key: 0,
  "class": "text-red-400 font-bold"
};
var _hoisted_10 = {
  key: 1,
  "class": "text-red-400 font-bold"
};
var _hoisted_11 = {
  key: 2,
  "class": "text-red-400 font-bold"
};
var _hoisted_12 = {
  key: 3,
  "class": "text-red-400 font-bold q-mb-lg"
};

var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "font-bold"
  }, " Date of Birth", -1
  /* HOISTED */
  );
});

var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-secondary"
  }, " This will not be publicly visible. Claim your age, even if this account is for a business, pet, or something else. ", -1
  /* HOISTED */
  );
});

var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "font-semibold text-lg"
  }, "Enter your password", -1
  /* HOISTED */
  );
});

var _hoisted_16 = {
  key: 0,
  "class": "text-red-400 font-bold"
};
var _hoisted_17 = {
  key: 1,
  "class": "text-red-400 font-bold q-mb-lg"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_q_btn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-btn");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_q_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-icon");

  var _component_q_card_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-card-section");

  var _component_q_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-input");

  var _component_q_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-card");

  var _component_q_dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-dialog");

  var _component_q_date = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-date");

  var _component_auth_layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("auth-layout");

  var _directive_close_popup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("close-popup");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_auth_layout, null, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
        unelevated: "",
        style: {
          "width": "300px"
        },
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mt-10", $setup.dark ? 'bg-white text-black' : 'bg-blue']),
        "no-caps": "",
        rounded: "",
        icon: "fab fa-google",
        label: "Sign up with Google"
      }, null, 8
      /* PROPS */
      , ["class"]), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
        unelevated: "",
        "no-caps": "",
        style: {
          "width": "300px"
        },
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mt-5", $setup.dark ? 'bg-white text-black' : 'bg-blue']),
        rounded: "",
        icon: "fab fa-facebook",
        label: "Sign up with Facebook"
      }, null, 8
      /* PROPS */
      , ["class"]), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
        unelevated: "",
        "no-caps": "",
        style: {
          "width": "300px"
        },
        onClick: $setup.register,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mt-5", $setup.dark ? 'bg-white text-black' : 'bg-blue']),
        rounded: "",
        label: "Sign up with phone or email"
      }, null, 8
      /* PROPS */
      , ["onClick", "class"]), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        "class": "text-blue hover:underline",
        to: "/login"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_6];
        }),
        _: 1
        /* STABLE */

      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_dialog, {
        modelValue: $setup.registerDialog,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $setup.registerDialog = $event;
        }),
        persistent: ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_card, {
            "class": "register",
            style: {
              "min-width": "500px"
            }
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

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_card_section, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
                    "class": "q-mt-lg q-mb-sm",
                    outlined: "",
                    modelValue: $setup.auth.name,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                      return $setup.auth.name = $event;
                    }),
                    label: "Name",
                    autofocus: ""
                  }, null, 8
                  /* PROPS */
                  , ["modelValue"]), $setup.errors.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.name), 1
                  /* TEXT */
                  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
                    "class": "q-mt-lg q-mb-sm",
                    outlined: "",
                    modelValue: $setup.auth.username,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                      return $setup.auth.username = $event;
                    }),
                    label: "Username",
                    autofocus: ""
                  }, null, 8
                  /* PROPS */
                  , ["modelValue"]), $setup.errors.username ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.username), 1
                  /* TEXT */
                  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
                    "class": "q-mt-lg q-mb-sm",
                    type: "email",
                    outlined: "",
                    modelValue: $setup.auth.email,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                      return $setup.auth.email = $event;
                    }),
                    label: "Email"
                  }, null, 8
                  /* PROPS */
                  , ["modelValue"]), $setup.errors.email ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.email), 1
                  /* TEXT */
                  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
                    "class": "q-mt-lg q-mb-sm",
                    outlined: "",
                    modelValue: $setup.auth.phone,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                      return $setup.auth.phone = $event;
                    }),
                    label: "Phone number"
                  }, null, 8
                  /* PROPS */
                  , ["modelValue"]), $setup.errors.phone ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.phone), 1
                  /* TEXT */
                  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
                    "no-caps": "",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mt-5 font-bold full-width", $setup.dark ? 'bg-white text-black' : 'bg-blue']),
                    disabled: $setup.auth.name.length < 3 || $setup.auth.phone.length < 10 || !$setup.auth.email || $setup.auth.username.length < 3,
                    unelevated: "",
                    rounded: "",
                    label: "Next",
                    onClick: $setup.register1
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

          })];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_dialog, {
        modelValue: $setup.registerDialog1,
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
          return $setup.registerDialog1 = $event;
        }),
        persistent: ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_card, {
            "class": "register",
            style: {
              "min-width": "500px"
            }
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_card_section, {
                "class": "flex justify-between items-center"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
                    rounded: "",
                    unelevated: "",
                    onClick: _cache[5] || (_cache[5] = function ($event) {
                      $setup.registerDialog1 = false;
                      $setup.registerDialog = true;
                    }),
                    "class": "cursor-pointer fa-lg",
                    icon: "fas fa-arrow-left"
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_icon, {
                    size: "lg",
                    color: "blue",
                    name: "fab fa-twitter"
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
                    icon: "fas fa-times",
                    onClick: _cache[6] || (_cache[6] = function ($event) {
                      return $setup.auth = [];
                    }),
                    flat: "",
                    round: "",
                    dense: ""
                  }, null, 512
                  /* NEED_PATCH */
                  ), [[_directive_close_popup]])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_card_section, {
                "class": ""
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [_hoisted_13, _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_date, {
                    "class": "q-mt-md full-width",
                    outlined: "",
                    modelValue: $setup.auth.dob,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                      return $setup.auth.dob = $event;
                    }),
                    "default-year-month": "2000/09"
                  }, null, 8
                  /* PROPS */
                  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
                    "no-caps": "",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mt-5 font-bold full-width", $setup.dark ? 'bg-white text-black' : 'bg-blue']),
                    disabled: !$setup.auth.dob,
                    unelevated: "",
                    rounded: "",
                    label: "Next",
                    onClick: $setup.register2
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

          })];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_dialog, {
        modelValue: $setup.registerDialog2,
        "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
          return $setup.registerDialog2 = $event;
        }),
        persistent: ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_card, {
            "class": "register",
            style: {
              "min-width": "500px"
            }
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_card_section, {
                "class": "flex justify-between items-center"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
                    rounded: "",
                    unelevated: "",
                    onClick: _cache[9] || (_cache[9] = function ($event) {
                      $setup.registerDialog2 = false;
                      $setup.registerDialog1 = true;
                    }),
                    "class": "cursor-pointer fa-lg",
                    icon: "fas fa-arrow-left"
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_icon, {
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
                  return [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
                    "class": "q-mt-lg q-mb-sm",
                    type: $setup.isPwd ? 'password' : 'text',
                    outlined: "",
                    modelValue: $setup.auth.password,
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
                      return $setup.auth.password = $event;
                    }),
                    label: "Password",
                    autofocus: ""
                  }, {
                    append: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_icon, {
                        size: "xs",
                        name: $setup.isPwd ? 'fas fa-eye' : 'fas fa-eye-slash',
                        "class": "cursor-pointer",
                        onClick: _cache[10] || (_cache[10] = function ($event) {
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
                  , ["type", "modelValue"]), $setup.errors.password ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.password), 1
                  /* TEXT */
                  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
                    "class": "q-mt-lg q-mb-sm",
                    type: $setup.isPwd1 ? 'password' : 'text',
                    outlined: "",
                    modelValue: $setup.auth.password_confirmation,
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
                      return $setup.auth.password_confirmation = $event;
                    }),
                    label: "Confirm your password"
                  }, {
                    append: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_icon, {
                        size: "xs",
                        name: $setup.isPwd1 ? 'fas fa-eye' : 'fas fa-eye-slash',
                        "class": "cursor-pointer",
                        onClick: _cache[12] || (_cache[12] = function ($event) {
                          return $setup.isPwd1 = !$setup.isPwd1;
                        })
                      }, null, 8
                      /* PROPS */
                      , ["name"])];
                    }),
                    _: 1
                    /* STABLE */

                  }, 8
                  /* PROPS */
                  , ["type", "modelValue"]), $setup.errors.password_confirmation ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errors.password_confirmation), 1
                  /* TEXT */
                  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
                    "no-caps": "",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mt-5 font-bold full-width", $setup.dark ? 'bg-white text-black' : 'bg-blue']),
                    disabled: !$setup.auth.password || !$setup.auth.password_confirmation,
                    unelevated: "",
                    rounded: "",
                    label: "Register",
                    onClick: $setup.register3
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n@media screen and (max-width:500px) {\n.register[data-v-2ebeb09e] {\r\n   width:100% ! important\n}}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_style_index_0_id_2ebeb09e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_style_index_0_id_2ebeb09e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_style_index_0_id_2ebeb09e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/auth/Register.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_2ebeb09e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=2ebeb09e&scoped=true */ "./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&scoped=true");
/* harmony import */ var _Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js */ "./resources/js/pages/auth/Register.vue?vue&type=script&lang=js");
/* harmony import */ var _Register_vue_vue_type_style_index_0_id_2ebeb09e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css */ "./resources/js/pages/auth/Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css");
/* harmony import */ var D_Twitter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Twitter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Register_vue_vue_type_template_id_2ebeb09e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2ebeb09e"],['__file',"resources/js/pages/auth/Register.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/auth/Register.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/auth/Register.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Register.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&scoped=true":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&scoped=true ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_2ebeb09e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_2ebeb09e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=template&id=2ebeb09e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Register.vue?vue&type=template&id=2ebeb09e&scoped=true");


/***/ }),

/***/ "./resources/js/pages/auth/Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/auth/Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_style_index_0_id_2ebeb09e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/auth/Register.vue?vue&type=style&index=0&id=2ebeb09e&scoped=true&lang=css");


/***/ })

}]);