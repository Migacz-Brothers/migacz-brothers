import styled from 'styled-components';
import Image from 'next/image';

import Gustavo from '../../../public/members/gustavo.jpeg';

const MemberComponent = (): JSX.Element => {
  return (
    <Member>
      <Image src={Gustavo} alt='Picture of member Gustavo' />
    </Member>
  );
};

const Member = styled.li`
  aspect-ratio: 1/1;
  border-radius: var(--rounded);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default MemberComponent;
