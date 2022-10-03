import './Global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Tasks } from './page/Tasks'

function App() {

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <Tasks />
        </main>
      </div>
    </div>
  )
}

export default App
