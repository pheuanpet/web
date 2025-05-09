import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: [
      'tailwind.config.js',
      'postcss.config.js',
      'next.config.js',
      'eslint.config.mjs',
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
      '@next/next': nextPlugin,
      react: reactPlugin,
      import: importPlugin,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      // เพิ่ม custom rules ได้ที่นี่
      'no-console': 'warn', // เตือนเมื่อใช้ console.log
      'no-unused-vars': 'off', // ปิดของ JS ใช้ของ TS แทน
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      'react/jsx-key': 'warn', // JSX ต้องมี key เสมอ
      'react/react-in-jsx-scope': 'off', // Next.js ไม่ต้อง import React
      '@next/next/no-img-element': 'warn', // เตือนถ้าใช้ <img> แทน <Image>
      'import/order': ['warn', { 'newlines-between': 'always' }], // จัดระเบียบ import
    },
  },
];
