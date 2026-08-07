import { ShieldAlert } from "lucide-react";

export function MedicalDisclaimer() {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 text-base text-amber-800 my-6">
      <div className="flex items-start gap-3">
        <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-amber-900 mb-2 text-lg">Medical Disclaimer</h4>
          <p className="leading-relaxed font-medium">
            The content provided on this website, including text, graphics, pricing estimates, 
            and other informational materials, is for educational and general planning purposes only. 
            It does not constitute medical advice, diagnosis, or treatment recommendations. 
            Always seek the advice of your physician or other qualified health provider with any 
            questions you may have regarding a medical condition. Never disregard professional 
            medical advice or delay in seeking it because of something you have read on this site.
          </p>
        </div>
      </div>
    </div>
  );
}
