import InnerPage from '@/components/InnerPage';
import en from '@/content/en';

export const metadata = {
  title: "Pol\u00edtica de privacidad",
  description: "How personal data is handled.",
  alternates: { canonical: "/politica-de-privacidad" },
};

export default function P() {
  return (
    <InnerPage t={en} eyebrow="Legal" title="Pol\u00edtica de privacidad"
      intro="How personal data is handled." />
  );
}
