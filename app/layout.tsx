"use client"

import { Provider } from "./provider"
import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <ThemeProvider attribute="class">
                    <Provider>{children}</Provider>
                </ThemeProvider>
            </body>
        </html>
    )
}
