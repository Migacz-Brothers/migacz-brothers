import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface MemberComponentProps {
  name: string;
  position: string;
  description: string;
  picture: StaticImageData;
}

const MemberComponent = ({
  name,
  position,
  description,
  picture,
}: MemberComponentProps): JSX.Element => {
  const [active, setActive] = useState(false);

  const toggleActive = () => setActive((prev) => !prev);

  return (
    <Member>
      <MemberButton onClick={toggleActive}>
        <Image
          src={picture}
          alt={`Picture of member ${name}`}
          placeholder='blur'
        />
        <AnimatePresence>
          {active ? (
            <DataContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <CardTitle>{name}</CardTitle>
              <CardSubheader>{position}</CardSubheader>
              <CardDescription>{description}</CardDescription>
            </DataContainer>
          ) : null}
        </AnimatePresence>
      </MemberButton>
    </Member>
  );
};

const Member = styled.li`
  aspect-ratio: 1/1;
  border-radius: var(--rounded);
  overflow: hidden;
`;

const MemberButton = styled.button`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    scale: 1.01;
  }
`;

const DataContainer = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  padding: 0 70px;
  color: var(--light-primary);
  letter-spacing: -0.01em;

  background-color: rgba(0, 0, 0, 0.75);

  @media (max-width: 1150px) {
    padding: 0 35px;
  }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 9px;
  text-align: left;
`;

const CardSubheader = styled.h4`
  font-size: 16px;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 9px;
  letter-spacing: 10px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  text-align: justify;
  line-height: 140%;
`;

export default MemberComponent;
