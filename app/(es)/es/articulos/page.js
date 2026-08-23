import { languagesFor } from '@/lib/locale';
import BlogIndex from '@/components/BlogIndex';
import es from '@/content/es';

export const metadata = {
  title: "Artículos sobre derecho inmobiliario español",
  description: "Apuntes sobre derecho inmobiliario, fiscalidad y residencia para propietarios extranjeros: qué ha cambiado, cuánto cuesta y qué plazos se escapan.",
  alternates: { canonical: '/es/articulos/', languages: languagesFor('/es/articulos/') },
};

export default function P() {
  return <BlogIndex t={es} />;
}
