import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css'
import Image from "next/image";
import logo from '../../../public/logo-cw.png'
import flag from '../../../public/Nepal-Flag.gif'


const links = [
  {
    id: 1,
    title: "Calculate",
    url:"/calculate/carbon-calculator"
  },
  {
    id: 2,
    title: "Information",
    url: "/information"
  },
  {
    id: 3,
    title: "About Us",
    url:"/about-us/about"
  },
  {
    id: 4,
    title:"Contact",
    url: "/contact"
  }
]

const Navbar = () => {
  return (
    <div>

      <div className={styles.navbar}>
        <div>
          <Link href='/'>
            <Image src={logo} width={150} height={"auto"} alt='this is logo'  priority={true} />
          </Link>
        </div>
        
        <div className={styles.flag}>
          <Image src={flag} width={25} alt='this logo'  priority={true} />
        </div>
        
      </div>
      

      <div className={styles.navbarstyle}>

        <div className={styles.navlinks}>
          {links.map((link) => (
            <Link key={link.id} href={link.url}>{link.title}</Link>
          ))}
        </div>

        <div className={styles.loginLink}>
            <Link href='/auth/login'>Login</Link>
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;