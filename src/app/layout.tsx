import localFont from 'next/font/local'
import './globals.css'

import { Sidebar } from '@/components/sidebar/Sidebar'
import { ThemeProvider } from '@/components/theme.provider/ThemeProvider'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-',
  weight: '100 900',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            {/* Menu Lateral */}
            <aside className="w-64 bg-gradient-to-t from-emerald-800 to-emerald-600">
              <Sidebar />
            </aside>

            {/* Layout Principal */}
            <div className="flex w-full flex-col">
              {/* Conteúdo Principal */}

              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
