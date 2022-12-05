import { createGlobalStyle } from 'styled-components';
import { themeOptions } from '../Contexts/ThemeContext';

interface VariablesProps {
  theme: themeOptions;
}

const Variables = createGlobalStyle<VariablesProps>`
  :root {
    --dark-primary: #161616;
    --dark-secondary: #242424;
    --light-primary: #ffffff;
    --light-secondary: #f4f4f4;
    --primary: #00796b;
    --primary-50: #00796b80;
    --primary-20: #00796b33;

    --brackground-primary: ${(props) =>
      props.theme === 'dark' ? 'var(--dark-primary)' : 'var(--light-primary)'};
    --brackground-secondary: v${(props) =>
      props.theme === 'dark'
        ? 'var(--dark-secondary)'
        : 'var(--light-secondary)'};
    --text-primary: ${(props) =>
      props.theme === 'dark' ? 'var(--light-primary)' : 'var(--dark-primary)'};
    
    --rounded: 8px;
  }
`;

export default Variables;
