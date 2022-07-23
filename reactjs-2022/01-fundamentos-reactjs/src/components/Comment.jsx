import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
export function Comment() {
	return (
		<div className={styles.comment}>
			<Avatar
				hasBorder={false}
				src={"https://github.com/AlessandroCruz01.png"}
			/>

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Alessandro Cruz</strong>
							<time title="11 de maio as 8 e 14" dateTime="2022-05-11 08:14:00">
								Cerca de 1h atrás
							</time>
						</div>

						<button title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>

					<p>Muito Bom parabens</p>
				</div>

				<footer>
					<button>
						<ThumbsUp />
						Curtir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}