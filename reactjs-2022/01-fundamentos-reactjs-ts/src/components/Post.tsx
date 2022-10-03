import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author {
	name: string;
	role: string;
	avatarUrl: string;
}

interface Content {
	type: 'paragraph' | 'link';
	content: string
}


interface PostProps {
	author: Author;
	publishedAt: Date;
	content: Content[];
}

//Estado: Valores que eu quero que o react monitore
export function Post({ author, publishedAt, content } : PostProps) {

	const [comments, setComments] = useState<string[]>([])
	const [newCommentText, setNewCommentText] = useState('')

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

	function handleCreateNewComment(event : FormEvent){
		event.preventDefault()

		setComments([...comments, newCommentText])
		setNewCommentText('')
	}

	function handleNewCommentChange(event : ChangeEvent<HTMLTextAreaElement>){
		event.target.setCustomValidity('')
		setNewCommentText(event.target.value)
	}

	function handleNewCommentInvalid(event : InvalidEvent<HTMLTextAreaElement>){
		event.target.setCustomValidity('Esse campo é obrigatorio');
	}

	function deleteComment(commentToDelete: string){
		//Imutabilidade
		const commentsWithoutDeleteOne = comments.filter(comment => {
			return comment !== commentToDelete
		})
		
		setComments(commentsWithoutDeleteOne);
	
	}

	const isNewCommentEmpty = newCommentText.length === 0

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl}  />
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
			<div className={styles.content}>
				{
					content.map(line => {
						if(line.type === 'paragraph'){
							return <p key={line.content}>{line.content}</p>
						} else if (line.type === 'link'){
							return <p key={line.content}><a href="#">{line.content}</a></p>
						}
					})
				}

			</div>

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>

				<strong>Deixe seu comentario</strong>

				<textarea 
					name="comment" 
					placeholder="Deixe um comentário:" 
					onChange={handleNewCommentChange}
					value={newCommentText}
					onInvalid={handleNewCommentInvalid}
					required
				/>

				<footer>
					<button type="submit" disabled={isNewCommentEmpty}>Comentar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map(comment => {
					return (
						<Comment 
							key={comment} 
							content={comment} 
							onDeleteComment={deleteComment}
						/>
					)
				})}
			</div>
		</article>
	);
}
