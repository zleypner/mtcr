import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-primary to-blue-600 px-8 py-16 text-center sm:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Start Your Medical Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Connect with verified hospitals and clinics across Latin America. Get a
            free, no-obligation quote for your procedure today.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "w-full sm:w-auto"
              )}
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/treatments"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full border-white text-white hover:bg-white hover:text-primary sm:w-auto"
              )}
            >
              Browse Treatments
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/70">
            No credit card required. Get personalized quotes from verified
            providers.
          </p>
        </div>
      </div>
    </section>
  );
}
