import InnerPage from '@/components/InnerPage';
import es from '@/content/es';

export const metadata = {
  title: "Aviso legal",
  description: "Aviso legal e informaci\u00f3n de la firma.",
  alternates: { canonical: "/es/aviso-legal" },
};

export default function P() {
  return (
    <InnerPage t={es} eyebrow="Legal" title="Aviso legal"
      intro="Aviso legal e informaci\u00f3n de la firma." />
  );
}
