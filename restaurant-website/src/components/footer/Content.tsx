import Link from 'next/link'
import React from 'react';
import styles from "./style.module.scss";

function Content() {
  return (
    <footer className={styles.footer}>
<div className="max-w-6xl mx-auto px-4">
  <div className="flex flex-col md:flex-row justify-between items-center">
    {/* Logo and Description */}
    <div className="mb-6 md:mb-0 text-center md:text-left block justify-center items-center gap-4">
      <h2 className="text-2xl font-bold pt-4">Coffee Shop</h2>
      <p className="text-gray-400 flex justify-center items-center pt-2">Where every cup is brewed with passion.</p>
    </div>

    {/* Navigation Links */}
    <div className="mb-6 md:mb-0">
      {/* <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <span className="cursor-pointer hover:text-yellow-600">Home</span>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <span className="cursor-pointer hover:text-yellow-600">About Us</span>
          </Link>
        </li>
        <li>
          <Link href="#menu">
            <span className="cursor-pointer hover:text-yellow-600">Menu</span>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <span className="cursor-pointer hover:text-yellow-600">Contact</span>
          </Link>
        </li>
      </ul> */}
    </div>

    {/* Social Media Links */}
    {/* <div className="flex space-x-4">
      <Link href="https://facebook.com">
        <FaFacebook size={24} className="text-yellow-400 hover:text-yellow-600 cursor-pointer" />
      </Link>
      <Link href="https://twitter.com">
        <FaTwitter size={24} className="text-yellow-400 hover:text-yellow-600 cursor-pointer" />
      </Link>
      <Link href="https://instagram.com">
        <FaInstagram size={24} className="text-yellow-400 hover:text-yellow-600 cursor-pointer" />
      </Link>
      <Link href="https://linkedin.com">
        <FaLinkedin size={24} className="text-yellow-400 hover:text-yellow-600 cursor-pointer" />
      </Link>
    </div> */}
  </div>

  {/* Footer Bottom */}
  {/* <div className="mt-8 text-center text-gray-400">
    <p>&copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.</p>
  </div> */}
</div>
</footer>
  )
}

export default Content
