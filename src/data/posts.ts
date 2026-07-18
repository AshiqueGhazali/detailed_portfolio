export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string; // Markdown format content
}

export const postsData: Post[] = [
  {
    slug: "optimizing-nextjs-15-performance",
    title: "Optimizing Next.js 15 App Router Performance for Enterprise SaaS",
    excerpt: "An in-depth look into using React Server Components, Streaming SSR, and Next.js caching layers to achieve sub-second Page Load times.",
    date: "June 24, 2026",
    category: "Next.js & Performance",
    readTime: "6 min read",
    content: `
# Optimizing Next.js 15 App Router Performance for Enterprise SaaS

In modern SaaS architecture, load times directly correlate with user conversion rates. Building responsive dashboards that fetch multi-source metrics requires careful optimization. Next.js 15 offers a strong toolset for these exact challenges.

## 1. React Server Components (RSC) by Default

By utilizing React Server Components, we keep massive data-fetching packages (like database ORMs and markdown parsers) on the server, resulting in a zero-kb hydration size for the client.

\`\`\`tsx
// This component loads data on the server with zero client-side hydration cost
import { fetchMetrics } from "@/lib/db";

export default async function DashboardStats() {
  const metrics = await fetchMetrics();
  return (
    <div className="grid grid-cols-3 gap-4">
      {metrics.map(m => (
        <StatCard key={m.id} value={m.value} label={m.label} />
      ))}
    </div>
  );
}
\`\`\`

## 2. Dynamic Streaming via Suspense Boundaries

Rather than waiting for the entire page to resolve (which causes bad First Contentful Paint times), use Next.js Streaming with React Suspense to render static shells instantly and stream dynamic components as they finish fetching:

\`\`\`tsx
import { Suspense } from "react";
import StatsSkeleton from "@/components/ui/skeletons";

export default function Page() {
  return (
    <main className="p-8">
      <h1>Performance Dashboard</h1>
      <Suspense fallback={<StatsSkeleton />}>
        <DashboardStats />
      </Suspense>
    </main>
  );
}
\`\`\`

## 3. Optimizing Tailwind CSS Bundle Footprints

With Tailwind CSS v4, styling variables are computed directly in CSS. We can reduce our runtime JS layout shifts by avoiding dynamic classes and relying on CSS variables mapped to state props.

## Key Outcomes

- **Lighthouse Performance Score**: Increased from 74 to 98.
- **First Contentful Paint (FCP)**: Reduced to 450ms.
- **Time to Interactive (TTI)**: Optimized by deferring non-critical scripts.
`
  },
  {
    slug: "llm-integration-recruiting-workflows",
    title: "Building Subhux HireUp: Integrating Generative AI in High-Throughput Recruiting Platforms",
    excerpt: "Insights into architecting structured proctoring, WebRTC streaming, and LLM rating engines using Google Gemini models.",
    date: "April 12, 2026",
    category: "AI & Engineering",
    readTime: "8 min read",
    content: `
# Building Subhux HireUp: AI in Recruiting

At Subhx Infotech, we engineered an automatic applicant evaluation platform. The core goal was to conduct technical screening rounds asynchronously while maintaining proctoring metrics.

## Architecture Pipeline

The system is split into three core phases:

1. **Client Capture**: WebRTC media recording captures the user's screen and webcam.
2. **Asynchronous Upload**: Media streams are uploaded directly to secure storage endpoints.
3. **LLM Structured Audit**: Transcripts and activity logs are parsed through Google Gemini models.

\`\`\`
[Candidate UI] --(WebRTC)--> [S3 Upload] --> [Redis Queue]
                                                    |
                                             [Worker Nodes]
                                                    |
                                            [Gemini Assessment]
\`\`\`

## Optimizing LLM Evaluations

To get structured, non-biased assessments, we avoid open-ended prompts. Instead, we use Gemini's structured response schema feature:

\`\`\`typescript
const evaluationSchema = {
  type: "object",
  properties: {
    technicalScore: { type: "number" },
    communicationScore: { type: "number" },
    reasoningExplanation: { type: "string" },
    recommendedQuestions: { type: "array", items: { type: "string" } }
  },
  required: ["technicalScore", "communicationScore", "reasoningExplanation"]
};
\`\`\`

## Preventing Proctoring Cheats

To prevent browser-switching and multi-screen cheating, we listen to focus events:

\`\`\`typescript
window.addEventListener("blur", () => {
  logSecurityIncident("Candidate switched windows / tab");
});
\`\`\`

This combination of client-side tracking and AI-driven analysis successfully cut overall technical filtering workloads by 75%.
`
  },
  {
    slug: "concurrency-crypto-kyc",
    title: "Mitigating Transaction Race Conditions in High-Volume KYC Systems",
    excerpt: "How we implemented database lock mechanisms and transaction isolation boundaries to guarantee data integrity in CoinsPe.",
    date: "January 08, 2026",
    category: "Backend & Systems",
    readTime: "5 min read",
    content: `
# Mitigating Transaction Race Conditions in High-Volume KYC Systems

In financial applications like CoinsPe, multiple services might write to the same account record simultaneously (e.g., automated KYC updates, manual admin overrides, and webhook events). Without database isolation, you face state corruption.

## The Challenge

If an admin approves an account while the automatic background check is executing a write, they might overwrite each other's changes.

## The Solution: Optimistic Locking with Postgres

We implemented optimistic locking using a version indicator in the table schema:

\`\`\`sql
CREATE TABLE user_kyc (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    status VARCHAR(50),
    version INT DEFAULT 1
);
\`\`\`

When executing updates:

\`\`\`typescript
const result = await db.query(
  "UPDATE user_kyc SET status = $1, version = version + 1 WHERE id = $2 AND version = $3",
  [newStatus, kycId, currentVersion]
);

if (result.rowCount === 0) {
  throw new Error("Concurrency Conflict: Record was modified by another request.");
}
\`\`\`

## When to use Pessimistic Locks

For crypto asset balances where deductions must be immediate and atomic, we select for updates explicitly:

\`\`\`sql
BEGIN;
SELECT balance FROM user_wallets WHERE id = 12 FOR UPDATE;
-- Execute transaction logic...
UPDATE user_wallets SET balance = balance - 100 WHERE id = 12;
COMMIT;
\`\`\`

This locks the row from reads/writes of other transactions until the commit is resolved.
`
  }
];
