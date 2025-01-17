import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.linkedin.com/in/chonprakun-panusetgul-7a1170250/"),
  title: "Aong Chonprakun - Web Developer Portfolio",
  description:
    "Developer Portfolio of Frontend from thailand 5+ years of expertise. middle Software Engineer. Specializing web application and technologies.",
  keywords: [
    "Developer",
    "Portfolio",
    "Next.js",
    "Nuxt.js",
    "React",
    "Vue",
    "PHP",
    "Line Developer",
  ],
  openGraph: {
    title: "Aong Chonprakun - Web Developer Portfolio",
    description:
      "Frontend & Mobile App Developer from Pakistan with 3+ years of expertise. Senior Software Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
    images: "/OpenGraph.jpg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Aong Chonprakun",
              jobTitle: "Software Engineer",
              url: "https://google.com",
              sameAs: [
                "https://www.linkedin.com/in/chonprakun-panusetgul-7a1170250/",
                "https://github.com/Lumworker",
              ],
            }),
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PRIVATE_GTID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-${process.env.NEXT_PRIVATE_GTID}');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
