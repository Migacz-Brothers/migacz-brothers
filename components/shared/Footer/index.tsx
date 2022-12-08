import Link from 'next/link';
import styled from 'styled-components';
import LinkedinIcon from '../../Icons/linkedin';
import MailIcon from '../../Icons/mail';
import ThemeSelector from '../ThemeSelector';

const FooterComponent = (): JSX.Element => {
  return (
    <Footer>
      <FooterInnerWrapper>
        <LanguagesList>
          <li>
            <ActiveLink href='/'>EN</ActiveLink>
          </li>
          <li>
            <Link href='https://pt.migaczbrothers.com/'>PT</Link>
          </li>
        </LanguagesList>
        <SocialMediaList>
          <li>
            <SocialMediaIcon href='https://www.linkedin.com/company/migacz-brothers'>
              <LinkedinIcon />
            </SocialMediaIcon>
          </li>
          <li>
            <SocialMediaIcon href='mailto:hello@migaczbrothers.com'>
              <MailIcon />
            </SocialMediaIcon>
          </li>
        </SocialMediaList>
        <SitemapList>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About Us</Link>
          </li>
          <li>
            <Link href='/services'>Services</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
          <li>
            <ThemeSelector />
          </li>
        </SitemapList>
      </FooterInnerWrapper>
      <CopyrightDisclaimer>Copyright ©2022 Migacz Brothers</CopyrightDisclaimer>
    </Footer>
  );
};

const Footer = styled.footer`
  width: 100%;
  background-color: var(--background-secondary);
`;

const FooterInnerWrapper = styled.div`
  max-width: 1216px;
  padding: 80px 16px 40px 16px;
  margin: 0 auto;

  color: var(--light-primary);

  display: flex;
  justify-content: space-between;
`;

// Languages List

const LanguagesList = styled.ul`
  display: flex;
  gap: 24px;
`;

const ActiveLink = styled(Link)`
  text-decoration: underline;
  color: var(--primary);
`;

// Social Media List

const SocialMediaList = styled.ul`
  display: flex;
  gap: 26px;
  align-items: center;
`;

const SocialMediaIcon = styled(Link)`
  path {
    stroke: var(--light-primary) !important;
  }
`;

// Sitemap List

const SitemapList = styled.ul`
  display: flex;
  gap: 40px;
`;

const CopyrightDisclaimer = styled.p`
  color: var(--light-primary);
  text-align: center;
  font-size: 14px;
  padding: 4px 0;
`;

export default FooterComponent;
