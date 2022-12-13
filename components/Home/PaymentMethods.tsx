import styled from 'styled-components';
import {
  GenericSectionWrapper,
  GenericSection,
} from '../shared/sharedComponents';

import CreditCardIcon from '../Icons/paymentMethods/creditCard';
import CryptoIcon from '../Icons/paymentMethods/crypto';
import WireTranferIcon from '../Icons/paymentMethods/wireTransfer';

const PaymentMethods = (): JSX.Element => {
  return (
    <PaymentMethodsSectionWrapper>
      <PaymentMethodsSection>
        <Title>Payment methods</Title>
        <PaymentMethodsListContainer>
          <PaymentMethodsList>
            <ListItem>
              <WireTranferIcon />
              Wire transfer
            </ListItem>
            <ListItem>
              <CreditCardIcon />
              Credit card
            </ListItem>
            <ListItem>
              <CryptoIcon />
              Crypto
            </ListItem>
          </PaymentMethodsList>
        </PaymentMethodsListContainer>
      </PaymentMethodsSection>
    </PaymentMethodsSectionWrapper>
  );
};

const PaymentMethodsSectionWrapper = styled(GenericSectionWrapper)`
  background-color: var(--background-secondary);
  display: inline-block;
`;

const PaymentMethodsSection = styled(GenericSection)`
  margin: 80px 0 180px 0;
  padding: 0;
  max-width: unset;

  color: var(--text-primary);
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 40px;
  text-align: center;

  padding: 0 16px;
  margin-bottom: 44px;
`;

const PaymentMethodsListContainer = styled.div`
  width: 100%;
  background-color: var(--background-primary);
`;

const PaymentMethodsList = styled.ul`
  display: flex;
  justify-content: space-evenly;

  margin: 0 auto;
  max-width: 1216px;
  padding: 100px 16px;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

const ListItem = styled.li`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  letter-spacing: 0.12em;
  text-transform: uppercase;

  svg {
    margin-right: 32px;
  }

  @media (max-width: 980px) {
    flex-direction: column;

    svg {
      margin-right: 0px;
      margin-bottom: 22px;
    }
    margin-bottom: 66px;
  }
`;

export default PaymentMethods;
