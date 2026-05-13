import { apps } from "@/data/apps";
import { timeTrackingDocs } from "@/data/time-tracking-docs";
import { dashboardChartsDocs } from "@/data/dashboard-charts-docs";
import { reportsChartsConfluenceDocs } from "@/data/reports-charts-confluence-docs";
import { latexDiagramsConfluenceDocs } from "@/data/latex-diagrams-confluence-docs";
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

const ACCENT_COLORS = [
  { bar: "#3B82F6", iconBg: "#EFF6FF", iconText: "#1D4ED8" },
  { bar: "#6366F1", iconBg: "#EEF2FF", iconText: "#4338CA" },
  { bar: "#8B5CF6", iconBg: "#F5F3FF", iconText: "#6D28D9" },
  { bar: "#10B981", iconBg: "#ECFDF5", iconText: "#065F46" },
  { bar: "#F59E0B", iconBg: "#FFFBEB", iconText: "#92400E" },
  { bar: "#EF4444", iconBg: "#FEF2F2", iconText: "#991B1B" },
  { bar: "#06B6D4", iconBg: "#ECFEFF", iconText: "#155E75" },
  { bar: "#14B8A6", iconBg: "#F0FDFA", iconText: "#134E4A" },
];

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
      {/* App sub-header breadcrumb */}
      <div className=" top-[80.8px] border-b border-gray-200 bg-white sticky top-0 z-30">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          <div className="w-6 h-6 rounded overflow-hidden flex-shrink-0">
            <Image
              src={app.icon}
              alt={app.shortName}
              width={24}
              height={24}
              unoptimized
              className="w-full h-full object-cover"
            />
          </div>
          <nav className="flex items-center gap-1.5 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-800 transition-colors">
              Help Center
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-800 font-medium truncate">
              {app.shortName}
            </span>
          </nav>
        </div>
      </div>

      {docs ? (
        <div>
          {/* Hero section — full width, no sidebar */}
          <div
            className="border-b border-gray-100"
            style={{
              background: isJira
                ? "linear-gradient(135deg, #f0f5ff 0%, #ffffff 50%, #f5f3ff 100%)"
                : "linear-gradient(135deg, #faf5ff 0%, #ffffff 50%, #f0fdf4 100%)",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-18">
              <div className="flex flex-col sm:flex-row items-start gap-7">
                <div className="w-20 h-20 rounded-xl overflow-hidden  shadow-xl shrink-0">
                  <Image
                    src={app.icon}
                    alt={app.shortName}
                    width={76}
                    height={76}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-3">
                    {app.name}
                  </h1>
                  <p className="text-gray-500 text-base mb-6 max-w-2xl leading-relaxed">
                    {app.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={app.marketplaceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-md hover:opacity-90 transition-opacity shadow-md"
                      style={{ backgroundColor: "#0052CC" }}
                    >
                      View on Marketplace
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <span className="text-xs text-gray-400 flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {app.rating}.0 · {app.installs?.toLocaleString()}+
                      installs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation categories grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <div className="flex items-center justify-between mb-7">
              <h2 className="text-xl font-bold text-gray-900">Documentation</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {docs.categories.map((cat, idx) => {
                const color = ACCENT_COLORS[idx % ACCENT_COLORS.length];
                return (
                  <Link
                    key={cat.id}
                    href={`/apps/${slug}/${cat.articles[0].slug}`}
                    className="group block rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 bg-white overflow-hidden"
                  >
                    <div className="p-5">
                      {/* Icon */}
                      <div
                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4"
                        style={{ backgroundColor: color.iconBg }}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke={color.bar}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>

                      <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors mb-1 leading-snug">
                        {cat.title}
                      </h3>
                      <p
                        className="text-xs font-medium mb-3"
                        style={{ color: color.bar }}
                      >
                        {cat.articles.length}{" "}
                        {cat.articles.length === 1 ? "article" : "articles"}
                      </p>

                      <ul className="space-y-1.5">
                        {cat.articles.slice(0, 3).map((article) => (
                          <li
                            key={article.slug}
                            className="text-xs text-gray-500 flex items-center gap-2 leading-snug"
                          >
                            <span
                              className="w-1 h-1 rounded-full shrink-0"
                              style={{ backgroundColor: color.bar }}
                            />
                            {article.title}
                          </li>
                        ))}
                        {cat.articles.length > 3 && (
                          <li
                            className="text-xs pl-3"
                            style={{ color: color.bar }}
                          >
                            +{cat.articles.length - 3} more
                          </li>
                        )}
                      </ul>

                      <div
                        className="mt-4 flex items-center gap-1 text-xs font-medium group-hover:gap-2 transition-all"
                        style={{ color: color.bar }}
                      >
                        View all
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Support footer */}
            <div className="mt-12 p-6 rounded-2xl border border-gray-200 bg-linear-to-r from-slate-50 to-blue-50/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  Still need help?
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Contact our Atlassian-certified support team
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <a
                  href="mailto:support@clovity.com"
                  className="px-4 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Email Support
                </a>
                <Link
                  href={`/apps/${slug}/contact-support`}
                  className="px-4 py-2 text-xs font-semibold text-white rounded-xl hover:opacity-90 transition-opacity shadow-sm"
                  style={{ backgroundColor: "#0052CC" }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Legacy sections layout for apps without structured docs */
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 py-8">
          <div className="flex gap-10">
            <Sidebar sections={app.sections} />
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-5 mb-8">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-gray-200 shrink-0 shadow-sm">
                  <Image
                    src={app.icon}
                    alt={app.shortName}
                    width={64}
                    height={64}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-1">
                    {app.name}
                  </h1>
                  <p className="text-gray-500 text-sm">{app.description}</p>
                </div>
              </div>

              <div className="space-y-10">
                {app.sections.map((section, i) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24"
                  >
                    {i > 0 && (
                      <div className="border-t border-gray-100 mb-10" />
                    )}
                    <h2 className="text-base font-bold text-gray-900 mb-3">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {section.content}
                    </p>
                  </section>
                ))}
              </div>

              <div className="mt-16 p-6 rounded-xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    Still need help?
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Contact our support team directly
                  </p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <a
                    href="mailto:developers@clovity.com"
                    className="px-4 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Email Support
                  </a>
                  <a
                    href="https://clovity.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#0052CC" }}
                  >
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
