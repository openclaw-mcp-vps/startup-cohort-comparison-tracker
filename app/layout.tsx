import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cohort Tracker — Compare Your Startup Metrics",
  description: "Track revenue, churn, CAC vs anonymous cohort data from similar startups in your industry and stage."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5d5d3f9d-7c87-4a23-82e1-00d28e9a4f9c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
