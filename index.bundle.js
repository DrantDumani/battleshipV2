"use strict";
(self["webpackChunkbattleshipv2"] = self["webpackChunkbattleshipv2"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Play&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  margin: 0;\n  font-family: \"Play\", sans-serif;\n  font-size: 18px;\n  background-color: #000a40;\n  color: #fff;\n  text-align: center;\n}\n\nbody {\n  min-height: 100vh;\n}\n\nbutton {\n  font-family: \"Play\", sans-serif;\n  font-size: 24px;\n  color: inherit;\n  background-color: inherit;\n  border-radius: 12px;\n  border: 2px solid #fff;\n}\n\n.header {\n  text-align: center;\n}\n\n.header h1 {\n  margin: 0;\n  padding: 21px 0;\n}\n\n.game-setup-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n\n.game-ui-container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 60px;\n  flex-wrap: wrap-reverse;\n}\n\n.game-board {\n  display: grid;\n  grid-template: repeat(10, 30px)/repeat(10, 30px);\n  position: relative;\n}\n\n.game-over-container,\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-tile {\n  border: 1px solid #000;\n}\n\n.blank-tile {\n  background-color: #97b2ff;\n}\n\n.missed-attack {\n  background-color: #888888;\n}\n\n.hit-ship {\n  background-color: #e1e185;\n}\n\n.sunken-ship {\n  background-color: #d70000;\n}\n\n.ships {\n  background-color: rgba(255, 255, 255, 0.5921568627);\n  position: absolute;\n  border: 2px solid #000;\n  touch-action: none;\n}\n\n.hide {\n  display: none;\n}\n\n.footer-link {\n  text-decoration: none;\n  color: #c9fff4;\n}\n\n.footer-link:hover {\n  color: #fff;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAIA;EACE,sBAAA;AAFF;;AAKA;;EAEE,SAAA;EACA,+BAAA;EACA,eAAA;EACA,yBAAA;EACA,WAAA;EACA,kBAAA;AAFF;;AAKA;EACE,iBAAA;AAFF;;AAKA;EACE,+BAAA;EACA,eAAA;EACA,cAAA;EACA,yBAAA;EACA,mBAAA;EACA,sBAAA;AAFF;;AAKA;EACE,kBAAA;AAFF;;AAKA;EACE,SAAA;EACA,eAAA;AAFF;;AAKA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AAFF;;AAKA;EACE,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,SAAA;EACA,uBAAA;AAFF;;AAKA;EACE,aAAA;EACA,gDAAA;EACA,kBAAA;AAFF;;AAKA;;EAEE,aAAA;EACA,uBAAA;EACA,mBAAA;AAFF;;AAKA;EACE,sBAAA;AAFF;;AAKA;EACE,yBAAA;AAFF;;AAKA;EACE,yBAAA;AAFF;;AAKA;EACE,yBAAA;AAFF;;AAKA;EACE,yBAAA;AAFF;;AAKA;EACE,mDAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;AAFF;;AAKA;EACE,aAAA;AAFF;;AAKA;EACE,qBAAA;EACA,cAAA;AAFF;;AAKA;EACE,WAAA;AAFF","sourcesContent":["$game-tile-dim: 30px;\n\n@import url(\"https://fonts.googleapis.com/css2?family=Play&display=swap\");\n\n* {\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  margin: 0;\n  font-family: \"Play\", sans-serif;\n  font-size: 18px;\n  background-color: #000a40;\n  color: #fff;\n  text-align: center;\n}\n\nbody {\n  min-height: 100vh;\n}\n\nbutton {\n  font-family: \"Play\", sans-serif;\n  font-size: 24px;\n  color: inherit;\n  background-color: inherit;\n  border-radius: 12px;\n  border: 2px solid #fff;\n}\n\n.header {\n  text-align: center;\n}\n\n.header h1 {\n  margin: 0;\n  padding: 21px 0;\n}\n\n.game-setup-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n\n.game-ui-container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 60px;\n  flex-wrap: wrap-reverse;\n}\n\n.game-board {\n  display: grid;\n  grid-template: repeat(10, $game-tile-dim) / repeat(10, $game-tile-dim);\n  position: relative;\n}\n\n.game-over-container,\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-tile {\n  border: 1px solid #000;\n}\n\n.blank-tile {\n  background-color: #97b2ff;\n}\n\n.missed-attack {\n  background-color: #888888;\n}\n\n.hit-ship {\n  background-color: #e1e185;\n}\n\n.sunken-ship {\n  background-color: #d70000;\n}\n\n.ships {\n  background-color: #ffffff97;\n  position: absolute;\n  border: 2px solid #000;\n  touch-action: none;\n}\n\n.hide {\n  display: none;\n}\n\n.footer-link {\n  text-decoration: none;\n  color: #c9fff4;\n}\n\n.footer-link:hover {\n  color: #fff;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMMethods.js":
/*!***************************!*\
  !*** ./src/DOMMethods.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "draggableShips": () => (/* binding */ draggableShips),
/* harmony export */   "renderGameBoard": () => (/* binding */ renderGameBoard),
/* harmony export */   "renderShips": () => (/* binding */ renderShips)
/* harmony export */ });
function renderGameBoard(container, gameBoardInfo) {
  container.replaceChildren();
  const { attackMap } = gameBoardInfo;
  const shipInfo = gameBoardInfo.getShipData();
  let ship = null;
  for (let i = 0; i < 100; i++) {
    const attackStatus = attackMap[i];
    const tile = document.createElement("div");
    tile.classList.add("game-tile");
    tile.dataset.index = i;
    switch (attackStatus) {
      case undefined:
        tile.classList.add("blank-tile");
        break;
      case false:
        tile.classList.add("missed-attack");
        break;
      case true:
        ship = shipInfo[i].ship;
        if (ship.isSunk()) {
          tile.classList.add("sunken-ship");
        } else {
          tile.classList.add("hit-ship");
        }
        break;
    }
    container.append(tile);
  }
}

function removeShips() {
  const ships = document.querySelectorAll(".ships");
  ships.forEach((ship) => {
    ship.remove();
  });
}

function renderShips(container, gameBoardInfo) {
  removeShips();
  const tileList = container.querySelectorAll(".game-tile");
  const shipData = gameBoardInfo.getShipData();
  let shipLocations = Object.keys(shipData);

  while (shipLocations.length > 0) {
    const shipObj = shipData[shipLocations[0]];
    const { indices, alignment } = shipObj;
    const { length } = shipObj.ship;
    const shipDiv = document.createElement("div");
    shipDiv.classList.add("ships");

    shipDiv.dataset.shipIndex = shipLocations[0];
    const attachedTile = tileList[shipLocations[0]];
    const rect = attachedTile.getBoundingClientRect();
    const { top, bottom, left, right, width, height } = rect;
    if (alignment === "vertical") {
      shipDiv.style.height = `${height * length}px`;
      shipDiv.style.width = `${width}px`;
    } else if (alignment === "horizontal") {
      shipDiv.style.height = `${height}px`;
      shipDiv.style.width = `${width * length}px`;
    }
    shipDiv.style.top = `${top}px`;
    shipDiv.style.left = `${left}px`;
    shipDiv.style.bottom = `${bottom}px`;
    shipDiv.style.right = `${right}px`;
    document.body.append(shipDiv);
    shipLocations = shipLocations.filter(
      (index) => !indices.includes(Number(index))
    );
  }
}

function draggableShips() {
  const ships = document.querySelectorAll(".ships");
  ships.forEach((ship) => {
    ship.draggable = true;
  });
}




/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createGameBoard() {
  const shipData = {};
  const attackMap = {};
  const ships = [];

  const resetAttackMap = () => {
    const attackedTiles = Object.keys(attackMap);
    for (const key of attackedTiles) {
      delete attackMap[key];
    }
  };

  const getShipData = () => {
    return shipData;
  };

  const addShipData = (arr, obj) => {
    for (const index of arr) {
      shipData[index] = obj;
    }
  };

  const createHorizontalShipIndices = (index, length) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(index + i);
    }
    return arr;
  };

  const createVerticalShipIndices = (index, length) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(index + i * 10);
    }
    return arr;
  };

  const checkEmptyOrSameShip = (ship, index) => {
    const shipObj = shipData[index]?.ship;
    return shipData[index] === undefined || ship === shipObj;
  };

  const checkHorizontal = (testArr, index, length, ship = null) => {
    return (
      testArr.every((tile) => checkEmptyOrSameShip(ship, tile)) &&
      Math.floor(index / 10) === Math.floor((index + length - 1) / 10)
    );
  };

  const checkVertical = (testArr, index, length, ship = null) => {
    return (
      testArr.every((tile) => checkEmptyOrSameShip(ship, tile)) &&
      index + (length - 1) * 10 <= 99
    );
  };

  const createShipIndices = (index, length, alignment) => {
    if (alignment === "horizontal") {
      return createHorizontalShipIndices(index, length);
    } else if (alignment === "vertical") {
      return createVerticalShipIndices(index, length);
    }
  };

  const validateShipTile = (testArr, index, length, alignment, ship = null) => {
    if (alignment === "horizontal") {
      return checkHorizontal(testArr, index, length, ship);
    } else if (alignment === "vertical") {
      return checkVertical(testArr, index, length, ship);
    }
  };

  const placeShip = (shipFn, length, indices, alignment) => {
    const ship = shipFn(length);
    const shipInfo = { alignment, indices, ship };
    addShipData(indices, shipInfo);
    ships.push(ship);
    return true;
  };

  const editShip = (shipObj, newIndices, newAlignment) => {
    const oldIndices = shipObj.indices;
    for (const key of oldIndices) {
      delete shipData[key];
    }
    shipObj.indices = newIndices;
    shipObj.alignment = newAlignment;
    addShipData(newIndices, shipObj);
  };

  const swapShipAlign = (shipObj) => {
    const newAlign =
      shipObj.alignment === "horizontal" ? "vertical" : "horizontal";
    const shipBow = shipObj.indices[0];
    const { ship } = shipObj;
    const { length } = ship;
    const indices = createShipIndices(shipBow, length, newAlign);
    if (!validateShipTile(indices, shipBow, length, newAlign, ship)) {
      return false;
    }
    editShip(shipObj, indices, newAlign);
    return true;
  };

  const moveShip = (shipObj, newIndex) => {
    const align = shipObj.alignment;
    const length = shipObj.ship.length;
    const indices = createShipIndices(newIndex, length, align);
    if (!validateShipTile(indices, newIndex, length, align, shipObj.ship)) {
      return false;
    }
    editShip(shipObj, indices, align);
    return true;
  };

  const receiveAttack = (index) => {
    const attackedLocations = Object.keys(attackMap);
    if (attackedLocations.includes(index)) {
      return;
    }
    const isThereAShip = shipData[index];
    if (!isThereAShip) {
      attackMap[index] = false;
      return false;
    }
    isThereAShip.ship.hit(index);
    attackMap[index] = true;
  };

  const allShipsSunk = () => ships.every((ship) => ship.isSunk());

  const removeAllShips = () => {
    ships.splice(0);
    const shipKeys = Object.keys(shipData);
    for (const key of shipKeys) {
      delete shipData[key];
    }
  };

  const randomize = (arr, shipFn) => {
    removeAllShips();
    const tiles = Array.from(Array(100).keys());
    const possibleAlign = ["horizontal", "vertical"];

    for (const shipLength of arr) {
      const chosenAlign =
        possibleAlign[Math.floor(Math.random() * possibleAlign.length)];
      const validationFn =
        chosenAlign === "horizontal" ? checkHorizontal : checkVertical;
      const availableTiles = tiles.filter((space) => {
        const shipPanels =
          chosenAlign === "horizontal"
            ? createHorizontalShipIndices(space, shipLength)
            : createVerticalShipIndices(space, shipLength);
        return validationFn(shipPanels, space, shipLength);
      });
      const randomTile =
        availableTiles[Math.floor(Math.random() * availableTiles.length)];
      const shipIndices = createShipIndices(
        randomTile,
        shipLength,
        chosenAlign
      );
      placeShip(shipFn, shipLength, shipIndices, chosenAlign);
    }
  };

  return {
    resetAttackMap,
    getShipData,
    receiveAttack,
    attackMap,
    swapShipAlign,
    moveShip,
    allShipsSunk,
    randomize
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGameBoard);


/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initGameLoop(gameBoardFn, shipFn, playerFn) {
  let gameState = "setup";

  const getGameState = () => gameState;
  const startGame = () => {
    gameState = "playing";
  };

  const p1Board = gameBoardFn();
  const p2Board = gameBoardFn();
  const player1 = playerFn("Player 1");
  const player2 = playerFn("CPU");
  let winner = null;

  const getWinner = () => winner;

  const shipLengths = [5, 4, 3, 3, 2];
  const setupBoards = () => {
    p1Board.randomize(shipLengths, shipFn);
    p2Board.randomize(shipLengths, shipFn);
    gameState = "setup";
  };

  const resetBoards = () => {
    p1Board.resetAttackMap();
    p2Board.resetAttackMap();
  };

  const resetCPUAttacks = () => {
    player2.resetCPUAttacks();
  };

  const resetGame = () => {
    resetBoards();
    setupBoards();
    resetCPUAttacks();
  };

  const takeTurn = (plyr, board, index) => {
    board.receiveAttack(index);
    if (board.allShipsSunk()) {
      winner = plyr.type;
      gameState = "game over";
    }
  };

  const takeP1Turn = (index) => {
    takeTurn(player1, p2Board, index);
  };

  const takeCPUTurn = () => {
    const index = player2.attack(p1Board);
    takeTurn(player2, p1Board, index);
  };
  return {
    p1Board,
    p2Board,
    resetGame,
    getGameState,
    startGame,
    getWinner,
    setupBoards,
    takeP1Turn,
    takeCPUTurn
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initGameLoop);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _DOMMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMMethods */ "./src/DOMMethods.js");
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ships */ "./src/ships.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameLoop */ "./src/gameLoop.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player */ "./src/player.js");







const gameModule = (0,_gameLoop__WEBPACK_IMPORTED_MODULE_4__["default"])(_gameBoard__WEBPACK_IMPORTED_MODULE_3__["default"], _ships__WEBPACK_IMPORTED_MODULE_2__["default"], _player__WEBPACK_IMPORTED_MODULE_5__["default"]);
gameModule.setupBoards();

function renderPreview() {
  const previewGrid = document.querySelector(".player-preview-grid");
  const gameBoard = gameModule.p1Board;
  (0,_DOMMethods__WEBPACK_IMPORTED_MODULE_1__.renderGameBoard)(previewGrid, gameBoard);
  (0,_DOMMethods__WEBPACK_IMPORTED_MODULE_1__.renderShips)(previewGrid, gameBoard);
  (0,_DOMMethods__WEBPACK_IMPORTED_MODULE_1__.draggableShips)();
  addDragEventToShips();
  addClickEventToShips();
}

function renderGameBoards() {
  const p1BoardDiv = document.querySelector(".player1-board");
  const p2BoardDiv = document.querySelector(".player2-board");
  const { p1Board, p2Board } = gameModule;
  (0,_DOMMethods__WEBPACK_IMPORTED_MODULE_1__.renderGameBoard)(p1BoardDiv, p1Board);
  (0,_DOMMethods__WEBPACK_IMPORTED_MODULE_1__.renderShips)(p1BoardDiv, p1Board);
  (0,_DOMMethods__WEBPACK_IMPORTED_MODULE_1__.renderGameBoard)(p2BoardDiv, p2Board);
}

function handleTileClick(e) {
  const { index } = e.target.dataset;
  const enemyAttackMap = gameModule.p2Board.attackMap;
  const attackedLocations = Object.keys(enemyAttackMap);
  if (attackedLocations.includes(index)) {
    return;
  }
  gameModule.takeP1Turn(index);
  if (gameModule.getGameState() !== "game over") {
    gameModule.takeCPUTurn();
  }
  renderByGameState();
}

function addClickEventToTiles() {
  const enemyTiles = document.querySelectorAll(".player2-board > .game-tile");
  enemyTiles.forEach((tile) => {
    tile.addEventListener("click", handleTileClick);
  });
}

function addDragEventToShips() {
  const ships = document.querySelectorAll(".ships");
  ships.forEach((ship) => {
    ship.addEventListener("dragstart", handleDragAndDrop);
  });
}

function addClickEventToShips() {
  const ships = document.querySelectorAll(".ships");
  ships.forEach((ship) => {
    ship.addEventListener("click", handleShipClick);
  });
}

function displayWinner() {
  const victoryDiv = document.querySelector(".game-over-msg");
  const winner = gameModule.getWinner();
  victoryDiv.textContent = `${winner} has sunken all enemy battleships and won the game!`;
}

function renderByGameState() {
  const gameState = gameModule.getGameState();
  const setupContainer = document.querySelector(".game-setup-container");
  const gameContainer = document.querySelector(".game-ui-container");
  const gameOverContainer = document.querySelector(".game-over-container");
  switch (gameState) {
    case "setup":
      setupContainer.classList.remove("hide");
      gameContainer.classList.add("hide");
      gameOverContainer.classList.add("hide");
      renderPreview();
      break;
    case "playing":
      setupContainer.classList.add("hide");
      gameContainer.classList.remove("hide");
      gameOverContainer.classList.add("hide");
      renderGameBoards();
      addClickEventToTiles();
      break;
    case "game over":
      setupContainer.classList.add("hide");
      gameContainer.classList.remove("hide");
      gameOverContainer.classList.remove("hide");
      renderGameBoards();
      displayWinner();
      break;
  }
}

function handleStartClick() {
  gameModule.startGame();
  renderByGameState();
}

const startBtn = document.querySelector(".begin-game-btn");
startBtn.addEventListener("click", handleStartClick);

function handleRandomizeBtnClick() {
  gameModule.setupBoards();
  renderPreview();
}

const randomBtn = document.querySelector(".randomize-btn");
randomBtn.addEventListener("click", handleRandomizeBtnClick);

function restartGame() {
  gameModule.resetGame();
  renderByGameState();
}

const restartBtn = document.querySelector(".restart-btn");
restartBtn.addEventListener("click", restartGame);

window.addEventListener("load", renderByGameState);

function handleShipClick(e) {
  const board = gameModule.p1Board;
  const shipInfo = gameModule.p1Board.getShipData();
  const index = e.target.dataset.shipIndex;
  const shipObj = shipInfo[index];
  board.swapShipAlign(shipObj);
  renderPreview(gameModule);
}

function handleDragAndDrop(e) {
  const { clientX: oldX, clientY: oldY } = e;
  const gameBoard = gameModule.p1Board;
  const shipData = gameBoard.getShipData();
  const { shipIndex } = e.target.dataset;
  const ship = shipData[shipIndex];

  const dragEnd = (event) => {
    const shipDiv = event.target;
    const shipRect = shipDiv.getBoundingClientRect();
    const { left, top } = shipRect;
    const newX = left + event.clientX - oldX;
    const newY = top + event.clientY - oldY;
    shipDiv.hidden = true;
    const newShipIndex = Number(
      document.elementFromPoint(newX, newY)?.dataset.index
    );
    shipDiv.hidden = false;
    if (isNaN(newShipIndex)) {
      return false;
    }
    gameBoard.moveShip(ship, newShipIndex);
    renderPreview();
  };

  e.target.addEventListener("dragend", dragEnd, { once: true });
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createPlayer(type) {
  if (type === "CPU") {
    let availableMoves = Array.from(Array(100).keys());

    let targetShip = null;
    let hitTile = null;
    let behavior = "random";

    const resetCPUAttacks = () => {
      availableMoves = Array.from(Array(100).keys());
    };

    const attack = (gameBoard) => {
      let move;
      switch (behavior) {
        case "random":
          move = randomAttack(gameBoard);
          break;
        case "findAlignment":
          move = adjacentAttack(hitTile, gameBoard);
          break;
        case "sinkShip":
          move = sinkShip(gameBoard);
          break;
      }
      return move;
    };

    const noRepeats = (num) => availableMoves.includes(num);
    const addValidHorizontalRight = (arr, num) => {
      if (Math.floor(num / 10) === Math.floor((num + 1) / 10)) {
        arr.push(num + 1);
      }
    };

    const addValidHorizontalLeft = (arr, num) => {
      if (Math.floor(num / 10) === Math.floor((num - 1) / 10)) {
        arr.push(num - 1);
      }
    };

    const addValidVerticalUp = (arr, num) => {
      if (num - 10 >= 0) {
        arr.push(num - 10);
      }
    };

    const addValidVerticalDown = (arr, num) => {
      if (num + 10 <= 99) {
        arr.push(num + 10);
      }
    };

    const randomAttack = (gameBoard) => {
      const { attackMap } = gameBoard;
      const shipInfo = gameBoard.getShipData();

      for (const key of Object.keys(shipInfo)) {
        if (attackMap[key] && !shipInfo[key].ship.isSunk()) {
          hitTile = key;
          targetShip = shipInfo[key];
          behavior = "findAlignment";
          return adjacentAttack(hitTile, gameBoard);
        }
      }

      const index = Math.floor(Math.random() * availableMoves.length);
      const move = availableMoves[index];
      availableMoves.splice(index, 1);

      if (shipInfo[move] && !shipInfo[move].ship.isSunk()) {
        behavior = "findAlignment";
        hitTile = move;
        targetShip = shipInfo[move];
      }
      return move;
    };

    const adjacentAttack = (tile, gameBoard) => {
      const shipInfo = gameBoard.getShipData();
      const adjHorTiles = [];
      const adjVerTiles = [];
      addValidHorizontalLeft(adjHorTiles, tile);
      addValidHorizontalRight(adjHorTiles, tile);
      addValidVerticalUp(adjVerTiles, tile);
      addValidVerticalDown(adjVerTiles, tile);

      const validTiles = adjHorTiles
        .concat(adjVerTiles)
        .filter((num) => noRepeats(num));

      const adjAttack =
        validTiles[Math.floor(Math.random() * validTiles.length)];
      availableMoves.splice(availableMoves.indexOf(adjAttack), 1);

      if (shipInfo[adjAttack] === targetShip) {
        behavior = "sinkShip";
      }
      return adjAttack;
    };

    const sinkShip = (gameBoard) => {
      if (targetShip.ship.isSunk()) {
        return randomAttack(gameBoard);
      }

      const locations = [];
      const { indices, alignment } = targetShip;
      const addTileBeforeFn =
        alignment === "horizontal"
          ? addValidHorizontalLeft
          : addValidVerticalUp;
      const addTileAfterFn =
        alignment === "horizontal"
          ? addValidHorizontalRight
          : addValidVerticalDown;
      const { attackMap } = gameBoard;
      for (const index of indices) {
        if (attackMap[index]) {
          addTileBeforeFn(locations, index);
          addTileAfterFn(locations, index);
        }
      }

      const validAttacks = locations.filter((num) => noRepeats(num));
      const attack =
        validAttacks[Math.floor(Math.random() * validAttacks.length)];
      availableMoves.splice(availableMoves.indexOf(attack), 1);
      return attack;
    };

    return { attack, type, resetCPUAttacks };
  }
  return { type };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayer);


/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createShip(length) {
  let numOfHits = 0;
  const hit = () => {
    numOfHits += 1;
  };

  const isSunk = () => numOfHits === length;
  return { hit, isSunk, length };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSwrQkFBK0I7QUFDekM7QUFDQTtBQUNBLFVBQVUsWUFBWTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtELFlBQVk7QUFDOUQ7Ozs7Ozs7Ozs7Ozs7OztBQ2hLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxZQUFZO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxxQkFBcUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsWUFBWTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hJNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjIvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2Mi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2Mi8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2Mi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2Mi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjIvLi9zcmMvRE9NTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjIvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2Mi8uL3NyYy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYyLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjIvLi9zcmMvc2hpcHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5JmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwYTQwO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIGgxIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDIxcHggMDtcXG59XFxuXFxuLmdhbWUtc2V0dXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLmdhbWUtdWktY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDYwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG59XFxuXFxuLmdhbWUtYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMzBweCkvcmVwZWF0KDEwLCAzMHB4KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmdhbWUtb3Zlci1jb250YWluZXIsXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS10aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxufVxcblxcbi5ibGFuay10aWxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5N2IyZmY7XFxufVxcblxcbi5taXNzZWQtYXR0YWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODg4ODg7XFxufVxcblxcbi5oaXQtc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMTg1O1xcbn1cXG5cXG4uc3Vua2VuLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3MDAwMDtcXG59XFxuXFxuLnNoaXBzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41OTIxNTY4NjI3KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb290ZXItbGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2M5ZmZmNDtcXG59XFxuXFxuLmZvb3Rlci1saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNFLHNCQUFBO0FBRkY7O0FBS0E7O0VBRUUsU0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtBQUZGOztBQUtBO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFLQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBOztFQUVFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxzQkFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTtFQUNFLG1EQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7QUFGRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZ2FtZS10aWxlLWRpbTogMzBweDtcXG5cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5JmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwYTQwO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIGgxIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDIxcHggMDtcXG59XFxuXFxuLmdhbWUtc2V0dXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLmdhbWUtdWktY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDYwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG59XFxuXFxuLmdhbWUtYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgJGdhbWUtdGlsZS1kaW0pIC8gcmVwZWF0KDEwLCAkZ2FtZS10aWxlLWRpbSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5nYW1lLW92ZXItY29udGFpbmVyLFxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtdGlsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbn1cXG5cXG4uYmxhbmstdGlsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdiMmZmO1xcbn1cXG5cXG4ubWlzc2VkLWF0dGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4ODg4O1xcbn1cXG5cXG4uaGl0LXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTE4NTtcXG59XFxuXFxuLnN1bmtlbi1zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNzAwMDA7XFxufVxcblxcbi5zaGlwcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOTc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9vdGVyLWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNjOWZmZjQ7XFxufVxcblxcbi5mb290ZXItbGluazpob3ZlciB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gcmVuZGVyR2FtZUJvYXJkKGNvbnRhaW5lciwgZ2FtZUJvYXJkSW5mbykge1xuICBjb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gIGNvbnN0IHsgYXR0YWNrTWFwIH0gPSBnYW1lQm9hcmRJbmZvO1xuICBjb25zdCBzaGlwSW5mbyA9IGdhbWVCb2FyZEluZm8uZ2V0U2hpcERhdGEoKTtcbiAgbGV0IHNoaXAgPSBudWxsO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgY29uc3QgYXR0YWNrU3RhdHVzID0gYXR0YWNrTWFwW2ldO1xuICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImdhbWUtdGlsZVwiKTtcbiAgICB0aWxlLmRhdGFzZXQuaW5kZXggPSBpO1xuICAgIHN3aXRjaCAoYXR0YWNrU3RhdHVzKSB7XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwiYmxhbmstdGlsZVwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGZhbHNlOlxuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWQtYXR0YWNrXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgc2hpcCA9IHNoaXBJbmZvW2ldLnNoaXA7XG4gICAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwic3Vua2VuLXNoaXBcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwiaGl0LXNoaXBcIik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvbnRhaW5lci5hcHBlbmQodGlsZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU2hpcHMoKSB7XG4gIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwc1wiKTtcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHNoaXAucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTaGlwcyhjb250YWluZXIsIGdhbWVCb2FyZEluZm8pIHtcbiAgcmVtb3ZlU2hpcHMoKTtcbiAgY29uc3QgdGlsZUxpc3QgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lLXRpbGVcIik7XG4gIGNvbnN0IHNoaXBEYXRhID0gZ2FtZUJvYXJkSW5mby5nZXRTaGlwRGF0YSgpO1xuICBsZXQgc2hpcExvY2F0aW9ucyA9IE9iamVjdC5rZXlzKHNoaXBEYXRhKTtcblxuICB3aGlsZSAoc2hpcExvY2F0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgc2hpcE9iaiA9IHNoaXBEYXRhW3NoaXBMb2NhdGlvbnNbMF1dO1xuICAgIGNvbnN0IHsgaW5kaWNlcywgYWxpZ25tZW50IH0gPSBzaGlwT2JqO1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBzaGlwT2JqLnNoaXA7XG4gICAgY29uc3Qgc2hpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2hpcERpdi5jbGFzc0xpc3QuYWRkKFwic2hpcHNcIik7XG5cbiAgICBzaGlwRGl2LmRhdGFzZXQuc2hpcEluZGV4ID0gc2hpcExvY2F0aW9uc1swXTtcbiAgICBjb25zdCBhdHRhY2hlZFRpbGUgPSB0aWxlTGlzdFtzaGlwTG9jYXRpb25zWzBdXTtcbiAgICBjb25zdCByZWN0ID0gYXR0YWNoZWRUaWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0LCB3aWR0aCwgaGVpZ2h0IH0gPSByZWN0O1xuICAgIGlmIChhbGlnbm1lbnQgPT09IFwidmVydGljYWxcIikge1xuICAgICAgc2hpcERpdi5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHQgKiBsZW5ndGh9cHhgO1xuICAgICAgc2hpcERpdi5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICB9IGVsc2UgaWYgKGFsaWdubWVudCA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIHNoaXBEaXYuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgICAgIHNoaXBEaXYuc3R5bGUud2lkdGggPSBgJHt3aWR0aCAqIGxlbmd0aH1weGA7XG4gICAgfVxuICAgIHNoaXBEaXYuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcbiAgICBzaGlwRGl2LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICBzaGlwRGl2LnN0eWxlLmJvdHRvbSA9IGAke2JvdHRvbX1weGA7XG4gICAgc2hpcERpdi5zdHlsZS5yaWdodCA9IGAke3JpZ2h0fXB4YDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChzaGlwRGl2KTtcbiAgICBzaGlwTG9jYXRpb25zID0gc2hpcExvY2F0aW9ucy5maWx0ZXIoXG4gICAgICAoaW5kZXgpID0+ICFpbmRpY2VzLmluY2x1ZGVzKE51bWJlcihpbmRleCkpXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmFnZ2FibGVTaGlwcygpIHtcbiAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBzXCIpO1xuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyR2FtZUJvYXJkLCByZW5kZXJTaGlwcywgZHJhZ2dhYmxlU2hpcHMgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUdhbWVCb2FyZCgpIHtcbiAgY29uc3Qgc2hpcERhdGEgPSB7fTtcbiAgY29uc3QgYXR0YWNrTWFwID0ge307XG4gIGNvbnN0IHNoaXBzID0gW107XG5cbiAgY29uc3QgcmVzZXRBdHRhY2tNYXAgPSAoKSA9PiB7XG4gICAgY29uc3QgYXR0YWNrZWRUaWxlcyA9IE9iamVjdC5rZXlzKGF0dGFja01hcCk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgYXR0YWNrZWRUaWxlcykge1xuICAgICAgZGVsZXRlIGF0dGFja01hcFtrZXldO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRTaGlwRGF0YSA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcERhdGE7XG4gIH07XG5cbiAgY29uc3QgYWRkU2hpcERhdGEgPSAoYXJyLCBvYmopID0+IHtcbiAgICBmb3IgKGNvbnN0IGluZGV4IG9mIGFycikge1xuICAgICAgc2hpcERhdGFbaW5kZXhdID0gb2JqO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjcmVhdGVIb3Jpem9udGFsU2hpcEluZGljZXMgPSAoaW5kZXgsIGxlbmd0aCkgPT4ge1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyci5wdXNoKGluZGV4ICsgaSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVmVydGljYWxTaGlwSW5kaWNlcyA9IChpbmRleCwgbGVuZ3RoKSA9PiB7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYXJyLnB1c2goaW5kZXggKyBpICogMTApO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrRW1wdHlPclNhbWVTaGlwID0gKHNoaXAsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc2hpcE9iaiA9IHNoaXBEYXRhW2luZGV4XT8uc2hpcDtcbiAgICByZXR1cm4gc2hpcERhdGFbaW5kZXhdID09PSB1bmRlZmluZWQgfHwgc2hpcCA9PT0gc2hpcE9iajtcbiAgfTtcblxuICBjb25zdCBjaGVja0hvcml6b250YWwgPSAodGVzdEFyciwgaW5kZXgsIGxlbmd0aCwgc2hpcCA9IG51bGwpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgdGVzdEFyci5ldmVyeSgodGlsZSkgPT4gY2hlY2tFbXB0eU9yU2FtZVNoaXAoc2hpcCwgdGlsZSkpICYmXG4gICAgICBNYXRoLmZsb29yKGluZGV4IC8gMTApID09PSBNYXRoLmZsb29yKChpbmRleCArIGxlbmd0aCAtIDEpIC8gMTApXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBjaGVja1ZlcnRpY2FsID0gKHRlc3RBcnIsIGluZGV4LCBsZW5ndGgsIHNoaXAgPSBudWxsKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRlc3RBcnIuZXZlcnkoKHRpbGUpID0+IGNoZWNrRW1wdHlPclNhbWVTaGlwKHNoaXAsIHRpbGUpKSAmJlxuICAgICAgaW5kZXggKyAobGVuZ3RoIC0gMSkgKiAxMCA8PSA5OVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlU2hpcEluZGljZXMgPSAoaW5kZXgsIGxlbmd0aCwgYWxpZ25tZW50KSA9PiB7XG4gICAgaWYgKGFsaWdubWVudCA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIHJldHVybiBjcmVhdGVIb3Jpem9udGFsU2hpcEluZGljZXMoaW5kZXgsIGxlbmd0aCk7XG4gICAgfSBlbHNlIGlmIChhbGlnbm1lbnQgPT09IFwidmVydGljYWxcIikge1xuICAgICAgcmV0dXJuIGNyZWF0ZVZlcnRpY2FsU2hpcEluZGljZXMoaW5kZXgsIGxlbmd0aCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRlU2hpcFRpbGUgPSAodGVzdEFyciwgaW5kZXgsIGxlbmd0aCwgYWxpZ25tZW50LCBzaGlwID0gbnVsbCkgPT4ge1xuICAgIGlmIChhbGlnbm1lbnQgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICByZXR1cm4gY2hlY2tIb3Jpem9udGFsKHRlc3RBcnIsIGluZGV4LCBsZW5ndGgsIHNoaXApO1xuICAgIH0gZWxzZSBpZiAoYWxpZ25tZW50ID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIHJldHVybiBjaGVja1ZlcnRpY2FsKHRlc3RBcnIsIGluZGV4LCBsZW5ndGgsIHNoaXApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcEZuLCBsZW5ndGgsIGluZGljZXMsIGFsaWdubWVudCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBzaGlwRm4obGVuZ3RoKTtcbiAgICBjb25zdCBzaGlwSW5mbyA9IHsgYWxpZ25tZW50LCBpbmRpY2VzLCBzaGlwIH07XG4gICAgYWRkU2hpcERhdGEoaW5kaWNlcywgc2hpcEluZm8pO1xuICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgZWRpdFNoaXAgPSAoc2hpcE9iaiwgbmV3SW5kaWNlcywgbmV3QWxpZ25tZW50KSA9PiB7XG4gICAgY29uc3Qgb2xkSW5kaWNlcyA9IHNoaXBPYmouaW5kaWNlcztcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBvbGRJbmRpY2VzKSB7XG4gICAgICBkZWxldGUgc2hpcERhdGFba2V5XTtcbiAgICB9XG4gICAgc2hpcE9iai5pbmRpY2VzID0gbmV3SW5kaWNlcztcbiAgICBzaGlwT2JqLmFsaWdubWVudCA9IG5ld0FsaWdubWVudDtcbiAgICBhZGRTaGlwRGF0YShuZXdJbmRpY2VzLCBzaGlwT2JqKTtcbiAgfTtcblxuICBjb25zdCBzd2FwU2hpcEFsaWduID0gKHNoaXBPYmopID0+IHtcbiAgICBjb25zdCBuZXdBbGlnbiA9XG4gICAgICBzaGlwT2JqLmFsaWdubWVudCA9PT0gXCJob3Jpem9udGFsXCIgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcbiAgICBjb25zdCBzaGlwQm93ID0gc2hpcE9iai5pbmRpY2VzWzBdO1xuICAgIGNvbnN0IHsgc2hpcCB9ID0gc2hpcE9iajtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gc2hpcDtcbiAgICBjb25zdCBpbmRpY2VzID0gY3JlYXRlU2hpcEluZGljZXMoc2hpcEJvdywgbGVuZ3RoLCBuZXdBbGlnbik7XG4gICAgaWYgKCF2YWxpZGF0ZVNoaXBUaWxlKGluZGljZXMsIHNoaXBCb3csIGxlbmd0aCwgbmV3QWxpZ24sIHNoaXApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVkaXRTaGlwKHNoaXBPYmosIGluZGljZXMsIG5ld0FsaWduKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBtb3ZlU2hpcCA9IChzaGlwT2JqLCBuZXdJbmRleCkgPT4ge1xuICAgIGNvbnN0IGFsaWduID0gc2hpcE9iai5hbGlnbm1lbnQ7XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcE9iai5zaGlwLmxlbmd0aDtcbiAgICBjb25zdCBpbmRpY2VzID0gY3JlYXRlU2hpcEluZGljZXMobmV3SW5kZXgsIGxlbmd0aCwgYWxpZ24pO1xuICAgIGlmICghdmFsaWRhdGVTaGlwVGlsZShpbmRpY2VzLCBuZXdJbmRleCwgbGVuZ3RoLCBhbGlnbiwgc2hpcE9iai5zaGlwKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlZGl0U2hpcChzaGlwT2JqLCBpbmRpY2VzLCBhbGlnbik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IGF0dGFja2VkTG9jYXRpb25zID0gT2JqZWN0LmtleXMoYXR0YWNrTWFwKTtcbiAgICBpZiAoYXR0YWNrZWRMb2NhdGlvbnMuaW5jbHVkZXMoaW5kZXgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGlzVGhlcmVBU2hpcCA9IHNoaXBEYXRhW2luZGV4XTtcbiAgICBpZiAoIWlzVGhlcmVBU2hpcCkge1xuICAgICAgYXR0YWNrTWFwW2luZGV4XSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpc1RoZXJlQVNoaXAuc2hpcC5oaXQoaW5kZXgpO1xuICAgIGF0dGFja01hcFtpbmRleF0gPSB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcblxuICBjb25zdCByZW1vdmVBbGxTaGlwcyA9ICgpID0+IHtcbiAgICBzaGlwcy5zcGxpY2UoMCk7XG4gICAgY29uc3Qgc2hpcEtleXMgPSBPYmplY3Qua2V5cyhzaGlwRGF0YSk7XG4gICAgZm9yIChjb25zdCBrZXkgb2Ygc2hpcEtleXMpIHtcbiAgICAgIGRlbGV0ZSBzaGlwRGF0YVtrZXldO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByYW5kb21pemUgPSAoYXJyLCBzaGlwRm4pID0+IHtcbiAgICByZW1vdmVBbGxTaGlwcygpO1xuICAgIGNvbnN0IHRpbGVzID0gQXJyYXkuZnJvbShBcnJheSgxMDApLmtleXMoKSk7XG4gICAgY29uc3QgcG9zc2libGVBbGlnbiA9IFtcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXTtcblxuICAgIGZvciAoY29uc3Qgc2hpcExlbmd0aCBvZiBhcnIpIHtcbiAgICAgIGNvbnN0IGNob3NlbkFsaWduID1cbiAgICAgICAgcG9zc2libGVBbGlnbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZUFsaWduLmxlbmd0aCldO1xuICAgICAgY29uc3QgdmFsaWRhdGlvbkZuID1cbiAgICAgICAgY2hvc2VuQWxpZ24gPT09IFwiaG9yaXpvbnRhbFwiID8gY2hlY2tIb3Jpem9udGFsIDogY2hlY2tWZXJ0aWNhbDtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZVRpbGVzID0gdGlsZXMuZmlsdGVyKChzcGFjZSkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwUGFuZWxzID1cbiAgICAgICAgICBjaG9zZW5BbGlnbiA9PT0gXCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgID8gY3JlYXRlSG9yaXpvbnRhbFNoaXBJbmRpY2VzKHNwYWNlLCBzaGlwTGVuZ3RoKVxuICAgICAgICAgICAgOiBjcmVhdGVWZXJ0aWNhbFNoaXBJbmRpY2VzKHNwYWNlLCBzaGlwTGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25GbihzaGlwUGFuZWxzLCBzcGFjZSwgc2hpcExlbmd0aCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJhbmRvbVRpbGUgPVxuICAgICAgICBhdmFpbGFibGVUaWxlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVUaWxlcy5sZW5ndGgpXTtcbiAgICAgIGNvbnN0IHNoaXBJbmRpY2VzID0gY3JlYXRlU2hpcEluZGljZXMoXG4gICAgICAgIHJhbmRvbVRpbGUsXG4gICAgICAgIHNoaXBMZW5ndGgsXG4gICAgICAgIGNob3NlbkFsaWduXG4gICAgICApO1xuICAgICAgcGxhY2VTaGlwKHNoaXBGbiwgc2hpcExlbmd0aCwgc2hpcEluZGljZXMsIGNob3NlbkFsaWduKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZXNldEF0dGFja01hcCxcbiAgICBnZXRTaGlwRGF0YSxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGF0dGFja01hcCxcbiAgICBzd2FwU2hpcEFsaWduLFxuICAgIG1vdmVTaGlwLFxuICAgIGFsbFNoaXBzU3VuayxcbiAgICByYW5kb21pemVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2FtZUJvYXJkO1xuIiwiZnVuY3Rpb24gaW5pdEdhbWVMb29wKGdhbWVCb2FyZEZuLCBzaGlwRm4sIHBsYXllckZuKSB7XG4gIGxldCBnYW1lU3RhdGUgPSBcInNldHVwXCI7XG5cbiAgY29uc3QgZ2V0R2FtZVN0YXRlID0gKCkgPT4gZ2FtZVN0YXRlO1xuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgZ2FtZVN0YXRlID0gXCJwbGF5aW5nXCI7XG4gIH07XG5cbiAgY29uc3QgcDFCb2FyZCA9IGdhbWVCb2FyZEZuKCk7XG4gIGNvbnN0IHAyQm9hcmQgPSBnYW1lQm9hcmRGbigpO1xuICBjb25zdCBwbGF5ZXIxID0gcGxheWVyRm4oXCJQbGF5ZXIgMVwiKTtcbiAgY29uc3QgcGxheWVyMiA9IHBsYXllckZuKFwiQ1BVXCIpO1xuICBsZXQgd2lubmVyID0gbnVsbDtcblxuICBjb25zdCBnZXRXaW5uZXIgPSAoKSA9PiB3aW5uZXI7XG5cbiAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNSwgNCwgMywgMywgMl07XG4gIGNvbnN0IHNldHVwQm9hcmRzID0gKCkgPT4ge1xuICAgIHAxQm9hcmQucmFuZG9taXplKHNoaXBMZW5ndGhzLCBzaGlwRm4pO1xuICAgIHAyQm9hcmQucmFuZG9taXplKHNoaXBMZW5ndGhzLCBzaGlwRm4pO1xuICAgIGdhbWVTdGF0ZSA9IFwic2V0dXBcIjtcbiAgfTtcblxuICBjb25zdCByZXNldEJvYXJkcyA9ICgpID0+IHtcbiAgICBwMUJvYXJkLnJlc2V0QXR0YWNrTWFwKCk7XG4gICAgcDJCb2FyZC5yZXNldEF0dGFja01hcCgpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0Q1BVQXR0YWNrcyA9ICgpID0+IHtcbiAgICBwbGF5ZXIyLnJlc2V0Q1BVQXR0YWNrcygpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICByZXNldEJvYXJkcygpO1xuICAgIHNldHVwQm9hcmRzKCk7XG4gICAgcmVzZXRDUFVBdHRhY2tzKCk7XG4gIH07XG5cbiAgY29uc3QgdGFrZVR1cm4gPSAocGx5ciwgYm9hcmQsIGluZGV4KSA9PiB7XG4gICAgYm9hcmQucmVjZWl2ZUF0dGFjayhpbmRleCk7XG4gICAgaWYgKGJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICB3aW5uZXIgPSBwbHlyLnR5cGU7XG4gICAgICBnYW1lU3RhdGUgPSBcImdhbWUgb3ZlclwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0YWtlUDFUdXJuID0gKGluZGV4KSA9PiB7XG4gICAgdGFrZVR1cm4ocGxheWVyMSwgcDJCb2FyZCwgaW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IHRha2VDUFVUdXJuID0gKCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gcGxheWVyMi5hdHRhY2socDFCb2FyZCk7XG4gICAgdGFrZVR1cm4ocGxheWVyMiwgcDFCb2FyZCwgaW5kZXgpO1xuICB9O1xuICByZXR1cm4ge1xuICAgIHAxQm9hcmQsXG4gICAgcDJCb2FyZCxcbiAgICByZXNldEdhbWUsXG4gICAgZ2V0R2FtZVN0YXRlLFxuICAgIHN0YXJ0R2FtZSxcbiAgICBnZXRXaW5uZXIsXG4gICAgc2V0dXBCb2FyZHMsXG4gICAgdGFrZVAxVHVybixcbiAgICB0YWtlQ1BVVHVyblxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0R2FtZUxvb3A7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7IHJlbmRlckdhbWVCb2FyZCwgcmVuZGVyU2hpcHMsIGRyYWdnYWJsZVNoaXBzIH0gZnJvbSBcIi4vRE9NTWV0aG9kc1wiO1xuaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSBcIi4vc2hpcHNcIjtcbmltcG9ydCBjcmVhdGVHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgaW5pdEdhbWVMb29wIGZyb20gXCIuL2dhbWVMb29wXCI7XG5pbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBnYW1lTW9kdWxlID0gaW5pdEdhbWVMb29wKGNyZWF0ZUdhbWVCb2FyZCwgY3JlYXRlU2hpcCwgY3JlYXRlUGxheWVyKTtcbmdhbWVNb2R1bGUuc2V0dXBCb2FyZHMoKTtcblxuZnVuY3Rpb24gcmVuZGVyUHJldmlldygpIHtcbiAgY29uc3QgcHJldmlld0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1wcmV2aWV3LWdyaWRcIik7XG4gIGNvbnN0IGdhbWVCb2FyZCA9IGdhbWVNb2R1bGUucDFCb2FyZDtcbiAgcmVuZGVyR2FtZUJvYXJkKHByZXZpZXdHcmlkLCBnYW1lQm9hcmQpO1xuICByZW5kZXJTaGlwcyhwcmV2aWV3R3JpZCwgZ2FtZUJvYXJkKTtcbiAgZHJhZ2dhYmxlU2hpcHMoKTtcbiAgYWRkRHJhZ0V2ZW50VG9TaGlwcygpO1xuICBhZGRDbGlja0V2ZW50VG9TaGlwcygpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJHYW1lQm9hcmRzKCkge1xuICBjb25zdCBwMUJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIxLWJvYXJkXCIpO1xuICBjb25zdCBwMkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIyLWJvYXJkXCIpO1xuICBjb25zdCB7IHAxQm9hcmQsIHAyQm9hcmQgfSA9IGdhbWVNb2R1bGU7XG4gIHJlbmRlckdhbWVCb2FyZChwMUJvYXJkRGl2LCBwMUJvYXJkKTtcbiAgcmVuZGVyU2hpcHMocDFCb2FyZERpdiwgcDFCb2FyZCk7XG4gIHJlbmRlckdhbWVCb2FyZChwMkJvYXJkRGl2LCBwMkJvYXJkKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGlsZUNsaWNrKGUpIHtcbiAgY29uc3QgeyBpbmRleCB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgY29uc3QgZW5lbXlBdHRhY2tNYXAgPSBnYW1lTW9kdWxlLnAyQm9hcmQuYXR0YWNrTWFwO1xuICBjb25zdCBhdHRhY2tlZExvY2F0aW9ucyA9IE9iamVjdC5rZXlzKGVuZW15QXR0YWNrTWFwKTtcbiAgaWYgKGF0dGFja2VkTG9jYXRpb25zLmluY2x1ZGVzKGluZGV4KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBnYW1lTW9kdWxlLnRha2VQMVR1cm4oaW5kZXgpO1xuICBpZiAoZ2FtZU1vZHVsZS5nZXRHYW1lU3RhdGUoKSAhPT0gXCJnYW1lIG92ZXJcIikge1xuICAgIGdhbWVNb2R1bGUudGFrZUNQVVR1cm4oKTtcbiAgfVxuICByZW5kZXJCeUdhbWVTdGF0ZSgpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGlja0V2ZW50VG9UaWxlcygpIHtcbiAgY29uc3QgZW5lbXlUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyMi1ib2FyZCA+IC5nYW1lLXRpbGVcIik7XG4gIGVuZW15VGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRpbGVDbGljayk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGREcmFnRXZlbnRUb1NoaXBzKCkge1xuICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcHNcIik7XG4gIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgaGFuZGxlRHJhZ0FuZERyb3ApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQ2xpY2tFdmVudFRvU2hpcHMoKSB7XG4gIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwc1wiKTtcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVNoaXBDbGljayk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2lubmVyKCkge1xuICBjb25zdCB2aWN0b3J5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLW92ZXItbXNnXCIpO1xuICBjb25zdCB3aW5uZXIgPSBnYW1lTW9kdWxlLmdldFdpbm5lcigpO1xuICB2aWN0b3J5RGl2LnRleHRDb250ZW50ID0gYCR7d2lubmVyfSBoYXMgc3Vua2VuIGFsbCBlbmVteSBiYXR0bGVzaGlwcyBhbmQgd29uIHRoZSBnYW1lIWA7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckJ5R2FtZVN0YXRlKCkge1xuICBjb25zdCBnYW1lU3RhdGUgPSBnYW1lTW9kdWxlLmdldEdhbWVTdGF0ZSgpO1xuICBjb25zdCBzZXR1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1zZXR1cC1jb250YWluZXJcIik7XG4gIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtdWktY29udGFpbmVyXCIpO1xuICBjb25zdCBnYW1lT3ZlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1vdmVyLWNvbnRhaW5lclwiKTtcbiAgc3dpdGNoIChnYW1lU3RhdGUpIHtcbiAgICBjYXNlIFwic2V0dXBcIjpcbiAgICAgIHNldHVwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgZ2FtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIGdhbWVPdmVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgcmVuZGVyUHJldmlldygpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInBsYXlpbmdcIjpcbiAgICAgIHNldHVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgZ2FtZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIGdhbWVPdmVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgcmVuZGVyR2FtZUJvYXJkcygpO1xuICAgICAgYWRkQ2xpY2tFdmVudFRvVGlsZXMoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJnYW1lIG92ZXJcIjpcbiAgICAgIHNldHVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgZ2FtZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIGdhbWVPdmVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgcmVuZGVyR2FtZUJvYXJkcygpO1xuICAgICAgZGlzcGxheVdpbm5lcigpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlU3RhcnRDbGljaygpIHtcbiAgZ2FtZU1vZHVsZS5zdGFydEdhbWUoKTtcbiAgcmVuZGVyQnlHYW1lU3RhdGUoKTtcbn1cblxuY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJlZ2luLWdhbWUtYnRuXCIpO1xuc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVN0YXJ0Q2xpY2spO1xuXG5mdW5jdGlvbiBoYW5kbGVSYW5kb21pemVCdG5DbGljaygpIHtcbiAgZ2FtZU1vZHVsZS5zZXR1cEJvYXJkcygpO1xuICByZW5kZXJQcmV2aWV3KCk7XG59XG5cbmNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFuZG9taXplLWJ0blwiKTtcbnJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUmFuZG9taXplQnRuQ2xpY2spO1xuXG5mdW5jdGlvbiByZXN0YXJ0R2FtZSgpIHtcbiAgZ2FtZU1vZHVsZS5yZXNldEdhbWUoKTtcbiAgcmVuZGVyQnlHYW1lU3RhdGUoKTtcbn1cblxuY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGFydC1idG5cIik7XG5yZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXN0YXJ0R2FtZSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCByZW5kZXJCeUdhbWVTdGF0ZSk7XG5cbmZ1bmN0aW9uIGhhbmRsZVNoaXBDbGljayhlKSB7XG4gIGNvbnN0IGJvYXJkID0gZ2FtZU1vZHVsZS5wMUJvYXJkO1xuICBjb25zdCBzaGlwSW5mbyA9IGdhbWVNb2R1bGUucDFCb2FyZC5nZXRTaGlwRGF0YSgpO1xuICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuc2hpcEluZGV4O1xuICBjb25zdCBzaGlwT2JqID0gc2hpcEluZm9baW5kZXhdO1xuICBib2FyZC5zd2FwU2hpcEFsaWduKHNoaXBPYmopO1xuICByZW5kZXJQcmV2aWV3KGdhbWVNb2R1bGUpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEcmFnQW5kRHJvcChlKSB7XG4gIGNvbnN0IHsgY2xpZW50WDogb2xkWCwgY2xpZW50WTogb2xkWSB9ID0gZTtcbiAgY29uc3QgZ2FtZUJvYXJkID0gZ2FtZU1vZHVsZS5wMUJvYXJkO1xuICBjb25zdCBzaGlwRGF0YSA9IGdhbWVCb2FyZC5nZXRTaGlwRGF0YSgpO1xuICBjb25zdCB7IHNoaXBJbmRleCB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgY29uc3Qgc2hpcCA9IHNoaXBEYXRhW3NoaXBJbmRleF07XG5cbiAgY29uc3QgZHJhZ0VuZCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHNoaXBEaXYgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3Qgc2hpcFJlY3QgPSBzaGlwRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgbGVmdCwgdG9wIH0gPSBzaGlwUmVjdDtcbiAgICBjb25zdCBuZXdYID0gbGVmdCArIGV2ZW50LmNsaWVudFggLSBvbGRYO1xuICAgIGNvbnN0IG5ld1kgPSB0b3AgKyBldmVudC5jbGllbnRZIC0gb2xkWTtcbiAgICBzaGlwRGl2LmhpZGRlbiA9IHRydWU7XG4gICAgY29uc3QgbmV3U2hpcEluZGV4ID0gTnVtYmVyKFxuICAgICAgZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChuZXdYLCBuZXdZKT8uZGF0YXNldC5pbmRleFxuICAgICk7XG4gICAgc2hpcERpdi5oaWRkZW4gPSBmYWxzZTtcbiAgICBpZiAoaXNOYU4obmV3U2hpcEluZGV4KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBnYW1lQm9hcmQubW92ZVNoaXAoc2hpcCwgbmV3U2hpcEluZGV4KTtcbiAgICByZW5kZXJQcmV2aWV3KCk7XG4gIH07XG5cbiAgZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgZHJhZ0VuZCwgeyBvbmNlOiB0cnVlIH0pO1xufVxuIiwiZnVuY3Rpb24gY3JlYXRlUGxheWVyKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09IFwiQ1BVXCIpIHtcbiAgICBsZXQgYXZhaWxhYmxlTW92ZXMgPSBBcnJheS5mcm9tKEFycmF5KDEwMCkua2V5cygpKTtcblxuICAgIGxldCB0YXJnZXRTaGlwID0gbnVsbDtcbiAgICBsZXQgaGl0VGlsZSA9IG51bGw7XG4gICAgbGV0IGJlaGF2aW9yID0gXCJyYW5kb21cIjtcblxuICAgIGNvbnN0IHJlc2V0Q1BVQXR0YWNrcyA9ICgpID0+IHtcbiAgICAgIGF2YWlsYWJsZU1vdmVzID0gQXJyYXkuZnJvbShBcnJheSgxMDApLmtleXMoKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGF0dGFjayA9IChnYW1lQm9hcmQpID0+IHtcbiAgICAgIGxldCBtb3ZlO1xuICAgICAgc3dpdGNoIChiZWhhdmlvcikge1xuICAgICAgICBjYXNlIFwicmFuZG9tXCI6XG4gICAgICAgICAgbW92ZSA9IHJhbmRvbUF0dGFjayhnYW1lQm9hcmQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZmluZEFsaWdubWVudFwiOlxuICAgICAgICAgIG1vdmUgPSBhZGphY2VudEF0dGFjayhoaXRUaWxlLCBnYW1lQm9hcmQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2lua1NoaXBcIjpcbiAgICAgICAgICBtb3ZlID0gc2lua1NoaXAoZ2FtZUJvYXJkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJldHVybiBtb3ZlO1xuICAgIH07XG5cbiAgICBjb25zdCBub1JlcGVhdHMgPSAobnVtKSA9PiBhdmFpbGFibGVNb3Zlcy5pbmNsdWRlcyhudW0pO1xuICAgIGNvbnN0IGFkZFZhbGlkSG9yaXpvbnRhbFJpZ2h0ID0gKGFyciwgbnVtKSA9PiB7XG4gICAgICBpZiAoTWF0aC5mbG9vcihudW0gLyAxMCkgPT09IE1hdGguZmxvb3IoKG51bSArIDEpIC8gMTApKSB7XG4gICAgICAgIGFyci5wdXNoKG51bSArIDEpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhZGRWYWxpZEhvcml6b250YWxMZWZ0ID0gKGFyciwgbnVtKSA9PiB7XG4gICAgICBpZiAoTWF0aC5mbG9vcihudW0gLyAxMCkgPT09IE1hdGguZmxvb3IoKG51bSAtIDEpIC8gMTApKSB7XG4gICAgICAgIGFyci5wdXNoKG51bSAtIDEpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhZGRWYWxpZFZlcnRpY2FsVXAgPSAoYXJyLCBudW0pID0+IHtcbiAgICAgIGlmIChudW0gLSAxMCA+PSAwKSB7XG4gICAgICAgIGFyci5wdXNoKG51bSAtIDEwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYWRkVmFsaWRWZXJ0aWNhbERvd24gPSAoYXJyLCBudW0pID0+IHtcbiAgICAgIGlmIChudW0gKyAxMCA8PSA5OSkge1xuICAgICAgICBhcnIucHVzaChudW0gKyAxMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJhbmRvbUF0dGFjayA9IChnYW1lQm9hcmQpID0+IHtcbiAgICAgIGNvbnN0IHsgYXR0YWNrTWFwIH0gPSBnYW1lQm9hcmQ7XG4gICAgICBjb25zdCBzaGlwSW5mbyA9IGdhbWVCb2FyZC5nZXRTaGlwRGF0YSgpO1xuXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzaGlwSW5mbykpIHtcbiAgICAgICAgaWYgKGF0dGFja01hcFtrZXldICYmICFzaGlwSW5mb1trZXldLnNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICBoaXRUaWxlID0ga2V5O1xuICAgICAgICAgIHRhcmdldFNoaXAgPSBzaGlwSW5mb1trZXldO1xuICAgICAgICAgIGJlaGF2aW9yID0gXCJmaW5kQWxpZ25tZW50XCI7XG4gICAgICAgICAgcmV0dXJuIGFkamFjZW50QXR0YWNrKGhpdFRpbGUsIGdhbWVCb2FyZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVNb3Zlcy5sZW5ndGgpO1xuICAgICAgY29uc3QgbW92ZSA9IGF2YWlsYWJsZU1vdmVzW2luZGV4XTtcbiAgICAgIGF2YWlsYWJsZU1vdmVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgIGlmIChzaGlwSW5mb1ttb3ZlXSAmJiAhc2hpcEluZm9bbW92ZV0uc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBiZWhhdmlvciA9IFwiZmluZEFsaWdubWVudFwiO1xuICAgICAgICBoaXRUaWxlID0gbW92ZTtcbiAgICAgICAgdGFyZ2V0U2hpcCA9IHNoaXBJbmZvW21vdmVdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1vdmU7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkamFjZW50QXR0YWNrID0gKHRpbGUsIGdhbWVCb2FyZCkgPT4ge1xuICAgICAgY29uc3Qgc2hpcEluZm8gPSBnYW1lQm9hcmQuZ2V0U2hpcERhdGEoKTtcbiAgICAgIGNvbnN0IGFkakhvclRpbGVzID0gW107XG4gICAgICBjb25zdCBhZGpWZXJUaWxlcyA9IFtdO1xuICAgICAgYWRkVmFsaWRIb3Jpem9udGFsTGVmdChhZGpIb3JUaWxlcywgdGlsZSk7XG4gICAgICBhZGRWYWxpZEhvcml6b250YWxSaWdodChhZGpIb3JUaWxlcywgdGlsZSk7XG4gICAgICBhZGRWYWxpZFZlcnRpY2FsVXAoYWRqVmVyVGlsZXMsIHRpbGUpO1xuICAgICAgYWRkVmFsaWRWZXJ0aWNhbERvd24oYWRqVmVyVGlsZXMsIHRpbGUpO1xuXG4gICAgICBjb25zdCB2YWxpZFRpbGVzID0gYWRqSG9yVGlsZXNcbiAgICAgICAgLmNvbmNhdChhZGpWZXJUaWxlcylcbiAgICAgICAgLmZpbHRlcigobnVtKSA9PiBub1JlcGVhdHMobnVtKSk7XG5cbiAgICAgIGNvbnN0IGFkakF0dGFjayA9XG4gICAgICAgIHZhbGlkVGlsZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRUaWxlcy5sZW5ndGgpXTtcbiAgICAgIGF2YWlsYWJsZU1vdmVzLnNwbGljZShhdmFpbGFibGVNb3Zlcy5pbmRleE9mKGFkakF0dGFjayksIDEpO1xuXG4gICAgICBpZiAoc2hpcEluZm9bYWRqQXR0YWNrXSA9PT0gdGFyZ2V0U2hpcCkge1xuICAgICAgICBiZWhhdmlvciA9IFwic2lua1NoaXBcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhZGpBdHRhY2s7XG4gICAgfTtcblxuICAgIGNvbnN0IHNpbmtTaGlwID0gKGdhbWVCb2FyZCkgPT4ge1xuICAgICAgaWYgKHRhcmdldFNoaXAuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gcmFuZG9tQXR0YWNrKGdhbWVCb2FyZCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxvY2F0aW9ucyA9IFtdO1xuICAgICAgY29uc3QgeyBpbmRpY2VzLCBhbGlnbm1lbnQgfSA9IHRhcmdldFNoaXA7XG4gICAgICBjb25zdCBhZGRUaWxlQmVmb3JlRm4gPVxuICAgICAgICBhbGlnbm1lbnQgPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgPyBhZGRWYWxpZEhvcml6b250YWxMZWZ0XG4gICAgICAgICAgOiBhZGRWYWxpZFZlcnRpY2FsVXA7XG4gICAgICBjb25zdCBhZGRUaWxlQWZ0ZXJGbiA9XG4gICAgICAgIGFsaWdubWVudCA9PT0gXCJob3Jpem9udGFsXCJcbiAgICAgICAgICA/IGFkZFZhbGlkSG9yaXpvbnRhbFJpZ2h0XG4gICAgICAgICAgOiBhZGRWYWxpZFZlcnRpY2FsRG93bjtcbiAgICAgIGNvbnN0IHsgYXR0YWNrTWFwIH0gPSBnYW1lQm9hcmQ7XG4gICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIGluZGljZXMpIHtcbiAgICAgICAgaWYgKGF0dGFja01hcFtpbmRleF0pIHtcbiAgICAgICAgICBhZGRUaWxlQmVmb3JlRm4obG9jYXRpb25zLCBpbmRleCk7XG4gICAgICAgICAgYWRkVGlsZUFmdGVyRm4obG9jYXRpb25zLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsaWRBdHRhY2tzID0gbG9jYXRpb25zLmZpbHRlcigobnVtKSA9PiBub1JlcGVhdHMobnVtKSk7XG4gICAgICBjb25zdCBhdHRhY2sgPVxuICAgICAgICB2YWxpZEF0dGFja3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRBdHRhY2tzLmxlbmd0aCldO1xuICAgICAgYXZhaWxhYmxlTW92ZXMuc3BsaWNlKGF2YWlsYWJsZU1vdmVzLmluZGV4T2YoYXR0YWNrKSwgMSk7XG4gICAgICByZXR1cm4gYXR0YWNrO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBhdHRhY2ssIHR5cGUsIHJlc2V0Q1BVQXR0YWNrcyB9O1xuICB9XG4gIHJldHVybiB7IHR5cGUgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGxheWVyO1xuIiwiZnVuY3Rpb24gY3JlYXRlU2hpcChsZW5ndGgpIHtcbiAgbGV0IG51bU9mSGl0cyA9IDA7XG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBudW1PZkhpdHMgKz0gMTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBudW1PZkhpdHMgPT09IGxlbmd0aDtcbiAgcmV0dXJuIHsgaGl0LCBpc1N1bmssIGxlbmd0aCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaGlwO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9