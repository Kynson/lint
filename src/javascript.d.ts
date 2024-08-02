import type { ConfigWithExtends } from 'typescript-eslint';

export default function (
  files: string[],
  rulesOverrides?: ConfigWithExtends['rules'],
): Omit<ConfigWithExtends, 'extends'>[];
