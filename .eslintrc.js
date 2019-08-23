module.exports = {
  "extends": [
    'airbnb-base',
  ],
  "rules": {
    "no-use-before-define": [
      "error",
      {
        "functions": false,
        "classes": true,
        "variables": true,
      }
    ],
    "no-underscore-dangle": [
      "error", {
        "allow": ["_id"]
      }
    ],
    "no-use-before-define": [
      "error", {
        "functions": false
      }
    ]
  },
  "overrides": [
    {
      "files": [
        "*.spec.js"
      ],
      "rules": {
        "no-undef": 0,
        "no-unused-vars": 0,
        "arrow-body-style": 0,
      }
    }
  ],
};
