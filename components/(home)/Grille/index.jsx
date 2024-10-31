'use client'
import Link from 'next/link'
import styles from './Grille.module.css'
import Contact from '@components/Contact'
import Projects from '@components/ui/Projects'

const Grille = () => {

	return (
			<article className={styles.grille}>

				<section className={styles.greet}>
					<h2>Hi!</h2>
					<p>I'm Julius</p>
				</section>

				<section className={styles.resum}>
					<h4>My Résumé</h4>
					<div>
						<Link href="https://cv.jccesar.com" alt="Julius Cinco Cesar's résumé">
							<i className='icon-clipboard'></i>
						</Link>
					</div>
				</section>

				<section className={styles.blogs}>
					<div>
						<i className="icon-apache"></i>
						<Link href="https://www.jccesar.com/blog/workflow" alt="Julius Cinco Cesar's résumé">
							How To Write A Responsive Website
						</Link>
					</div>
				</section>

				<section className={styles.proje}>
					<h4>Projects</h4>
					<Projects />
				</section>

				<section className={styles.about}>
					<h4>More About Me</h4>
				</section>

				<section className={styles.works}>
					<h4>Works</h4>
				</section>

				<section className={styles.tools}>
					<h4>Tools</h4>
					<div>
						<i className="icon-linux"></i>
						<i className="icon-html"></i>
						<i className="icon-css"></i>
						<i className="icon-javascript"></i>
						<i className="icon-nginx"></i>
						<i className="icon-apache"></i>
						<i className="icon-adobephotoshop"></i>
						<i className="icon-adobeillustrator"></i>
						<i className="icon-adobepremiere"></i>
						<i className="icon-terminal"></i>
						<i className="icon-git"></i>
						<i className="icon-github"></i>
					</div>
				</section>

				<section className={styles.socia}>
					<p>@knznsmn</p>
					<div>
						<Link href="https://www.facebook.com/knznsmn" target='_blank'><i className="icon-facebook"></i></Link>
						<Link href="https://www.linkedin.com/in/knznsmn" alt="LinkedIn profile" target="_blank"><i className="icon-linkedin"></i></Link>
						<Link href="https://www.instagram.com/knznsmn" alt="Instagram profile" target="_blank"><i className="icon-instagram"></i></Link>
						<Link href="https://www.twitter.com/knznsmn" alt="X profile" target="_blank"><i className="icon-twitter"></i></Link>
					</div>
				</section>

				<section className={styles.conta}>
					<p>
						Mail me!
					</p>
					<Contact />
				</section>

			</article>
	)
}

export default Grille