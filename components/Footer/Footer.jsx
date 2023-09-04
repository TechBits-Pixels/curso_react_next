import Link from 'next/link'
import classes from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer__container}>
                <div className={classes.footer__logo}>
                    <Link className={classes.Link} href="/">
                        Technobits & Pixels
                    </Link>
                </div>
                <div className={classes.footer__links}>
                    <Link className={classes.Link1} href="/about">
                        About
                    </Link>
                    <Link className={classes.Link1} href="/contact">
                        Contact
                    </Link>
                    <Link className={classes.Link1} href="/privacy">
                        Privacy
                    </Link>
                </div>
            </div>
        </footer>
    )
}