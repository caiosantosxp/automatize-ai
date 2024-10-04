import localFont from 'next/font/local'
import './globals.css'

import { Sidebar } from '@/components/sidebar/Sidebar'
import { ThemeProvider } from '@/components/theme.provider/ThemeProvider'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
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
          <div className="flex min-h-screen flex-row">
            {/* Menu Lateral */}
            <aside className="bg-gradient-to-t from-blue-700 to-blue-500">
              <Sidebar />
            </aside>

            {/* Layout Principal */}
            <div className="flex w-[1680px] flex-col">
              {/* Conteúdo Principal */}
              <main className="h-[calc(100vh-5rem)] flex-grow overflow-y-auto bg-background">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
