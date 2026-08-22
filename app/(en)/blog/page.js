import InnerPage from '@/components/InnerPage';
import en from '@/content/en';

export const metadata = {
  title: "Insights",
  description: "Notes on Spanish property law, tax and residency for foreign owners.",
  alternates: { canonical: "/blog" },
};

export default function P() {
  return (
    <InnerPage t={en} eyebrow="Insights" title="Insights"
      intro="Notes on Spanish property law, tax and residency for foreign owners." image="hero" />
  );
}
