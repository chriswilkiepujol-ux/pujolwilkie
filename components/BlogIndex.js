import Link from 'next/link';
import Header from './Header';
import ContactForm from './ContactForm';
import { Footer, MobileCta, Trust } from './Sections';

export default function BlogIndex({ t }) {
  const base = t.locale === 'es' ? '/es/articulos' : '/blog';
  return (
    <>
      <Header t={t} />
      <div className="ihero"><div className="wrap">
        <span className="eyebrow">{t.insights.eyebrow}</span>
        <h1>{t.insights.h2}</h1>
        <p className="hsub">
          {t.locale === 'es'
            ? 'Cambios legales, plazos fiscales y las trampas habituales para propietarios extranjeros.'
            : 'Changes in the law, tax deadlines, and the traps that catch foreign owners out.'}
        </p>
      </div></div>
      <Trust t={t} />
      <section><div className="wrap">
        <div className="posts">
          {t.insights.items.map((p) => (
            <Link className="post" href={`${base}/${p.slug}/`} key={p.slug}>
              <span className="dt">{p.cat}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Link>
          ))}
        </div>
      </div></section>
      <ContactForm t={t} />
      <Footer t={t} />
      <MobileCta t={t} />
    </>
  );
}
