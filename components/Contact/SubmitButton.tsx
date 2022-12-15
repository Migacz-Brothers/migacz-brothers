import styled from 'styled-components';

interface SubmitButtonProps {
  loading: boolean;
}

const SubmitButton = ({ loading }: SubmitButtonProps): JSX.Element => {
  return <Button loading={loading}>{loading ? 'Loading' : 'Send'}</Button>;
};

const Button = styled.button<SubmitButtonProps>`
  border: none;
  border-radius: var(--rounded);
  width: 100%;
  background-color: ${(props) =>
    props.loading ? 'var(--grey-100)' : 'var(--primary)'};
  color: ${(props) =>
    props.loading ? 'var(--grey-200)' : 'var(--light-primary)'};
  padding: 13.5px 4px;
`;

export default SubmitButton;
