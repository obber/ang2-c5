module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "key-spacing": ["error", {
      "align": "colon"
    }],
    "no-multi-spaces": ["error", {
      exceptions: { 
        "VariableDeclarator": true
      }
    }],
    "import/prefer-default-export": "off",
    "no-console": "off",
    "new-cap": "off"
  }
}