'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import site from '@/lib/site';

export default function Header({ t }) {
  const [open, setOpen] = useState(false);
  const drawer = useRef(null);
  const closeBtn = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('lock', open);
    if (open && closeBtn.current) closeBtn.current.focus();
    const onKey = (e) => {
      if (!open) return;
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'Tab' && drawer.current) {
        const f = drawer.current.querySelectorAll('a[href],button');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    const onResize = () => { if (window.innerWidth > 980) setOpen(false); };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.classList.remove('lock');
    };
  }, [open]);

  const brand = (
    <span>
      <span className="bn">{site.shortName}</span>
      <span className="bs">&amp; Associates · Abogados</span>
    </span>
  );

  return (
    <>
      <div className="top"><div className="wrap">
        <span className="l">{t.topbar.blurb}</span>
        <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
        <a href="#contact">{t.topbar.hours}</a>
      </div></div>

      <header><div className="wrap hbar">
        <Link className="brand" href={t.home}><Logo className="brandmark" />{brand}</Link>
        <nav>{t.nav.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}</nav>
        <Link className="lang" href={t.altLocale.href} hrefLang={t.altLocale.code}>
          <b>{t.locale.toUpperCase()}</b> / {t.altLocale.code.toUpperCase()}
        </Link>
        <a className="btn dk" href="#contact">{t.cta.primary}</a>
        <button className="burger" aria-expanded={open} aria-controls="drawer"
          aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div></header>

      <div className={`scrim${open ? ' on' : ''}`} hidden={!open} onClick={() => setOpen(false)} />
      <aside id="drawer" ref={drawer} className={`drawer${open ? ' on' : ''}`} hidden={!open}
        role="dialog" aria-modal="true" aria-label="Menu">
        <div className="dhead">
          <span><span className="bn">{site.shortName}</span><span className="bs">&amp; Associates</span></span>
          <button className="dclose" ref={closeBtn} aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
        </div>
        <nav className="dnav">
          <p className="dgroup">{t.navLabels.services}</p>
          {t.navServices.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
          <p className="dgroup">{t.navLabels.firm}</p>
          {t.navFirm.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
        </nav>
        <p className="dmeta">{site.street}<br />{site.district}, {site.postal} {site.region}<br />{t.topbar.hours}<br />
          <a href={`mailto:${site.email}`} style={{ color: 'var(--pine)' }}>{site.email}</a></p>
        <div className="dfoot">
          <div className="dlang">
            <a className="cur" href="#" onClick={(e) => e.preventDefault()}>{t.locale === 'en' ? 'ENGLISH' : 'ESPAÑOL'}</a>
            <Link href={t.altLocale.href} hrefLang={t.altLocale.code}>{t.altLocale.label.toUpperCase()}</Link>
          </div>
          <a className="btn" href="#contact" onClick={() => setOpen(false)}>{t.cta.primary}</a>
          <a className="btn dk" href={`tel:${site.phoneHref}`}>{t.cta.call} {site.phone}</a>
        </div>
      </aside>
    </>
  );
}
