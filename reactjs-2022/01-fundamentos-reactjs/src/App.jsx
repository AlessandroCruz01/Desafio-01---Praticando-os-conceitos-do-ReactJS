import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

// author : {avatar_url: "", name:"", role: ""}
// publishedAt: Date
// content: String

//Simular um backend
const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/AlessandroCruz01.png",
			name: "Alessandro Cruz",
			role: "Developer",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz, no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2022-05-03 20:00:00"),
	},

	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/maykbrito.png",
			name: "Mayke Brito",
			role: "Developer",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz, no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2022-07-24 20:00:00"),
	},
];

function App() {
	return (
		<div className="App">
			<Header />

			<div className={styles.wrapper}>
				<Sidebar>sidebar</Sidebar>

				<main>
					{posts.map((post) => (
						<Post
							author={post.author}
							content={post.content}
							publishedAt={post.publishedAt}
						/>
					))}
				</main>
			</div>
		</div>
	);
}

export default App;
