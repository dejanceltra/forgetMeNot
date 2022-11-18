/* eslint-env node */
module.exports = {
    "env": {
        "browser": true,
        "es2022": true,
        "webextensions": true,
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "rules": {
        "array-bracket-spacing": ["error"],
        "arrow-spacing": ["error"],
        "block-spacing": ["error"],
        "brace-style": "error",
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true,
            },
        ],
        "comma-dangle": ["error", "always-multiline"],
        "comma-style": ["error", "last"],
        "curly": "error",
        "default-case-last": ["error"],
        "default-param-last": ["error"],
        "dot-notation": ["error"],
        "eol-last": ["error", "always"],
        "func-call-spacing": ["error"],
        "indent": ["error", 4],
        "keyword-spacing": "error",
        "key-spacing": [
            "error",
            {
                "singleLine": {
                    "beforeColon": false,
                    "afterColon": true,
                },
                "multiLine": {
                    "beforeColon": false,
                    "afterColon": true,
                },
            },
        ],
        "linebreak-style": ["error", "unix"],
        "max-len": 0,
        "no-array-constructor": ["error"],
        "no-await-in-loop": ["error"],
        "no-console": "off",
        "no-constructor-return": ["error"],
        "no-duplicate-imports": ["error"],
        "no-extra-boolean-cast": ["error"],
        "no-extra-label": ["error"],
        "no-irregular-whitespace": "error",
        "no-lone-blocks": ["error"],
        "no-lonely-if": ["error"],
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": ["error"],
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        "no-prototype-builtins": "off",
        "no-return-assign": ["error"],
        "no-trailing-spaces": ["error"],
        "no-unneeded-ternary": ["error"],
        "no-unreachable-loop": ["error"],
        "no-unsafe-optional-chaining": ["error"],
        "no-useless-computed-key": ["error"],
        "no-useless-rename": ["error"],
        "no-whitespace-before-property": ["error"],
        "nonblock-statement-body-position": ["error"],
        "object-curly-spacing": ["error", "always"],
        "operator-linebreak": ["error", "before"],
        "prefer-const": "error",
        "prefer-object-spread": ["error"],
        "quotes": [
            "error",
            "double",
        ],
        "semi": [
            "error",
            "never",
        ],
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", "always"],
        "spaced-comment": ["error"],
        "space-infix-ops": ["error"],
        "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        "no-extra-parens": ["error"],
    },
}