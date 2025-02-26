import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Enforce named exports for consistency
      "import/prefer-default-export": "off",
      "import/no-default-export": "error",
      
      // Exception for Next.js pages and layouts which require default exports
      "import/no-default-export": [
        "error", 
        { 
          "ignore": [
            "^pages/",
            "^app/",
            "^middleware",
            "^next\\.config\\.(js|mjs|ts)"
          ] 
        }
      ],
      
      // Enforce function declarations for named functions
      "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
      
      // Enforce consistent error handling
      "no-throw-literal": "error",
      
      // Enforce consistent promise handling
      "prefer-promise-reject-errors": "error",
      
      // Enforce consistent type imports
      "@typescript-eslint/consistent-type-imports": ["error", { "prefer": "type-imports" }],
      
      // Enforce consistent React imports
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
    overrides: [
      {
        // Allow default exports in page files
        files: ["src/app/**/*.tsx", "src/pages/**/*.tsx"],
        rules: {
          "import/no-default-export": "off"
        }
      }
    ]
  }
];

export default eslintConfig;
