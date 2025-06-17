# Federation differences

Two projects using [webpack module federation](https://webpack.js.org/concepts/module-federation/)
and [Angular Architects Native Federation](https://github.com/angular-architects/module-federation-plugin/blob/main/libs/native-federation/README.md),
showing a difference in build output, specifically when using the [{ import: false } sharing hint](https://webpack.js.org/plugins/module-federation-plugin/#import).

The `{ import: false }` share hint allows reducing the build output size,
which is important e.g. in Capacitor projects where the build output is included in the app, and will therefore increase the app size.

Both projects uses the same sharing hints:

- [webpack.config.js](./module-federation/webpack.config.js)
- [federation.config.js](./native-federation/federation.config.js)

```ts
const shared = {
  "@angular/forms": {
    requiredVersion: "^19.2.0",
  },
  "@angular/router": {
    import: false,
    requiredVersion: "^19.2.0",
  },
};
```

The webpack module federation project includes only the `@angular/forms` package in the build output,
while the Angular Architects Native Federation project includes both `@angular/forms` and `@angular/router`.

[Webpack Module Federation output](./module-federation/dist/):

```
index.html
main.js
module.js
node_modules_angular_forms_fesm2022_forms_mjs.js
runtime.js
src_main_ts.js
```

[Native Federation output](./native-federation/dist/browser/):

```
_angular_forms.zwTjRTT4C2.js
_angular_router.9mCI2txa-r.js
bootstrap-ETAXOEZQ.js
chunk-HEL3L3QR.js
chunk-VVIDXAFV.js
importmap.json
index.html
main.js
module-Y37RU372.js
remoteEntry.json
```
