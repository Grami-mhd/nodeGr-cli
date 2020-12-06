module.exports = () => {
  return {
    "compileOnSave": false,
    "compilerOptions": {
      "target": "es6",
      "baseUrl": ".",
      "sourceMap": true,
      "module": "commonjs",
      "declaration": false,
      "noImplicitAny": true,
      "outDir": "dist",
      "removeComments": true,
      "moduleResolution": "node",
      "experimentalDecorators": true,
      "emitDecoratorMetadata": true,
      "typeRoots": [
        "node_modules/@types"
      ],
      "types": [
        "chai",
        "node",
        "mocha",
        "chai-http"
      ],
      "lib": [
        "es2017",
        "dom"
      ]
    },
    "include": [
      "bin/**/*.ts",
      "src/**/*.ts",
      "shared/**/*.ts"
    ],
    "exclude": [
      "src/**/*.spec.ts",
      "dist/**/*"
    ]
  }
}
