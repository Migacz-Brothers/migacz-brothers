import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { InputWrapper, Label } from '.';

interface InputProps {
  label: string;
  type: string;
  value: string;
  setValue: (value: string) => void;
}

const Input = ({ label, type, value, setValue }: InputProps): JSX.Element => {
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

interface CustomInputProps {
  inputTriggered: boolean;
}

export const CustomInput = styled(motion.input)<CustomInputProps>`
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

export default Input;
