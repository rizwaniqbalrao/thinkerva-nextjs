import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL || 'contact@thinkerva.com';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    // Basic validation
    if (!name || !email || !service || !message) {
      return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Thinkerva.com <noreply@thinkerva.com>',
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Consulting Enquiry — Thinkerva.com`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8faff; padding: 0; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #0d9488 100%); padding: 32px 40px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em;">Thinkerva.com</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 13px;">New Consulting Enquiry</p>
          </div>
          <div style="padding: 36px 40px; background: white;">
            <h2 style="color: #0b1628; font-size: 18px; margin: 0 0 24px; font-weight: 700;">You have a new enquiry from ${name}</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f4ff; font-size: 13px; color: #6b7280; width: 140px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f4ff; font-size: 14px; color: #0b1628; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f4ff; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f4ff; font-size: 14px; color: #1e40af;"><a href="mailto:${email}" style="color: #1e40af; text-decoration: none;">${email}</a></td>
              </tr>
              ${company ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f4ff; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Organisation</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f4ff; font-size: 14px; color: #0b1628;">${company}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f4ff; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Consulting Area</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f4ff; font-size: 14px; color: #0b1628;">${service}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; background: #f8faff; border-left: 3px solid #0d9488; padding: 20px 24px; border-radius: 0 8px 8px 0;">
              <p style="margin: 0 0 8px; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Message / Brief</p>
              <p style="margin: 0; font-size: 14px; color: #374151; line-height: 1.7;">${message.replace(/\n/g, '<br />')}</p>
            </div>

            <div style="margin-top: 32px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #1e40af 0%, #0d9488 100%); color: white; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-size: 14px; font-weight: 700;">Reply to ${name}</a>
            </div>
          </div>
          <div style="background: #f8faff; padding: 20px 40px; text-align: center; border-top: 1px solid #e8efff;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">Thinkerva.com · Led by Dr. Naveed Iqbal · contact@thinkerva.com</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ message: 'Failed to send email. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ message: 'Server error. Please email contact@thinkerva.com directly.' }, { status: 500 });
  }
}
