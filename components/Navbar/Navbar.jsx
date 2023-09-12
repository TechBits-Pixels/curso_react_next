import Link from 'next/link'
import classes from './Navbar.module.css'
import { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import pressStart2P from '@/pages/_app'

export default function Navbar() {

  const [ isOpen, setIsOpen ] = useState(false)
  
  return (
    <div className={classes.navBar}>
      <Link href="/" className={`${classes.logo} ${pressStart2P.className}`}>
        Technobits & Pixels
      </Link>
      <div className={classes.menu} onClick={() => setIsOpen(!isOpen)}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
      <ul className={isOpen ? classes.linksOcultos : classes.links}>
        <Link className={classes.link} href="/about">
          Acerca de
        </Link>
        <Link className={classes.link} href="/contact">
          Contacto
        </Link>
        <Link className={classes.link} href="/publish">
          Publica
        </Link>
      </ul>
    </div>
  )
}