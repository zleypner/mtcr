import type { Metadata } from "next";
import Link from "next/link";
import { 
  MapPin, Shield, CheckCircle2, ChevronRight, Globe, 
  MapPinIcon, AlertCircle, Building2, Star
} from "lucide-react";
import { generateMetadata as helperGenerateMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/shared";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = helperGenerateMetadata({
  title: "Medical Destinations in Latin America | Costa Rica & Beyond",
  description: "Explore the top medical tourism destinations in Latin America. Featured guide to Costa Rica private care zones, with upcoming profiles in Mexico and Colombia.",
  path: "/destinations",
});

const featuredDestinations = [
  {
    name: "Costa Rica",
    description: "Known for high-caliber biological dentistry, dental implants, cosmetic plastic surgery, and orthopedic procedures. Patients benefit from proximity, bilingual clinics, and dedicated recovery lodges.",
    cities: [
      { name: "San José", slug: "san-jose", desc: "Capital city and primary medical hub with JCI hospitals." },
      { name: "Escazú", slug: "escazu", desc: "Upscale medical suburb featuring CIMA hospital and top cosmetic centers." }
    ],
    status: "Active Guide"
  }
];

const upcomingDestinations = [
  {
    name: "Mexico",
    description: "Highly popular for bariatric weight loss procedures, cosmetic surgery, and dental work along border cities and tourist regions.",
    specialties: ["Weight Loss Surgery", "Dental Care", "Cosmetic Enhancements"]
  },
  {
    name: "Colombia",
    description: "Renowned globally for aesthetic body contouring and reconstructive cosmetic surgeries in hubs like Medellín and Bogotá.",
    specialties: ["Cosmetic Surgery", "Dentistry"]
  },
  {
    name: "Panama",
    description: "Developing hub with US-affiliated private hospitals, utilizing the US dollar as currency for transparent budgeting.",
    specialties: ["General Medicine", "Cardiology"]
  }
];

export default function DestinationsPage() {
  const breadcrumbsItems = [
    { label: "Destinations", href: "/destinations" },
  ];

  return (
    <>
      <div className="bg-slate-50 border-b">
        <div className="container">
          <Breadcrumbs items={breadcrumbsItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50/50 to-white py-16 sm:py-24 border-b">
        <div className="container max-w-4xl text-center">
          <Globe className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Medical Destinations in Latin America
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Compare medical travel destinations, explore local healthcare infrastructure, 
            and read city logistics guides starting with our featured focus on Costa Rica.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <div className="py-16 sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-3">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Featured Destinations */}
            <section className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b pb-3 mb-6">
                Featured Country Hub
              </h2>
              {featuredDestinations.map((country) => (
                <div key={country.name} className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
                      <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                      {country.name}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-base font-medium font-semibold text-green-800 border">
                      {country.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {country.description}
                  </p>
                  
                  <div className="grid gap-6 sm:grid-cols-2">
                    {country.cities.map((city) => (
                      <div key={city.name} className="rounded-xl border p-5 bg-slate-50 hover:bg-slate-100/50 transition-colors">
                        <h4 className="font-bold text-gray-900 text-sm flex items-center gap-1.5">
                          <MapPin className="h-4.5 w-4.5 text-primary shrink-0" />
                          {city.name}
                        </h4>
                        <p className="text-base font-medium text-gray-500 mt-2 leading-relaxed mb-4">
                          {city.desc}
                        </p>
                        <Link 
                          href={`/cities/${city.slug}`}
                          className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
                        >
                          View {city.name} Guide
                          <ChevronRight className="ml-1 h-3.5 w-3.5" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Upcoming Destinations */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 border-b pb-3 mb-6">
                Upcoming Destinations (Fase 2 Expansion)
              </h2>
              <div className="grid gap-6">
                {upcomingDestinations.map((country) => (
                  <div key={country.name} className="rounded-xl border p-6 bg-slate-50/50 opacity-90">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-900 text-base">{country.name}</h4>
                      <span className="text-sm font-semibold font-semibold text-slate-500 uppercase tracking-widest">Upcoming</span>
                    </div>
                    <p className="text-base text-gray-600 font-medium leading-relaxed mb-4">{country.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {country.specialties.map((spec) => (
                        <span key={spec} className="inline-flex rounded-full bg-white border px-2 py-0.5 text-sm font-semibold text-slate-500">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div>
            <div className="rounded-xl border bg-slate-50 p-6 sticky top-24 space-y-6">
              <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                <Shield className="h-4.5 w-4.5 text-primary" />
                Planning Support
              </h3>
              <p className="text-base text-slate-600 font-medium leading-relaxed">
                Smart Medical Tourism helps patients compare geographic hubs to understand local infrastructure, logistics, and safety protocols.
              </p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 text-xs mb-2">Expansion Registry</h4>
                <p className="text-base text-slate-600 font-medium leading-relaxed">
                  We are actively auditing clinical networks in Mexico and Colombia. Register to receive notifications when verified profiles are active.
                </p>
              </div>
              <div className="border-t pt-4">
                <Link href="/contact" className={cn(buttonVariants(), "w-full text-center")}>
                  Register for Updates
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
