const { ModuleFederationPlugin } = require("webpack").container;

const config = {
  name: "module",
  exposes: { "./module": "./src/main.ts" },
  shared: {
    "@angular/forms": {
      requiredVersion: "^19.2.0",
    },
    "@angular/router": {
      import: false,
      requiredVersion: "^19.2.0",
    },
  },
};

module.exports = { plugins: [new ModuleFederationPlugin(config)] };
