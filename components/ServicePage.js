import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';
import ContactForm from './ContactForm';
import { Footer, MobileCta, Trust } from './Sections';

export default function ServicePage({ t, page, jsonLd = [] }) {
  // Service pages point readers to the articles on the same topic, so the
  // articles are linked from the body of the site and not only from the menu.
  const postBase = t.locale === 'es' ? '/es/articulos/' : '/blog/';
  const posts = (page.relatedPosts ? t.insights.items : [])
    .filter((p) => page.relatedPosts.includes(p.slug))
    .map((p) => ({ href: `${postBase}${p.slug}/`, label: p.title }));
  const related = [...posts, ...(page.related || [])];
  return (
    <>
      {jsonLd.map((o, i) => (
        <script key={i} type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />
      ))}
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
        <div className="wrap">
          {page.portrait ? (
            <figure className="iportrait">
              <Image src={`/images/${page.image}.jpg`} alt={page.imageAlt || page.title}
                width={520} height={600} priority sizes="(max-width:600px) 60vw, 300px" />
              {page.imageCaption && <figcaption>{page.imageCaption}</figcaption>}
            </figure>
          ) : (
            <div className="iband">
              <Image src={`/images/${page.image}.jpg`} alt={page.imageAlt || page.title}
                width={1300} height={498} priority sizes="100vw" />
            </div>
          )}
        </div>
      )}

      <section><div className="wrap">
        <div className="prose">
          {page.sections.map((s) => (
            <div className="pblock" key={s.h2}>
              <h2>{s.h2}</h2>
              {s.p && s.p.map((para, i) => <p key={i}>{para}</p>)}
              {s.list && (
                <ul className="plist">
                  {s.list.map((li) => (
                    <li key={li} className={li.includes('[pendiente]') ? 'pending' : undefined}>{li}</li>
                  ))}
                </ul>
              )}
              {s.table && (
                <div className="ptable"><table>
                  <thead><tr>{s.table.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
                  <tbody>{s.table.rows.map((r) => (
                    <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>
                  ))}</tbody>
                </table></div>
              )}
              {s.after && s.after.map((para, i) => <p key={'a' + i}>{para}</p>)}
            </div>
          ))}

          {page.faq && (
            <div className="pfaq">
              <h2>{t.locale === 'es' ? 'Preguntas frecuentes' : 'Common questions'}</h2>
              <div className="faq">
                {page.faq.map((f) => (
                  <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
                ))}
              </div>
            </div>
          )}

          {related && related.length > 0 && (
            <div className="related">
              <h3>{t.locale === 'es' ? 'También le puede interesar' : 'Related'}</h3>
              <ul>{related.map((r) => (
                <li key={r.href}><Link href={r.href}>{r.label} →</Link></li>
              ))}</ul>
            </div>
          )}

          <p className="disclaim">
            {t.locale === 'es'
              ? 'Esta página ofrece información general sobre el derecho español y no constituye asesoramiento jurídico. Cada caso es distinto y debe estudiarse de forma individual.'
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
