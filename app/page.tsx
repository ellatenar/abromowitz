import { attributes, react as HomeContent } from "../content/about.md"
import styles from "./page.module.css"
import { karrik } from "@/app/fonts"

const Home = () => {
  let { title } = attributes
  return (
    <main className={styles.home}>
      <h1 className={karrik.className}>{title}</h1>
      <HomeContent />
      <ul></ul>
    </main>
  )
}

export default Home
