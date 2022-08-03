import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";

export function Post({ author, publishedAt }) {
	// const publisheDateFormate = new Intl.DateTimeFormat("pt-BR", {
	// 	day: "2-digit",
	// 	month: "long",
	// 	hour: "2-digit",
	// 	minute: "2-digit",
	// }).format(publishedAt);

	const publishedDateFormated = format(
		publishedAt,
		"d 'de' LLLL 'ás' HH:mm'h'",
		{ locale: ptBR }
	); //String de aspas duplas obrigatorio

	const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time
					title={publishedDateFormated}
					dateTime={publishedAt.toISOString()}
				>
					{publishedDateRelativeNow}
				</time>
			</header>
			<div className={styles.content}></div>

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
