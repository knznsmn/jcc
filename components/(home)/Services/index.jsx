import styles from './Services.module.css'

const Services = () => {
  return (
    <ul className={styles.services}>
      <li><a href="https://www.github.com/knznsmn/jcc"><i className="icon-github"></i> Source</a></li>
      <li><a href="/notes"><i className="icon-pencil"></i> Notes</a></li>
    </ul>
  )
}

export default Services
