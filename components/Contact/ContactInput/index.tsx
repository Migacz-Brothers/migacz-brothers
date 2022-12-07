import styled from 'styled-components';
import { motion } from 'framer-motion';
import Input from './Input';
import TextAreaInput from './TextArea';

interface ContactInput {
  label: string;
  type?: 'text' | 'text-area' | 'select';
  value: string;
  setValue: (value: string) => void;
}

const ContactInput = ({
  label,
  type = 'text',
  value,
  setValue,
}: ContactInput): JSX.Element => {
  return type === 'text-area' ? (
    <TextAreaInput label={label} value={value} setValue={setValue} />
  ) : (
    <Input label={label} type={type} value={value} setValue={setValue} />
  );
};

// styled components

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 24px;
`;

export const Label = styled(motion.label)`
  display: inline-block;
  height: 0px;
  z-index: 2;
  margin-left: 12px;
  pointer-events: none;
`;

export default ContactInput;
