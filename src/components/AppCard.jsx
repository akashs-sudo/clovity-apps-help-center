import Link from "next/link";
import Image from "next/image";

export default function AppCard({ app }) {
  const isJira = app.platform.includes("Jira");

  return (
    <Link href={`/apps/${app.slug}`} className="group block h-full">
      <div className="flex flex-col h-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200">
        {/* Top color strip */}

        <div className="p-5 flex flex-col h-full">
          {/* Icon + Badge row */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
              <Image
                src={app.icon}
                alt={app.shortName}
                width={56}
                height={56}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            {app.badge && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                {app.badge}
              </span>
            )}
          </div>

          {/* Name */}
          <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
            {app.shortName}
          </h3>

          {/* Description */}
          <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2 flex-1">
            {app.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                isJira
                  ? "bg-blue-50 text-blue-700"
                  : "bg-purple-50 text-purple-700"
              }`}
            >
              {app.platform}
            </span>
            {app.installs && (
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                {app.installs.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
