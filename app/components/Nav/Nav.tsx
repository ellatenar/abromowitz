"use client"

import * as React from "react"
import Link from "next/link"
import styles from "./Nav.module.css"
import { usePathname } from "next/navigation"
import classNames from "classnames"
import { useEffect, useState } from "react"

const Links = [
  { title: "home", href: "/" },
  { title: "writing", href: "/writing" },
  { title: "marketing", href: "marketing" },
  { title: "game design", href: "/game-design" },
  { title: "video", href: "/video" },
  { title: "about", href: "/about" },
  { title: "contact", href: "/contact" },
]

export type LinkType = keyof typeof Links

function Nav() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    setOpenMenu(false)
  }, [pathname])

  return (
    <>
      <nav
        className={classNames(styles.nav, openMenu && styles.visible)}
        role="navigation"
        aria-label="main navigation"
      >
        {Links.map((link, i) => (
          <Link
            href={link.href}
            key={i}
            className={classNames(pathname === link.href && styles.active)}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <button
        className={classNames(
          styles.openMobileNav,
          openMenu && styles.openMobileNavExpanded
        )}
        onClick={() => setOpenMenu((b) => !b)}
      >
        ^
      </button>
    </>
  )
}

export default Nav
