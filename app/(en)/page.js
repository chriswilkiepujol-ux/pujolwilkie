import Page from '@/components/Page';
import en from '@/content/en';
import { legalServiceSchema, faqSchema } from '@/lib/schema';

export default function Home() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema(en)) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(en)) }} />
      <Page t={en} />
    </>
  );
}
