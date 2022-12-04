import { createGlobalStyle } from 'styled-components';

const Variables = createGlobalStyle`
  :root {
    --dark-primary: #161616;
    --dark-secondary: #242424;
    --light: #ffffff;
    --light-secondary: #f4f4f4;
    --primary: #00796b;
    --primary-50: #00796b80;
    --primary-20: #00796b33;

    --brackground-primary: var(--dark-primary);
    --brackground-secondary: var(--dark-secondary);
    --text-primary: var(--light);
    
    --rounded: 8px;
  }
`;

export default Variables;
