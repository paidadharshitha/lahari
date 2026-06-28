const fs = require("fs");
const f = "./src/data/services.js";
const d = "—"; // em-dash
fs.writeFileSync(f, `// All 13 practice areas. slug powers the /services/:slug route.
// Each service has icon (FontAwesome class), title, short description, and
// longer content blocks for the individual service pages.

export const SERVICES = [
  {
    slug: 'civil-law',
    icon: 'fas fa-scale-balanced',
    title: 'Civil Law',
    subtitle: 'Comprehensive civil litigation and dispute resolution across Telangana courts.',
    short: 'Comprehensive civil litigation covering contracts, property, recovery suits, and consumer disputes across Telangana courts.',
    overview: [
      'Civil law forms the backbone of our practice at Lahari Legal Associates. From contractual disputes and recovery suits to consumer complaints and property matters, our civil litigation team brings decades of combined courtroom experience to every engagement.',
      'We handle the full lifecycle of civil disputes ${d} from pre-litigation negotiation and demand notices through trial, appeal, and execution proceedings. Our attorneys understand that civil matters often involve significant financial stakes and personal stress.',
      'Whether you are an individual facing a breach of contract or a business navigating complex commercial litigation, our team provides clear, honest counsel and aggressive representation at every stage.',
    ],
    process: [
      { title: 'Case Evaluation & Strategy', body: 'We begin with a thorough review of your documents and circumstances, identifying the strongest legal grounds and crafting a tailored litigation strategy.' },
      { title: 'Pre-Litigation Negotiation', body: 'Where possible, we pursue settlement through demand notices and structured negotiations to achieve resolution without the time and cost of a full trial.' },
      { title: 'Trial Representation', body: 'Our advocates provide vigorous courtroom representation before district courts, fast-track courts, and tribunals across Telangana.' },
      { title: 'Appeal & Execution', body: 'If necessary, we pursue appeals before the High Court and manage execution proceedings to enforce favourable judgments.' },
    ],
    benefits: ['Senior advocates personally handle every engagement', 'Transparent fee structure with no hidden costs', 'Regular case updates and strategy sessions', 'Proven track record across 5,000+ civil matters'],
  },
  {
    slug: 'criminal-law',
    icon: 'fas fa-gavel',
    title: 'Criminal Law',
    subtitle: 'Aggressive criminal defence from FIR to appeal across all Telangana courts.',
    short: 'Aggressive criminal defence from FIR to appeal ${d} bail applications, quash petitions, trial strategy, and High Court representation.',
    overview: [
      'Facing criminal charges is one of the most stressful experiences an individual or business can endure. Our criminal defence team provides swift, strategic, and aggressive representation to protect your freedom, reputation, and rights.',
      'We handle the complete spectrum of criminal matters ${d} from white-collar offences and cybercrime to serious penal code violations. Our approach combines meticulous case preparation with assertive courtroom advocacy.',
      'From securing anticipatory bail before arrest to mounting a comprehensive defence at trial and pursuing appeals, our team has the experience and determination to achieve the best possible outcome.',
    ],
    process: [
      { title: 'Arrest & Bail', body: 'Immediate intervention for bail applications ${d} regular, anticipatory, or default ${d} to secure your release and protect your liberty.' },
      { title: 'FIR Quash & Review', body: 'Filing quash petitions before the High Court when an FIR lacks legal basis or is filed with malicious intent.' },
      { title: 'Trial Defence', body: 'Comprehensive trial strategy including evidence analysis, witness preparation, cross-examination, and legal arguments.' },
      { title: 'Appeal & Revision', body: 'Pursuing appeals and revisions before the Sessions Court and High Court to overturn unfavourable verdicts.' },
    ],
    benefits: ['24/7 availability for arrest and emergency situations', 'Experienced High Court practitioners on the team', 'Thorough evidence analysis and forensic coordination', 'Confidential, judgement-free client interactions'],
  },
  {
    slug: 'family-law',
    icon: 'fas fa-people-roof',
    title: 'Family Law',
    subtitle: 'Sensitive and effective representation in divorce, custody, maintenance, and domestic violence matters.',
    short: 'Sensitive guidance through divorce, custody, maintenance, adoption, and domestic violence proceedings with compassion and discretion.',
    overview: [
      'Family disputes require more than legal expertise ${d} they demand empathy, discretion, and a nuanced understanding of the emotional dynamics at play. Our family law team provides sensitive yet effective representation across the full range of family law matters.',
      'We handle divorce proceedings (contested and mutual consent), child custody and visitation arrangements, maintenance and alimony claims, adoption proceedings, and domestic violence protection orders.',
      'Our goal is always to achieve the best possible outcome while minimising the emotional and financial toll on all parties ${d} especially when children are involved.',
    ],
    process: [
      { title: 'Initial Consultation', body: 'A confidential discussion to understand your situation, assess your rights, and outline realistic options and likely outcomes.' },
      { title: 'Negotiation & Mediation', body: 'Pursuing amicable settlement through direct negotiation or court-annexed mediation to reduce conflict and cost.' },
      { title: 'Court Proceedings', body: 'Filing and contesting petitions for divorce, custody, maintenance, or protection orders with thorough documentation.' },
      { title: 'Post-Decree Matters', body: 'Handling modification of custody, maintenance enforcement, and other post-judgment proceedings as circumstances change.' },
    ],
    benefits: ['Compassionate, non-judgmental representation', "Strong focus on children's best interests", 'Expertise in both Hindu and secular family law', 'Confidential handling of sensitive personal matters'],
  },
  {
    slug: 'property-disputes',
    icon: 'fas fa-building',
    title: 'Property & Land Disputes',
    subtitle: 'Resolving title disputes, encroachment, and landlord-tenant conflicts across Telangana.',
    short: 'Resolving title disputes, encroachment, RERA complaints, landlord-tenant conflicts, and land-acquisition challenges across Telangana.',
    overview: [
      'Property is often the most valuable asset an individual or family owns. Lahari Legal Associates has extensive experience resolving every type of property dispute across Telangana.',
      'From title verification and boundary disputes to encroachment removal, RERA complaints against developers, and landlord-tenant conflicts, our property law team combines deep knowledge of property statutes with practical experience in revenue courts, civil courts, and consumer forums.',
      'We also handle matters involving ancestral property partitions, wills and succession certificates, and property acquisition by government authorities.',
    ],
    process: [
      { title: 'Title & Document Review', body: 'Comprehensive analysis of property documents, revenue records, and Dharani portal entries to establish ownership and identify defects.' },
      { title: 'Legal Notice & Negotiation', body: 'Issuing formal notices and pursuing settlement negotiations to resolve disputes before proceeding to litigation.' },
      { title: 'Civil & Revenue Court Litigation', body: 'Filing suits for declaration, injunction, possession, partition, or eviction before the appropriate court.' },
      { title: 'RERA & Consumer Forum', body: 'Representing homebuyers and developers before RERA and consumer dispute redressal forums.' },
    ],
    benefits: ['Deep expertise in Telangana land revenue records and Dharani portal', 'Network of surveyors and documentation specialists', 'Experience across civil, revenue, and consumer forums', 'Transparent pricing with no hidden retainers'],
  },
  {
    slug: 'corporate-legal-advisory',
    icon: 'fas fa-briefcase',
    title: 'Corporate Legal Advisory',
    subtitle: 'End-to-end corporate counsel for startups, SMEs, and established enterprises.',
    short: 'End-to-end corporate counsel ${d} incorporation, contracts, compliance, M&A due diligence, and board governance for startups and enterprises.',
    overview: [
      'The corporate legal landscape in India is complex and constantly evolving. Lahari Legal Associates provides comprehensive corporate legal advisory services to businesses at every stage.',
      'Our corporate team advises founders, boards, and management teams on entity selection and incorporation, shareholder agreements and governance structures, commercial contracts and licensing arrangements, and intellectual property strategy.',
      'We take a pragmatic, business-focused approach ${d} our advice is designed to protect your company while enabling growth and managing risk effectively.',
    ],
    process: [
      { title: 'Business Assessment', body: 'Understanding your business model, industry, growth plans, and existing legal arrangements to identify risks and opportunities.' },
      { title: 'Structuring & Documentation', body: 'Drafting and reviewing incorporation documents, shareholder agreements, board resolutions, and commercial contracts.' },
      { title: 'Ongoing Compliance', body: 'Managing statutory filings, board governance requirements, and regulatory compliance on an ongoing basis.' },
      { title: 'Transaction Support', body: 'Providing legal due diligence, negotiation support, and transaction documentation for fundraising and M&A.' },
    ],
    benefits: ['Startup-friendly pricing and flexible engagement models', 'Multi-disciplinary team covering corporate, IP, and employment law', 'Practical, business-oriented legal advice', 'Experience advising companies from seed stage to Series A and beyond'],
  },
  {
    slug: 'cybercrime',
    icon: 'fas fa-shield-halved',
    title: 'Cybercrime & Online Fraud',
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
  },
  {
    slug: 'intellectual-property',
    icon: 'fas fa-lightbulb',
    title: 'Intellectual Property',
    subtitle: 'Protecting your innovations, brands, and creative works through registration and enforcement.',
    short: 'Trademark, patent, and copyright registration, enforcement, and litigation ${d} protecting your innovations, brands, and creative works.',
    overview: [
      "In today's knowledge economy, intellectual property is often a business's most valuable asset. Lahari Legal Associates provides comprehensive IP services from registration to enforcement.",
      'Our IP practice covers trademark registration and enforcement, patent filing strategy, copyright protection, trade secret management, and IP licensing and technology transfer agreements.',
      'We work with startups, technology companies, creative professionals, and established brands to develop IP strategies that align with their business objectives.',
    ],
    process: [
      { title: 'IP Audit & Strategy', body: 'Reviewing your existing IP assets and identifying opportunities for registration, protection, and commercialisation.' },
      { title: 'Registration & Filing', body: 'Preparing and filing trademark, copyright, and patent applications, and managing the examination process.' },
      { title: 'Enforcement & Monitoring', body: 'Monitoring for infringements and taking swift enforcement action through notices, litigation, or administrative proceedings.' },
      { title: 'Licensing & Transfer', body: 'Drafting and negotiating IP licensing, assignment, and technology transfer agreements.' },
    ],
    benefits: ['End-to-end IP lifecycle management', 'Experience with trademark, patent, and copyright matters', 'Strong relationships with patent agents', 'Proactive monitoring and enforcement strategies'],
  },
  {
    slug: 'labour-employment',
    icon: 'fas fa-users',
    title: 'Labour & Employment Law',
    subtitle: 'Employment contracts, workplace disputes, and regulatory compliance under Indian labour statutes.',
    short: 'Employment contracts, workplace harassment claims, wrongful termination disputes, and regulatory compliance under Indian labour statutes.',
    overview: [
      'Employment relationships are governed by a complex web of central and state labour statutes. Lahari Legal Associates provides comprehensive labour and employment law services to both employers and employees.',
      'Our practice covers employment contract drafting and review, wrongful termination and retrenchment disputes, workplace harassment and POSH committee matters, wage and benefits claims, and compliance with the new Labour Codes.',
      'Our attorneys approach each matter with sensitivity and pragmatism, pursuing resolution strategies that protect clients\\u2019 interests while minimising disruption.',
    ],
    process: [
      { title: 'Employment Documentation Review', body: 'Reviewing employment contracts, offer letters, HR policies, and termination notices to identify legal issues and rights.' },
      { title: 'Negotiation & Mediation', body: 'Pursuing negotiated settlements, severance agreements, and mutual separation terms that protect your interests.' },
      { title: 'Labour Authority Proceedings', body: 'Representing clients before labour commissioners, labour courts, and industrial tribunals.' },
      { title: 'High Court & Appellate Review', body: 'Filing writ petitions and appeals before the High Court on questions of labour law and constitutional rights.' },
    ],
    benefits: ['Represents both employers and employees', 'Expertise in new Labour Codes and compliance frameworks', 'Experience with POSH committee proceedings', 'Practical, results-focused approach'],
  },
  {
    slug: 'real-estate',
    icon: 'fas fa-house',
    title: 'Real Estate & RERA',
    subtitle: 'Legal support for property transactions, RERA filings, and builder disputes.',
    short: 'Legal support for property transactions, builder disputes, RERA filings, project approvals, and due diligence for homebuyers and developers.',
    overview: [
      'Real estate transactions represent some of the largest financial commitments individuals and businesses make. Lahari Legal Associates provides comprehensive legal support for every aspect of real estate.',
      'Our practice serves homebuyers, property investors, developers, and commercial tenants across Telangana. We handle property documentation and registration, agreement drafting, RERA filings, and builder dispute claims.',
      'The importance of thorough legal due diligence before any property transaction cannot be overstated.',
    ],
    process: [
      { title: 'Due Diligence & Title Search', body: 'Comprehensive verification of property title, encumbrances, approvals, and compliance with regulations.' },
      { title: 'Agreement & Deed Drafting', body: 'Preparing and reviewing sale deeds, construction agreements, lease deeds, and other documentation.' },
      { title: 'RERA Proceedings', body: 'Filing complaints with RERA for project delays, construction deficiencies, or promoter violations.' },
      { title: 'Litigation & Dispute Resolution', body: 'Handling property-related civil suits, consumer forum complaints, and arbitration proceedings.' },
    ],
    benefits: ['Deep knowledge of Telangana RERA regulations', 'Thorough title verification including Dharani records', 'Experience with residential and commercial real estate', 'Protecting both homebuyers and developers'],
  },
  {
    slug: 'tax-law',
    icon: 'fas fa-receipt',
    title: 'Tax Law & GST Advisory',
    subtitle: 'Strategic tax planning, GST compliance, and representation before tax authorities.',
    short: 'Strategic tax planning, GST compliance, income-tax appeals, and representation before tax tribunals and authorities.',
    overview: [
      'Tax law in India is intricate and subject to frequent amendments. Lahari Legal Associates provides strategic tax advisory and representation services across income tax and GST matters.',
      'Our practice covers income tax planning and compliance, GST registration and return filing support, tax audit representation, assessment proceedings and appeals, and representation before the Income Tax Appellate Tribunal.',
      'We work closely with chartered accountants and tax professionals to provide a comprehensive approach that addresses both the legal and financial dimensions of tax matters.',
    ],
    process: [
      { title: 'Tax Health Check', body: 'Reviewing your current tax structure, filings, and exposures to identify opportunities and risks.' },
      { title: 'Strategic Planning', body: 'Developing tax-efficient strategies for business structure, investments, and transactions within the bounds of the law.' },
      { title: 'Authority Representation', body: 'Representing you before assessing officers, CIT(A), ITAT, and GST authorities.' },
      { title: 'Appeal & Litigation', body: 'Filing appeals and writ petitions before the High Court on questions of tax law.' },
    ],
    benefits: ['Coordination with CA firms for integrated tax solutions', 'Experience across income tax and GST matters', 'Representation at all appellate levels', 'Proactive tax planning to prevent disputes'],
  },
  {
    slug: 'alternative-dispute-resolution',
    icon: 'fas fa-handshake',
    title: 'Alternative Dispute Resolution',
    subtitle: 'Mediation, arbitration, and conciliation for efficient confidential dispute resolution.',
    short: 'Mediation, arbitration, and conciliation services ${d} resolving disputes efficiently and confidentially outside traditional courtroom litigation.',
    overview: [
      'Not every dispute needs to be resolved in a courtroom. Alternative Dispute Resolution (ADR) offers faster, more cost-effective, and confidential pathways to resolution.',
      'Lahari Legal Associates provides comprehensive ADR services including mediation, arbitration, and conciliation. Our attorneys serve as advocates representing clients and as neutral mediators.',
      'We handle commercial disputes, construction claims, family law mediation, employment disputes, and property matters through ADR mechanisms.',
    ],
    process: [
      { title: 'ADR Suitability Assessment', body: 'Evaluating whether your dispute is suited for ADR and recommending the most appropriate mechanism.' },
      { title: 'Agreement & Appointment', body: 'Drafting arbitration agreements or mediation clauses, and appointing qualified neutrals.' },
      { title: 'Advocacy & Representation', body: 'Representing your interests throughout ADR proceedings with thorough preparation and persuasive advocacy.' },
      { title: 'Award & Enforcement', body: 'Ensuring that arbitration awards and settlement agreements are properly documented and enforceable.' },
    ],
    benefits: ['Faster resolution than court proceedings', 'Confidential process that protects reputation', 'Cost-effective compared to full litigation', 'Preserves business and personal relationships'],
  },
  {
    slug: 'immigration-visa',
    icon: 'fas fa-passport',
    title: 'Immigration & Visa Services',
    subtitle: 'Guidance on visa applications, NRI property matters, and cross-border legal issues.',
    short: 'Guidance on visa applications, work permits, NRI property matters, OCI/PIO cards, and cross-border legal issues.',
    overview: [
      'Global mobility has become increasingly common, and navigating immigration requirements can be complex. Lahari Legal Associates provides legal guidance on a range of immigration and cross-border matters.',
      'Our practice covers visa application guidance, work permit and employment visa matters, NRI property management and investment, OCI/PIO card applications, and cross-border family law issues.',
      'For NRIs and expatriates, we provide comprehensive support for property transactions, inheritance matters, and legal representation in India without requiring physical presence.',
    ],
    process: [
      { title: 'Eligibility Assessment', body: 'Reviewing your immigration goals, nationality status, and eligibility for various visa and residency categories.' },
      { title: 'Documentation & Application', body: 'Preparing and organising all required documentation for visa, OCI, PIO, or other immigration applications.' },
      { title: 'NRI Property Management', body: 'Handling property documentation, power of attorney arrangements, and legal representation for NRI property matters in India.' },
      { title: 'Ongoing Support', body: 'Providing continued legal support for compliance, renewals, and any cross-border legal issues that arise.' },
    ],
    benefits: ['Specialised NRI legal services', 'Remote documentation and representation capabilities', 'Coordination with authorities in India', 'Multilingual team comfortable with international clients'],
  },
  {
    slug: 'environmental-law',
    icon: 'fas fa-leaf',
    title: 'Environmental Law',
    subtitle: 'Representation in environmental clearance challenges and pollution control board matters.',
    short: 'Representation in environmental clearance challenges, pollution control board matters, and sustainability compliance for industries and individuals.',
    overview: [
      'Environmental regulation in India has grown significantly in scope and enforcement. Lahari Legal Associates provides legal services in environmental law matters from compliance advisory to representation in enforcement proceedings.',
      'Our practice covers environmental clearance applications and challenges, pollution control board proceedings, waste management compliance, sustainability reporting and ESG advisory, and public interest litigation.',
      'We represent industries seeking environmental clearances, communities affected by violations, and government agencies on regulatory matters.',
    ],
    process: [
      { title: 'Compliance Audit', body: 'Reviewing your operations, permits, and practices against current environmental regulations and identifying compliance gaps.' },
      { title: 'Regulatory Engagement', body: 'Preparing applications, representations, and responses to environmental authorities and pollution control boards.' },
      { title: 'Litigation & Defence', body: 'Representing clients in environmental tribunals, NGT proceedings, and courts on environmental matters.' },
      { title: 'Advisory & Training', body: 'Providing ongoing environmental law advisory services and compliance training for your team.' },
    ],
    benefits: ['Experience with NGT and environmental tribunal proceedings', 'Advisory services for industrial and commercial clients', 'Representation in both public interest and defence matters', 'Up-to-date knowledge of evolving environmental regulations'],
  },
];

export const getServiceBySlug = (slug) =>
  SERVICES.find((s) => s.slug === slug);
`, "utf8");
console.log("OK");
