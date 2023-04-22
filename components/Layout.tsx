import { AppShell } from "@mantine/core"

// Components
import Header from "./App/Header"
import React from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppShell header={<Header />}>
            {children}
        </AppShell>
    )
}

export default Layout