// All 4 Insight articles. `slug` powers the /insights/:slug route.
// Each article has overview (paragraphs) + sections (icon, heading, body).

export const INSIGHTS = [
  {
    slug: "new-laws",
    icon: "fas fa-scale-balanced",
    title: "New Laws",
    short:
      "Stay updated on the latest legislative changes, amendments, and newly enacted laws that impact individuals and businesses across India.",
    tag: "NEW LAWS",
    date: "June 2026",
    author: "Adv. K. Lahari",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1400&h=600&fit=crop",
    highlights: [
      "BNS 2026 amendments address AI-facilitated fraud and deepfake offences",
      "DPDP Act operational rules mandate consent management by Sept 2026",
      "Companies Act governance reforms with simplified startup compliance",
      "Tiered penalty structure for data breaches up to ₹250 crore",
    ],
    relatedServices: ["contract-drafting", "cybercrime", "consumer-protection"],
    overview: [
      "The Indian legislative landscape continues to evolve rapidly in 2026, with several landmark enactments and amendments reshaping rights, obligations, and procedural frameworks across civil, criminal, and commercial domains. From the progressive reform of the Bharatiya Nyaya Sanhita to updated regulations governing digital transactions, these changes demand close attention from legal practitioners and citizens alike.",
      "This section consolidates the most significant new legislation, analyzing not just what the laws say but what they mean in practical terms — for businesses restructuring operations, individuals navigating personal rights, and professionals adapting to new compliance requirements. Each summary includes actionable guidance on how the changes may affect your specific circumstances.",
    ],
    sections: [
      {
        icon: "fas fa-gavel",
        heading: "Bharatiya Nyaya Sanhita — Key Amendments 2026",
        body: [
          "Building upon the foundational overhaul of India's criminal justice framework through the BNS, the 2026 amendments introduce critical clarifications on digital crime jurisprudence. New provisions specifically address AI-facilitated fraud, deepfake-related offences, and cryptocurrency-related financial crimes — areas that the original enactment left insufficiently defined.",
          "The amendments also strengthen victim compensation frameworks, mandating that trial courts consider the economic impact on victims when determining restitution amounts. For legal practitioners, the updated sentencing guidelines under Section 53 provide clearer discretion ranges, reducing the wide disparity in sentences for similar offences across different jurisdictions.",
        ],
      },
      {
        icon: "fas fa-building-columns",
        heading: "Digital Personal Data Protection Act — Operational Rules",
        body: [
          "The DPDP Act's operational rules, formally gazetted in early 2026, establish the practical compliance framework that organisations have been awaiting. Data fiduciaries must now implement demonstrable consent management mechanisms, with the rules specifying technical standards for consent records, withdrawal processes, and age verification for children's data processing.",
          "Significantly, the rules introduce a tiered penalty structure based on the nature and severity of data breaches, with maximum penalties reaching ₹250 crore for repeated and wilful non-compliance. Organisations processing significant personal data must appoint qualified Data Protection Officers and conduct mandatory annual data protection audits by accredited auditors.",
        ],
      },
      {
        icon: "fas fa-file-contract",
        heading: "Companies Act Amendments — Governance Reforms",
        body: [
          "The latest Companies Act amendments strengthen corporate governance requirements for both public and private limited companies. Key changes include mandatory related-party transaction disclosures through a new digital registry, enhanced board independence requirements, and updated thresholds for CSR expenditure that now include environmental sustainability projects.",
          "For startups and growing businesses, the amendments introduce a simplified compliance framework for companies with turnover below ₹50 crore, reducing filing burdens while maintaining core governance protections. The new framework also clarifies the treatment of sweat equity and ESOP structures, providing greater flexibility for talent retention strategies.",
        ],
      },
      {
        icon: "fas fa-shield-halved",
        heading: "What These Changes Mean for You",
        body: [
          "For individuals, the strengthened data protection rules provide concrete rights over how your personal information is collected, stored, and shared. You can now demand erasure of data from any digital platform, and organisations must comply within 72 hours. Understanding these rights is the first step to protecting your digital privacy.",
          "For businesses, the compliance landscape has become more demanding but also clearer. Engaging legal counsel to conduct a gap analysis against the new requirements — particularly under the DPDP rules and Companies Act amendments — is strongly recommended. Non-compliance carries not just financial penalties but reputational damage that can be far more costly in the long term.",
        ],
      },
    ],
  },
  {
    slug: "court-judgments",
    icon: "fas fa-landmark",
    title: "Court Judgments",
    short:
      "Analysis of landmark Supreme Court and High Court judgments shaping legal precedent and impacting rights, business, and governance in India.",
    tag: "COURT JUDGMENTS",
    date: "May 2026",
    author: "Adv. K. Lahari",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&h=600&fit=crop",
    highlights: [
      "Supreme Court expands Right to Privacy under Article 21 with proportionality test",
      "Pro-arbitration stance strengthens India as preferred international arbitration seat",
      "Telangana HC ruling increases land acquisition compensation entitlements",
      "Emergency arbitral interim measures now enforceable without court confirmation",
    ],
    relatedServices: ["land-disputes", "arbitration-adr", "money-recovery"],
    overview: [
      "Judicial precedents established by the Supreme Court and various High Courts continue to be the most dynamic source of legal development in India. In the first half of 2026, several landmark judgments have fundamentally altered the interpretation of constitutional rights, commercial obligations, and procedural law — creating new avenues for litigation and reshaping established legal principles.",
      "This section examines the most consequential recent judgments, distilling complex legal reasoning into practical analysis. Whether you are a legal professional tracking precedent developments or a citizen seeking to understand how judicial decisions may affect your rights, these summaries provide the essential context and implications you need.",
    ],
    sections: [
      {
        icon: "fas fa-scale-balanced",
        heading: "Supreme Court — Right to Privacy in the Age of Surveillance",
        body: [
          "In a landmark 9-judge bench decision, the Supreme Court significantly expanded the scope of the Right to Privacy under Article 21, holding that state surveillance programmes must meet a stringent proportionality test before they can override individual privacy interests. The judgment establishes a three-part test: legitimate aim, rational connection between the measure and the aim, and necessity as the least restrictive means available.",
          "The Court directed the establishment of an independent statutory oversight body for all surveillance activities, with the power to review and authorise interception requests. This judgment has far-reaching implications for government agencies, telecom providers, and technology companies operating in India, requiring them to reassess their data sharing and surveillance cooperation frameworks.",
        ],
      },
      {
        icon: "fas fa-briefcase",
        heading: "Supreme Court — Arbitration & Commercial Dispute Resolution",
        body: [
          "The Supreme Court issued a series of clarificatory judgments on the Arbitration and Conciliation Act, addressing longstanding ambiguities that had created conflicting High Court decisions. Key rulings include: setting aside an arbitral award requires a higher threshold of judicial review than previously applied by several High Courts; the doctrine of separability applies even where the main contract is found to be void ab initio; and emergency interim measures by arbitral tribunals are enforceable without separate court confirmation.",
          "For businesses engaged in international arbitration seated in India, the Court upheld the enforcement of foreign awards even where the underlying dispute involved allegations of fraud — rejecting the argument that fraud allegations automatically oust arbitration jurisdiction. This pro-arbitration stance is expected to strengthen India's position as a preferred arbitration seat for international commercial disputes.",
        ],
      },
      {
        icon: "fas fa-house-chimney-crack",
        heading: "Telangana High Court — Land Acquisition & Property Rights",
        body: [
          "The Telangana High Court delivered a significant ruling on the interpretation of the Telangana Land Acquisition Act amendments, holding that compensation must be calculated based on the highest registered sale transaction in the locality during the preceding three years — rather than the average, which had been the practice of several acquiring authorities. This interpretation substantially increases compensation entitlements for affected landowners.",
          "In a related judgment, the Court struck down the state government's attempt to acquire agricultural land for a private industrial park without following the enhanced consultation and consent procedures introduced by the 2025 amendments. The ruling reinforces that public purpose alone does not override procedural safeguards, and that landowners' right to be heard is a non-negotiable component of the acquisition process.",
        ],
      },
      {
        icon: "fas fa-users",
        heading: "Implications for Pending Litigation",
        body: [
          "These judgments create immediate opportunities for parties with pending litigation in similar areas. If your case involves surveillance, data protection, arbitration disputes, or land acquisition in Telangana, the new precedent may support a revised legal strategy. Existing appeals and pending matters should be reviewed in light of these developments.",
          "We recommend that parties with relevant pending matters consult their legal counsel promptly — in some cases, the window for invoking new precedent-based arguments may be limited by procedural timelines. Our firm is actively tracking these developments and advising clients on the strategic implications for their matters.",
        ],
      },
    ],
  },
  {
    slug: "telangana-updates",
    icon: "fas fa-map-location-dot",
    title: "Telangana Legal Updates",
    short:
      "Curated updates on Telangana-specific legislation, government notifications, High Court rulings, and regulatory changes affecting the state.",
    tag: "TELANGANA UPDATES",
    date: "May 2026",
    author: "Adv. K. Lahari",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1400&h=600&fit=crop",
    highlights: [
      "Dharani Portal Phase 2 introduces biometric verification and grievance redressal",
      "GHMC deemed approval for building plans if not processed within 45 days",
      "Stamp duty revised upward 12–18% across Hyderabad urban areas",
      "First-time homebuyer concession reduces stamp duty to 5% for properties under ₹50 lakh",
    ],
    relatedServices: ["land-disputes", "rental-disputes", "contract-drafting"],
    overview: [
      "Telangana's legal and regulatory environment continues to evolve with state-specific amendments, new government schemes, and significant High Court rulings that directly impact residents, businesses, and property owners across the state. From Dharani portal reforms to updated municipal governance frameworks, staying current with these changes is essential for anyone operating within Telangana's jurisdiction.",
      "This section compiles the most important Telangana-specific legal developments, with particular focus on areas that most commonly affect our clients — property rights, municipal regulations, state-level taxation, and welfare scheme implementations.",
    ],
    sections: [
      {
        icon: "fas fa-desktop",
        heading: "Dharani Portal — Phase 2 Reforms",
        body: [
          "The Telangana government has initiated Phase 2 of the Dharani portal reforms, introducing several critical changes to how land records are managed and mutations are processed. Key updates include mandatory biometric verification for all mutation applications, integration with court records for automatic updating of title in case of court decrees, and a new grievance redressal mechanism with a 30-day resolution timeline.",
          "For property buyers, the updated portal now provides a comprehensive title certificate that includes encumbrance history, litigation status, and mutation trail — reducing the reliance on manual title searches. However, users should be aware that the portal's records remain declaratory in nature and do not substitute for independent legal verification of title.",
        ],
      },
      {
        icon: "fas fa-city",
        heading: "GHMC & Municipal Governance Overhaul",
        body: [
          "The Greater Hyderabad Municipal Corporation Act has been substantially amended, introducing new provisions for building plan approvals, occupancy certificates, and commercial use conversions. The most impactful change is the introduction of a deemed approval mechanism: if the municipal authority fails to process a building plan application within 45 days, the plan is deemed approved — subject to compliance with structural safety norms.",
          "For businesses operating in commercial premises, the new framework introduces a unified trade licence system that consolidates multiple municipal permits into a single registration. This simplification reduces the bureaucratic burden but also imposes stricter compliance obligations, with automated penalty systems replacing discretionary enforcement.",
        ],
      },
      {
        icon: "fas fa-hand-holding-dollar",
        heading: "State Tax & Revenue Updates",
        body: [
          "Telangana's stamp duty and registration framework has been updated with revised market value guidelines effective from April 2026. The updated circle rates reflect a 12-18% increase across most urban and peri-urban areas in Hyderabad, significantly impacting property registration costs. However, a new concessionary rate applies to first-time homebuyers purchasing properties valued below ₹50 lakh, reducing stamp duty from 7.5% to 5%.",
          "The state has also introduced a property tax rationalisation programme for GHMC areas, with a new slab-based assessment system replacing the earlier annual rental value method. Property owners should expect revised tax assessments and are advised to verify their current assessment through the GHMC portal.",
        ],
      },
      {
        icon: "fas fa-circle-info",
        heading: "Practical Guidance for Telangana Residents",
        body: [
          "If you own property in Telangana, verify your Dharani records against the Phase 2 updates and ensure your contact details and biometric verification are current. For pending building plan applications, monitor the new deemed approval timelines and ensure all structural safety documentation is complete to benefit from the expedited process.",
          "For businesses, review your municipal permits against the unified trade licence requirements and initiate the consolidated registration process before the transition deadline. Early compliance avoids the automated penalty system and ensures uninterrupted operations. Our firm assists clients with all Telangana-specific regulatory matters — contact us for guidance tailored to your situation.",
        ],
      },
    ],
  },
  {
    slug: "legal-alerts",
    icon: "fas fa-bell",
    title: "Legal Alerts",
    short:
      "Time-sensitive legal notifications, compliance deadlines, and urgent regulatory advisories that require immediate attention from individuals and businesses.",
    tag: "LEGAL ALERTS",
    date: "June 2026",
    author: "Adv. K. Lahari",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&h=600&fit=crop",
    highlights: [
      "DPDP Act full compliance deadline: 30 September 2026 — penalties up to ₹250 crore",
      "RBI updated KYC norms in immediate effect for all regulated entities",
      "Telangana Building Regularisation Scheme closes 31 July 2026",
      "GST annual return (GSTR-9) filing deadline: 31 December 2026",
    ],
    relatedServices: ["business-startup-legal", "contract-drafting", "insolvency-bankruptcy"],
    overview: [
      "Certain legal developments demand immediate attention — compliance deadlines that cannot be extended, regulatory changes that take effect without further notice, and court directives that create binding obligations. This section highlights the most time-sensitive legal alerts, ensuring you have the information you need to act promptly and protect your interests.",
      "Each alert includes the nature of the requirement, applicable deadlines, and recommended actions. We strongly recommend reviewing these alerts regularly and consulting with legal counsel on any matters that may affect your personal or business interests.",
    ],
    sections: [
      {
        icon: "fas fa-clock",
        heading: "DPDP Act Compliance Deadline — 30 September 2026",
        body: [
          "All data fiduciaries operating in India must achieve full compliance with the Digital Personal Data Protection Act's operational rules by 30 September 2026. This includes implementing consent management mechanisms, appointing Data Protection Officers (where applicable), completing data mapping exercises, and establishing grievance redressal mechanisms accessible to data principals.",
          "Organisations that have not commenced their compliance programmes should treat this as an urgent priority. The Data Protection Board has indicated that enforcement action will commence from 1 October 2026, with initial focus on organisations processing significant personal data. Penalties for non-compliance can reach ₹250 crore, and affected individuals can file complaints directly with the Board.",
        ],
      },
      {
        icon: "fas fa-file-signature",
        heading: "Updated KYC & Aadhaar Requirements — Immediate Effect",
        body: [
          "The Reserve Bank of India's updated Know Your Customer norms are now in effect, requiring all regulated entities to implement enhanced verification procedures for high-risk customers and transactions. The updated norms mandate video-based verification for non-face-to-face account openings, Aadhaar-based e-KYC with biometric consent for all new accounts, and periodic re-verification of existing accounts based on risk categorisation.",
          "Financial institutions and fintech companies must ensure their onboarding processes comply with the updated norms immediately. Customers may experience delays in account opening as institutions upgrade their verification infrastructure. We recommend initiating compliance upgrades promptly to avoid operational disruptions.",
        ],
      },
      {
        icon: "fas fa-building",
        heading: "Telangana Building Regularisation Scheme — 31 July 2026",
        body: [
          "The Telangana government's Building Regularisation Scheme for unauthorised constructions in urban areas closes on 31 July 2026. Property owners with constructions that deviate from approved building plans — or were constructed without valid permits — can regularise their structures by paying the prescribed regularisation charges before the deadline.",
          "Post-deadline, unauthorised constructions will be subject to demolition proceedings under the relevant municipal Acts. Property owners are strongly advised to assess their regularisation eligibility and initiate the application process well before the deadline. The regularisation certificate obtained through this scheme provides protection against future demolition orders.",
        ],
      },
      {
        icon: "fas fa-triangle-exclamation",
        heading: "GST Annual Return Filing — Action Required",
        body: [
          "Businesses with aggregate turnover exceeding ₹5 crore in the previous financial year must file their GST annual return (GSTR-9) and reconciliation statement (GSTR-9C) by 31 December 2026. However, the process of compiling the necessary data and obtaining audit certifications should begin immediately to avoid last-minute complications.",
          "The GST authorities have increased scrutiny of annual returns, with automated cross-referencing against income tax returns and bank transaction data. Discrepancies are being flagged for further investigation, and penalties for misreporting have been enhanced. Engaging a qualified GST practitioner for return preparation and review is strongly recommended.",
        ],
      },
    ],
  },
];

export const getInsightBySlug = (slug) =>
  INSIGHTS.find((a) => a.slug === slug);

export const getAdjacentInsights = (slug) => {
  const idx = INSIGHTS.findIndex((a) => a.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? INSIGHTS[idx - 1] : null,
    next: idx < INSIGHTS.length - 1 ? INSIGHTS[idx + 1] : null,
  };
};
