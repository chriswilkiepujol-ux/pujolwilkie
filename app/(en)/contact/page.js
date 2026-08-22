import InnerPage from '@/components/InnerPage';
import en from '@/content/en';

export const metadata = {
  title: "Contact",
  description: "Free initial consultation. I reply personally, usually within one working day.",
  alternates: { canonical: "/contact" },
};

export default function P() {
  return (
    <InnerPage t={en} eyebrow="Contact" title="Contact"
      intro="Free initial consultation. I reply personally, usually within one working day." image="polo" />
  );
}
