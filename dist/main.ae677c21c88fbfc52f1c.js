/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/Header/Header.tsx":
/*!**************************************!*\
  !*** ./Components/Header/Header.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/HomeOutlined.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/AppstoreOutlined.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/ProfileOutlined.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ \"../node_modules/@ant-design/icons/es/icons/UserOutlined.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"../node_modules/antd/es/menu/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.css */ \"./Components/Header/style.module.css\");\n\n\n\n\nconst items = [{\n  label: 'Главная',\n  key: 'main',\n  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n}, {\n  label: 'Режим',\n  key: 'app',\n  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null),\n  disabled: true\n}, {\n  label: 'Результаты',\n  key: 'results',\n  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null),\n  children: [{\n    type: 'group',\n    label: 'Item 1',\n    children: [{\n      label: 'Option 1',\n      key: 'setting:1'\n    }, {\n      label: 'Option 2',\n      key: 'setting:2'\n    }]\n  }, {\n    type: 'group',\n    label: 'Item 2',\n    children: [{\n      label: 'Option 3',\n      key: 'setting:3'\n    }, {\n      label: 'Option 4',\n      key: 'setting:4'\n    }]\n  }]\n}, {\n  label: 'Профиль',\n  key: 'profile',\n  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n}];\n\nconst Header = () => {\n  const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('mail');\n\n  const onClick = e => {\n    console.log('click ', e);\n    setCurrent(e.key);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Header,\n    onClick: onClick,\n    selectedKeys: [current],\n    mode: \"horizontal\",\n    items: items\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack:///./Components/Header/Header.tsx?");

/***/ }),

/***/ "./Components/TypingInput/CustomSpan/CustomSpan.tsx":
/*!**********************************************************!*\
  !*** ./Components/TypingInput/CustomSpan/CustomSpan.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ \"../node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ \"../node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ \"./Components/TypingInput/CustomSpan/style.module.css\");\n/* harmony import */ var _hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/storeHooks */ \"./hooks/storeHooks.ts\");\n\n\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default().bind(_style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nconst CustomSpan = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(_ref => {\n  let {\n    letter,\n    isActive,\n    number\n  } = _ref;\n  // console.log(number, 'number');\n  // console.log(letter, 'letter');\n  const {\n    typingStore\n  } = (0,_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_4__.useStores)();\n  const className = cx('letter', {\n    isActiveWord: isActive\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: className\n  }, letter);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomSpan);\n\n//# sourceURL=webpack:///./Components/TypingInput/CustomSpan/CustomSpan.tsx?");

/***/ }),

/***/ "./Components/TypingInput/TypingInput.tsx":
/*!************************************************!*\
  !*** ./Components/TypingInput/TypingInput.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"../node_modules/antd/es/input/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"../node_modules/antd/es/form/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"../node_modules/antd/es/button/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ \"../node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _CustomSpan_CustomSpan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomSpan/CustomSpan */ \"./Components/TypingInput/CustomSpan/CustomSpan.tsx\");\n/* harmony import */ var _hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/storeHooks */ \"./hooks/storeHooks.ts\");\n\n\n\n\n\nconst {\n  TextArea\n} = antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nconst TypingInput = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(() => {\n  const [typingText, setTypingText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Enter text here and click \"use this template\"');\n  const [actionIsStarted, setActionIsStarted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [currentKey, setCurrentKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n\n  const onFinish = values => {\n    // console.log(values)\n    setTypingText(values.typingText);\n  };\n\n  const {\n    typingStore\n  } = (0,_hooks_storeHooks__WEBPACK_IMPORTED_MODULE_3__.useStores)();\n\n  const keyChecker = event => {\n    setCurrentKey(event.key);\n  };\n\n  const isActive = (typingText, number, letter, event) => {\n    // console.log(text, 'textText');\n    console.log(number, 'text');\n    console.log(letter, 'text');\n    const text = typingText.split('');\n\n    if (event.key === text[number]) {\n      return true;\n    }\n\n    return false;\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onKeyUp: keyChecker\n  }, typingText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"template\"\n  }, typingText.split('').map((letter, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CustomSpan_CustomSpan__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    key: key + Math.random().toString(),\n    number: key,\n    letter: letter,\n    isActive: currentKey === typingText[key]\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onFinish: onFinish\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n    name: ['typingText']\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextArea, {\n    showCount: true,\n    maxLength: 300,\n    style: {\n      height: 320,\n      width: 600\n    } // onChange={onChange}\n    ,\n    placeholder: typingText\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    type: \"primary\",\n    htmlType: \"submit\",\n    onClick: () => setActionIsStarted(true)\n  }, \"Use this template\"))));\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypingInput);\n\n//# sourceURL=webpack:///./Components/TypingInput/TypingInput.tsx?");

/***/ }),

/***/ "./Store/Typing.store.ts":
/*!*******************************!*\
  !*** ./Store/Typing.store.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TypingStore\": () => (/* binding */ TypingStore)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/initializerDefineProperty */ \"../node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ \"../node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js\");\n/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/initializerWarningHelper */ \"../node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ \"../node_modules/mobx/dist/mobx.esm.js\");\n\n\n\n\n\nvar _class, _descriptor;\n\n\nlet TypingStore = (_class = class TypingStore {\n  constructor() {\n    (0,_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"next\", _descriptor, this);\n  }\n\n  changeNext(isNext) {\n    this.next = isNext;\n  }\n\n}, (_descriptor = (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_class.prototype, \"next\", [mobx__WEBPACK_IMPORTED_MODULE_4__.observable], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function () {\n    return false;\n  }\n}), (0,_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_class.prototype, \"changeNext\", [mobx__WEBPACK_IMPORTED_MODULE_4__.action], Object.getOwnPropertyDescriptor(_class.prototype, \"changeNext\"), _class.prototype)), _class);\n\n//# sourceURL=webpack:///./Store/Typing.store.ts?");

/***/ }),

/***/ "./Store/stores.ts":
/*!*************************!*\
  !*** ./Store/stores.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StoresProvider\": () => (/* binding */ StoresProvider),\n/* harmony export */   \"stores\": () => (/* binding */ stores),\n/* harmony export */   \"storesContext\": () => (/* binding */ storesContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Typing_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Typing.store */ \"./Store/Typing.store.ts\");\n\n\nconst stores = Object.freeze({\n  typingStore: new _Typing_store__WEBPACK_IMPORTED_MODULE_1__.TypingStore()\n});\nconst storesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(stores);\nconst StoresProvider = storesContext.Provider;\n\n//# sourceURL=webpack:///./Store/stores.ts?");

/***/ }),

/***/ "./hooks/storeHooks.ts":
/*!*****************************!*\
  !*** ./hooks/storeHooks.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useStore\": () => (/* binding */ useStore),\n/* harmony export */   \"useStores\": () => (/* binding */ useStores)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Store_stores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Store/stores */ \"./Store/stores.ts\");\n\n\nconst useStores = () => react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_Store_stores__WEBPACK_IMPORTED_MODULE_1__.storesContext); // Я не до конца понял эту конструкцию. Данный хук отдаст нам конкретный стор и если один из ключей\n// stores объекта котороый мы описали в stores.ts - пока знаний тс не хватает (\n\nconst useStore = store => react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_Store_stores__WEBPACK_IMPORTED_MODULE_1__.storesContext)[store];\n\n//# sourceURL=webpack:///./hooks/storeHooks.ts?");

/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"../node_modules/react-dom/client.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _styles_test_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/test.scss */ \"./styles/test.scss\");\n/* harmony import */ var _styles_test_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/test.less */ \"./styles/test.less\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/dist/antd.css */ \"../node_modules/antd/dist/antd.css\");\n/* harmony import */ var _Components_TypingInput_TypingInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/TypingInput/TypingInput */ \"./Components/TypingInput/TypingInput.tsx\");\n/* harmony import */ var _Components_Header_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Header/Header */ \"./Components/Header/Header.tsx\");\n/* harmony import */ var _Store_stores__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Store/stores */ \"./Store/stores.ts\");\n\n\n\n\n\n\n\n\n\n\nconst App = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Store_stores__WEBPACK_IMPORTED_MODULE_8__.StoresProvider, {\n  value: _Store_stores__WEBPACK_IMPORTED_MODULE_8__.stores\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  className: \"container\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Header_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_TypingInput_TypingInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  className: \"box\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"test less\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  className: \"card\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"test sass\"))));\n\nconst container = document.getElementById('root');\nconst root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);\nroot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));\n\n//# sourceURL=webpack:///./index.tsx?");

/***/ }),

/***/ "./styles/test.less":
/*!**************************!*\
  !*** ./styles/test.less ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/test.less?");

/***/ }),

/***/ "./styles/test.scss":
/*!**************************!*\
  !*** ./styles/test.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/test.scss?");

/***/ }),

/***/ "./Components/Header/style.module.css":
/*!********************************************!*\
  !*** ./Components/Header/style.module.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"Header\":\"I5ediYCOmbeREJk5Jk4w\"});\n\n//# sourceURL=webpack:///./Components/Header/style.module.css?");

/***/ }),

/***/ "./Components/TypingInput/CustomSpan/style.module.css":
/*!************************************************************!*\
  !*** ./Components/TypingInput/CustomSpan/style.module.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"letter\":\"wAnyMZwLB189nFP02wIf\",\"isActiveWord\":\"B_GITg8qs2AIwyoP0VLS\",\"pulse\":\"RSSultD7REJRaIbuR13R\"});\n\n//# sourceURL=webpack:///./Components/TypingInput/CustomSpan/style.module.css?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_antd_dist_antd_css-node_modules_ant-design_icons_es_icons_AppstoreOutlin-dc3ad8"], () => (__webpack_require__("./index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;