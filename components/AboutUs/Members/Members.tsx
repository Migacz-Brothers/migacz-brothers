import styled from 'styled-components';
import { Invitation, Member } from '.';

const Members = (): JSX.Element => {
  return (
    <MerbersList>
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Invitation />
    </MerbersList>
  );
};

const MerbersList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;

  margin-bottom: 100px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export default Members;
