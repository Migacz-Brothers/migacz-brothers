import { createGlobalStyle } from 'styled-components';
import { themeOptions } from '../Contexts/ThemeContext';

interface VariablesProps {
  theme: themeOptions;
}

const Variables = createGlobalStyle<VariablesProps>`
  :root {
    --dark-primary: #161616;
    --dark-secondary: #242424;

    --white: #ffffff;
    --light-primary: #f4f4f4;
    --light-secondary: #e4e4e4;
    --light-tertiary: #CDD1D6;

    --primary: #00796b;
    --primary-50: #00796b80;
    --primary-20: #00796b33;

    --grey-100: #7C7C7C;
    --grey-200: #26272E;
    --grey-500: #101010;

    --background-primary: ${(props) =>
      props.theme === 'dark' ? 'var(--dark-primary)' : 'var(--light-primary)'};

    --background-secondary: ${(props) =>
      props.theme === 'dark'
        ? 'var(--dark-secondary)'
        : 'var(--light-secondary)'};

    --background-variant: ${(props) =>
      props.theme === 'dark' ? 'var(--grey-500)' : 'var(--light-secondary)'};


    --text-primary: ${(props) =>
      props.theme === 'dark' ? 'var(--light-secondary)' : 'var(--grey-200)'};

    --text-secondary: ${(props) =>
      props.theme === 'dark' ? 'var(--light-tertiary)' : 'var(--grey-100)'};

    --text-tertiary: ${(props) =>
      props.theme === 'dark' ? 'var(--grey-100)' : 'var(--grey-200)'};
    
    --rounded: 8px;
  }
`;

export default Variables;
