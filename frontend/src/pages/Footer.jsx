import React from 'react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'; // Import icons from Link library like react-icons
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Company</h2>
          <ul>
            <li><Link href="#">About</Link></li>
            {/* <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Jobs</Link></li>
            <li><Link href="#">Press</Link></li> */}
            <li><Link href="#">Partners</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h2 className="text-2xl  mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white"><FaFacebook /></Link>
            <Link href="#" className="text-gray-400 hover:text-white"><FaInstagram /></Link>
            <Link href="#" className="text-gray-400 hover:text-white"><FaGithub /></Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-6">
        <p className="text-center text-gray-400">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
