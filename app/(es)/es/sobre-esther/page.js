import InnerPage from '@/components/InnerPage';
import es from '@/content/es';

export const metadata = {
  title: "Sobre Esther Pujol Wilkie",
  description: "Treinta y cinco a\u00f1os de derecho inmobiliario espa\u00f1ol desde La Marina de Sotogrande.",
  alternates: { canonical: "/es/sobre-esther" },
};

export default function P() {
  return (
    <InnerPage t={es} eyebrow="Sobre Esther" title="Sobre Esther Pujol Wilkie"
      intro="Treinta y cinco a\u00f1os de derecho inmobiliario espa\u00f1ol desde La Marina de Sotogrande." image="esther" />
  );
}
