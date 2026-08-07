import fs from "fs";
import path from "path";

export interface Frontmatter {
  title: string;
  description: string;
  slug: string;
  category?: string;
  specialty?: string;
  country?: string;
  status?: string;
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
  medicalReviewer?: string;
  priceRange?: {
    min: number;
    max: number;
    currency: string;
  };
  savingsVsUSA?: string;
  recoveryTime?: string;
  hospitalStay?: string;
  procedureDuration?: string;
  relatedTreatments?: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface ParsedMDX {
  frontmatter: Frontmatter;
  content: string;
}

// Simple frontmatter and markdown parser
export function parseMDXFile(absolutePath: string): ParsedMDX {
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`File not found: ${absolutePath}`);
  }

  const raw = fs.readFileSync(absolutePath, "utf-8");
  const parts = raw.split("---");
  
  if (parts.length < 3) {
    return {
      frontmatter: {
        title: path.basename(absolutePath, ".mdx"),
        description: "",
        slug: path.basename(absolutePath, ".mdx"),
      },
      content: raw,
    };
  }

  const yamlStr = parts[1];
  const content = parts.slice(2).join("---").trim();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const frontmatter: any = {};

  const lines = yamlStr.split("\n");
  let inPriceRange = false;
  let inList = false;
  let listKey = "";

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Check price range block
    if (trimmed.startsWith("priceRange:")) {
      inPriceRange = true;
      frontmatter.priceRange = {};
      continue;
    }

    if (inPriceRange && (trimmed.startsWith("min:") || trimmed.startsWith("max:") || trimmed.startsWith("currency:"))) {
      const parts = trimmed.split(":");
      const k = parts[0].trim();
      const v = parts.slice(1).join(":").trim();
      frontmatter.priceRange[k] = k === "currency" ? v.replace(/['"]/g, "") : Number(v);
      continue;
    }

    if (inPriceRange && !trimmed.startsWith(" ") && !trimmed.startsWith("\t")) {
      inPriceRange = false;
    }

    // Check lists
    if (trimmed.endsWith(":")) {
      inList = true;
      listKey = trimmed.slice(0, -1).trim();
      frontmatter[listKey] = [];
      continue;
    }

    if (inList && trimmed.startsWith("-")) {
      const val = trimmed.slice(1).trim().replace(/['"]/g, "");
      frontmatter[listKey].push(val);
      continue;
    }

    if (inList && !trimmed.startsWith("-")) {
      inList = false;
    }

    if (!inPriceRange && !inList && trimmed.includes(":")) {
      const colonIdx = trimmed.indexOf(":");
      const k = trimmed.slice(0, colonIdx).trim();
      const v = trimmed.slice(colonIdx + 1).trim();
      
      // Clean quotes
      const cleanVal = v.replace(/^['"]|['"]$/g, "");
      
      if (cleanVal === "true") frontmatter[k] = true;
      else if (cleanVal === "false") frontmatter[k] = false;
      else if (!isNaN(Number(cleanVal)) && cleanVal !== "") frontmatter[k] = Number(cleanVal);
      else frontmatter[k] = cleanVal;
    }
  }

  return {
    frontmatter: frontmatter as Frontmatter,
    content,
  };
}

// Scans content directory to match treatments
export function getTreatmentBySlug(category: string, slug: string): ParsedMDX | null {
  const categoryPath = path.join(process.cwd(), "content", "treatments", category);
  if (!fs.existsSync(categoryPath)) return null;

  const files = fs.readdirSync(categoryPath);
  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;
    const fullPath = path.join(categoryPath, file);
    try {
      const parsed = parseMDXFile(fullPath);
      // Match either precise slug, slug without suffix, or filename matching slug
      if (
        parsed.frontmatter.slug === slug ||
        parsed.frontmatter.slug === `${slug}-costa-rica` ||
        file.replace(".mdx", "") === slug ||
        file.replace(".mdx", "") === `${slug}-costa-rica`
      ) {
        return parsed;
      }
    } catch (e) {
      console.error("Error parsing file", fullPath, e);
    }
  }

  return null;
}

// Scans content/cities directory to match city
export function getCityBySlug(slug: string): ParsedMDX | null {
  const citiesPath = path.join(process.cwd(), "content", "cities");
  if (!fs.existsSync(citiesPath)) return null;

  const files = fs.readdirSync(citiesPath);
  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;
    const fullPath = path.join(citiesPath, file);
    try {
      const parsed = parseMDXFile(fullPath);
      if (parsed.frontmatter.slug === slug || file.replace(".mdx", "") === slug || file.replace(".mdx", "") === `${slug}-costa-rica`) {
        return parsed;
      }
    } catch (e) {
      console.error(e);
    }
  }
  return null;
}

// Scans content/blog directory to match blog article
export function getBlogArticleBySlug(slug: string): ParsedMDX | null {
  const blogPath = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(blogPath)) return null;

  const files = fs.readdirSync(blogPath);
  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;
    const fullPath = path.join(blogPath, file);
    try {
      const parsed = parseMDXFile(fullPath);
      if (parsed.frontmatter.slug === slug || file.replace(".mdx", "") === slug) {
        return parsed;
      }
    } catch (e) {
      console.error(e);
    }
  }
  return null;
}

// Lists all blog articles sorted by date (newest first)
export function getAllBlogArticles(): ParsedMDX[] {
  const blogPath = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(blogPath)) return [];

  const files = fs.readdirSync(blogPath);
  const articles: ParsedMDX[] = [];
  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;
    try {
      articles.push(parseMDXFile(path.join(blogPath, file)));
    } catch (e) {
      console.error(e);
    }
  }

  // Sort by publishedAt or updatedAt, newest first
  return articles.sort((a, b) => {
    const dateA = a.frontmatter.publishedAt || a.frontmatter.updatedAt || "";
    const dateB = b.frontmatter.publishedAt || b.frontmatter.updatedAt || "";
    return dateB.localeCompare(dateA);
  });
}

// Get unique categories from all blog articles
export function getBlogCategories(): string[] {
  const articles = getAllBlogArticles();
  const categories = new Set<string>();
  for (const article of articles) {
    if (article.frontmatter.category) {
      categories.add(article.frontmatter.category);
    }
  }
  return Array.from(categories).sort();
}

// Calculate reading time in minutes
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}
