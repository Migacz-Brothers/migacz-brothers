interface SelectProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  options?: {
    value: string;
    name: string;
  }[];
}

const Select = ({
  setValue,
  value,
  label,
  options,
}: SelectProps): JSX.Element => {
  return (
    <select name={label} id=''>
      {options?.map((option) => (
        <option value={option.value} key={`option_${option.value}`}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
