module.exports = {
    parser: "babel-eslint",
    env: {
      browser: true,
      es6: true,
      node: true
    },
    extends: [
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:import/recommended"
    ],
    plugins: [
        "react-hooks",
        "import"
    ],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly"
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      allowImportExportEverywhere: false,
      ecmaFeatures: {
        "jsx": true,
        globalReturn: false,
    }
    },
    rules: {
        // errors
        "no-cond-assign": [
          "error",
          "always"
        ],
        // disallow use of constant expressions in conditions
        "no-constant-condition": "warn",
        // disallow control characters in regular expressions
        "no-control-regex": "error",
        // disallow duplicate arguments in functions
        "no-dupe-args": "error",
        // disallow duplicate keys when creating object literals
        "no-dupe-keys": "error",
        // disallow a duplicate case label.
        "no-duplicate-case": "error",
        // disallow the use of empty character classes in regular expressions
        "no-empty-character-class": "error",
        // disallow empty statements
        "no-empty": "error",
        // disallow assigning to the exception in a catch block
        "no-ex-assign": "error",
        // disallow double-negation boolean casts in a boolean context
        "no-extra-boolean-cast": "off",
        // disallow unnecessary parentheses
        // http://eslint.org/docs/rules/no-extra-parens
        "no-extra-parens": [
          "off",
          "all",
          {
            "conditionalAssign": true,
            "nestedBinaryExpressions": false
          }
        ],
        // disallow unnecessary semicolons
        "no-extra-semi": "error",
        // disallow overwriting functions written as function declarations
        "no-func-assign": "error",
        // disallow function or variable declarations in nested blocks
        "no-inner-declarations": "error",
        // disallow invalid regular expression strings in the RegExp constructor
        "no-invalid-regexp": "error",
        // disallow irregular whitespace outside of strings and comments
        "no-irregular-whitespace": "error",
        // disallow negation of the left operand of an in expression
        "no-negated-in-lhs": "error",
        // disallow the use of object properties of the global object (Math and JSON) as functions
        "no-obj-calls": "error",
        // disallow multiple spaces in a regular expression literal
        "no-regex-spaces": "error",
        // disallow sparse arrays
        "no-sparse-arrays": "error",
        // disallow unreachable statements after a return, throw, continue, or break statement
        "no-unreachable": "error",
        // disallow comparisons with the value NaN
        "use-isnan": "error",
        // ensure JSDoc comments are valid
        // http://eslint.org/docs/rules/valid-jsdoc
        "valid-jsdoc": "off",
        // ensure that the results of typeof are compared against a valid string
        "valid-typeof": "error",
        // Avoid code that looks like two expressions but is actually one
        "no-unexpected-multiline": "off",
        // style
        // enforce spacing inside array brackets
        "array-bracket-spacing": [
          "error",
          "never"
        ],
        // enforce spacing inside single-line blocks
        // http://eslint.org/docs/rules/block-spacing
        "block-spacing": [
          "error",
          "always"
        ],
        // enforce one true brace style
        "brace-style": [
          "error",
          "1tbs",
          {
            "allowSingleLine": true
          }
        ],
        // enforce spacing before and after comma
        "comma-spacing": [
          "error",
          {
            "before": false,
            "after": true
          }
        ],
        // enforce one true comma style
        "comma-style": [
          "error",
          "last"
        ],
        // disallow padding inside computed properties
        "computed-property-spacing": [
          "error",
          "never"
        ],
        // enforces consistent naming when capturing the current execution context
        "consistent-this": "off",
        // enforce newline at the end of file, with no multiple empty lines
        "eol-last": "error",
        // require function expressions to have a name
        "func-names": "off",
        // enforces use of function declarations or expressions
        "func-style": "off",
        // this option enforces minimum and maximum identifier lengths
        // (variable names, property names etc.)
        "id-length": "off",
        // this option sets a specific tab width for your code
        // http://eslint.org/docs/rules/indent
        "indent": [
          "error",
          2,
          {
            "SwitchCase": 1
          }
        ],
        // specify whether double or single quotes should be used in JSX attributes
        // http://eslint.org/docs/rules/jsx-quotes
        "jsx-quotes": ["error", "prefer-single"],
        // enforces spacing between keys and values in object literal properties
        "key-spacing": [
          "error",
          {
            "beforeColon": false,
            "afterColon": true
          }
        ],
        // require a space before & after certain keywords
        "keyword-spacing": [
          "error",
          {
            "before": true,
            "after": true,
            "overrides": {
              "return": {
                "after": true
              },
              "throw": {
                "after": true
              },
              "case": {
                "after": true
              }
            }
          }
        ],
        // enforces empty lines around comments
        "lines-around-comment": "off",
        // disallow mixed "LF" and "CRLF" as linebreaks
        "linebreak-style": "off",
        // specify the maximum depth callbacks can be nested
        "max-nested-callbacks": "off",
        // restrict the number of statements per line
        // http://eslint.org/docs/rules/max-statements-per-line
        "max-statements-per-line": [
          "off",
          {
            "max": 1
          }
        ],
        // require a capital letter for constructors
        "new-cap": [
          "error",
          {
            "newIsCap": true
          }
        ],
        // disallow the omission of parentheses when invoking a constructor with no arguments
        "new-parens": "off",
        // allow/disallow an empty newline after var statement
        "newline-after-var": "off",
        // http://eslint.org/docs/rules/newline-before-return
        "newline-before-return": "off",
        // enforces new line after each method call in the chain to make it
        // more readable and easy to maintain
        // http://eslint.org/docs/rules/newline-per-chained-call
        "newline-per-chained-call": [
          "error",
          {
            "ignoreChainWithDepth": 3
          }
        ],
        // disallow use of the Array constructor
        "no-array-constructor": "error",
        // disallow use of the continue statement
        "no-continue": "off",
        // disallow comments inline after code
        "no-inline-comments": "off",
        // disallow if as the only statement in an else block
        "no-lonely-if": "off",
        // disallow mixed spaces and tabs for indentation
        "no-mixed-spaces-and-tabs": "error",
        // disallow multiple empty lines and only one newline at the end
        "no-multiple-empty-lines": [
          "error",
          {
            "max": 2,
            "maxEOF": 1
          }
        ],
        // disallow negated conditions
        // http://eslint.org/docs/rules/no-negated-condition
        "no-negated-condition": "off",
        // disallow nested ternary expressions
        "no-nested-ternary": "error",
        // disallow use of the Object constructor
        "no-new-object": "error",
        // disallow space between function identifier and application
        "no-spaced-func": "error",
        // disallow the use of ternary operators
        "no-ternary": "off",
        // disallow trailing whitespace at the end of lines
        "no-trailing-spaces": "error",
        // disallow dangling underscores in identifiers
        "no-underscore-dangle": [
          "error",
          {
            "allowAfterThis": false
          }
        ],
        // disallow the use of Boolean literals in conditional expressions
        // also, prefer `a || b` over `a ? a : b`
        // http://eslint.org/docs/rules/no-unneeded-ternary
        "no-unneeded-ternary": [
          "error",
          {
            "defaultAssignment": false
          }
        ],
        // disallow whitespace before properties
        // http://eslint.org/docs/rules/no-whitespace-before-property
        "no-whitespace-before-property": "error",
        // require padding inside curly braces
        "object-curly-spacing": [
          "off",
          "always"
        ],
        // allow just one var statement per function
        "one-var": [
          "error",
          "never"
        ],
        // require a newline around variable declaration
        // http://eslint.org/docs/rules/one-var-declaration-per-line
        "one-var-declaration-per-line": [
          "error",
          "always"
        ],
        // require assignment operator shorthand where possible or prohibit it entirely
        "operator-assignment": "off",
        // enforce operators to be placed before or after line breaks
        "operator-linebreak": "off",
        // enforce padding within blocks
        "padded-blocks": [
          "off",
          {
            "classes": "never",
            "blocks": "never",
            "switches": "never"
          }
        ],
        // require quotes around object literal property names
        // http://eslint.org/docs/rules/quote-props.html
        "quote-props": [
          "error",
          "as-needed",
          {
            "keywords": false,
            "unnecessary": true,
            "numbers": false
          }
        ],
        // specify whether double or single quotes should be used
        "quotes": [
          "error",
          "single",
          "avoid-escape"
        ],
        // require identifiers to match the provided regular expression
        "id-match": "off",
        // do not require jsdoc
        // http://eslint.org/docs/rules/require-jsdoc
        "require-jsdoc": "off",
        // enforce spacing before and after semicolons
        "semi-spacing": [
          "error",
          {
            "before": false,
            "after": true
          }
        ],
        // require or disallow use of semicolons instead of ASI
        "semi": [
          "error",
          "always"
        ],
        // sort variables within the same declaration block
        "sort-vars": "off",
        // require or disallow space before blocks
        "space-before-blocks": "error",
        // require or disallow space before function opening parenthesis
        // http://eslint.org/docs/rules/space-before-function-paren
        "space-before-function-paren": [
          "error",
          {
            "anonymous": "always",
            "named": "never"
          }
        ],
        // require or disallow spaces inside parentheses
        "space-in-parens": [
          "error",
          "never"
        ],
        // require spaces around operators
        "space-infix-ops": "error",
        // Require or disallow spaces before/after unary operators
        "space-unary-ops": "off",
        // require or disallow a space immediately following the // or /* in a comment
        "spaced-comment": [
          "error",
          "always",
          {
            "exceptions": [
              "-",
              "+"
            ],
            "markers": [
              "=",
              "!"
            ]
            // space here to support sprockets directives
          }
        ],
        // require regex literals to be wrapped in parentheses
        "wrap-regex": "off",
        // variables
        // enforce or disallow variable initializations at definition
        "init-declarations": "off",
        // disallow the catch clause parameter name being the same as a variable in the outer scope
        "no-catch-shadow": "off",
        // disallow deletion of variables
        "no-delete-var": "error",
        // disallow var and named functions in global scope
        // http://eslint.org/docs/rules/no-implicit-globals
        "no-implicit-globals": "off",
        // disallow labels that share a name with a variable
        "no-label-var": "off",
        // disallow self assignment
        // http://eslint.org/docs/rules/no-self-assign
        "no-self-assign": "error",
        // disallow shadowing of names such as arguments
        "no-shadow-restricted-names": "error",
        // disallow declaration of variables already declared in the outer scope
        "no-shadow": "error",
        // disallow use of undefined when initializing variables
        "no-undef-init": "off",
        // disallow use of undeclared variables unless mentioned in a /*global */ block
        "no-undef": "error",
        // disallow use of undefined variable
        "no-undefined": "off",
        // disallow declaration of variables that are not used in the code
        "no-unused-vars": [
          "error",
          {
            "vars": "local",
            "args": "after-used"
          }
        ],
        // disallow use of variables before they are defined
        //"no-use-before-define": "error",
    
        // best-practices
    
        // enforces getter/setter pairs in objects
        "accessor-pairs": "off",
        // enforces return statements in callbacks of array"s methods
        // http://eslint.org/docs/rules/array-callback-return
        "array-callback-return": "error",
        // treat var statements as if they were block scoped
        "block-scoped-var": "error",
        // specify the maximum cyclomatic complexity allowed in a program
        "complexity": [
          "off",
          11
        ],
        // don't require return statements to either always or never specify values
        "consistent-return": "off",
        // specify curly brace conventions for all control statements
        "curly": [
          "error",
          "multi-line"
        ],
        // require default case in switch statements
        "default-case": [
          "error",
          {
            "commentPattern": "^no default$"
          }
        ],
        // encourages use of dot notation whenever possible
        "dot-notation": [
          "error",
          {
            "allowKeywords": true
          }
        ],
        // enforces consistent newlines before or after dots
        "dot-location": "off",
        // require the use of === and !==
        // http://eslint.org/docs/rules/eqeqeq
        "eqeqeq": [
          "error",
          "allow-null"
        ],
        // make sure for-in loops have an if statement
        "guard-for-in": "error",
        // Blacklist certain identifiers to prevent them being used
        // http://eslint.org/docs/rules/id-blacklist
        "id-blacklist": "off",
        // disallow the use of alert, confirm, and prompt
        "no-alert": 1,
        // disallow use of arguments.caller or arguments.callee
        "no-caller": "error",
        // disallow lexical declarations in case/default clauses
        // http://eslint.org/docs/rules/no-case-declarations.html
        "no-case-declarations": "error",
        // disallow division operators explicitly at beginning of regular expression
        "no-div-regex": "off",
        // disallow else after a return in an if
        "no-else-return": "error",
        // disallow empty functions, except for standalone funcs/arrows
        // http://eslint.org/docs/rules/no-empty-function
        "no-empty-function": [
          "error",
          {
            "allow": [
              "arrowFunctions",
              "functions",
              "methods"
            ]
          }
        ],
        // disallow empty destructuring patterns
        // http://eslint.org/docs/rules/no-empty-pattern
        "no-empty-pattern": "error",
        // disallow Unnecessary Labels
        // http://eslint.org/docs/rules/no-extra-label
        "no-extra-label": "error",
        // disallow comparisons to null without a type-checking operator
        "no-eq-null": "off",
        // disallow use of eval()
        "no-eval": "error",
        // disallow adding to native types
        "no-extend-native": "error",
        // disallow unnecessary function binding
        "no-extra-bind": "error",
        // disallow fallthrough of case statements
        "no-fallthrough": "error",
        // disallow the use of leading or trailing decimal points in numeric literals
        "no-floating-decimal": "error",
        // disallow the type conversions with shorter notations
        "no-implicit-coercion": "off",
        // disallow use of eval()-like methods
        "no-implied-eval": "error",
        // disallow this keywords outside of classes or class-like objects
        "no-invalid-this": "off",
        // disallow usage of __iterator__ property
        "no-iterator": "error",
        // disallow use of labels for anything other then loops and switches
        "no-labels": [
          "error",
          {
            "allowLoop": false,
            "allowSwitch": false
          }
        ],
        // disallow unnecessary nested blocks
        "no-lone-blocks": "error",
        // disallow creation of functions within loops
        "no-loop-func": "error",
        // disallow magic numbers
        // http://eslint.org/docs/rules/no-magic-numbers
        "no-magic-numbers": [
          "off",
          {
            "ignore": [],
            "ignoreArrayIndexes": true,
            "enforceConst": true,
            "detectObjects": false
          }
        ],
        // disallow use of multiple spaces
        "no-multi-spaces": [
          "error",
          {
            "ignoreEOLComments": true
          }
        ],
        // disallow use of multiline strings
        "no-multi-str": "error",
        // disallow reassignments of native objects
        "no-native-reassign": "error",
        // disallow use of new operator when not part of the assignment or comparison
        "no-new": "error",
        // disallow use of new operator for Function object
        "no-new-func": "error",
        // disallows creating new instances of String, Number, and Boolean
        "no-new-wrappers": "error",
        // disallow use of (old style) octal literals
        "no-octal": "error",
        // disallow use of octal escape sequences in string literals, such as
        // var foo = "Copyright \251";
        "no-octal-escape": "error",
        // disallow reassignment of function parameters
        // disallow parameter object manipulation
        // rule: http://eslint.org/docs/rules/no-param-reassign.html
        "no-param-reassign": [
          "error",
          {
            "props": true
          }
        ],
        // disallow use of process.env
        "no-process-env": "off",
        // disallow usage of __proto__ property
        "no-proto": "error",
        // disallow declaring the same variable more then once
        "no-redeclare": "error",
        // disallow certain syntax forms
        // http://eslint.org/docs/rules/no-restricted-syntax
        //"no-restricted-syntax": [
        //  "error",
        //  "DebuggerStatement",
        //  "ForInStatement",
        //  "LabeledStatement",
        //  "WithStatement",
        //],
        // disallow use of assignment in return statement
        "no-return-assign": "error",
        // disallow use of `javascript:` urls.
        "no-script-url": "error",
        // disallow comparisons where both sides are exactly the same
        "no-self-compare": "error",
        // disallow use of comma operator
        "no-sequences": "error",
        // restrict what can be thrown as an exception
        //"no-throw-literal": "error",
        // disallow unmodified conditions of loops
        // http://eslint.org/docs/rules/no-unmodified-loop-condition
        "no-unmodified-loop-condition": "off",
        // disallow return/throw/break/continue inside finally blocks
        // http://eslint.org/docs/rules/no-unsafe-finally
        "no-unsafe-finally": "error",
        // disallow usage of expressions in statement position
        "no-unused-expressions": "error",
        // disallow unused labels
        // http://eslint.org/docs/rules/no-unused-labels
        "no-unused-labels": "error",
        // disallow unnecessary .call() and .apply()
        "no-useless-call": "off",
        // disallow useless string concatenation
        // http://eslint.org/docs/rules/no-useless-concat
        "no-useless-concat": "error",
        // disallow unnecessary string escaping
        // http://eslint.org/docs/rules/no-useless-escape
        "no-useless-escape": "error",
        // disallow use of void operator
        "no-void": "off",
        // disallow usage of configurable warning terms in comments: e.g. todo
        "no-warning-comments": [
          "off",
          {
            "terms": [
              "todo",
              "fixme",
              "xxx"
            ],
            "location": "start"
          }
        ],
        // disallow use of the with statement
        "no-with": "error",
        // require use of the second argument for parseInt()
        "radix": "error",
        // requires to declare all vars on top of their containing scope
        //"vars-on-top": "error",
        // require immediate function invocation to be wrapped in parentheses
        // http://eslint.org/docs/rules/wrap-iife.html
        "wrap-iife": [
          "error",
          "outside"
        ],
        // require or disallow Yoda conditions
        "yoda": "error",
        // legacy
    
        // disallow trailing commas in object literals
        //"comma-dangle": ["error", "never"],
        // specify the maximum depth that blocks can be nested
        "max-depth": [
          "off",
          4
        ],
        // limits the number of parameters that can be used in the function declaration.
        "max-params": [
          "off",
          3
        ],
        // specify the maximum number of statement allowed in a function
        "max-statements": [
          "off",
          10
        ],
        // disallow use of bitwise operators
        "no-bitwise": "off",
        // disallow use of unary operators, ++ and --
        "no-plusplus": "off",
        // react
        // specify whether double or single quotes should be used in JSX attributes
        // http://eslint.org/docs/rules/jsx-quotes
        //"jsx-quotes": ["error", "prefer-double"],
        // Prevent missing displayName in a React component definition
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
        "react/display-name": [
          "off",
          {
            "ignoreTranspilerName": false
          }
        ],
        // Forbid certain propTypes (any, array, object)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
        "react/forbid-prop-types": [
          "off",
          {
            "forbid": [
              "any",
              "array",
              "object"
            ]
          }
        ],
        // Enforce boolean attributes notation in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        "react/jsx-boolean-value": [
          "error",
          "never"
        ],
        // Validate closing bracket location in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        "react/jsx-closing-bracket-location": [
          "error",
          "line-aligned"
        ],
        // Enforce or disallow spaces inside of curly braces in JSX attributes
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
        //"react/jsx-curly-spacing": ["error", "never", { "allowMultiline": true }],
        // Enforce event handler naming conventions in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
        "react/jsx-handler-names": [
          "off",
          {
            "eventHandlerPrefix": "handle",
            "eventHandlerPropPrefix": "on"
          }
        ],
        // Validate props indentation in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        "react/jsx-indent-props": [
          "error",
          2
        ],
        // Validate JSX has key prop when in array or iterator
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
        "react/jsx-key": "off",
        // Limit maximum of props on a single line in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
        "react/jsx-max-props-per-line": [
          "off",
          {
            "maximum": 1
          }
        ],
        // Prevent usage of .bind() in JSX props
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        "react/jsx-no-bind": [
          "error",
          {
            "ignoreRefs": true,
            "allowArrowFunctions": true,
            "allowBind": false
          }
        ],
        // Prevent duplicate props in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
        "react/jsx-no-duplicate-props": [
          "off",
          {
            "ignoreCase": false
          }
        ],
        // Prevent usage of unwrapped JSX strings
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
        "react/jsx-no-literals": "off",
        // Disallow undeclared variables in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
        "react/jsx-no-undef": "error",
        // Enforce PascalCase for user-defined JSX components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
        "react/jsx-pascal-case": "error",
        // Enforce propTypes declarations alphabetical sorting
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
        "react/sort-prop-types": [
          "off",
          {
            "ignoreCase": false,
            "callbacksLast": false
          }
        ],
        // deprecated in favor of react/jsx-sort-props
        "react/jsx-sort-prop-types": "off",
        // Enforce props alphabetical sorting
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
        "react/jsx-sort-props": [
          "off",
          {
            "ignoreCase": false,
            "callbacksLast": false
          }
        ],
        // Prevent React to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
        //"react/jsx-uses-react": ["error", { "pragma": "React" }],
        // Prevent variables used in JSX to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        //"react/jsx-uses-vars": "error",
        // Prevent usage of dangerous JSX properties
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
        "react/no-danger": "off",
        // Prevent usage of deprecated methods
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
        "react/no-deprecated": [
          "error"
        ],
        // Prevent usage of setState in componentDidMount
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
        "react/no-did-mount-set-state": [
          "error"
        ],
        // Prevent usage of setState in componentDidUpdate
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
        "react/no-did-update-set-state": [
          "error"
        ],
        // Prevent direct mutation of this.state
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
        "react/no-direct-mutation-state": "off",
        // Prevent usage of isMounted
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
        "react/no-is-mounted": "error",
        // Prevent multiple component definition per file
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
        "react/no-multi-comp": [
          "warn",
          {
            "ignoreStateless": true
          }
        ],
        // Prevent usage of setState
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
        "react/no-set-state": "off",
        // Prevent using string references
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
        "react/no-string-refs": "off",
        // Prevent usage of unknown DOM property
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
        "react/no-unknown-property": "error",
        // Require ES6 class declarations over React.createClass
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
        "react/prefer-es6-class": [
          "error",
          "always"
        ],
        // Require stateless functions when not using lifecycle methods, setState or ref
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
        //"react/prefer-stateless-function": "error",
        // Prevent missing props validation in a React component definition
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        "react/prop-types": [
          "off",
          {
            "ignore": [],
            "customValidators": []
          }
        ],
        // Prevent missing React when using JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
        //"react/react-in-jsx-scope": "error",
        // Restrict file extensions that may be required
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-extension.md
        "react/require-extension": [
          "off",
          {
            "extensions": [
              ".jsx"
            ]
          }
        ],
        // Require render() methods to return something
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
        "react/require-render-return": "error",
        // Prevent extra closing tags for components without children
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        "react/self-closing-comp": [
          "error",
          {
            "component": true,
            "html": false
          }
        ],
        // Enforce spaces before the closing bracket of self-closing JSX elements
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
        "react/jsx-tag-spacing": ["error", { "beforeSelfClosing": "always" }],
        // Limit maximum of props on a single line in JSX (react/jsx-max-props-per-line)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
        "react/jsx-max-props-per-line": ["warn", { "maximum": 1, "when": "multiline"}],
        // Enforce component methods order
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
        "react/sort-comp": [
          "warn",
          {
            "order": [
              "static-methods",
              "lifecycle",
              "/^on.+$/",
              "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
              "everything-else",
              "/^render.+$/",
              "render"
            ]
          }
        ],
        // Prevent missing parentheses around multilines JSX
        "react/jsx-wrap-multilines": [
          "error",
          {
            "declaration": "parens",
            "assignment": "parens",
            "return": "parens",
            "arrow": "ignore",
            "condition": "ignore",
            "logical": "ignore",
            "prop": "ignore"
          }
        ],
        // Require that the first prop in a JSX element be on a new line when the element is multiline
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
        "react/jsx-first-prop-new-line": [
          "error",
          "multiline"
        ],
        // enforce spacing around jsx equals signs
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
        "react/jsx-equals-spacing": [
          "error",
          "never"
        ],
        // enforce JSX indentation
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        "react/jsx-indent": [
          "error",
          2
        ],
        // custom
        "camelcase": "off",
        "react/jsx-curly-spacing": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/react-in-jsx-scope": "error",
        "react/prefer-stateless-function": "off",
        "no-var": "warn",
        "no-debugger": "warn",
        "no-console": "off",
        "no-restricted-syntax": "warn",
        "vars-on-top": "warn",
        "comma-dangle": "off",
        "no-use-before-define": "off",
        "max-len": [
          "error",
          120,
          2,
          {
            "ignoreStrings": true,
            "ignoreComments": true
          }
        ],
        "no-path-concat": "error",
        "no-process-exit": "error",
        "no-sync": "warn",
        "no-throw-literal": "off",
        "jsx-a11y/aria-role": "off"
      },
    settings: {
      react: {
        version: "detect"
      }
    }
  };