import { useState } from 'react';
import styled from 'styled-components';
import ContactInput from './ContactInput';

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
    </Form>
  );
};

const Form = styled.form`
  padding: 62px 72px;
  background-color: var(--background);
  border-radius: var(--rounded);
  width: 488px;
`;

export default ContactForm;
