import React from 'react';
import Link from 'next/link';

export default function BlogIndex() {
  const posts = [
    {
      slug: "building-drev-ci-in-go",
      title: "Building Drev CI in Go: Why we chose a single binary architecture",
      excerpt: "When we started building Drev CI, we knew we wanted a system that was easy to deploy and maintain. Here's why Go was the perfect choice.",
      tags: ["Engineering", "Go"],
      date: "May 6, 2026",
      readTime: "8 min read"
    },
    {
      slug: "real-time-log-streaming-with-sse",
      title: "Real-time log streaming with Server-Sent Events",
      excerpt: "Streaming logs at scale is hard. We explore how we use SSE to provide character-by-character updates to your dashboard.",
      tags: ["Technical", "Frontend"],
      date: "May 4, 2026",
      readTime: "5 min read"
    },
    {
      slug: "docker-native-isolation",
      title: "Docker-native isolation for reproducible pipelines",
      excerpt: "How Drev CI leverages Docker to ensure that every job runs in a clean, isolated environment every single time.",
      tags: ["Product", "DevOps"],
      date: "May 1, 2026",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="bg-drev-bg min-h-screen pt-24 pb-32 px-4">
      <div className="max-w-[720px] mx-auto">
        <h1 className="text-[36px] md:text-[48px] font-bold text-white mb-4">Blog</h1>
        <p className="text-[18px] text-drev-text-secondary mb-16">Engineering notes from the team building Drev CI.</p>

        <div className="space-y-0">
          {posts.map((post, i) => (
            <div key={i} className="border-b border-drev-border/30 py-10 first:pt-0">
              <div className="flex gap-2 mb-4">
                {post.tags.map((tag, j) => (
                  <span key={j} className="bg-drev-surface border border-drev-border text-[11px] text-drev-text-secondary px-2.5 py-0.5 rounded-full uppercase tracking-wider font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-[20px] font-medium text-drev-text group-hover:text-drev-accent transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-[14px] text-drev-text-secondary leading-[1.7] line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="text-[12px] text-drev-text-muted">
                  {post.date} · {post.readTime}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
