import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div>
        <nav>
                <div className='logo'>
                    <Link href='/'>logo</Link>
                </div>
                <div className='link'>
                    <Link href='/'>Home</Link>
                    <Link href='/info'>Info</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/contract'>Contract</Link>
                </div>
                <div className='login'>
                    <Link href='/login'>Login</Link>
                </div>
        </nav>
            <div className="box">text</div>
    </div>
  )
}

export default Navbar