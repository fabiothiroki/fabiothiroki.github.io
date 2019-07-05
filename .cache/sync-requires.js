// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---themes-identity-pages-index-js": preferDefault(require("/Users/fabiothiroki/Repositories/fabiothiroki.github.io/themes/identity/pages/index.js"))
}

exports.json = {
  "index.json": require("/Users/fabiothiroki/Repositories/fabiothiroki.github.io/.cache/json/index.json")
}