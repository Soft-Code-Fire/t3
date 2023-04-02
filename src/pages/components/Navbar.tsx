import Link from 'next/link'
import { SignedOut, SignedIn } from '@clerk/nextjs'
import Header from './UserButton'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
        <header className="bg-white shadow dark:bg-gray-800">
            <nav className="container flex items-center justify-center p-5 mx-auto text-gray-600 capitalize dark:text-gray-300">
                <SignedIn>
                    <Link href="/" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</Link>

                    <Link href="/about" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">About</Link>

                    <Link href="/blogs" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Blog</Link>

                    <Header></Header>
                </SignedIn>

                <SignedOut>
                    <Link href="/" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</Link>
                    <Link href="/about" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">About</Link>
                    <Link href="/blogs" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Blog</Link>
                    <Link href='/sign-up' className='border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'>Sign Up</Link>
                    <Link href='/sign-in' className='border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'>Sign In</Link>
                </SignedOut>
            </nav>
        </header>
    </>
  )
}

export default Navbar
