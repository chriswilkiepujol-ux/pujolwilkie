import InnerPage from '@/components/InnerPage';
import es from '@/content/es';

export const metadata = {
  title: "Pol\u00edtica de privacidad",
  description: "Tratamiento de datos personales.",
  alternates: { canonical: "/es/politica-de-privacidad" },
};

export default function P() {
  return (
    <InnerPage t={es} eyebrow="Legal" title="Pol\u00edtica de privacidad"
      intro="Tratamiento de datos personales." />
  );
}
