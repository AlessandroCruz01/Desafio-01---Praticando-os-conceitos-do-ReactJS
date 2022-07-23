import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
function App() {
	return (
		<div className="App">
			<Header />

			<div className={styles.wrapper}>
				<Sidebar>sidebar</Sidebar>

				<main>
					<Post />
					<Post />
				</main>
			</div>
		</div>
	);
}

export default App;
