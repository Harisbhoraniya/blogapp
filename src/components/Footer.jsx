import React from 'react'
import { assets, footer_data } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-black/3'>
        <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>

        <div>
            <img src={assets.logo} alt="logo" className='w-32 sm:w-44' />
            <p className='max-w-[410px] mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti asperiores quod error sapiente, reiciendis, a quibusdam nisi magnam, molestiae necessitatibus minima possimus consequatur officia pariatur optio quo laudantium iure cupiditate.</p>
        </div>

        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
            {footer_data.map((section, index)=> (
                <div key={index}>
                    <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
                    <ul className='text-sm space-y-1'>
                        {section.links.map((Link, i)=> (
                            <li key={i}>
                                <a href="#" className='hover:underline transition'>{Link}</a>

                            </li>
                        ))}
                    </ul>

                </div>
            ))}
        </div>

        </div>
        <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>Creating by Haris Bhoraniya</p>

    </div>
  )
}

export default Footer 