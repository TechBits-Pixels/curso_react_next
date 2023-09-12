import Link from 'next/link'
import classes from './Footer.module.css'
import pressStart2P from '@/pages/_app'

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={`${classes.logo} ${pressStart2P.className}`}>
                    <Link href="/">
                        Technobits & Pixels
                    </Link>
                </div>
                <div className={classes.links}>
                    <Link className={classes.link} href="/about">
                        Acerca de
                    </Link>
                    <Link className={classes.link} href="/contact">
                        Contacto
                    </Link>
                    <Link className={classes.link} href="/privacy">
                        Publica
                    </Link>
                </div>
            </div>
        </footer>
    )
}