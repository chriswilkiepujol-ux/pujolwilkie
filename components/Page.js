import Header from './Header';
import ContactForm from './ContactForm';
import { Hero, Trust, Intro, Services, Checks, Reviews, About, Faq, Insights, Footer, MobileCta } from './Sections';

export default function Page({ t }) {
  return (
    <>
      <Header t={t} />
      <Hero t={t} />
      <Trust t={t} />
      <Intro t={t} />
      <Services t={t} />
      <Checks t={t} />
      <Reviews t={t} />
      <About t={t} />
      <Faq t={t} />
      <Insights t={t} />
      <ContactForm t={t} />
      <Footer t={t} />
      <MobileCta t={t} />
    </>
  );
}
