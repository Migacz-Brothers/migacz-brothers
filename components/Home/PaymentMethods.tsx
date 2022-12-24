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
          <PaymentMethodsListInnerContainer>
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
          </PaymentMethodsListInnerContainer>
        </PaymentMethodsListContainer>
      </PaymentMethodsSection>
    </PaymentMethodsSectionWrapper>
  );
};

const PaymentMethodsSectionWrapper = styled(GenericSectionWrapper)`
  padding-top: 80px;
  display: inline-block;
  background-color: var(--background-secondary);
`;

const PaymentMethodsSection = styled(GenericSection)`
  background-color: var(--background-primary);
  padding: 44px 0 100px 0;
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

const PaymentMethodsListInnerContainer = styled.div`
  max-width: 1216px;
  padding: 0 16px;
  margin: 0 auto;
`;

const PaymentMethodsList = styled.ul`
  display: flex;
  justify-content: space-evenly;

  background-color: var(--background-variant);
  border-radius: var(--rounded);

  padding: 100px 0;

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
