(function () {
  const modules = {
    "./src/math.js": function (module, exports) {
      require.r(exports);
      require.d(exports, {
          "default": ()=> {
            return add
          },
          "minus": () => {
            return minus
          }
      })
      function add(a, b) {
        return a + b;
      }
      function minus(a, b) {
        return a - b;
      }

      return module.exports
    },
  };

  const caches = {};
  function require(moduleId) {
    if (caches[moduleId]) {
      return caches[moduleId].exports;
    }
    const module = (caches[moduleId] = {
      exports: {},
    });
    modules[moduleId].call(module, module, module.exports, require);

    return module.exports;
  }

  require.r = function (exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    Object.defineProperty(exports, "__esModule", { value: true });
  };

  require.d = function(exports,defination){
    for(let d in defination){
        Object.defineProperty(exports, d, {get: defination[d]})
    }
  }

  const xx = require("./src/math.js");
  console.log(xx.default(10, 20));
  console.log(xx.minus(20, 10));
})();

