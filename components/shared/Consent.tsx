import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { setCookie, hasCookie } from 'cookies-next';

function Consent() {
  const [consent, setConsent] = useState(false);
  useEffect(() => {
    setConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
  };

  return (
    <AnimatePresence>
      {!consent ? (
        <Modal
          key='cookie_consent_modal'
          initial={{
            x: 600,
          }}
          animate={{
            x: 0,
          }}
          exit={{
            x: 600,
          }}
          data-nosnippet='data-nosnippet'
        >
          We use cookies to improve our website and assist with our marketing
          campaigns. By clicking &quot;Accept Cookies&quot;, you consent to the
          storing of cookies on your device.
          <div className='flex align-middle justify-between'>
            <Button
              onClick={() => {
                acceptCookie();
              }}
              className='p-2 bg-green-400 rounded-md'
            >
              Accept All
            </Button>
          </div>
        </Modal>
      ) : null}
    </AnimatePresence>
  );
}

const Modal = styled(motion.div)`
  position: fixed;
  background-color: #101010;
  border-radius: var(--rounded);
  color: var(--light-primary);
  bottom: 8px;
  right: 8px;
  margin-left: 8px;
  padding: 32px 48px;
  max-width: 500px;
  box-shadow: 0px 4px 9px rgba(255, 255, 255, 0.02);

  display: block;
`;

const Button = styled.button`
  background-color: var(--primary);
  padding: 8px 24px;
  border-radius: var(--rounded);
  display: block;
  margin-left: auto;

  @media (max-width: 500px) {
    margin-top: 12px;
  }
`;

export default Consent;
