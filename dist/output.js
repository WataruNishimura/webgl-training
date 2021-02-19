/******/ (() => {
  // webpackBootstrap
  var __webpack_exports__ = {};
  /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
  function main() {
    const canvas = document.getElementById('main');

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    canvas.height = windowHeight;
    canvas.width = windowWidth;

    const gl = canvas.getContext('webgl');

    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.clearColor(0, 0, 0, 1);
  }

  window.onload = main;

  /******/
})();
//# sourceMappingURL=output.js.map
