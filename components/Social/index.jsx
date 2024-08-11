import Link from 'next/link'
import styles from './Social.module.css'

const Social = () => {
  const href = {
    github: 'https://www.github.com/knznsmn',
    linked: 'https://www.linkedin.com/in/knznsmn',
    instag: 'https://www.instagram.com/knznsmn',
    facebo: 'https://www.github.com/knznsmn',
    twitte: 'https://www.x.com/knznsmn',
  }
  return (
    <div className={styles.social}>
      <Link href={href.github}><i className='icon-github' alt='Github'></i></Link>
      <Link href={href.linked}><i className='icon-linkedin' alt='LinkedIn'></i></Link>
      <Link href={href.instag}><i className='icon-instagram' alt='Instagram'></i></Link>
    </div>
  )
}

export default Social
