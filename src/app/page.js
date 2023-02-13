import { Inter } from '@next/font/google'
import styles from './page.module.css'
import NavBar from "./components/NavBar";
import SectionHero from "./components/SectionHero";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <SectionHero />
    </main>
  )
}
