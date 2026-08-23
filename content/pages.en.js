// Page content. `legacy: true` marks URLs inherited from the WordPress site that
// must keep their path. New services sit on new paths alongside them.
const pages = {
// ---- non-service pages ----
  'about': {
    metaTitle: "Esther Pujol Wilkie, Abogada in Sotogrande",
    metaDesc: "Colegiada nº 1432 of the Colegio de Abogados de Cadiz and practising since 1990, working almost entirely with foreign clients meeting Spanish law for the first time.",
    legacy: true, image: 'esther-pujol-wilkie-abogada-sotogrande', portrait: true, imageCaption: 'Esther Pujol Wilkie, abogada · Colegiada nº 1432, ICA Cádiz', imageAlt: 'Esther Pujol Wilkie, abogada, in her Sotogrande office', eyebrow: 'About',
    title: 'Esther Pujol Wilkie',
    intro: 'Practising Spanish law since 1990, almost entirely for people meeting it for the first time.',
    nav: 'About',
    sections: [
      { h2: 'Barcelona, London, Gibraltar, Sotogrande',
        p: ['I was born in Barcelona and studied law there. Before settling on this coast I practised in the United Kingdom and in Gibraltar, and I hold banking qualifications alongside the legal ones, which turns out to matter more often than you would expect in property work.',
            'For roughly thirty years I have worked from Sotogrande. The clients are overwhelmingly foreign nationals dealing with Spanish law for the first time, usually around a property purchase, and usually while living somewhere else.'] },
      { h2: 'How the practice works',
        p: ['I act for the client and nobody else. No referral arrangements with estate agents, no commission from developers, no divided loyalty. That sounds unremarkable until you understand how much property work on this coast is introduced by the selling side.',
            'Most matters start with one transaction and continue for years: the purchase leads to the tax filings, the filings lead to a residence application, and eventually the same office handles the sale or the inheritance. Clients tend to arrive nervous and stay for decades.'] },
      { h2: 'Languages and jurisdictions',
        list: ['Spanish and English, both fluent, with every document explained in plain English',
               'Qualified and practising in Spain',
               'Previous practice in the United Kingdom and Gibraltar',
               'Cross border work between Spain and Gibraltar, including frontier workers and Gibraltar companies'] },
      { h2: 'Working with clients who are not here',
        p: ['A large share of my clients are not in Spain for most of the year, so much of the work is done at a distance under power of attorney: signing at the notary, filing returns, dealing with the town hall and the tax office.',
            'I completed the Consejo General de la Abogacía Española digital competencies diploma in June 2026, a 150 hour programme run with Unión Profesional, which is directly relevant to how that work now happens: electronic filings, digital signatures and secure handling of client documentation across borders.'] },
      { h2: 'The office',
        p: ['The office is in Guadalmarina, on Avenida de la Marina in La Marina de Sotogrande, a few minutes from the port. Clients are welcome to come in, but a great deal of work is done remotely under power of attorney for people who are not in Spain.'] },
    ],
    related: [{ href: '/full-client-service/', label: 'How I work with clients' },
              { href: '/contact/', label: 'Arrange a free consultation' }],
  },
  'contact': {
    metaTitle: "Contact | English Speaking Lawyer in Sotogrande",
    metaDesc: "Free initial consultation on buying, selling or owning property in Spain. Reply within one working day, in English or Spanish, from an office in Sotogrande.",
    legacy: true, image: 'polo-sotogrande', imageAlt: 'Polo match at Sotogrande', eyebrow: 'Contact',
    title: 'Contact',
    intro: 'A free initial conversation about what you are planning, with no obligation.',
    nav: 'Contact',
    sections: [
      { h2: 'What happens when you get in touch',
        p: ['Use the form below, call the office, or email. I reply personally rather than passing enquiries to an assistant, normally within one working day.',
            'The first conversation costs nothing. It is usually enough to tell you whether what you are planning is straightforward, what the process involves, roughly what it will cost, and whether you need a lawyer at all. Sometimes the answer is that you do not.'] },
      { h2: 'Useful things to mention',
        list: ['Whether you are buying, selling, or already own something here',
               'Where the property is, or where you are looking',
               'Whether you have signed anything yet, and if so what',
               'Your nationality and where you are tax resident',
               'Whether residency in Spain is part of the plan'] },
      { h2: 'If you have already signed something',
        p: ['If a reservation contract or contrato de arras has been signed and you are having second thoughts, say so in the first message. Timing matters in those situations and there are often more options than people assume.'] },
    ],
    related: [{ href: '/buying-property/', label: 'Buying a property in Spain' },
              { href: '/about/', label: 'About Esther Pujol Wilkie' }],
  },
  'property-law': {
    metaTitle: "Property Law in Spain | Pujol Wilkie, Sotogrande",
    metaDesc: "How Spanish property law actually works for foreign owners: registered title, what debts follow the property, and the checks that matter before you sign.",
    faq: [
      {
            "q": "What is a nota simple and why does it matter?",
            "a": "It is the Land Registry extract showing who owns the property, how it is described and every charge inscribed against it. It costs very little and it is the starting point of every purchase, because debts and charges follow the property rather than the person who created them."
      },
      {
            "q": "Can I inherit the previous owner's debts?",
            "a": "Effectively, yes. Mortgages, unpaid community fees for the current year and three preceding ones, IBI arrears and embargoes all attach to the property. A buyer who does not check can find themselves paying for someone else's arrears."
      },
      {
            "q": "What if the property has an extension that was never declared?",
            "a": "It is one of the three most common problems and often invisible on a viewing. Depending on the age of the work and the planning position, it may be regularisable, it may be subject to enforcement, or it may simply reduce what the property is worth at resale. It needs identifying before completion, not after."
      },
      {
            "q": "Does the notary check the property for me?",
            "a": "No. The notary is a public official who witnesses the deed and confirms identities and capacity. Verifying the physical, planning and debt position of the property is not part of that function, and neither the estate agent nor the developer's lawyer acts for you either."
      },
      {
            "q": "Should I make a Spanish will?",
            "a": "If you own property here, yes. Without one, the process for your heirs is slower, more expensive and conducted entirely in Spanish. A Spanish will is also the natural place to make the EU 650/2012 election of your national law, which for common law nationals avoids the Spanish forced heirship rules."
      }
    ],
    legacy: true, image: 'scales-of-justice-spanish-law', imageAlt: 'Scales of justice, representing Spanish legal practice', eyebrow: 'Practice area',
    title: 'Property Law in Spain',
    intro: 'The legal framework behind every Spanish property transaction, and what it means for a foreign owner.',
    nav: 'Property law',
    sections: [
      { h2: 'A different system to the one you know',
        p: ['Spanish property law is not a variation on the English or Irish system. Ownership transfers at the notary by public deed, the escritura p\u00fablica, and only becomes fully effective against third parties once it is inscribed at the Registro de la Propiedad. Until that inscription happens, the position is weaker than most buyers assume.',
            'Spain operates a system of registered title where inscription is voluntary but decisive. A property can be validly owned without being registered, but an unregistered owner is exposed to a later buyer who does register in good faith. This is why the gap between signature and inscription matters, and why it should be measured in days rather than months.',
            'The practical consequence is that a great deal depends on checks made before signature. Debts, charges and planning irregularities attach to the property itself rather than to the person who created them, so a buyer can inherit problems that had nothing to do with them.'] },
      { h2: 'What attaches to the property, not the seller',
        list: ['Mortgages and any other charge inscribed at the Land Registry',
               'Unpaid community of owners fees, generally for the current year and three preceding years',
               'Outstanding IBI, the annual municipal property tax',
               'Embargoes and pending judicial proceedings',
               'Planning infringements on unlicensed or undeclared building work',
               'Easements and rights of way, whether or not they are obvious on site'] },
      { h2: 'The documents that matter',
        p: ['The nota simple is the Land Registry extract showing the registered owner, the description of the property and any charge against it. It is the starting point of every purchase and it is inexpensive to obtain. It is a summary rather than a certificate; where a matter is contentious a certificaci\u00f3n registral carries more weight.',
            'The catastro record is separate and serves a fiscal purpose. The two frequently disagree on surface area or boundaries, and reconciling them before completion avoids difficulty at resale. A discrepancy is not necessarily a problem, but an unexplained one is worth resolving while the seller is still motivated to help.',
            'For anything built or extended in recent decades, the licencia de primera ocupaci\u00f3n and the planning position at the town hall matter as much as the registry entry. A structure can be registered and still be illegal.'] },
      { h2: 'Where problems usually surface',
        p: ['Three situations account for most difficulties in practice. The first is undeclared building work: a terrace enclosed, a pool added, a basement converted, none of it licensed or reflected in the registry. It is often invisible on a viewing and expensive to regularise afterwards.',
            'The second is inherited title. Where the seller acquired the property through an inheritance that was never properly completed, the chain of title has a gap and completion cannot safely proceed until it is closed.',
            'The third is rustic land. Building rules on land classified as r\u00fastico are considerably more restrictive than buyers expect, and a house standing on it is not proof that the house is lawful.'] },
      { h2: 'Co-ownership and how property is held',
        p: ['How ownership is structured has consequences that outlast the purchase. Joint ownership between spouses, ownership through a company, and ownership shared between family members each carry different tax treatment on disposal and different consequences on death.',
            'Spanish succession rules and the forced heirship regime can apply to Spanish assets in ways that surprise owners from common law jurisdictions. EU Regulation 650/2012 allows a national of another country to elect the law of their nationality to govern their succession, but the election has to be made expressly, normally in a Spanish will. Making it is straightforward; discovering afterwards that it was never made is not.'] },
      { h2: 'Where I come in',
        p: ['I act for the buyer or the owner, never for the agent or the developer. That means the searches are run, the contract is read before you are asked to sign it, and the tax position is calculated in advance rather than discovered at the notary.',
            'Where something is wrong, the useful question is rarely whether to walk away. It is usually what to require the seller to fix, what to retain from the price until it is fixed, and what to reflect in the deed so the problem does not resurface when you come to sell.'] },
    ],
    related: [
      { href: '/buying-property/', label: 'Buying a property: the full process' },
      { href: '/selling-property/', label: 'Selling a property in Spain' },
      { href: '/tax-and-accountancy/', label: 'Tax and accountancy' },
    ],
  },

  'spanish-golden-visa': {
    metaTitle: "Spain Golden Visa: Closed April 2025 | Pujol Wilkie",
    metaDesc: "Spain's investor visa was repealed on 3 April 2025. What happens to existing holders, which residency routes remain open, and the tax consequence most people miss.",
    faq: [
      {
            "q": "Can I still apply for the Spanish Golden Visa?",
            "a": "No. Organic Law 1/2025 repealed the scheme and it stopped accepting new applications on 3 April 2025. There is no replacement, no grace period and no threshold at which property purchase grants residence. Buying remains completely open to foreign nationals; it simply carries no immigration consequence."
      },
      {
            "q": "I already hold a Golden Visa. What happens to it?",
            "a": "Transitional provisions protect existing holders. If your authorisation was granted, or your application filed, before the cutoff, your status continues and renewal remains available provided you still meet the original conditions, including maintaining the qualifying investment."
      },
      {
            "q": "Can I sell the property my Golden Visa was based on?",
            "a": "You can sell it, but selling will generally end the basis for renewal. A disposal needs to be planned against your residence position rather than treated separately. If you are approaching ten years of legal residence, long term residence or naturalisation may remove the dependence on the investment altogether."
      },
      {
            "q": "What replaced the Golden Visa?",
            "a": "Nothing directly. The non-lucrative visa, digital nomad visa, entrepreneur routes, EU Blue Card and family reunification all remain open, but every one of them expects you to actually live in Spain for a meaningful part of the year. The Golden Visa was unusual precisely because it did not."
      },
      {
            "q": "Does buying a more expensive property still qualify?",
            "a": "No. The 500,000 euro threshold has not been raised, it has been abolished. No purchase at any value produces a residence right."
      },
      {
            "q": "Will holding Spanish residence make me tax resident in Spain?",
            "a": "Spending more than 183 days in Spain in a calendar year generally makes you tax resident here on worldwide income, whatever permit you hold. Because the replacement routes expect real presence and the Golden Visa did not, this now affects far more applicants than it used to."
      }
    ],
    legacy: true, image: 'spanish-visa-application', imageAlt: 'Spanish visa application form being completed', eyebrow: 'Residency',
    title: 'The Spanish Golden Visa',
    intro: 'The investor residence route closed on 3 April 2025. What that means if you hold one, and what is available if you do not.',
    nav: 'Golden Visa',
    sections: [
      { h2: 'The programme has ended',
        p: ['Spain\u2019s residence visa for investors, universally known as the Golden Visa, was repealed by Organic Law 1/2025. The law was published in the Bolet\u00edn Oficial del Estado on 3 January 2025 and took effect three months later, on 3 April 2025. It removed Articles 63 to 67 of Law 14/2013, which had been the legal basis for the scheme since 2013.',
            'There is no replacement and no grace period. Buying property in Spain no longer grants any residence right, at any value. Foreign buyers may still purchase freely; the purchase simply carries no immigration consequence.'] },
      { h2: 'What the scheme used to offer',
        p: ['The best known route was a purchase of Spanish real estate worth at least 500,000 euros, free of mortgage for that amount. Other qualifying investments included one million euros in shares of Spanish companies or in investment funds, two million in Spanish government debt, a bank deposit of one million, or a business project judged to be of general interest.',
            'What made it genuinely unusual was not the threshold but the absence of a residence requirement. A single visit a year was sufficient to maintain the permit, which is why it appealed to people who wanted Schengen mobility without relocating. No route available today replicates that.'] },
      { h2: 'Why it was withdrawn',
        p: ['The stated justification was housing affordability. The government argued that residency tied to property investment was contributing to price pressure in Madrid, Barcelona, Valencia and the Balearics, and framed the repeal as protecting housing as a right rather than a speculative asset.',
            'There was also sustained pressure from the European Commission, which had for years treated residency and citizenship by investment schemes across the union as presenting risks around security, money laundering and tax transparency. Whether the Spanish scheme materially moved house prices is arguable; politically, the property route had become untenable.'] },
      { h2: 'If you already hold one',
        p: ['Transitional provisions protect existing holders. If your visa or residence authorisation was granted, or your application was filed, before the cut off date, your status continues and renewals remain possible provided you still meet the original conditions, including maintaining the qualifying investment.',
            'Two points are worth stating plainly. Selling the qualifying property will generally end the basis for renewal, so a disposal should be planned against your residence position rather than separately from it. And after ten years of legal residence, subject to the physical presence requirements, long term residence or naturalisation may be available, which removes dependence on the investment altogether.',
            'Renewals falling due in 2026 and 2027 are worth reviewing individually rather than assumed. The transitional rules interact with the general immigration regime in ways that are not obvious from the statutory text.'] },
      { h2: 'What is available instead',
        list: ['Non-lucrative visa, for those with sufficient passive income who will not work in Spain. Expects substantial physical presence, generally more than 183 days a year',
               'Digital nomad visa, for remote workers employed by or contracting with companies outside Spain, with an income threshold linked to the national minimum wage',
               'Entrepreneur and self-employment routes, where there is a genuine business project',
               'EU Blue Card, for highly qualified employees holding a recognised degree',
               'Family reunification, where a family member already holds Spanish residence',
               'Free movement, for EU and EEA nationals and their family members'],
        p: ['Each carries different income thresholds, physical presence requirements and tax consequences. The right route depends on how you earn, where you earn it, and how much of the year you intend to spend in Spain.'] },
      { h2: 'The tax point most people miss',
        p: ['Residency and tax residency are separate questions. Spending more than 183 days in Spain in a calendar year generally makes you tax resident here on worldwide income, regardless of which permit you hold. Significant economic interests in Spain can produce the same result.',
            'The Golden Visa allowed people to hold Spanish residence while remaining tax resident elsewhere, because it required almost no presence. The routes that replaced it do not, which changes the calculation substantially for anyone with income or assets outside Spain.',
            'This should be modelled before an application is filed, not after. It is the most expensive thing to discover late, and unwinding it afterwards is considerably harder than planning for it.'] },
      { h2: 'Common misconceptions',
        list: ['That buying before a certain date still qualifies. It does not. The cutoff was the application date, 3 April 2025, not the purchase date',
               'That a higher purchase price reopens the route. No threshold exists any more, at any value',
               'That existing holders must sell or leave. They do not; transitional protection applies',
               'That other countries still offer equivalents. Some do, on different terms, but a Spanish property purchase is not among them'] },
    ],
    related: [
      { href: '/residency-and-visas/', label: 'The residency routes that remain open' },
      { href: '/immigration-and-foreigners-legal-procedures/', label: 'Immigration and legal procedures' },
      { href: '/tax-and-accountancy/', label: 'Spanish tax residence and obligations' },
    ],
  },

  'tax-and-accountancy': {
    metaTitle: "Spanish Property Tax for Non Residents | Pujol Wilkie",
    metaDesc: "Purchase taxes, Modelo 210, IBI and capital gains explained by a Sotogrande abogada. Includes the EU and third country split that now affects British owners.",
    faq: [
      {
            "q": "Do I have to file a Spanish tax return if my property is empty?",
            "a": "Yes. Non-resident owners file Modelo 210 whether or not the property is let. Where it sits empty, tax is charged on an imputed income derived from the cadastral value. Unfiled returns accumulate quietly and surface when the property is sold."
      },
      {
            "q": "How much tax do I pay on rental income as a non-resident?",
            "a": "Residents of the EU, Norway and Iceland pay nineteen per cent and may deduct expenses proportionate to the letting period. Residents of third countries pay twenty-four per cent on gross income with no deductions at all. Since Brexit that second category includes British owners, which materially reduces the net return."
      },
      {
            "q": "What is the valor de referencia?",
            "a": "A minimum taxable value set by the Catastro since 2022. If the price you agree is below it, transfer tax is calculated on the reference figure rather than what you actually paid. It can be challenged, but only after paying, so it is worth checking before agreeing a price."
      },
      {
            "q": "What is the 3% retention when I sell?",
            "a": "Where the seller is not tax resident in Spain, the buyer must retain three per cent of the price and pay it to the tax authority on account of the seller's capital gains. If your actual liability is lower, the excess is recoverable by filing within three months, though refunds typically take six to twelve."
      },
      {
            "q": "Which costs reduce my capital gains bill?",
            "a": "ITP paid on purchase, notary and registry fees, legal fees, and documented capital improvements all increase the acquisition value. Ordinary maintenance and redecoration do not. Keeping invoices for a new roof or an extension is often worth several thousand euros at sale."
      },
      {
            "q": "Do I have to declare assets I hold outside Spain?",
            "a": "If you are tax resident in Spain, yes, through Modelo 720 where assets exceed fifty thousand euros in a category. The penalty regime was found disproportionate by the Court of Justice of the EU in 2022 and has been revised, but the obligation to declare remains."
      }
    ],
    legacy: true, image: 'coastal-property-costa-del-sol', imageAlt: 'Coastal property and marina on the Costa del Sol', eyebrow: 'Practice area',
    title: 'Tax and Accountancy',
    intro: 'The taxes that arise on purchase, the ones that recur every year, and the returns that have to be filed whether or not you live here.',
    nav: 'Tax and accountancy',
    sections: [
      { h2: 'On purchase',
        p: ['A resale property in Andaluc\u00eda attracts transfer tax, ITP, currently at seven per cent. A new build bought from a developer attracts IVA at ten per cent plus stamp duty, AJD, instead. Notary, land registry and legal fees sit on top, and a reasonable overall budget is ten to twelve per cent above the purchase price.',
            'The valor de referencia, introduced in 2022 and set by the Catastro, establishes a minimum taxable value for the transaction. Where the agreed price falls below it, tax is assessed on the reference figure rather than what was actually paid. It can be challenged, but the challenge comes after payment, so the sensible time to check it is before agreeing a price.'] },
      { h2: 'Every year, as a non-resident owner',
        list: ['Modelo 210, the non-resident income tax return, whether or not the property is let',
               'IBI, the annual municipal property tax, charged by the town hall',
               'Community of owners fees, where the property forms part of a community',
               'Wealth tax, where the applicable thresholds are exceeded; the thresholds vary by autonomous community',
               'Refuse and other municipal charges, which vary by ayuntamiento'],
        p: ['Where the property sits empty, Modelo 210 still applies. Tax is charged on an imputed income derived from the cadastral value. It surprises owners that an unused property produces a liability at all, but it does, every year, and unfiled returns accumulate quietly.'] },
      { h2: 'If you let the property',
        p: ['Rental income is declared quarterly rather than annually. Residents of the European Union, Norway and Iceland may deduct expenses proportionate to the letting period and are taxed at nineteen per cent. Residents of third countries may deduct nothing at all and are taxed at twenty-four per cent on gross income.',
            'Since Brexit that distinction applies to British owners, and it has a material effect on the net return from a let property. Spanish courts have been asked to consider whether the disparity is compatible with the free movement of capital, and the position has been litigated more than once, so it is worth reviewing rather than assumed.',
            'Short term and holiday letting also carries a separate registration requirement in Andaluc\u00eda, and the national framework in this area has changed more than once recently.'] },
      { h2: 'On sale',
        p: ['Capital gains tax applies to the difference between acquisition and disposal values, adjusted for allowable costs such as ITP paid on purchase, notary and registry fees, legal fees and documented improvements. Ordinary maintenance does not count; keeping invoices for work that does is worth more than most owners realise.',
            'Where the seller is not resident in Spain, the buyer is obliged to retain three per cent of the price and pay it directly to the tax authority against the seller\u2019s liability. Where the actual liability is lower, the excess is recoverable, but only by filing Modelo 210 within the prescribed period with supporting documentation in order.',
            'Plusval\u00eda municipal, charged on the increase in the cadastral land value, is normally payable by the seller. Since the 2021 constitutional ruling and the reform that followed, two calculation methods exist and the more favourable may be chosen. Where there has been no real gain, no plusval\u00eda is due at all.'] },
      { h2: 'Assets held outside Spain',
        p: ['Spanish tax residents must declare assets held abroad worth more than fifty thousand euros in each category through Modelo 720. The penalty regime attached to it was found disproportionate by the Court of Justice of the European Union in 2022 and has since been revised, but the obligation to declare remains.',
            'Anyone moving to Spain with property, accounts or investments elsewhere should establish their position on this before the first filing deadline rather than after it.'] },
      { h2: 'How I work on tax matters',
        p: ['For most clients this is a continuing arrangement rather than a one-off. The returns are prepared and filed on time, the municipal charges are paid, and the position is reviewed when circumstances change, such as a letting beginning, a move to Spain, or a sale being contemplated.'] },
    ],
    related: [
      { href: '/selling-property/', label: 'Selling a property in Spain' },
      { href: '/property-management-services/', label: 'Property management' },
      { href: '/residency-and-visas/', label: 'Residency and tax residence' },
    ],
  },

  'immigration-and-foreigners-legal-procedures': {
    metaTitle: "Immigration Procedures in Spain | Pujol Wilkie",
    metaDesc: "NIE, empadronamiento, TIE and residence cards handled on your behalf, plus the post Brexit position for British nationals resident in Spain.",
    legacy: true, image: 'yachts-puerto-sotogrande', imageAlt: 'Yachts moored at Puerto de Sotogrande', eyebrow: 'Practice area',
    title: 'Immigration and Foreigners\u2019 Legal Procedures',
    intro: 'The administrative machinery that comes with living in, or owning something in, Spain as a foreign national.',
    nav: 'Immigration procedures',
    sections: [
      { h2: 'The paperwork behind everyday life',
        p: ['Most of what makes living here difficult is not the law but the administration: appointments that must be booked weeks ahead and disappear within minutes of release, documents that must be legalised or apostilled and sworn translated, and offices that will not accept a submission with a single field wrong.',
            'None of it is intellectually hard. It is simply unforgiving of small errors, and each error costs another appointment. I handle these procedures on behalf of clients, generally under a power of attorney so that attendance in person is not required.'] },
      { h2: 'Procedures handled',
        list: ['NIE, the foreigner identification number required for almost every transaction',
               'Empadronamiento, registration with the town hall where you live, which many other procedures depend on',
               'TIE, the physical residence card, and its renewals',
               'Residence certificates for EU nationals and registration on the Central Register of Foreigners',
               'Driving licence exchange and vehicle registration or import',
               'Legalisation, apostille and sworn translation of foreign documents',
               'Social security registration and the alta as aut\u00f3nomo where relevant',
               'Healthcare registration and the tarjeta sanitaria'] },
      { h2: 'For UK nationals since Brexit',
        p: ['British citizens who were legally resident in Spain before 31 December 2020 retain their rights under the Withdrawal Agreement, evidenced by the TIE marked with the relevant article. Those rights are broadly equivalent to the position before Brexit and are not affected by later changes to the general immigration rules.',
            'Those who arrived afterwards are third country nationals and need a visa route in the same way as any other non-EU national. The distinction matters a great deal in practice and is worth confirming rather than assuming, particularly for people who spent time here before 2021 without formally registering.',
            'Time spent in Spain without residence is now limited by the ninety days in any one hundred and eighty rule, which catches out owners of holiday homes who previously came and went freely.'] },
      { h2: 'Documents from outside Spain',
        p: ['Almost every foreign document submitted to a Spanish authority needs an apostille under the Hague Convention and a translation by a sworn translator recognised in Spain. A translation prepared abroad, however competent, is usually rejected.',
            'Certificates such as criminal records and birth certificates also carry validity periods, commonly three or six months, which means gathering them too early is as much of a problem as gathering them too late. Sequencing matters more than speed.'] },
      { h2: 'Where things typically go wrong',
        p: ['The most common failures are procedural rather than substantive: an appointment booked at the wrong office, a certificate that expired between submission and review, a document apostilled but not translated, or a resoluci\u00f3n that arrives while the applicant is out of the country and goes unanswered within the deadline.',
            'Where an application has already been refused, there is normally a short window to lodge a recurso, and that window is easy to miss. If a refusal has arrived, it is worth raising immediately rather than after considering the options.'] },
    ],
    related: [
      { href: '/residency-and-visas/', label: 'Residency and visa applications' },
      { href: '/spanish-golden-visa/', label: 'The Spanish Golden Visa' },
      { href: '/gibraltar-and-spain/', label: 'Gibraltar and Spain' },
    ],
  },

  'property-management-services': {
    metaTitle: "Property Management in Sotogrande | Pujol Wilkie",
    metaDesc: "Utilities, community fees, insurance and keyholding for owners who are not in Spain year round, plus representation at the junta de propietarios.",
    legacy: true, image: 'property-keys-handover-spain', imageAlt: 'Keys handed over on completion of a Spanish property purchase', eyebrow: 'Practice area',
    title: 'Property Management Services',
    intro: 'Keeping a Spanish property running properly when you are not here for most of the year.',
    nav: 'Property management',
    sections: [
      { h2: 'What an absent owner needs covered',
        list: ['Utility contracts, transfers into your name, meter readings and direct debits',
               'Community of owners fees, correspondence and representation at meetings',
               'Buildings and contents insurance, placed and renewed, with claims handled',
               'IBI and refuse charges paid on time',
               'Keyholding, access for trades and periodic inspection',
               'Coordination of repairs and oversight of contractors',
               'Receipt and handling of official correspondence, which is delivered on paper and to the property'] },
      { h2: 'Why it tends to matter',
        p: ['Unpaid community fees and municipal charges do not simply lapse. They accumulate against the property and surface at the point of sale, sometimes years later and usually at the least convenient moment. Keeping them current is considerably cheaper than resolving them under time pressure with a buyer waiting.',
            'A community of owners can also place a charge on a property for arrears and, in serious cases, pursue enforcement. Owners who assume that nothing happens while they are away are usually right until the moment they are not.'] },
      { h2: 'The community of owners',
        p: ['Where a property forms part of a community, ownership brings both a share of common expenses and a vote at the junta. Decisions taken there about lift replacement, roof work, pool renovation or facade repair produce derramas, one-off levies which can be substantial and are binding on owners whether or not they attended.',
            'Notices are sent in Spanish, to the address the community holds, and the window to challenge a resolution is short. Representation at meetings means decisions are not simply discovered afterwards through an unexpected bill.'] },
      { h2: 'Letting the property',
        p: ['Owners who let, whether long term or as a holiday rental, take on further obligations: registration of tourist accommodation in Andaluc\u00eda, quarterly tax filings, and compliance with rules on guest registration.',
            'The national framework for short term lets has changed more than once recently and continues to move. Anyone considering letting should confirm the current position rather than relying on what applied when they bought.'] },
      { h2: 'How it works in practice',
        p: ['This is usually an annual arrangement alongside the tax filings, so that a single office holds the utility accounts, the community relationship, the insurance and the tax position. The practical benefit is that nothing is assumed to be someone else\u2019s responsibility, which is where most problems with absent ownership begin.'] },
    ],
    related: [
      { href: '/full-client-service/', label: 'Full client service' },
      { href: '/tax-and-accountancy/', label: 'Tax and accountancy' },
    ],
  },

  'full-client-service': {
    metaTitle: "Full Client Service | Sotogrande Abogada",
    metaDesc: "Property, tax, residency, wills and administration handled by one office for as long as you own something in Spain, including work under power of attorney.",
    legacy: true, image: 'polo-sotogrande', imageAlt: 'Polo match at Sotogrande', eyebrow: 'How I work',
    title: 'Full Client Service',
    intro: 'Legal, fiscal and administrative matters handled together, by the same office, for as long as you own something here.',
    nav: 'Full client service',
    sections: [
      { h2: 'One office, the whole relationship',
        p: ['Most clients arrive with a single transaction in mind and stay for everything that follows it. The purchase leads to the tax filings, the tax filings lead to a residence application, and years later the same office handles the sale or the inheritance.',
            'Keeping all of it in one place means nothing is assumed to have been done by somebody else, which is where most problems in cross-border matters begin. It also means the person advising on the sale is the one who has the acquisition file, which matters a great deal when capital gains is being calculated fifteen years later.'] },
      { h2: 'What that covers in practice',
        list: ['Conveyancing on purchase and sale',
               'Annual tax compliance for residents and non-residents',
               'Residence, visa and immigration procedures',
               'Wills, inheritance and succession planning in Spain',
               'Property management and administration',
               'Representation under power of attorney where you are abroad',
               'Cross-border matters between Spain and Gibraltar'] },
      { h2: 'Wills and succession',
        p: ['Anyone owning property in Spain should hold a Spanish will covering their Spanish assets. Without one, the succession is handled under the rules that apply by default, and the process for heirs is slower, more expensive and conducted entirely in Spanish.',
            'EU Regulation 650/2012 allows a national of another country to elect the law of their nationality to govern their succession, which for common law nationals avoids the Spanish forced heirship rules. The election must be made expressly, and a Spanish will is the natural place to make it. It is a short document and an inexpensive one; the cost of not having it falls entirely on the people left behind.'] },
      { h2: 'Working remotely',
        p: ['A general power of attorney, granted before a Spanish notary or at a consulate, allows most matters to be dealt with without your presence: signing at completion, filing returns, attending appointments, dealing with utilities and banks.',
            'It is worth arranging while you are here for another reason rather than at the point it becomes urgent, since granting one from abroad requires apostille and translation and adds weeks.'] },
      { h2: 'How fees work',
        p: ['Conveyancing is normally quoted as a percentage of the purchase price or a fixed fee, agreed in writing before work starts. Annual compliance is quoted per return. Ad hoc matters are quoted before instruction.',
            'The first conversation costs nothing and often ends with a view on whether a lawyer is needed at all. Sometimes the answer is that it is not.'] },
    ],
    related: [
      { href: '/buying-property/', label: 'Buying a property' },
      { href: '/property-management-services/', label: 'Property management' },
      { href: '/about/', label: 'About Esther Pujol Wilkie' },
    ],
  },

  // ---- new services, new URLs ----
  'buying-property': {
    metaTitle: "Buying Property in Spain: Lawyer in Sotogrande",
    metaDesc: "Independent conveyancing for buyers, from NIE to keys. The searches, the arras contract clauses that cost people deposits, real timescales and true costs.",
    faq: [
      {
            "q": "How long does it take to buy a property in Spain?",
            "a": "A straightforward resale generally takes six to ten weeks from signing the reservation contract to completion at the notary. What extends it is almost never the conveyancing itself: it is waiting for an NIE appointment, a mortgage valuation, or the resolution of something found in the searches such as an unregistered extension or an incomplete inheritance in the seller's title."
      },
      {
            "q": "Do I need to be in Spain to buy?",
            "a": "No. With a power of attorney I can complete the entire purchase on your behalf, including signing at the notary. It can be granted before a Spanish notary, at a Spanish consulate, or before a local notary with an apostille and sworn translation. A significant proportion of purchases complete without the buyer travelling."
      },
      {
            "q": "How much should I budget beyond the purchase price?",
            "a": "Ten to twelve per cent for a resale in Andalucía. Transfer tax (ITP) is currently seven per cent, with notary, land registry and legal fees making up the rest. A new build from a developer attracts IVA at ten per cent plus stamp duty instead, which works out slightly higher."
      },
      {
            "q": "What is the contrato de arras and how much is the deposit?",
            "a": "It is the reservation contract, and the deposit is usually between three and ten per cent of the price. Under arras penitenciales a buyer who withdraws forfeits the deposit and a seller who withdraws repays double. Not every contract presented follows that model, which is why it should be read before signature rather than after."
      },
      {
            "q": "What happens if my mortgage is refused after I have paid the deposit?",
            "a": "Without an express financing condition in the reservation contract, a refused mortgage is the buyer's problem and the deposit is lost. This is one of the two clauses I always negotiate, and it is the most common way foreign buyers lose money in Spain."
      },
      {
            "q": "Can I buy if I am not an EU citizen?",
            "a": "Yes. There is no restriction on foreign nationals buying property in Spain, at any value. What changed in April 2025 is that a purchase no longer grants any residence right, since the Golden Visa was repealed. Buying and residency are now entirely separate questions."
      },
      {
            "q": "Do I need a Spanish bank account?",
            "a": "In practice yes, for paying the purchase, the taxes and the ongoing utilities and community fees. It is worth opening it early, because banks apply anti money laundering checks on the origin of funds and those take longer than people expect."
      }
    ],
    image: 'villa-pool-costa-del-sol', imageAlt: 'Villa with pool on the Costa del Sol, typical of resale purchases in Sotogrande', eyebrow: 'Service',
    title: 'Buying a Property in Spain',
    intro: 'Independent conveyancing from the first search to the keys, acting only for the buyer.',
    nav: 'Buying property',
    sections: [
      { h2: 'Nobody else in the transaction is working for you',
        p: ['This is the point most foreign buyers discover late. The estate agent is paid by the seller on completion, so their interest is in the sale closing. The notary is a public official whose function is to witness the deed and confirm identities, not to investigate whether the property has an undeclared extension or unpaid community fees. The developer\u2019s lawyer acts for the developer.',
            'That leaves the buyer with nobody checking the property unless they instruct someone themselves. It is the single largest structural difference between buying here and buying in the United Kingdom or Ireland, and it is why independent representation matters more in Spain, not less.'] },
      { h2: 'Before any money moves',
        p: ['The reservation contract, the contrato de arras, is usually where a buyer is first asked to part with funds, commonly between three and ten per cent of the price. It is frequently signed within days of an offer being accepted and often before anyone independent has read it.',
            'Under arras penitenciales the buyer who withdraws forfeits the deposit and the seller who withdraws repays double. Most buyers assume that symmetry applies. Arras confirmatorias and arras penales work differently, and the label used in the document is not always the one that matches its actual terms.',
            'Two clauses matter more than the rest: what happens if your mortgage is refused, and what happens if the seller cannot complete on time because a charge has not been cancelled. Without an express financing condition, a refused mortgage is your problem and the deposit is gone.'] },
      { h2: 'What the searches actually cover',
        list: ['Nota simple from the Land Registry: the registered owner, the description of the property and every charge inscribed against it',
               'Outstanding mortgages, embargoes and pending judicial proceedings',
               'Community of owners certificate confirming fees are current, since arrears follow the property for the current year and three preceding ones',
               'IBI receipts and any municipal charges outstanding',
               'Planning position at the town hall, including whether extensions, pools and terraces are licensed and declared',
               'Licencia de primera ocupación where the property is relatively new',
               'Catastro against registry: the two frequently disagree on surface area and boundaries, and reconciling them now avoids difficulty at resale',
               'Energy performance certificate, which the seller must provide'] },
      { h2: 'The sequence, and roughly how long each part takes',
        p: ['An NIE for each buyer comes first, since almost nothing can be done without one. Appointment availability drives the timing more than the paperwork does.',
            'Due diligence and contract review run in parallel with arranging a Spanish bank account and planning the transfer of funds. Where a mortgage is involved the bank\u2019s own valuation and approval usually set the pace.',
            'Completion takes place before the notary. Payment, signature and handover of keys happen in the same appointment. Immediately afterwards the taxes are paid and the deed is submitted for inscription at the Land Registry, which is what makes your ownership effective against third parties.',
            'A straightforward resale purchase generally runs six to ten weeks from reservation to completion. Anything with an irregularity in the registry, an inheritance in the seller\u2019s title or an unlicensed building takes longer.'] },
      { h2: 'What it costs beyond the price',
        p: ['Budget ten to twelve per cent above the purchase price for a resale in Andaluc\u00eda. Transfer tax, ITP, is currently seven per cent. A new build from a developer attracts IVA at ten per cent plus stamp duty instead. Notary fees, land registry fees and legal fees make up the remainder.',
            'One figure catches people out. The valor de referencia sets a minimum taxable value for the transaction. Where the agreed price is below it, tax is assessed on the reference figure rather than what you actually paid. That is worth checking before you agree a price, not after.'] },
      { h2: 'If you are not in Spain',
        p: ['A power of attorney allows the entire purchase to be completed on your behalf, including signature at the notary. It can be granted before a Spanish notary, at a Spanish consulate, or before a local notary with an apostille and sworn translation.',
            'A significant proportion of purchases complete without the buyer travelling at all. It is worth arranging early rather than at the point it becomes urgent.'] },
      { h2: 'After completion',
        p: ['Ownership registration, transfer of utility contracts, notification to the community of owners and the change of name on the IBI all follow. From the first full year of ownership you become liable for the annual non-resident tax return, whether or not the property is let.',
            'Most clients ask me to handle these as a continuing matter rather than dealing with each Spanish institution themselves from another country.'] },
    ],
    related: [
      { href: '/property-law/', label: 'Property law in Spain: the legal framework' },
      { href: '/tax-and-accountancy/', label: 'Purchase taxes and annual obligations' },
      { href: '/residency-and-visas/', label: 'If residency is part of the plan' },
    ],
  },

  'selling-property': {
    metaTitle: "Selling Property in Spain | Sotogrande Lawyer",
    metaDesc: "Capital gains, the 3% non resident retention and how to recover it, plusvalia after the 2021 reform, and getting your proceeds out of Spain cleanly.",
    faq: [
      {
            "q": "Why is the buyer withholding 3% of my sale price?",
            "a": "Because you are not tax resident in Spain. The buyer is legally obliged to retain it and pay it to the tax authority against your capital gains liability. It is not negotiable, and a buyer who fails to do it becomes liable for the amount themselves."
      },
      {
            "q": "How do I get the 3% retention back?",
            "a": "By filing Modelo 210 within three months of the retention being paid, with the acquisition documentation supporting your actual gain or loss. Refunds are not automatic and six to twelve months is normal, which is why the file should be in order before the sale rather than reconstructed afterwards."
      },
      {
            "q": "Do I have to pay plusvalía municipal?",
            "a": "Usually, as the seller, though the parties can agree otherwise. Since the 2021 Constitutional Court ruling two calculation methods exist and you may choose the more favourable. Where there has been no real increase in land value, none is due, but proving that requires both deeds."
      },
      {
            "q": "What documents do I need before putting the property on the market?",
            "a": "An energy performance certificate is a legal requirement to market it. Beyond that: a clean nota simple, a community fee certificate, IBI receipts, the licencia de primera ocupación where applicable, and evidence of your acquisition cost and improvements."
      },
      {
            "q": "Can I sell without coming to Spain?",
            "a": "Yes, under a power of attorney. For a non-resident seller it is usually the practical route, since the tax filings and any refund claim continue for months after completion."
      }
    ],
    image: 'property-keys-handover-spain', imageAlt: 'Keys handed over on completion of a Spanish property purchase', eyebrow: 'Service',
    title: 'Selling a Property in Spain',
    intro: 'Capital gains, the non-resident retention, and getting the proceeds out cleanly.',
    nav: 'Selling property',
    sections: [
      { h2: 'The three per cent retention',
        p: ['Where the seller is not tax resident in Spain, the buyer must retain three per cent of the price and pay it to the tax authority using Modelo 211, on account of the seller\u2019s capital gains liability. This is not optional and not negotiable; a buyer who fails to do it becomes liable for the amount themselves.',
            'Where the actual liability is lower than the retention, or where the sale produced a loss, the excess is recoverable by filing Modelo 210 within three months of the retention being paid. Refunds are not automatic and are not quick. Six to twelve months is normal, and the tax authority will ask for the acquisition documentation, so it needs to be in order before the sale rather than reconstructed afterwards.'] },
      { h2: 'Preparing the file early',
        list: ['Nota simple confirming the registered position is clean and matches what you are selling',
               'Community fee certificate confirming nothing is outstanding, which the notary will require',
               'IBI receipts and the energy performance certificate, which is a legal requirement to market the property',
               'Licencia de primera ocupaci\u00f3n where applicable',
               'Documentary evidence of acquisition cost and every allowable expense',
               'Certificates showing utility accounts are current',
               'Where the property was inherited, evidence the succession was properly completed and taxed'] },
      { h2: 'What reduces the gain',
        p: ['Capital gains is calculated on the difference between acquisition and transmission values, but both figures can be adjusted. On the acquisition side, ITP paid on purchase, notary and registry fees, and legal fees all increase the acquisition value. So does documented capital improvement, though ordinary maintenance and redecoration do not.',
            'On the disposal side, estate agency commission and legal fees on the sale reduce the transmission value. The distinction between improvement and maintenance is where most of the argument happens, and invoices matter more than recollection. Owners who have kept paperwork for a new roof or an extension usually find it worth several thousand euros.'] },
      { h2: 'Plusval\u00eda municipal',
        p: ['The municipal capital gains tax is charged on the increase in the cadastral land value and is normally payable by the seller, though the parties can agree otherwise. Since the Constitutional Court ruling of 2021 and the reform that followed, two calculation methods exist and the taxpayer may choose the more favourable.',
            'Where there has been no real increase in value between purchase and sale, no plusval\u00eda is due. Proving that requires the acquisition and disposal deeds, which is another reason the file matters.'] },
      { h2: 'Getting the money out',
        p: ['Transfers out of Spain above certain thresholds are reportable, and banks will ask for evidence of the origin of funds under anti money laundering rules. A sale deed and the corresponding tax filings satisfy that, but the request tends to arrive at the least convenient moment if nobody has anticipated it.',
            'Where the proceeds are being converted to another currency, the exchange arrangement is worth deciding in advance rather than accepting the bank\u2019s counter rate on the day.'] },
      { h2: 'If you are not in Spain',
        p: ['As with a purchase, a power of attorney allows the sale to be completed on your behalf, including signature at the notary and the subsequent tax filings. For a non-resident seller this is usually the practical route, since the tax work continues for months after completion.'] },
    ],
    related: [
      { href: '/tax-and-accountancy/', label: 'Tax and accountancy' },
      { href: '/property-law/', label: 'Property law in Spain' },
    ],
  },

  'residency-and-visas': {
    metaTitle: "Spanish Residency and Visas in 2026 | Pujol Wilkie",
    metaDesc: "Non lucrative, digital nomad, entrepreneur and family routes compared, with the income thresholds and the 183 day tax residence rule that follows each one.",
    faq: [
      {
            "q": "Which visa is right for me?",
            "a": "It depends on how you earn rather than what you own. Passive income points to the non-lucrative visa. Remote work for companies outside Spain points to the digital nomad visa. A genuine business here points to the self-employment or entrepreneur routes. Each has different income thresholds and presence expectations."
      },
      {
            "q": "How much income do I need for a non-lucrative visa?",
            "a": "The threshold is set as a multiple of the IPREM indicator with an additional amount for each dependent family member, and it must come from savings, pensions, rentals or investments rather than employment. Because IPREM is revised, the current figure should be confirmed at the point of applying."
      },
      {
            "q": "Can I work remotely on a non-lucrative visa?",
            "a": "No, that is the distinction between it and the digital nomad visa. The non-lucrative route requires that you do not work, which is why remote workers should be applying under the digital nomad framework instead."
      },
      {
            "q": "How long does an application take?",
            "a": "It varies considerably by consulate and by route. The document gathering is usually the longer part, because foreign certificates need apostille and sworn translation and carry validity periods of three or six months, so sequencing matters more than speed."
      },
      {
            "q": "Will I become tax resident in Spain?",
            "a": "If you spend more than 183 days a year here, generally yes, on worldwide income. Having your main centre of economic interests in Spain can produce the same result below that threshold. This should be modelled before applying, not after arriving."
      }
    ],
    image: 'spanish-visa-application', imageAlt: 'Spanish visa application form being completed', eyebrow: 'Service',
    title: 'Residency and Visa Applications',
    intro: 'The routes that remain open in 2026, and which one fits your circumstances.',
    nav: 'Residency and visas',
    sections: [
      { h2: 'Choosing the route',
        p: ['Since the investor visa closed in April 2025, residence in Spain depends on how you earn rather than what you own. The practical question is whether your income is passive, remote, self-employed or from Spanish employment, and how much of the year you intend to be here.',
            'Almost every route now expects real presence. The old assumption that Spanish residence could be held while living elsewhere no longer holds, and that single change reshapes the decision for most people who ask.'] },
      { h2: 'Non-lucrative visa',
        p: ['For those with sufficient passive income who will not work in Spain. The income threshold is set as a multiple of the IPREM indicator, with an additional amount for each dependent family member, and must be evidenced from savings, pensions, rental income or investments rather than employment.',
            'Private health insurance with full cover and no co-payment is required, as is a criminal record certificate legalised and translated. The permit is initially for one year and renewable in two-year periods. It expects residence of more than 183 days a year, which makes the holder tax resident in Spain.'] },
      { h2: 'Digital nomad visa',
        p: ['For remote workers employed by, or contracting with, companies outside Spain. Employees generally need to show the employment relationship has existed for some months and that the employer permits remote work. Self-employed applicants may work with Spanish clients only up to a limited proportion of their turnover.',
            'The income threshold is linked to the national minimum wage. The significant attraction is access to a special tax regime for inbound workers, which can substantially reduce the effective rate for a fixed number of years, though eligibility is narrower than the general description suggests and should be confirmed before applying rather than assumed.'] },
      { h2: 'Self-employment and entrepreneur routes',
        p: ['The self-employment route requires a business plan, evidence of the qualifications or licences needed for the activity, and sufficient investment. The entrepreneur route under Law 14/2013 is for projects assessed as being of general interest, judged on innovation, job creation and economic impact, and is reported on by ENISA before a decision is taken.',
            'These are more demanding to prepare than the passive routes but they suit people who genuinely intend to trade here.'] },
      { h2: 'Other routes',
        list: ['EU Blue Card, for highly qualified employment with a recognised degree and a salary above the applicable threshold',
               'Family reunification, where a family member already holds Spanish residence',
               'Family member of an EU citizen, which is procedurally distinct and generally faster',
               'Arraigo, for those who have already been in Spain for a qualifying period, in several forms',
               'Student authorisations, which can in some circumstances be modified to work authorisations'] },
      { h2: 'Tax follows residence',
        p: ['Any route that involves spending more than 183 days a year in Spain will generally make you tax resident on worldwide income. Having your main centre of economic interests here can produce the same outcome even below that threshold.',
            'That means income, pensions, investments and gains arising anywhere become reportable in Spain, subject to double taxation treaties. Assets held abroad above the reporting thresholds must be declared through Modelo 720.',
            'Modelling this before an application is filed, rather than after arrival, avoids the most expensive category of mistake. It is considerably easier to structure matters in advance than to unwind them once residence has begun.'] },
      { h2: 'How the process runs',
        p: ['Most routes are applied for either at a Spanish consulate in your country of residence or, in some cases, from within Spain. Once approved, you enter, obtain the TIE card and register with the town hall.',
            'Timescales vary considerably by consulate and by route, and documents from outside Spain generally need apostille and sworn translation, which takes longer than people plan for. Starting the document gathering early is usually the difference between a smooth application and a missed intake.'] },
    ],
    related: [
      { href: '/spanish-golden-visa/', label: 'What happened to the Golden Visa' },
      { href: '/immigration-and-foreigners-legal-procedures/', label: 'Immigration procedures' },
      { href: '/tax-and-accountancy/', label: 'Spanish tax residence' },
    ],
  },

  'gibraltar-and-spain': {
    metaTitle: "Gibraltar and Spain Cross Border Legal Advice",
    metaDesc: "Frontier workers, Gibraltar companies holding Spanish property and Modelo 720, advised by a lawyer who has practised in the UK, Gibraltar and Spain.",
    faq: [
      {
            "q": "I live in Spain and work in Gibraltar. Where do I pay tax?",
            "a": "Generally you are tax resident in Spain on worldwide income while paying Gibraltar social insurance on the employment. The 2019 tax treaty between Spain and the UK in respect of Gibraltar sets out tie-breaker rules for residence and provides for exchange of information between both administrations."
      },
      {
            "q": "I hold Spanish property through a Gibraltar company. Is that still worthwhile?",
            "a": "Considerably less than it once was. The 2019 treaty allows a Gibraltar company owning Spanish assets to be treated as Spanish tax resident, and Spain applies an annual levy on real estate held by entities in jurisdictions it classifies as non-cooperative. Whether to unwind such a structure needs both jurisdictions considered together."
      },
      {
            "q": "Do I need to declare my Gibraltar bank account in Spain?",
            "a": "If you are tax resident in Spain and your assets abroad exceed the reporting thresholds, yes, through Modelo 720. The treaty's information exchange provisions mean arrangements that were once informal are now visible to both administrations."
      },
      {
            "q": "Has the frontier situation been settled since Brexit?",
            "a": "The treaty framework governing Gibraltar's relationship with the EU has been under negotiation for years and arrangements have been subject to transitional measures throughout. Anything time sensitive should be confirmed at the point of decision rather than relying on a general description."
      }
    ],
    image: 'rock-of-gibraltar-from-spain', imageAlt: 'The Rock of Gibraltar seen from the Spanish coast near Sotogrande', eyebrow: 'Service',
    title: 'Gibraltar and Spain',
    intro: 'Cross-border matters for frontier workers, Gibraltar companies and residents moving between the two jurisdictions.',
    nav: 'Gibraltar and Spain',
    sections: [
      { h2: 'Two systems, one commute',
        p: ['Sotogrande sits twenty minutes from the frontier, and a substantial number of people here live under one system and work or hold assets under the other. Having practised in the United Kingdom, Gibraltar and Spain, I advise on where the two regimes meet rather than on only one side of the line.',
            'Most of the difficulty in this area comes from advisers who understand one jurisdiction thoroughly and the other by reputation. The questions that cause trouble almost always sit in the gap between them.'] },
      { h2: 'Frontier workers',
        p: ['Someone resident in Spain and employed in Gibraltar is generally tax resident in Spain on worldwide income while paying Gibraltar social insurance on the employment. The 2019 tax treaty between Spain and the United Kingdom in respect of Gibraltar, the first of its kind, sets out tie-breaker rules for determining residence and provides for exchange of information between the two administrations.',
            'The practical consequence is that arrangements which were once informal are now visible to both sides. Anyone who has been treating the position loosely should review it rather than wait to be asked about it.'] },
      { h2: 'Matters commonly arising',
        list: ['Frontier workers resident in Spain and employed in Gibraltar',
               'Spanish tax residence and reporting obligations for Gibraltar source income',
               'Gibraltar companies holding Spanish real estate, and the reporting that follows',
               'Modelo 720 declarations of assets held outside Spain',
               'Relocation in either direction, and the residence position that results',
               'Succession where assets sit on both sides of the frontier'] },
      { h2: 'Gibraltar companies holding Spanish property',
        p: ['Structures of this kind were once common and are now considerably less attractive. The 2019 treaty contains a specific rule under which a Gibraltar company owning Spanish assets may be treated as Spanish tax resident, and Spain applies an annual levy on real estate held by entities resident in jurisdictions it classifies as non-cooperative.',
            'Where such a structure already exists, the useful question is usually whether to unwind it and what the disposal consequences of doing so would be. That calculation needs both jurisdictions considered together, and it rarely produces the same answer twice.'] },
      { h2: 'The current position',
        p: ['The treaty framework governing the relationship between Gibraltar and the European Union has been under negotiation since Brexit and has taken a considerable time to settle. Arrangements affecting the frontier, customs and movement of people have been subject to transitional measures throughout.',
            'Anything time sensitive in this area is worth confirming at the point of decision rather than relying on a general description, including this one.'] },
    ],
    related: [
      { href: '/tax-and-accountancy/', label: 'Tax and accountancy' },
      { href: '/residency-and-visas/', label: 'Residency and visas' },
      { href: '/immigration-and-foreigners-legal-procedures/', label: 'Immigration procedures' },
    ],
  },
};
export default pages;
