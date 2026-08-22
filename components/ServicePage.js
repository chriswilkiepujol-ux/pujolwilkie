import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';
import ContactForm from './ContactForm';
import { Footer, MobileCta, Trust } from './Sections';

export default function ServicePage({ t, page }) {
  return (
    <>
      <Header t={t} />
      <div className="ihero">
        <div className="wrap">
          <span className="eyebrow">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p className="hsub">{page.intro}</p>
        </div>
      </div>
      <Trust t={t} />

      {page.image && (
        <div className="wrap"><div className="iband">
          <Image src={`/images/${page.image}.jpg`} alt="" width={1300} height={498} priority sizes="100vw" />
        </div></div>
      )}

      <section><div className="wrap">
        <div className="prose">
          {page.sections.map((s) => (
            <div className="pblock" key={s.h2}>
              <h2>{s.h2}</h2>
              {s.p && s.p.map((para, i) => <p key={i}>{para}</p>)}
              {s.list && <ul className="plist">{s.list.map((li) => <li key={li}>{li}</li>)}</ul>}
            </div>
          ))}

          {page.related && (
            <div className="related">
              <h3>{t.locale === 'es' ? 'También le puede interesar' : 'Related'}</h3>
              <ul>{page.related.map((r) => (
                <li key={r.href}><Link href={r.href}>{r.label} →</Link></li>
              ))}</ul>
            </div>
          )}

          <p className="disclaim">
            {t.locale === 'es'
              ? 'Esta página ofrece información general sobre el derecho español y no constituye asesoramiento jurídico. Cada caso debe valorarse individualmente.'
              : 'This page gives general information about Spanish law and is not legal advice. Every case turns on its own facts and should be assessed individually.'}
          </p>
        </div>
      </div></section>

      <ContactForm t={t} />
      <Footer t={t} />
      <MobileCta t={t} />
    </>
  );
}
