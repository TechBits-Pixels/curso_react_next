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
      <div className={classes.toggle} onClick={() => setIsOpen(!isOpen)}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
      <ul className={isOpen ? classes.navLinksHidden : classes.navLinks}>
        <Link className={classes.linea} href="/about">
          Acerca de
        </Link>
        <Link className={classes.linea} href="/contact">
          Contacto
        </Link>
      </ul>
    </div>
  )
}