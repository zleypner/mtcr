export * from "./content";

export type ApiResponse<T> = {
  data: T | null;
  error: string | null;
};

export type Locale = "en" | "es";

export type SupportedCountry = "US" | "CA" | "UK" | "DE" | "MX" | "CO";

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  badge?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  locale: Locale;
  twitter: string;
  ogImage: string;
}
