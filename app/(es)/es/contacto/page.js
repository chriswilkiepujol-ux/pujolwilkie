import InnerPage from '@/components/InnerPage';
import es from '@/content/es';

export const metadata = {
  title: "Contacto",
  description: "Primera consulta gratuita. Respondo personalmente, normalmente en un d\u00eda laborable.",
  alternates: { canonical: "/es/contacto" },
};

export default function P() {
  return (
    <InnerPage t={es} eyebrow="Contacto" title="Contacto"
      intro="Primera consulta gratuita. Respondo personalmente, normalmente en un d\u00eda laborable." image="polo" />
  );
}
