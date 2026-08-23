
// Required under Ley 34/2002 (LSSI-CE) art. 10 and the RGPD/LOPDGDD.
// The NIF is published in the partially masked form the AEPD sets out for
// identity documents, since the practice is a sole practitioner and the NIF
// is her personal DNI. See lib/site.js. Do not substitute the full number.

const legal = {
  'aviso-legal': {
    metaTitle: "Aviso legal | Esther Pujol Wilkie & Associates",
    metaDesc: "Legal notice under art. 10 LSSI: firm identity, NIF, registered office, colegio and colegiada number, applicable professional rules and jurisdiction.",
    eyebrow: 'Legal', title: 'Aviso legal',
    intro: 'Information required under Spanish law on information society services.',
    sections: [
      { h2: 'Ownership of this website',
        list: [
          'Holder: Esther Pujol Wilkie & Associates',
          'NIF: ***9020** (shown in the partially masked form set out by the Spanish Data Protection Agency for the publication of identity documents)',
          'Registered office: Guadalmarina 1, Portal 3, 2E, La Marina de Sotogrande, 11310 San Roque, Cádiz, Spain',
          'Telephone: +34 620 86 80 12',
          'Email: esther@pujolwilkie.com',
          'Domain: pujolwilkie.com',
        ] },
      { h2: 'Professional details',
        list: [
          'Bar association: Ilustre Colegio Provincial de Abogados de Cádiz',
          'Registration number (nº colegiada): 1432',
          'Registered name: Esther Pujol Andrés, practising under Esther Pujol Wilkie & Associates',
          'Admitted: 2 July 1990. Status: abogada ejerciente',
          'Profession: Abogada, a regulated profession in Spain',
          'Registration may be verified at the national register of the Consejo General de la Abogacía Española, censo.abogacia.es',
          'Applicable professional rules: Estatuto General de la Abogacía Española and the Código Deontológico of the Abogacía Española, available at abogacia.es',
        ] },
      { h2: 'Purpose of this website',
        p: ['This website presents the professional services offered by the firm and provides general information about Spanish law. It does not constitute legal advice and no lawyer and client relationship arises from browsing it or from sending an enquiry through it.',
            'Any information published here may be affected by subsequent legislative or judicial change. It should not be relied on without individual advice on your own circumstances.'] },
      { h2: 'Conditions of use',
        p: ['Accessing this website means accepting these conditions. Users undertake to use the site lawfully and not to carry out any activity that could damage, disable or overburden it, or prevent its normal use.',
            'The firm reserves the right to modify the content of the site at any time and without prior notice.'] },
      { h2: 'Intellectual property',
        p: ['The content of this site, including text, design, logotype and images, belongs to the firm or is used with authorisation, and is protected by intellectual and industrial property law. Reproduction, distribution or public communication without express written authorisation is not permitted.'] },
      { h2: 'Liability',
        p: ['The firm is not responsible for decisions taken on the basis of information published here without individual advice, nor for the content of third party websites accessible through links from this site.'] },
      { h2: 'Applicable law and jurisdiction',
        p: ['These conditions are governed by Spanish law. Any dispute arising from the use of this website will be submitted to the courts of San Roque, Cádiz, unless the applicable rules on consumer protection provide otherwise.'] },
      { h2: 'Complaints and dispute resolution',
        p: ['Complaints may be addressed to the firm at the postal address above. Clients may also raise matters with the relevant Colegio de Abogados. The European Commission provides an online dispute resolution platform at ec.europa.eu/consumers/odr.'] },
    ],
  },

  'politica-de-privacidad': {
    metaTitle: "Privacy policy | Esther Pujol Wilkie & Associates",
    metaDesc: "How personal data from the enquiry form is handled under the RGPD: lawful bases, retention periods, processors used, and how to exercise your rights.",
    eyebrow: 'Legal', title: 'Privacy policy',
    intro: 'How personal data submitted through this website is handled, under the RGPD and the LOPDGDD.',
    sections: [
      { h2: 'Who is responsible for your data',
        list: [
          'Data controller: Esther Pujol Wilkie & Associates',
          'NIF: ***9020** (partially masked, per Spanish Data Protection Agency criteria)',
          'Address: Guadalmarina 1, Portal 3, 2E, La Marina de Sotogrande, 11310 San Roque, Cádiz',
          'Telephone: +34 620 86 80 12',
          'Email: esther@pujolwilkie.com',
        ] },
      { h2: 'What data is collected and why',
        p: ['The enquiry form collects your name, email address, telephone number where you provide one, the subject of your enquiry, the area you are interested in, and the content of your message.',
            'This data is used solely to respond to your enquiry and, where you go on to instruct the firm, to provide the professional services agreed. It is not used for marketing and is not sold or transferred to third parties for commercial purposes.'] },
      { h2: 'Legal basis',
        list: [
          'Your consent, given when you tick the consent box before submitting the form (art. 6.1.a RGPD)',
          'Performance of a contract or pre-contractual measures, where you instruct the firm (art. 6.1.b RGPD)',
          'Compliance with legal obligations applicable to the legal profession, including anti money laundering rules (art. 6.1.c RGPD)',
        ] },
      { h2: 'How long it is kept',
        p: ['Enquiries that do not result in an instruction are retained only as long as necessary to deal with them and to evidence that they were dealt with.',
            'Where you become a client, data is retained for the period required by professional and tax obligations, which for anti money laundering purposes is generally ten years from the end of the relationship.'] },
      { h2: 'Who processes it',
        p: ['The enquiry form is operated by Formspree, which processes submissions on the firm\u2019s behalf as a data processor. The website is hosted by Vercel Inc. Where these providers process data outside the European Economic Area, transfers are covered by the European Commission\u2019s standard contractual clauses.'] },
      { h2: 'Your rights',
        list: [
          'Access to the personal data held about you',
          'Rectification of data that is inaccurate or incomplete',
          'Erasure where the data is no longer necessary',
          'Restriction of processing, and objection to it',
          'Portability of data you provided',
          'Withdrawal of consent at any time, without affecting processing already carried out',
        ],
        p: ['To exercise any of these rights, write to the postal address above or use the contact details on the site, enclosing a copy of an identity document. You also have the right to complain to the Agencia Española de Protección de Datos at aepd.es.'] },
      { h2: 'Security',
        p: ['The site is served over HTTPS and appropriate technical and organisational measures are applied to protect personal data. Communications about a live matter are handled through the channels agreed with each client.'] },
    ],
  },

  'politica-de-cookies': {
    metaTitle: "Cookie policy | Esther Pujol Wilkie & Associates",
    metaDesc: "This site uses no analytics, advertising or profiling cookies, which is why no consent banner appears. What is used, what is not, and how to manage cookies.",
    eyebrow: 'Legal', title: 'Cookie policy',
    intro: 'What this website stores on your device, and what it does not.',
    sections: [
      { h2: 'The short version',
        p: ['This website does not use advertising, profiling or third party analytics cookies. No consent banner is shown because no consent is required for what the site does.'] },
      { h2: 'What is used',
        list: [
          'Strictly necessary technical cookies set by the hosting platform to serve pages and maintain security. These are exempt from the consent requirement under art. 22.2 LSSI-CE',
          'Google Fonts are loaded to render the site typography. No cookie is set by this, though the request reaches Google servers',
        ] },
      { h2: 'What is not used',
        list: [
          'No Google Analytics or comparable analytics cookie',
          'No advertising or remarketing pixels',
          'No social network tracking',
          'No cross site profiling of visitors',
        ] },
      { h2: 'External services',
        p: ['Submitting the enquiry form sends your data to Formspree, which operates under its own privacy terms as a processor for the firm. Links to Google Maps or to the firm\u2019s Google Business Profile lead to Google, which applies its own cookie policy once you follow them.'] },
      { h2: 'Managing cookies',
        p: ['Any browser allows cookies to be inspected, blocked or deleted through its settings. Blocking strictly necessary cookies may prevent parts of the site from working correctly.'] },
      { h2: 'Changes to this policy',
        p: ['If analytics or any other non essential technology is added to the site in future, this policy will be updated and a consent mechanism introduced before that technology is activated.'] },
    ],
  },
};
export default legal;
