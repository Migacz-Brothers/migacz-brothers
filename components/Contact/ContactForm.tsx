import axios from 'axios';
import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
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

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<false | string>(false);
  const [success, setSuccess] = useState<false | string>(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setError('');

    if (form.name === '') {
      return setError('Name is a required field');
    }
    if (form.email === '') {
      return setError('Email is a required field');
    }
    if (
      !form.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      )
    ) {
      return setError('This is not a valid email address');
    }
    if (form.message === '') {
      return setError('Message is a required field');
    }

    setLoading(true);
    try {
      await axios({
        method: 'POST',
        url: '/api/contact',
        data: form,
      });

      setSuccess(
        'Your message was sent successfully, and we will be in touch as soon as possible.'
      );
    } catch (err) {
      setError(
        "There is something wrong on our systems. Please contact us via 'hello@migaczbrothers.com'"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={submit}>
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
          { name: 'Less then $3,000', value: 'Less then $3000' },
          { name: '$3,000 - $5,000', value: '$3000 - $5000' },
          { name: '$5,000 - $10,000', value: '$5,000 - $10,000' },
          { name: '$10,000 - $15,000', value: '$10,000 - $15,000' },
          { name: 'More then $15,000', value: 'More then $15,000' },
          { name: 'Too be defined', value: 'Too be defined' },
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
      <SubmitButton loading={loading} />
      <FeedbackError>{error}</FeedbackError>
    </Form>
  );
};

const Form = styled.form`
  padding: 62px 72px 42px 72px;
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

const FeedbackError = styled(motion.span)`
  color: tomato;
  height: 20px;
`;

export default ContactForm;
