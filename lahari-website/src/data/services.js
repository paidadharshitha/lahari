// All 15 practice areas. slug powers the /services/:slug route.
// Each service has icon (FontAwesome class), title, short description, and
// longer content blocks for the individual service pages.

export const SERVICES = [
  /* ──────────────── 1. Land Disputes ──────────────── */
  {
    slug: 'land-disputes',
    icon: 'fas fa-map-location-dot',
    title: 'Land Disputes',
    subtitle: 'Resolving agricultural land, survey boundary, and revenue record disputes with thorough documentation and aggressive litigation.',
    short: 'Specialised land dispute resolution — title conflicts, boundary disputes, revenue record corrections, and land acquisition challenges.',
    overview: [
      'Land disputes in India are among the most complex and contentious legal matters, often involving overlapping claims, ancestral rights, and evolving revenue records. Lahari Legal Associates has deep expertise in resolving land disputes across Telangana.',
      'Our land disputes practice covers boundary and survey disputes, title conflicts, revenue record corrections, ancestral land partitions, government land acquisition challenges, and encroachment matters.',
      'We combine thorough document verification with revenue law expertise and aggressive courtroom advocacy to protect your land rights and achieve favourable outcomes.',
    ],
    process: [
      { title: 'Document & Record Verification', body: 'Comprehensive examination of title deeds, revenue records, survey maps, Dharani entries, and historical documents.' },
      { title: 'Revenue & Survey Proceedings', body: 'Representation before revenue authorities, survey departments, and tribunal proceedings for record corrections and boundary determinations.' },
      { title: 'Civil Litigation', body: 'Filing suits for declaration, permanent injunction, partition, and possession before civil courts with strong documentary evidence.' },
      { title: 'Acquisition Challenges', body: 'Challenging land acquisition proceedings on grounds of inadequate compensation, improper procedure, or jurisdictional defects.' },
    ],
    benefits: ['Deep expertise in Telangana revenue laws', 'Dharani portal proficiency and digital record analysis', 'Strong relationships with survey and revenue authorities', 'Track record of favourable land dispute outcomes'],
    faqs: [
      { q: 'How do you handle ancestral land partition disputes?', a: 'We trace title chains and revenue records, identify co-parcener shares, and pursue partition through negotiation or court-ordered sale and division as appropriate.' },
      { q: 'Can you correct errors in revenue records or Dharani?', a: 'Yes. We represent clients before revenue authorities to correct entries, settle boundaries, and formalise record changes.' },
      { q: 'What if the government is acquiring my land?', a: 'We challenge acquisition on grounds of inadequate compensation or procedural defects and pursue higher compensation before the appropriate authorities and courts.' },
    ],
  },

  /* ──────────────── 2. Loan Recovery & Harassment Prevention ──────────────── */
  {
    slug: 'loan-recovery-harassment',
    icon: 'fas fa-hand-holding-dollar',
    title: 'Loan Recovery & Harassment Prevention',
    subtitle: 'Protecting borrowers from illegal recovery tactics, harassment by lenders, and ensuring fair resolution of loan-related disputes.',
    short: 'Defending borrowers against illegal recovery agents, bank harassment, and unfair lending practices with strong legal protection and consumer rights advocacy.',
    overview: [
      'Loan recovery harassment is a serious and growing problem in India. Borrowers facing financial difficulties are often subjected to illegal intimidation, threats, and coercive tactics by recovery agents acting on behalf of banks, NBFCs, and private moneylenders.',
      'Lahari Legal Associates provides robust legal protection for borrowers, ensuring that recovery efforts comply with RBI guidelines, the Securitisation Act, and consumer protection laws. We intervene to stop harassment and hold lenders accountable.',
      'Whether you are dealing with abusive recovery agents, wrongful repossession, or unfair lending terms, our team provides swift legal relief and works to resolve the underlying loan dispute on fair terms.',
    ],
    process: [
      { title: 'Harassment Assessment', body: 'Reviewing the nature and extent of harassment, documenting evidence of threats, abuse, or illegal recovery tactics.' },
      { title: 'Legal Notice to Lender', body: 'Issuing formal notices demanding an end to harassment and compliance with RBI guidelines and applicable laws.' },
      { title: 'Consumer & Regulatory Complaints', body: 'Filing complaints with the Banking Ombudsman, RBI, and consumer forums for recovery violations and unfair practices.' },
      { title: 'Court Relief & Resolution', body: 'Seeking injunctions against harassment, stays on coercive recovery, and negotiating fair settlement of the underlying loan dispute.' },
    ],
    benefits: ['Immediate legal intervention to stop harassment', 'Strong knowledge of RBI recovery guidelines', 'Representation before Banking Ombudsman and consumer forums', 'Negotiation for fair loan settlement terms'],
    faqs: [
      { q: 'Can I stop recovery agents from calling and visiting me?', a: 'Yes. We issue legal notices to the lender demanding compliance with RBI guidelines and seek injunctions against illegal recovery tactics. Continued harassment after notice is a punishable offence.' },
      { q: 'What if the bank has seized my property wrongfully?', a: 'We challenge wrongful repossession under the SARFAESI Act and Securitisation Act, seeking restoration of possession and compensation for any loss suffered.' },
      { q: 'Can I negotiate a settlement if I am unable to repay the full loan?', a: 'Absolutely. We negotiate with lenders for restructuring, one-time settlements, or other relief mechanisms to ensure fair resolution without harassment.' },
    ],
  },

  /* ──────────────── 3. Insolvency & Bankruptcy ──────────────── */
  {
    slug: 'insolvency-bankruptcy',
    icon: 'fas fa-building-columns',
    title: 'Insolvency & Bankruptcy',
    subtitle: 'Strategic counsel for corporate insolvency resolution, personal bankruptcy proceedings, and creditor-debtor disputes under IBC.',
    short: 'Expert representation in insolvency proceedings, bankruptcy filings, and corporate debt resolution under the Insolvency and Bankruptcy Code.',
    overview: [
      'The Insolvency and Bankruptcy Code (IBC) has transformed the resolution of distressed assets and debt disputes in India. Lahari Legal Associates provides comprehensive legal services for all aspects of insolvency and bankruptcy proceedings.',
      'Our team represents both creditors and debtors in corporate insolvency resolution processes (CIRP), personal insolvency proceedings, and liquidation matters. We also advise on avoidance transactions, moratorium periods, and resolution plan preparation.',
      'Whether you are a creditor seeking to recover dues through the NCLT, a corporate debtor navigating resolution, or an individual facing personal insolvency, our team provides clear, strategic counsel throughout the process.',
    ],
    process: [
      { title: 'Insolvency Assessment', body: 'Evaluating the financial position, debt structure, and viability of insolvency or bankruptcy proceedings for the specific situation.' },
      { title: 'NCLT Representation', body: 'Filing and contesting petitions before the National Company Law Tribunal for admission, resolution, and claims adjudication.' },
      { title: 'Resolution & Negotiation', body: 'Preparing and negotiating resolution plans, conducting meetings of creditors and committee of creditors (CoC) proceedings.' },
      { title: 'Liquidation & Recovery', body: 'Managing liquidation proceedings and pursuing asset recovery to maximise returns for stakeholders.' },
    ],
    benefits: ['Extensive IBC and NCLT practice experience', 'Representation for both creditors and debtors', 'Strong resolution plan drafting capability', 'Strategic advice on pre-insolvency restructuring'],
    faqs: [
      { q: 'When should a creditor file for insolvency?', a: 'A creditor (financial or operational) may file a petition before the NCLT when a default of over \u20b91 lakh has occurred. We assess the strength of the claim and the likelihood of admission before proceeding.' },
      { q: 'Can a debtor challenge an insolvency petition?', a: 'Yes. Debtors can contest the existence of a default, dispute the debt, or challenge the maintainability of the petition. We mount vigorous defences to protect our clients from inappropriate proceedings.' },
      { q: 'What happens during the moratorium period?', a: 'Once insolvency proceedings are admitted, a moratorium prohibits filing of suits and recovery actions against the debtor. This provides breathing room while the resolution process is underway.' },
    ],
  },

  /* ──────────────── 4. Consumer Protection Law ──────────────── */
  {
    slug: 'consumer-protection',
    icon: 'fas fa-user-shield',
    title: 'Consumer Protection Law',
    subtitle: 'Aggressive representation for consumers facing defective products, poor services, unfair trade practices, and deficiency in service.',
    short: 'Fighting for consumer rights — defective products, unfair trade practices, service deficiencies, and compensation claims before consumer forums and commissions.',
    overview: [
      'The Consumer Protection Act, 2019 provides powerful remedies for consumers who have been cheated, misled, or supplied with deficient goods and services. Lahari Legal Associates has a dedicated consumer protection practice fighting for the rights of individuals and businesses.',
      'We handle a wide range of consumer matters — defective products and medical negligence, unfair trade practices and misleading advertisements, deficiency in banking and insurance services, construction defects and builder delays, and telecom and utility disputes.',
      'Our team represents clients before district consumer forums, state commissions, and the National Consumer Disputes Redressal Commission (NCDRC), pursuing compensation, refunds, replacements, and punitive damages.',
    ],
    process: [
      { title: 'Case Evaluation', body: 'Reviewing the facts, documentary evidence, and applicable consumer protection provisions to assess the strength and value of your claim.' },
      { title: 'Pre-Filing Notice', body: 'Issuing formal notice to the opposite party seeking resolution, refund, or compensation before approaching the consumer forum.' },
      { title: 'Consumer Forum Filing', body: 'Preparing and filing the consumer complaint with the appropriate forum — district, state, or national — depending on the claim value.' },
      { title: 'Hearing & Resolution', body: 'Presenting evidence and legal arguments at hearings, negotiating settlements, and pursuing favourable awards including compensation and costs.' },
    ],
    benefits: ['No advocate fees for claims up to certain thresholds', 'Fast-track proceedings for quick resolution', 'Proven track record of favourable consumer awards', 'Comprehensive evidence and documentation preparation'],
    faqs: [
      { q: 'How much compensation can I claim in a consumer case?', a: 'Compensation depends on the nature and extent of the deficiency, actual loss suffered, mental agony, and punitive considerations. We assess and claim the maximum appropriate amount.' },
      { q: 'Do I need to send a notice before filing a consumer complaint?', a: 'While not always mandatory, sending a notice before filing strengthens your case and may lead to settlement without litigation. We advise on the best approach for your situation.' },
      { q: 'How long do consumer cases take?', a: 'Consumer forums are designed for faster resolution than civil courts. District forum cases typically resolve within 3–6 months, while state and national commission matters may take longer.' },
    ],
  },

  /* ──────────────── 5. Arbitration & Alternative Dispute Resolution ──────────────── */
  {
    slug: 'arbitration-adr',
    icon: 'fas fa-scale-balanced',
    title: 'Arbitration & Alternative Dispute Resolution',
    subtitle: 'Efficient dispute resolution through arbitration, mediation, and conciliation — avoiding the delays and costs of courtroom litigation.',
    short: 'Expert arbitration and ADR services — commercial arbitration, mediation, conciliation, and dispute resolution outside traditional courts.',
    overview: [
      'Arbitration and alternative dispute resolution (ADR) offer faster, more confidential, and often more cost-effective pathways to resolving disputes compared to traditional courtroom litigation. Lahari Legal Associates has extensive experience as both advocates and arbitrators in domestic and international ADR proceedings.',
      'Our ADR practice covers commercial arbitration under the Arbitration and Conciliation Act, institutional arbitration proceedings, mediation and conciliation, expert determination, and negotiated settlement facilitation.',
      'Whether you are drafting an arbitration clause, initiating proceedings, defending against a claim, or enforcing an arbitral award, our team provides the strategic counsel and aggressive representation these specialised proceedings demand.',
    ],
    process: [
      { title: 'Dispute Assessment & Strategy', body: 'Evaluating whether ADR is the optimal pathway and recommending the most appropriate mechanism — arbitration, mediation, or conciliation.' },
      { title: 'Tribunal Formation & Terms', body: 'Appointing arbitrators or mediators, establishing terms of reference, and defining the procedural framework for the proceedings.' },
      { title: 'Hearing & Advocacy', body: 'Presenting evidence, arguments, and counter-claims before the arbitral tribunal or mediation panel with rigorous preparation.' },
      { title: 'Award Enforcement & Challenge', body: 'Enforcing favourable arbitral awards in courts or challenging unfavourable awards on valid legal grounds.' },
    ],
    benefits: ['Experienced as both counsel and arbitrator', 'Expertise in institutional and ad hoc arbitration', 'Strong track record of favourable arbitral outcomes', 'Efficient resolution compared to court litigation'],
    faqs: [
      { q: 'Is arbitration faster than going to court?', a: 'Generally yes. Arbitration proceedings are typically resolved within 6–12 months, compared to several years in civil courts, with the added advantage of confidentiality.' },
      { q: 'Can an arbitral award be enforced in court?', a: 'Yes. Arbitral awards are enforceable as court decrees under Section 36 of the Arbitration and Conciliation Act. We handle enforcement proceedings to ensure the award is implemented.' },
      { q: 'Can I challenge an arbitral award?', a: 'Yes, on limited grounds including incapacity of the tribunal, improper notice, subject-matter beyond scope, procedural irregularity, or conflict with public policy. We advise on the merits of any challenge.' },
    ],
  },

  /* ──────────────── 6. Contract Drafting & Corporate Agreements ──────────────── */
  {
    slug: 'contract-drafting',
    icon: 'fas fa-file-signature',
    title: 'Contract Drafting & Corporate Agreements',
    subtitle: 'Precision-crafted contracts, agreements, and legal documents that protect your interests and minimise risk.',
    short: 'Expert drafting and review of contracts, partnership deeds, NDAs, vendor agreements, and commercial documents with meticulous legal precision.',
    overview: [
      'A well-drafted contract is the foundation of every successful business relationship. At Lahari Legal Associates, our contract drafting team combines legal precision with commercial pragmatism to create agreements that protect your interests.',
      'We draft and review a wide range of commercial documents — from simple service agreements to complex joint venture arrangements, shareholder agreements, and cross-border transaction documents.',
      'Every contract we prepare is tailored to your specific requirements, with clear terms, robust dispute resolution clauses, and comprehensive risk allocation provisions that stand up to scrutiny.',
    ],
    process: [
      { title: 'Requirement Analysis', body: 'Understanding the commercial context, parties involved, and key deal terms to identify legal risks and protection needs.' },
      { title: 'Drafting & Structuring', body: 'Preparing clear, comprehensive agreements with precise clauses covering obligations, liabilities, termination, and dispute resolution.' },
      { title: 'Review & Negotiation', body: 'Thorough review of counterpart drafts with detailed mark-ups and strategic negotiation support.' },
      { title: 'Execution & Archival', body: 'Managing execution formalities and providing guidance on stamp duty, registration, and record-keeping requirements.' },
    ],
    benefits: ['Tailored contracts — never generic templates', 'Expert review of third-party agreements', 'Clear, plain-language drafting where possible', 'Risk-focused clause negotiation support'],
    faqs: [
      { q: 'Will my contract be a generic template?', a: 'No. Every agreement we draft is tailored to your specific commercial context, with clauses calibrated to your industry and risk profile.' },
      { q: 'Can you review a contract the other party has drafted?', a: 'Yes. We review counterpart drafts, provide detailed mark-ups, and negotiate to remove onerous clauses and protect your position.' },
      { q: 'Do you handle stamp duty and registration?', a: 'We advise on applicable stamp duty and registration requirements and help manage the execution formalities.' },
    ],
  },

  /* ──────────────── 7. Intellectual Property Rights (IPR) ──────────────── */
  {
    slug: 'intellectual-property',
    icon: 'fas fa-lightbulb',
    title: 'Intellectual Property Rights (IPR)',
    subtitle: 'Comprehensive IP protection — trademark registration, patent filing, copyright enforcement, and trade secret strategy.',
    short: 'End-to-end intellectual property services — trademark registration, patent filing, copyright protection, IP licensing, and infringement enforcement.',
    overview: [
      'Intellectual property is often the most valuable asset a business or individual owns. Lahari Legal Associates provides comprehensive IP legal services to protect, manage, and enforce your creative and innovative works.',
      'Our IP practice covers trademark search, registration and enforcement, patent filing and prosecution, copyright registration and infringement disputes, trade secret protection and licensing, and domain name disputes.',
      'We work with startups, established businesses, and individual creators to develop IP strategies that protect competitive advantages and maximise the commercial value of intellectual assets.',
    ],
    process: [
      { title: 'IP Audit & Strategy', body: 'Conducting a comprehensive audit of existing intellectual assets and developing a protection strategy aligned with your business goals.' },
      { title: 'Search & Filing', body: 'Conducting clearance searches and preparing applications for trademark, patent, or copyright registration before the appropriate offices.' },
      { title: 'Prosecution & Registration', body: 'Managing the examination process, responding to objections, and securing registration of your IP rights.' },
      { title: 'Enforcement & Licensing', body: 'Enforcing IP rights against infringers through cease-and-desist notices, litigation, and structuring IP licensing arrangements.' },
    ],
    benefits: ['Comprehensive IP portfolio management', 'Trademark, patent, and copyright expertise', 'Strategic IP licensing and monetisation', 'Aggressive infringement enforcement'],
    faqs: [
      { q: 'How long does trademark registration take?', a: 'Trademark registration in India typically takes 12–18 months from filing, depending on objections and opposition proceedings. We manage the entire process to minimise delays.' },
      { q: 'Can you help if someone is using my trademark?', a: 'Yes. We issue cease-and-desist notices, file infringement suits, and pursue all available remedies to stop unauthorised use and recover damages.' },
      { q: 'Do I need to register my copyright?', a: 'Copyright arises automatically upon creation, but registration provides stronger evidentiary support in disputes and enables statutory damages. We advise on the best approach for your works.' },
    ],
  },

  /* ──────────────── 8. Family Law & Matrimonial Disputes ──────────────── */
  {
    slug: 'family-law',
    icon: 'fas fa-people-roof',
    title: 'Family Law & Matrimonial Disputes',
    subtitle: 'Sensitive and effective representation in divorce, custody, maintenance, and domestic violence matters.',
    short: 'Sensitive guidance through divorce, custody, maintenance, adoption, and domestic violence proceedings with compassion and discretion.',
    overview: [
      'Family disputes require more than legal expertise — they demand empathy, discretion, and a nuanced understanding of the emotional dynamics at play. Our family law team provides sensitive yet effective representation across the full range of family law matters.',
      'We handle divorce proceedings (contested and mutual consent), child custody and visitation arrangements, maintenance and alimony claims, adoption proceedings, and domestic violence protection orders.',
      'Our goal is always to achieve the best possible outcome while minimising the emotional and financial toll on all parties — especially when children are involved.',
    ],
    process: [
      { title: 'Initial Consultation', body: 'A confidential discussion to understand your situation, assess your rights, and outline realistic options and likely outcomes.' },
      { title: 'Negotiation & Mediation', body: 'Pursuing amicable settlement through direct negotiation or court-annexed mediation to reduce conflict and cost.' },
      { title: 'Court Proceedings', body: 'Filing and contesting petitions for divorce, custody, maintenance, or protection orders with thorough documentation.' },
      { title: 'Post-Decree Matters', body: 'Handling modification of custody, maintenance enforcement, and other post-judgment proceedings as circumstances change.' },
    ],
    benefits: ['Compassionate, non-judgmental representation', "Strong focus on children's best interests", 'Expertise in both Hindu and secular family law', 'Confidential handling of sensitive personal matters'],
    faqs: [
      { q: 'How long does a mutual-consent divorce take?', a: 'A mutual-consent divorce typically takes around 6–7 months, including the mandatory six-month cooling-off period that courts can sometimes waive.' },
      { q: 'How is child custody decided?', a: 'Courts decide custody based on the child\u2019s welfare and best interests, considering age, emotional bonds, and each parent\u2019s circumstances. We build a strong case centred on your child\u2019s well-being.' },
      { q: 'Are consultations completely confidential?', a: 'Yes. Every family law consultation is strictly confidential and handled with sensitivity and discretion.' },
    ],
  },

  /* ──────────────── 9. Legal Notice & Reply Drafting ──────────────── */
  {
    slug: 'legal-notice-drafting',
    icon: 'fas fa-envelope-open-text',
    title: 'Legal Notice & Reply Drafting',
    subtitle: 'Precise, impactful legal notices that establish your position and compel timely resolution.',
    short: 'Professional legal notice drafting for breaches, disputes, defaults, and claims — establishing a strong foundation for further legal action.',
    overview: [
      'A well-drafted legal notice is often the first formal step in resolving any dispute. It establishes your legal position, documents your grievance, and creates a record that can be critical in subsequent litigation.',
      'At Lahari Legal Associates, we draft precise, impactful legal notices across all practice areas — from breach of contract and property disputes to cheque bounce matters, defamation, and consumer complaints.',
      'Every notice we draft is tailored to the specific facts of your case, cites the relevant legal provisions, and clearly states the relief sought with appropriate timelines.',
    ],
    process: [
      { title: 'Fact Gathering', body: 'Reviewing all relevant documents, communications, and evidence to understand the full context and identify the strongest legal grounds.' },
      { title: 'Notice Drafting', body: 'Preparing a comprehensive legal notice citing applicable laws, clearly stating the grievance, and demanding specific relief within a defined timeframe.' },
      { title: 'Notice Delivery', body: 'Ensuring proper service of the notice through registered post, email, or other legally recognised delivery methods.' },
      { title: 'Follow-Up Strategy', body: 'Advising on the next steps based on the recipient\u2019s response — whether negotiation, further notice, or immediate litigation.' },
    ],
    benefits: ['Notices drafted by experienced advocates', 'Citation of relevant statutes and case law', 'Strategic tone calibrated to your objective', 'Fast turnaround for urgent matters'],
    faqs: [
      { q: 'Is a legal notice always required before suing?', a: 'In many matters a notice is legally required, and in others it is strategically valuable. We advise when a notice is necessary and draft it to strengthen your position.' },
      { q: 'How quickly can a notice be drafted?', a: 'For urgent matters we offer fast turnaround, often drafting and dispatching a notice within 24–48 hours of receiving complete instructions.' },
      { q: 'Does sending a notice mean I must go to court?', a: 'No. Many notices result in settlement without litigation. A well-drafted notice often prompts resolution while preserving your option to sue.' },
    ],
  },

  /* ──────────────── 10. Money Recovery & Cheque Bounce Cases ──────────────── */
  {
    slug: 'money-recovery',
    icon: 'fas fa-indian-rupee-sign',
    title: 'Money Recovery & Cheque Bounce Cases',
    subtitle: 'Strategic recovery of dues, unpaid invoices, and defaulted payments through legal notices, negotiation, and litigation.',
    short: 'Effective money recovery services — legal notices, demand suits, cheque bounce cases, and execution proceedings to recover your rightful dues.',
    overview: [
      'Unpaid debts and defaulted payments can severely impact your business cash flow and personal finances. Lahari Legal Associates provides strategic money recovery services to help you recover what you are rightfully owed.',
      'Our practice covers a broad spectrum of recovery matters — from unpaid invoices and dishonoured cheques to loan defaults, arbitration awards, and decreed amounts pending execution.',
      'We employ a multi-pronged approach combining demand notices, pre-litigation negotiation, summary suits, cheque bounce prosecutions under Section 138 of the Negotiable Instruments Act, and execution proceedings.',
    ],
    process: [
      { title: 'Debt Assessment', body: 'Reviewing all relevant documents — invoices, agreements, communication records — to assess the strength of your claim and identify the debtor\u2019s assets.' },
      { title: 'Legal Notice & Demand', body: 'Issuing formal legal demand notices with clear timelines and consequences, often triggering settlement discussions.' },
      { title: 'Litigation & Prosecution', body: 'Filing recovery suits, summary proceedings, or cheque bounce complaints depending on the nature and urgency of the claim.' },
      { title: 'Execution & Recovery', body: 'Pursuing attachment, garnishment, and other execution measures to enforce favourable judgments and recover actual amounts.' },
    ],
    benefits: ['Fast-track recovery through summary procedures', 'Specialised cheque bounce prosecution expertise', 'Asset tracing and attachment support', 'No recovery, reduced fee options available'],
    faqs: [
      { q: 'What if the debtor has no obvious assets?', a: 'We conduct asset tracing to identify bank accounts, properties, and other attachable assets before pursuing execution to enforce your decree.' },
      { q: 'How does cheque bounce recovery work?', a: 'We issue the statutory notice, file the complaint under Section 138 of the Negotiable Instruments Act, and pursue prosecution to recover the amount plus costs.' },
      { q: 'Do you offer no-recovery fee options?', a: 'For qualifying matters we offer reduced or contingency-style fee arrangements, keeping our interests aligned with recovering your money.' },
    ],
  },

  /* ──────────────── 11. Cybercrime & Online Fraud Assistance ──────────────── */
  {
    slug: 'cybercrime',
    icon: 'fas fa-shield-halved',
    title: 'Cybercrime & Online Fraud Assistance',
    subtitle: 'Digital forensics-backed representation for hacking, identity theft, and online harassment.',
    short: 'Specialised digital-forensics-backed representation for hacking, identity theft, online harassment, cryptocurrency fraud, and IT Act offences.',
    overview: [
      "As India's digital economy expands, cybercrime has become one of the fastest-growing categories of criminal activity. Lahari Legal Associates maintains a dedicated cybercrime practice combining legal expertise with technical understanding.",
      'We handle cases involving hacking and unauthorised access, identity theft and financial fraud, online harassment and cyberstalking, cryptocurrency scams, and offences under the Information Technology Act.',
      'Whether you are a victim seeking justice or an individual facing allegations, our cybercrime team provides the specialised representation these complex cases demand.',
    ],
    process: [
      { title: 'Digital Forensics', body: 'Coordinating with certified forensic experts to preserve, analyse, and document digital evidence crucial to your case.' },
      { title: 'FIR & Complaint Filing', body: 'Drafting and filing cybercrime complaints with law enforcement agencies and through the cybercrime portal.' },
      { title: 'Interim Relief', body: 'Seeking urgent court orders for content removal, account freezing, or interim injunctions to prevent further harm.' },
      { title: 'Trial & Adjudication', body: 'Presenting technical evidence and legal arguments before criminal courts, IT tribunals, and appellate authorities.' },
    ],
    benefits: ['In-house digital forensics coordination capability', 'Up-to-date knowledge of IT Act and cybercrime jurisprudence', 'Experience with both prosecution and defence', 'Rapid response for time-sensitive online threats'],
    faqs: [
      { q: 'What should I do immediately after an online fraud?', a: 'Preserve all evidence — screenshots, transaction IDs, messages — and report it promptly. We can file the cybercrime complaint and seek urgent relief such as freezing fraudulent accounts.' },
      { q: 'Can you help recover money lost to an online scam?', a: 'Recovery depends on how quickly you act. With timely police complaints and court orders freezing fraudulent accounts, recovery is sometimes possible, and we pursue every available avenue.' },
      { q: 'Do you defend those wrongly accused under the IT Act?', a: 'Yes. We defend individuals facing false or exaggerated cybercrime allegations, ensuring due process and a fair hearing.' },
    ],
  },

  /* ──────────────── 12. Rental & Tenant Disputes ──────────────── */
  {
    slug: 'rental-disputes',
    icon: 'fas fa-house-circle-check',
    title: 'Rental & Tenant Disputes',
    subtitle: 'Resolving landlord-tenant conflicts, lease enforcement, eviction proceedings, and rent recovery matters efficiently.',
    short: 'Expert handling of landlord-tenant disputes, lease violations, eviction proceedings, and rent recovery across Telangana courts.',
    overview: [
      'Rental disputes are among the most common and emotionally charged property matters in India. Whether you are a landlord struggling with a non-paying tenant or a tenant facing unfair eviction, Lahari Legal Associates provides expert legal support.',
      'Our rental disputes practice covers lease agreement drafting and review, rent recovery suits, eviction proceedings, security deposit disputes, and representation before rent control authorities.',
      'We understand the nuances of both commercial and residential tenancy laws in Telangana and work efficiently to resolve disputes while protecting our clients\u2019 rights and investments.',
    ],
    process: [
      { title: 'Lease & Agreement Review', body: 'Thorough examination of the rental agreement, tenancy terms, and applicable rent control or tenancy laws.' },
      { title: 'Negotiation & Mediation', body: 'Attempting amicable resolution through structured negotiation or mediation to avoid protracted litigation.' },
      { title: 'Eviction & Recovery Proceedings', body: 'Filing eviction petitions, rent recovery suits, or ejectment applications before the appropriate forum.' },
      { title: 'Enforcement & Possession', body: 'Managing court-ordered eviction execution and ensuring peaceful handover of possession.' },
    ],
    benefits: ['Expertise in both residential and commercial tenancy', 'Quick turnaround through summary procedures', 'Strong negotiation to avoid unnecessary litigation', 'End-to-end support from notice to possession'],
    faqs: [
      { q: 'How long does an eviction take?', a: 'Timelines depend on the grounds and forum. Where tenancy terms are clear we pursue summary procedures for faster resolution; contested matters take longer.' },
      { q: 'I am a tenant being harassed — can you help?', a: 'Yes. We defend tenants against unlawful eviction, rent gouging, and harassment, and pursue remedies including injunctions where appropriate.' },
      { q: 'Can you draft a strong rental agreement?', a: 'We draft and review residential and commercial lease agreements with robust clauses on rent, deposit, maintenance, and termination.' },
    ],
  },

  /* ──────────────── 13. Business & Startup Legal Support ──────────────── */
  {
    slug: 'business-startup-legal',
    icon: 'fas fa-briefcase',
    title: 'Business & Startup Legal Support',
    subtitle: 'End-to-end corporate counsel for startups, SMEs, and established enterprises.',
    short: 'End-to-end business legal counsel — incorporation, contracts, compliance, M&A due diligence, and governance for startups and enterprises.',
    overview: [
      'The legal landscape for businesses in India is complex and constantly evolving. Lahari Legal Associates provides comprehensive legal support to businesses at every stage — from idea to IPO.',
      'Our corporate team advises founders, boards, and management teams on entity selection and incorporation, shareholder agreements and governance structures, commercial contracts and licensing arrangements, and regulatory compliance.',
      'We take a pragmatic, business-focused approach — our advice is designed to protect your company while enabling growth and managing risk effectively.',
    ],
    process: [
      { title: 'Business Assessment', body: 'Understanding your business model, industry, growth plans, and existing legal arrangements to identify risks and opportunities.' },
      { title: 'Structuring & Documentation', body: 'Drafting and reviewing incorporation documents, shareholder agreements, board resolutions, and commercial contracts.' },
      { title: 'Ongoing Compliance', body: 'Managing statutory filings, board governance requirements, and regulatory compliance on an ongoing basis.' },
      { title: 'Transaction Support', body: 'Providing legal due diligence, negotiation support, and transaction documentation for fundraising and M&A.' },
    ],
    benefits: ['Startup-friendly pricing and flexible engagement models', 'Multi-disciplinary team covering corporate, IP, and employment law', 'Practical, business-oriented legal advice', 'Experience advising companies from seed stage to Series A and beyond'],
    faqs: [
      { q: 'Do you work with startups and small businesses?', a: 'Yes. We offer startup-friendly pricing and flexible engagement models, from one-off contract drafting to ongoing retainer-based advisory.' },
      { q: 'Can you review an existing shareholder agreement?', a: 'Absolutely. We review and negotiate shareholder agreements, term sheets, and commercial contracts to protect your interests and flag hidden risks.' },
      { q: 'Do you handle regulatory compliance?', a: 'Yes. We manage statutory filings, board governance, and ongoing regulatory compliance so you can focus on growing your business.' },
    ],
  },

  /* ──────────────── 14. Wills, Trusts & Estate Planning ──────────────── */
  {
    slug: 'wills-estate-planning',
    icon: 'fas fa-file-will',
    title: 'Wills, Trusts & Estate Planning',
    subtitle: 'Comprehensive estate planning, will drafting, succession certificates, and probate proceedings to protect your legacy.',
    short: 'Expert will drafting, trust formation, succession certificates, probate proceedings, and estate planning to safeguard your family\u2019s future.',
    overview: [
      'Estate planning is one of the most important steps you can take to protect your family\u2019s future. Lahari Legal Associates provides comprehensive will drafting and estate planning services tailored to your specific circumstances.',
      'Our practice covers the drafting and registration of wills, succession certificates, letters of administration, probate proceedings, family settlement deeds, and trust formation for estate management.',
      'We take the time to understand your family structure, assets, and wishes to create estate plans that minimise disputes, reduce tax exposure, and ensure your legacy is preserved exactly as you intend.',
    ],
    process: [
      { title: 'Estate Assessment', body: 'Comprehensive review of your assets, liabilities, family structure, and wishes to identify the optimal estate planning strategy.' },
      { title: 'Will Drafting & Registration', body: 'Preparing clear, legally sound wills with proper witness formalities and guiding you through the registration process.' },
      { title: 'Succession & Probate', body: 'Filing for succession certificates, letters of administration, or probate to facilitate legal transfer of assets.' },
      { title: 'Family Settlement', body: 'Structuring family settlement deeds to resolve inheritance disputes amicably and avoid prolonged litigation.' },
    ],
    benefits: ['Personalised estate plans for every family situation', 'Expert guidance on succession law nuances', 'Dispute minimisation through clear documentation', 'Trust and nomination structure advisory'],
    faqs: [
      { q: 'Is a registered will mandatory?', a: 'Registration is not mandatory for validity, but we strongly recommend it as it strengthens the will against future challenges. We guide you through the entire process.' },
      { q: 'What is the difference between a will and a gift deed?', a: 'A will takes effect after death, while a gift deed transfers property during your lifetime. We advise on which instrument best suits your goals and tax position.' },
      { q: 'Can you help if there is a dispute over an estate?', a: 'Yes. We handle probate, succession certificates, and family settlement negotiations to resolve inheritance disputes and facilitate asset transfer.' },
    ],
  },

  /* ──────────────── 15. Police Complaint & FIR Assistance ──────────────── */
  {
    slug: 'police-complaint-fir',
    icon: 'fas fa-user-police',
    title: 'Police Complaint & FIR Assistance',
    subtitle: 'Swift legal support for filing FIRs, police complaints, quash petitions, and representation at police stations.',
    short: 'Expert assistance with FIR filing, police complaints, quash petitions, bail applications, and representation during police investigation.',
    overview: [
      'Dealing with police procedures can be overwhelming and intimidating for anyone. Lahari Legal Associates provides immediate, practical legal support for all stages of police interaction — from filing complaints to challenging wrongful FIRs.',
      'Our police complaint practice covers FIR filing and follow-up, private criminal complaints, quash petitions before the High Court, bail applications following arrest, and representation during police questioning and investigation.',
      'We ensure that your rights are protected at every stage, that police act within the bounds of law, and that you receive fair treatment regardless of whether you are the complainant or the accused.',
    ],
    process: [
      { title: 'Case Assessment', body: 'Understanding the facts, identifying the relevant criminal provisions, and determining the appropriate legal course of action.' },
      { title: 'FIR / Complaint Filing', body: 'Drafting and filing FIR applications or private criminal complaints with police authorities, ensuring all legal requirements are met.' },
      { title: 'Police Station Representation', body: 'Accompanying and representing clients during police questioning, ensuring rights are protected and procedures are followed.' },
      { title: 'Quash & Bail', body: 'Filing quash petitions to challenge improper FIRs and securing bail when arrest has been made or is anticipated.' },
    ],
    benefits: ['24/7 availability for police emergencies', 'Strong relationships with law enforcement authorities', 'Swift quash petition filing capability', 'Comprehensive protection of your legal rights'],
    faqs: [
      { q: 'What if the police refuse to register my FIR?', a: 'We can file a complaint before the magistrate under Section 156(3) CrPC or approach the higher authorities to compel registration of the FIR.' },
      { q: 'Can a false FIR be cancelled?', a: 'Yes. We file quash petitions before the High Court under Section 482 CrPC to get a false or baseless FIR quashed. The court examines whether the FIR discloses a cognizable offence.' },
      { q: 'What should I do if called to a police station?', a: 'Contact us immediately. You have the right to legal representation during questioning. We ensure the police follow proper procedure and your rights are protected.' },
    ],
  },
];

export const getServiceBySlug = (slug) =>
  SERVICES.find((s) => s.slug === slug);
