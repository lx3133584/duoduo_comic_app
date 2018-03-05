const path = require('path');
const fs = require('fs');
const defaultVars = require('antd-mobile/lib/style/themes/default.native');
const customVars = require('../theme');
const themePath = path.resolve(require.resolve('antd-mobile'), '../style/themes/default.native.js');
const themeVars = Object.assign({}, defaultVars, customVars);

if (fs.statSync(themePath).isFile()) {
  fs.writeFileSync(
    themePath,
    'module.exports = ' + JSON.stringify(themeVars)
  );
}
