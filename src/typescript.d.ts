import type { ConfigWithExtends } from 'typescript-eslint';

export default function (
  files: string[],
  tsconfigRootDir: string,
  rulesOverrides?: ConfigWithExtends['rules'],
): Omit<ConfigWithExtends, 'extends'>[];
