import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/signup">signup</Link>
            <Link href="/dashboard">dashboard</Link>
        </div>
    )
}

export default Navbar