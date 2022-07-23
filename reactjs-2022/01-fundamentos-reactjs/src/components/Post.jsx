import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src="https://avatars.githubusercontent.com/u/62727627?v=4" />
					<div className={styles.authorInfo}>
						<strong>Alessandro Cruz</strong>
						<span>Web Developer</span>
					</div>
				</div>

				<time title="11 de maio as 8 e 14" dateTime="2022-05-11 08:14:00">
					Publicado há 1h
				</time>
			</header>
			<div className={styles.content}>
				<p>Fala galeraa 👋</p>
				<p>
					Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
					no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
				</p>
				<p>
					<a href="#">jane.design/doctorcare</a>{" "}
				</p>
				<p>
					{" "}
					<a href="#">#novoprojeto </a> <a href="#"> #nlw </a>{" "}
					<a href="#"> #rocketseat</a>{" "}
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu comentario</strong>

				<textarea placeholder="Deixe um comentário:" />

				<footer>
					<button type="submit">Comentar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	);
}