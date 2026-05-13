import { apps } from "@/data/apps";
import { timeTrackingDocs, findArticle, getAllArticles } from "@/data/time-tracking-docs";
import { dashboardChartsDocs } from "@/data/dashboard-charts-docs";
import { reportsChartsConfluenceDocs } from "@/data/reports-charts-confluence-docs";
import { latexDiagramsConfluenceDocs } from "@/data/latex-diagrams-confluence-docs";
import DocSidebar from "@/components/DocSidebar";
import ArticleContent from "@/components/ArticleContent";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const docsMap = {
  "time-tracking-jira": timeTrackingDocs,
  "dashboard-charts-jira": dashboardChartsDocs,
  "reports-charts-confluence": reportsChartsConfluenceDocs,
  "latex-diagrams-confluence": latexDiagramsConfluenceDocs,
};

export async function generateStaticParams() {
  const params = [];
  for (const [appSlug, docs] of Object.entries(docsMap)) {
    for (const article of getAllArticles(docs)) {
      params.push({ slug: appSlug, articleSlug: article.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { slug, articleSlug } = await params;
  const docs = docsMap[slug];
  if (!docs) return {};
  const result = findArticle(docs, articleSlug);
  if (!result) return {};
  const app = apps.find((a) => a.slug === slug);
  return {
    title: `${result.article.title} — ${app?.shortName || slug} Documentation`,
    description: `${result.article.title} documentation for ${app?.shortName || slug}`,
  };
}

export default async function ArticlePage({ params }) {
  const { slug, articleSlug } = await params;
  const docs = docsMap[slug];
  if (!docs) notFound();

  const result = findArticle(docs, articleSlug);
  if (!result) notFound();

  const { article, category } = result;
  const app = apps.find((a) => a.slug === slug);

  const allArticles = getAllArticles(docs);
  const currentIndex = allArticles.findIndex((a) => a.slug === articleSlug);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      {/* App header */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-30">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          {app && (
            <div className="w-6 h-6 rounded overflow-hidden flex-shrink-0">
              <Image src={app.icon} alt={app.shortName} width={24} height={24} unoptimized className="w-full h-full object-cover" />
            </div>
          )}
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 min-w-0">
            <Link href="/" className="hover:text-gray-800 transition-colors shrink-0">Help Center</Link>
            <span className="text-gray-300">/</span>
            <Link href={`/apps/${slug}`} className="hover:text-gray-800 transition-colors shrink-0 hidden sm:block truncate max-w-[140px]">
              {app?.shortName || slug}
            </Link>
            <span className="text-gray-300 hidden sm:block">/</span>
            <span className="text-gray-800 font-medium truncate">{article.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex gap-8">
          <DocSidebar docs={docs} appSlug={slug} activeArticleSlug={articleSlug} />

          {/* Main content */}
          <div className="flex-1 min-w-0 py-8 max-w-3xl">
            <div className="mb-2">
              <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
                {category.title}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">{article.title}</h1>

            <ArticleContent content={article.content} />

            {/* Prev / Next navigation */}
            <div className="mt-12 pt-6 border-t border-gray-200 flex items-center justify-between gap-4">
              {prevArticle ? (
                <Link
                  href={`/apps/${slug}/${prevArticle.slug}`}
                  className="group flex items-center gap-2 text-sm text-gray-500 hover:text-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-400">Previous</div>
                    <div className="font-medium text-gray-700 group-hover:text-blue-700">{prevArticle.title}</div>
                  </div>
                </Link>
              ) : <div />}

              {nextArticle ? (
                <Link
                  href={`/apps/${slug}/${nextArticle.slug}`}
                  className="group flex items-center gap-2 text-sm text-gray-500 hover:text-blue-700 transition-colors text-right"
                >
                  <div>
                    <div className="text-xs text-gray-400">Next</div>
                    <div className="font-medium text-gray-700 group-hover:text-blue-700">{nextArticle.title}</div>
                  </div>
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
