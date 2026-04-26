import nodemailer from "nodemailer";

export async function POST(request) {
  const { company, contact, email, phone, product, quantity, destination, quality, notes } =
    await request.json();

  if (!company || !contact || !email || !product || !quantity || !destination) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <h2 style="color:#345028">New Quote Request — Edan & Sherr</h2>
    <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px">
      <tr><td style="padding:8px 12px;background:#f3f8ee;font-weight:bold;width:200px">Company</td><td style="padding:8px 12px;border-bottom:1px solid #e4ebe9">${company}</td></tr>
      <tr><td style="padding:8px 12px;background:#f3f8ee;font-weight:bold">Contact Person</td><td style="padding:8px 12px;border-bottom:1px solid #e4ebe9">${contact}</td></tr>
      <tr><td style="padding:8px 12px;background:#f3f8ee;font-weight:bold">Email</td><td style="padding:8px 12px;border-bottom:1px solid #e4ebe9"><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:8px 12px;background:#f3f8ee;font-weight:bold">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #e4ebe9">${phone || "—"}</td></tr>
      <tr><td style="padding:8px 12px;background:#f3f8ee;font-weight:bold">Product</td><td style="padding:8px 12px;border-bottom:1px solid #e4ebe9">${product}</td></tr>
      <tr><td style="padding:8px 12px;background:#f3f8ee;font-weight:bold">Quantity (kg)</td><td style="padding:8px 12px;border-bottom:1px solid #e4ebe9">${quantity}</td></tr>
      <tr><td style="padding:8px 12px;background:#f3f8ee;font-weight:bold">Delivery Address</td><td style="padding:8px 12px;border-bottom:1px solid #e4ebe9">${destination}</td></tr>
      <tr><td style="padding:8px 12px;background:#f3f8ee;font-weight:bold">Quality Requirements</td><td style="padding:8px 12px;border-bottom:1px solid #e4ebe9">${quality || "—"}</td></tr>
      <tr><td style="padding:8px 12px;background:#f3f8ee;font-weight:bold">Additional Notes</td><td style="padding:8px 12px">${notes || "—"}</td></tr>
    </table>
  `;

  await transporter.sendMail({
    from: `"Edan & Sherr Contact" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `Quote Request from ${company}`,
    html,
  });

  return Response.json({ success: true });
}
