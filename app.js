const companies = [
  {
    id: "anthropic",
    name: "Anthropic",
    category: "Frontier AI",
    description: "Safety-focused AI systems, frontier research, infrastructure, and applied deployment.",
    roles: ["Applied AI", "Software", "Product"],
    fit: "Strong for applied AI, evals, AI safety tooling, data systems, and technical program paths. Most research-scientist tracks expect research depth beyond a typical master’s profile.",
    hubs: "San Francisco, New York, Seattle, London, Dublin, Toronto/Ontario, and selected global offices",
    source: "https://www.anthropic.com/careers/jobs",
    sourceLabel: "Official jobs board",
    visa: "Explicit",
    visaTitle: "Explicit policy",
    visaDetail: "Anthropic’s official careers FAQ says it sponsors visas and green cards for eligible roles. This is not a blanket approval: the exact role, location, and program matter.",
    visaSource: "https://www.anthropic.com/careers",
    prep: ["Build an evaluation or reliability project", "Show clean Python/data systems work", "Read each program’s work-authorization language"],
  },
  {
    id: "openai",
    name: "OpenAI",
    category: "Frontier AI",
    description: "Research, product, safety, infrastructure, and deployment work around general-purpose AI.",
    roles: ["Applied AI", "Software", "Product"],
    fit: "Strong fit for applied engineering, platform, developer experience, integrity, and emerging-talent tracks. Research roles are highly selective and often research-intensive.",
    hubs: "San Francisco, New York, Seattle, London, Dublin, and selected APAC/EMEA offices",
    source: "https://openai.com/careers/emerging-talent/",
    sourceLabel: "Official emerging talent",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "The official careers surface advertises internships, residencies, and full-time opportunities, but this source set does not provide a company-wide sponsorship promise. Confirm CPT acceptance and future sponsorship with the recruiter for the exact U.S. role.",
    visaSource: "https://openai.com/careers/emerging-talent/",
    prep: ["Ship an AI tool with real evaluation", "Write a concise technical decision log", "Prepare a direct work-authorization answer"],
  },
  {
    id: "google",
    name: "Google",
    category: "Big Tech",
    description: "Product engineering, data, cloud, AI research, and Google DeepMind opportunities.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Excellent breadth for MSIM: analytics, APM/PM, SWE, cloud, trust & safety, and AI-adjacent product roles. DeepMind research roles have separate research expectations.",
    hubs: "Bay Area, New York, Seattle, Austin, Cambridge, London, Zurich, Toronto, and more",
    source: "https://www.google.com/about/careers/applications/jobs/results/",
    sourceLabel: "Official job search",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "The public job search is the authoritative place to inspect eligibility questions. Sponsorship cannot be inferred from company scale or a previous employer filing; ask about the specific internship and conversion path.",
    visaSource: "https://www.google.com/about/careers/applications/jobs/results/",
    prep: ["Practice product + analytics cases", "Prepare SQL and coding evidence", "Target both Google and DeepMind listings"],
  },
  {
    id: "meta",
    name: "Meta",
    category: "Big Tech",
    description: "Consumer products, AI infrastructure, generative AI, AR/VR, data, and research.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Strong match for product analytics, data engineering, software engineering, AI infrastructure, and technical product tracks. FAIR scientist internships normally target PhD candidates.",
    hubs: "Menlo Park, New York, Seattle, Boston, Austin, London, Paris, Zurich, and more",
    source: "https://www.metacareers.com/careerprograms/students/",
    sourceLabel: "Official student careers",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Meta’s student and job pages provide role-specific application requirements. This project does not treat historical hiring patterns as a sponsorship guarantee; review each job’s authorization question.",
    visaSource: "https://www.metacareers.com/careerprograms/students/",
    prep: ["Code + systems interviews", "Metrics and experimentation story", "Choose product or infrastructure narrative"],
  },
  {
    id: "microsoft",
    name: "Microsoft",
    category: "Big Tech",
    description: "Cloud, Copilot, AI platform, developer tools, enterprise software, research, and product.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Very broad MSIM target: data/AI, Azure, product, technical program, and software engineering. Microsoft AI and Research roles can be a higher-bar subset.",
    hubs: "Redmond, Bay Area, New York, Atlanta, Cambridge UK, London, Vancouver, and global offices",
    source: "https://careers.microsoft.com/v2/global/en/universityinternship",
    sourceLabel: "Official university internships",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Microsoft’s university program is official, but authorization requirements vary by country and role. Confirm internship authorization and any full-time sponsorship policy for the exact requisition.",
    visaSource: "https://careers.microsoft.com/v2/global/en/universityinternship",
    prep: ["Build one Copilot/Azure-adjacent project", "Practice coding + behavioral loops", "Track roles by product group"],
  },
  {
    id: "amazon",
    name: "Amazon / AWS",
    category: "Cloud & Commerce",
    description: "Cloud, commerce, robotics, applied science, advertising, and Amazon AGI teams.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "One of the widest technical internship universes. Strong options across SDE, data, applied science-adjacent, cloud solutions, product, and operations analytics.",
    hubs: "Seattle/Bellevue, Arlington, New York, Boston, Bay Area, Austin, Nashville, and global sites",
    source: "https://www.amazon.jobs/content/en/career-programs/university",
    sourceLabel: "Official university recruiting",
    visa: "Posting",
    visaTitle: "Posting-level language",
    visaDetail: "Amazon listings can explicitly state that a particular internship cannot offer visa sponsorship. Treat the exact 2027 requisition as decisive; do not generalize from a different team, function, or year.",
    visaSource: "https://www.amazon.jobs/content/en/faq/university-talent",
    prep: ["LeetCode + leadership principles", "Prepare one quantified project story", "Check authorization before investing in a loop"],
  },
  {
    id: "apple",
    name: "Apple",
    category: "Big Tech",
    description: "Devices, platforms, services, machine learning, privacy, and on-device AI.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Strong for data, software, ML engineering, product operations, and privacy-minded AI. Apple has official U.S. machine learning and AI internship listings.",
    hubs: "Cupertino, Sunnyvale, Seattle, Austin, San Diego, New York, Zurich, London, and more",
    source: "https://www.apple.com/careers/us/students.html",
    sourceLabel: "Official student careers",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Apple eligibility language is role and country specific. Some international listings explicitly require pre-existing authorization, so only the specific U.S. posting and recruiter can answer the sponsorship question.",
    visaSource: "https://jobs.apple.com/en-us/details/200664780-3810/machine-learning-and-artificial-intelligence-undergrad-internships",
    prep: ["Show product-quality implementation", "Highlight privacy and user impact", "Practice data structures plus design reasoning"],
  },
  {
    id: "nvidia",
    name: "NVIDIA",
    category: "AI Infrastructure",
    description: "Accelerated computing, AI systems, compilers, networking, robotics, and applied research.",
    roles: ["Applied AI", "Data", "Software"],
    fit: "Excellent if you can show systems depth: ML tooling, distributed systems, GPU/software curiosity, or data/AI platform work. University recruiting accepts master’s candidates.",
    hubs: "Santa Clara, Austin, Seattle, Toronto, Israel, India, Europe, and selected global engineering sites",
    source: "https://www.nvidia.com/en-us/about-nvidia/careers/university-recruiting/",
    sourceLabel: "Official university recruiting",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "NVIDIA’s official university page covers year-round internships for BS, MS, PhD, and MBA students. It does not make a universal sponsorship promise in the cited source.",
    visaSource: "https://www.nvidia.com/en-us/about-nvidia/careers/university-recruiting/",
    prep: ["Learn profiling or model-serving basics", "Show systems performance thinking", "Target platform and developer-product teams too"],
  },
  {
    id: "databricks",
    name: "Databricks",
    category: "Data & AI",
    description: "Data platforms, lakehouse systems, MLflow, developer infrastructure, and enterprise AI.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "One of the clearest MSIM-aligned targets: data systems, ML platform, analytics, developer tools, and product. Its official university page highlights graduate students and deep learning/PyTorch foundations.",
    hubs: "San Francisco, Mountain View, Seattle/Bellevue, New York, Boston, Amsterdam, and more",
    source: "https://www.databricks.com/company/careers/university-recruiting",
    sourceLabel: "Official university recruiting",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Use the official university recruiting and job pages to inspect individual job eligibility. No company-wide H-1B or green-card promise is asserted here without a first-party policy statement.",
    visaSource: "https://www.databricks.com/company/careers/university-recruiting",
    prep: ["Ship a data/ML platform project", "Know SQL and distributed data concepts", "Create a clear PyTorch or evaluation artifact"],
  },
  {
    id: "snowflake",
    name: "Snowflake",
    category: "Data & AI",
    description: "Cloud data platform, data applications, AI data products, and developer tooling.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Strong data-focused target for analytics engineering, data platform, product, and software roles; useful complement to model-first companies.",
    hubs: "Bay Area, Bellevue, New York, San Mateo, Dublin, Toronto, and distributed offices",
    source: "https://careers.snowflake.com/us/en/university",
    sourceLabel: "Official university recruiting",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Authorization and immigration language must be checked in the individual internship posting. This listing uses no inferred sponsorship claim.",
    visaSource: "https://careers.snowflake.com/us/en/university",
    prep: ["Strong SQL + data modeling", "Explain warehouse/lakehouse trade-offs", "Show an end-to-end data product"],
  },
  {
    id: "salesforce",
    name: "Salesforce",
    category: "Enterprise Tech",
    description: "CRM, data cloud, AI applications, developer platforms, and enterprise product systems.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Good route into enterprise AI, data cloud, analytics, product, and customer-facing technical paths.",
    hubs: "San Francisco, Seattle/Bellevue, Indianapolis, Atlanta, New York, Chicago, and global offices",
    source: "https://www.salesforce.com/company/careers/university/internships/",
    sourceLabel: "Official Futureforce internships",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "The official university program is the correct source for openings. Check every role’s current authorization questions rather than assuming a consistent policy across teams.",
    visaSource: "https://www.salesforce.com/company/careers/university/internships/",
    prep: ["Build an enterprise workflow demo", "Show stakeholder communication", "Practice product and system stories"],
  },
  {
    id: "adobe",
    name: "Adobe",
    category: "Creative & AI",
    description: "Creative software, document intelligence, analytics, marketing technology, and generative AI.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Good for AI product, creative tooling, data science, experimentation, analytics, and engineering. Portfolio quality matters for many product-facing roles.",
    hubs: "San Jose, San Francisco, Seattle, New York, Lehi, Austin, Boston, and global studios",
    source: "https://careers.adobe.com/us/en/intern-and-graduate",
    sourceLabel: "Official intern & graduate careers",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "No universal sponsorship statement is presented in this source set. Confirm authorization requirements when a 2027 role opens.",
    visaSource: "https://careers.adobe.com/us/en/intern-and-graduate",
    prep: ["Pair a polished demo with metrics", "Show UX and technical judgment", "Develop one creative-AI or document-AI project"],
  },
  {
    id: "oracle",
    name: "Oracle",
    category: "Cloud & Enterprise",
    description: "Cloud infrastructure, databases, developer platforms, enterprise applications, and AI services.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Broad roles across cloud, data, applications, and product. Useful for candidates who want deep enterprise technology exposure.",
    hubs: "Austin, Nashville, Redwood City, Seattle, Santa Clara, Reston, and global offices",
    source: "https://www.oracle.com/careers/students-grads/",
    sourceLabel: "Official students & grads",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Sponsorship policy is not assumed from the company’s scale. Use the exact role’s legal authorization and export-control questions as the source of truth.",
    visaSource: "https://www.oracle.com/careers/students-grads/",
    prep: ["Develop cloud + database fluency", "Practice behavioral examples", "Search OCI, database, and AI service teams"],
  },
  {
    id: "cisco",
    name: "Cisco",
    category: "Network & Security",
    description: "Networking, security, observability, collaboration, infrastructure, and AI-enabled enterprise systems.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Useful for platform, security, networking, data, and technical product roles. Strong target if you can connect AI to real enterprise systems.",
    hubs: "San Jose, Research Triangle, Austin, New York, Seattle, Chicago, and global offices",
    source: "https://careers.cisco.com/global/en/entry-level-jobs",
    sourceLabel: "Official entry-level careers",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Verify authorization and future sponsorship on the live requisition. Do not rely on unaffiliated sponsorship databases for the decision.",
    visaSource: "https://careers.cisco.com/global/en/entry-level-jobs",
    prep: ["Show systems/security fundamentals", "Build an API or observability project", "Target Meraki, security, data, and platform teams"],
  },
  {
    id: "servicenow",
    name: "ServiceNow",
    category: "Enterprise AI",
    description: "Enterprise workflows, IT operations, platform engineering, AI-assisted automation, and product.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Strong for workflow automation, enterprise AI, data, product, and technical program candidates who can explain business impact.",
    hubs: "Santa Clara, San Diego, San Francisco, Seattle, New York, Chicago, and more",
    source: "https://www.servicenow.com/careers/early-careers.html",
    sourceLabel: "Official early-in-career",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "The early-career portal is official, but current U.S. work authorization/sponsorship terms must be verified for the specific internship.",
    visaSource: "https://www.servicenow.com/careers/early-careers.html",
    prep: ["Build a workflow automation case study", "Learn enterprise UX language", "Quantify operational impact"],
  },
  {
    id: "stripe",
    name: "Stripe",
    category: "Fintech Platform",
    description: "Payments infrastructure, financial products, developer APIs, data, risk, and AI-enabled tooling.",
    roles: ["Data", "Software", "Product"],
    fit: "High-signal option for API design, risk/data, product analytics, developer experience, and systems roles.",
    hubs: "San Francisco, Seattle, New York, South San Francisco, Chicago, and global offices",
    source: "https://stripe.com/jobs/search",
    sourceLabel: "Official job search",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "No blanket sponsorship conclusion is made from public reputation or historical cases. Review the current U.S. internship listing and contact the recruiting team for conversion questions.",
    visaSource: "https://stripe.com/jobs/search",
    prep: ["Build API-first work", "Practice systems + product judgment", "Show data-informed decisions"],
  },
  {
    id: "palantir",
    name: "Palantir",
    category: "Data Platform",
    description: "Data integration, operational software, AI platforms, and deployment-focused engineering.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Relevant for platform, data, forward-deployed, and product roles. Some work may involve eligibility, clearance, or customer-specific constraints.",
    hubs: "New York, Washington DC, Palo Alto, Denver, Seattle, London, and more",
    source: "https://www.palantir.com/careers/",
    sourceLabel: "Official careers",
    visa: "Review",
    visaTitle: "Role constraints matter",
    visaDetail: "Individual roles can have citizenship, clearance, client, or export-control requirements. Confirm authorization before assuming any role can support an international student path.",
    visaSource: "https://www.palantir.com/careers/",
    prep: ["Build a decision-support data app", "Write a clear deployment narrative", "Screen customer and clearance requirements early"],
  },
  {
    id: "uber",
    name: "Uber",
    category: "Consumer Platform",
    description: "Marketplace systems, mobility, delivery, mapping, data science, infrastructure, and product.",
    roles: ["Data", "Software", "Product"],
    fit: "Strong for marketplace analytics, experimentation, data science, platform, and product. Build a quantitative story around a user or operational system.",
    hubs: "San Francisco, Seattle, New York, Sunnyvale, Chicago, Los Angeles, and more",
    source: "https://www.uber.com/us/en/careers/teams/university/",
    sourceLabel: "Official university careers",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "No universal sponsorship policy is asserted here. The job application and recruiter must confirm the conditions for each 2027 opening.",
    visaSource: "https://www.uber.com/us/en/careers/teams/university/",
    prep: ["Practice SQL and experiment design", "Build marketplace metrics intuition", "Prepare technical product stories"],
  },
  {
    id: "airbnb",
    name: "Airbnb",
    category: "Consumer Platform",
    description: "Marketplace technology, trust, search, data, design systems, and product engineering.",
    roles: ["Data", "Software", "Product"],
    fit: "Good for product analytics, data, engineering, trust, and design/technology bridge roles.",
    hubs: "San Francisco, Seattle, New York, Portland, and selected distributed locations",
    source: "https://careers.airbnb.com/",
    sourceLabel: "Official careers",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Work location and authorization eligibility are role-specific. Consult the live posting before applying and avoid relying on prior-cycle information.",
    visaSource: "https://careers.airbnb.com/",
    prep: ["Tell a user-impact story", "Show experimentation or marketplace analysis", "Build polished end-to-end portfolio work"],
  },
  {
    id: "doordash",
    name: "DoorDash",
    category: "Consumer Platform",
    description: "Logistics, marketplace systems, data, ads, merchant products, and AI-enabled operations.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "High relevance for marketplace data science, analytics, software, and product. Logistics and operations stories are especially useful.",
    hubs: "San Francisco, New York, Seattle, Los Angeles, Tempe, and more",
    source: "https://careersatdoordash.com/university-careers/",
    sourceLabel: "Official university careers",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "No company-wide promise is stated in the cited source. Confirm the exact internship’s CPT/work-authorization terms and any prospective full-time sponsorship policy.",
    visaSource: "https://careersatdoordash.com/university-careers/",
    prep: ["Show operations + data insight", "Practice SQL and product sense", "Build a logistics or marketplace project"],
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    category: "Professional Platform",
    description: "Professional graph, recommender systems, data, AI products, trust, and enterprise SaaS.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Strong for data science, product analytics, engineering, and AI/recommendation-adjacent roles; a useful distinct target within the Microsoft ecosystem.",
    hubs: "Sunnyvale, San Francisco, New York, Bellevue, Chicago, Omaha, and global offices",
    source: "https://careers.linkedin.com/students",
    sourceLabel: "Official student careers",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "LinkedIn’s student portal is an official discovery point; work authorization and future sponsorship must be read from the specific live job.",
    visaSource: "https://careers.linkedin.com/students",
    prep: ["Learn recommender/experimentation basics", "Quantify professional-network product insights", "Build a data storytelling portfolio"],
  },
  {
    id: "figma",
    name: "Figma",
    category: "Product Platform",
    description: "Collaborative design software, developer tools, AI-assisted creation, analytics, and product systems.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Excellent for candidates who can combine technical implementation with product taste, collaboration, and user empathy.",
    hubs: "San Francisco, New York, London, Tokyo, Singapore, and selected remote locations",
    source: "https://www.figma.com/careers/",
    sourceLabel: "Official careers",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Use the official jobs page and current application form to confirm eligibility. This card does not infer sponsorship from a prior job market cycle.",
    visaSource: "https://www.figma.com/careers/",
    prep: ["Polish a product case study", "Show collaborative engineering/design work", "Build an AI-enabled workflow demo"],
  },
  {
    id: "cloudflare",
    name: "Cloudflare",
    category: "Internet Infrastructure",
    description: "Connectivity cloud, security, developer platforms, edge compute, data, and AI infrastructure.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Strong for systems, security, developer platforms, data, and AI infrastructure. Great complement to pure application companies.",
    hubs: "San Francisco, Austin, New York, Seattle, Lisbon, London, Singapore, and more",
    source: "https://www.cloudflare.com/careers/early-talent/",
    sourceLabel: "Official early talent",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Authorization policy must be checked in the exact job. The company’s official portal is linked so the applicant can inspect live requirements.",
    visaSource: "https://www.cloudflare.com/careers/early-talent/",
    prep: ["Learn networking/security primitives", "Show distributed-systems curiosity", "Build with APIs or edge tooling"],
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Developer Data",
    description: "Developer data platform, cloud database, search, AI application data, and customer engineering.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Very relevant for data/product and developer-platform paths, especially if you can demonstrate data modeling and an AI application built on a production-minded stack.",
    hubs: "New York, Austin, Atlanta, Palo Alto, Seattle, Boston, and global offices",
    source: "https://www.mongodb.com/careers",
    sourceLabel: "Official careers",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "No blanket immigration claim is made without a current first-party statement. Confirm both internship eligibility and future full-time policy in writing.",
    visaSource: "https://www.mongodb.com/careers",
    prep: ["Build a data-backed AI app", "Show schema/data-model decisions", "Target developer experience and product analytics teams"],
  },
  {
    id: "cohere",
    name: "Cohere",
    category: "Enterprise AI",
    description: "Enterprise foundation models, retrieval, evaluation, security, and AI platform engineering.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Strong AI-native target for enterprise LLM applications, retrieval, evals, model tooling, and customer-facing technical work.",
    hubs: "Toronto, San Francisco, New York, London, Montreal, Paris, and selected global offices",
    source: "https://cohere.com/careers",
    sourceLabel: "Official careers",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Use the exact role and country to verify work authorization. This site distinguishes confirmed policy from applicant assumptions and does not make an unsupported sponsorship claim.",
    visaSource: "https://cohere.com/careers",
    prep: ["Build RAG + evaluation proof", "Explain enterprise trade-offs", "Show secure, reliable AI thinking"],
  },
  {
    id: "scale",
    name: "Scale AI",
    category: "AI Data & Systems",
    description: "Data, evaluation, model development infrastructure, public sector, and enterprise AI systems.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Relevant for AI data/evaluation, systems, product, and customer deployment. Pay close attention to role-specific customer or clearance requirements.",
    hubs: "San Francisco, New York, Washington DC, Seattle, and selected offices",
    source: "https://scale.com/careers",
    sourceLabel: "Official careers",
    visa: "Review",
    visaTitle: "Role constraints matter",
    visaDetail: "The relevant authorization decision depends on the exact role and customer context. Government-adjacent roles may carry additional citizenship or clearance restrictions.",
    visaSource: "https://scale.com/careers",
    prep: ["Create a data/evaluation workflow", "Practice technical communication", "Screen government/customer constraints early"],
  },
  {
    id: "amd",
    name: "AMD",
    category: "AI Infrastructure",
    description: "CPUs, GPUs, adaptive computing, AI software, compilers, and data-center systems.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Strong for software, systems, data, product, and AI-platform candidates. Hardware-heavy roles may expect EE/CE depth, but developer tooling and software paths are viable.",
    hubs: "Austin, Santa Clara, San Jose, Seattle, Boston, and global engineering sites",
    source: "https://careers.amd.com/student-programs-north-america",
    sourceLabel: "Official North America student programs",
    visa: "Posting",
    visaTitle: "Work authorization stated",
    visaDetail: "AMD’s North America student page says applicants must be legally eligible or have work authorization in the internship country. Treat the exact U.S. posting as decisive for CPT and future sponsorship.",
    visaSource: "https://careers.amd.com/student-programs-north-america",
    prep: ["Target software and AI platform roles", "Show C++ or systems evidence", "Check each posting’s authorization language"],
  },
  {
    id: "intel",
    name: "Intel",
    category: "AI Infrastructure",
    description: "Semiconductors, AI accelerators, compilers, cloud software, data platforms, and manufacturing systems.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Broad graduate internship route across AI software, data, security, product, and systems. Some roles are specialized for hardware or advanced research.",
    hubs: "Santa Clara, Hillsboro, Folsom, Phoenix, Austin, and global engineering sites",
    source: "https://jobs.intel.com/en/internships",
    sourceLabel: "Official interns & grads",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Intel’s official internship page covers graduate-level and AI internships. Sponsorship and export-control constraints remain posting-specific.",
    visaSource: "https://jobs.intel.com/en/internships",
    prep: ["Search AI software and data roles", "Build systems performance intuition", "Screen export-control terms"],
  },
  {
    id: "qualcomm",
    name: "Qualcomm",
    category: "Edge AI",
    description: "On-device AI, wireless platforms, compilers, multimodal models, and mobile systems.",
    roles: ["Applied AI", "Data", "Software"],
    fit: "A reach-to-strong target for ML systems, on-device inference, software, and data. Many advanced AI roles prefer CS/CE/EE depth.",
    hubs: "San Diego, Bay Area, Boulder, Raleigh, and global research sites",
    source: "https://www.qualcomm.com/company/careers/internships-and-early-in-career-opportunities",
    sourceLabel: "Official internships & early career",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Official postings identify degree, graduation-date, and location requirements. Confirm CPT acceptance and future sponsorship on the exact U.S. role.",
    visaSource: "https://careers.qualcomm.com/careers",
    prep: ["Show efficient ML or systems work", "Target software-facing teams", "Prepare for specialized technical screens"],
  },
  {
    id: "ibm",
    name: "IBM",
    category: "Enterprise AI",
    description: "Hybrid cloud, watsonx, data platforms, consulting, infrastructure, and enterprise research.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Broad MSIM fit across data, AI engineering, software, product, consulting, and technical program work.",
    hubs: "New York, Austin, Raleigh, San Jose, Boston, and global labs",
    source: "https://www.ibm.com/careers/internships",
    sourceLabel: "Official internships",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "IBM’s internship portal is the discovery source; work authorization and immigration support differ by requisition and employing entity.",
    visaSource: "https://www.ibm.com/careers/internships",
    prep: ["Connect AI to enterprise workflows", "Show data and stakeholder fluency", "Search product and consulting tracks"],
  },
  {
    id: "tesla",
    name: "Tesla",
    category: "Autonomy & Systems",
    description: "Autonomy, robotics, manufacturing software, energy, data platforms, and applied AI.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Relevant for software, data, AI, operations, and product candidates, but many roles demand strong systems or domain depth and on-site availability.",
    hubs: "Bay Area, Austin, Palo Alto, Fremont, Buffalo, and manufacturing sites",
    source: "https://www.tesla.com/careers/search/?type=3",
    sourceLabel: "Official internship search",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Tesla’s official internship listings require active enrollment and return to school. Authorization and future sponsorship must be confirmed per role.",
    visaSource: "https://www.tesla.com/careers/search/?type=3",
    prep: ["Show production ownership", "Prepare for fast technical screens", "Check on-site and return-to-school requirements"],
  },
  {
    id: "bloomberg",
    name: "Bloomberg",
    category: "Financial Technology",
    description: "Financial data, search, analytics, machine learning, infrastructure, and enterprise software.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Excellent for data engineering, analytics, software, search, and product-facing information systems.",
    hubs: "New York, Princeton, San Francisco, London, and global offices",
    source: "https://www.bloomberg.com/company/careers/early-career/",
    sourceLabel: "Official early careers",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Use Bloomberg’s official early-career portal and live posting to verify CPT and future sponsorship conditions.",
    visaSource: "https://www.bloomberg.com/company/careers/early-career/",
    prep: ["Practice coding and data structures", "Show data product thinking", "Learn financial-information workflows"],
  },
  {
    id: "atlassian",
    name: "Atlassian",
    category: "Product Platform",
    description: "Developer collaboration, enterprise SaaS, data, AI features, and distributed product engineering.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Strong for product-minded software, data, ML, design, and program candidates. Official U.S. internships include master’s-eligible roles in some disciplines.",
    hubs: "San Francisco, Seattle, Austin, New York, and distributed U.S. locations",
    source: "https://www.atlassian.com/company/careers/earlycareers",
    sourceLabel: "Official early careers",
    visa: "Posting",
    visaTitle: "Posting-level language",
    visaDetail: "Atlassian’s official early-career and live internship pages specify degree, graduation, and location conditions. Review sponsorship language on the exact role.",
    visaSource: "https://www.atlassian.com/company/careers/earlycareers",
    prep: ["Show collaborative product work", "Prepare systems or product interviews", "Check whether the role accepts master’s students"],
  },
  {
    id: "roblox",
    name: "Roblox",
    category: "Consumer & AI",
    description: "3D social systems, recommendations, safety, infrastructure, data science, and generative AI.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Strong but selective for data science, safety, infrastructure, product, and AI. Some applied-science internships are PhD-specific.",
    hubs: "San Mateo, California",
    source: "https://careers.roblox.com/jobs?types=internship",
    sourceLabel: "Official internship search",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "The official internship filter is current, but degree level and authorization vary by role. Separate master’s-accessible data/software roles from PhD research programs.",
    visaSource: "https://careers.roblox.com/jobs?types=internship",
    prep: ["Target data, safety, and platform roles", "Practice coding and metrics", "Filter out PhD-only research roles"],
  },
  {
    id: "datadog",
    name: "Datadog",
    category: "Cloud Software",
    description: "Observability, security, developer tools, data platforms, and AI-assisted operations.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Strong for software, data, product, and developer-platform candidates who can show systems curiosity and customer empathy.",
    hubs: "New York, Boston, Denver, San Francisco, and global offices",
    source: "https://careers.datadoghq.com/early-careers/",
    sourceLabel: "Official early careers",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Datadog publicly maintains a robust internship program; authorization and sponsorship remain live-posting questions.",
    visaSource: "https://careers.datadoghq.com/early-careers/",
    prep: ["Build observability or platform proof", "Show technical product judgment", "Practice coding and debugging"],
  },
  {
    id: "intuit",
    name: "Intuit",
    category: "Fintech & AI",
    description: "Financial software, data science, GenAI products, experimentation, and platform engineering.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Excellent MSIM alignment across data science, analytics, AI product, software, and customer-centered product work.",
    hubs: "Mountain View, San Diego, New York, Atlanta, Plano, and global offices",
    source: "https://jobs.intuit.com/category/internship-jobs/27595/9205024/1",
    sourceLabel: "Official internship search",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Use Intuit’s live internship category and the exact posting for work-authorization and future sponsorship conditions.",
    visaSource: "https://jobs.intuit.com/category/internship-jobs/27595/9205024/1",
    prep: ["Show customer and metrics thinking", "Build a financial or workflow AI demo", "Practice data science or SWE screens"],
  },
  {
    id: "pinterest",
    name: "Pinterest",
    category: "Consumer & AI",
    description: "Recommendations, search, ads, computer vision, data, and consumer product systems.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Strong for recommender systems, product analytics, data science, engineering, and product roles.",
    hubs: "San Francisco, Palo Alto, New York, Seattle, and selected offices",
    source: "https://www.pinterestcareers.com/early-career/internships/",
    sourceLabel: "Official internships",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Use the official internship portal and exact role to confirm master’s eligibility, CPT, and future sponsorship.",
    visaSource: "https://www.pinterestcareers.com/early-career/internships/",
    prep: ["Learn ranking and experimentation basics", "Show consumer-product metrics", "Practice SQL and coding"],
  },
  {
    id: "reddit",
    name: "Reddit",
    category: "Consumer Platform",
    description: "Community products, recommendations, ads, safety, data, and large-scale infrastructure.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Relevant for data, recommendations, safety, software, and product, but internship availability is less predictable than large campus programs.",
    hubs: "San Francisco, New York, Chicago, and U.S. remote locations",
    source: "https://redditinc.com/careers",
    sourceLabel: "Official careers",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Reddit’s official career page is the source of truth. Do not assume an internship cycle or sponsorship path until a live role states it.",
    visaSource: "https://redditinc.com/careers",
    prep: ["Monitor rather than wait", "Show community or ranking insights", "Prepare distributed-systems or analytics proof"],
  },
  {
    id: "block",
    name: "Block",
    category: "Fintech Platform",
    description: "Payments, commerce, consumer finance, risk, data, and developer infrastructure.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Strong for payments, risk, data, software, and product; internship cadence can vary across Block businesses.",
    hubs: "Bay Area, New York, Seattle, Atlanta, and distributed U.S. locations",
    source: "https://block.xyz/careers",
    sourceLabel: "Official careers",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Block’s businesses and employing entities vary. Confirm internship authorization and future sponsorship with the exact posting and recruiter.",
    visaSource: "https://block.xyz/careers",
    prep: ["Build risk or payments intuition", "Show API and data work", "Track Square, Cash App, and platform roles"],
  },
  {
    id: "workday",
    name: "Workday",
    category: "Enterprise Platform",
    description: "Enterprise applications, data, AI-assisted workflows, analytics, and cloud engineering.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Good MSIM fit across enterprise AI, analytics, software, product, and technical program roles.",
    hubs: "Pleasanton, Boulder, Atlanta, Boston, Seattle, and global offices",
    source: "https://www.workday.com/en-us/company/careers/early-career.html",
    sourceLabel: "Official early careers",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "Use Workday’s official early-career page and exact posting for U.S. authorization and sponsorship details.",
    visaSource: "https://www.workday.com/en-us/company/careers/early-career.html",
    prep: ["Connect data to enterprise workflows", "Show product and stakeholder skills", "Target analytics, platform, and AI teams"],
  },
  {
    id: "xai",
    name: "xAI",
    category: "Frontier AI",
    description: "Frontier models, training and inference systems, data-center infrastructure, and consumer AI.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "High-upside reach target for exceptional systems, data, product, or AI engineering profiles. It is not a predictable university-recruiting program.",
    hubs: "Bay Area, Memphis, New York, and selected U.S. sites",
    source: "https://x.ai/careers/open-roles/",
    sourceLabel: "Official open roles",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "No company-wide internship or sponsorship promise is asserted here. Use only a live official role and recruiter confirmation.",
    visaSource: "https://x.ai/careers/open-roles/",
    prep: ["Build unusually strong technical proof", "Monitor continuously", "Expect on-site and specialized roles"],
  },
  {
    id: "perplexity",
    name: "Perplexity",
    category: "AI Product",
    description: "AI search, model serving, retrieval, infrastructure, data, and consumer product engineering.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Reach target for AI product, retrieval, infrastructure, data, and product candidates. Formal internship availability is less predictable.",
    hubs: "San Francisco, Palo Alto, New York, and London",
    source: "https://www.perplexity.ai/careers",
    sourceLabel: "Official careers",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "The official careers page and exact job are the only current evidence for role eligibility or sponsorship.",
    visaSource: "https://www.perplexity.ai/careers",
    prep: ["Build retrieval and evaluation proof", "Show product velocity", "Monitor AI systems and product roles"],
  },
  {
    id: "coreweave",
    name: "CoreWeave",
    category: "AI Infrastructure",
    description: "GPU cloud, Kubernetes infrastructure, AI storage, observability, and distributed systems.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Strong-to-reach target for cloud, data, platform, developer tooling, and technical product candidates. Student openings are not guaranteed each cycle.",
    hubs: "New Jersey, New York, Sunnyvale, Bellevue, and distributed U.S. locations",
    source: "https://www.coreweave.com/careers",
    sourceLabel: "Official careers",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "CoreWeave has official U.S. openings, but this site does not claim a standing Summer 2027 internship or sponsorship policy.",
    visaSource: "https://www.coreweave.com/careers",
    prep: ["Build cloud and Kubernetes depth", "Show observability or distributed systems work", "Monitor university-tagged openings"],
  },
  {
    id: "anduril",
    name: "Anduril",
    category: "Defense Technology",
    description: "Autonomy, robotics, defense software, computer vision, data platforms, and edge systems.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "Technically relevant but structurally constrained. Many roles may involve export-control, citizenship, clearance, or customer requirements.",
    hubs: "Costa Mesa, Seattle, Boston, Washington DC, Atlanta, and other U.S. sites",
    source: "https://www.anduril.com/open-roles/",
    sourceLabel: "Official open roles",
    visa: "Posting",
    visaTitle: "Restrictions likely",
    visaDetail: "Read citizenship, export-control, and clearance language before investing in an application. A technically suitable role may still be unavailable to an F-1 student.",
    visaSource: "https://www.anduril.com/open-roles/",
    prep: ["Screen legal restrictions first", "Target unrestricted commercial roles only", "Do not infer eligibility from skill fit"],
  },
  {
    id: "bytedance",
    name: "ByteDance / TikTok",
    category: "Consumer & Frontier AI",
    description: "Recommendation systems, TikTok products, foundation models, data platforms, monetization, and global infrastructure.",
    roles: ["Applied AI", "Data", "Software", "Product"],
    fit: "A strong MSIM target across data, recommendation, AI product, software, and technical program paths. The verified U.S. 2027 listing is research-oriented, so broader Summer 2027 roles still require monitoring.",
    hubs: "San Jose, Seattle, Los Angeles, New York, and other U.S. offices",
    source: "https://jobs.bytedance.com/en/mobile/job?offset=0",
    sourceLabel: "Official ByteDance job search",
    visa: "Review",
    visaTitle: "Verify by requisition",
    visaDetail: "FY2025 DOL data shows historical LCA and PERM activity under ByteDance Inc., TikTok Inc., and TikTok U.S. Data Security Inc. That does not guarantee sponsorship for a specific internship; confirm the employing entity and policy on the exact role.",
    visaSource: "https://jobs.bytedance.com/en/mobile/students/trends?index=1",
    prep: ["Search both ByteDance and TikTok portals", "Prioritize data/recommendation and AI product work", "Confirm Summer dates and employing entity before applying"],
    cycleStatus: "Confirmed2027",
    cycleTitle: "2027 U.S. role found",
    cycleDetail: "Official ByteDance search currently lists a San Jose Student Researcher internship titled “Multimodal Interaction and World Model - Seed — 2027 Start (BS/MS).” The title confirms a 2027-start U.S. internship, but does not by itself prove a Summer 2027 start date.",
    cycleSource: "https://jobs.bytedance.com/en/mobile/job?offset=0",
    checkedOn: "2026-07-22",
  },
];

const sources = [
  {
    type: "UIUC",
    title: "MS in Information Management",
    description: "40-credit, flexible curriculum with information modeling/database, statistical models, and sociotechnical systems foundations.",
    url: "https://ischool.illinois.edu/academics/graduate/ms-information-management",
  },
  {
    type: "UIUC",
    title: "MSIM degree information",
    description: "UIUC’s official program material identifies the MSIM as STEM-designated and describes the normal 18–24 month on-campus path.",
    url: "https://ischool.illinois.edu/sites/default/files/documents/MSIM-FAQ_4.pdf",
  },
  {
    type: "UIUC",
    title: "UIUC ISSS — F-1 CPT",
    description: "CPT authorization must be listed on the I-20 before work begins; eligibility and dates are controlled by ISSS.",
    url: "https://isss.illinois.edu/students/employment/f1-cpt/",
  },
  {
    type: "USCIS",
    title: "F-1 practical training policy",
    description: "USCIS explains the full-academic-year rule and the effect of 12 months or more of full-time CPT on post-completion OPT.",
    url: "https://www.uscis.gov/policy-manual/volume-2-part-f-chapter-5",
  },
  {
    type: "USCIS",
    title: "STEM OPT employer requirements",
    description: "A STEM OPT employer must participate in E-Verify and complete the required training plan; the student applies for the EAD.",
    url: "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-extension-for-stem-students-stem-opt",
  },
  {
    type: "USCIS",
    title: "H-1B specialty occupations",
    description: "USCIS describes the H-1B process and employer petition framework for specialty occupations.",
    url: "https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations",
  },
  {
    type: "DOL",
    title: "OFLC performance & disclosure data",
    description: "DOL publishes LCA (H-1B/H-1B1/E-3) and PERM disclosure files. Employer records are historical filings, not future-offer guarantees.",
    url: "https://www.dol.gov/agencies/eta/foreign-labor/performance",
  },
  {
    type: "Method",
    title: "Reproducible FY2025 employer snapshot",
    description: "The repository includes the reviewed legal-entity allowlist, extraction script, and generated LCA/PERM snapshot used by every company card.",
    url: "data/dol-fy2025-snapshot.json",
  },
  {
    type: "Policy",
    title: "Anthropic careers FAQ",
    description: "The company’s official FAQ says it sponsors visas and green cards for eligible roles; program-specific exceptions may apply.",
    url: "https://www.anthropic.com/careers",
  },
  {
    type: "Example",
    title: "Amazon University Talent FAQ",
    description: "Use the exact job posting: official internship listings can state that a particular role cannot offer visa sponsorship.",
    url: "https://www.amazon.jobs/content/en/faq/university-talent",
  },
];

const historicalFilings = window.DOL_FY2025_SNAPSHOT?.companies || {};
const verifiedJobs = window.VERIFIED_2027_JOBS?.companies || {};
const coreTargets = new Set([
  "google", "meta", "microsoft", "amazon", "apple", "nvidia", "databricks",
  "snowflake", "salesforce", "adobe", "servicenow", "uber", "doordash",
  "linkedin", "cloudflare", "mongodb", "amd", "intel", "ibm", "bloomberg",
  "atlassian", "datadog", "intuit", "pinterest",
]);
const reachTargets = new Set([
  "anthropic", "openai", "cohere", "scale", "palantir", "stripe", "figma",
  "roblox", "xai", "perplexity", "coreweave", "qualcomm", "bytedance",
]);
const verifiedProgramTargets = new Set([
  "openai", "meta", "microsoft", "amazon", "apple", "nvidia", "databricks",
  "snowflake", "salesforce", "adobe", "oracle", "cisco", "servicenow", "uber",
  "doordash", "linkedin", "cloudflare", "amd", "intel", "qualcomm", "ibm",
  "tesla", "bloomberg", "atlassian", "roblox", "datadog", "intuit",
  "pinterest", "workday",
]);

companies.forEach((company) => {
  company.priority = coreTargets.has(company.id)
    ? "Core"
    : reachTargets.has(company.id)
      ? "Reach"
      : "Monitor";
  if (!company.cycleStatus) {
    const programVerified = verifiedProgramTargets.has(company.id);
    company.cycleStatus = programVerified ? "ProgramVerified" : "Unconfirmed";
    company.cycleTitle = programVerified
      ? "Intern program; 2027 unconfirmed"
      : "No verified 2027 internship";
    company.cycleDetail = programVerified
      ? "An official student, internship, or early-career program is available, but this review did not find an explicit U.S. Summer 2027 requisition."
      : "The official recruiting surface is valid, but this review did not find an explicit U.S. Summer 2027 internship requisition or a standing student program."
    company.cycleSource = company.source;
    company.checkedOn = "2026-07-22";
  }
});

const state = {
  role: "All",
  visa: "All",
  priority: "All",
  cycle: "All",
  sort: "Recommended",
  query: "",
  saved: new Set(JSON.parse(localStorage.getItem("fieldwork27-saved") || "[]")),
};

const companyGrid = document.querySelector("#companyGrid");
const resultsCount = document.querySelector("#resultsCount");
const savedCount = document.querySelector("#savedCount");
const savedButton = document.querySelector("#savedButton");
const companySearch = document.querySelector("#companySearch");
const sortSelect = document.querySelector("#sortSelect");
const companyDialog = document.querySelector("#companyDialog");
const dialogContent = document.querySelector("#dialogContent");
const methodDialog = document.querySelector("#methodDialog");

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const replacements = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return replacements[character];
  });
}

function visaClass(visa) {
  if (visa === "Explicit") return "explicit";
  if (visa === "Review") return "review";
  return "posting";
}

function filingLabel(companyId) {
  const filing = historicalFilings[companyId];
  if (!filing || (!filing.lcaTotal && !filing.permTotal)) return "FY25 DOL: no exact match";
  return `FY25: ${filing.lcaTotal.toLocaleString()} LCA · ${filing.permTotal.toLocaleString()} PERM`;
}

function statusBreakdown(statuses) {
  const entries = Object.entries(statuses || {});
  if (!entries.length) return "No matched decisions";
  return entries
    .map(([status, count]) => `${escapeHTML(status)} ${count.toLocaleString()}`)
    .join(" · ");
}

function priorityClass(priority) {
  return priority.toLowerCase();
}

function cycleClass(status) {
  return status.toLowerCase();
}

const cycleRank = { Confirmed2027: 0, ProgramVerified: 1, Unconfirmed: 2 };
const priorityRank = { Core: 0, Reach: 1, Monitor: 2 };
const visaRank = { Explicit: 0, Posting: 1, Review: 2 };

function jobsFor(companyId) {
  return verifiedJobs[companyId] || [];
}

function compareCompanies(left, right) {
  const byName = () => left.name.localeCompare(right.name, "en");
  const compare = (first, second) => first - second;

  if (state.sort === "CompanyAZ") return byName();
  if (state.sort === "Cycle") {
    return compare(cycleRank[left.cycleStatus], cycleRank[right.cycleStatus])
      || compare(priorityRank[left.priority], priorityRank[right.priority])
      || byName();
  }
  if (state.sort === "Priority") {
    return compare(priorityRank[left.priority], priorityRank[right.priority])
      || compare(cycleRank[left.cycleStatus], cycleRank[right.cycleStatus])
      || byName();
  }
  if (state.sort === "Immigration") {
    return compare(visaRank[left.visa], visaRank[right.visa])
      || compare(priorityRank[left.priority], priorityRank[right.priority])
      || byName();
  }

  const leftConfirmed = left.cycleStatus === "Confirmed2027" ? 0 : 1;
  const rightConfirmed = right.cycleStatus === "Confirmed2027" ? 0 : 1;
  return compare(leftConfirmed, rightConfirmed)
    || compare(priorityRank[left.priority], priorityRank[right.priority])
    || compare(cycleRank[left.cycleStatus], cycleRank[right.cycleStatus])
    || compare(visaRank[left.visa], visaRank[right.visa])
    || byName();
}

function companyCard(company, index) {
  const isSaved = state.saved.has(company.id);
  const jobs = jobsFor(company.id);
  const roleTags = company.roles
    .slice(0, 3)
    .map((role) => `<span class="role-tag">${role}</span>`)
    .join("");
  return `
    <article class="company-card">
      <div class="company-identity">
        <span class="company-rank">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <span class="company-category">${company.category}</span>
          <h3 class="company-name">${company.name}</h3>
          <p class="company-description">${company.description}</p>
        </div>
      </div>
      <div class="company-role-cell">
        <span class="priority-badge ${priorityClass(company.priority)}">${company.priority}</span>
        <div class="company-tags">${roleTags}</div>
      </div>
      <div class="company-cycle-cell">
        <span class="cycle-badge ${cycleClass(company.cycleStatus)}"><i></i>${company.cycleTitle}</span>
        <small>Checked ${company.checkedOn}</small>
      </div>
      <div class="company-evidence-cell">
        <span class="visa-badge ${visaClass(company.visa)}">${company.visaTitle}</span>
        <span class="filing-badge">${filingLabel(company.id)}</span>
      </div>
      <div class="company-job-cell">
        <strong>${jobs.length ? `${jobs.length} verified` : "None verified"}</strong>
        <small>${jobs.length ? "Official 2027 role" : "Open company for status"}</small>
      </div>
      <div class="company-actions">
        <button class="company-save ${isSaved ? "saved" : ""}" type="button" data-save="${company.id}" aria-label="${isSaved ? "Remove" : "Save"} ${company.name}">
          ${isSaved ? "✓" : "+"}
        </button>
        <button class="card-link" type="button" data-details="${company.id}">Open ↗</button>
      </div>
    </article>
  `;
}

function filteredCompanies() {
  const query = state.query.trim().toLowerCase();

  return companies.filter((company) => {
    const jobText = jobsFor(company.id).map((job) => job.title).join(" ");
    const roleMatches = state.role === "All" || company.roles.includes(state.role);
    const visaMatches = state.visa === "All" || company.visa === state.visa;
    const priorityMatches = state.priority === "All" || company.priority === state.priority;
    const cycleMatches = state.cycle === "All" || company.cycleStatus === state.cycle;
    const haystack = [
      company.name,
      company.category,
      company.description,
      company.roles.join(" "),
      company.hubs,
      jobText,
    ]
      .join(" ")
      .toLowerCase();
    return roleMatches && visaMatches && priorityMatches && cycleMatches && (!query || haystack.includes(query));
  }).sort(compareCompanies);
}

function renderCompanies() {
  const results = filteredCompanies();
  resultsCount.textContent = `${results.length} ${results.length === 1 ? "company" : "companies"}`;

  if (!results.length) {
    companyGrid.innerHTML = `
      <div class="empty-state">
        <strong>No match yet.</strong>
        <p>Try a broader role lane, reset the immigration filter, or search a different keyword.</p>
      </div>
    `;
    return;
  }

  companyGrid.innerHTML = results.map(companyCard).join("");
}

function renderSources() {
  const sourceLibrary = document.querySelector("#sourceLibrary");
  sourceLibrary.innerHTML = sources
    .map(
      (source) => `
        <a class="source-item" href="${source.url}" target="_blank" rel="noreferrer">
          <span class="source-type">${source.type}</span>
          <span><strong>${source.title}</strong><p>${source.description}</p></span>
          <span class="source-arrow">↗</span>
        </a>
      `,
    )
    .join("");
}

function updateSavedUI() {
  savedCount.textContent = state.saved.size;
  savedButton.classList.toggle("has-saved", state.saved.size > 0);
  localStorage.setItem("fieldwork27-saved", JSON.stringify([...state.saved]));
}

function openCompanyDetails(id) {
  const company = companies.find((item) => item.id === id);
  if (!company) return;
  const filing = historicalFilings[company.id];
  const jobs = jobsFor(company.id);
  const jobsMarkup = jobs.length
    ? jobs.map((job) => `
      <article class="verified-job">
        <div class="verified-job-head">
          <div>
            <span class="detail-label">${escapeHTML(job.employmentType)}</span>
            <h4>${escapeHTML(job.title)}</h4>
          </div>
          <a href="${job.source}" target="_blank" rel="noreferrer">Official role ↗</a>
        </div>
        <dl>
          <div><dt>Location</dt><dd>${escapeHTML(job.location)}</dd></div>
          <div><dt>Team</dt><dd>${escapeHTML(job.team)}</dd></div>
          ${job.startDate ? `<div><dt>Start</dt><dd>${escapeHTML(job.startDate)}</dd></div>` : ""}
          ${job.endDate ? `<div><dt>End</dt><dd>${escapeHTML(job.endDate)}</dd></div>` : ""}
        </dl>
        ${job.dateNote ? `<p class="job-date-note">${escapeHTML(job.dateNote)}</p>` : ""}
      </article>
    `).join("")
    : `
      <div class="no-verified-jobs">
        <strong>No verified U.S. 2027 internship title in this review.</strong>
        <p>${company.cycleStatus === "ProgramVerified"
          ? "The company has an official internship or early-career program, but a specific U.S. 2027 role was not confirmed."
          : "Monitor the official careers page; this does not mean the company will not open roles later."}</p>
        <a href="${company.source}" target="_blank" rel="noreferrer">${company.sourceLabel} ↗</a>
      </div>
    `;
  const hasVerifiedFilingEntity = filing && (filing.lcaTotal || filing.permTotal);
  const filingMarkup = hasVerifiedFilingEntity
    ? `
      <p>
        The U.S. Department of Labor FY2025 cumulative disclosure files contain historical
        records for an exact employer legal name associated with ${company.name}. This is
        evidence of prior labor-certification activity, not a promise for a 2027 internship,
        an H-1B petition, or a green-card case.
      </p>
      <div class="filing-grid">
        <div><span class="detail-label">FY2025 LCA decisions</span><strong>${filing.lcaTotal.toLocaleString()}</strong><small>${statusBreakdown(filing.lcaStatuses)}</small></div>
        <div><span class="detail-label">FY2025 PERM decisions</span><strong>${filing.permTotal.toLocaleString()}</strong><small>${statusBreakdown(filing.permStatuses)}</small></div>
      </div>
      <p class="entity-list"><span class="detail-label">Matched legal entities</span>${filing.matchedEntities.map(escapeHTML).join(" · ")}</p>
      <p class="filing-note">
        An LCA is a DOL labor-condition filing used in the H-1B/H-1B1/E-3 process; PERM is the
        labor-certification program used in many employment-based permanent-residence cases.
        Neither count proves an individual outcome.
      </p>
    `
    : `
      <p>
        The reviewed exact-entity allowlist did not produce an FY2025 LCA or PERM match for this
        brand. This does not prove the employer never sponsors: employing entities and filing
        activity can change. Ask recruiting for the legal employer and current policy.
      </p>
    `;

  dialogContent.innerHTML = `
    <span class="dialog-category">${company.category}</span>
    <h2 class="dialog-company-name">${company.name}</h2>
    <p class="dialog-description">${company.description}</p>
    <div class="dialog-detail-grid">
      <div><span class="detail-label">MSIM role fit</span><strong>${company.roles.join(" · ")}</strong></div>
      <div><span class="detail-label">Target priority</span><strong>${company.priority}</strong></div>
      <div><span class="detail-label">2027 recruiting status</span><strong>${company.cycleTitle}</strong></div>
      <div><span class="detail-label">Immigration status</span><strong>${company.visaTitle}</strong></div>
      <div><span class="detail-label">Likely hubs</span><strong>${company.hubs}</strong></div>
      <div><span class="detail-label">Source standard</span><strong>Official career surface + exact posting</strong></div>
    </div>
    <section class="dialog-section">
      <h3>Why it belongs on the list</h3>
      <p>${company.fit}</p>
    </section>
    <section class="dialog-section">
      <h3>2027 official-posting check</h3>
      <p>${company.cycleDetail}</p>
      <p class="cycle-audit-note">Checked ${company.checkedOn}. <a href="${company.cycleSource}" target="_blank" rel="noreferrer">Open official evidence ↗</a></p>
    </section>
    <section class="dialog-section jobs-section">
      <div class="jobs-section-head">
        <h3>Verified job titles</h3>
        <span>${jobs.length} role${jobs.length === 1 ? "" : "s"}</span>
      </div>
      ${jobsMarkup}
    </section>
    <section class="dialog-section">
      <h3>Work authorization / future sponsorship</h3>
      <p>${company.visaDetail}</p>
    </section>
    <section class="dialog-section filing-section">
      <h3>FY2025 federal filing history</h3>
      ${filingMarkup}
    </section>
    <section class="dialog-section">
      <h3>Prepare before applying</h3>
      <ul>${company.prep.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <div class="dialog-actions">
      <a class="button button-primary" href="${company.source}" target="_blank" rel="noreferrer">Open official careers <span>↗</span></a>
      <a class="button button-outline" href="${company.visaSource}" target="_blank" rel="noreferrer">Read visa evidence ↗</a>
      <a class="button button-outline" href="https://www.dol.gov/agencies/eta/foreign-labor/performance" target="_blank" rel="noreferrer">Open DOL data ↗</a>
    </div>
  `;

  companyDialog.showModal();
}

function setActiveChip(filter, value) {
  state[filter] = value;
  document.querySelectorAll(`[data-filter="${filter}"]`).forEach((button) => {
    button.classList.toggle("active", button.dataset.value === value);
  });
  renderCompanies();
}

document.querySelector("#roleFilters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (button) setActiveChip(button.dataset.filter, button.dataset.value);
});

document.querySelector("#visaFilters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (button) setActiveChip(button.dataset.filter, button.dataset.value);
});

document.querySelector("#priorityFilters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (button) setActiveChip(button.dataset.filter, button.dataset.value);
});

document.querySelector("#cycleFilters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (button) setActiveChip(button.dataset.filter, button.dataset.value);
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderCompanies();
});

document.querySelector("#sortExplainButton").addEventListener("click", () => {
  methodDialog.showModal();
});

companySearch.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderCompanies();
});

companyGrid.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    const { save: id } = saveButton.dataset;
    if (state.saved.has(id)) state.saved.delete(id);
    else state.saved.add(id);
    updateSavedUI();
    renderCompanies();
    return;
  }

  const detailButton = event.target.closest("[data-details]");
  if (detailButton) openCompanyDetails(detailButton.dataset.details);
});

document.querySelector("#clearFilters").addEventListener("click", () => {
  state.role = "All";
  state.visa = "All";
  state.priority = "All";
  state.cycle = "All";
  state.sort = "Recommended";
  state.query = "";
  companySearch.value = "";
  sortSelect.value = "Recommended";
  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.value === "All");
  });
  renderCompanies();
});

savedButton.addEventListener("click", () => {
  if (!state.saved.size) {
    document.querySelector("#radar").scrollIntoView({ behavior: "smooth", block: "start" });
    companySearch.focus({ preventScroll: true });
    return;
  }

  state.query = "";
  state.role = "All";
  state.visa = "All";
  state.priority = "All";
  state.cycle = "All";
  state.sort = "Recommended";
  companySearch.value = "";
  sortSelect.value = "Recommended";
  companyGrid.innerHTML = companies
    .filter((company) => state.saved.has(company.id))
    .sort(compareCompanies)
    .map(companyCard)
    .join("");
  resultsCount.textContent = `${state.saved.size} saved`;
  document.querySelector("#radar").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#dialogClose").addEventListener("click", () => companyDialog.close());
document.querySelector("#openMethodButton").addEventListener("click", () => methodDialog.showModal());
document.querySelector("#methodClose").addEventListener("click", () => methodDialog.close());
document.querySelector("#methodSourcesLink").addEventListener("click", () => methodDialog.close());
document.querySelector("#footerSourceButton").addEventListener("click", () => {
  document.querySelector("#evidence").scrollIntoView({ behavior: "smooth", block: "start" });
});

companyDialog.addEventListener("click", (event) => {
  if (event.target === companyDialog) companyDialog.close();
});

methodDialog.addEventListener("click", (event) => {
  if (event.target === methodDialog) methodDialog.close();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (companyDialog.open) companyDialog.close();
    if (methodDialog.open) methodDialog.close();
  }
});

renderSources();
updateSavedUI();
renderCompanies();
document.querySelectorAll("[data-company-total]").forEach((element) => {
  element.textContent = companies.length;
});
