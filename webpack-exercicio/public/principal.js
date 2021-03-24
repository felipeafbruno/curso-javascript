/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/logo.png";

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/index.html
var src = __webpack_require__(6);

// EXTERNAL MODULE: ./src/assets/sass/index.scss
var sass = __webpack_require__(4);

// EXTERNAL MODULE: ./src/assets/img/logo.png
var logo = __webpack_require__(0);

// EXTERNAL MODULE: ./src/assets/js/navegacao.js
var navegacao = __webpack_require__(2);

// CONCATENATED MODULE: ./src/assets/index.js



// CONCATENATED MODULE: ./src/principal.js



/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function () {
  function marcarLinkComoSelecionado(hash) {
    const links = document.querySelectorAll(`[wm-link]`);
    links.forEach(link => link.classList.remove('selecionado'));
    const link = document.querySelector(`[wm-link='${hash}']`);
    link.classList.add('selecionado');
  }

  function navegarViaAjax(hash) {
    if (!hash) return;
    const link = document.querySelector(`[wm-link='${hash}']`);
    const destino = document.querySelector('[wm-link-destino]');
    const url = hash.substring(1);
    fetch(url).then(resp => resp.text()).then(html => {
      destino.innerHTML = html;
      marcarLinkComoSelecionado(hash);
    });
  }

  function configurarLinks() {
    document.querySelectorAll('[wm-link]').forEach(link => {
      link.href = link.attributes['wm-link'].value;
    });
  }

  function navegacaoInicial() {
    if (location.hash) {
      navegarViaAjax(location.hash);
    } else {
      const primeiroLink = document.querySelector('[wm-link]');
      navegarViaAjax(primeiroLink.hash);
    }
  }

  window.onhashchange = e => navegarViaAjax(location.hash);

  configurarLinks();
  navegacaoInicial();
})();

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(5);
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(0);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html> <html> <head> <meta charset=\"UTF-8\"> <title>Ajax</title> <link href=\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700\" rel=\"stylesheet\"> </head> <body> <aside class=\"logo\"> <a href=\"#/paginas/inicio.html\" class=\"logo\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"logo\"> </a> </aside> <header class=\"cabecalho\"> <input type=\"text\" placeholder=\"Pesquisar...\"> <button class=\"btn bg-blue white\">Entrar</button> <button class=\"btn bg-red white\">REGISTRAR</button> </header> <aside class=\"menu-area\"> <nav class=\"menu\"> <a wm-link=\"#/paginas/inicio.html\"> <i class=\"fa fa-home\"></i> Home </a> <a wm-link=\"#/paginas/cursos.html\"> <i class=\"fa fa-bars\"></i> Cursos </a> <a wm-link=\"#/paginas/suporte.html\"> <i class=\"fa fa-life-ring\"></i> Suporte </a> <a wm-link=\"#/paginas/sobre.html\"> <i class=\"fa fa-info-circle\"></i> Sobre </a> </nav> </aside> <main class=\"conteudo\" wm-link-destino></main> <footer class=\"rodape\"> <span> Desenvolvido com <i class=\"fa fa-heart red\"></i> por <strong>Cod<span class=\"red\">3</span>r</strong> </span> </footer> </body> </html>";
// Exports
module.exports = code;

/***/ })
/******/ ]);