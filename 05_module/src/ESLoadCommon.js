(function () {
  const modules = {
    "./src/index.js": function (module, exports) {
      require.r(exports);
      const math = require("./src/math.js");
      const math_default = require.n(math);
      console.log(math_default().add(10, 20));
      console.log(math.minus(20, 10));
    },
    "./src/math.js": function (module, exports) {
      function add(a, b) {
        return a + b;
      }
      function minus(a, b) {
        return a - b;
      }

      module.exports = {
        add,
        minus,
      };
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

  require.d = function (exports, defination) {
    for (let d in defination) {
      Object.defineProperty(exports, d, { get: defination[d] });
    }
  };
  require.n = function (exports) {
    const getter = exports.__esModule ? () => exports.default : () => exports;

    return getter;
  };

  require("./src/index.js");
})();
