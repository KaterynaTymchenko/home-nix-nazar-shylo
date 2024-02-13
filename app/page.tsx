import { MainPanel } from '@/src/components/MainPanel';
import styles from './page.module.css';
import { fetchData } from '@/src/api';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.mainHeader}>Weather Panel</h1> <MainPanel />
    </main>
  );
}
