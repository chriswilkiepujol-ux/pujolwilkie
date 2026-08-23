// Exigido por la Ley 34/2002 (LSSI-CE) art. 10 y por el RGPD / LOPDGDD.
// El NIF se publica parcialmente anonimizado conforme al criterio de la AEPD
// para documentos identificativos, al tratarse de una profesional autonoma
// cuyo NIF es su DNI personal. No sustituir por el numero completo.

const legal = {
  'aviso-legal': {
    eyebrow: 'Legal', title: 'Aviso legal',
    intro: 'Información exigida por la normativa española de servicios de la sociedad de la información.',
    sections: [
      { h2: 'Titularidad de este sitio web',
        list: [
          'Titular: Esther Pujol Wilkie & Associates',
          'NIF: ***9020** (publicado de forma parcialmente anonimizada conforme al criterio de la Agencia Española de Protección de Datos para la publicación de documentos identificativos)',
          'Domicilio: Guadalmarina 1, Portal 3, 2E, La Marina de Sotogrande, 11310 San Roque, Cádiz, España',
          'Teléfono: +34 620 86 80 12',
          'Dominio: pujolwilkie.com',
        ] },
      { h2: 'Datos profesionales',
        list: [
          'Colegio profesional: Ilustre Colegio Provincial de Abogados de Cádiz',
          'Número de colegiada: 1432',
          'Nombre colegial: Esther Pujol Andrés, que ejerce bajo la denominación Esther Pujol Wilkie & Associates',
          'Fecha de colegiación: 2 de julio de 1990. Situación: abogada ejerciente',
          'Profesión: Abogada, profesión regulada en España',
          'La colegiación puede verificarse en el censo del Consejo General de la Abogacía Española, censo.abogacia.es',
          'Normativa profesional aplicable: Estatuto General de la Abogacía Española y Código Deontológico de la Abogacía Española, disponibles en abogacia.es',
        ] },
      { h2: 'Objeto del sitio web',
        p: ['Este sitio presenta los servicios profesionales del despacho y ofrece información general sobre derecho español. No constituye asesoramiento jurídico y su consulta o el envío de una solicitud a través del formulario no genera relación profesional alguna.',
            'La información publicada puede verse afectada por cambios legislativos o jurisprudenciales posteriores y no debe utilizarse sin asesoramiento individual sobre su caso concreto.'] },
      { h2: 'Condiciones de uso',
        p: ['El acceso a este sitio implica la aceptación de estas condiciones. El usuario se compromete a utilizarlo conforme a la ley y a no realizar actividades que puedan dañarlo, inutilizarlo, sobrecargarlo o impedir su normal funcionamiento.',
            'El despacho se reserva el derecho a modificar el contenido del sitio en cualquier momento y sin previo aviso.'] },
      { h2: 'Propiedad intelectual e industrial',
        p: ['Los contenidos de este sitio, incluidos textos, diseño, logotipo e imágenes, pertenecen al despacho o se utilizan con autorización, y están protegidos por la normativa de propiedad intelectual e industrial. No se permite su reproducción, distribución o comunicación pública sin autorización expresa y por escrito.'] },
      { h2: 'Responsabilidad',
        p: ['El despacho no responde de las decisiones adoptadas a partir de la información aquí publicada sin asesoramiento individual, ni del contenido de sitios de terceros accesibles mediante enlaces desde esta web.'] },
      { h2: 'Legislación aplicable y jurisdicción',
        p: ['Estas condiciones se rigen por la legislación española. Cualquier controversia derivada del uso de este sitio se someterá a los juzgados y tribunales de San Roque, Cádiz, salvo que la normativa de consumo aplicable disponga otra cosa.'] },
      { h2: 'Reclamaciones y resolución de conflictos',
        p: ['Las reclamaciones pueden dirigirse al domicilio indicado más arriba. Los clientes pueden asimismo plantear cuestiones ante el Colegio de Abogados correspondiente. La Comisión Europea facilita una plataforma de resolución de litigios en línea en ec.europa.eu/consumers/odr.'] },
    ],
  },

  'politica-de-privacidad': {
    eyebrow: 'Legal', title: 'Política de privacidad',
    intro: 'Tratamiento de los datos personales facilitados a través de este sitio web, conforme al RGPD y a la LOPDGDD.',
    sections: [
      { h2: 'Responsable del tratamiento',
        list: [
          'Responsable: Esther Pujol Wilkie & Associates',
          'NIF: ***9020** (parcialmente anonimizado conforme al criterio de la AEPD)',
          'Dirección: Guadalmarina 1, Portal 3, 2E, La Marina de Sotogrande, 11310 San Roque, Cádiz',
          'Teléfono: +34 620 86 80 12',
        ] },
      { h2: 'Qué datos se recogen y con qué finalidad',
        p: ['El formulario de contacto recoge su nombre, dirección de correo electrónico, teléfono si lo facilita, el objeto de su consulta, la zona de interés y el contenido de su mensaje.',
            'Estos datos se utilizan únicamente para atender su consulta y, en caso de que llegue a encargar servicios al despacho, para prestar los servicios profesionales acordados. No se utilizan con fines comerciales ni se ceden a terceros para esa finalidad.'] },
      { h2: 'Base jurídica',
        list: [
          'Su consentimiento, prestado al marcar la casilla correspondiente antes de enviar el formulario (art. 6.1.a RGPD)',
          'La ejecución de un contrato o de medidas precontractuales, si encarga servicios al despacho (art. 6.1.b RGPD)',
          'El cumplimiento de obligaciones legales propias de la abogacía, incluida la normativa de prevención del blanqueo de capitales (art. 6.1.c RGPD)',
        ] },
      { h2: 'Plazo de conservación',
        p: ['Las consultas que no den lugar a un encargo se conservan únicamente durante el tiempo necesario para atenderlas y acreditar que fueron atendidas.',
            'Cuando se formaliza la relación profesional, los datos se conservan durante los plazos exigidos por la normativa profesional y fiscal, que en materia de prevención del blanqueo de capitales es con carácter general de diez años desde la finalización de la relación.'] },
      { h2: 'Encargados del tratamiento',
        p: ['El formulario de contacto está operado por Formspree, que trata los envíos por cuenta del despacho en calidad de encargado. El alojamiento del sitio corresponde a Vercel Inc. Cuando estos proveedores traten datos fuera del Espacio Económico Europeo, las transferencias se amparan en las cláusulas contractuales tipo de la Comisión Europea.'] },
      { h2: 'Sus derechos',
        list: [
          'Acceso a los datos personales que le conciernen',
          'Rectificación de los datos inexactos o incompletos',
          'Supresión cuando los datos ya no sean necesarios',
          'Limitación del tratamiento y oposición al mismo',
          'Portabilidad de los datos que usted facilitó',
          'Retirada del consentimiento en cualquier momento, sin efectos retroactivos sobre el tratamiento ya realizado',
        ],
        p: ['Para ejercer cualquiera de estos derechos puede escribir al domicilio indicado, adjuntando copia de un documento identificativo. Tiene además derecho a presentar una reclamación ante la Agencia Española de Protección de Datos en aepd.es.'] },
      { h2: 'Seguridad',
        p: ['El sitio se sirve mediante HTTPS y se aplican medidas técnicas y organizativas adecuadas para proteger los datos personales. Las comunicaciones relativas a un asunto en curso se canalizan por los medios acordados con cada cliente.'] },
    ],
  },

  'politica-de-cookies': {
    eyebrow: 'Legal', title: 'Política de cookies',
    intro: 'Qué almacena este sitio web en su dispositivo y qué no.',
    sections: [
      { h2: 'En resumen',
        p: ['Este sitio no utiliza cookies publicitarias, de perfilado ni de analítica de terceros. No se muestra banner de consentimiento porque el funcionamiento actual del sitio no lo requiere.'] },
      { h2: 'Qué se utiliza',
        list: [
          'Cookies técnicas estrictamente necesarias, establecidas por la plataforma de alojamiento para servir las páginas y garantizar la seguridad. Están exceptuadas del deber de consentimiento conforme al art. 22.2 LSSI-CE',
          'Google Fonts, para representar la tipografía del sitio. No instala cookies, si bien la solicitud alcanza servidores de Google',
        ] },
      { h2: 'Qué no se utiliza',
        list: [
          'Ninguna cookie de Google Analytics ni de analítica equivalente',
          'Ningún píxel publicitario o de remarketing',
          'Ningún rastreo de redes sociales',
          'Ningún perfilado de visitantes entre sitios',
        ] },
      { h2: 'Servicios externos',
        p: ['El envío del formulario remite sus datos a Formspree, que actúa como encargado del tratamiento conforme a sus propias condiciones. Los enlaces a Google Maps o al perfil de empresa del despacho en Google conducen a Google, que aplica su propia política de cookies una vez los sigue.'] },
      { h2: 'Gestión de cookies',
        p: ['Cualquier navegador permite consultar, bloquear o eliminar cookies desde su configuración. Bloquear las estrictamente necesarias puede impedir el funcionamiento correcto de algunas partes del sitio.'] },
      { h2: 'Modificaciones',
        p: ['Si en el futuro se incorpora analítica o cualquier otra tecnología no esencial, esta política se actualizará y se implantará un mecanismo de consentimiento antes de activarla.'] },
    ],
  },
};
export default legal;
