"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_user_Notifications_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/user/Notifications.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/user/Notifications.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    return {
      tab: (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('all')
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/user/Notifications.vue?vue&type=template&id=2fe98ea6":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/user/Notifications.vue?vue&type=template&id=2fe98ea6 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "font-bold"
}, "Notifications", -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://cdn.quasar.dev/img/boy-avatar.png"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Content ");

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://cdn.quasar.dev/img/boy-avatar.png"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Content ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_q_tab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-tab");

  var _component_q_tabs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-tabs");

  var _component_q_separator = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-separator");

  var _component_q_avatar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-avatar");

  var _component_q_item_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-item-section");

  var _component_q_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-item");

  var _component_q_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-list");

  var _component_q_tab_panel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-tab-panel");

  var _component_q_tab_panels = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-tab-panels");

  var _component_user_layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("user-layout");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_user_layout, null, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_tabs, {
        modelValue: $setup.tab,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.tab = $event;
        }),
        align: "justify",
        "class": "text-teal",
        "active-color": "primary",
        "indicator-color": "primary",
        "no-caps": ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_tab, {
            name: "all",
            label: "All"
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_tab, {
            name: "mention",
            label: "Mention"
          })];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_separator), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_tab_panels, {
        modelValue: $setup.tab,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $setup.tab = $event;
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_tab_panel, {
            name: "all"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_list, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_item, {
                    clickable: ""
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_item_section, {
                        avatar: ""
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_avatar, null, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [_hoisted_2];
                            }),
                            _: 1
                            /* STABLE */

                          })];
                        }),
                        _: 1
                        /* STABLE */

                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_item_section, null, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [_hoisted_3];
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

              })];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_tab_panel, {
            name: "mention"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_list, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_item, {
                    clickable: ""
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_item_section, {
                        avatar: ""
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_avatar, null, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [_hoisted_4];
                            }),
                            _: 1
                            /* STABLE */

                          })];
                        }),
                        _: 1
                        /* STABLE */

                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_item_section, null, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [_hoisted_5];
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

/***/ "./resources/js/pages/user/Notifications.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/user/Notifications.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Notifications_vue_vue_type_template_id_2fe98ea6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notifications.vue?vue&type=template&id=2fe98ea6 */ "./resources/js/pages/user/Notifications.vue?vue&type=template&id=2fe98ea6");
/* harmony import */ var _Notifications_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notifications.vue?vue&type=script&lang=js */ "./resources/js/pages/user/Notifications.vue?vue&type=script&lang=js");
/* harmony import */ var D_Twitter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Twitter_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Notifications_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Notifications_vue_vue_type_template_id_2fe98ea6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/user/Notifications.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/user/Notifications.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/user/Notifications.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notifications_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notifications_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Notifications.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/user/Notifications.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/user/Notifications.vue?vue&type=template&id=2fe98ea6":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/user/Notifications.vue?vue&type=template&id=2fe98ea6 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notifications_vue_vue_type_template_id_2fe98ea6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notifications_vue_vue_type_template_id_2fe98ea6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Notifications.vue?vue&type=template&id=2fe98ea6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/user/Notifications.vue?vue&type=template&id=2fe98ea6");


/***/ })

}]);