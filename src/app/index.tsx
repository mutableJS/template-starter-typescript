import mutableElement from '@mutablejs/dom';
import styles from './styles.module.scss';
import logoImage from '../assets/logo.svg';

const app = (
	<div class={styles.root}>
		<img src={logoImage} class={styles.logo} alt="logo" />
		<p>
			Edit <code>src/app/index.tsx</code> and save to reload.
		</p>
		<a
			class={styles.link}
			href="https://mutablejs.org"
			target="_blank"
			rel="noopener noreferrer"
		>
			Learn mutableJS
		</a>
	</div>
);

export default app;
