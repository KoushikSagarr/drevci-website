import React from 'react';

export default function DocsPage() {
  const sections = [
    {
      title: "GETTING STARTED",
      links: ["Installation", "Quick start", "Configuration"]
    },
    {
      title: "PIPELINES",
      links: ["Syntax reference", "Job dependencies", "Environment variables"]
    },
    {
      title: "INTEGRATIONS",
      links: ["GitHub webhooks", "Slack", "Discord"]
    },
    {
      title: "CLI",
      links: ["Commands", "Flags", "Examples"]
    }
  ];

  return (
    <div className="bg-drev-bg min-h-screen flex flex-col md:flex-row">
      
      {/* Sidebar */}
      <aside className="w-full md:w-[240px] bg-drev-surface/30 border-r border-drev-border/50 p-6 md:sticky md:top-14 md:h-[calc(100vh-56px)] overflow-y-auto shrink-0">
        <div className="space-y-8">
          {sections.map((section, i) => (
            <div key={i}>
              <h5 className="text-[11px] uppercase tracking-widest text-drev-text-muted font-bold mb-3">{section.title}</h5>
              <ul className="space-y-1">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={`#${link.toLowerCase().replace(/ /g, '-')}`} 
                      className={`block px-3 py-2 text-[13px] rounded-md transition-colors ${i === 0 && j === 1 ? 'text-drev-text bg-drev-surface border border-drev-border/50' : 'text-drev-text-muted hover:text-drev-text hover:bg-drev-surface/50'}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-8 md:p-12 lg:p-16 max-w-[900px]">
        <div className="max-w-[720px]">
          <h1 className="text-[30px] font-bold text-white mb-8">Quick start</h1>
          
          <p className="text-[16px] text-drev-text-secondary leading-[1.8] mb-8">
            Drev CI is a single binary that handles everything from job scheduling to log streaming. 
            This guide will help you get up and running in under 5 minutes.
          </p>

          <section id="installation" className="mb-12">
            <h2 className="text-[22px] font-semibold text-white border-b border-drev-border/30 pb-3 mb-6">Installation</h2>
            <p className="text-[16px] text-drev-text-secondary leading-[1.8] mb-4">
              Download the binary for your platform or use our Docker image.
            </p>
            <div className="code-block p-6 text-drev-text mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] text-drev-text-muted font-mono uppercase">bash</span>
              </div>
              <pre className="text-[13px] leading-[1.7]">{`# Install via Docker
docker run -p 4000:4000 drevci/drev

# Or download the binary
curl -fsSL https://drevci.com/install.sh | sh
./drev start`}</pre>
            </div>
          </section>

          <section id="quick-start" className="mb-12">
            <h2 className="text-[22px] font-semibold text-white border-b border-drev-border/30 pb-3 mb-6">Quick start</h2>
            <p className="text-[16px] text-drev-text-secondary leading-[1.8] mb-4">
              Once installed, open <code className="text-drev-accent font-mono text-[0.9em]">http://localhost:4000</code> in your browser to access the dashboard.
              Create a new project and follow the setup wizard to connect your GitHub repository.
            </p>
          </section>

          <section id="configuration" className="mb-12">
            <h2 className="text-[22px] font-semibold text-white border-b border-drev-border/30 pb-3 mb-6">Configuration</h2>
            <p className="text-[16px] text-drev-text-secondary leading-[1.8] mb-4">
              Add a <code className="text-drev-accent font-mono text-[0.9em]">.drev.yml</code> file to the root of your project to define your pipeline.
            </p>
            <div className="code-block p-6 text-drev-text mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] text-drev-text-muted font-mono uppercase">yaml</span>
              </div>
              <pre className="text-[13px] leading-[1.7]">{`pipeline:
  name: ci
  on: [push]
  jobs:
    test:
      image: golang:1.22-alpine
      steps:
        - run: go test ./...
    build:
      image: golang:1.22-alpine
      needs: [test]
      steps:
        - run: go build -o dist/app .`}</pre>
            </div>
          </section>

          <section id="github-webhooks" className="mb-12">
            <h2 className="text-[22px] font-semibold text-white border-b border-drev-border/30 pb-3 mb-6">GitHub webhooks</h2>
            <div className="text-[16px] text-drev-text-secondary leading-[1.8] mb-4 space-y-3">
              <div className="flex gap-3">
                <span className="text-drev-accent font-bold shrink-0">1.</span>
                <span>Open your project in the Drev dashboard.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-drev-accent font-bold shrink-0">2.</span>
                <span>Copy the Webhook URL from the project settings.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-drev-accent font-bold shrink-0">3.</span>
                <span>Go to your GitHub repository Settings → Webhooks.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-drev-accent font-bold shrink-0">4.</span>
                <span>Paste the URL and set Content Type to <code className="text-drev-accent font-mono text-[0.9em]">application/json</code>.</span>
              </div>
            </div>
          </section>

          <section id="commands" className="mb-12">
            <h2 className="text-[22px] font-semibold text-white border-b border-drev-border/30 pb-3 mb-6">CLI Commands</h2>
            <div className="space-y-6">
              <div className="bg-drev-surface/30 border border-drev-border/30 rounded-lg p-5">
                <h3 className="text-[15px] font-mono font-semibold text-drev-accent mb-2">drev start</h3>
                <p className="text-[14px] text-drev-text-secondary">Starts the Drev CI server on port 4000.</p>
              </div>
              <div className="bg-drev-surface/30 border border-drev-border/30 rounded-lg p-5">
                <h3 className="text-[15px] font-mono font-semibold text-drev-accent mb-2">drev worker</h3>
                <p className="text-[14px] text-drev-text-secondary">Starts a standalone worker agent.</p>
              </div>
              <div className="bg-drev-surface/30 border border-drev-border/30 rounded-lg p-5">
                <h3 className="text-[15px] font-mono font-semibold text-drev-accent mb-2">drev pipeline run</h3>
                <p className="text-[14px] text-drev-text-secondary">Manually triggers a pipeline run from the CLI.</p>
              </div>
              <div className="bg-drev-surface/30 border border-drev-border/30 rounded-lg p-5">
                <h3 className="text-[15px] font-mono font-semibold text-drev-accent mb-2">drev logs &lt;pipeline-id&gt;</h3>
                <p className="text-[14px] text-drev-text-secondary">Streams logs for a specific pipeline run.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
