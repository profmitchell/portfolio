import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mitchellcohen.dev'),
  title: {
    default: 'Mitchell Cohen - Music Producer & Developer',
    template: '%s | Mitchell Cohen'
  },
  description: 'Portfolio of Mitchell Cohen - Music Producer, Developer, and Visual Artist',
  keywords: ['music production', 'web development', 'visual art', 'Mitchell Cohen'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mitchellcohen.dev',
    title: 'Mitchell Cohen - Music Producer & Developer',
    description: 'Portfolio of Mitchell Cohen - Music Producer, Developer, and Visual Artist',
    siteName: 'Mitchell Cohen'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mitchell Cohen - Music Producer & Developer',
    description: 'Portfolio of Mitchell Cohen - Music Producer, Developer, and Visual Artist',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          rel="preload" 
          href="/fonts/inter.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}