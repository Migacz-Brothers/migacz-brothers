import { NextApiRequest, NextApiResponse } from 'next/types';
import sendGrid from '@sendgrid/mail';

type Data = {
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, budget, message } = req.body;

  sendGrid.setApiKey(process.env.SENDGRID_API_KEY as string);
  const msg = {
    to: 'hello@migaczbrothers.com',
    from: 'contact_form@migaczbrothers.com',
    subject: 'Contact',
    text: `
    name: ${name}
    email: ${email}
    budget: ${budget}
    message:
    ${message}
    `,
  };
  try {
    await sendGrid.send(msg);

    res.status(200).json({ success: true });
  } catch (_err) {
    res.status(500).json({ success: false });
  }
}
