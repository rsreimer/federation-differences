const { ModuleFederationPlugin } = require("webpack").container;

const shared = {
  "@angular/forms": {
    requiredVersion: "^19.2.0",
  },
  "@angular/router": {
    import: false,
    requiredVersion: "^19.2.0",
  },
};

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "module",
      exposes: { "./module": "./src/main.ts" },
      shared,
    }),
  ],
};
