import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <header className='flex justify-between items-center container mx-auto text-white sm:mb-8 px-4 sm:px-16 py-3'>
            <a href='http://altay.dev' className='p-3'>
                <Image src='/simseklogo.png' alt="Simsek Clan" width="36px" height="36px" />
            </a>

        </header>
    )
}

export default Header