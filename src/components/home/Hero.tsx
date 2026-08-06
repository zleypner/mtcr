import Link from "next/link";
import { ArrowRight, Shield, Award, DollarSign } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
            <span>Trusted by 10,000+ patients from USA &amp; Canada</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            World-Class Healthcare in{" "}
            <span className="text-primary">Costa Rica</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
            Save 50-70% on medical procedures without compromising quality.
            Access JCI-accredited hospitals, board-certified doctors, and
            personalized care in one of the world&apos;s top medical tourism
            destinations.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/treatments"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
            >
              Explore Treatments
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto"
              )}
            >
              Get Free Consultation
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Save 50-70%</h3>
              <p className="mt-1 text-sm text-gray-500">
                Compared to US prices
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">
                JCI Accredited
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                International standards
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">
                Board Certified
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                US/EU trained doctors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
