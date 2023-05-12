import Link from 'next/link'
import React from 'react'

export const NavBarTemp = () => {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/test">Test</Link>
            </li>
            <li>
                <Link href="/ChatComponent">ChatComponent</Link>
            </li>
            <li>
                <Link href="/testRender">testRender</Link>
            </li>
        </ul>
    )

}
