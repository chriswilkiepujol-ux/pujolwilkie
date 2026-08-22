import InnerPage from '@/components/InnerPage';
import en from '@/content/en';

export const metadata = {
  title: "Aviso legal",
  description: "Legal notice and company information.",
  alternates: { canonical: "/aviso-legal" },
};

export default function P() {
  return (
    <InnerPage t={en} eyebrow="Legal" title="Aviso legal"
      intro="Legal notice and company information." />
  );
}
