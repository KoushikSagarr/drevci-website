import React from 'react';
import Link from 'next/link';

const posts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: React.ReactNode;
}> = {
  "building-drev-ci-in-go": {
    title: "Building Drev CI in Go: Why we chose a single binary architecture",
    date: "May 6, 2026",
    readTime: "8 min read",
    tags: ["Engineering", "Go"],
    content: (
      <>
        <p className="text-[16px] text-drev-text-secondary leading-[1.8] mb-6">
          When we started building Drev CI, the landscape of CI/CD was dominated by complex, multi-service architectures. 
          Jenkins had its plugin hell, GitHub Actions was a black box, and self-hosting anything usually meant managing a fleet of containers just to get a dashboard online.
        </p>

        <h2 className="text-[22px] font-semibold text-drev-text mt-10 mb-4">The Complexity Trap</h2>
        <p className="text-[16px] text-drev-text-secondary leading-[1.8] mb-6">
          Many modern tools are built as a collection of microservices. While this sounds good on paper for massive scale, it introduces significant friction for teams that just want to ship code. 
          You need a database, a message queue, a storage layer, and multiple API services just to run a simple <code className="text-drev-accent font-mono text-[0.9em]">go test</code>.
        </p>

        <blockquote className="border-l-2 border-drev-accent pl-4 text-drev-text-muted italic mb-6">
          &ldquo;Drev CI was built for the engineer who wants to spend time on their product, not their infrastructure.&rdquo;
        </blockquote>

        <h2 className="text-[22px] font-semibold text-drev-text mt-10 mb-4">Why Go?</h2>
        <p className="text-[16px] text-drev-text-secondary leading-[1.8] mb-6">
          Go&apos;s ability to compile into a single static binary was the primary driver for our architectural choice. 
          We can bundle the HTTP server, the job scheduler, and the SQLite-based state manager into one 15MB file.
        </p>

        <pre className="code-block p-6 text-drev-text mb-6">
{`func main() {
    // Start the server, scheduler, and workers 
    // all in one process.
    app := drev.New()
    if err := app.Start(); err != nil {
        log.Fatal(err)
    }
}`}
        </pre>

        <p className="text-[16px] text-drev-text-secondary leading-[1.8] mb-6">
          This means you can deploy Drev CI with a single command: <code className="text-drev-accent font-mono text-[0.9em]">docker run -p 4000:4000 drevci/drev</code>. 
          No migrations, no complex networking, no external dependencies.
        </p>

        <h2 className="text-[22px] font-semibold text-drev-text mt-10 mb-4">Conclusion</h2>
        <p className="text-[16px] text-drev-text-secondary leading-[1.8] mb-6">
          By choosing a single binary architecture in Go, we&apos;ve reduced the operational overhead of CI/CD to nearly zero. 
          It&apos;s fast, it&apos;s reliable, and it stays out of your way.
        </p>
      </>
    ),
  },
  "real-time-log-streaming-with-sse": {
    title: "Real-time log streaming with Server-Sent Events",
    date: "May 4, 2026",
    readTime: "5 min read",
    tags: ["Technical", "Frontend"],
    content: (
      <>
        <p className="text-[16px] text-drev-text-secondary leading-[1.8] mb-6">
          One of the most frustrating experiences in CI/CD is waiting for logs. You push a commit, switch to the dashboard, and stare at a blank screen. 
          When logs finally appear, they arrive as a massive dump — the build already finished 30 seconds ago.
        </p>

        <h2 className="text-[22px] font-semibold text-drev-text mt-10 mb-4">Why not WebSockets?</h2>
        <p className="text-[16px] text-drev-text-secondary leading-[1.8] mb-6">
          WebSockets are great for bidirectional communication, but log streaming is inherently unidirectional. SSE (Server-Sent Events) 
          gives us exactly what we need: a persistent HTTP connection where the server pushes data to the client. It&apos;s simpler, 
          works through proxies, and auto-reconnects on failure.
        </p>

        <pre className="code-block p-6 text-drev-text mb-6">
{`// Server-side: stream logs as they arrive
func streamLogs(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "text/event-stream")
    flusher := w.(http.Flusher)
    
    for line := range logChannel {
        fmt.Fprintf(w, "data: %s\\n\\n", line)
        flusher.Flush()
    }
}`}
        </pre>

        <p className="text-[16px] text-drev-text-secondary leading-[1.8] mb-6">
          The result is a dashboard that feels alive. Every character appears the instant it&apos;s written to stdout, 
          giving developers the confidence that their build is progressing in real time.
        </p>
      </>
    ),
  },
  "docker-native-isolation": {
    title: "Docker-native isolation for reproducible pipelines",
    date: "May 1, 2026",
    readTime: "6 min read",
    tags: ["Product", "DevOps"],
    content: (
      <>
        <p className="text-[16px] text-drev-text-secondary leading-[1.8] mb-6">
          Reproducibility is the cornerstone of reliable CI/CD. If a build works on Tuesday but fails on Wednesday with the same code, 
          something is fundamentally broken. Drev CI solves this by running every pipeline step in a fresh Docker container.
        </p>

        <h2 className="text-[22px] font-semibold text-drev-text mt-10 mb-4">Zero host pollution</h2>
        <p className="text-[16px] text-drev-text-secondary leading-[1.8] mb-6">
          Unlike traditional CI systems that share a host filesystem between jobs, Drev CI spins up a new container for each step. 
          This means no leftover artifacts, no conflicting dependencies, and no mysterious cache corruption.
        </p>

        <pre className="code-block p-6 text-drev-text mb-6">
{`pipeline:
  jobs:
    test:
      image: golang:1.22-alpine
      steps:
        - run: go test ./...
    
    lint:
      image: golangci/golangci-lint:latest
      steps:
        - run: golangci-lint run`}
        </pre>

        <p className="text-[16px] text-drev-text-secondary leading-[1.8] mb-6">
          Each job gets its own container with the exact image you specify. Your test job uses 
          <code className="text-drev-accent font-mono text-[0.9em]"> golang:1.22-alpine</code>, your lint job 
          uses <code className="text-drev-accent font-mono text-[0.9em]">golangci-lint</code> — no conflicts, ever.
        </p>
      </>
    ),
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    return (
      <div className="bg-drev-bg min-h-screen pt-24 pb-32 px-4 flex flex-col items-center justify-center">
        <p className="text-[16px] text-drev-text-muted">This post doesn&apos;t exist yet.</p>
        <Link href="/blog" className="text-[13px] text-drev-accent mt-4 hover:text-drev-accent-hover transition-colors">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-drev-bg min-h-screen pt-24 pb-32 px-4">
      <article className="max-w-[680px] mx-auto">
        <Link href="/blog" className="text-[13px] text-drev-text-muted hover:text-drev-text transition-colors">← Blog</Link>
        
        <div className="flex gap-2 mt-8 mb-4">
          {post.tags.map((tag, j) => (
            <span key={j} className="bg-drev-surface border border-drev-border text-[11px] text-drev-text-secondary px-2.5 py-0.5 rounded-full uppercase tracking-wider font-medium">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-[32px] md:text-[36px] font-bold tracking-tighter text-drev-text leading-[1.2] mb-4">
          {post.title}
        </h1>
        
        <div className="text-[13px] text-drev-text-muted mb-12">
          {post.date} · {post.readTime}
        </div>

        <div className="prose prose-invert max-w-none">
          {post.content}
        </div>

        <div className="mt-16 pt-8 border-t border-drev-border/30">
          <Link href="/blog" className="text-[14px] text-drev-accent hover:text-drev-accent-hover transition-colors">← Back to all posts</Link>
        </div>
      </article>
    </div>
  );
}
