'use client'
import Link from 'next/link'
import {useState} from "react";
import styles from './Grille.module.css'
import Contact from '@components/Contact'
import Projects from '@components/ui/Projects'

const Grille = () => {
	const [text, setText] = useState('A project in mind? Mail me!');

    const handleClick = () => {

      const email = 'mail@jccesar.com';
      navigator.clipboard.writeText(email).then(() => {
        
        setText('Copied to clipboard!');
      }).catch(err => {
      console.error('Failed to copy email: ', err);
      });
    }

	return (
			<article className={styles.grille}>

				<section className={styles.greet}>
					<h2>Hi !</h2>
					<p>—I'm Julius</p>
				</section>

				<section className={styles.resum}>
					<Link href="../fichiers/Resume-Julius-Cinco-Cesar.pdf" alt="Julius Cinco Cesar's résumé" target="_blank">
						<i className='icon-cv'></i>
					</Link>
					<Link href="#" alt="Julius C. Cesar's online résumé" target="_blank">
						<i className='icon-web'></i>
					</Link>
					<Link href="/" alt="Workplace and Flow" target="_blank">
						<i className='icon-works'></i>
					</Link>
				</section>

				<section className={styles.blogs}>
					<Link href="/" alt="Julius Cinco Cesar's résumé">
						<blockquote>How I Write A Responsive Website</blockquote>
						<i className="icon-devices"></i>
					</Link>
				</section>

				<section className={styles.proje}>
					<Projects />
				</section>

				<section className={styles.about}>
					<h4>More About Me</h4>
					<p>
						I’m currently working in hospitality and studying CS. I’m also exploring Godot for fun.
					</p>
				</section>

				<section className={styles.works}>
					<h4>Works</h4>
					<div>
						<div>
							<Link href="/skills/design" alt="Design"><h5>Design</h5></Link>
						</div>
						<div>
							<Link href="/skills/develop" alt="Develop"><h5>Develop</h5></Link>
						</div>
						<div>
							<Link href="/skills/deploy" alt="Deploy"><h5>Deploy</h5></Link>
						</div>
					</div>
				</section>

				<section className={styles.tools}>
					<h4>Tools</h4>
					<div>
						<i className="icon-linux"></i>
						<i className="icon-html"></i>
						<i className="icon-css"></i>
						<i className="icon-javascript"></i>
						<i className="icon-nginx"></i>
						<i className="icon-adobephotoshop"></i>
						<i className="icon-adobeillustrator"></i>
						<i className="icon-adobeaftereffects"></i>
						<i className="icon-terminal"></i>
						<i className="icon-git"></i>
						<i className="icon-github"></i>
						<i className="icon-sublimetext"></i>
					</div>
				</section>

				<section className={styles.socia}>
					<p>@knznsmn</p>
					<div>
						{/*<Link href="https://www.facebook.com/knznsmn" target='_blank'><i className="icon-facebook"></i></Link>*/}
						<Link href="https://www.linkedin.com/in/knznsmn" alt="LinkedIn profile" target="_blank"><i className="icon-linkedin"></i></Link>
						<Link href="https://www.instagram.com/knznsmn" alt="Instagram profile" target="_blank"><i className="icon-instagram"></i></Link>
						<Link href="https://www.twitter.com/knznsmn" alt="X profile" target="_blank"><i className="icon-twitter"></i></Link>
					</div>
				</section>

				<section className={styles.conta}>
					<p>
						{text}
					</p>
					<i className="icon-mail" onClick={handleClick}></i>
				</section>

			</article>
	)
}

export default Grille