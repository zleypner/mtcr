import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface GenerateMetadataParams {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}

export function generateMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}: GenerateMetadataParams): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords: [...siteConfig.keywords],
    authors: [...siteConfig.authors],
    creator: siteConfig.creator,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${siteConfig.url}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: siteConfig.locale,
      type,
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.startsWith("http") ? ogImage : `${siteConfig.url}${ogImage}`],
      creator: siteConfig.twitter,
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function generateArticleMetadata({
  title,
  description,
  path,
  image,
  publishedTime,
  modifiedTime,
  authors,
}: Omit<GenerateMetadataParams, "type"> & {
  publishedTime: string;
  modifiedTime?: string;
  authors?: string[];
}): Metadata {
  return generateMetadata({
    title,
    description,
    path,
    image,
    type: "article",
    publishedTime,
    modifiedTime,
    authors,
  });
}
