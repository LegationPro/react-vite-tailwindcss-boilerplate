import React from "react"
import Header from "./Header"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <main className="flex flex-col flex-1 h-screen">
            <Header />
            {children}
        </main>
    )
}

export default Layout