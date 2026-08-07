export interface GuideInfo {
  slug: string;
  title: string;
  description: string;
  content: string;
  steps: { title: string; desc: string }[];
}

export const guidesData: Record<string, GuideInfo> = {
  "getting-started": {
    slug: "getting-started",
    title: "Getting Started with Medical Tourism",
    description: "An introductory guide to understanding the basics of medical travel, weighing risks vs benefits, and selecting your destination.",
    content: "Medical tourism involves traveling to another country to receive medical, dental, or surgical care. While cost savings are a major driver, successful outcomes depend on careful planning, realistic expectations, and verifying physician credentials.",
    steps: [
      {
        title: "Identify Your Goals",
        desc: "Determine the exact treatment you need and research typical international options."
      },
      {
        title: "Set a Cautious Budget",
        desc: "Account for flights, hotels, recovery services, and a contingency fund rather than just the surgical cost."
      },
      {
        title: "Consult Your Local Doctor",
        desc: "Discuss your travel plans with your primary physician to identify any personal risk factors."
      }
    ]
  },
  "planning": {
    slug: "planning",
    title: "Planning Your Medical Trip",
    description: "A step-by-step checklist to coordinate consultations, booking flights, scheduling clinics, and securing recovery logistics.",
    content: "Proper travel coordination ensures a stress-free medical trip. We recommend completing all diagnostic consults online and receiving itemized billing estimates before purchasing airline tickets.",
    steps: [
      {
        title: "Virtual Consultation",
        desc: "Schedule initial video consults with prospective surgeons to review your records."
      },
      {
        title: "Secure Written Quotes",
        desc: "Ensure you receive an itemized estimate showing hospital fees, surgeon fees, and implant brands."
      },
      {
        title: "Coordinate Recovery Lodging",
        desc: "Book a hotel or recovery retreat located near the clinic. Verify elevator accessibility."
      }
    ]
  },
  "travel": {
    slug: "travel",
    title: "Travel Logistics Guide",
    description: "Essential tips for airport navigation, local transportation, currencies, and safety during your stay in Costa Rica.",
    content: "Costa Rica is a highly accessible and safe destination. Most medical travel occurs in San José and Escazú suburb, which are approximately 25 minutes from Juan Santamaría Airport (SJO).",
    steps: [
      {
        title: "Passport and Visa Check",
        desc: "Verify that your passport is valid for your entire stay. US and Canadian citizens do not require a tourist visa."
      },
      {
        title: "Local Transport Shuttles",
        desc: "Coordinate transport through your clinic or use official airport red taxis. Avoid unlicensed cabs."
      },
      {
        title: "Currency Settings",
        desc: "The local currency is the Colón, but US dollars are widely accepted in all private clinics and hotels."
      }
    ]
  },
  "recovery": {
    slug: "recovery",
    title: "Post-Operative Recovery and Aftercare",
    description: "Understanding recovery guidelines, suture removal, follow-up schedules, and flying home safely.",
    content: "Recovery is the most critical phase of medical travel. Rushing to fly home can increase the risk of deep vein thrombosis (DVT) and wound healing complications.",
    steps: [
      {
        title: "Adhere to Activity Limits",
        desc: "Rest as directed, wear compression garments, and avoid lifting or strenuous movement."
      },
      {
        title: "Complete Follow-up Visits",
        desc: "Do not miss post-op checks. The surgeon must examine your incisions and clear you for travel."
      },
      {
        title: "Plan Your Aftercare at Home",
        desc: "Coordinate with your local primary doctor to monitor your progress and handle suture removals if needed."
      }
    ]
  }
};
