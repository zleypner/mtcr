import type { NavigationItem } from "@/types";

export const mainNavigation: NavigationItem[] = [
  {
    label: "Treatments",
    href: "/treatments",
    children: [
      { label: "Dental", href: "/treatments/dental" },
      { label: "Cosmetic Surgery", href: "/treatments/cosmetic" },
      { label: "Orthopedic", href: "/treatments/orthopedic" },
      { label: "Cardiac", href: "/treatments/cardiac" },
      { label: "Bariatric", href: "/treatments/bariatric" },
      { label: "Fertility", href: "/treatments/fertility" },
      { label: "All Treatments", href: "/treatments" },
    ],
  },
  {
    label: "Providers",
    href: "/hospitals",
    children: [
      { label: "Hospitals", href: "/hospitals" },
      { label: "Clinics", href: "/clinics" },
      { label: "Doctors", href: "/doctors" },
    ],
  },
  {
    label: "Guides",
    href: "/guides",
    children: [
      { label: "Getting Started", href: "/guides/getting-started" },
      { label: "Planning Your Trip", href: "/guides/planning" },
      { label: "Travel Guide", href: "/guides/travel" },
      { label: "Recovery", href: "/guides/recovery" },
    ],
  },
  {
    label: "Costs",
    href: "/costs",
  },
  {
    label: "Patient Stories",
    href: "/patient-stories",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export const footerNavigation = {
  treatments: [
    { label: "Dental Tourism", href: "/treatments/dental" },
    { label: "Plastic Surgery", href: "/treatments/cosmetic" },
    { label: "Orthopedic Surgery", href: "/treatments/orthopedic" },
    { label: "Cardiac Care", href: "/treatments/cardiac" },
    { label: "Weight Loss Surgery", href: "/treatments/bariatric" },
    { label: "Fertility Treatments", href: "/treatments/fertility" },
  ],
  providers: [
    { label: "Hospitals", href: "/hospitals" },
    { label: "Clinics", href: "/clinics" },
    { label: "Doctors", href: "/doctors" },
    { label: "San José", href: "/cities/san-jose" },
    { label: "Escazú", href: "/cities/escazu" },
  ],
  resources: [
    { label: "Medical Tourism Guide", href: "/guides/getting-started" },
    { label: "Cost Calculator", href: "/costs" },
    { label: "Insurance Guide", href: "/insurance" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
