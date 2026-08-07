import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "@/components/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Always prepend Home to items for full hierarchy
  const allItems = [{ label: "Home", href: "/" }, ...items];
  const schemaData = generateBreadcrumbSchema(items);

  return (
    <>
      <JsonLd data={schemaData} />
      <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 text-sm text-muted-foreground py-4">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <div key={item.href} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 mx-1 shrink-0 text-slate-300" />}
              {isLast ? (
                <span className="font-semibold text-foreground truncate max-w-[200px]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center hover:text-primary transition-colors font-medium"
                >
                  {index === 0 && <Home className="h-3.5 w-3.5 mr-1" />}
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
