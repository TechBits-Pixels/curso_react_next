import Link from 'next/link'
import classes from './Footer.module.css'
import pressStart2P from '@/pages/_app'

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer__container}>
                <div className={classes.footer__logo}>
                    <Link className={`${classes.Link} ${pressStart2P.className}`} href="/">
                        Technobits & Pixels
                    </Link>
                </div>
                <div className={classes.footer__links}>
                    <Link className={classes.subLink} href="/about">
                        About
                    </Link>
                    <Link className={classes.subLink} href="/contact">
                        Contact
                    </Link>
                    <Link className={classes.subLink} href="/privacy">
                        Privacy
                    </Link>
                </div>
            </div>
        </footer>
    )
}