import React from 'react'

const Page: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    return (
        <div className={`h-full ${className || ""}`}>{children}</div>
    )
}

export default Page