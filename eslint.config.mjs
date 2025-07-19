// eslint.config.ts
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Những cấu hình mặc định của Next.js / Typescript
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Ghi đè rule hoặc tắt rule ở đây
  {
    // Áp dụng riêng rule này cho tất cả file TS/TSX
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // ✅ TẮT RULE này hoàn toàn!
    },
  },
];

export default eslintConfig;
