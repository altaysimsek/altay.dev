import React from 'react'

const Contact = () => {
    return (
        <>
            <a className="mr-3 w-auto h-auto" href="https://twitter.com/altitans" target="_blank" rel="noreferrer" >
                <i className='bx bxl-twitter text-3xl' ></i>
            </a>
            <a href="https://github.com/altaysimsek" className="mr-3" target="_blank" rel="noreferrer">
                <i className='bx bxl-github text-3xl' ></i>
            </a>
            <a href="https://www.linkedin.com/in/altaysimsek/" className="mr-3" target="_blank" rel="noreferrer">
                <i className='bx bxl-linkedin-square text-3xl' ></i>
            </a>

            <a href="https://medium.com/@altaysimsek16" className="mr-3" target="_blank" rel="noreferrer">
                <i className='bx bxl-medium text-3xl'></i>
            </a>
            <a href="mailto:altaysimsek16@gmail.com" target="_blank" rel="noreferrer">
                <i className='bx bxs-envelope text-3xl' ></i>
            </a>
        </>
    )
}

export default Contact