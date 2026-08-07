import Link from "next/link";
import { 
  Clock, DollarSign, Stethoscope, HeartHandshake, ShieldCheck, 
  AlertTriangle, Info, HelpCircle, CheckCircle2, ChevronRight, Building2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

// 1. QuickFacts
interface QuickFactsProps {
  procedure: string;
  duration: string;
  recovery: string;
  hospital: string;
  savings: string;
}

export function QuickFacts({ procedure, duration, recovery, hospital, savings }: QuickFactsProps) {
  return (
    <div className="my-8 rounded-xl border bg-slate-50 p-6 shadow-xs">
      <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
        <ClipboardIcon />
        Quick Facts: {procedure}
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 text-sm">
        <div className="rounded-lg bg-white border p-3.5 flex items-start gap-3">
          <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <span className="block text-xs font-semibold text-gray-400 uppercase">Duration</span>
            <span className="font-semibold text-gray-900">{duration}</span>
          </div>
        </div>
        <div className="rounded-lg bg-white border p-3.5 flex items-start gap-3">
          <HeartHandshake className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <span className="block text-xs font-semibold text-gray-400 uppercase">Recovery</span>
            <span className="font-semibold text-gray-900">{recovery}</span>
          </div>
        </div>
        <div className="rounded-lg bg-white border p-3.5 flex items-start gap-3">
          <Stethoscope className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <span className="block text-xs font-semibold text-gray-400 uppercase">Stay</span>
            <span className="font-semibold text-gray-900">{hospital}</span>
          </div>
        </div>
        <div className="rounded-lg bg-white border p-3.5 flex items-start gap-3">
          <DollarSign className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
          <div>
            <span className="block text-xs font-semibold text-gray-400 uppercase">Savings</span>
            <span className="font-semibold text-green-600 font-bold">{savings}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. CostComparison
interface CostComparisonProps {
  treatment: string;
  usaCost: number;
  costaRicaCost: number;
}

export function CostComparison({ treatment, usaCost, costaRicaCost }: CostComparisonProps) {
  const savings = usaCost - costaRicaCost;
  const savingsPercent = Math.round((savings / usaCost) * 100);

  return (
    <div className="my-8 rounded-xl border p-6 bg-white shadow-xs">
      <h3 className="text-base font-bold text-gray-900 mb-4">Typical Cost Comparison</h3>
      <div className="space-y-4">
        {/* USA Bar */}
        <div>
          <div className="flex justify-between text-sm font-semibold text-gray-700 mb-1">
            <span>Average Cost in US/Canada</span>
            <span className="text-red-600">${usaCost.toLocaleString()} USD</span>
          </div>
          <div className="w-full h-6 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-red-500 rounded-full" style={{ width: "100%" }} />
          </div>
        </div>
        {/* Costa Rica Bar */}
        <div>
          <div className="flex justify-between text-sm font-semibold text-gray-700 mb-1">
            <span>Costa Rica (Estimated)</span>
            <span className="text-green-600">${costaRicaCost.toLocaleString()} USD</span>
          </div>
          <div className="w-full h-6 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full flex items-center justify-end px-3 text-2xs text-white font-bold" 
              style={{ width: `${Math.max(25, (costaRicaCost / usaCost) * 100)}%` }}
            >
              ${costaRicaCost.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 bg-green-50 rounded-lg p-3 text-xs text-green-800 font-semibold border border-green-200 text-center">
        Potential savings of approx. ${savings.toLocaleString()} USD ({savingsPercent}% savings)
      </div>
    </div>
  );
}

// 3. Callout
interface CalloutProps {
  type?: "info" | "warning" | "caution";
  children: React.ReactNode;
}

export function Callout({ type = "info", children }: CalloutProps) {
  const isWarning = type === "warning";
  const isCaution = type === "caution";

  return (
    <div className={cn(
      "my-6 rounded-xl border p-4 text-sm leading-relaxed",
      isWarning && "border-amber-200 bg-amber-50/50 text-amber-800",
      isCaution && "border-red-200 bg-red-50/50 text-red-800",
      type === "info" && "border-blue-200 bg-blue-50/50 text-blue-800"
    )}>
      <div className="flex gap-3">
        {isWarning && <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />}
        {isCaution && <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />}
        {type === "info" && <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />}
        <div>{children}</div>
      </div>
    </div>
  );
}

// 4. RecoveryTimeline
interface Stage {
  day: string;
  description: string;
}

interface RecoveryTimelineProps {
  stages: Stage[];
}

export function RecoveryTimeline({ stages }: RecoveryTimelineProps) {
  return (
    <div className="my-8 space-y-4">
      <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Clock className="h-5 w-5 text-primary shrink-0" />
        Recovery Timeline Stages
      </h3>
      <div className="relative pl-6 border-l border-slate-200 space-y-6 ml-3 py-2">
        {stages.map((stage, idx) => (
          <div key={idx} className="relative">
            <span className="absolute -left-[31px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border bg-white text-3xs text-primary font-bold shadow-xs">
              {idx + 1}
            </span>
            <h4 className="font-bold text-gray-900 text-sm">{stage.day}</h4>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">{stage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// 5. CTABox
interface CTABoxProps {
  title: string;
  description: string;
}

export function CTABox({ title, description }: CTABoxProps) {
  return (
    <div className="my-8 rounded-2xl bg-slate-900 border p-6 sm:p-8 text-center text-white shadow-sm">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-slate-300 mb-6 max-w-md mx-auto leading-relaxed">{description}</p>
      <Link href="/contact" className={buttonVariants({ variant: "secondary" })}>
        Contact Local Coordinator
      </Link>
    </div>
  );
}

// 6. ClinicGrid
export function ClinicGrid() {
  return (
    <div className="my-6 rounded-xl border bg-slate-50 p-6 text-center">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 mb-3 text-slate-500">
        <Building2 className="h-5 w-5" />
      </div>
      <h4 className="font-bold text-gray-900 text-sm mb-1">Provider Directories Coming Soon</h4>
      <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
        Verified hospital and clinic profiles in San José and Escazú will be published as they complete our review process.
      </p>
    </div>
  );
}

// Helper icons
function ClipboardIcon() {
  return (
    <svg className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}
