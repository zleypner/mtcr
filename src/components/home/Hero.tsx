import Link from "next/link";
import { ArrowRight, Shield, Award, DollarSign } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-base font-bold text-blue-700">
            <span>Your trusted guide for medical tourism in Costa Rica</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Quality Medical Care in{" "}
            <span className="text-primary">Costa Rica</span>
          </h1>

          <p className="mt-6 text-xl leading-8 text-gray-700 sm:text-2xl font-medium">
            Save 40-70% on dental implants, cosmetic surgery, and orthopedic procedures.
            Access JCI-accredited hospitals, board-certified specialists, and
            comprehensive planning resources for your medical journey to Costa Rica.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/treatments"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
            >
              Explore Treatments
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <DollarSign className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="mt-5 font-black text-gray-900 text-3xl">Save 40-70%</h3>
              <p className="mt-4 text-2xl text-gray-700 font-semibold text-center leading-relaxed">
                vs. US prices on dental, cosmetic, and orthopedic procedures
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="mt-5 font-black text-gray-900 text-3xl">
                3 JCI Hospitals
              </h3>
              <p className="mt-4 text-2xl text-gray-700 font-semibold text-center leading-relaxed">
                Internationally accredited facilities in San José
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                <Shield className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="mt-5 font-black text-gray-900 text-3xl">
                3 Hours from Miami
              </h3>
              <p className="mt-4 text-2xl text-gray-700 font-semibold text-center leading-relaxed">
                Direct flights, no visa required for US/Canada/EU
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
