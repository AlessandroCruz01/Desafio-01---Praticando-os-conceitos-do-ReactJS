import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
export function Comment({content, onDeleteComment}) {

	const [likeCount, setLikeCount] = useState(0);

	function handleDeleteComment(){
		onDeleteComment(content)
	}

	function handleLikeComment(){
		setLikeCount(likeCount+1);
	}

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

						<button onClick={handleDeleteComment} title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp />
						Curtir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
