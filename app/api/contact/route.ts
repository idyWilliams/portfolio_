
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  // In a real application, you would use a transactional email service like Resend or Nodemailer.
  // For this example, we'll just log the information to the console.
  console.log(`New contact form submission:`);
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
  console.log(`Email sent to: widorenyin0@gmail.com`);

  return new NextResponse('Message sent successfully', { status: 200 });
}
