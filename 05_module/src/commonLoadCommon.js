(function () {
  const modules = {
    "./src/math.js": function (module) {
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
    modules[moduleId].call(module,module, module.exports, require);

    return module.exports;
  }

  const {add,minus} = require("./src/math.js");
  console.log(add(10, 20));
  console.log(minus(20, 10));
})();
