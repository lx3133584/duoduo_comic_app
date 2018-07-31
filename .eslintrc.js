module.exports = {
    "extends": "airbnb",
    "plugins": [
      "react",
      "react-native"
    ],
    "globals": {
      "__DEV__": true,
      "fetch": true
    },
    "parser": "babel-eslint",
    "rules": {
      "max-len": ["error", 120],
      "no-console": 0,
      "linebreak-style": 0,
      "no-restricted-syntax": 0,
      "import/no-unresolved": 0,
      "no-return-assign": 0,
      "no-nested-ternary": 0,
      "guard-for-in": 0,
      "no-mixed-operators": 0,
      "import/prefer-default-export": 0,
      "react/forbid-prop-types": [0, { "forbid": ["any", "array", "object"] }],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};
