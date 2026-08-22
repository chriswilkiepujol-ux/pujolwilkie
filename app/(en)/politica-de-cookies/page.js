import InnerPage from '@/components/InnerPage';
import en from '@/content/en';

export const metadata = {
  title: "Pol\u00edtica de cookies",
  description: "Cookies used on this website.",
  alternates: { canonical: "/politica-de-cookies" },
};

export default function P() {
  return (
    <InnerPage t={en} eyebrow="Legal" title="Pol\u00edtica de cookies"
      intro="Cookies used on this website." />
  );
}
