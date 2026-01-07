import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";
import { ErrorBoundary } from "@/components/shared/error-boundary";
import { GlobalHeader } from "@/components/layout/header/global-header";
import { MobileNav } from "@/components/layout/navigation/mobile-nav";
import { headers } from "next/headers";
import { User } from "@/types/user.types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HeyBirdy Platform",
  description: "Creator and Affiliate Gamified Ecosystem",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const nonce = headerList.get('x-nonce') || '';
  
  // Get user info from headers set by middleware
  const userId = headerList.get('x-user-id');
  const userRolesStr = headerList.get('x-user-roles');
  
  const user: User | null = userId ? {
    id: userId,
    name: "User", // This would normally come from a database/cache
    email: "",
    roles: userRolesStr ? JSON.parse(userRolesStr) : ['member'],
    points: 0,
    badges: []
  } : null;

  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content={`
            default-src 'self';
            script-src 'self' ${nonce ? `'nonce-${nonce}'` : ''} 'strict-dynamic' ${
              process.env.NODE_ENV === 'development' ? "'unsafe-eval'" : ""
            };
            style-src 'self' 'unsafe-inline';
            img-src 'self' data: https: blob:;
            font-src 'self';
            connect-src 'self' https://api.heybirdy.com wss://api.heybirdy.com;
            frame-src 'self' https://js.stripe.com;
            media-src 'self' https://cdn.heybirdy.com;
          `}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pb-16 md:pb-0`}
      >
        <ErrorBoundary>
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <GlobalHeader user={user} />
              <main className="flex-1">
                {children}
              </main>
              <MobileNav user={user} />
            </div>
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
