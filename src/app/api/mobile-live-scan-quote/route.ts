import { COMPANY } from '@/config/company';
import { SITE_URL } from '@/lib/config';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const GROUP_SIZES = new Set([
  '5–10 participants',
  '11–25 participants',
  '26–50 participants',
  '51–100 participants',
  '101–250 participants',
  '251–500 participants',
]);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string'
    ? value.trim().replace(/\r/g, '').slice(0, maxLength)
    : '';
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      })[character] || character
  );
}

export async function POST(request: NextRequest) {
  const requestOrigin = request.headers.get('origin');
  const serverOrigin = request.nextUrl.origin;

  if (
    requestOrigin &&
    requestOrigin !== serverOrigin &&
    requestOrigin !== SITE_URL
  ) {
    return NextResponse.json(
      { error: 'Invalid request origin.' },
      { status: 403 }
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Hidden field: bots commonly fill it, while real visitors never see it.
  if (clean(payload.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const organization = clean(payload.organization, 120);
  const contactName = clean(payload.contactName, 100);
  const email = clean(payload.email, 160).toLowerCase();
  const phone = clean(payload.phone, 40);
  const location = clean(payload.location, 100);
  const groupSize = clean(payload.groupSize, 40);
  const preferredDate = clean(payload.preferredDate, 20);
  const details = clean(payload.details, 1500);

  if (
    !organization ||
    !contactName ||
    !EMAIL_PATTERN.test(email) ||
    !location ||
    !GROUP_SIZES.has(groupSize)
  ) {
    return NextResponse.json(
      { error: 'Please complete all required fields.' },
      { status: 400 }
    );
  }

  const smtpHost = process.env.ZOHO_SMTP_HOST || 'smtppro.zoho.com';
  const smtpPort = Number(process.env.ZOHO_SMTP_PORT || '465');
  const smtpUser = process.env.ZOHO_SMTP_USER;
  const smtpPassword = process.env.ZOHO_SMTP_PASSWORD;
  const quoteRecipient = process.env.MOBILE_QUOTE_TO_EMAIL || COMPANY.email;

  if (!smtpUser || !smtpPassword) {
    console.error('Mobile quote email is missing Zoho SMTP configuration.');
    return NextResponse.json(
      {
        error:
          'Online requests are temporarily unavailable. Please call or email us.',
      },
      { status: 503 }
    );
  }

  const lines = [
    `Organization: ${organization}`,
    `Contact name: ${contactName}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Service city or ZIP: ${location}`,
    `Estimated group size: ${groupSize}`,
    `Preferred date: ${preferredDate || 'Flexible / not specified'}`,
    '',
    'Additional details:',
    details || 'None provided',
  ];

  const tableRows = [
    ['Organization', organization],
    ['Contact name', contactName],
    ['Email', email],
    ['Phone', phone || 'Not provided'],
    ['Service city or ZIP', location],
    ['Estimated group size', groupSize],
    ['Preferred date', preferredDate || 'Flexible / not specified'],
  ]
    .map(
      ([label, value]) =>
        `<tr><th style="padding:8px;text-align:left;vertical-align:top;border-bottom:1px solid #e5e7eb">${escapeHtml(label)}</th><td style="padding:8px;border-bottom:1px solid #e5e7eb">${escapeHtml(value)}</td></tr>`
    )
    .join('');

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPassword },
    });

    await transporter.sendMail({
      from: `"Mail All Center Website" <${smtpUser}>`,
      to: quoteRecipient,
      replyTo: `"${contactName.replace(/["<>]/g, '')}" <${email}>`,
      subject: `Mobile Live Scan Quote — ${organization}`,
      text: `New mobile Live Scan quote request\n\n${lines.join('\n')}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5">
          <h1 style="font-size:22px">New Mobile Live Scan Quote Request</h1>
          <table style="width:100%;max-width:640px;border-collapse:collapse">${tableRows}</table>
          <h2 style="margin-top:24px;font-size:17px">Additional details</h2>
          <p style="white-space:pre-wrap">${escapeHtml(details || 'None provided')}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Unable to send mobile Live Scan quote email:', error);
    return NextResponse.json(
      {
        error:
          'We could not send your request. Please call or use the email option.',
      },
      { status: 502 }
    );
  }
}
