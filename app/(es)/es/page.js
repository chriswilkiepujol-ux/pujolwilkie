import Page from '@/components/Page';
import es from '@/content/es';
import { legalServiceSchema, faqSchema } from '@/lib/schema';

export default function Inicio() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema(es)) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(es)) }} />
      <Page t={es} />
    </>
  );
}
