import styled from 'styled-components';
import { motion } from 'framer-motion';

import { InputWrapper, Label } from '.';
import { useState } from 'react';

interface TextAreaProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
}

const TextAreaInput = ({
  label,
  value,
  setValue,
}: TextAreaProps): JSX.Element => {
  const [focused, setFocused] = useState(false);

  const textAreaTriggered = value.length > 0 || focused;

  return (
    <InputWrapper>
      <Label
        initial={{
          x: 0,
          y: 10,
          fontSize: '16px',
          color: 'var(--grey-100)',
        }}
        animate={{
          y: textAreaTriggered ? 1 : 10,
          fontSize: textAreaTriggered ? '12px' : '16px',
          color: textAreaTriggered ? 'var(--primary)' : 'var(--grey-100)',
        }}
      >
        {label}
      </Label>
      <CustomTextArea
        rows={5}
        $textAreaTriggered={textAreaTriggered}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        initial={{
          borderColor: 'var(--background-secondary)',
        }}
        animate={{
          borderColor: textAreaTriggered
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

interface CustomTextAreaProps {
  $textAreaTriggered: boolean;
}

export const CustomTextArea = styled(motion.textarea)<CustomTextAreaProps>`
  border: 1px solid
    ${(props) =>
      props.$textAreaTriggered
        ? 'var(--background-secondary)'
        : 'var(--primary)'};
  width: 100%;
  padding: 17px 12px 4px 12px;
  background-color: var(--background-primary);
  border-radius: var(--rounded);
  color: var(--light);
  font-size: 16px;
  color: var(--text-secondary);
`;

export default TextAreaInput;
