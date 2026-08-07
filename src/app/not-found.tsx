import Link from "next/link";
import { Compass, ArrowRight, ShieldAlert } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 border mb-6 text-primary animate-pulse">
        <Compass className="h-8 w-8" />
      </div>
      
      <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 mb-4 border">
        Error 404
      </span>
      
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">
        Page Not Found
      </h1>
      
      <p className="text-slate-500 max-w-md mx-auto mb-8 leading-relaxed text-sm sm:text-base">
        The resource you are looking for does not exist or is currently undergoing credential verification audits by our editorial board.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link href="/" className={buttonVariants()}>
          Return to Home
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
          Contact Coordinator
        </Link>
      </div>

      <div className="mt-12 max-w-md border border-slate-200 rounded-xl bg-slate-50/50 p-4 text-left text-2xs text-slate-400 leading-relaxed flex gap-3">
        <ShieldAlert className="h-4.5 w-4.5 text-slate-300 shrink-0 mt-0.5" />
        <p>
          Smart Medical Tourism displays provider profiles and specialized treatment guides 
          under strict verification protocols. If a page was recently updated or is undergoing 
          accreditation checks, it will remain index-disabled or unavailable until finalized.
        </p>
      </div>
    </div>
  );
}
