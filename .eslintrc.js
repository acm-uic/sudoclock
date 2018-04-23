module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix",
        ],
        "quotes": [
            "error",
            "single",
        ],
        "semi": [
            "error",
            "always",
        ],
        "no-console": 0,
        "no-unused-vars": "error",
        "max-len": [ 2, 120, 4 ],
        "spaced-comment": ["error", "always", {
            "line": {
                "markers": ["/"],
                "exceptions": ["-", "+"],
            },
            "block": {
                "markers": ["!"],
                "exceptions": ["*"],
                "balanced": true,
            }
        }],
        "comma-dangle": [
            "error",
            "always",
        ]
    }
};