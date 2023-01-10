import styled from 'styled-components';
import { Invitation, Member } from '.';
import Gustavo from '../../../public/members/gustavo.jpeg';
import Pedro from '../../../public/members/pedro.jpg';
import Iago from '../../../public/members/iago.jpeg';
import Arthur from '../../../public/members/arthur.jpg';
import Brenno from '../../../public/members/brenno.jpg';

const Members = (): JSX.Element => {
  return (
    <MerbersList>
      <Member
        name='Pedro H. G. Migacz'
        position='Co-Founder'
        description='Web developer with 5+ years of experience in web development, Pedro has a deep understanding of creating systems from responsive websites to complex backend systems.'
        picture={Pedro}
      />
      <Member
        name='Iago M. Pzivitovski'
        position='Engineer'
        description='Iago is a great frontend developer, and a big part of our team. He has extensive experience in the industry and a passion for problem solving.'
        picture={Iago}
      />
      <Member
        name='Arthur F. Valério'
        position='Marketing Director'
        description='With knowledge both in marketing and development, he brings a wealth of experience to the organization. He is passionate about creating innovative and successful campaigns that will help drive growth.'
        picture={Arthur}
      />
      <Member
        name='Gustavo G. Migacz'
        position='Junior Engineer'
        description='Meet Gustavo, our talented junior frontend developer. He has a passion for creating user-friendly and visually appealing interfaces.'
        picture={Gustavo}
      />
      {/* <Member
        name='Francisco B. S. Rufino'
        position='Junior Engineer'
        description='Meet Brenno, he has been working closely with our senior developers to learn the ropes and has already made significant contributions to several of our ongoing projects.'
        picture={Brenno}
      /> */}
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
