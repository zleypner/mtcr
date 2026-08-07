"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("United States");
  const [treatment, setTreatment] = useState("");
  const [destination, setDestination] = useState("Costa Rica");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) {
      // Quietly reject spambots
      setStatus("success");
      return;
    }

    if (!name || !email || !message || !consent) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields and accept the privacy policy.");
      return;
    }

    setStatus("loading");
    try {
      // Simulate API call for lead capturing
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      // Reset form
      setName("");
      setEmail("");
      setTreatment("");
      setMessage("");
      setConsent(false);
    } catch (err) {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm">
      {status === "success" ? (
        <div className="text-center py-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Thank you for reaching out. An editorial coordinator or support assistant 
            will review your inquiry and get back to you shortly.
          </p>
          <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-blue-50/50 rounded-xl border border-blue-100 p-4 text-xs text-blue-800">
            <p className="font-semibold mb-1">Important Privacy Notice:</p>
            <p>
              Please do NOT transmit confidential personal health records (PHI), clinical history, 
              or diagnostic images through this general inquiry form. We maintain strict compliance 
              and will guide you on secure transmission channels during our initial response.
            </p>
          </div>

          {/* Honeypot Field */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_url">Do not fill this out if you are human</label>
            <input
              type="text"
              id="website_url"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <label htmlFor="country" className="block text-sm font-semibold text-gray-900 mb-1.5">
                Your Country
              </label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none bg-white"
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="treatment" className="block text-sm font-semibold text-gray-900 mb-1.5">
                Treatment of Interest
              </label>
              <select
                id="treatment"
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none bg-white"
              >
                <option value="">Select Treatment...</option>
                <option value="dental">Dental Implants / Restoration</option>
                <option value="cosmetic">Cosmetic Surgery</option>
                <option value="orthopedic">Orthopedic Joint Surgery</option>
                <option value="cardiac">Cardiac Evaluation / Care</option>
                <option value="bariatric">Weight Loss Surgery</option>
                <option value="fertility">Fertility Treatment</option>
                <option value="ophthalmology">Ophthalmology / LASIK</option>
                <option value="wellness">Wellness & Rehabilitation</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>

            <div>
              <label htmlFor="destination" className="block text-sm font-semibold text-gray-900 mb-1.5">
                Preferred Destination
              </label>
              <select
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none bg-white"
              >
                <option value="Costa Rica">Costa Rica (San José / Escazú)</option>
                <option value="Mexico">Mexico (Coming Soon)</option>
                <option value="Colombia">Colombia (Coming Soon)</option>
                <option value="Panama">Panama (Coming Soon)</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-1.5">
              Message / Inquiry Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your questions about logistics, planning, or credentials in Costa Rica..."
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>

          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="consent"
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
            </div>
            <div className="ml-3 text-xs leading-6 text-gray-600">
              <label htmlFor="consent" className="font-medium text-gray-900">
                Privacy Consent <span className="text-red-500">*</span>
              </label>
              <p>
                I agree to the{" "}
                <a href="/privacy" className="underline text-primary">
                  Privacy Policy
                </a>{" "}
                and consent to having my query details processed for general inquiries.
              </p>
            </div>
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
              <AlertCircle className="h-5 w-5 text-red-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
            {status === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Inquiry...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Request
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
