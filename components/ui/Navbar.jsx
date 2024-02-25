import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex justify-evenly w-screen bg-slate-800 text-white">
      <Link href="/" className="bg-gray-700 p-10">
        Til startside
      </Link>
      <Link href="/auth/login" className="bg-gray-700 p-10 text-white">
        Logg inn
      </Link>
      <Link href="/auth/register" className="bg-gray-700 p-10 text-white">
        Registrer ny bruker
      </Link>
    </nav>
  )
}
