import { useState } from 'react';
import styled from 'styled-components';
import { InputWrapper, Label } from '.';

interface SelectProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  options?: {
    value: string;
    name: string;
  }[];
}

const SelectComponent = ({
  setValue,
  value,
  label,
  options,
}: SelectProps): JSX.Element => {
  const selectTriggered = value.length > 0;

  return (
    <>
      {selectTriggered}
      <InputWrapper>
        <Label
          initial={{
            x: 0,
            y: 10,
            fontSize: '16px',
            color: 'var(--grey-100)',
          }}
          animate={{
            y: selectTriggered ? 1 : 10,
            fontSize: selectTriggered ? '12px' : '16px',
            color: selectTriggered ? 'var(--primary)' : 'var(--grey-100)',
          }}
        >
          {label}
        </Label>
        <Select
          name={label}
          id=''
          selectTriggered={selectTriggered}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          {options?.map((option) => (
            <option value={option.value} key={`option_${option.value}`}>
              {option.name}
            </option>
          ))}
        </Select>
      </InputWrapper>
    </>
  );
};

interface CustomSelectProps {
  selectTriggered: boolean;
}

const Select = styled.select<CustomSelectProps>`
  border: 1px solid
    ${(props) =>
      props.selectTriggered ? 'var(--primary)' : 'var(--background-secondary)'};
  width: 100%;
  padding: 19px 12px 6px 12px;
  border-radius: var(--rounded);
  background-color: var(--background-primary);
  color: var(--text-secondary);
`;

export default SelectComponent;
