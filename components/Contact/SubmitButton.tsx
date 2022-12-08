import styled from 'styled-components';

const SubmitButton = (): JSX.Element => {
  return <Button>Send</Button>;
};

const Button = styled.button`
  border: none;
  border-radius: var(--rounded);
  width: 100%;
  background-color: var(--primary);
  padding: 13.5px 4px;
`;

export default SubmitButton;
