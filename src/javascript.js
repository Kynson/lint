import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

/**
 * @param { string[] } files Files that should be linted with the generated ESLint configuration
 * @param { import('typescript-eslint').ConfigWithExtends['rules']? } rulesOverrides ESLint rules that should override the dfault ESLint configuration
 */
export default function generateESLintConfigurations(files, rulesOverrides) {
  return tseslint.config({
    files,
    extends: [eslint.configs.recommended, prettier],
    ...(rulesOverrides && { rules: rulesOverrides }),
  });
}
