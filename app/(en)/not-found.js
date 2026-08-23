import Link from 'next/link';
import Header from '@/components/Header';
import { Footer, MobileCta, Trust } from '@/components/Sections';
import en from '@/content/en';
import site from '@/lib/site';

export const metadata = { title: 'Page not found | Esther Pujol Wilkie & Associates', robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <Header t={en} />
      <div className="ihero"><div className="wrap">
        <span className="eyebrow">404</span>
        <h1>That page does not exist</h1>
        <p className="hsub">The address may have changed, or the link that brought you here may be out of date.</p>
      </div></div>
      <Trust t={en} />
      <section><div className="wrap prose">
        <div className="pblock">
          <h2>What you were probably looking for</h2>
          <ul className="plist">
            {en.navServices.map((s) => (
              <li key={s.href}><Link href={s.href}>{s.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="related">
          <h3>Or go straight to</h3>
          <ul>
            <li><Link href="/">Home →</Link></li>
            <li><Link href="/about/">About Esther Pujol Wilkie →</Link></li>
            <li><Link href="/blog/">Insights →</Link></li>
            <li><Link href="/contact/">Contact →</Link></li>
          </ul>
        </div>
        <p className="disclaim">
          If you followed a link from an older version of this site and cannot find what you
          need, call the office on {site.phone} and I will point you to it.
        </p>
      </div></section>
      <Footer t={en} />
      <MobileCta t={en} />
    </>
  );
}
