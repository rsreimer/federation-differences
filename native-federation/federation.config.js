const nativeFederation = require("@angular-architects/native-federation/config");

const config = {
  name: "native",
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

module.exports = nativeFederation.withNativeFederation(config);
