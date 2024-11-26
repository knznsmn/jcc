import Image from 'next/image'
import logo from '@public/knznsmn.svg'
import Link from 'next/link'
import styles from './Nav.module.css'

const Nav = () => {
 
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Link href='/' className={styles.knznsmn}>
            <i className='icon-knznsmn' alt='knznsmn logo'>
              <span className='path1'></span>
              <span className='path2'></span>
              <span className='path3'></span>
              <span className='path4'></span>
            </i>
          </Link>
          <Link href='/' className={styles.nom}>
            Julius Cinco Cesar
          </Link>
        </div>
        
        <ul className={styles.menu}>
          <Link href='/portfolio'><li>Portfolio</li></Link>
          <Link href='#'><li>Blog</li></Link>
          <Link href='/about'><li>About</li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
