import Image from 'next/image';
import Header from './Header';
import ContactForm from './ContactForm';
import { Footer, MobileCta, Trust } from './Sections';

// Shell for pages that are not service/content pages: about, contact,
// blog index, blog posts and the legal notices.
export default function InnerPage({ t, title, eyebrow, intro, image, children }) {
  return (
    <>
      <Header t={t} />
      <div className="ihero">
        <div className="wrap">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {intro && <p className="hsub">{intro}</p>}
        </div>
      </div>
      <Trust t={t} />
      {image && (
        <div className="wrap"><div className="iband">
          <Image src={`/images/${image}.jpg`} alt="" width={1300} height={498} priority sizes="100vw" />
        </div></div>
      )}
      <section><div className="wrap prose">{children}</div></section>
      <ContactForm t={t} />
      <Footer t={t} />
      <MobileCta t={t} />
    </>
  );
}
