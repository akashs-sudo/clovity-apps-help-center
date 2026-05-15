"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function ArticleContent({ content }) {
  return (
    <div className="prose prose-sm max-w-none
      prose-headings:font-bold prose-headings:text-gray-900
      prose-h2:text-lg prose-h2:mt-8 prose-h2:mb-3
      prose-h3:text-base prose-h3:mt-6 prose-h3:mb-2
      prose-h4:text-sm prose-h4:mt-4 prose-h4:mb-1
      prose-p:text-gray-600 prose-p:leading-relaxed prose-p:text-sm
      prose-li:text-gray-600 prose-li:text-sm
      prose-strong:text-gray-800 prose-strong:font-semibold
      prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
      prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-code:text-gray-700 prose-code:font-mono
      prose-table:text-sm prose-table:border-collapse
      prose-th:bg-gray-50 prose-th:font-semibold prose-th:text-gray-700 prose-th:text-xs prose-th:uppercase prose-th:tracking-wider
      prose-td:text-gray-600
      prose-hr:border-gray-200
    ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          iframe: ({ src, title }) => {
            const isPlaylist = src?.includes("videoseries") || src?.includes("list=");
            return (
              <div
                className="my-6 rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black"
                style={{ position: "relative", paddingTop: isPlaylist ? "62%" : "56.25%" }}
              >
                <iframe
                  src={src}
                  title={title || "Video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                />
              </div>
            );
          },
          table: ({ children }) => (
            <div className="overflow-x-auto my-4 rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-gray-50">{children}</thead>,
          tbody: ({ children }) => <tbody className="divide-y divide-gray-100 bg-white">{children}</tbody>,
          th: ({ children }) => (
            <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2.5 text-sm text-gray-600 align-top">{children}</td>
          ),
          tr: ({ children }) => <tr className="hover:bg-gray-50 transition-colors">{children}</tr>,
          h2: ({ children }) => (
            <h2 className="text-lg font-bold text-gray-900 mt-8 mb-3 pb-2 border-b border-gray-100">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-base font-bold text-gray-900 mt-6 mb-2">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-sm font-semibold text-gray-800 mt-4 mb-1">{children}</h4>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-outside ml-5 space-y-1 my-3">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-outside ml-5 space-y-1 my-3">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-sm text-gray-600 leading-relaxed">{children}</li>
          ),
          p: ({ children }) => (
            <p className="text-sm text-gray-600 leading-relaxed my-2">{children}</p>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-gray-800">{children}</strong>
          ),
          a: ({ href, children }) => (
            <a href={href} className="text-blue-600 hover:underline" target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}>
              {children}
            </a>
          ),
          code: ({ children, className }) => {
            const isBlock = className?.includes("language-");
            if (isBlock) {
              return (
                <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-4 text-xs font-mono">
                  <code>{children}</code>
                </pre>
              );
            }
            return (
              <code className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded text-xs font-mono">
                {children}
              </code>
            );
          },
          hr: () => <hr className="border-gray-200 my-6" />,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-200 pl-4 my-4 text-gray-600 italic">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
