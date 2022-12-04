import Sun from '../../Icons/sun';
import Moon from '../../Icons/moon';
import styled from 'styled-components';

const ThemeSelector = (): JSX.Element => {
  return (
    <ThemeSelectorButton>
      <Sun />
    </ThemeSelectorButton>
  );
};

const ThemeSelectorButton = styled.button`
  padding: 6px;
  margin: -6px -6px -9px -6px;
`;

export default ThemeSelector;
