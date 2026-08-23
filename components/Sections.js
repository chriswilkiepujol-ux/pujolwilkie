import Image from 'next/image';
import Link from 'next/link';
import { Icon, GoogleG, Stars } from './Icons';
import Logo from './Logo';
import site from '@/lib/site';

const img = (n) => `/images/${n}.jpg`;

export function Hero({ t }) {
  return (
    <div className="hero">
      <Image src={img('hero')} alt="La Marina de Sotogrande, Cádiz" fill priority sizes="100vw"
        style={{ objectFit: 'cover' }} />
      <div className="wrap hin">
        <span className="eyebrow">{t.hero.eyebrow}</span>
        <h1>{t.hero.h1}</h1>
        <p className="hsub">{t.hero.sub}</p>
        <p className="hlede">{t.hero.lede}</p>
        <p className="strap">{t.hero.strap}</p>
        <div className="hcta">
          <a className="btn" href="#contact">{t.cta.consult}</a>
          <a className="btn gh" href="#checks">{t.hero.secondary}</a>
        </div>
        <a className="gbadge" href={site.gbpUrl} target="_blank" rel="noopener">
          <GoogleG />
          <div>
            <div className="gt"><b>{site.ratingValue}</b> <Stars /></div>
            <div className="gs">{t.hero.reviews}</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export function Trust({ t }) {
  return (
    <div className="trust"><div className="wrap">
      {t.trust.map((i) => (
        <div className="ti" key={i.k}><span className="v">{i.v}</span><span className="k">{i.k}</span></div>
      ))}
    </div></div>
  );
}

export function Intro({ t }) {
  return (
    <section className="alt"><div className="wrap split">
      <div>
        <span className="eyebrow">{t.intro.eyebrow}</span>
        <h2 className="sh">{t.intro.h2}</h2>
        <p className="sub">{t.intro.p1}</p>
        <p className="sub intro-extra">{t.intro.p2}</p>
        <a className="btn dk" href="#contact" style={{ marginTop: 14 }}>{t.intro.cta}</a>
      </div>
      <Image src={img('polo')} alt="Polo in Sotogrande" width={900} height={498} sizes="(max-width:860px) 100vw, 45vw" />
    </div></section>
  );
}

export function Services({ t }) {
  return (
    <section id="services"><div className="wrap">
      <span className="eyebrow">{t.services.eyebrow}</span>
      <h2 className="sh">{t.services.h2}</h2>
      <p className="sub">{t.services.sub}</p>
      <div className="svc">
        {t.services.items.map((s) => (
          <Link className="card" href={`${t.locale === 'es' ? '/es' : ''}/${s.slug}`} key={s.slug}>
            <div className="cimg">
              {s.tag && <span className="tag">{s.tag}</span>}
              <Image src={img(s.img)} alt={s.title} width={736} height={408} sizes="(max-width:760px) 50vw, 33vw" />
            </div>
            <div className="cb">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="go">{t.services.more} →</span>
            </div>
          </Link>
        ))}
      </div>
    </div></section>
  );
}

export function Checks({ t }) {
  return (
    <section id="checks" className="dark"><div className="wrap">
      <span className="eyebrow">{t.checks.eyebrow}</span>
      <h2 className="sh">{t.checks.h2}</h2>
      <p className="sub">{t.checks.sub}</p>
      <div className="checks">
        {t.checks.items.map((c, i) => (
          <div className="chk" key={c.title}>
            <span className="ci-row">
              <Icon name={c.icon} className="chi" />
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
            </span>
            <h4>{c.title}</h4>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </div></section>
  );
}

export function Reviews({ t }) {
  return (
    <section id="reviews" className="alt"><div className="wrap">
      <span className="eyebrow">{t.reviews.eyebrow}</span>
      <h2 className="sh">{t.reviews.h2}</h2>
      <p className="sub">{t.reviews.sub}</p>
      <div className="ghead">
        <span className="big">{site.ratingValue}</span>
        <div className="mid"><Stars /><div>{t.reviews.average}</div></div>
        <span className="glogo"><GoogleG />{t.reviews.verified}</span>
      </div>
      <div className="revs">
        {t.reviews.items.map((r) => (
          <div className="rev" key={r.name}>
            <Stars className="stars rs" />
            <p>&ldquo;{r.text}&rdquo;</p>
            <div className="rw">
              <span className="av">{r.initial}</span>
              <div><div className="rn">{r.name}</div><div className="rm">{r.matter}</div></div>
            </div>
          </div>
        ))}
      </div>
      <p className="swipe">{t.reviews.swipe} →</p>
      <div className="rband">
        <div className="rbt"><h3>{t.reviews.bandTitle}</h3><p>{t.reviews.bandText}</p></div>
        <div className="rbb">
          <a className="btn" href={site.reviewUrl} target="_blank" rel="noopener">
            <span className="bstars">★★★★★</span> {t.reviews.leave}
          </a>
          <a className="btn dk" href={site.gbpUrl} target="_blank" rel="noopener">{t.reviews.readAll}</a>
        </div>
      </div>
    </div></section>
  );
}

export function About({ t }) {
  return (
    <section id="about"><div className="wrap">
      <span className="eyebrow">{t.about.eyebrow}</span>
      <h2 className="sh">{t.about.h2}</h2>
      <div className="about" style={{ marginTop: 34 }}>
        <div className="ph">
          <Image src={img('esther')} alt={site.shortName} width={400} height={461} sizes="250px" />
          <div className="pc">{t.about.role}</div>
        </div>
        <div>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <dl className="creds">
            {t.about.creds.map(([k, v]) => (
              <div className="cr" key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
            {t.about.credPending && (
              <div className="cr">
                <dt>{t.about.credPending[0]}</dt>
                <dd><span className="todo">{t.about.credPending[1]}</span></dd>
              </div>
            )}
          </dl>
        </div>
      </div>
      <div className="chips">
        {t.about.chips.map((c) => (
          <span className="chip" key={c.text}><Icon name={c.icon} />{c.text}</span>
        ))}
      </div>
    </div></section>
  );
}

export function Faq({ t }) {
  return (
    <section id="faq" className="alt"><div className="wrap">
      <span className="eyebrow">{t.faq.eyebrow}</span>
      <h2 className="sh">{t.faq.h2}</h2>
      <div className="faq">
        {t.faq.items.map((f) => (
          <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
        ))}
      </div>
    </div></section>
  );
}

export function Insights({ t }) {
  return (
    <section id="insights"><div className="wrap">
      <span className="eyebrow">{t.insights.eyebrow}</span>
      <h2 className="sh">{t.insights.h2}</h2>
      <div className="posts">
        {t.insights.items.map((p) => (
          <Link className="post" href={`${t.locale === 'es' ? '/es' : ''}/blog/${p.slug}`} key={p.slug}>
            <span className="dt">{p.cat}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </Link>
        ))}
      </div>
    </div></section>
  );
}

export function Footer({ t }) {
  return (
    <footer><div className="wrap">
      <div className="fg fg4">
        <div className="fbrand">
          <div className="fl"><Logo className="footmark" />
            <span><span className="bn" style={{ color: '#fff' }}>{site.shortName}</span>
              <span className="bs">&amp; Associates · Abogados</span></span>
          </div>
          {t.footer.blurb}
          <p className="fcontact">
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <div>
          <h5>{t.footer.services}</h5>
          {t.services.items.map((s) => (
            <Link href={`${t.locale === 'es' ? '/es' : ''}/${s.slug}`} key={s.slug}>{s.title}</Link>
          ))}
        </div>
        <div>
          <h5>{t.footer.more}</h5>
          {t.footer.legacyLinks.map((l) => <Link href={l.href} key={l.href}>{l.label}</Link>)}
        </div>
        <div>
          <h5>{t.footer.firm}</h5>
          {t.footer.firmLinks.map((l) => <Link href={l.href} key={l.label}>{l.label}</Link>)}
          <Link href={t.altLocale.href} hrefLang={t.altLocale.code}>{t.altLocale.label}</Link>
        </div>
      </div>
      <div className="flegal">
        {t.footer.legal.map((l) => <Link href={l.href} key={l.label}>{l.label}</Link>)}
      </div>
      <div className="fbot">
        <span>© {new Date().getFullYear()} {site.legalName}</span>
        <span>{t.footer.place}</span>
        <span className="pw">{t.footer.poweredBy}{' '}
          <a href={site.agency.url} rel="noopener">{site.agency.name}</a></span>
      </div>
    </div></footer>
  );
}

export function MobileCta({ t }) {
  return (
    <div className="mcta">
      <a className="c1" href="#contact">{t.cta.primary}</a>
      <a className="c2" href={`tel:${site.phoneHref}`}>{t.cta.call}</a>
    </div>
  );
}
