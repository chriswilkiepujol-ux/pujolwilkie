import InnerPage from '@/components/InnerPage';
import es from '@/content/es';

export const metadata = {
  title: "Pol\u00edtica de cookies",
  description: "Cookies utilizadas en este sitio web.",
  alternates: { canonical: "/es/politica-de-cookies" },
};

export default function P() {
  return (
    <InnerPage t={es} eyebrow="Legal" title="Pol\u00edtica de cookies"
      intro="Cookies utilizadas en este sitio web." />
  );
}
