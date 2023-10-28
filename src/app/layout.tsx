import "@/app/styles/globals.scss"
import { Metadata } from "next"
import { siteConfig } from "../../config/site"
import { Inter, Lexend_Deca, Manrope } from 'next/font/google';
import { ThemeProvider } from "@/components/core/ThemeProvider";
import { SiteHeader } from "@/components/SiteHeader";
const inter = Inter({ subsets: ['latin'] });
import { Toaster } from 'sonner';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  author: 'Remco Stoeten',
  url: siteConfig.url,
  type: 'CSS bezier curve easing showcase',

  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    site_name: siteConfig.name,
    image: {
      url: `${siteConfig.url}/images/og-image.jpg`,
      alt: "Your Site's Open Graph Image",
    },
    profile: {
      username: 'remco-stoeten',
    },
  },

  linkedinProfile: 'https://www.linkedin.com/in/remco-stoeten/',
  githubProfile: 'https://github.com/remcostoeten',
  gitlabProfile: 'https://gitlab.com/remcostoeten',

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,

    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [
    {
      name: 'Remco Stoeten',
      url: 'https://remcostoeten.com',
    },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="h-max min-h-screen dark:[#09090B] dark:text-zinc-300 font-sans antialiased inter">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
          </ThemeProvider>
          <Toaster />
          <Analytics/>
        </body>
      </html >
    </>
  )
}