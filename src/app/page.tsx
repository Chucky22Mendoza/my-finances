import Navbar from '@/components/Navbar';
import ListView from '@/components/ListView';
import Menu from '@/components/Menu';
import styles from './page.module.css';
import Form from '@/components/Form';

function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <ListView />
        {/* <Menu /> */}
        <Form />
      </div>
    </main>
  );
}

export default Home;
