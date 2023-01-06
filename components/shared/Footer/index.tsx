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
            <ActiveLink>EN</ActiveLink>
          </li>
          <BlockedLink>
            <span>PT</span>
          </BlockedLink>
        </LanguagesList>
        <SocialMediaList>
          <li>
            <SocialMediaIcon
              href='https://www.linkedin.com/company/migacz-brothers'
              aria-label='Company Linkedin'
            >
              <LinkedinIcon />
            </SocialMediaIcon>
          </li>
          <li>
            <SocialMediaIcon
              href='mailto:hello@migaczbrothers.com'
              aria-label='Company Email'
            >
              <MailIcon />
            </SocialMediaIcon>
          </li>
        </SocialMediaList>
        <SitemapList>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about-us'>About Us</Link>
          </li>
          {/* <li>
            <Link href='/services'>Services</Link>
          </li> */}
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
          <li>
            <ThemeSelector />
          </li>
        </SitemapList>
      </FooterInnerWrapper>
      <CopyrightDisclaimer>
        Copyright ©{new Date().getFullYear()} Migacz Brothers
      </CopyrightDisclaimer>
    </Footer>
  );
};

const Footer = styled.footer`
  width: 100%;
  background-color: var(--background-secondary);
`;

const FooterInnerWrapper = styled.div`
  max-width: var(--container-width);
  padding: 80px 16px 40px 16px;
  margin: 0 auto;

  color: var(--text-primary);

  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;

  @media (max-width: 980px) {
    grid-auto-flow: unset;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 60px;
    row-gap: 60px;
    padding: 80px 16px 60px 16px;
  }
`;

// Languages List

const LanguagesList = styled.ul`
  display: flex;
  gap: 24px;

  @media (max-width: 980px) {
    justify-self: flex-end;
  }
`;

const ActiveLink = styled.span`
  text-decoration: underline;
  color: var(--primary);
  cursor: pointer;
`;

// Social Media List

const SocialMediaList = styled.ul`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-self: center;

  @media (max-width: 980px) {
    justify-self: flex-start;
  }
`;

const SocialMediaIcon = styled(Link)`
  path {
    stroke: var(--text-primary) !important;
  }
`;

// Sitemap List

const SitemapList = styled.ul`
  display: flex;
  gap: 30px;
  justify-self: flex-end;

  @media (max-width: 980px) {
    justify-self: center;
    grid-column: 1 / 3;
  }

  path {
    stroke: var(--text-primary) !important;
    fill: var(--text-primary) !important;
  }
`;

const CopyrightDisclaimer = styled.p`
  color: var(--white);
  text-align: center;
  font-size: 14px;
  padding: 4px 0;

  color: var(--text-primary);
`;

const BlockedLink = styled.li`
  cursor: not-allowed;
`;

export default FooterComponent;
