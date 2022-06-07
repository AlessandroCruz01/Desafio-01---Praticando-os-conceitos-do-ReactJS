import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://number8.com/wp-content/uploads/2021/01/2021-software-development-salary-trends.png"
			/>

			<div className={styles.profile}>
				<img
					className={styles.avatar}
					src="https://avatars.githubusercontent.com/u/62727627?v=4"
				/>
				<strong>Nome do usuario</strong>
				<span>Cargo</span>
			</div>

			<footer className={styles.footer}>
				<a href="#">
					{" "}
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
