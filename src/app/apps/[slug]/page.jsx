import { apps } from "@/data/apps";
import { timeTrackingDocs } from "@/data/time-tracking-docs";
import { dashboardChartsDocs } from "@/data/dashboard-charts-docs";
import { reportsChartsConfluenceDocs } from "@/data/reports-charts-confluence-docs";
import { latexDiagramsConfluenceDocs } from "@/data/latex-diagrams-confluence-docs";
import DocSidebar from "@/components/DocSidebar";
import Sidebar from "@/components/Sidebar";
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
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) return {};
  return {
    title: `${app.shortName} Documentation — Clovity Help Center`,
    description: app.description,
  };
}

export default async function AppPage({ params }) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) notFound();

  const docs = docsMap[slug];
  const isJira = app.platform.includes("Jira");

  return (
    <div className="min-h-screen bg-white">
      {/* App header */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-30">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          <div className="w-6 h-6 rounded overflow-hidden flex-shrink-0">
            <Image src={app.icon} alt={app.shortName} width={24} height={24} unoptimized className="w-full h-full object-cover" />
          </div>
          <nav className="flex items-center gap-1.5 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-800 transition-colors">Help Center</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-800 font-medium truncate">{app.shortName}</span>
          </nav>
          <div className="ml-auto">
            <a
              href={app.marketplaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#0052CC" }}
            >
              Marketplace
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {docs ? (
        /* Tempo-style docs layout */
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="flex gap-8">
            <DocSidebar docs={docs} appSlug={slug} activeArticleSlug={null} />

            {/* Overview content */}
            <div className="flex-1 min-w-0 py-10 max-w-3xl">
              {/* App hero */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shrink-0 shadow-sm">
                  <Image src={app.icon} alt={app.shortName} width={64} height={64} unoptimized className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium mb-1.5 ${isJira ? "bg-blue-50 text-blue-700" : "bg-purple-50 text-purple-700"}`}>
                    {app.platform}
                  </span>
                  <h1 className="text-2xl font-bold text-gray-900 leading-tight">{app.name}</h1>
                  <p className="text-gray-500 text-sm mt-1">{app.description}</p>
                </div>
              </div>

              {/* Category cards grid */}
              <h2 className="text-base font-semibold text-gray-700 mb-4">Documentation</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {docs.categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/apps/${slug}/${cat.articles[0].slug}`}
                    className="group block p-5 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-200 bg-white"
                  >
                    <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors mb-1.5">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {cat.articles.length} {cat.articles.length === 1 ? "article" : "articles"}
                    </p>
                    <ul className="mt-3 space-y-1">
                      {cat.articles.slice(0, 3).map((article) => (
                        <li key={article.slug} className="text-xs text-gray-500 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                          {article.title}
                        </li>
                      ))}
                      {cat.articles.length > 3 && (
                        <li className="text-xs text-blue-500 pl-2.5">+{cat.articles.length - 3} more</li>
                      )}
                    </ul>
                  </Link>
                ))}
              </div>

              {/* Support footer */}
              <div className="mt-10 p-6 rounded-xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Still need help?</p>
                  <p className="text-xs text-gray-500 mt-0.5">Contact our Atlassian-certified support team</p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <a href="mailto:support@clovity.com" className="px-4 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Email Support
                  </a>
                  <Link href={`/apps/${slug}/contact-support`} className="px-4 py-2 text-xs font-semibold text-white rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: "#0052CC" }}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Legacy sections layout for other apps */
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex gap-10">
            <Sidebar sections={app.sections} />
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-5 mb-8">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-gray-200 shrink-0 shadow-sm">
                  <Image src={app.icon} alt={app.shortName} width={64} height={64} unoptimized className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-1">{app.name}</h1>
                  <p className="text-gray-500 text-sm">{app.description}</p>
                </div>
              </div>

              <div className="space-y-10">
                {app.sections.map((section, i) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24">
                    {i > 0 && <div className="border-t border-gray-100 mb-10" />}
                    <h2 className="text-base font-bold text-gray-900 mb-3">{section.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-sm">{section.content}</p>
                  </section>
                ))}
              </div>

              <div className="mt-16 p-6 rounded-xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Still need help?</p>
                  <p className="text-xs text-gray-500 mt-0.5">Contact our support team directly</p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <a href="mailto:developers@clovity.com" className="px-4 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Email Support
                  </a>
                  <a href="https://clovity.com/contact" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-xs font-semibold text-white rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: "#0052CC" }}>
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
