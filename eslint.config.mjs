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

      // Enforce function declarations for named functions
      "func-style": ["error", "declaration", { allowArrowFunctions: true }],

      // Enforce consistent error handling
      "no-throw-literal": "error",
      "prefer-promise-reject-errors": "error",

      // Enforce consistent type imports
      "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],

      // Enforce consistent React imports (not needed in React 18+)
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      
      // Additional rules to fix common issues
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  // Flat Config Condition (Replaces "overrides")
  {
    files: ["src/app/**/*.tsx", "src/pages/**/*.tsx"],
    rules: {
      "import/no-default-export": "off",
    },
  },
  // Add additional override for Next.js API routes
  {
    files: ["src/app/api/**/*.ts", "src/pages/api/**/*.ts"],
    rules: {
      "import/no-default-export": "off",
    },
  },
  // Add an exception for configuration files
  {
    files: ["*.config.mjs", "*.config.js", "*.config.ts"],
    rules: {
      "import/no-default-export": "off",
    },
  },
];

export default eslintConfig;
