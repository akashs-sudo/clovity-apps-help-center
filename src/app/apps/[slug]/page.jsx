import { apps } from "@/data/apps";
import Sidebar from "@/components/Sidebar";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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

  const isJira = app.platform.includes("Jira");
  const platformColor = isJira ? "#0052CC" : "#6554C0";

  return (
    <div className="min-h-screen bg-white">
      {/* App header banner */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-600 transition-colors">
              Help Center
            </Link>
            <span>/</span>
            <span className="text-gray-600">{app.shortName}</span>
          </nav>

          <div className="flex items-start gap-5">
            {/* Icon */}
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-gray-200 shrink-0 shadow-sm">
              <Image
                src={app.icon}
                alt={app.shortName}
                width={64}
                height={64}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>

            <div className="flex-1 min-w-0">
              {/* <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-semibold text-white"
                  style={{ backgroundColor: platformColor }}
                >
                  {app.platform}
                </span>
                {app.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-medium">
                    {app.badge}
                  </span>
                )}
              </div> */}
              <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-1">
                {app.name}
              </h1>
              <p className="text-gray-500 text-sm">{app.description}</p>
            </div>

            <a
              href={app.marketplaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#0052CC" }}
            >
              Marketplace
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex gap-10">
          <Sidebar sections={app.sections} />

          <div className="flex-1 min-w-0">
            <div className="space-y-10">
              {app.sections.map((section, i) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24"
                >
                  {i > 0 && <div className="border-t border-gray-100 mb-10" />}
                  <h2 className="text-base font-bold text-gray-900 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>

            {/* Support footer */}
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
    </div>
  );
}
