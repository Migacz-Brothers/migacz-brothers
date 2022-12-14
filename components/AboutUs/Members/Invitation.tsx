import Link from 'next/link';
import styled from 'styled-components';

const InvitationComponent = (): JSX.Element => {
  return (
    <Invitation>
      <InvitationText>
        Do you wanna join our team?
        <br /> Please email us:
      </InvitationText>
      <CustomLink href="mailto:hr@migaczbrothers.com, pedromigacz@gmail.com?subject=Role%20application&body=Hello%2C%0AI'd%20like%20to%20apply%20for%20a%20%5Bfront%20end%2Fback%20end%2Fdesign%2Fmarketing%5D%20position%20at%20Migacz%20Brothers.%0A%0AHere's%20my%20portfolio%3A%20(remove%20if%20not%20applicable)%0AHere's%20my%20GitHub%3A%20(remove%20if%20not%20applicable)%0A%0A%5BAdd%20any%20information%20you%20deem%20important%2C%20such%20as%20years%20of%20experience%2C%20cool%20projects%20you%20have%20done%2C%20your%20availability%2C%20languages%20you%20speak%2C%20etc.%5D%0A%0AThanks%2C%0A%5BYour%20Name%5D%0A">
        hr@migaczbrothers.com
      </CustomLink>
    </Invitation>
  );
};

const Invitation = styled.li`
  border: 1px solid var(--text-primary);
  border-radius: var(--rounded);
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
`;

const InvitationText = styled.p`
  color: var(--text-primary);
  font-size: 20px;
  letter-spacing: -0.01em;
  line-height: 140%;
  margin-bottom: 13px;
`;

const CustomLink = styled(Link)`
  color: var(--text-tertiary);
  text-decoration: underline;
  font-size: 18px;

  ::after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default InvitationComponent;
