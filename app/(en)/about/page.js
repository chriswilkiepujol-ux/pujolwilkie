import InnerPage from '@/components/InnerPage';
import en from '@/content/en';

export const metadata = {
  title: "About Esther Pujol Wilkie",
  description: "Thirty five years of Spanish property law from an office in La Marina de Sotogrande.",
  alternates: { canonical: "/about" },
};

export default function P() {
  return (
    <InnerPage t={en} eyebrow="About" title="About Esther Pujol Wilkie"
      intro="Thirty five years of Spanish property law from an office in La Marina de Sotogrande." image="esther" />
  );
}
