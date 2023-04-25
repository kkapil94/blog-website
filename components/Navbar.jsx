import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <ul className="flex justify-center space-x-5 h-20 items-center text-[#f8f6f5] font-extrabold">
          <Link href={"/"}>
            <li className="hover:underline hover:decoration-[#f8f6f5] underline-offset-4">
              Home
            </li>
          </Link>
          <Link href={"/blogs"}>
            <li className="hover:underline hover:decoration-[#f8f6f5] underline-offset-4">
              Blogs
            </li>
          </Link>
          <Link href={"/about"}>
            <li className="hover:underline hover:decoration-[#f8f6f5] underline-offset-4">
              About
            </li>
          </Link>
          <Link href={"/contact"}>
            <li className="hover:underline hover:decoration-[#f8f6f5] underline-offset-4">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
  )
}
