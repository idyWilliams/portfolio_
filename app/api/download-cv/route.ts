
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import { headers } from 'next/headers';

export async function GET(req: NextRequest) {
  const ip = headers().get('x-forwarded-for') || req.ip;

  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const location = await response.json();

    // In a real application, you would use a transactional email service like Resend or Nodemailer.
    // For this example, we'll just log the information to the console.
    console.log(`CV downloaded from: ${location.city}, ${location.region}, ${location.country_name}`);
    console.log(`Email sent to: widorenyin0@gmail.com`);


    const filePath = path.resolve('.', 'public/cv.pdf');
    const fileBuffer = fs.readFileSync(filePath);

    const headers = new Headers();
    headers.append('Content-Disposition', 'attachment; filename="cv.pdf"');
    headers.append('Content-Type', 'application/pdf');

    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse('Error downloading CV', { status: 500 });
  }
}
