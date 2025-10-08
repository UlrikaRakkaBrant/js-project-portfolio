// styled.d.ts
import 'styled-components';
import { theme } from './src/styles/theme';

type AppTheme = typeof theme;

declare module 'styled-components' {
  // This merges with the default styled-components typing
  export interface DefaultTheme extends AppTheme { }
}
