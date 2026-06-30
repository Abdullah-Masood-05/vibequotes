// Next.js 16 ships a native ESLint flat config, so we use it directly instead
// of the legacy FlatCompat bridge (which crashes the eslintrc validator).
import next from 'eslint-config-next/core-web-vitals';

const eslintConfig = [...next];

export default eslintConfig;
