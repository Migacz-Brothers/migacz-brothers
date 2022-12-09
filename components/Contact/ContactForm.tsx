import { useState } from 'react';
import styled from 'styled-components';
import ContactInput from './ContactInput';
import SubmitButton from './SubmitButton';

const ContactForm = (): JSX.Element => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });

  return (
    <Form>
      <ContactInput
        label='Name'
        value={form.name}
        setValue={(value) => setForm((prev) => ({ ...prev, name: value }))}
      />
      <ContactInput
        label='Email'
        value={form.email}
        setValue={(value) => setForm((prev) => ({ ...prev, email: value }))}
      />
      <ContactInput
        label='Budget'
        type='select'
        options={[
          { name: '', value: '' },
          { name: 'Less then 14', value: '234234' },
          { name: 'Less then 23', value: '234234' },
          { name: 'Less then 4534', value: '345' },
        ]}
        setValue={(value) => setForm((prev) => ({ ...prev, budget: value }))}
        value={form.budget}
      />
      <ContactInput
        label='Message'
        type='text-area'
        value={form.message}
        setValue={(value) => setForm((prev) => ({ ...prev, message: value }))}
      />
      <SubmitButton />
    </Form>
  );
};

const Form = styled.form`
  padding: 62px 72px;
  background-color: var(--background-variant);
  border-radius: var(--rounded);
  width: 488px;
  margin-left: 16px;

  @media (max-width: 700px) {
    margin-left: 0px;
    width: 100%;
  }

  @media (max-width: 400px) {
    padding: 56px 32px;
  }
`;

export default ContactForm;
