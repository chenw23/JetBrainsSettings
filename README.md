# Fieldwork 27

Source-first planning site for a UIUC MS in Information Management student preparing
for U.S. Summer 2027 internships.

## Run locally

This is a zero-build static site. Open `index.html` in a browser, or serve the
directory:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## What is included

- 45 U.S. technology / AI target employers across frontier AI, Big Tech, cloud,
  semiconductors, data platforms, enterprise software, fintech, and consumer
  products. Every card links to an official career or university-recruiting page.
- Role-lane filtering for Applied AI, Data, Software, and Product.
- MSIM-specific priority routing:
  - **Core**: strong role fit plus an actionable student/early-career path.
  - **Reach**: high technical bar or less predictable internship availability.
  - **Monitor**: useful adjacent target, restricted roles, or uncertain cycle.
- A three-level recruiting-cycle label, reviewed against official sources:
  - **2027 role found**: an official U.S. internship title/detail explicitly
    references 2027.
  - **Program only**: an official student/intern program exists, but no explicit
    U.S. Summer 2027 requisition was found.
  - **2027 unconfirmed**: the company is a target, but neither an explicit 2027
    internship nor a standing official intern program was verified.
- A transparent company sorter:
  - **Recommended**: confirmed 2027 evidence, then MSIM priority, immigration
    evidence strength, and company name.
  - Company A–Z, 2027 status, MSIM priority, and immigration evidence are also
    available as explicit sort options.
- A row-based company list and a second-level company detail view. Verified job
  titles live in `data/verified-jobs.js`; companies can have multiple roles.
  `startDate` and `endDate` fields are optional and are only rendered when the
  official source provides them.
- A conservative immigration-evidence model:
  - **Explicit policy**: only where the company’s own careers material explicitly
    says it sponsors visas / green cards for eligible roles.
  - **Posting-level language**: the specific requisition is decisive; some official
    internship postings explicitly say no sponsorship.
  - **Verify by requisition**: no company-wide promise is claimed without an
    official policy.
- UIUC MSIM/STEM and CPT sources, USCIS CPT/STEM OPT/H-1B sources, and
  reproducible DOL LCA/PERM evidence.
- ByteDance/TikTok is included as one employer group. The official ByteDance job
  list currently identifies separate San Jose 2027-start student-researcher
  internships for LLM (BS/MS) and Multimodal Interaction and World Model (PhD).
  Exact internship dates and standalone detail URLs were not exposed in the
  indexed official list.
- Google Careers currently contains two official U.S. early-consideration roles:
  `Software Engineering Intern, MS, Summer 2027` and
  `Software Engineering Intern, BS, Summer 2027`. Google states a 12–14 week
  duration and an anticipated application window through July 24, 2026, which
  may close earlier if projects fill.
- Current verified-job coverage is intentionally sparse: the site does not
  manufacture role titles from generic internship landing pages. Companies
  without a verified 2027 title show a clear empty state and link to the official
  recruiting surface.

## SEO and discovery

- Canonical, Open Graph, Twitter Card, robots, and large-image-preview metadata.
- `WebSite`, `Dataset`, and verified internship `ItemList` JSON-LD. The
  aggregator does not publish single-job `JobPosting` rich-result markup.
- `robots.txt`, `sitemap.xml`, and local 1200×630 social-preview SVG/PNG assets.
- The published job structured data is generated from `data/verified-jobs.js`, so
  search metadata and the visible role list share the same source.

## Source methodology

The site deliberately separates three distinct questions:

1. **Can an F-1 student work during the internship?** UIUC ISSS controls CPT
   eligibility and authorization. CPT employment cannot begin before the
   authorization appears on the I-20.
2. **Does the employer have a current role-level policy?** The only authoritative
   source is the exact official job posting and, when needed, written confirmation
   from the recruiting team.
3. **Has the employer historically filed relevant labor-certification paperwork?**
   `data/dol-fy2025-snapshot.json` contains a FY2025 summary generated from the
   U.S. Department of Labor OFLC cumulative disclosure files:
   - `LCA_Disclosure_Data_FY2025_Q4.xlsx`
   - `PERM_Disclosure_Data_FY2025_Q4.xlsx`

The historical results use an exact normalized match against the reviewed
legal-entity allowlist in `data/employer-entities.json`. They are useful evidence
of prior activity, but **do not** mean that a particular 2027 internship accepts
CPT, that an employer will file H-1B, or that a green-card case will be started
or approved.

## Rebuild the DOL snapshot

Download the official FY2025 Q4 cumulative LCA and PERM workbooks from DOL, then
run:

```bash
python3 scripts/build_dol_snapshot.py \
  --lca /path/to/LCA_Disclosure_Data_FY2025_Q4.xlsx \
  --perm /path/to/PERM_Disclosure_Data_FY2025_Q4.xlsx
```

The script requires `openpyxl` and writes both:

- `data/dol-fy2025-snapshot.json` for audit/review.
- `data/dol-fy2025-snapshot.js` for the zero-build browser application.

## Primary official sources

- UIUC MSIM:
  <https://ischool.illinois.edu/academics/graduate/ms-information-management>
- UIUC official MSIM degree information (STEM designation):
  <https://ischool.illinois.edu/sites/default/files/documents/MSIM-FAQ_4.pdf>
- UIUC ISSS CPT: <https://isss.illinois.edu/students/employment/f1-cpt/>
- USCIS F-1 practical training:
  <https://www.uscis.gov/policy-manual/volume-2-part-f-chapter-5>
- USCIS STEM OPT:
  <https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-extension-for-stem-students-stem-opt>
- USCIS H-1B: <https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations>
- U.S. DOL OFLC disclosure data:
  <https://www.dol.gov/agencies/eta/foreign-labor/performance>
- Anthropic careers FAQ (explicit eligible-role visa / green-card statement):
  <https://www.anthropic.com/careers>

Company-specific official recruiting URLs live in `app.js`.

## Scope limits

- 2027 requisitions are not universally open yet. A company in the target list is
  not a claim that a Summer 2027 opening exists today.
- Recruiting status was rechecked on 2026-07-22. Unless the official title or job
  detail explicitly says 2027, the site does not mark the employer as having a
  2027 opening.
- The candidate baseline assumes Fall 2026 entry, completion of a full academic
  year before Summer 2027, and continued enrollment after the internship. UIUC
  ISSS makes the actual CPT determination.
- The site is an application-planning aid, not legal or immigration advice.
- Visa, export-control, security-clearance, and location requirements can change by
  team and requisition. Always read the live posting before applying.
