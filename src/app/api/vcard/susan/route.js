export async function GET() {
  const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Essien;Susan;;Ms.;
FN:Susan Essien
TITLE:C.E.O.
ORG:Edan & Sherr Limited
TEL;TYPE=WORK,VOICE:+2348065321577
EMAIL;TYPE=WORK:susan.essien@edanandsherr.com
URL:https://www.edanandsherr.com
ADR;TYPE=WORK:;;No. 3 Okemisi Crescent\\, Off Oro Ago Street;Garki II\\, Abuja;;;Nigeria
END:VCARD`;

  return new Response(vcardData, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Susan_Essien.vcf"',
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}
