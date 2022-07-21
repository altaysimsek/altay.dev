import React from 'react'

const Header = () => {
    return (
        <header className='flex justify-between items-center container mx-auto text-white sm:mb-8 px-4 sm:px-16 py-3'>
            <a href='http://altay.dev'>
                <img src='/simseklogo.png' className='p-3' alt="Simsek Clan" width="60px" />
            </a>

        </header>
    )
}

export default Header