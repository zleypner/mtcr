export interface ProcedureInfo {
  slug: string;
  name: string;
  description: string;
  recovery: string;
  hospitalStay: string;
  costRange: string;
}

export interface CategoryInfo {
  slug: string;
  name: string;
  description: string;
  procedures: ProcedureInfo[];
  whyLATAM: string;
  destinations: string[];
  costFactors: string[];
  packageIncludes: string[];
  howToChoose: string[];
  questionsToAsk: string[];
  preparation: string[];
  recoveryGuideline: string;
  risks: string[];
  faqs: { question: string; answer: string }[];
  relatedCategories: { name: string; slug: string }[];
}

export const treatmentsData: Record<string, CategoryInfo> = {
  dental: {
    slug: "dental",
    name: "Dental Care & Restorative Dentistry",
    description: "High-quality, affordable dental treatments ranging from cosmetic enhancements to full mouth restorations. Costa Rica is globally recognized for employing state-of-the-art biological dentistry, advanced implantology, and 3D dental scanning.",
    procedures: [
      {
        slug: "dental-implants",
        name: "Dental Implants",
        description: "A permanent surgical replacement for missing teeth, inserting biocompatible titanium or zirconia posts into the jawbone.",
        recovery: "3 to 6 months for complete osseointegration; initial healing in 7-14 days.",
        hospitalStay: "Outpatient",
        costRange: "$800 - $1,800 per implant",
      },
      {
        slug: "all-on-4",
        name: "All-on-4® Dental Implants",
        description: "Full-arch tooth replacement using just four strategically angled implants to support a complete fixed prosthesis.",
        recovery: "3 to 6 months for bone fusion; return to light activities in 3-5 days.",
        hospitalStay: "Outpatient",
        costRange: "$8,000 - $12,500 per arch",
      },
      {
        slug: "all-on-6",
        name: "All-on-6® Dental Implants",
        description: "Full-arch rehabilitation using six implants, providing additional stability and load distribution for the dental arch.",
        recovery: "3 to 6 months for bone integration; initial healing in 5-7 days.",
        hospitalStay: "Outpatient",
        costRange: "$10,000 - $15,000 per arch",
      },
      {
        slug: "veneers",
        name: "Porcelain Veneers",
        description: "Thin shells of custom-designed ceramic bonded to the front of teeth to correct color, alignment, shape, or spacing.",
        recovery: "No recovery time; custom production takes 3-7 days.",
        hospitalStay: "Outpatient",
        costRange: "$350 - $800 per tooth",
      },
      {
        slug: "crowns",
        name: "Dental Crowns",
        description: "Tooth-shaped caps placed over damaged teeth to restore structure, strength, size, and aesthetic appearance.",
        recovery: "Immediate; post-cementation sensitivity may last 24-48 hours.",
        hospitalStay: "Outpatient",
        costRange: "$350 - $700 per crown",
      },
      {
        slug: "full-mouth-restoration",
        name: "Full-Mouth Restoration",
        description: "A comprehensive plan combining implants, crowns, veneers, and bridges to reconstruct all teeth in the upper and lower jaws.",
        recovery: "Varies by procedure mix; typically ranges from 1 to 4 weeks of initial recovery.",
        hospitalStay: "Outpatient",
        costRange: "$12,000 - $25,000 total",
      },
      {
        slug: "root-canal",
        name: "Root Canal Treatment",
        description: "Therapy to remove infected pulp from the root canal system, sealing it to preserve the natural tooth structure.",
        recovery: "1-3 days for local soreness to resolve.",
        hospitalStay: "Outpatient",
        costRange: "$250 - $550",
      },
      {
        slug: "cosmetic-dentistry",
        name: "Cosmetic Dentistry",
        description: "A combination of whitening, bonding, and recontouring techniques aimed at enhancing smile aesthetics.",
        recovery: "Immediate; zero downtime.",
        hospitalStay: "Outpatient",
        costRange: "$150 - $1,500 depending on scope",
      }
    ],
    whyLATAM: "Costa Rica, especially the Escazú and San José regions, acts as a primary dental hub for North American patients. High-caliber clinics feature JCI accreditations, board certifications from the American Dental Association (ADA) affiliates, and CAD/CAM on-site laboratories, offering savings of up to 70% compared to typical US private rates.",
    destinations: ["San José", "Escazú"],
    costFactors: [
      "Materials used (zirconia, porcelain, or titanium)",
      "Number of teeth or arches needing rehabilitation",
      "Requirement for bone grafting or sinus lifts",
      "Laboratory technology utilized (on-site CAD/CAM vs outsourced labs)",
      "Anesthesiologist involvement for sedation options"
    ],
    packageIncludes: [
      "Initial panoramic X-rays and 3D Cone Beam CT scans",
      "The dental procedure and temporary prosthetics",
      "Local anesthetic (and sedation support if planned)",
      "Dedicated bilingual patient coordinator",
      "Airport and hotel shuttle transfers"
    ],
    howToChoose: [
      "Verify ADA or international memberships of the lead prosthodontist",
      "Inquire if the clinic possesses JCI accreditation or local Ministry of Health certifications",
      "Review historical client portfolios showing before-and-after cases",
      "Ask about warranties on crowns, veneers, and implant posts",
      "Confirm if the clinic houses an in-house laboratory to reduce travel duration"
    ],
    questionsToAsk: [
      "Which brand and material of implant/crown will be used in my case?",
      "Do I require a bone graft or sinus lift before placement?",
      "What is the plan if my jaw does not immediately accept the implant?",
      "How many trips will be required to complete the permanent restoration?",
      "Is an anesthesiologist present if I choose IV sedation?"
    ],
    preparation: [
      "Acquire copies of recent dental X-rays from your local dentist to share in advance.",
      "Inform the clinic of any systemic conditions, like diabetes or cardiovascular issues, which affect bone healing.",
      "Arrange for at least 7-10 days of travel if receiving initial implants, or 5-7 days for crowns and veneers.",
      "Check travel passport validity; Costa Rica requires it to be active during your stay."
    ],
    recoveryGuideline: "Most patients experience minor swelling and discomfort for 3-5 days after surgery. Soft food diets are required while temporary crowns or prostheses are in place. Maintain meticulous oral hygiene, avoiding direct brushing over surgical sutures.",
    risks: [
      "Implant failure (non-integration with jawbone)",
      "Localized tissue infection or bleeding",
      "Slight nerve damage causing temporary lip or gum numbness",
      "Sinus complications during upper jaw implant placements"
    ],
    faqs: [
      {
        question: "How long does a dental implant process take?",
        answer: "Typically, the process requires two trips. The first trip (3-7 days) is for the surgical placement of the implant post and temporary crowns. The second trip, scheduled 3 to 6 months later, is for attaching the permanent custom crown after the bone has fused with the post."
      },
      {
        question: "Are zirconia implants better than titanium?",
        answer: "Titanium implants have a longer history of clinical success and are highly durable. Zirconia implants are ceramic, hypoallergenic, and metal-free, making them popular for patients with metal sensitivities or cosmetic concerns near the gumline."
      }
    ],
    relatedCategories: [
      { name: "Cosmetic Surgery", slug: "cosmetic" },
      { name: "Diagnostics", slug: "diagnostics" }
    ]
  },
  cosmetic: {
    slug: "cosmetic",
    name: "Cosmetic & Plastic Surgery",
    description: "Reconstructive and aesthetic surgeries designed to restore form and function. Lead plastic surgeons in Latin America hold memberships in the International Society of Aesthetic Plastic Surgery (ISAPS) and local boards.",
    procedures: [
      {
        slug: "rhinoplasty",
        name: "Rhinoplasty",
        description: "Surgery to reshape, resize, or structurally repair the nose for aesthetic balance or respiratory improvement.",
        recovery: "Initial splint removed in 7 days; swelling resolves over 6 to 12 months.",
        hospitalStay: "Outpatient or 1 night",
        costRange: "$3,500 - $6,000",
      },
      {
        slug: "facelift",
        name: "Facelift (Rhytidectomy)",
        description: "A procedure to reduce sagging skin, tighten underlying muscle tissue, and smooth deep creases on the face and jawline.",
        recovery: "Sutures removed in 7-10 days; return to public activities in 2 weeks.",
        hospitalStay: "1 night",
        costRange: "$5,000 - $9,000",
      },
      {
        slug: "breast-augmentation",
        name: "Breast Augmentation",
        description: "Using saline or cohesive silicone gel implants to increase breast volume, shape, and balance.",
        recovery: "Return to sedentary work in 5-7 days; full exercise in 6 weeks.",
        hospitalStay: "Outpatient",
        costRange: "$3,200 - $5,500",
      },
      {
        slug: "breast-lift",
        name: "Breast Lift (Mastopexy)",
        description: "Surgery to raise sagging breasts by removing excess skin and tightening the surrounding tissue to reshape the breast contour.",
        recovery: "Comfortable movement in 7-10 days; support bra required for 6 weeks.",
        hospitalStay: "Outpatient or 1 night",
        costRange: "$3,500 - $6,000",
      },
      {
        slug: "liposuction",
        name: "Liposuction",
        description: "A minimally invasive procedure using small cannulas to suction localized fat deposits from areas like the abdomen, hips, and thighs.",
        recovery: "Bruising fades in 2-3 weeks; compression garments worn for 4-6 weeks.",
        hospitalStay: "Outpatient",
        costRange: "$2,500 - $5,000 depending on areas",
      },
      {
        slug: "tummy-tuck",
        name: "Tummy Tuck (Abdominoplasty)",
        description: "Removal of excess skin and fat from the abdomen while surgically tightening weakened abdominal wall muscles.",
        recovery: "Return to light work in 2-3 weeks; avoid heavy lifting for 6-8 weeks.",
        hospitalStay: "1-2 nights",
        costRange: "$4,500 - $7,500",
      },
      {
        slug: "mommy-makeover",
        name: "Mommy Makeover",
        description: "A customized package combining breast procedures, tummy tuck, and liposuction to address post-pregnancy body changes.",
        recovery: "2 to 3 weeks of strict rest; helper required for the first week.",
        hospitalStay: "1-2 nights",
        costRange: "$8,000 - $14,000 total",
      },
      {
        slug: "body-contouring",
        name: "Body Contouring",
        description: "Surgical removal of loose, hanging skin following significant weight loss, targeting arms, thighs, and torso.",
        recovery: "2 to 4 weeks depending on the number of areas addressed.",
        hospitalStay: "1-2 nights",
        costRange: "$6,000 - $12,000",
      },
      {
        slug: "brazilian-butt-lift",
        name: "Brazilian Butt Lift (BBL)",
        description: "Autologous fat grafting, transferring liposuctioned fat from areas like the waist or thighs into the buttocks for volume.",
        recovery: "Cannot sit directly on buttocks for 2-3 weeks; special BBL pillow required.",
        hospitalStay: "Outpatient or 1 night",
        costRange: "$4,000 - $7,000",
      }
    ],
    whyLATAM: "Private clinics in destinations like San José and Escazú offer modern, state-of-the-art surgical suites and dedicated recovery retreats. Surgeons are extensively trained internationally and offer services at a fraction of the cost in the US, with personalized nursing support during initial healing phases.",
    destinations: ["San José", "Escazú"],
    costFactors: [
      "Complexity and number of procedures combined",
      "Surgeon board certifications and experience",
      "Choice of implants (cohesive silicone gel vs saline, FDA-approved brands)",
      "Hospital fees, surgical suite time, and anesthesiologist costs",
      "Post-operative compression garments and medications"
    ],
    packageIncludes: [
      "Pre-operative tests (blood panels, EKG)",
      "Surgical procedure fees, implants, and garments",
      "Anesthesiologist fees and overnight hospital stay (if required)",
      "Post-operative follow-up visits with the surgeon",
      "Dedicated local coordination and transport assistance"
    ],
    howToChoose: [
      "Confirm board certification by the local national board (e.g., ACCPRE in Costa Rica)",
      "Verify ISAPS (International Society of Aesthetic Plastic Surgery) membership",
      "Examine surgical facilities to ensure they are licensed as full-surgical clinics or hospitals",
      "Request clear, verified portfolio images of previous patients",
      "Ensure the clinic has a protocol for post-surgical recovery and follow-up care"
    ],
    questionsToAsk: [
      "Are you board-certified in plastic surgery, and do you hold international affiliations?",
      "Where will the surgery be performed, and is the facility equipped for emergencies?",
      "What type and brand of implants do you recommend for me?",
      "How long must I remain in the country before it is safe to fly?",
      "What is your policy regarding revision surgery if complications arise?"
    ],
    preparation: [
      "Stop smoking and avoid blood-thinning supplements/medications for at least 3-4 weeks prior.",
      "Secure a travel companion or arrange professional nursing care for the first 48-72 hours post-surgery.",
      "Pack loose-fitting clothing that buttons or zips in front to avoid stretching over surgical wounds.",
      "Obtain medical clearance from your local primary care doctor if you have chronic health conditions."
    ],
    recoveryGuideline: "Adhere strictly to post-operative instructions. Compression garments must be worn as directed. Limit physical exertion, and avoid exposing incisions to sun or water pools. Keep all follow-up appointments before flying home.",
    risks: [
      "Seroma or hematoma (fluid/blood accumulation under the skin)",
      "Wound healing delays or scarring differences",
      "Asymmetry or cosmetic dissatisfaction",
      "Infection requiring antibiotic therapy or implant removal",
      "Deep vein thrombosis (DVT) during long flights post-operation"
    ],
    faqs: [
      {
        question: "How long must I stay in Costa Rica after a tummy tuck?",
        answer: "For major procedures like a tummy tuck or mommy makeover, you should plan to stay in the country for at least 10 to 14 days. This allows the surgeon to monitor your drainage tubes, remove sutures, and confirm it is safe for you to travel home."
      },
      {
        question: "Are the breast implants used in Latin America safe?",
        answer: "Yes, reputable plastic surgeons in Latin America use internationally recognized, FDA-approved brands such as Mentor, Allergan, or Motiva. You will be provided with an implant registration card showing the manufacturer and serial numbers."
      }
    ],
    relatedCategories: [
      { name: "Bariatric Surgery", slug: "bariatric" },
      { name: "Diagnostics", slug: "diagnostics" }
    ]
  },
  orthopedic: {
    slug: "orthopedic",
    name: "Orthopedic & Joint Surgery",
    description: "Advanced orthopedic procedures including joint replacement, spine surgery, and minimally invasive sports medicine. Latin American orthopedic centers are known for modern surgical implants and rapid rehabilitation programs.",
    procedures: [
      {
        slug: "knee-replacement",
        name: "Knee Replacement",
        description: "Replacing damaged joint surfaces in the knee with prosthetic metal and polyethylene components to restore mobility.",
        recovery: "Initial walking with aids in 1-2 days; full recovery takes 3 to 6 months.",
        hospitalStay: "1-2 nights",
        costRange: "$8,500 - $13,000",
      },
      {
        slug: "hip-replacement",
        name: "Hip Replacement",
        description: "Replacing a diseased or damaged hip joint structure with an artificial ball and socket prosthesis.",
        recovery: "Walking supported in 1-2 days; return to light activity in 6 weeks.",
        hospitalStay: "1-2 nights",
        costRange: "$9,500 - $14,000",
      },
      {
        slug: "spine-surgery",
        name: "Spine Surgery",
        description: "Decompression, discectomy, or spinal fusion to relieve chronic back pain caused by herniated discs or stenosis.",
        recovery: "Restricted lifting for 6-12 weeks; physical therapy starts in 2-4 weeks.",
        hospitalStay: "1-3 nights depending on complexity",
        costRange: "$8,000 - $16,000",
      },
      {
        slug: "shoulder-surgery",
        name: "Shoulder Surgery & Rotator Cuff Repair",
        description: "Surgical repair of torn shoulder ligaments or joint replacement to relieve chronic pain and restore rotation.",
        recovery: "Sling worn for 4-6 weeks; physical rehabilitation takes 3-6 months.",
        hospitalStay: "Outpatient or 1 night",
        costRange: "$4,500 - $8,000",
      },
      {
        slug: "sports-medicine",
        name: "Sports Medicine & ACL Reconstruction",
        description: "Arthroscopic repair of torn knee cartilage (meniscus) or ligaments (ACL) to restore athletic functionality.",
        recovery: "Crutches for 2-4 weeks; sports training can resume in 6 months.",
        hospitalStay: "Outpatient",
        costRange: "$3,500 - $6,500",
      }
    ],
    whyLATAM: "Orthopedic patients choose Costa Rica due to the availability of JCI-accredited private hospitals, highly sterile surgical environments, and direct access to physical therapy. The cost of joint replacement is often 50% lower than in the US, making it a viable alternative for underinsured individuals.",
    destinations: ["San José"],
    costFactors: [
      "Type of implant brand and material structure (ceramic, titanium, polymer)",
      "Unilateral vs bilateral joint replacement requirement",
      "Length of required inpatient rehabilitation or nursing support",
      "Pre-surgical imaging needs (MRI, CT scans)",
      "Anesthesiology and specialized hardware requirements"
    ],
    packageIncludes: [
      "Pre-operative cardiovascular clearance and diagnostics",
      "Surgeon, assistant, and anesthesiologist fees",
      "The prosthetic implant device and hospital stay",
      "Initial physical therapy sessions at the hospital",
      "Bilingual liaison and local coordination"
    ],
    howToChoose: [
      "Verify that the surgeon has completed specialized fellowships in joint reconstruction",
      "Check if the surgical facility reports low post-surgical infection rates",
      "Confirm that the surgeon uses globally supported implant brands (e.g., Stryker, Zimmer Biomet)",
      "Evaluate options for post-discharge physical rehabilitation near your lodging",
      "Ensure the hospital has advanced diagnostic imaging (MRI/CT) on-site"
    ],
    questionsToAsk: [
      "What brand and model of joint implant will you use, and what is its expected lifespan?",
      "What are the hospital's protocols for preventing deep vein thrombosis (DVT)?",
      "How soon after surgery will I begin physical therapy?",
      "How long must I remain in the destination before it is safe to travel home?",
      "What follow-up care or monitoring will I need once I return?"
    ],
    preparation: [
      "Engage in pre-surgery exercises (pre-hab) recommended by physical therapists to build joint strength.",
      "Coordinate with a travel companion who can help you carry luggage and navigate airports.",
      "Request medical records showing any metal allergies or prior orthopedic surgeries.",
      "Check with your airline regarding wheelchair assistance during boarding and transfers."
    ],
    recoveryGuideline: "Early movement is key to successful joint recovery. Follow your physical therapist's guidelines daily. Keep incision sites dry, and wear compression stockings as prescribed to manage swelling and prevent blood clots.",
    risks: [
      "Post-operative joint infection or localized inflammation",
      "Deep vein thrombosis (DVT) or pulmonary embolism",
      "Implant loosening, misalignment, or wear over time",
      "Stiffness or limited range of motion in the joint"
    ],
    faqs: [
      {
        question: "When can I fly home after a hip or knee replacement?",
        answer: "Most orthopedic surgeons recommend waiting at least 10 to 14 days before flying after a major joint replacement. This minimizes the risk of blood clots (DVT) and allows you to complete initial physical therapy and suture removal."
      },
      {
        question: "Is physical therapy included in my medical travel package?",
        answer: "Initial in-hospital physical therapy is standard. Extended post-discharge therapy sessions can be arranged at your hotel or local rehabilitation centers and are charged separately or added to custom packages."
      }
    ],
    relatedCategories: [
      { name: "Diagnostics", slug: "diagnostics" },
      { name: "Wellness", slug: "wellness" }
    ]
  },
  cardiac: {
    slug: "cardiac",
    name: "Cardiology & Cardiovascular Care",
    description: "Highly specialized cardiac assessments, diagnostic evaluations, and interventional procedures. Cardiology services require a cautious, conservative approach, focusing on diagnostic clarity and clinical safety.",
    procedures: [
      {
        slug: "cardiac-evaluation",
        name: "Comprehensive Cardiac Evaluation",
        description: "Preventive cardiology screening including stress tests, echocardiograms, and specialist consultations.",
        recovery: "Immediate; non-invasive.",
        hospitalStay: "Outpatient",
        costRange: "$800 - $1,500",
      },
      {
        slug: "angioplasty",
        name: "Coronary Angioplasty & Stenting",
        description: "A minimally invasive procedure to open clogged heart arteries, inserting a balloon catheter and drug-eluting stents.",
        recovery: "Return to light activities in 1 week; avoid strenuous lifting for 2-4 weeks.",
        hospitalStay: "1-2 nights",
        costRange: "$6,500 - $10,000",
      },
      {
        slug: "bypass-surgery",
        name: "Coronary Artery Bypass Graft (CABG)",
        description: "Open-heart surgery using blood vessels from another part of the body to bypass blocked coronary arteries.",
        recovery: "Initial recovery takes 6-8 weeks; full rehabilitation takes 3-6 months.",
        hospitalStay: "5-7 nights (including ICU)",
        costRange: "$18,000 - $28,000",
      },
      {
        slug: "valve-procedures",
        name: "Heart Valve Repair or Replacement",
        description: "Surgical correction of damaged heart valves using mechanical or biological tissue valves.",
        recovery: "6 to 8 weeks for sternum healing; rehabilitation takes several months.",
        hospitalStay: "5-7 nights (including ICU)",
        costRange: "$20,000 - $30,000",
      }
    ],
    whyLATAM: "Private cardiovascular centers in San José maintain state-of-the-art cath labs and intensive care units. Cardiologists are typically affiliated with international organizations like the American College of Cardiology, offering high-standard care for elective diagnostics and planned interventions.",
    destinations: ["San José"],
    costFactors: [
      "Complexity of the cardiovascular condition and surgical approach",
      "Type of stents or prosthetic valves utilized",
      "Number of days required in the Intensive Care Unit (ICU)",
      "Anesthesiology, perfusionist, and specialized cardiac surgical team fees",
      "Required post-discharge monitoring and medications"
    ],
    packageIncludes: [
      "Comprehensive pre-surgical lab panels, CT angiograms, and EKGs",
      "Surgeon, assistant, cardiologist, and anesthesiologist fees",
      "Hospital stay, ICU accommodation, and medication during admission",
      "Post-procedure cardiac monitoring and initial recovery visits",
      "Support from bilingual medical coordinators"
    ],
    howToChoose: [
      "Ensure the hospital is JCI-accredited and has a dedicated cardiac surgery center",
      "Verify the cardiologist's training, experience, and board certifications",
      "Inquire about the hospital's survival rates and safety outcomes for cardiac surgery",
      "Confirm the availability of 24/7 cardiac emergency care and advanced diagnostics",
      "Ensure a clear coordination plan with your home physician for long-term care"
    ],
    questionsToAsk: [
      "What is your team's experience with my specific cardiac condition?",
      "Do you recommend a minimally invasive approach or traditional surgery?",
      "What type of valve or stent is best suited for my age and lifestyle?",
      "What are the emergency backup plans during the procedure?",
      "How long must I wait in the country before I can safely fly home?"
    ],
    preparation: [
      "Compile a complete list of all current medications, especially blood thinners, and share it in advance.",
      "Obtain copies of all recent angiograms, stress tests, and EKGs from your local cardiologist.",
      "Secure a travel companion who can assist you during travel and throughout your recovery.",
      "Consult your primary doctor about travel safety and required flight precautions."
    ],
    recoveryGuideline: "Strict adherence to medication schedules and activity limits is critical. Avoid lifting heavy objects, and monitor your incisions daily for any signs of infection. Engage in light walking only as approved by your medical team.",
    risks: [
      "Cardiac arrhythmia or blood pressure fluctuations",
      "Bleeding, hematoma, or infection at incision sites",
      "Adverse reactions to anesthesia or contrast dye",
      "Stroke or myocardial infarction during or after major heart surgery",
      "Thrombosis risk during post-operative travel"
    ],
    faqs: [
      {
        question: "Is open-heart surgery safe to undergo abroad?",
        answer: "For planned, stable procedures, undergoing surgery at JCI-accredited hospitals with experienced cardiovascular teams can be as safe as options in the US. However, due to the high complexity of open-heart surgery, thorough pre-travel planning and medical clearance are absolute requirements."
      },
      {
        question: "How long is recovery before flying after angioplasty?",
        answer: "Patients who undergo non-surgical coronary angioplasty and stenting generally need to wait 7 to 10 days before flying. This allows the groin or wrist access site to heal and ensures cardiovascular stability."
      }
    ],
    relatedCategories: [
      { name: "Diagnostics", slug: "diagnostics" },
      { name: "Wellness", slug: "wellness" }
    ]
  },
  bariatric: {
    slug: "bariatric",
    name: "Bariatric & Weight Loss Surgery",
    description: "Surgical weight management options for patients addressing severe obesity. These procedures should be viewed as tools to support long-term lifestyle and metabolic modifications, not as guaranteed solutions.",
    procedures: [
      {
        slug: "gastric-sleeve",
        name: "Gastric Sleeve (Sleeve Gastrectomy)",
        description: "Surgical removal of approximately 80% of the stomach, leaving a narrow tube or sleeve to restrict food intake.",
        recovery: "Return to sedentary work in 1-2 weeks; full recovery in 4-6 weeks.",
        hospitalStay: "1-2 nights",
        costRange: "$5,500 - $8,000",
      },
      {
        slug: "gastric-bypass",
        name: "Gastric Bypass (Roux-en-Y)",
        description: "Creating a small stomach pouch and routing it directly to the small intestine, restricting intake and limiting calorie absorption.",
        recovery: "Return to light work in 2-3 weeks; full recovery in 6 weeks.",
        hospitalStay: "2 nights",
        costRange: "$6,500 - $9,500",
      },
      {
        slug: "intragastric-balloon",
        name: "Intragastric Balloon",
        description: "A non-surgical procedure placing a saline-filled silicone balloon in the stomach to promote early satiety.",
        recovery: "Nausea resolves in 3-5 days; balloon is removed after 6 months.",
        hospitalStay: "Outpatient",
        costRange: "$3,000 - $4,500",
      }
    ],
    whyLATAM: "Weight loss centers in Latin America offer comprehensive programs including nutritional counseling and psychological support. High-volume bariatric surgeons offer procedures at significantly lower costs than in the US, utilizing advanced laparoscopic and robotic techniques.",
    destinations: ["San José"],
    costFactors: [
      "Type of bariatric procedure selected (sleeve vs bypass)",
      "Choice of laparoscopic or robotic surgical approach",
      "Pre-operative specialty consultations (nutritionist, cardiologist)",
      "Hospital fees, surgical staples, and medical device brands",
      "Post-operative follow-up and dietary counseling program access"
    ],
    packageIncludes: [
      "Pre-operative lab tests, EKG, and chest X-rays",
      "Surgeon, anesthesiologist, and surgical facility fees",
      "Inpatient stay and standard medications during admission",
      "Nutritional guides and post-operative dietary plans",
      "Local shuttle transportation and coordination assistance"
    ],
    howToChoose: [
      "Verify the surgeon's specialized training and credentials in bariatric surgery",
      "Confirm membership in international bodies like the International Federation for the Surgery of Obesity (IFSO)",
      "Ensure the hospital has modern surgical suites and emergency services",
      "Evaluate the clinic's post-operative support, including nutritional follow-up plans",
      "Review historical patient outcomes and success indicators"
    ],
    questionsToAsk: [
      "How many bariatric procedures have you performed, and what is your complication rate?",
      "Which surgery (sleeve or bypass) is best suited to my medical history and goals?",
      "What pre-operative diet must I follow before traveling?",
      "What post-operative support or counseling do you provide remotely?",
      "How long must I remain in the country for post-surgical follow-ups?"
    ],
    preparation: [
      "Follow the required high-protein, low-carbohydrate pre-op diet to reduce liver size and surgical risk.",
      "Stop smoking and avoid aspirin or anti-inflammatory drugs for at least 3-4 weeks prior.",
      "Arrange for a support system at home to help with liquid diet preparation and initial recovery.",
      "Obtain laboratory reports and medical clearance from your primary care physician."
    ],
    recoveryGuideline: "Strictly adhere to the multi-phase post-operative diet (liquid to puree to solid foods) over 4-6 weeks. Stay hydrated by sipping fluids slowly throughout the day. Avoid carbonated beverages and strenuous exercise until cleared.",
    risks: [
      "Staple line leaks or bleeding at surgical margins",
      "Gastrointestinal infection or deep vein thrombosis (DVT)",
      "Nutritional deficiencies requiring lifelong vitamin supplementation",
      "Dumping syndrome (nausea, sweating, diarrhea after eating sugar)",
      "Stenosis or stricture of the new stomach opening"
    ],
    faqs: [
      {
        question: "Will I need to take vitamins forever after bypass surgery?",
        answer: "Yes, because gastric bypass alters your digestive anatomy, it reduces nutrient absorption. You will need to take daily multivitamin, calcium, iron, and vitamin B12 supplements for life to prevent serious nutritional deficiencies."
      },
      {
        question: "How much weight can I expect to lose?",
        answer: "Weight loss varies based on compliance with dietary and lifestyle modifications. On average, sleeve gastrectomy patients lose 50-60% of excess body weight within 1-2 years, while gastric bypass patients may lose 60-70%."
      }
    ],
    relatedCategories: [
      { name: "Cosmetic Surgery", slug: "cosmetic" },
      { name: "Diagnostics", slug: "diagnostics" }
    ]
  },
  fertility: {
    slug: "fertility",
    name: "Fertility & Reproductive Medicine",
    description: "Advanced reproductive technologies and fertility treatments. IVF clinics in Costa Rica offer specialized treatments led by reproductive endocrinologists and embryologists, operating under international laboratory standards.",
    procedures: [
      {
        slug: "ivf",
        name: "In Vitro Fertilization (IVF)",
        description: "Extracting eggs, fertilizing them with sperm in a laboratory, and transferring the resulting embryos to the uterus.",
        recovery: "Ovarian stimulation takes 10-12 days; embryo transfer is outpatient with 1-2 days of light activity.",
        hospitalStay: "Outpatient",
        costRange: "$5,000 - $8,500 per cycle",
      },
      {
        slug: "egg-freezing",
        name: "Egg Freezing (Oocyte Cryopreservation)",
        description: "Stimulating and harvesting eggs, then freezing them to preserve reproductive options for future use.",
        recovery: "Ovarian stimulation takes 10-12 days; recovery from retrieval is 1-2 days.",
        hospitalStay: "Outpatient",
        costRange: "$3,500 - $5,500",
      },
      {
        slug: "iui",
        name: "Intrauterine Insemination (IUI)",
        description: "Placing prepared sperm directly inside the uterus around the time of ovulation to facilitate fertilization.",
        recovery: "Immediate; return to normal activities right after.",
        hospitalStay: "Outpatient",
        costRange: "$800 - $1,500",
      }
    ],
    whyLATAM: "Costa Rica lifted its historical ban on IVF in 2016, and clinics now utilize modern embryology laboratories with advanced genetic testing (PGT). The costs for fertility treatments are significantly lower than in the US, allowing patients to consider multiple cycles if necessary.",
    destinations: ["San José", "Escazú"],
    costFactors: [
      "Required medications for ovarian stimulation (major cost driver)",
      "Use of advanced genetics testing (PGT-A or PGT-M on embryos)",
      "Inclusion of ICSI (intracytoplasmic sperm injection) technique",
      "Embryo cryopreservation fees and annual storage costs",
      "Number of cycles needed to achieve pregnancy"
    ],
    packageIncludes: [
      "Initial diagnostic ultrasounds and blood panels",
      "Egg retrieval procedure, laboratory fertilization, and embryo culture",
      "Embryo transfer procedure and initial monitoring",
      "Dedicated bilingual fertility coordinators",
      "Local logistical support and transfers"
    ],
    howToChoose: [
      "Verify the clinic's certification and licensing by national health authorities",
      "Ask about laboratory standards, cleanroom features, and embryologist credentials",
      "Ensure they offer pre-implantation genetic testing (PGT) on-site or through partners",
      "Review the clinic's success rates for your specific age group",
      "Confirm clear, transparent pricing structure for cycles and medication"
    ],
    questionsToAsk: [
      "What are the success rates for IVF in my age group at your clinic?",
      "Are genetic testing options (PGT-A) available for my embryos?",
      "How are medications sourced, and can I purchase them locally?",
      "What happens to unused frozen embryos, and what are the storage fees?",
      "How long must I remain in the country during my stimulation cycle?"
    ],
    preparation: [
      "Compile and share prior hormone panels (AMH, FSH, LH) and semen analysis reports.",
      "Start recommended prenatal vitamins and folic acid at least 2-3 months prior.",
      "Prepare for a stay of 14-21 days in the country if completing a full stimulation and retrieval cycle.",
      "Consult with your local OB/GYN to arrange monitoring scans upon return."
    ],
    recoveryGuideline: "After egg retrieval, rest for 24-48 hours. You may experience mild bloating or cramping. After embryo transfer, avoid strenuous exercise, heavy lifting, and hot baths while awaiting pregnancy test results.",
    risks: [
      "Ovarian Hyperstimulation Syndrome (OHSS) from fertility drugs",
      "Multiple pregnancies (twins, triplets) if transferring multiple embryos",
      "Ectopic pregnancy or miscarriage",
      "Local infection or bleeding from the retrieval needle"
    ],
    faqs: [
      {
        question: "How long must I stay in Costa Rica for an IVF cycle?",
        answer: "A complete cycle takes about 15 to 20 days, starting from the beginning of hormone stimulation to egg retrieval. Alternatively, you can start stimulation meds at home under local monitoring and travel only for retrieval and transfer (requiring 7-10 days)."
      },
      {
        question: "What is PGT genetic testing and do you offer it?",
        answer: "PGT (Pre-implantation Genetic Testing) screens embryos for chromosomal abnormalities before transfer. Reputable clinics in Costa Rica work with accredited genetics labs to offer PGT testing, which helps reduce miscarriage risk and improve success rates."
      }
    ],
    relatedCategories: [
      { name: "Diagnostics", slug: "diagnostics" },
      { name: "Wellness", slug: "wellness" }
    ]
  },
  ophthalmology: {
    slug: "ophthalmology",
    name: "Ophthalmology & Vision Correction",
    description: "Highly advanced eye care, vision correction, and surgical procedures. Costa Rica's private eye clinics feature advanced diagnostic equipment, laser suites, and micro-surgical technologies.",
    procedures: [
      {
        slug: "lasik",
        name: "LASIK Eye Surgery",
        description: "Using a laser to reshape the cornea, correcting nearsightedness, farsightedness, and astigmatism.",
        recovery: "Immediate vision improvement; return to work in 1-2 days.",
        hospitalStay: "Outpatient",
        costRange: "$1,800 - $3,000 (both eyes)",
      },
      {
        slug: "cataract-surgery",
        name: "Cataract Surgery",
        description: "Replacing the eye's cloudy natural lens with a custom artificial intraocular lens (IOL) to restore vision.",
        recovery: "Significant improvement in days; full healing in 4 weeks.",
        hospitalStay: "Outpatient",
        costRange: "$1,500 - $2,800 per eye",
      },
      {
        slug: "vision-correction",
        name: "Vision Correction (PRK/ICL)",
        description: "Alternative refractive surgeries, including implantable contact lenses (ICL) for patients not suited for LASIK.",
        recovery: "PRK requires 3-5 days of initial recovery; ICL heals in 1-2 days.",
        hospitalStay: "Outpatient",
        costRange: "$2,000 - $4,000 depending on technology",
      }
    ],
    whyLATAM: "Private eye clinics in San José and Escazú offer direct access to specialized ophthalmologists without the long wait times common in other countries. The availability of advanced intraocular lens options (multifocal, toric) at competitive prices makes cataract surgery highly attractive.",
    destinations: ["San José", "Escazú"],
    costFactors: [
      "Type of laser technology utilized (femtosecond vs microkeratome)",
      "Choice of intraocular lens type (standard monofocal vs premium multifocal/toric)",
      "Complexity of the refractive error or corneal thickness limits",
      "Surgeon certifications and experience",
      "Post-operative eye drop medications and follow-up care"
    ],
    packageIncludes: [
      "Comprehensive pre-op eye examinations and corneal mapping",
      "The surgical procedure and laser suite fees",
      "Post-operative protective eyewear and initial drop kits",
      "Initial follow-up evaluations over 24-48 hours",
      "Local coordination and support services"
    ],
    howToChoose: [
      "Ensure the ophthalmologist is board-certified and has specialized in refractive or anterior segment surgery",
      "Confirm that the clinic uses modern, calibrated excimer/femtosecond laser systems",
      "Inquire about their track record and protocol for handling rare complications",
      "Verify the brands of intraocular lenses offered (e.g., Alcon, Johnson & Johnson)",
      "Ensure they provide a detailed pre-op evaluation to confirm candidacy"
    ],
    questionsToAsk: [
      "Am I a better candidate for LASIK, PRK, or ICL?",
      "What type of intraocular lens do you recommend for my lifestyle?",
      "What laser system do you use, and is it custom wave-front guided?",
      "How long must I wait before it is safe to fly after cataract surgery?",
      "What happens if I require a minor enhancement or touch-up?"
    ],
    preparation: [
      "Stop wearing contact lenses for at least 1-2 weeks prior to your evaluation, as they alter corneal shape.",
      "Bring copies of your current prescription history and eye exam records.",
      "Arrange for sunglasses to protect your eyes from bright light post-surgery.",
      "Avoid wearing eye makeup, creams, or perfumes on the day of the procedure."
    ],
    recoveryGuideline: "Avoid rubbing your eyes under any circumstances. Administer prescribed antibiotic and anti-inflammatory eye drops exactly as scheduled. Wear protective shields while sleeping for the first week, and avoid swimming or dusty environments.",
    risks: [
      "Chronic dry eyes requiring lubricating drops",
      "Visual glare, halos, or starbursts around lights at night",
      "Under-correction or over-correction needing enhancements",
      "Localized corneal infection or flap complications"
    ],
    faqs: [
      {
        question: "How soon after LASIK can I fly?",
        answer: "Most ophthalmologists recommend waiting 48 to 72 hours before flying after LASIK. The dry air inside airplane cabins can exacerbate dry eye symptoms, so it is crucial to use lubricating drops frequently during your flight."
      },
      {
        question: "What is the difference between monofocal and multifocal IOLs?",
        answer: "Monofocal lenses restore clear vision at a single distance (usually far), requiring reading glasses for close work. Multifocal lenses have multiple focal zones, allowing you to see clearly at near, intermediate, and far distances, reducing dependence on glasses."
      }
    ],
    relatedCategories: [
      { name: "Diagnostics", slug: "diagnostics" },
      { name: "Wellness", slug: "wellness" }
    ]
  },
  "general-surgery": {
    slug: "general-surgery",
    name: "General & Minimally Invasive Surgery",
    description: "Standard surgical procedures performed using laparoscopic and minimally invasive techniques. Private hospitals in Costa Rica maintain advanced surgical suites with specialized surgical teams.",
    procedures: [
      {
        slug: "hernia-repair",
        name: "Hernia Repair",
        description: "Surgical repair of abdominal wall, inguinal, or umbilical hernias using laparoscopic mesh reinforcement.",
        recovery: "Return to light activity in 1-2 weeks; avoid lifting for 6 weeks.",
        hospitalStay: "Outpatient or 1 night",
        costRange: "$3,000 - $5,500",
      },
      {
        slug: "gallbladder-surgery",
        name: "Gallbladder Surgery (Cholecystectomy)",
        description: "Laparoscopic removal of the gallbladder to address gallstones or chronic inflammation.",
        recovery: "Return to normal activity in 1-2 weeks; temporary low-fat diet required.",
        hospitalStay: "Outpatient or 1 night",
        costRange: "$3,500 - $6,000",
      },
      {
        slug: "appendectomy",
        name: "Appendectomy",
        description: "Surgical removal of the appendix, typically performed laparoscopically for non-ruptured cases.",
        recovery: "Return to light activities in 1-2 weeks; avoid strenuous lifting for 4 weeks.",
        hospitalStay: "1-2 nights",
        costRange: "$3,000 - $5,500",
      }
    ],
    whyLATAM: "Planned general surgery procedures, such as hernia repairs or gallbladder removals, are common in medical tourism due to immediate surgical scheduling and high-standard care. Patients benefit from lower out-of-pocket costs and personalized recovery support.",
    destinations: ["San José"],
    costFactors: [
      "Complexity of the hernia type or severity of gallbladder disease",
      "Use of specialized surgical mesh or advanced laparoscopic tools",
      "Inpatient stay requirements and overnight observation",
      "Surgeon and anesthesiologist fees",
      "Required pre-operative diagnostic imaging"
    ],
    packageIncludes: [
      "Pre-operative consultation and blood screening",
      "Surgeon, assistant, and anesthesiologist fees",
      "Surgical facility, laparoscopic supplies, and mesh (if used)",
      "Standard post-operative follow-up visits",
      "Local coordination and support"
    ],
    howToChoose: [
      "Verify the surgeon's board certification in general surgery",
      "Confirm that the surgery will be performed in a fully accredited hospital",
      "Ensure the hospital is equipped with 24/7 emergency services and ICU",
      "Ask about their protocol for post-surgical recovery monitoring",
      "Review historical patient feedback and outcomes"
    ],
    questionsToAsk: [
      "Will you perform this procedure laparoscopically or through open surgery?",
      "What type of surgical mesh will you use, and has it been clinically tested?",
      "How long must I remain in the country before I can safely travel?",
      "What dietary changes do I need to make immediately after surgery?",
      "Who will handle my follow-up care if I have concerns after returning home?"
    ],
    preparation: [
      "Avoid food and drink for at least 8-12 hours prior to your scheduled surgery.",
      "Inform the surgeon of any history of bleeding disorders or blood-thinning medications.",
      "Arrange for a companion to assist you during travel and the first few days of recovery.",
      "Obtain medical clearance from your primary physician if you have chronic health conditions."
    ],
    recoveryGuideline: "Avoid heavy lifting (anything over 10 lbs) for at least 4-6 weeks to prevent hernia recurrence. Keep surgical incisions dry and clean. Walk gently to promote circulation and prevent blood clots.",
    risks: [
      "Local infection or bleeding at the incision sites",
      "Hernia recurrence or mesh displacement",
      "Adverse reactions to general anesthesia",
      "Injury to surrounding abdominal organs during surgery"
    ],
    faqs: [
      {
        question: "How long must I wait before flying after gallbladder surgery?",
        answer: "Most general surgeons recommend waiting at least 7 to 10 days before flying after a laparoscopic cholecystectomy. This allows your abdomen to decompress from the gas used during laparoscopic surgery and ensures your incisions are healing well."
      },
      {
        question: "Is laparoscopic hernia repair better than open surgery?",
        answer: "Laparoscopic repair typically offers smaller incisions, less post-operative pain, and a faster return to normal activities. However, depending on the hernia size and surgical history, open surgery may sometimes be safer. Your surgeon will recommend the best approach."
      }
    ],
    relatedCategories: [
      { name: "Diagnostics", slug: "diagnostics" },
      { name: "Wellness", slug: "wellness" }
    ]
  },
  diagnostics: {
    slug: "diagnostics",
    name: "Medical Diagnostics & Preventive Screenings",
    description: "Comprehensive diagnostic imaging, laboratory tests, and executive check-ups. Private diagnostic centers in Costa Rica feature advanced imaging technology and offer immediate scheduling.",
    procedures: [
      {
        slug: "mri",
        name: "Magnetic Resonance Imaging (MRI)",
        description: "Non-invasive imaging using magnetic fields to produce detailed pictures of organs, soft tissues, and bone structures.",
        recovery: "Immediate; zero downtime.",
        hospitalStay: "Outpatient",
        costRange: "$500 - $900 per area",
      },
      {
        slug: "ct-scan",
        name: "Computed Tomography (CT Scan)",
        description: "Cross-sectional X-ray imaging used to examine internal organs, bone density, and vascular structures.",
        recovery: "Immediate; zero downtime.",
        hospitalStay: "Outpatient",
        costRange: "$350 - $700",
      },
      {
        slug: "preventive-checkup",
        name: "Executive Medical Check-up",
        description: "A comprehensive health assessment combining laboratory tests, stress testing, imaging, and multi-specialist consultations.",
        recovery: "Immediate; completed in 1-2 days.",
        hospitalStay: "Outpatient",
        costRange: "$800 - $1,800",
      }
    ],
    whyLATAM: "Private diagnostic centers in San José offer state-of-the-art technology (such as 3T MRI systems) with immediate scheduling and rapid report delivery. The costs are significantly lower than in the US, making it an excellent option for preventive health assessments.",
    destinations: ["San José", "Escazú"],
    costFactors: [
      "Type of diagnostic imaging required (MRI, CT, Ultrasound)",
      "Requirement for contrast dye or sedation",
      "Number of specialized consultants involved in the assessment",
      "Extent of laboratory panels requested",
      "Choice of facility and imaging technology"
    ],
    packageIncludes: [
      "All diagnostic imaging scans and laboratory panels",
      "Detailed medical reports and radiologist interpretations",
      "Specialist consultations to review results",
      "Bilingual patient liaison services",
      "Local coordination assistance"
    ],
    howToChoose: [
      "Confirm that the imaging center uses modern equipment (e.g., high-tesla MRI)",
      "Verify the certifications and experience of the interpreting radiologists",
      "Ensure they provide reports in English for your home physician",
      "Compare pricing and package scope across major private hospitals",
      "Choose a center that coordinates all tests efficiently to minimize travel duration"
    ],
    questionsToAsk: [
      "What is the strength of the MRI scanner you use (e.g., 1.5T or 3T)?",
      "Will the radiologist report be provided in English?",
      "Are specialized consultations included in my check-up package?",
      "How soon will I receive my digital imaging records and reports?",
      "Can you share my results directly with my physician at home?"
    ],
    preparation: [
      "Follow specific fasting instructions for blood tests or imaging scans (usually 8-12 hours).",
      "Inform the imaging center of any metal implants, pacemakers, or kidney issues.",
      "Bring any prior imaging records or relevant medical history documents.",
      "Wear comfortable, loose clothing that is easy to change."
    ],
    recoveryGuideline: "Non-invasive diagnostic procedures require no recovery time. You can resume normal activities immediately. If contrast dye was used, drink plenty of fluids to help flush it from your system.",
    risks: [
      "Allergic reactions to contrast dye (rare)",
      "Mild discomfort or claustrophobia during MRI scans",
      "Minimal radiation exposure during CT scans or X-rays"
    ],
    faqs: [
      {
        question: "How long does an executive medical check-up take?",
        answer: "Most executive check-ups can be completed in a single day, typically taking 4 to 6 hours. You will undergo all laboratory tests, imaging, and consultations, with final results and reports ready within 24 to 48 hours."
      },
      {
        question: "Will my insurance cover diagnostic tests abroad?",
        answer: "Standard domestic insurance plans rarely cover diagnostics performed outside the US. However, due to the affordable pricing, many patients pay out-of-pocket, finding the total cost lower than their domestic deductible."
      }
    ],
    relatedCategories: [
      { name: "General Surgery", slug: "general-surgery" },
      { name: "Wellness", slug: "wellness" }
    ]
  },
  wellness: {
    slug: "wellness",
    name: "Integrative Wellness & Rehabilitation",
    description: "Evidence-based wellness, physical rehabilitation, and preventative therapies. Wellness services focus on holistic recovery, physical therapy, and lifestyle modification programs with qualified medical supervision.",
    procedures: [
      {
        slug: "rehabilitation",
        name: "Post-Surgical Rehabilitation",
        description: "Customized physical therapy and recovery programs to support healing and mobility after major orthopedic or cardiac procedures.",
        recovery: "Varies by procedure; typically scheduled in weekly blocks.",
        hospitalStay: "Outpatient or residential recovery",
        costRange: "$500 - $1,500 per week",
      },
      {
        slug: "detox-programs",
        name: "Supervised Detox & Nutrition Programs",
        description: "Medically supervised dietary adjustments and lifestyle coaching to address metabolic health and chronic fatigue.",
        recovery: "Immediate; programs last 7 to 14 days.",
        hospitalStay: "Outpatient or retreat-based",
        costRange: "$1,200 - $3,500",
      }
    ],
    whyLATAM: "Costa Rica's peaceful natural environment and advanced private medical infrastructure make it a premier destination for rehabilitation and wellness. Qualified physicians and physical therapists provide personalized care in dedicated recovery retreats.",
    destinations: ["San José", "Escazú"],
    costFactors: [
      "Length of the rehabilitation or wellness program",
      "Level of medical and nursing supervision required",
      "Choice of accommodation (outpatient clinic vs residential retreat)",
      "Inclusion of specialized therapies (physical therapy, hydrotherapy)",
      "Required medications or dietary supplements"
    ],
    packageIncludes: [
      "Initial medical evaluation and physical assessment",
      "All therapy sessions, dietary plans, and consultations",
      "Accommodation and nutritional support (if residential)",
      "Bilingual coordinator and local transportation",
      "Follow-up recommendations and long-term planning"
    ],
    howToChoose: [
      "Verify the licensing and medical credentials of the supervising physicians",
      "Confirm that physical therapists are licensed by the local professional board",
      "Ensure the facility uses evidence-based protocols and avoids unproven claims",
      "Evaluate the accessibility and safety features of the recovery environment",
      "Review patient feedback regarding care quality and outcomes"
    ],
    questionsToAsk: [
      "What are the qualifications of the medical team supervising my program?",
      "Is the program customized to my specific surgical or health history?",
      "What evidence supports the therapies included in my plan?",
      "Are emergency medical services easily accessible from the facility?",
      "Do you provide coordination support with my home physician?"
    ],
    preparation: [
      "Share your complete medical history, surgical records, and current prescriptions in advance.",
      "Obtain clearance from your surgeon or primary doctor for travel and active rehabilitation.",
      "Pack comfortable clothing suitable for physical therapy and light exercise.",
      "Discuss your recovery goals with the medical team prior to arrival."
    ],
    recoveryGuideline: "Participate actively in your therapy sessions, but do not push past your physical limits. Stay hydrated, follow the nutritional plan, and report any pain or swelling to the medical team immediately.",
    risks: [
      "Muscle strain or fatigue from active therapy",
      "Mild adjustments to dietary changes",
      "Temporary fatigue during initial rehabilitation phases"
    ],
    faqs: [
      {
        question: "Why is Costa Rica popular for post-surgical recovery?",
        answer: "Costa Rica combines a peaceful, stress-free environment with high-standard medical care. Many dedicated recovery retreats offer professional nursing support, healthy meals, and physical therapy, providing a comfortable setting for initial healing."
      },
      {
        question: "Are the wellness programs medically supervised?",
        answer: "Yes, reputable wellness and rehabilitation programs are supervised by licensed doctors and staffed by qualified physical therapists or nutritionists, ensuring that all therapies are safe and evidence-based."
      }
    ],
    relatedCategories: [
      { name: "Diagnostics", slug: "diagnostics" },
      { name: "Orthopedic", slug: "orthopedic" }
    ]
  }
};
