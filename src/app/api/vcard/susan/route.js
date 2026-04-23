import { siteConfig } from '@/config/site';

export async function GET() {
  const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Essien;Susan;;Ms.;
FN:Susan Essien
TITLE:C.E.O.
ORG:${siteConfig.companyName}
TEL;TYPE=WORK,VOICE:${siteConfig.contact.phoneE164}
EMAIL;TYPE=WORK:${siteConfig.contact.salesEmail}
URL:${siteConfig.siteUrl}
ADR;TYPE=WORK:;;${siteConfig.address.streetLine1}\\, ${siteConfig.address.streetLine2};${siteConfig.address.city};;;${siteConfig.address.country}
END:VCARD`;

  return new Response(vcardData, {
    status: 200,
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="Susan_Essien.vcf"',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  });
}
