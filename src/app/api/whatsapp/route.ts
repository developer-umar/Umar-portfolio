import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const res = await fetch(
      `https://graph.facebook.com/v17.0/${process.env.WHATSAPP_PHONE_ID}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: process.env.MY_WHATSAPP_NUMBER,
          type: 'text',
          text: {
            body: `📩 New Message from Portfolio Form:\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`,
          },
        }),
      }
    );

    const result = await res.json();
    console.log(result);

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
