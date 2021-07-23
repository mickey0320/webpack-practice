const babelCore = require("@babel/core");
const babelTypes = require("babel-types");

const babelPluginImport = {
  visitor: {
    ImportDeclaration: {
      enter(nodePath, state) {
        const specifiers = nodePath.node.specifiers;
        if (
          babelTypes.isImportDefaultSpecifier(specifiers[0]) ||
          state.opts.libraryName !== "lodash"
        ) {
          return;
        }
        const importDeclarations = specifiers.map((specifier) => {
          return babelTypes.importDeclaration(
            [babelTypes.importDefaultSpecifier(specifier.local)],
            babelTypes.stringLiteral(
              `${nodePath.node.source.value}/${specifier.local.name}`
            )
          );
        });
        nodePath.replaceWithMultiple(importDeclarations);
      },
    },
  },
};

module.exports = function () {
  return babelPluginImport;
};
