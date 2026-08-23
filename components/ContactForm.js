'use client';
import { useState } from 'react';
import site from '@/lib/site';

export default function ContactForm({ t }) {
  const [state, setState] = useState('idle');
  const id = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function onSubmit(e) {
    e.preventDefault();
    if (!id) { setState('error'); return; }
    setState('sending');
    const data = new FormData(e.currentTarget);
    data.append('_subject', `Website enquiry — ${data.get('matter') || 'General'}`);
    try {
      const res = await fetch(`https://formspree.io/f/${id}`, {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      });
      setState(res.ok ? 'ok' : 'error');
      if (res.ok) e.target.reset();
    } catch { setState('error'); }
  }

  const L = t.contact.labels;

  return (
    <section id="contact" className="dark"><div className="wrap">
      <span className="eyebrow">{t.contact.eyebrow}</span>
      <h2 className="sh">{t.contact.h2}</h2>
      <p className="sub">{t.contact.sub}</p>
      <div className="fwrap" style={{ marginTop: 36 }}>
        <dl className="cinfo">
          <dt>{L.office}</dt>
          <dd>{site.street}<br />{site.district}<br />{site.postal} {site.city}, {site.region}</dd>
          <dt>{L.phone}</dt>
          <dd><a href={`tel:${site.phoneHref}`}>{site.phone}</a></dd>
          <dt>{L.email}</dt>
          <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
          <dt>{L.hours}</dt><dd>{t.topbar.hours}</dd>
          <dt>{L.languages}</dt><dd>{t.locale === 'en' ? 'English and Spanish' : 'Español e inglés'}</dd>
        </dl>

        {state === 'ok' ? (
          <div className="form formmsg" role="status"><p>{t.contact.ok}</p></div>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            <div className="fr">
              <div className="fld"><label htmlFor="first">{L.first}</label>
                <input id="first" name="first" type="text" autoComplete="given-name" required /></div>
              <div className="fld"><label htmlFor="surname">{L.surname}</label>
                <input id="surname" name="surname" type="text" autoComplete="family-name" /></div>
            </div>
            <div className="fr solo">
              <div className="fld"><label htmlFor="email">{L.email}</label>
                <input id="email" name="email" type="email" autoComplete="email" required /></div>
              <div className="fld"><label htmlFor="tel">{L.tel}</label>
                <input id="tel" name="tel" type="tel" autoComplete="tel" /></div>
            </div>
            <div className="fr">
              <div className="fld"><label htmlFor="matter">{L.matter}</label>
                <select id="matter" name="matter">
                  {t.contact.matters.map((m) => <option key={m}>{m}</option>)}
                </select></div>
              <div className="fld"><label htmlFor="area">{L.area}</label>
                <select id="area" name="area">
                  {t.contact.areas.map((a) => <option key={a}>{a}</option>)}
                </select></div>
            </div>
            <div className="fld"><label htmlFor="message">{L.message}</label>
              <textarea id="message" name="message" placeholder={t.contact.placeholder} required /></div>
            {/* honeypot: real people never fill this */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off"
              style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true" />
            <label className="consent"><input type="checkbox" name="consent" required /> {t.contact.consent}</label>
            <button className="btn" type="submit" disabled={state === 'sending'}>
              {state === 'sending' ? t.contact.sending : t.contact.send}
            </button>
            {state === 'error' && <p className="formerr" role="alert">{t.contact.err}</p>}
          </form>
        )}
      </div>
    </div></section>
  );
}
