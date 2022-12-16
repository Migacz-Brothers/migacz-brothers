import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
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

  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      budget: '',
      message: '',
    });
    setError(false);
    setLoading(false);
    setSuccess(false);
  };

  return (
    <FormWrapper>
      <AnimatePresence mode='wait'>
        {!success ? (
          <Form
            onSubmit={submit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ContactInput
              label='Name'
              value={form.name}
              setValue={(value) =>
                setForm((prev) => ({ ...prev, name: value }))
              }
            />
            <ContactInput
              label='Email'
              value={form.email}
              setValue={(value) =>
                setForm((prev) => ({ ...prev, email: value }))
              }
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
              setValue={(value) =>
                setForm((prev) => ({ ...prev, budget: value }))
              }
              value={form.budget}
            />
            <ContactInput
              label='Message'
              type='text-area'
              value={form.message}
              setValue={(value) =>
                setForm((prev) => ({ ...prev, message: value }))
              }
            />
            <SubmitButton loading={loading} />
            <FeedbackError
              initial={{ opacity: 0 }}
              animate={{
                opacity: error ? 1 : 0,
                transition: { duration: 0.2 },
              }}
            >
              {error}
            </FeedbackError>
          </Form>
        ) : (
          <SuccessWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SuccessMessage>{success}</SuccessMessage>
            <SendAnotherMessageButton onClick={resetForm}>
              Send another message
            </SendAnotherMessageButton>
          </SuccessWrapper>
        )}{' '}
      </AnimatePresence>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 488px;
  margin-left: 16px;
  border-radius: var(--rounded);
  background-color: var(--background-variant);
  padding: 62px 72px 42px 72px;
  height: 514px;

  @media (max-width: 700px) {
    margin-left: 0px;
    width: 100%;
  }

  @media (max-width: 400px) {
    padding: 56px 32px;
    height: 505px;
  }
`;

const Form = styled(motion.form)`
  width: 100%;
`;

const FeedbackError = styled(motion.span)`
  color: tomato;
  height: 20px;
`;

const SuccessWrapper = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SuccessMessage = styled.div`
  color: var(--text-primary);
  text-align: center;
  font-size: 18px;
  max-width: 300px;
  margin: 0 auto;
`;

const SendAnotherMessageButton = styled.button`
  background: var(--primary);
  border-radius: var(--rounded);
  font-size: 16px;
  padding: 10px 32px;
  margin-top: 24px;
`;

export default ContactForm;
