import { Provider } from "./provider"
import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"

import Head from "./head"

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <Head />
            <body suppressHydrationWarning>
                <ThemeProvider attribute="class">
                    <Provider>{children}</Provider>
                </ThemeProvider>
            </body>
        </html>
    )
}
