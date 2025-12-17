import { JetBrains_Mono, Special_Elite } from "next/font/google";
import "@/style/globals.css";
import contents from "@/data/contents.json";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: contents.website.title || "JCC",
  description: `${contents.author.name} ${contents.website.description}` ||  "Digital concepts and multimedia contents.",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${jetBrainsMono.variable} ${specialElite.variable}`} lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem("theme");
                if (stored === "dark" || stored === "light") {
                  document.documentElement.setAttribute("data-theme", stored);
                  return;
                }
                const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
                document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
