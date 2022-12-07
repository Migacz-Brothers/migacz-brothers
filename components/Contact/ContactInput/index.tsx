import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
    <TextAreaInput
      label={label}
      type={type}
      value={value}
      setValue={setValue}
    />
  ) : (
    <Input label={label} type={type} value={value} setValue={setValue} />
  );
};

const Input = ({ label, type, value, setValue }: ContactInput): JSX.Element => {
  const [focused, setFocused] = useState(false);

  const inputTriggered = value.length > 0 || focused;

  return (
    <InputWrapper>
      <Label
        initial={{
          x: 0,
          y: 1,
          fontSize: '16px',
          color: 'var(--light)',
        }}
        animate={{
          y: inputTriggered ? 1 : 10,
          fontSize: inputTriggered ? '12px' : '16px',
          color: inputTriggered ? 'var(--primary)' : 'var(--grey-100)',
        }}
      >
        {label}
      </Label>
      <CustomInput
        inputTriggered={inputTriggered}
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        animate={{
          borderColor: inputTriggered
            ? 'var(--primary)'
            : 'var(--background-secondary)',
        }}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 24px;
`;

const Label = styled(motion.label)`
  display: inline-block;
  height: 0px;
  z-index: 2;
  margin-left: 12px;
  pointer-events: none;
`;

interface CustomInputProps {
  inputTriggered: boolean;
}

const CustomInput = styled(motion.input)<CustomInputProps>`
  border: 1px solid
    ${(props) =>
      props.inputTriggered ? 'var(--background-secondary)' : 'var(--primary)'};
  width: 100%;
  padding: 17px 12px 4px 12px;
  background-color: var(--background-secondary);
  border-radius: var(--rounded);
  color: var(--light);
  font-size: 16px;
`;

const TextAreaInput = ({ label, type }: ContactInput): JSX.Element => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} />
    </div>
  );
};

export default ContactInput;
