import Link from 'next/link';
import styled from 'styled-components';
import Logo from '../../Icons/logo';
import MobileMenu from './MobileMenu';
import ThemeSelector from '../ThemeSelector';

const Navbar = (): JSX.Element => {
  return (
    <Nav>
      <NavInnerContainer>
        <LogoContainer href='/'>
          <Logo />
        </LogoContainer>

        <NavList>
          <li>
            <NavItem href='/'>Home</NavItem>
          </li>
          <li>
            <NavItem href='/services'>Services</NavItem>
          </li>
          <li>
            <NavItem href='/about-us'>About us</NavItem>
          </li>
        </NavList>
        <ThemeSelector />
        <ContactButton href='/contact'>Contact Us</ContactButton>
        <MobileMenu />
      </NavInnerContainer>
    </Nav>
  );
};

const Nav = styled.div`
  width: 100%;
  background-color: var(--dark-primary);
  color: var(--white);
`;

const NavInnerContainer = styled.div`
  max-width: 1216px;
  padding: 24px 16px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 980px) {
    padding: 8px 16px;
  }
`;

const LogoContainer = styled(Link)`
  margin-right: auto;

  @media (max-width: 980px) {
    order: 1;
    margin-left: auto;

    svg {
      width: 160px;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  margin-right: 32px;

  @media (max-width: 980px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  margin: -6px 10px;
  padding: 6px 8px;
  border-radius: 4px;
  transition: 200ms;

  :hover {
    background-color: #ffffff12;
  }
`;

const ContactButton = styled(Link)`
  padding: 10px 64px;
  background-color: var(--primary);
  display: inline-block;
  font-size: 16px;
  border-radius: var(--rounded);
  margin-left: 34px;

  @media (max-width: 980px) {
    display: none;
  }
`;

export default Navbar;
