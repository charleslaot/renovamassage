import { Inter } from '@next/font/google'
import styles from './page.module.css'
import SectionHeader from './components/SectionHeader/SectionHeader'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <SectionHeader />
    </main>
  )
}
