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
`;

export default Members;
