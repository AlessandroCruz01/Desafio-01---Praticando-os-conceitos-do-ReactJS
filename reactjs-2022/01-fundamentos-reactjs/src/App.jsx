import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";
function App() {
	return (
		<div className="App">
			<Header />

			<div className={styles.wrapper}>
				<Sidebar>sidebar</Sidebar>

				<main></main>
			</div>
		</div>
	);
}

export default App;
