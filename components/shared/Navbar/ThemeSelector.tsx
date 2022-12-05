import Sun from '../../Icons/sun';
import Moon from '../../Icons/moon';
import styled from 'styled-components';
import { useTheme } from '../../Contexts/ThemeContext';

const ThemeSelector = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeSelectorButton onClick={toggleTheme}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </ThemeSelectorButton>
  );
};

const ThemeSelectorButton = styled.button`
  padding: 6px;
  margin: -6px;
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
`;

export default ThemeSelector;
