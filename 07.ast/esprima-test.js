const esprima = require("esprima");
const estranverse = require("estraverse");
const escodegen = require("escodegen");

const sourceCode = `function ast(){}`;

const ast = esprima.parse(sourceCode);

const padding = (count) => " ".repeat(count);
let indent = 0;
estranverse.traverse(ast, {
  enter(node) {
    indent += 2;
    if (node.type === "FunctionDeclaration"){
        node.id.name = 'ast1'
    }
      console.log(`${padding(indent)}进入${node.type}`);
  },
  leave(node) {
    console.log(`${padding(indent)}离开${node.type}`);
    indent -= 2;
  },
});

console.log(escodegen.generate(ast))
