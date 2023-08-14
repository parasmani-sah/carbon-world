import Image from 'next/image'
import styles from './footer.module.css'
import logo from '../../../public/logo-cw.png'
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const footer = () => {
  return (
    <div>
      <div>
        <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-16">
          <div className="p-5 ">
            <ul>
              <div className={styles.logo}>
                <Image src={logo} width={160} height={160} alt='this is logo'/>
              </div>
              <p className="text-gray-500 text-md pb-2">
                You can be part of the solution. 
              </p>
              <div className="flex gap-6 pb-12 pt-10">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
        </div>
              
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">FAQ</p>
              <Link href="/">
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                  Calculator
                </li>
              </Link>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Carbon Footprint
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Technology
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Methodology
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Calculate
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Information
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                About Us
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Contact
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Blogs & News
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Contact
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Support Portals
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                List Of Charges
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Downloads & Resources
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Videos
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-300"></hr>
      <div className="w-full flex md:flex-row flex-col justify-around p-6 bg-gray-50">
        <p className=" text-gray-600 font-semibold">
          © 2023-2024 All rights reserved carbon world | Parasmani Sah | Sumit Shah
        </p>
      </div>
    </div>
  )
}

export default footer