import styles from './Grille.module.css'
import Contact from '@components/Contact'

const Grille = () => {

	return (
			<article className={styles.grille}>
				<section className={styles.greet}>
					<h2>Hi!</h2>
					<p>I'm Julius</p>
				</section>
				<section className={styles.resum}>
					<h4>My résumé</h4>
				</section>
				<section className={styles.proje}>
					<h3>Projects</h3>
				</section>
				<section className={styles.about}>
					<h4>More About Me</h4>
				</section>
				<section className={styles.works}>
					<h4>Works</h4>
				</section>
				<section className={styles.tools}>
					<h4>Tools</h4>
				</section>
				<section className={styles.socia}>

				</section>
				<section className={styles.conta}>
					<p>
						Have a project in mind?
					</p>
					<Contact />
				</section>
			</article>
	)
}

export default Grille