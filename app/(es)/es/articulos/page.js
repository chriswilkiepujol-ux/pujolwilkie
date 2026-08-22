import InnerPage from '@/components/InnerPage';
import es from '@/content/es';

export const metadata = {
  title: "Art\u00edculos",
  description: "Apuntes sobre derecho inmobiliario, fiscalidad y residencia en Espa\u00f1a.",
  alternates: { canonical: "/es/articulos" },
};

export default function P() {
  return (
    <InnerPage t={es} eyebrow="Art\u00edculos" title="Art\u00edculos"
      intro="Apuntes sobre derecho inmobiliario, fiscalidad y residencia en Espa\u00f1a." image="hero" />
  );
}
