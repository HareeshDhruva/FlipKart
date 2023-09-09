import React from 'react'
import { footerLinks } from '../../context/Data'



const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100 bg-[#172337]'>
    <div className='flex max-md:flex-col flex-wrap gap-5 sm:px-16 px-6 py-10 '>
      <div className='flex gap-10'>
        {footerLinks.map((link) => (
          <div key={link.title}>
            <h3 className='font-bold'>{link.title}</h3>
            {link.links.map((item) =>(
                <li  
                key={item.title} 
                href={item.url}
                className='text-white flex'
                >
                  {item.title}
                </li>
              ))}
          </div>
        ))}
      </div>

      <hr />

      <div className='flex gap-10'>
        <div className='text-white'>
        <span className='text-black font-bold'>Mail Us:</span><br />
        Flipkart Internet Private Limited, <br />
        Buildings Alyssa, Begonia & <br />
        Clove Embassy Tech Village,<br />
        Outer Ring Road, Devarabeesanahalli Village,<br />
        Bengaluru, 560103,<br />
        Karnataka, Indiabr <br />
        </div>

        <div className='text-white'>
        <span className='text-black font-bold'>Registered Office Address: </span> <br />
        Flipkart Internet Private Limited, <br />
        Buildings Alyssa, Begonia & <br />
        Clove Embassy Tech Village, <br />
        Outer Ring Road, Devarabeesanahalli Village, <br />
        Bengaluru, 560103, <br />
        Karnataka, India <br />
        CIN : U51109KA2012PTC066107 <br />
        Telephone: 044-45614700 <br />
        </div>
      </div>
    </div>
    <div className='flex justify-end items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <div>
        <p >
          @2023 flipkart. All Rights Reserved
        </p>

        <ul
        href='/'
        className='text-white'
        >
          Privacy Policy
        </ul>

        <ul
        href='/'
        className='text-white'
        >
          Terms of use
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer
